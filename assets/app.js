/* ===================================================================
   EA Part 2 — поведение страниц.

   Работает с file://, поэтому никаких сетевых запросов: данные приходят
   из window.FIGURES и window.QUIZ, подключённых тегом <script>.

   Об innerHTML ниже: на страницу не попадают данные извне — нет ни
   запросов, ни разбора адресной строки, ни полей ввода. Единственный
   источник разметки — собственные файлы проекта, поэтому подстановка
   недоверенного содержимого здесь невозможна по построению.
   =================================================================== */

(function () {
  "use strict";

  var LANGS = ["ru", "en"];
  var LANG_KEY = "ea2:lang";
  var THEMES = ["light", "dark"];
  var THEME_KEY = "ea2:theme";

  /* ---- localStorage может выбрасывать в приватном окне -------------- */

  function readStore(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function writeStore(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* режим без хранилища */ }
  }

  /* ---- Язык --------------------------------------------------------- */

  /* Русский по умолчанию: язык браузера здесь не показатель — материал
     читают с англоязычных систем, а выбор всё равно сохраняется. */
  function currentLang() {
    var saved = readStore(LANG_KEY);
    return LANGS.indexOf(saved) !== -1 ? saved : "ru";
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);
    writeStore(LANG_KEY, lang);

    var buttons = document.querySelectorAll(".langswitch button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].dataset.lang === lang));
    }
    fillFigures(lang);
    renderQuiz(lang);
  }

  function initLangSwitch() {
    var host = document.querySelector(".langswitch");
    if (!host) return;
    host.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-lang]");
      if (button) applyLang(button.dataset.lang);
    });
  }

  /* ---- Тема ----------------------------------------------------------

     Три состояния, а не два. Пока читатель не нажимал кнопку, страница
     следует настройке системы — за это отвечает медиазапрос в стилях, и
     атрибут не ставится вовсе. Нажатие фиксирует выбор и переопределяет
     систему в обе стороны. */

  function storedTheme() {
    var saved = readStore(THEME_KEY);
    return THEMES.indexOf(saved) !== -1 ? saved : null;
  }

  function systemTheme() {
    return window.matchMedia &&
           window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function markThemeButtons(effective) {
    var buttons = document.querySelectorAll(".themeswitch button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].dataset.theme === effective));
    }
  }

  function applyTheme(theme, remember) {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      if (remember) writeStore(THEME_KEY, theme);
      markThemeButtons(theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
      markThemeButtons(systemTheme());
    }
  }

  function initThemeSwitch() {
    applyTheme(storedTheme(), false);

    var host = document.querySelector(".themeswitch");
    if (host) {
      host.addEventListener("click", function (event) {
        var button = event.target.closest("button[data-theme]");
        if (button) applyTheme(button.dataset.theme, true);
      });
    }

    /* Пока выбор не сделан, следовать за системой на лету */
    if (window.matchMedia) {
      var query = window.matchMedia("(prefers-color-scheme: dark)");
      var onChange = function () { if (!storedTheme()) applyTheme(null, false); };
      if (query.addEventListener) query.addEventListener("change", onChange);
      else if (query.addListener) query.addListener(onChange);
    }
  }

  /* ---- Форматирование чисел ----------------------------------------- */

  var NBSP = " ";

  var MONTHS_RU = ["января", "февраля", "марта", "апреля", "мая", "июня",
                   "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  var MONTHS_EN = ["January", "February", "March", "April", "May", "June",
                   "July", "August", "September", "October", "November", "December"];

  function groupDigits(intPart, separator) {
    return intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }

  /* forceCents нужен только для денежных сумм: $108.28 округляется до двух
     знаков, а ставка 5.4 остаётся «5,4%», а не «5,40%». */
  function formatNumber(value, lang, forceCents) {
    var hasFraction = Math.abs(value % 1) > 1e-9;
    var text = (forceCents && hasFraction) ? value.toFixed(2) : String(value);
    var parts = text.split(".");
    if (lang === "ru") {
      var ru = groupDigits(parts[0], NBSP);
      return parts[1] ? ru + "," + parts[1] : ru;
    }
    var en = groupDigits(parts[0], ",");
    return parts[1] ? en + "." + parts[1] : en;
  }

  function formatDate(iso, lang) {
    var bits = iso.split("-");
    var year = bits[0], month = parseInt(bits[1], 10) - 1, day = parseInt(bits[2], 10);
    return lang === "ru"
      ? day + NBSP + MONTHS_RU[month] + NBSP + year
      : MONTHS_EN[month] + " " + day + ", " + year;
  }

  function formatFigure(item, lang) {
    if (!item) return "";
    switch (item.unit) {
      case "usd":  return "$" + formatNumber(item.n, lang, true);
      case "pct":  return formatNumber(item.n, lang, false) + "%";
      case "int":  return formatNumber(item.n, lang, false);
      case "date": return formatDate(item.d, lang);
      default:     return lang === "ru" ? (item.v_ru || "") : (item.v_en || "");
    }
  }

  /* Подстановка <span data-fig="ключ"> по всей странице */
  function fillFigures(lang) {
    if (window.FIGURES) {
      var nodes = document.querySelectorAll("[data-fig]");
      for (var i = 0; i < nodes.length; i++) {
        var item = window.FIGURES.items[nodes[i].dataset.fig];
        if (item) {
          nodes[i].textContent = formatFigure(item, lang);
        } else {
          nodes[i].textContent = "?";
          nodes[i].title = "Нет записи в справочнике: " + nodes[i].dataset.fig;
        }
      }
    }
    fillInlineNumbers(lang);
  }

  /* Числа внутри примеров: data-num="28000" data-unit="usd|pct|plain".

     Написанные прямо в разметке, они остались бы с русскими разделителями
     и в английской версии. Здесь хранится одно значение, а разделитель
     разрядов и десятичный знак подставляются по текущему языку. */
  function fillInlineNumbers(lang) {
    var nodes = document.querySelectorAll("[data-num]");
    for (var i = 0; i < nodes.length; i++) {
      var raw = parseFloat(nodes[i].dataset.num);
      if (isNaN(raw)) continue;
      var unit = nodes[i].dataset.unit || "usd";
      var sign = raw < 0 ? "−" : "";
      var abs = Math.abs(raw);
      var body;
      if (unit === "usd")      body = "$" + formatNumber(abs, lang, true);
      else if (unit === "pct") body = formatNumber(abs, lang, false) + "%";
      else                     body = formatNumber(abs, lang, false);
      nodes[i].textContent = sign + body;
    }
  }

  /* ---- Таблица справочника ------------------------------------------ */

  function buildReference() {
    var host = document.getElementById("figures");
    if (!host || !window.FIGURES) return;
    var lang = currentLang();
    var html = "";

    window.FIGURES.groups.forEach(function (group) {
      html += '<section class="sub"><h2>' +
              '<span lang="ru">' + group.ru + '</span>' +
              '<span lang="en">' + group.en + '</span></h2>' +
              '<div class="scroller"><table class="figures"><tbody>';

      group.keys.forEach(function (key) {
        var item = window.FIGURES.items[key];
        if (!item) return;
        var note = "";
        if (item.note_ru || item.note_en) {
          note = '<div class="orig">' +
                 '<span lang="ru">' + (item.note_ru || "") + '</span>' +
                 '<span lang="en">' + (item.note_en || "") + '</span></div>';
        }
        html += "<tr><th>" +
                '<span lang="ru">' + item.ru + "</span>" +
                '<span lang="en">' + item.en + "</span>" + note + "</th>" +
                '<td class="val" data-fig="' + key + '"></td>' +
                '<td class="src"><a href="' + item.src.u + '" rel="noopener">' + item.src.t + "</a></td>" +
                "</tr>";
      });

      html += "</tbody></table></div></section>";
    });

    host.innerHTML = html;
    fillFigures(lang);
  }

  /* ---- Сноска соответствия учебнику ---------------------------------
     Файл assets/xref.local.js не входит в репозиторий. Если его нет,
     блок просто не появляется — это штатное состояние.            ---- */

  function fillXref() {
    var host = document.querySelector("[data-xref]");
    if (!host) return;
    var map = window.XREF;
    var value = map && map[host.dataset.xref];
    if (value) {
      host.textContent = value;
      host.hidden = false;
    }
  }

  /* ---- Переход между модулями ----------------------------------------

     Оба элемента строятся из window.MODULES (assets/modules.js). Если
     файл не загрузился, ни один из них не появляется, а страница
     работает по-прежнему: список модулей — удобство, а не опора. */

  function currentModuleId() {
    return document.body.dataset.module || "";
  }

  function openModules() {
    if (!window.MODULES) return [];
    return window.MODULES.filter(function (module) { return module.open; });
  }

  /* Выпадающий список в верхней панели. Нативный <details> не требует
     состояния в JS и открывается с клавиатуры. */
  function initModuleMenu() {
    if (!window.MODULES) return;
    var link = document.querySelector('.topbar nav a[href="index.html"], .topbar nav a[data-page="index"]');
    if (!link) return;

    var here = currentModuleId();
    var box = document.createElement("details");
    box.className = "modmenu";

    var summary = document.createElement("summary");
    summary.innerHTML =
      '<span lang="ru">Модули</span><span lang="en">Modules</span>' +
      '<span class="modmenu__chev" aria-hidden="true">▼</span>';
    box.appendChild(summary);

    var list = document.createElement("div");
    list.className = "modmenu__list";

    var html = '<a class="modmenu__all" href="index.html">' +
               '<span lang="ru">Все модули</span><span lang="en">All modules</span></a>';

    window.MODULES.forEach(function (module) {
      var name = '<span class="modmenu__no">' + module.no + "</span>" +
                 '<span lang="ru">' + module.ru + "</span>" +
                 '<span lang="en">' + module.en + "</span>";
      if (module.open) {
        html += '<a href="' + module.id + '.html"' +
                (module.id === here ? ' aria-current="page"' : "") + ">" + name + "</a>";
      } else {
        html += '<span class="modmenu__soon">' + name + "</span>";
      }
    });

    list.innerHTML = html;
    box.appendChild(list);
    link.parentNode.replaceChild(box, link);

    /* Список закрывается при уходе фокуса и по Escape — иначе он
       остаётся раскрытым поверх текста после перехода назад. */
    list.addEventListener("click", function () { box.open = false; });
    document.addEventListener("click", function (event) {
      if (box.open && !box.contains(event.target)) box.open = false;
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && box.open) { box.open = false; summary.focus(); }
    });
  }

  /* Переход «предыдущий / все / следующий» внизу страницы модуля.
     Ненаписанные модули пропускаются, поэтому у последнего готового
     модуля правой стрелки нет. */
  function initModulePager() {
    var here = currentModuleId();
    if (!/^su\d\d$/.test(here)) return;

    var list = openModules();
    var at = -1;
    for (var i = 0; i < list.length; i++) if (list[i].id === here) at = i;
    if (at === -1) return;

    var foot = document.querySelector(".pagefoot");
    if (!foot) return;

    function side(module, dir) {
      if (!module) return '<span class="modnav__end"></span>';
      var arrow = dir < 0 ? "← " : "";
      var tail = dir > 0 ? " →" : "";
      return '<a class="modnav__step" href="' + module.id + '.html">' +
             '<span class="modnav__no">' + arrow + module.no + tail + "</span>" +
             '<span lang="ru">' + module.ru + "</span>" +
             '<span lang="en">' + module.en + "</span></a>";
    }

    var nav = document.createElement("nav");
    nav.className = "modnav";
    nav.setAttribute("aria-label", "Соседние модули");
    nav.innerHTML =
      side(list[at - 1], -1) +
      '<a class="modnav__all" href="index.html">' +
      '<span lang="ru">Все модули</span><span lang="en">All modules</span></a>' +
      side(list[at + 1], 1);

    foot.parentNode.insertBefore(nav, foot);
  }

  /* ---- Оглавление на узком экране ------------------------------------

     Оглавление не дублируется: тот же <nav class="toc"> служит и боковой
     колонкой, и липкой строкой. Дубль разошёлся бы с оригиналом при
     первой же правке, а подсветка текущего раздела работала бы лишь в
     одной из копий.

     Узел переносится между двумя точками монтирования, потому что
     position: sticky отсчитывается от родительского блока: оставшись
     ячейкой грида .layout, строка прилипала бы к своей собственной
     высоте, то есть исчезала бы сразу. Снаружи грида её родитель — вся
     страница, и прилипание работает. */

  function setTocLabel(html) {
    var now = document.querySelector(".toc__now");
    if (now) now.innerHTML = html;
  }

  function initTocBar() {
    /* В собранном артефакте все модули лежат в одном <main>, и переносить
       наружу пять оглавлений сразу нельзя: они прилипли бы одно поверх
       другого. Там оглавления остаются обычными списками. */
    if (document.querySelectorAll(".layout").length !== 1) return;

    var toc = document.querySelector("nav.toc");
    var layout = document.querySelector(".layout");
    var list = toc && toc.querySelector("ol");
    if (!toc || !layout || !list) return;

    list.id = "toc-list";

    var button = document.createElement("button");
    button.type = "button";
    button.className = "toc__toggle";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", "toc-list");
    button.innerHTML =
      '<span class="toc__now">' +
      '<span lang="ru">В этом модуле</span><span lang="en">In this module</span>' +
      '</span><span class="toc__chev" aria-hidden="true">▼</span>';
    toc.insertBefore(button, toc.firstChild);

    function close() { toc.classList.remove("is-open"); button.setAttribute("aria-expanded", "false"); }
    function open() { toc.classList.add("is-open"); button.setAttribute("aria-expanded", "true"); }

    button.addEventListener("click", function () {
      if (toc.classList.contains("is-open")) close(); else open();
    });

    /* Переход по ссылке закрывает список: иначе он закрывает собой раздел,
       к которому только что перешли. */
    list.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("a")) close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toc.classList.contains("is-open")) { close(); button.focus(); }
    });

    document.addEventListener("click", function (e) {
      if (!toc.classList.contains("is-open")) return;
      if (!toc.contains(e.target)) close();
    });

    /* Перенос узла и замер высот липких полос. */
    var narrow = window.matchMedia("(max-width: 62em)");
    var root = document.documentElement;
    var topbar = document.querySelector(".topbar");

    function place() {
      if (narrow.matches) {
        if (toc.parentNode !== layout.parentNode) layout.parentNode.insertBefore(toc, layout);
      } else {
        close();
        if (toc.parentNode !== layout) layout.insertBefore(toc, layout.firstChild);
      }
      measure();
    }

    function measure() {
      if (topbar) root.style.setProperty("--topbar-h", topbar.offsetHeight + "px");
      root.style.setProperty("--tocbar-h", narrow.matches ? button.offsetHeight + "px" : "0px");
    }

    place();
    if (narrow.addEventListener) narrow.addEventListener("change", place);
    else if (narrow.addListener) narrow.addListener(place);
    window.addEventListener("resize", measure);
  }

  /* ---- Оглавление: подсветка текущего раздела ------------------------ */

  function initScrollSpy() {
    var links = document.querySelectorAll(".toc a[href^='#']");
    if (!links.length) return;

    /* Секции .sub — это только заголовки, а не обёртки над содержимым:
       наблюдатель за их видимостью гасил бы подсветку, едва заголовок
       уходит за верх экрана, то есть почти всё время чтения. Поэтому
       текущим считается последний заголовок, поднявшийся выше линии
       липких панелей. */

    var items = [];
    for (var i = 0; i < links.length; i++) {
      var id = links[i].getAttribute("href").slice(1);
      var section = document.getElementById(id);
      if (section) items.push({ link: links[i], section: section });
    }
    if (!items.length) return;

    function chromeOffset() {
      var css = getComputedStyle(document.documentElement);
      var a = parseFloat(css.getPropertyValue("--topbar-h")) || 0;
      var b = parseFloat(css.getPropertyValue("--tocbar-h")) || 0;
      return a + b + 8;
    }

    var pending = false;
    function update() {
      pending = false;
      var line = chromeOffset();
      var active = items[0];
      for (var i = 0; i < items.length; i++) {
        if (items[i].section.getBoundingClientRect().top <= line) active = items[i];
      }
      for (var j = 0; j < items.length; j++) {
        items[j].link.classList.toggle("is-current", items[j] === active);
      }
      setTocLabel(active.link.innerHTML);
    }

    function schedule() {
      if (pending) return;
      pending = true;
      if (window.requestAnimationFrame) window.requestAnimationFrame(update);
      else setTimeout(update, 100);
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
  }

  /* ---- Тренажёр -------------------------------------------------------

     Обычная страница содержит один модуль, собранный артефакт — все
     двадцать сразу. Поэтому вопросы адресуются не по body, а по
     контейнеру с data-quiz, и данные берутся из window.QUIZZES[id]. */

  function quizData(moduleId) {
    if (window.QUIZZES && window.QUIZZES[moduleId]) return window.QUIZZES[moduleId];
    return window.QUIZ || null;
  }

  function quizKey(moduleId) {
    return "ea2:quiz:" + (moduleId || "x");
  }

  function loadAnswers(moduleId) {
    try { return JSON.parse(readStore(quizKey(moduleId)) || "{}"); } catch (e) { return {}; }
  }
  function saveAnswers(moduleId, answers) {
    writeStore(quizKey(moduleId), JSON.stringify(answers));
  }

  function renderQuiz(lang) {
    var hosts = document.querySelectorAll("[data-quiz]");
    for (var i = 0; i < hosts.length; i++) renderOneQuiz(hosts[i], lang);
  }

  function renderOneQuiz(host, lang) {
    var moduleId = host.dataset.quiz;
    var questions = quizData(moduleId);
    if (!questions) return;

    var answers = loadAnswers(moduleId);
    var html = "";

    questions.forEach(function (question, index) {
      var given = answers[index];
      var answered = typeof given === "string";

      html += '<div class="q' + (answered ? " is-answered" : "") + '" data-q="' + index + '">';
      html += '<p class="q__stem"><span class="qnum">' + (index + 1) + "</span>" +
              '<span lang="ru">' + question.ru + "</span>" +
              '<span lang="en">' + question.en + "</span></p>";

      html += '<div class="q__opts">';
      question.opts.forEach(function (option) {
        var cls = "opt";
        if (answered) {
          if (option.k === question.correct) cls += " is-correct";
          else if (option.k === given) cls += " is-wrong";
        }
        html += '<button type="button" class="' + cls + '" data-k="' + option.k + '"' +
                (answered ? " disabled" : "") + ">" +
                '<span class="opt__k">' + option.k + "</span>" +
                "<span>" +
                '<span lang="ru">' + option.ru + "</span>" +
                '<span lang="en">' + option.en + "</span>" +
                "</span></button>";
      });
      html += "</div>";

      /* Разбор каждого варианта, а не только верного */
      html += '<div class="why"><dl>';
      question.opts.forEach(function (option) {
        var why = question.why[option.k] || {};
        var isRight = option.k === question.correct;
        html += "<dt>" + option.k + "</dt>" +
                '<dd class="' + (isRight ? "ok" : "") + '">' +
                '<span lang="ru">' + (why.ru || "") + "</span>" +
                '<span lang="en">' + (why.en || "") + "</span></dd>";
      });
      html += "</dl></div></div>";
    });

    host.innerHTML = html;
    updateScore(moduleId);
  }

  /* Название подраздела берётся из самой страницы: заголовок уже
     двуязычный, дублировать его в данных теста незачем. */
  function sectionTitle(id, lang) {
    var box = document.getElementById(id);
    if (!box) return null;
    var num = box.querySelector(".num");
    var name = box.querySelector('h2 [lang="' + lang + '"]');
    if (!name) return null;
    return (num ? num.textContent.trim() + " " : "") + name.textContent.trim();
  }

  function adviceHtml(questions, answers) {
    var missed = {}, order = [], any = false;
    questions.forEach(function (question, index) {
      var given = answers[index];
      if (typeof given !== "string" || given === question.correct) return;
      any = true;
      var sec = question.sec;
      if (!sec) return;
      if (!missed[sec]) { missed[sec] = 0; order.push(sec); }
      missed[sec]++;
    });
    if (!any || !order.length) return "";

    order.sort(function (a, b) { return missed[b] - missed[a]; });

    var items = "";
    order.forEach(function (sec) {
      var ru = sectionTitle(sec, "ru"), en = sectionTitle(sec, "en");
      if (!ru && !en) return;
      items += '<li><a href="#' + sec + '">' +
               '<span lang="ru">' + (ru || "") + "</span>" +
               '<span lang="en">' + (en || "") + "</span></a>" +
               '<span class="quiz__miss">' + missed[sec] + "</span></li>";
    });
    if (!items) return "";

    return '<div class="quiz__advice">' +
           '<p class="quiz__advice-head">' +
           '<span lang="ru">Ошибки пришлись на эти подразделы \u2014 их и стоит перечитать:</span>' +
           '<span lang="en">The wrong answers fall in these subsections \u2014 re-read them:</span></p>' +
           "<ul>" + items + "</ul></div>";
  }

  function updateScore(moduleId) {
    var section = document.querySelector('[data-quiz="' + moduleId + '"]');
    if (!section) return;
    var box = section.closest(".quiz");
    var host = box && box.querySelector(".quiz__score");
    var questions = quizData(moduleId);
    if (!host || !questions) return;

    var answers = loadAnswers(moduleId);
    var answered = 0, right = 0;
    questions.forEach(function (question, index) {
      if (typeof answers[index] === "string") {
        answered++;
        if (answers[index] === question.correct) right++;
      }
    });

    var pct = answered ? Math.round((right / answered) * 100) : 0;
    var done = answered === questions.length;

    host.innerHTML =
      '<span lang="ru">Верно ' + right + " из " + answered +
      (answered ? " \u2014 " + pct + "%" : "") +
      (done ? ". Пройдено полностью" : ", всего вопросов " + questions.length) + "</span>" +
      '<span lang="en">' + right + " correct of " + answered +
      (answered ? " \u2014 " + pct + "%" : "") +
      (done ? ". All questions answered" : ", " + questions.length + " in all") + "</span>";

    /* Совет появляется под тестом, а не в строке счёта: он длиннее и
       нужен только тогда, когда есть ошибки. */
    var advice = box && box.querySelector(".quiz__advice");
    if (advice) advice.parentNode.removeChild(advice);
    var html = adviceHtml(questions, answers);
    if (html && box) {
      var reset = box.querySelector(".quiz__reset");
      var node = document.createElement("div");
      node.innerHTML = html;
      var el = node.firstChild;
      if (reset) box.insertBefore(el, reset);
      else box.appendChild(el);
    }
  }

  /* Обработчики вешаются на документ: в собранном артефакте секций много,
     а слушатель нужен один. */
  function initQuiz() {
    document.addEventListener("click", function (event) {
      var button = event.target.closest && event.target.closest("button.opt");
      if (button && !button.disabled) {
        var host = button.closest("[data-quiz]");
        if (!host) return;
        var moduleId = host.dataset.quiz;
        var questions = quizData(moduleId);
        var block = button.closest(".q");
        var index = parseInt(block.dataset.q, 10);
        var question = questions[index];

        var answers = loadAnswers(moduleId);
        answers[index] = button.dataset.k;
        saveAnswers(moduleId, answers);

        block.classList.add("is-answered");
        var options = block.querySelectorAll("button.opt");
        for (var i = 0; i < options.length; i++) {
          options[i].disabled = true;
          var key = options[i].dataset.k;
          if (key === question.correct) options[i].classList.add("is-correct");
          else if (key === button.dataset.k) options[i].classList.add("is-wrong");
        }
        updateScore(moduleId);
        return;
      }

      var reset = event.target.closest && event.target.closest(".quiz__reset");
      if (reset) {
        var box = reset.closest(".quiz");
        var body = box && box.querySelector("[data-quiz]");
        if (!body) return;
        saveAnswers(body.dataset.quiz, {});
        renderOneQuiz(body, currentLang());
      }
    });
  }

  /* ---- Прогресс на главной ------------------------------------------- */

  function fillProgress() {
    var nodes = document.querySelectorAll("[data-progress]");
    for (var i = 0; i < nodes.length; i++) {
      var moduleId = nodes[i].dataset.progress;
      var stored = readStore("ea2:quiz:" + moduleId);
      if (!stored) continue;
      try {
        var answers = JSON.parse(stored);
        var count = Object.keys(answers).length;
        if (count) {
          nodes[i].innerHTML =
            '<span lang="ru">отвечено ' + count + "</span>" +
            '<span lang="en">' + count + " answered</span>";
        }
      } catch (e) { /* повреждённая запись игнорируется */ }
    }
  }

  /* ---- Запуск --------------------------------------------------------- */

  function start() {
    initLangSwitch();
    initThemeSwitch();
    initModuleMenu();
    initModulePager();
    buildReference();
    fillXref();
    initQuiz();
    applyLang(currentLang());
    fillProgress();
    initTocBar();
    initScrollSpy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
