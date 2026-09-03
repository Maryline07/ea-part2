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

  /* ---- Оглавление: подсветка текущего раздела ------------------------ */

  function initScrollSpy() {
    var links = document.querySelectorAll(".toc a[href^='#']");
    if (!links.length || !("IntersectionObserver" in window)) return;

    var byId = {};
    var targets = [];
    for (var i = 0; i < links.length; i++) {
      var id = links[i].getAttribute("href").slice(1);
      var section = document.getElementById(id);
      if (section) { byId[id] = links[i]; targets.push(section); }
    }

    var visible = {};
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { visible[entry.target.id] = entry.isIntersecting; });
      var active = null;
      targets.forEach(function (section) { if (!active && visible[section.id]) active = section.id; });
      for (var id in byId) byId[id].classList.toggle("is-current", id === active);
    }, { rootMargin: "-72px 0px -70% 0px" });

    targets.forEach(function (section) { observer.observe(section); });
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

  function updateScore(moduleId) {
    var section = document.querySelector('[data-quiz="' + moduleId + '"]');
    if (!section) return;
    var host = section.closest(".quiz");
    host = host && host.querySelector(".quiz__score");
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

    host.innerHTML =
      '<span lang="ru">Верно ' + right + " из " + answered + ", всего вопросов " + questions.length + "</span>" +
      '<span lang="en">' + right + " correct of " + answered + " answered, " + questions.length + " total</span>";
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
    buildReference();
    fillXref();
    initQuiz();
    applyLang(currentLang());
    fillProgress();
    initScrollSpy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
