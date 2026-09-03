#!/usr/bin/env python3
"""Сборка всех страниц курса в один автономный HTML-файл.

Зачем: страницы удобно вести по отдельности, но опубликовать можно только
один файл. Сборщик подставляет стили и скрипты внутрь документа, склеивает
страницы в секции и включает переключение между ними на стороне браузера.

Запуск из папки site:

    python build_artifact.py

Результат — ea-part2.html. Это артефакт сборки, а не исходник: он внесён
в .gitignore и правится только через исходные страницы.

Проверка перед выпуском: сборщик отказывается работать, если в исходниках
найдено название коммерческого учебного курса.
"""

import hashlib
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "ea-part2.html")

# Порядок разделов в собранном файле
PAGES = [
    ("index",     "Модули",             "Modules"),
    ("reference", "Справочник 2025",    "2025 figures"),
    ("exam-map",  "Программа экзамена", "Exam outline"),
    ("sources",   "Источники",          "Sources"),
]
MODULES = ["su%02d" % n for n in range(1, 21)]

# Названия коммерческих курсов, которых не должно быть в публикуемом файле.
#
# Хранятся хешами, а не открытым текстом: список слов внутри публичного
# репозитория сам бы разглашал то, что призван не допускать, и поиск по
# репозиторию находил бы эти названия в файле проверки. Хеш даёт ту же
# проверку, но восстановить слово из него нельзя.
FORBIDDEN_HASHES = {
    "255933ee23fa4f54a0b101819e69b38ca24a423d28a6fbcde7b95dbbcd782b06",
    "3f6f7c90e33937b485a64b077658f1462caa10b9b3366f32c82fad737c20adc9",
}


def read(name):
    with open(os.path.join(HERE, name), encoding="utf-8") as handle:
        return handle.read()


def main_content(html):
    """Содержимое <main> без самой обёртки."""
    match = re.search(r"<main[^>]*>(.*?)</main>", html, re.S)
    return match.group(1) if match else ""


def quiz_script(html):
    """Блок window.QUIZZES из страницы модуля."""
    match = re.search(r"(window\.QUIZZES[^<]*)</script>", html, re.S)
    return match.group(1) if match else ""


def namespace_ids(fragment, prefix):
    """Развести совпадающие якоря разных модулей.

    Каждый модуль содержит id="traps", id="check", id="quiz". Собранные в
    один документ, они бы столкнулись, и оглавление вело бы не туда.
    """
    fragment = re.sub(r'id="([^"]+)"', lambda m: 'id="%s-%s"' % (prefix, m.group(1)), fragment)
    fragment = re.sub(r'href="#([^"]+)"', lambda m: 'href="#%s-%s"' % (prefix, m.group(1)), fragment)
    return fragment


def strip_local_only(fragment):
    """Убрать блок соответствия главам учебника.

    На локальном диске он наполняется из assets/xref.local.js. В публикуемом
    файле его быть не должно.
    """
    return re.sub(r'<div class="xref"[^>]*>.*?</div>', "", fragment, flags=re.S)


def check_clean(text, where):
    """Убедиться, что в тексте нет названий коммерческих курсов.

    Каждое слово хешируется и сверяется с набором. Само название нигде не
    хранится, поэтому проверка не разглашает то, что ищет.
    """
    for word in set(re.findall(r"[A-Za-zА-Яа-яЁё]{3,}", text.lower())):
        if hashlib.sha256(word.encode("utf-8")).hexdigest() in FORBIDDEN_HASHES:
            sys.exit("Сборка остановлена: в %s найдено название коммерческого "
                     "курса подготовки. Публикуемый файл не должен его "
                     "содержать." % where)


