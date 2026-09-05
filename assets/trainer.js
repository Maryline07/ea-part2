/* ===================================================================
   EA Part 2 — тренажёр.

   Отличается от списка вопросов в модуле не оформлением, а назначением.
   Список закрепляет прочитанное подряд; тренажёр возвращает к тому, что
   не усвоено: вопросы вперемешку по нескольким модулям, отбор по тому,
   где была ошибка, ограниченный заход.

   Три экрана в одном контейнере: настройка, заход, итог. Разметка обоих
   языков строится сразу, а показывает нужный CSS по атрибуту lang, —
   поэтому переключение языка не требует перерисовки.

   Хранилище ответов общее со страницей модуля: ответ, данный при
   чтении, виден отбору «с ошибкой», и наоборот.
   =================================================================== */

(function () {
  "use strict";

  var EA = window.EA;
  var FLAG = "ea2:flag:";
  var RUNS = "ea2:runs";
  var PRESET = "ea2:trainer:preset";
  var RUNS_KEEP = 20;

  var setup = null;     /* выбор на экране настройки */
  var run = null;       /* текущий заход */

  /* ---- Мелочи --------------------------------------------------------- */

  var OPEN_RU = '<span lang="ru">';
  var OPEN_EN = '<span lang="en">';
  var CLOSE = "</span>";

  function bi(ru, en) {
    return OPEN_RU + ru + CLOSE + OPEN_EN + en + CLOSE;
  }

  function loadFlags(moduleId) {
    try { return JSON.parse(EA.read(FLAG + moduleId) || "{}"); } catch (e) { return {}; }
  }
  function saveFlags(moduleId, flags) {
    EA.write(FLAG + moduleId, JSON.stringify(flags));
  }

  /* ---- Банк вопросов --------------------------------------------------

     Модули берутся из window.MODULES, а вопросы — из window.QUIZZES.
     Модуль без загруженного файла вопросов просто не появляется в
     списке: страница остаётся рабочей, просто беднее. */

  function modules() {
    if (!window.MODULES || !window.QUIZZES) return [];
    return window.MODULES.filter(function (module) {
      return module.open && window.QUIZZES[module.id];
    });
  }

  function questionsOf(moduleId) {
    return (window.QUIZZES && window.QUIZZES[moduleId]) || [];
  }

  /* Состояние одного вопроса: отвечен ли, верно ли, отмечен ли. */
  function stateOf(moduleId, index, answers, flags) {
    var given = EA.answerOf(answers[index]);
    return {
      given: given,
      right: given !== null && given === questionsOf(moduleId)[index].correct,
      conf: EA.confOf(answers[index]),
      flagged: !!flags[index]
    };
  }

  function matches(filter, state) {
    if (filter === "new") return state.given === null;
    if (filter === "wrong") return state.given !== null && !state.right;
    if (filter === "flag") return state.flagged;
    return true;
  }

  /* Отбор вопросов по выбранным модулям и фильтру. */
  function select(moduleIds, filter) {
    var out = [];
    moduleIds.forEach(function (moduleId) {
      var answers = EA.loadAnswers(moduleId);
      var flags = loadFlags(moduleId);
      questionsOf(moduleId).forEach(function (question, index) {
        if (matches(filter, stateOf(moduleId, index, answers, flags))) {
          out.push({ m: moduleId, i: index });
        }
      });
    });
    return out;
  }

  function counts(moduleIds) {
    return {
      all: select(moduleIds, "all").length,
      "new": select(moduleIds, "new").length,
      wrong: select(moduleIds, "wrong").length,
      flag: select(moduleIds, "flag").length
    };
  }

  function shuffle(list) {
    for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var swap = list[i]; list[i] = list[j]; list[j] = swap;
    }
    return list;
  }

  /* ---- История заходов ------------------------------------------------ */

  function loadRuns() {
    try {
      var list = JSON.parse(EA.read(RUNS) || "[]");
      return Object.prototype.toString.call(list) === "[object Array]" ? list : [];
    } catch (e) { return []; }
  }

  function pushRun(record) {
    var list = loadRuns();
    list.unshift(record);
    EA.write(RUNS, JSON.stringify(list.slice(0, RUNS_KEEP)));
  }

  /* ---- Экраны --------------------------------------------------------- */

  function host(id) { return document.getElementById(id); }

  function show(which) {
    ["tr-setup", "tr-run", "tr-done"].forEach(function (id) {
      var box = host(id);
      if (box) box.hidden = id !== which;
    });
    /* Пояснение к странице нужно перед началом, а во время захода и на
       итоге только отодвигает вниз то, ради чего сюда пришли. */
    var intro = host("tr-intro");
    if (intro) intro.hidden = which !== "tr-setup";
  }

  /* ---- Экран настройки ------------------------------------------------ */

  var FILTERS = [
    { k: "all",   ru: "Все вопросы",   en: "All questions" },
    { k: "new",   ru: "Неотвеченные",  en: "Not yet answered" },
    { k: "wrong", ru: "С ошибкой",     en: "Answered wrong" },
    { k: "flag",  ru: "Отмеченные",    en: "Flagged" }
  ];

  var LIMITS = [10, 20, 50, 0];

  function defaultSetup() {
    return {
      mods: modules().map(function (module) { return module.id; }),
      filter: "all",
      limit: 10,
      order: "shuffle"
    };
  }

  function renderSetup() {
    var box = host("tr-setup");
    if (!box) return;
    if (!setup) setup = defaultSetup();

    var list = modules();
    if (!list.length) {
      box.innerHTML = '<p class="tr__empty">' +
        bi("Вопросы не загрузились. Откройте страницу через папку сайта целиком.",
           "The question files did not load. Open this page from the full site folder.") +
        "</p>";
      return;
    }

    var html = "";

    /* Модули */
    html += '<div class="tr__group"><h2>' +
            bi("Из каких модулей", "Which modules") + "</h2>";
    html += '<div class="tr__mods">';
    list.forEach(function (module) {
      var n = questionsOf(module.id).length;
      var on = setup.mods.indexOf(module.id) !== -1;
      html += '<label class="tr__mod' + (on ? " is-on" : "") + '">' +
              '<input type="checkbox" data-mod="' + module.id + '"' + (on ? " checked" : "") + ">" +
              '<span class="tr__mod-no">' + module.no + "</span>" +
              '<span class="tr__mod-name">' +
              bi(module.ru, module.en) + "</span>" +
              '<span class="tr__mod-n">' + n + "</span></label>";
    });
    html += "</div>";
    html += '<div class="tr__modacts">' +
            '<button type="button" class="tr__link" data-mods="all">' +
            bi("Выбрать все", "Select all") + "</button>" +
            '<button type="button" class="tr__link" data-mods="none">' +
            bi("Снять все", "Clear all") + "</button></div>";
    html += "</div>";

    /* Фильтр */
    html += '<div class="tr__group"><h2>' + bi("Какие вопросы", "Which of them") + "</h2>";
    html += '<div class="tr__filters" id="tr-filters"></div></div>';

    /* Объём и порядок */
    html += '<div class="tr__group tr__group--row"><div><h2>' +
            bi("Сколько за заход", "How many") + "</h2><div class=\"tr__chips\">";
    LIMITS.forEach(function (value) {
      html += '<button type="button" class="tr__chip' +
              (setup.limit === value ? " is-on" : "") + '" data-limit="' + value + '">' +
              (value ? value : bi("Все", "All")) + "</button>";
    });
    html += "</div></div>";

    html += "<div><h2>" + bi("Порядок", "Order") + "</h2><div class=\"tr__chips\">" +
            '<button type="button" class="tr__chip' +
            (setup.order === "shuffle" ? " is-on" : "") + '" data-order="shuffle">' +
            bi("Вперемешку", "Shuffled") + "</button>" +
            '<button type="button" class="tr__chip' +
            (setup.order === "line" ? " is-on" : "") + '" data-order="line">' +
            bi("По порядку", "In order") + "</button></div></div></div>";

    html += '<div class="tr__start"><button type="button" class="tr__go" id="tr-go">' +
            bi("Начать заход", "Start") + "</button>" +
            '<span class="tr__will" id="tr-will"></span></div>';

    html += runsHtml();

    box.innerHTML = html;
    refreshCounts();
  }

  /* Счётчики пересчитываются при каждой перемене выбора: без них
     непонятно, есть ли вообще что проходить под этим отбором. */
  function refreshCounts() {
    var tally = counts(setup.mods);
    var filters = host("tr-filters");
    if (filters) {
      var html = "";
      FILTERS.forEach(function (item) {
        var n = tally[item.k];
        html += '<button type="button" class="tr__filter' +
                (setup.filter === item.k ? " is-on" : "") +
                (n ? "" : " is-empty") + '" data-filter="' + item.k + '">' +
                '<span class="tr__filter-name">' + bi(item.ru, item.en) + "</span>" +
                '<span class="tr__filter-n">' + n + "</span></button>";
      });
      filters.innerHTML = html;
    }

    var pool = tally[setup.filter];
    var take = setup.limit ? Math.min(setup.limit, pool) : pool;
    var will = host("tr-will");
    if (will) {
      will.innerHTML = pool
        ? bi("Вопросов в заходе: " + take, take + (take === 1 ? " question" : " questions"))
        : bi("Под этот отбор не попал ни один вопрос",
             "No questions match this selection");
    }
    var go = host("tr-go");
    if (go) go.disabled = !pool;
  }

  function runsHtml() {
    var list = loadRuns();
    if (!list.length) return "";
    var rows = "";
    list.forEach(function (item) {
      rows += "<tr><td>" + item.d + "</td>" +
              "<td>" + item.ok + " / " + item.n + "</td>" +
              '<td class="tr__runs-pct">' + item.pct + "%</td></tr>";
    });
    return '<div class="tr__group tr__runs"><h2>' +
           bi("Последние заходы", "Recent runs") + "</h2>" +
           '<div class="scroller"><table><thead><tr>' +
           "<th>" + bi("Дата", "Date") + "</th>" +
           "<th>" + bi("Верно", "Correct") + "</th>" +
           "<th>" + bi("Доля", "Score") + "</th>" +
           "</tr></thead><tbody>" + rows + "</tbody></table></div></div>";
  }

  /* ---- Заход ---------------------------------------------------------- */

  function startRun(items) {
    if (!items.length) return;
    run = { items: items, at: 0, given: {}, seen: {} };
    show("tr-run");
    renderQuestion();
    var box = host("tr-run");
    if (box) box.scrollIntoView({ block: "start" });
  }

  function key(item) { return item.m + "#" + item.i; }

  function tally() {
    var ok = 0, no = 0;
    run.items.forEach(function (item) {
      var mark = run.given[key(item)];
      if (!mark) return;
      if (mark.right) ok++; else no++;
    });
    return { ok: ok, no: no, done: ok + no };
  }

  function renderQuestion() {
    var box = host("tr-run");
    if (!box || !run) return;

    var item = run.items[run.at];
    var question = questionsOf(item.m)[item.i];
    var mark = run.given[key(item)];
    var answered = !!mark;
    var flags = loadFlags(item.m);
    var flagged = !!flags[item.i];
    var score = tally();
    var pct = score.done ? Math.round((score.ok / score.done) * 100) : 0;

    var html = "";

    html += '<div class="run__bar">' +
            '<span class="run__pos">' +
            bi("№ " + (run.at + 1) + " из " + run.items.length,
               "No. " + (run.at + 1) + " of " + run.items.length) + "</span>" +
            '<span class="run__tally">' +
            '<span class="run__ok">✓ ' + score.ok + "</span>" +
            '<span class="run__no">✗ ' + score.no + "</span>" +
            '<span class="run__pct">' + pct + "%</span></span></div>";

    /* Модуль и подраздел до ответа не показываются: это подсказка. */
    html += '<div class="q' + (answered ? " is-answered" : "") + '">';
    html += '<p class="q__stem">' + bi(question.ru, question.en) + "</p>";

    html += '<div class="q__opts">';
    question.opts.forEach(function (option) {
      var cls = "opt";
      if (answered) {
        if (option.k === question.correct) cls += " is-correct";
        else if (option.k === mark.a) cls += " is-wrong";
      } else if (run.pick === option.k) {
        cls += " is-picked";
      }
      html += '<button type="button" class="' + cls + '" data-pick="' + option.k + '"' +
              (answered ? " disabled" : "") + ">" +
              '<span class="opt__k">' + option.k + "</span><span>" +
              bi(option.ru, option.en) + "</span></button>";
    });
    html += "</div>";

    if (answered) {
      html += '<div class="why"><dl>';
      question.opts.forEach(function (option) {
        var why = question.why[option.k] || {};
        html += "<dt>" + option.k + "</dt>" +
                '<dd class="' + (option.k === question.correct ? "ok" : "") + '">' +
                bi(why.ru || "", why.en || "") + "</dd>";
      });
      html += "</dl></div>";
      html += '<p class="run__where">' + whereHtml(item) + "</p>";
    }
    html += "</div>";

    /* Действия */
    html += '<div class="run__acts">';
    html += '<button type="button" class="run__flag' + (flagged ? " is-on" : "") +
            '" id="tr-flag" aria-pressed="' + (flagged ? "true" : "false") + '">' +
            '<span aria-hidden="true">⚑</span>' +
            bi(flagged ? "Отмечен" : "Отметить", flagged ? "Flagged" : "Flag") + "</button>";

    if (answered) {
      var last = run.at === run.items.length - 1;
      html += '<button type="button" class="run__next" id="tr-next">' +
              (last ? bi("Завершить", "Finish") : bi("Дальше", "Next")) + "</button>";
    } else {
      /* Уверенность спрашивается после выбора: она и засчитывает ответ.
         Разделение ловит угаданное — верно, но наугад. */
      html += '<button type="button" class="run__sure run__sure--no" data-conf="0"' +
              (run.pick ? "" : " disabled") + ">" +
              bi("Не уверена", "Unsure") + "</button>";
      html += '<button type="button" class="run__sure run__sure--yes" data-conf="1"' +
              (run.pick ? "" : " disabled") + ">" +
              bi("Уверена", "Certain") + "</button>";
    }
    html += "</div>";

    html += '<div class="run__move">';
    html += run.at > 0
      ? '<button type="button" class="tr__link" id="tr-back">' + bi("← Назад", "← Back") + "</button>"
      : "<span></span>";
    if (!answered) {
      html += '<button type="button" class="tr__link" id="tr-skip">' +
              bi("Пропустить →", "Skip →") + "</button>";
    } else if (run.at < run.items.length - 1) {
      html += '<button type="button" class="tr__link" id="tr-fwd">' +
              bi("Вперёд →", "Forward →") + "</button>";
    } else {
      html += "<span></span>";
    }
    html += "</div>";

    html += '<div class="run__quit"><button type="button" class="tr__link" id="tr-quit">' +
            bi("Прервать заход", "Stop this run") + "</button></div>";

    box.innerHTML = html;
  }

  /* Ссылка на подраздел, к которому относится вопрос. */
  function whereHtml(item) {
    var question = questionsOf(item.m)[item.i];
    var module = null;
    (window.MODULES || []).forEach(function (candidate) {
      if (candidate.id === item.m) module = candidate;
    });
    var ru = EA.sectionTitle(question.sec, "ru", item.m);
    var en = EA.sectionTitle(question.sec, "en", item.m);
    if (!ru && !en) return module ? bi(module.ru, module.en) : "";
    return '<a href="' + item.m + ".html#" + question.sec + '">' +
           bi(ru || "", en || "") + "</a>";
  }

  function answer(conf) {
    var item = run.items[run.at];
    var question = questionsOf(item.m)[item.i];
    var picked = run.pick;
    if (!picked) return;

    var answers = EA.loadAnswers(item.m);
    answers[item.i] = { a: picked, c: conf };
    EA.saveAnswers(item.m, answers);

    run.given[key(item)] = { a: picked, c: conf, right: picked === question.correct };
    run.pick = null;
    renderQuestion();
  }

  function step(delta) {
    var next = run.at + delta;
    if (next < 0 || next >= run.items.length) return;
    run.at = next;
    run.pick = null;
    renderQuestion();
    var box = host("tr-run");
    if (box) box.scrollIntoView({ block: "start" });
  }

  /* ---- Итог ----------------------------------------------------------- */

  function finish() {
    var box = host("tr-done");
    if (!box || !run) return;

    var score = tally();
    var total = run.items.length;
    var pct = score.done ? Math.round((score.ok / score.done) * 100) : 0;
    var sure = 0;
    run.items.forEach(function (item) {
      var mark = run.given[key(item)];
      if (mark && mark.right && mark.c === 1) sure++;
    });

    /* Заход, прерванный до первого ответа, в историю не попадает:
       строка «0 из 0» ничего не говорит и вытесняет настоящие. */
    if (score.done) {
      pushRun({
        d: new Date().toISOString().slice(0, 10),
        n: score.done, ok: score.ok, pct: pct
      });
    }

    var html = "";

    html += '<div class="done__head"><div class="done__pct">' + pct + "%</div>" +
            '<div class="done__lines"><p>' +
            bi("Верно " + score.ok + " из " + score.done +
               (score.done < total ? ", пропущено " + (total - score.done) : ""),
               score.ok + " correct of " + score.done +
               (score.done < total ? ", " + (total - score.done) + " skipped" : "")) +
            "</p><p class=\"done__sure\">" +
            bi("Из них уверенно: " + sure + ". Верный ответ с пометкой «не уверена» — тоже повод вернуться.",
               "Of those, " + sure + " answered with confidence. A right answer marked unsure is still worth revisiting.") +
            "</p></div></div>";

    /* Полоса по вопросам захода */
    html += '<div class="done__strip">';
    run.items.forEach(function (item, index) {
      var mark = run.given[key(item)];
      var cls = !mark ? "is-skip" : (mark.right ? "is-ok" : "is-no");
      html += '<span class="done__tick ' + cls + '" title="' + (index + 1) + '"></span>';
    });
    html += "</div>";

    html += sectionsHtml();
    html += reviewHtml();

    html += '<div class="done__acts">';
    var wrong = run.items.filter(function (item) {
      var mark = run.given[key(item)];
      return mark && !mark.right;
    });
    if (wrong.length) {
      html += '<button type="button" class="tr__go" id="tr-again">' +
              bi("Повторить ошибки (" + wrong.length + ")",
                 "Retry the " + (wrong.length === 1 ? "one missed" : wrong.length + " missed")) +
              "</button>";
    }
    html += '<button type="button" class="tr__go tr__go--quiet" id="tr-new">' +
            bi("Новый заход", "New run") + "</button></div>";

    box.innerHTML = html;
    show("tr-done");
    box.scrollIntoView({ block: "start" });
  }

  function sectionsHtml() {
    var rows = {}, order = [];
    run.items.forEach(function (item) {
      var question = questionsOf(item.m)[item.i];
      var id = item.m + "|" + question.sec;
      if (!rows[id]) {
        rows[id] = { m: item.m, sec: question.sec, n: 0, ok: 0, sure: 0 };
        order.push(id);
      }
      rows[id].n++;
      var mark = run.given[key(item)];
      if (mark && mark.right) {
        rows[id].ok++;
        if (mark.c === 1) rows[id].sure++;
      }
    });
    if (!order.length) return "";

    /* Сверху то, где больше ошибок: таблицу читают ради этого. */
    order.sort(function (a, b) {
      return (rows[b].n - rows[b].ok) - (rows[a].n - rows[a].ok);
    });

    var body = "";
    order.forEach(function (id) {
      var row = rows[id];
      var ru = EA.sectionTitle(row.sec, "ru", row.m);
      var en = EA.sectionTitle(row.sec, "en", row.m);
      body += "<tr><th><a href=\"" + row.m + ".html#" + row.sec + "\">" +
              bi(ru || row.sec, en || row.sec) + "</a></th>" +
              "<td>" + row.n + "</td><td>" + row.ok + "</td><td>" + row.sure + "</td></tr>";
    });

    return '<div class="tr__group"><h2>' +
           bi("По подразделам", "By subsection") + "</h2>" +
           '<div class="scroller"><table class="done__secs"><thead><tr>' +
           "<th>" + bi("Подраздел", "Subsection") + "</th>" +
           "<th>" + bi("Вопросов", "Asked") + "</th>" +
           "<th>" + bi("Верно", "Right") + "</th>" +
           "<th>" + bi("Уверенно", "Sure") + "</th></tr></thead>" +
           "<tbody>" + body + "</tbody></table></div></div>";
  }

  function reviewHtml() {
    var html = '<div class="tr__group"><h2>' +
               bi("Разбор вопросов", "Question review") + "</h2>";
    run.items.forEach(function (item, index) {
      var question = questionsOf(item.m)[item.i];
      var mark = run.given[key(item)];
      var badge = !mark ? '<span class="done__mark is-skip">–</span>'
        : (mark.right ? '<span class="done__mark is-ok">✓</span>'
                      : '<span class="done__mark is-no">✗</span>');

      html += '<details class="done__item"><summary>' + badge +
              '<span class="done__no">' + (index + 1) + "</span>" +
              '<span class="done__stem">' + bi(question.ru, question.en) + "</span></summary>";

      html += '<div class="q is-answered"><div class="q__opts">';
      question.opts.forEach(function (option) {
        var cls = "opt";
        if (option.k === question.correct) cls += " is-correct";
        else if (mark && option.k === mark.a) cls += " is-wrong";
        html += '<div class="' + cls + '"><span class="opt__k">' + option.k + "</span><span>" +
                bi(option.ru, option.en) + "</span></div>";
      });
      html += "</div><div class=\"why\"><dl>";
      question.opts.forEach(function (option) {
        var why = question.why[option.k] || {};
        html += "<dt>" + option.k + "</dt>" +
                '<dd class="' + (option.k === question.correct ? "ok" : "") + '">' +
                bi(why.ru || "", why.en || "") + "</dd>";
      });
      html += "</dl></div>";
      html += '<p class="run__where">' + whereHtml(item) + "</p></div></details>";
    });
    return html + "</div>";
  }

  /* ---- Сборка захода из настройки ------------------------------------- */

  function begin() {
    var items = select(setup.mods, setup.filter);
    if (!items.length) return;
    if (setup.order === "shuffle") shuffle(items);
    if (setup.limit) items = items.slice(0, setup.limit);
    startRun(items);
  }

  /* ---- Набор, переданный со страницы модуля ---------------------------

     Параметры не идут через адрес: под file:// это работало бы, но в
     собранном файле переходы перехватывает роутер, который смотрит
     только на окончание .html. Пресет одноразовый: прочитан — стёрт. */

  function takePreset() {
    var raw = EA.read(PRESET);
    if (!raw) return false;
    EA.write(PRESET, "");
    var value;
    try { value = JSON.parse(raw); } catch (e) { return false; }
    if (!value || !value.mods || !value.mods.length) return false;

    setup = {
      mods: value.mods,
      filter: value.filter || "all",
      limit: typeof value.limit === "number" ? value.limit : 0,
      order: value.order || "line"
    };
    renderSetup();
    if (value.go) { begin(); return true; }
    return false;
  }

  /* ---- Обработчики ---------------------------------------------------- */

  function onClick(event) {
    var target = event.target;
    var hit = function (selector) {
      return target.closest && target.closest(selector);
    };

    /* --- настройка --- */
    var mods = hit("[data-mods]");
    if (mods) {
      setup.mods = mods.dataset.mods === "all"
        ? modules().map(function (module) { return module.id; })
        : [];
      renderSetup();
      return;
    }

    /* Кнопки отбора перерисовывает сам refreshCounts, поэтому отмечать
       выбранную отдельно не нужно. Кнопки объёма и порядка он не трогает —
       им отметка нужна, иначе выбор не виден до перерисовки экрана. */
    var filter = hit("[data-filter]");
    if (filter) { setup.filter = filter.dataset.filter; refreshCounts(); return; }

    var limit = hit("[data-limit]");
    if (limit) {
      setup.limit = parseInt(limit.dataset.limit, 10);
      markOn(limit, ".tr__chip[data-limit]");
      refreshCounts();
      return;
    }

    var order = hit("[data-order]");
    if (order) { setup.order = order.dataset.order; markOn(order, ".tr__chip[data-order]"); return; }

    if (hit("#tr-go")) { begin(); return; }

    /* --- заход --- */
    if (!run) return;

    var pick = hit("[data-pick]");
    if (pick && !pick.disabled) { run.pick = pick.dataset.pick; renderQuestion(); return; }

    var conf = hit("[data-conf]");
    if (conf && !conf.disabled) { answer(parseInt(conf.dataset.conf, 10)); return; }

    if (hit("#tr-flag")) {
      var item = run.items[run.at];
      var flags = loadFlags(item.m);
      if (flags[item.i]) delete flags[item.i]; else flags[item.i] = true;
      saveFlags(item.m, flags);
      renderQuestion();
      return;
    }

    if (hit("#tr-next")) {
      if (run.at === run.items.length - 1) finish(); else step(1);
      return;
    }
    if (hit("#tr-fwd")) { step(1); return; }
    if (hit("#tr-back")) { step(-1); return; }
    if (hit("#tr-skip")) {
      if (run.at === run.items.length - 1) finish(); else step(1);
      return;
    }
    if (hit("#tr-quit")) { finish(); return; }

    /* --- итог --- */
    if (hit("#tr-again")) {
      startRun(run.items.filter(function (each) {
        var mark = run.given[key(each)];
        return mark && !mark.right;
      }));
      return;
    }
    if (hit("#tr-new")) { renderSetup(); show("tr-setup"); return; }
  }

  /* Подсветка выбранной кнопки без перерисовки всего экрана: перерисовка
     сбросила бы прокрутку к началу списка модулей. */
  function markOn(button, selector) {
    var siblings = document.querySelectorAll(selector);
    for (var i = 0; i < siblings.length; i++) {
      siblings[i].classList.toggle("is-on", siblings[i] === button);
    }
  }

  function onChange(event) {
    var box = event.target;
    if (!box.dataset || !box.dataset.mod) return;
    var id = box.dataset.mod;
    var at = setup.mods.indexOf(id);
    if (box.checked && at === -1) setup.mods.push(id);
    if (!box.checked && at !== -1) setup.mods.splice(at, 1);
    var label = box.closest(".tr__mod");
    if (label) label.classList.toggle("is-on", box.checked);
    refreshCounts();
  }

  function start() {
    if (!host("tr-setup") || !EA) return;
    document.addEventListener("click", onClick);
    document.addEventListener("change", onChange);
    if (!takePreset()) { renderSetup(); show("tr-setup"); }
  }

  /* В собранном файле тренажёр — секция того же документа, и переход к
     ней не перезагружает страницу. Пресет читается по переходу. */
  window.EA_TRAINER = {
    refresh: function () {
      if (!host("tr-setup")) return;
      if (!takePreset()) { renderSetup(); show("tr-setup"); }
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