def build():
    css = read(os.path.join("assets", "style.css"))
    app = read(os.path.join("assets", "app.js"))
    figures = read(os.path.join("assets", "figures-2025.js"))

    sections = []
    nav = []
    quizzes = []

    present = []
    for slug, ru, en in PAGES:
        present.append((slug, ru, en))
    for slug in MODULES:
        path = os.path.join(HERE, slug + ".html")
        if os.path.exists(path):
            number = slug[2:]
            present.append((slug, "Модуль " + number, "Module " + number))

    for slug, ru, en in present:
        html = read(slug + ".html")
        check_clean(html, slug + ".html")

        fragment = main_content(html)
        fragment = strip_local_only(fragment)
        fragment = namespace_ids(fragment, slug)

        sections.append(
            '<section class="page" id="page-%s" hidden>\n%s\n</section>' % (slug, fragment))
        nav.append(
            '<a href="#" data-page="%s"><span lang="ru">%s</span>'
            '<span lang="en">%s</span></a>' % (slug, ru, en))

        quiz = quiz_script(html)
        if quiz:
            quizzes.append(quiz)

    check_clean(css, "style.css")
    check_clean(app, "app.js")
    check_clean(figures, "figures-2025.js")

    router = """
/* Переключение разделов внутри одного файла: ссылки в верхней панели
   показывают нужную секцию, остальные скрыты атрибутом hidden. */
(function () {
  function show(slug) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
      pages[i].hidden = pages[i].id !== 'page-' + slug;
    }
    var links = document.querySelectorAll('.topbar nav a[data-page]');
    for (var j = 0; j < links.length; j++) {
      if (links[j].dataset.page === slug) links[j].setAttribute('aria-current', 'page');
      else links[j].removeAttribute('aria-current');
    }
    window.scrollTo(0, 0);
  }
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[data-page]');
    if (link) { event.preventDefault(); show(link.dataset.page); return; }
    var inner = event.target.closest && event.target.closest('a[href$=".html"]');
    if (inner) {
      var slug = inner.getAttribute('href').replace('.html', '');
      if (document.getElementById('page-' + slug)) { event.preventDefault(); show(slug); }
    }
  });
  show('index');
})();
"""

    doc = """<!doctype html>
<html lang="ru" data-lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>EA Part 2 — Businesses</title>
<meta name="description" content="Двуязычный курс подготовки к экзамену IRS Special Enrollment Examination, часть 2. Налоговый период 2025.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap">
<style>
%s
.page[hidden] { display: none !important; }
</style>
</head>
<body data-module="artifact">

<a class="skip" href="#main"><span lang="ru">К содержанию</span><span lang="en">Skip to content</span></a>

<div class="topbar">
  <a class="topbar__mark" href="#" data-page="index">EA Part 2</a>
  <nav>
%s
  </nav>
  <div class="switches">
    <div class="langswitch" role="group" aria-label="Язык / Language">
      <button type="button" data-lang="ru" aria-pressed="true">RU</button>
      <button type="button" data-lang="en" aria-pressed="false">EN</button>
    </div>
    <div class="themeswitch" role="group" aria-label="Оформление / Theme">
      <button type="button" data-theme="light" aria-pressed="true"
              aria-label="Светлая тема / Light theme" title="Светлая тема / Light theme">☀</button>
      <button type="button" data-theme="dark" aria-pressed="false"
              aria-label="Тёмная тема / Dark theme" title="Тёмная тема / Dark theme">☾</button>
    </div>
  </div>
</div>

<main class="wrap" id="main">
%s
</main>

<script>
%s
</script>
<script>
%s
</script>
<script>
%s
</script>
<script>
%s
</script>
</body>
</html>
""" % (css, "\n".join("    " + item for item in nav), "\n".join(sections),
       figures, "\n".join(quizzes), app, router)

    with open(OUT, "w", encoding="utf-8") as handle:
        handle.write(doc)

    size = os.path.getsize(OUT)
    print("Собрано: %s" % OUT)
    print("Разделов: %d, из них модулей: %d"
          % (len(present), len(present) - len(PAGES)))
    print("Размер: %.2f МБ (предел публикации 16 МБ)" % (size / 1024.0 / 1024.0))
    if size > 16 * 1024 * 1024:
        sys.exit("Файл превышает предел публикации.")


if __name__ == "__main__":
    build()
