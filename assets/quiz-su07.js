/* ===================================================================
   Вопросы тренажёра, модуль 07.

   Отдельный файл, а не блок внутри страницы: под file:// страница не
   может прочитать другой файл, поэтому единственный способ отдать
   данные двум страницам сразу — тег <script src>. Файл подключают и
   su07.html, и trainer.html.

   QUIZSECS — названия подразделов. На странице модуля они есть в
   заголовках, на странице тренажёра их нет. Карта порождается
   скриптом из тех же заголовков, а сборка отказывается собирать
   файл, если названия разошлись.
   =================================================================== */

window.QUIZZES  = window.QUIZZES  || {};
window.QUIZSECS = window.QUIZSECS || {};

window.QUIZSECS.su07 = {
  s71: { no: "7.1", ru: "Что амортизируется и за сколько лет", en: "What is depreciated, and over how long" },
  s72: { no: "7.2", ru: "Списанное имущество и автомобили", en: "Listed property and automobiles" },
  s73: { no: "7.3", ru: "§179 и бонусная амортизация", en: "Section 179 and bonus depreciation" },
  s74: { no: "7.4", ru: "Нематериальные активы", en: "Intangible assets" },
  s75: { no: "7.5", ru: "Истощение природных ресурсов", en: "Depletion of natural resources" },
  s76: { no: "7.6", ru: "Возврат амортизации", en: "Depreciation recapture" }
};

window.QUIZZES.su07 = [
  {
    sec: "s71",
    ru: "Всё перечисленное — условия, при которых имущество амортизируется, КРОМЕ:",
    en: "All of the following are conditions for property to be depreciable EXCEPT:",
    opts: [
      { k: "A", ru: "Имущество принадлежит налогоплательщику", en: "The taxpayer owns the property" },
      { k: "B", ru: "У имущества определимый срок службы", en: "The property has a determinable useful life" },
      { k: "C", ru: "Имущество приносит доход в текущем году", en: "The property produces income in the current year" },
      { k: "D", ru: "Имущество прослужит дольше одного года", en: "The property will last more than one year" }
    ],
    correct: "C",
    why: {
      A: { ru: "Условие настоящее: арендованное имущество арендатор не амортизирует, хотя улучшения к нему — да.", en: "A genuine condition: a tenant does not depreciate leased property, though improvements to it are depreciated." },
      B: { ru: "Условие настоящее. Земля срока службы не имеет и потому не амортизируется.", en: "A genuine condition. Land has no useful life and so is not depreciated." },
      C: { ru: "Верно, это не условие. Достаточно, чтобы имущество использовалось в бизнесе или держалось для получения дохода; простаивающий станок списывается по расписанию дальше.", en: "Correct — this is not a condition. It is enough that the property is used in a business or held for the production of income; an idle machine keeps running down its schedule." },
      D: { ru: "Условие настоящее: то, что служит меньше года, — текущий расход.", en: "A genuine condition: what lasts less than a year is a current expense." }
    }
  },
  {
    sec: "s71",
    ru: "Дом, пригодный для сдачи, был объявлен к аренде 20 ноября. Жилец въехал 1 марта следующего года. С какой даты дом считается введённым в эксплуатацию?",
    en: "A house fit to let was advertised for rent on November 20. The tenant moved in on March 1 the following year. When is the house considered placed in service?",
    opts: [
      { k: "A", ru: "20 ноября", en: "November 20" },
      { k: "B", ru: "1 марта следующего года", en: "March 1 the following year" },
      { k: "C", ru: "31 декабря года объявления", en: "December 31 of the year of the advertisement" },
      { k: "D", ru: "В день получения первой арендной платы", en: "On the day the first rent is received" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Имущество введено в эксплуатацию, когда оно готово и доступно для определённого использования. По условности середины месяца ноябрь считается наполовину.", en: "Correct. Property is placed in service when it is ready and available for a specific use. Under the mid-month convention November counts as a half." },
      B: { ru: "Это дата начала фактического пользования, а она значения не имеет.", en: "That is when actual use began, and that does not matter." },
      C: { ru: "Условность середины месяца не переносит дату на конец года.", en: "The mid-month convention does not move the date to the year end." },
      D: { ru: "Получение дохода к вводу в эксплуатацию отношения не имеет.", en: "Receiving income has nothing to do with being placed in service." }
    }
  },
  {
    sec: "s71",
    ru: "За год введены в эксплуатацию станок за $60 000 в апреле и оборудование за $45 000 в ноябре. Другого имущества не покупали. Какая условность применяется?",
    en: "A $60,000 machine was placed in service in April and $45,000 of equipment in November. No other property was bought. Which convention applies?",
    opts: [
      { k: "A", ru: "Полугодовая для обоих объектов", en: "Half-year for both assets" },
      { k: "B", ru: "Середина квартала для обоих объектов", en: "Mid-quarter for both assets" },
      { k: "C", ru: "Полугодовая для апрельского, середина квартала для ноябрьского", en: "Half-year for the April asset and mid-quarter for the November one" },
      { k: "D", ru: "Середина месяца для обоих объектов", en: "Mid-month for both assets" }
    ],
    correct: "B",
    why: {
      A: { ru: "Доля последнего квартала — 45 000 ÷ 105 000 = 42,9%, а это больше 40%.", en: "The last-quarter share is 45,000 ÷ 105,000 = 42.9%, which is more than 40%." },
      B: { ru: "Верно. Порог в 40% перейдён, и середина квартала применяется ко всему имуществу года — каждому объекту по своему кварталу.", en: "Correct. The 40% threshold is crossed, and the mid-quarter convention applies to all the year's property — each asset by its own quarter." },
      C: { ru: "Условность одна на весь год: смешивать две в одном году нельзя.", en: "The convention is one for the whole year: two cannot be mixed in one year." },
      D: { ru: "Середина месяца применяется только к недвижимости.", en: "The mid-month convention applies only to real property." }
    }
  },
  {
    sec: "s71",
    ru: "Альтернативная система амортизации обязательна во всех перечисленных случаях, КРОМЕ:",
    en: "The alternative depreciation system is required in all of the following cases EXCEPT:",
    opts: [
      { k: "A", ru: "Материальное имущество используется преимущественно за пределами США", en: "Tangible property used predominantly outside the United States" },
      { k: "B", ru: "Имущество профинансировано освобождёнными от налога облигациями", en: "Property financed by tax-exempt bonds" },
      { k: "C", ru: "Списанное имущество с деловым использованием не больше 50%", en: "Listed property with business use of 50% or less" },
      { k: "D", ru: "Имущество куплено бывшим в употреблении", en: "The property was bought used" }
    ],
    correct: "D",
    why: {
      A: { ru: "Обязательный случай: заграничное использование выводит имущество из общей системы.", en: "A required case: use abroad takes the property out of the general system." },
      B: { ru: "Обязательный случай.", en: "A required case." },
      C: { ru: "Обязательный случай, и вдобавок §179 в нём недоступен.", en: "A required case, and section 179 is unavailable there as well." },
      D: { ru: "Верно. Бывшее в употреблении имущество амортизируется по общей системе так же, как новое; в 2025 году оно даже получает бонусную амортизацию.", en: "Correct. Used property is depreciated under the general system just as new property is; in 2025 it even qualifies for bonus depreciation." }
    }
  },
  {
    sec: "s71",
    ru: "Офисное здание введено в эксплуатацию в 2025 году. Какой срок возмещения по общей системе?",
    en: "An office building was placed in service in 2025. What is its recovery period under the general system?",
    opts: [
      { k: "A", ru: "27,5 года", en: "27.5 years" },
      { k: "B", ru: "31,5 года", en: "31.5 years" },
      { k: "C", ru: "39 лет", en: "39 years" },
      { k: "D", ru: "40 лет", en: "40 years" }
    ],
    correct: "C",
    why: {
      A: { ru: "27,5 года — жилая арендная недвижимость, где не менее 80% платы идёт от жилых помещений.", en: "27.5 years is residential rental property, where at least 80% of the rents come from dwelling units." },
      B: { ru: "31,5 года применялось к нежилой недвижимости, введённой до мая 1993 года.", en: "31.5 years applied to nonresidential real property placed in service before May 1993." },
      C: { ru: "Верно. Нежилая недвижимость — 39 лет прямолинейно, условность середины месяца.", en: "Correct. Nonresidential real property is 39 years straight line, mid-month convention." },
      D: { ru: "40 лет — это срок нежилой недвижимости по альтернативной системе.", en: "40 years is the nonresidential period under the alternative system." }
    }
  },
  {
    sec: "s71",
    ru: "Налогоплательщик четыре года подряд не заявлял амортизацию по станку, хотя имел на неё право. Как исправить положение?",
    en: "A taxpayer failed to claim depreciation on a machine for four consecutive years although entitled to it. How is this corrected?",
    opts: [
      { k: "A", ru: "Подать уточнённые декларации за все четыре года", en: "File amended returns for all four years" },
      { k: "B", ru: "Подать форму 3115 и взять корректировку по §481(a)", en: "File Form 3115 and take a section 481(a) adjustment" },
      { k: "C", ru: "Ничего делать не нужно: базис станка не уменьшился", en: "Nothing need be done: the machine's basis was not reduced" },
      { k: "D", ru: "Увеличить амортизацию будущих лет на недобранное", en: "Increase future years' depreciation by the shortfall" }
    ],
    correct: "B",
    why: {
      A: { ru: "Один и тот же неверный порядок в двух и более подряд декларациях становится принятым методом учёта, а метод уточнённой декларацией не меняют.", en: "The same wrong treatment in two or more consecutive returns becomes an adopted method of accounting, and a method is not changed by an amended return." },
      B: { ru: "Верно. Метод считается принятым, меняется он формой 3115, и корректировка по §481(a) даёт весь накопленный вычет в год исправления.", en: "Correct. The method counts as adopted, it is changed on Form 3115, and the section 481(a) adjustment gives the whole accumulated deduction in the year of correction." },
      C: { ru: "Базис уменьшается на амортизацию заявленную или полагавшуюся — на большую из двух. Он упал.", en: "Basis is reduced by depreciation allowed or allowable — the greater of the two. It did fall." },
      D: { ru: "Расписание амортизации задано законом и на недобранное не растягивается.", en: "The depreciation schedule is fixed by law and is not stretched to cover a shortfall." }
    }
  },
  {
    sec: "s71",
    ru: "Имущество не названо ни в одном классе MACRS и не имеет установленного среднего срока. К какому классу оно относится?",
    en: "Property is named in no MACRS class and has no class life assigned. Which class does it fall into?",
    opts: [
      { k: "A", ru: "Трёхлетнему", en: "Three-year" },
      { k: "B", ru: "Пятилетнему", en: "Five-year" },
      { k: "C", ru: "Семилетнему", en: "Seven-year" },
      { k: "D", ru: "Двенадцатилетнему", en: "Twelve-year" }
    ],
    correct: "C",
    why: {
      A: { ru: "Трёхлетний класс — специальный инструмент, тягачи, скаковые лошади старше двух лет.", en: "The three-year class holds special tools, tractor units and race horses over two years old." },
      B: { ru: "Пятилетний класс перечислен прямо: машины, компьютеры, оргтехника, племенной скот.", en: "The five-year class is listed expressly: cars, computers, office machinery, breeding livestock." },
      C: { ru: "Верно. Семилетний класс — корзина по умолчанию для всего, что нигде не названо и не имеет установленного среднего срока.", en: "Correct. The seven-year class is the default bucket for anything not named elsewhere and having no class life." },
      D: { ru: "Двенадцать лет — срок по альтернативной системе для личного имущества без установленного срока, а не класс общей системы.", en: "Twelve years is the alternative-system period for personal property with no class life, not a general-system class." }
    }
  },
  {
    sec: "s72",
    ru: "Что из перечисленного НЕ является списанным имуществом для налоговых периодов после 2017 года?",
    en: "Which of the following is NOT listed property for tax years after 2017?",
    opts: [
      { k: "A", ru: "Легковой автомобиль", en: "A passenger automobile" },
      { k: "B", ru: "Настольный компьютер", en: "A desktop computer" },
      { k: "C", ru: "Видеокамера", en: "A video camera" },
      { k: "D", ru: "Деловой самолёт", en: "A business aircraft" }
    ],
    correct: "B",
    why: {
      A: { ru: "Легковые машины — первая и главная категория списанного имущества.", en: "Passenger automobiles are the first and chief category of listed property." },
      B: { ru: "Верно. С налоговых периодов, начинающихся после 2017 года, компьютеры и периферия из перечня исключены и амортизируются как обычное пятилетнее имущество.", en: "Correct. For tax years beginning after 2017 computers and peripheral equipment are off the list and are depreciated as ordinary five-year property." },
      C: { ru: "Видеокамера — имущество для развлечения и записи, оно в перечне.", en: "A video camera is entertainment and recording property, and is on the list." },
      D: { ru: "Деловые самолёты названы в перечне прямо.", en: "Business aircraft are named on the list expressly." }
    }
  },
  {
    sec: "s72",
    ru: "Машина используется 45% в бизнесе, 30% для поездок к своим инвестиционным объектам и 25% лично. Что верно?",
    en: "A car is used 45% in the business, 30% for trips to the owner's investment properties and 25% personally. Which is true?",
    opts: [
      { k: "A", ru: "§179 доступен: деловое и инвестиционное использование вместе дают 75%", en: "Section 179 is available: business and investment use together come to 75%" },
      { k: "B", ru: "§179 недоступен, амортизация считается от 75% по альтернативной системе", en: "Section 179 is unavailable; depreciation is figured on 75% under the alternative system" },
      { k: "C", ru: "§179 недоступен, амортизация считается от 45% по альтернативной системе", en: "Section 179 is unavailable; depreciation is figured on 45% under the alternative system" },
      { k: "D", ru: "Амортизация не полагается вовсе", en: "No depreciation is allowed at all" }
    ],
    correct: "B",
    why: {
      A: { ru: "Инвестиционное использование в тест на превышение половины не входит: в нём участвуют только 45%.", en: "Investment use does not enter the more-than-half test: only the 45% takes part in it." },
      B: { ru: "Верно. Тест провален по 45%, значит §179 и бонус недоступны и применяется альтернативная система; но сама сумма амортизации считается от 75%, поскольку инвестиционное использование вычет всё же зарабатывает.", en: "Correct. The test fails at 45%, so section 179 and bonus are unavailable and the alternative system applies; but the amount of depreciation is figured on 75%, since investment use does earn a deduction." },
      C: { ru: "45% — это цифра для теста. Для расчёта вычета берётся вся деловая и инвестиционная доля.", en: "45% is the figure for the test. The deduction is figured on the whole business and investment share." },
      D: { ru: "Провал теста лишает §179 и общей системы, но не самой амортизации.", en: "Failing the test costs section 179 and the general system, but not depreciation itself." }
    }
  },
  {
    sec: "s72",
    ru: "1 июня 2025 года куплена легковая машина за $55 000 массой 4 000 фунтов. Деловое использование 70%, бонусная амортизация применяется. Каков вычет первого года?",
    en: "On June 1, 2025 a passenger car weighing 4,000 pounds was bought for $55,000. Business use is 70% and bonus depreciation is claimed. What is the first-year deduction?",
    opts: [
      { k: "A", ru: "$38 500", en: "$38,500" },
      { k: "B", ru: "$20 200", en: "$20,200" },
      { k: "C", ru: "$14 140", en: "$14,140" },
      { k: "D", ru: "$8 540", en: "$8,540" }
    ],
    correct: "C",
    why: {
      A: { ru: "Это стопроцентный бонус на деловой базис без учёта потолка §280F.", en: "That is the 100% bonus on the business basis with no regard to the section 280F cap." },
      B: { ru: "Потолок взят целиком, а его ещё умножают на долю делового использования.", en: "The cap is taken in full, but it must still be multiplied by the business-use share." },
      C: { ru: "Верно. Потолок первого года с бонусом $20 200 умножается на 70% и даёт $14 140. Это меньше того, что дал бы бонус, значит вычетом становится потолок.", en: "Correct. The first-year cap with bonus of $20,200 is multiplied by 70% to give $14,140. That is less than the bonus would give, so the cap is the deduction." },
      D: { ru: "Это потолок для случая без бонусной амортизации, умноженный на 70%.", en: "That is the no-bonus cap multiplied by 70%." }
    }
  },
  {
    sec: "s72",
    ru: "Куплен внедорожник полной массой 6 800 фунтов за $90 000, используется в бизнесе на 100%. Каков максимальный вычет по §179?",
    en: "A sport utility vehicle rated at 6,800 pounds was bought for $90,000 and is used 100% in the business. What is the maximum section 179 deduction?",
    opts: [
      { k: "A", ru: "$90 000", en: "$90,000" },
      { k: "B", ru: "$31 300", en: "$31,300" },
      { k: "C", ru: "$20 200", en: "$20,200" },
      { k: "D", ru: "$12 200", en: "$12,200" }
    ],
    correct: "B",
    why: {
      A: { ru: "Пределы §280F тяжёлой машины не касаются, но собственный потолок §179 для внедорожников есть.", en: "The section 280F limits do not touch a heavy vehicle, but section 179 has its own cap for sport utility vehicles." },
      B: { ru: "Верно. Для машин массой свыше 6 000 и не более 14 000 фунтов вычет по §179 ограничен $31 300. Остаток базиса при этом идёт под бонусную амортизацию без ограничения.", en: "Correct. For vehicles rated above 6,000 and not more than 14,000 pounds the section 179 deduction is capped at $31,300. The rest of the basis then goes to bonus depreciation without limit." },
      C: { ru: "$20 200 — потолок §280F для лёгкой машины, а эта тяжёлая.", en: "$20,200 is the section 280F cap for a light vehicle, and this one is heavy." },
      D: { ru: "$12 200 — потолок §280F без бонуса, и к тяжёлой машине он тоже не применяется.", en: "$12,200 is the section 280F cap without bonus, and it does not apply to a heavy vehicle either." }
    }
  },
  {
    sec: "s72",
    ru: "Налогоплательщик считает расходы на деловую машину по стандартной ставке за милю. Что из этого следует?",
    en: "A taxpayer figures the expenses of a business car at the standard mileage rate. What follows?",
    opts: [
      { k: "A", ru: "Амортизацию можно взять дополнительно к ставке", en: "Depreciation may be taken in addition to the rate" },
      { k: "B", ru: "Машина считается исключённой из MACRS, базис уменьшается на амортизационную часть ставки", en: "The car is treated as excluded from MACRS, and its basis is reduced by the depreciation part of the rate" },
      { k: "C", ru: "Базис машины не уменьшается вовсе", en: "The car's basis is not reduced at all" },
      { k: "D", ru: "Можно дополнительно заявить §179", en: "Section 179 may additionally be claimed" }
    ],
    correct: "B",
    why: {
      A: { ru: "Часть ставки и есть амортизация; отдельно её брать нельзя.", en: "Part of the rate is depreciation; it may not be taken separately." },
      B: { ru: "Верно. Применение стандартной ставки считается выбором исключения машины из MACRS, а базис всё равно уменьшается на амортизационную часть ставки — со всеми последствиями при продаже.", en: "Correct. Using the standard rate counts as an election to exclude the car from MACRS, and the basis is still reduced by the depreciation part of the rate — with every consequence that follows on a sale." },
      C: { ru: "Уменьшается: иначе при продаже прибыль оказалась бы занижена.", en: "It is reduced: otherwise the gain on a sale would be understated." },
      D: { ru: "§179 — тоже способ возмещения стоимости, и вместе со ставкой он не применяется.", en: "Section 179 is a cost recovery method too, and it is not combined with the rate." }
    }
  },
  {
    sec: "s73",
    ru: "Каков максимальный вычет по §179 за 2025 год?",
    en: "What is the maximum section 179 deduction for 2025?",
    opts: [
      { k: "A", ru: "$1 250 000", en: "$1,250,000" },
      { k: "B", ru: "$2 500 000", en: "$2,500,000" },
      { k: "C", ru: "$4 000 000", en: "$4,000,000" },
      { k: "D", ru: "$6 500 000", en: "$6,500,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это предел прежних лет, до повышения законом от 4 июля 2025 года.", en: "That is the limit of earlier years, before the increase by the act of July 4, 2025." },
      B: { ru: "Верно. $2 500 000 на 2025 год.", en: "Correct. $2,500,000 for 2025." },
      C: { ru: "$4 000 000 — порог, выше которого вычет начинает уменьшаться, а не сам вычет.", en: "$4,000,000 is the threshold above which the deduction starts to shrink, not the deduction itself." },
      D: { ru: "$6 500 000 — уровень закупок, при котором вычет обнуляется.", en: "$6,500,000 is the level of purchases at which the deduction reaches zero." }
    }
  },
  {
    sec: "s73",
    ru: "За 2025 год введено имущество §179 на $4 600 000. Доход от деятельности велик. Каков предел вычета?",
    en: "Section 179 property of $4,600,000 was placed in service in 2025. Business income is ample. What is the deduction limit?",
    opts: [
      { k: "A", ru: "$2 500 000", en: "$2,500,000" },
      { k: "B", ru: "$1 900 000", en: "$1,900,000" },
      { k: "C", ru: "$600 000", en: "$600,000" },
      { k: "D", ru: "$0", en: "$0" }
    ],
    correct: "B",
    why: {
      A: { ru: "Предел уменьшается на превышение закупок над порогом $4 000 000.", en: "The limit is reduced by the excess of purchases over the $4,000,000 threshold." },
      B: { ru: "Верно. $2 500 000 − ($4 600 000 − $4 000 000) = $1 900 000.", en: "Correct. $2,500,000 − ($4,600,000 − $4,000,000) = $1,900,000." },
      C: { ru: "$600 000 — само превышение, а не остаток вычета.", en: "$600,000 is the excess itself, not what is left of the deduction." },
      D: { ru: "Вычет обнуляется только при закупках $6 500 000 и выше.", en: "The deduction reaches zero only at purchases of $6,500,000 and above." }
    }
  },
  {
    sec: "s73",
    ru: "Предприниматель ввёл в эксплуатацию имущество §179 на $6 700 000. Каков его вычет по §179?",
    en: "A business placed in service $6,700,000 of section 179 property. What is its section 179 deduction?",
    opts: [
      { k: "A", ru: "$2 500 000", en: "$2,500,000" },
      { k: "B", ru: "$300 000", en: "$300,000" },
      { k: "C", ru: "$0", en: "$0" },
      { k: "D", ru: "$2 200 000", en: "$2,200,000" }
    ],
    correct: "C",
    why: {
      A: { ru: "Уменьшение за объём закупок не применено.", en: "The reduction for the volume of purchases has not been applied." },
      B: { ru: "$300 000 — превышение над $6 400 000, а порог не там.", en: "$300,000 is the excess over $6,400,000, and the threshold is not there." },
      C: { ru: "Верно. $2 500 000 − ($6 700 000 − $4 000 000) — величина отрицательная, значит вычета нет. Обнуление наступает при $6 500 000.", en: "Correct. $2,500,000 − ($6,700,000 − $4,000,000) is negative, so there is no deduction. It reaches zero at $6,500,000." },
      D: { ru: "Так получилось бы при закупках $4 300 000.", en: "That would be the answer at purchases of $4,300,000." }
    }
  },
  {
    sec: "s73",
    ru: "Предел по §179 после уменьшения за объём закупок составил $2 000 000, а налогооблагаемый доход от активной деятельности — $1 400 000. Что происходит с разницей?",
    en: "After the reduction for purchases the section 179 limit was $2,000,000 and taxable income from the active business was $1,400,000. What happens to the difference?",
    opts: [
      { k: "A", ru: "Пропадает безвозвратно", en: "It is lost for good" },
      { k: "B", ru: "Переносится вперёд без ограничения срока", en: "It carries forward with no time limit" },
      { k: "C", ru: "Переносится вперёд не более чем на пять лет", en: "It carries forward for no more than five years" },
      { k: "D", ru: "Переносится назад на два года", en: "It carries back two years" }
    ],
    correct: "B",
    why: {
      A: { ru: "Безвозвратно пропадает то, что срезано уменьшением за объём закупок, а не пределом дохода.", en: "What is lost for good is what the reduction for purchases cut, not what the income limit cut." },
      B: { ru: "Верно. Излишек над пределом дохода переносится вперёд на неограниченное число лет и участвует в вычете следующего года.", en: "Correct. The excess over the income limit carries forward for an unlimited number of years and enters the next year's deduction." },
      C: { ru: "Пятилетнего ограничения здесь нет.", en: "There is no five-year limit here." },
      D: { ru: "Переноса назад §179 не знает.", en: "Section 179 knows no carryback." }
    }
  },
  {
    sec: "s73",
    ru: "Куплено оборудование: $22 000 уплачено деньгами и получен зачёт $6 000 за старое оборудование со скорректированным базисом $2 500. Какая сумма подпадает под §179?",
    en: "Equipment was bought for $22,000 in cash plus a $6,000 trade-in allowance for old equipment with an adjusted basis of $2,500. What amount qualifies for section 179?",
    opts: [
      { k: "A", ru: "$28 000", en: "$28,000" },
      { k: "B", ru: "$24 500", en: "$24,500" },
      { k: "C", ru: "$22 000", en: "$22,000" },
      { k: "D", ru: "$25 500", en: "$25,500" }
    ],
    correct: "C",
    why: {
      A: { ru: "$28 000 — полный базис нового оборудования для амортизации, но под §179 попадает не он.", en: "$28,000 is the new equipment's full basis for depreciation, but that is not what qualifies for section 179." },
      B: { ru: "Так считали бы при обмене на подобное до 2018 года: деньги плюс базис старого.", en: "That is the pre-2018 like-kind computation: cash plus the old asset's basis." },
      C: { ru: "Верно. При покупке с зачётом под §179 подпадает только уплаченное деньгами. Оставшиеся $6 000 базиса амортизируются по общим правилам, а выбытие старого оборудования даёт $3 500 обычного дохода по §1245.", en: "Correct. On a purchase with a trade-in only the cash paid qualifies for section 179. The remaining $6,000 of basis is depreciated under the general rules, and the disposal of the old equipment gives $3,500 of ordinary income under section 1245." },
      D: { ru: "Такого правила нет ни до, ни после 2018 года.", en: "No such rule exists either before or after 2018." }
    }
  },
  {
    sec: "s73",
    ru: "Куплен станок за $40 000, используется в бизнесе на 85%, остальное — лично. Какая сумма может быть списана по §179?",
    en: "A machine was bought for $40,000 and is used 85% in the business, the rest personally. What amount may be expensed under section 179?",
    opts: [
      { k: "A", ru: "$40 000", en: "$40,000" },
      { k: "B", ru: "$34 000", en: "$34,000" },
      { k: "C", ru: "$20 000", en: "$20,000" },
      { k: "D", ru: "Ничего: при личном использовании §179 недоступен", en: "Nothing: section 179 is unavailable where there is personal use" }
    ],
    correct: "B",
    why: {
      A: { ru: "Личная доля вычету не подлежит ни по какому правилу.", en: "The personal share is not deductible under any rule." },
      B: { ru: "Верно. По §179 списывается только деловая доля стоимости: $40 000 × 85%.", en: "Correct. Only the business share of the cost is expensed under section 179: $40,000 × 85%." },
      C: { ru: "Половина здесь ни при чём: порог в половину — правило списанного имущества, а станок к нему не относится.", en: "Half has nothing to do with it: the more-than-half threshold is a listed-property rule, and a machine is not listed property." },
      D: { ru: "§179 доступен, просто в доле делового использования.", en: "Section 179 is available, merely limited to the business share." }
    }
  },
  {
    sec: "s73",
    ru: "Оборудование приобретено по договору от 12 января 2025 года и введено в эксплуатацию в сентябре 2025 года. Какая ставка бонусной амортизации?",
    en: "Equipment was acquired under an agreement dated January 12, 2025 and placed in service in September 2025. What bonus depreciation rate applies?",
    opts: [
      { k: "A", ru: "100%", en: "100%" },
      { k: "B", ru: "60%", en: "60%" },
      { k: "C", ru: "40%", en: "40%" },
      { k: "D", ru: "0%", en: "0%" }
    ],
    correct: "C",
    why: {
      A: { ru: "Стопроцентный бонус полагается имуществу, приобретённому после 19 января 2025 года. Здесь договор подписан раньше.", en: "The 100% allowance belongs to property acquired after January 19, 2025. Here the agreement predates that." },
      B: { ru: "60% — это ставка для имущества с долгим циклом производства и некоторых самолётов.", en: "60% is the rate for long production period property and certain aircraft." },
      C: { ru: "Верно. Решает дата приобретения, а не дата ввода в эксплуатацию: договор от 12 января даёт 40%.", en: "Correct. What decides is the date of acquisition, not the date placed in service: an agreement of January 12 gives 40%." },
      D: { ru: "Бонус в 2025 году есть, вопрос только в ставке.", en: "There is a bonus in 2025; the only question is the rate." }
    }
  },
  {
    sec: "s73",
    ru: "Оборудование пятилетнего класса за $100 000 приобретено в марте 2025 года и тогда же введено в эксплуатацию. Заявлен §179 на $40 000, бонус не отклонён. Каков вычет первого года?",
    en: "Five-year class equipment costing $100,000 was acquired and placed in service in March 2025. Section 179 of $40,000 was elected and the bonus was not declined. What is the first-year deduction?",
    opts: [
      { k: "A", ru: "$40 000", en: "$40,000" },
      { k: "B", ru: "$71 200", en: "$71,200" },
      { k: "C", ru: "$100 000", en: "$100,000" },
      { k: "D", ru: "$60 000", en: "$60,000" }
    ],
    correct: "C",
    why: {
      A: { ru: "Учтён только §179, а бонус применяется автоматически, если от него не отказались.", en: "Only section 179 is counted, but the bonus applies automatically unless declined." },
      B: { ru: "Так вышло бы при бонусе 40%, то есть если бы договор был подписан до 20 января: 40 000 + 24 000 + 7 200.", en: "That would arise at a 40% bonus, that is if the agreement had been dated before January 20: 40,000 + 24,000 + 7,200." },
      C: { ru: "Верно. Имущество приобретено после 19 января 2025 года, значит бонус стопроцентный: §179 даёт $40 000, бонус закрывает оставшиеся $60 000, обычной амортизации не остаётся.", en: "Correct. The property was acquired after January 19, 2025, so the bonus is 100%: section 179 gives $40,000 and the bonus covers the remaining $60,000, leaving nothing for regular depreciation." },
      D: { ru: "$60 000 — это остаток базиса после §179, а не вычет.", en: "$60,000 is the basis left after section 179, not the deduction." }
    }
  },
  {
    sec: "s73",
    ru: "В каком порядке применяются вычеты к базису вновь купленного имущества?",
    en: "In what order are the deductions applied to the basis of newly bought property?",
    opts: [
      { k: "A", ru: "Бонус, затем §179, затем обычная амортизация", en: "Bonus, then section 179, then regular depreciation" },
      { k: "B", ru: "§179, затем бонус, затем обычная амортизация", en: "Section 179, then bonus, then regular depreciation" },
      { k: "C", ru: "Обычная амортизация, затем §179, затем бонус", en: "Regular depreciation, then section 179, then bonus" },
      { k: "D", ru: "Порядок значения не имеет: итог один и тот же", en: "The order does not matter: the total is the same" }
    ],
    correct: "B",
    why: {
      A: { ru: "Обратный порядок даёт другой ответ, потому что бонус считается от остатка после §179.", en: "The reverse order gives a different answer, because the bonus is figured on what is left after section 179." },
      B: { ru: "Верно. §179 уменьшает базис первым, бонус берётся от остатка, а ставка MACRS применяется к тому, что осталось после обоих.", en: "Correct. Section 179 reduces basis first, the bonus is taken on the remainder, and the MACRS rate is applied to what is left after both." },
      C: { ru: "Обычная амортизация всегда последняя.", en: "Regular depreciation always comes last." },
      D: { ru: "Итог разный: каждая ступень считается от уменьшенного остатка.", en: "The totals differ: each step is figured on a reduced remainder." }
    }
  },
  {
    sec: "s73",
    ru: "Что верно в сравнении §179 и бонусной амортизации?",
    en: "Which is true when section 179 and bonus depreciation are compared?",
    opts: [
      { k: "A", ru: "Оба могут создать или увеличить убыток", en: "Both can create or increase a loss" },
      { k: "B", ru: "Ни один из них не может создать убыток", en: "Neither can create a loss" },
      { k: "C", ru: "§179 может создать убыток, бонус — нет", en: "Section 179 can create a loss; the bonus cannot" },
      { k: "D", ru: "Бонус может создать убыток, §179 — нет", en: "The bonus can create a loss; section 179 cannot" }
    ],
    correct: "D",
    why: {
      A: { ru: "§179 упирается в налогооблагаемый доход от активной деятельности.", en: "Section 179 stops at taxable income from the active conduct of a business." },
      B: { ru: "Бонус пределом дохода не ограничен вовсе.", en: "The bonus is not limited by income at all." },
      C: { ru: "Всё наоборот.", en: "It is the other way round." },
      D: { ru: "Верно. Бонусная амортизация пределом дохода не ограничена и убыток создать может; §179 — нет, его излишек переносится вперёд.", en: "Correct. Bonus depreciation is not limited by income and can create a loss; section 179 cannot, and its excess carries forward." }
    }
  },
  {
    sec: "s73",
    ru: "Кто НЕ может воспользоваться вычетом по §179?",
    en: "Who may NOT take a section 179 deduction?",
    opts: [
      { k: "A", ru: "Индивидуальный предприниматель", en: "A sole proprietor" },
      { k: "B", ru: "Партнёрство", en: "A partnership" },
      { k: "C", ru: "Траст", en: "A trust" },
      { k: "D", ru: "S-корпорация", en: "An S corporation" }
    ],
    correct: "C",
    why: {
      A: { ru: "Предприниматель — типичный пользователь §179.", en: "A sole proprietor is the typical user of section 179." },
      B: { ru: "Партнёрство заявляет вычет на своём уровне и распределяет его между партнёрами.", en: "A partnership claims the deduction at its own level and allocates it to the partners." },
      C: { ru: "Верно. Наследственные массы и трасты вычета по §179 не заявляют.", en: "Correct. Estates and trusts do not claim the section 179 deduction." },
      D: { ru: "S-корпорация заявляет вычет и передаёт его акционерам.", en: "An S corporation claims the deduction and passes it through to its shareholders." }
    }
  },
  {
    sec: "s73",
    ru: "Станок был списан по §179 в 2023 году. В 2025 году, внутри срока возмещения, деловое использование упало до 40%. Что происходит?",
    en: "A machine was expensed under section 179 in 2023. In 2025, still within the recovery period, business use fell to 40%. What happens?",
    opts: [
      { k: "A", ru: "Ничего: вычет уже взят и пересмотру не подлежит", en: "Nothing: the deduction has been taken and is not revisited" },
      { k: "B", ru: "Подаётся уточнённая декларация за 2023 год", en: "An amended return for 2023 is filed" },
      { k: "C", ru: "В доход 2025 года включается превышение взятого §179 над амортизацией, полагавшейся без него", en: "Income of 2025 includes the excess of the section 179 taken over the depreciation allowable without it" },
      { k: "D", ru: "Весь вычет 2023 года включается в доход 2025 года", en: "The whole 2023 deduction is included in 2025 income" }
    ],
    correct: "C",
    why: {
      A: { ru: "Возврат при падении делового использования — прямое правило §179.", en: "Recapture on a drop in business use is an express section 179 rule." },
      B: { ru: "Возврат берётся в год падения, а не через пересмотр прошлого года.", en: "The recapture is taken in the year of the drop, not by revisiting the past year." },
      C: { ru: "Верно. Возвращается разница между взятым и тем, что полагалось бы по обычной амортизации, и она прибавляется к базису имущества.", en: "Correct. What comes back is the difference between what was taken and what regular depreciation would have allowed, and it is added back to the property's basis." },
      D: { ru: "Возвращается не весь вычет, а только превышение над полагавшейся амортизацией.", en: "Not the whole deduction comes back, only the excess over the depreciation that was allowable." }
    }
  },
  {
    sec: "s74",
    ru: "Всё перечисленное — нематериальные активы §197, КРОМЕ:",
    en: "All of the following are section 197 intangibles EXCEPT:",
    opts: [
      { k: "A", ru: "Гудвилл", en: "Goodwill" },
      { k: "B", ru: "Интерес в земельном участке", en: "An interest in land" },
      { k: "C", ru: "Обязательство не конкурировать", en: "A covenant not to compete" },
      { k: "D", ru: "Лицензия, выданная органом власти", en: "A licence granted by a government unit" }
    ],
    correct: "B",
    why: {
      A: { ru: "Гудвилл — первый и самый типичный актив §197.", en: "Goodwill is the first and most typical section 197 asset." },
      B: { ru: "Верно. Интересы в земле из §197 прямо исключены, а сама земля не амортизируется ни по какому правилу.", en: "Correct. Interests in land are expressly excluded from section 197, and land itself is depreciated under no rule whatever." },
      C: { ru: "Обязательство не конкурировать названо среди активов §197 прямо.", en: "A covenant not to compete is expressly named among section 197 assets." },
      D: { ru: "Лицензии и разрешения органов власти входят в §197.", en: "Licences and permits granted by government units are within section 197." }
    }
  },
  {
    sec: "s74",
    ru: "При покупке бизнеса получено обязательство прежнего владельца не конкурировать в течение трёх лет. За сколько лет оно списывается?",
    en: "On the purchase of a business the former owner gave a covenant not to compete for three years. Over how long is it amortized?",
    opts: [
      { k: "A", ru: "Три года — по сроку договора", en: "Three years — the term of the agreement" },
      { k: "B", ru: "Пять лет", en: "Five years" },
      { k: "C", ru: "Пятнадцать лет", en: "Fifteen years" },
      { k: "D", ru: "Не списывается вовсе", en: "It is not amortized at all" }
    ],
    correct: "C",
    why: {
      A: { ru: "Настоящий срок актива на расписание §197 не влияет никак.", en: "The asset's real life has no effect whatever on the section 197 schedule." },
      B: { ru: "Пятилетнего срока в §197 нет.", en: "There is no five-year period in section 197." },
      C: { ru: "Верно. Обязательство не конкурировать, полученное при приобретении бизнеса, — актив §197 и списывается за 15 лет, каков бы ни был его договорной срок.", en: "Correct. A covenant not to compete received on the acquisition of a business is a section 197 asset and is amortized over 15 years, whatever its contractual term." },
      D: { ru: "Списывается, и это прямо предусмотрено §197.", en: "It is amortized, and section 197 says so expressly." }
    }
  },
  {
    sec: "s74",
    ru: "Франшиза куплена в марте, а само кафе открылось в августе того же года. С какого месяца начинается списание по §197?",
    en: "A franchise was bought in March and the café itself opened in August of the same year. From which month does section 197 amortization begin?",
    opts: [
      { k: "A", ru: "С марта — месяца приобретения", en: "From March — the month of acquisition" },
      { k: "B", ru: "С августа — месяца начала деятельности", en: "From August — the month the activity began" },
      { k: "C", ru: "С января следующего года", en: "From January of the following year" },
      { k: "D", ru: "С середины года, по условности", en: "From mid-year, by convention" }
    ],
    correct: "B",
    why: {
      A: { ru: "Берётся более поздний из двух месяцев, а не месяц приобретения сам по себе.", en: "The later of the two months is taken, not the month of acquisition on its own." },
      B: { ru: "Верно. Отсчёт 180 месяцев начинается с более позднего из двух: месяца приобретения актива или месяца начала деятельности.", en: "Correct. The 180 months begin with the later of two: the month the intangible was acquired or the month the activity began." },
      C: { ru: "Отсрочки до нового года §197 не знает.", en: "Section 197 knows no deferral to the new year." },
      D: { ru: "Условностей полугодия и середины квартала §197 не применяет: счёт помесячный.", en: "Section 197 applies no half-year or mid-quarter convention: the count is monthly." }
    }
  },
  {
    sec: "s74",
    ru: "1 июля 2025 года куплено и сразу начало работать агентство. В цене выделены гудвилл $180 000, обязательство не конкурировать $36 000 и доля в земле $50 000. Каков вычет списания за 2025 год?",
    en: "On July 1, 2025 an agency was bought and began operating at once. The price included goodwill of $180,000, a covenant not to compete of $36,000 and an interest in land of $50,000. What is the 2025 amortization deduction?",
    opts: [
      { k: "A", ru: "$7 200", en: "$7,200" },
      { k: "B", ru: "$8 867", en: "$8,867" },
      { k: "C", ru: "$14 400", en: "$14,400" },
      { k: "D", ru: "$12 000", en: "$12,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. ($180 000 + $36 000) ÷ 180 месяцев × 6 месяцев = $7 200. Земля в базу не входит.", en: "Correct. ($180,000 + $36,000) ÷ 180 months × 6 months = $7,200. The land is not in the base." },
      B: { ru: "В базу включена земля, а интерес в земле из §197 исключён.", en: "The land has been put into the base, but an interest in land is outside section 197." },
      C: { ru: "Взят полный год вместо шести месяцев с июля по декабрь.", en: "A full year has been taken instead of the six months from July through December." },
      D: { ru: "Обязательство не конкурировать списано за свои три года вместо пятнадцати.", en: "The covenant has been amortized over its own three years instead of fifteen." }
    }
  },
  {
    sec: "s74",
    ru: "Один из нематериальных активов, купленных в составе одной сделки, продан с убытком. Прочие активы той же сделки остались у налогоплательщика. Как учитывается убыток?",
    en: "One of the intangibles bought in a single transaction was sold at a loss. The other intangibles from that transaction remain with the taxpayer. How is the loss treated?",
    opts: [
      { k: "A", ru: "Вычитается полностью в год продажи", en: "Deducted in full in the year of sale" },
      { k: "B", ru: "Вычету не подлежит и прибавляется к базису оставшихся активов той же сделки", en: "Not deductible; it is added to the basis of the remaining intangibles of that transaction" },
      { k: "C", ru: "Признаётся капитальным убытком", en: "Treated as a capital loss" },
      { k: "D", ru: "Переносится на пять лет вперёд", en: "Carried forward five years" }
    ],
    correct: "B",
    why: {
      A: { ru: "Именно этого правило и не допускает.", en: "That is precisely what the rule forbids." },
      B: { ru: "Верно. Убыток распределяется по базису оставшихся активов пропорционально и вернётся вычетом позже, через их списание.", en: "Correct. The loss is spread over the basis of the remaining assets in proportion and comes back later, through their amortization." },
      C: { ru: "Характер убытка здесь ни при чём: он просто не признаётся сейчас.", en: "The character of the loss is not the point: it is simply not recognised now." },
      D: { ru: "Переноса по годам это правило не предусматривает.", en: "The rule provides for no carryforward by years." }
    }
  },
  {
    sec: "s74",
    ru: "Коробочное программное обеспечение куплено отдельно от какого-либо бизнеса, доступно всем желающим и не переделывалось. Как возмещается его стоимость?",
    en: "Off-the-shelf software was bought apart from any business, is available to the general public and was not modified. How is its cost recovered?",
    opts: [
      { k: "A", ru: "За 15 лет по §197", en: "Over 15 years under section 197" },
      { k: "B", ru: "Прямолинейно за 36 месяцев; подпадает также под §179", en: "Straight line over 36 months; it also qualifies for section 179" },
      { k: "C", ru: "Вычитается целиком в год покупки как текущий расход", en: "Deducted in full in the year of purchase as a current expense" },
      { k: "D", ru: "Не возмещается вовсе", en: "Its cost is not recovered at all" }
    ],
    correct: "B",
    why: {
      A: { ru: "За 15 лет программа списывается, только если куплена в составе бизнеса.", en: "The 15-year period applies only where the software was bought as part of a business." },
      B: { ru: "Верно. Отдельно купленное коробочное программное обеспечение амортизируется прямолинейно за 36 месяцев и при этом подпадает под §179 и под бонусную амортизацию.", en: "Correct. Separately bought off-the-shelf software is depreciated straight line over 36 months and qualifies for section 179 and bonus depreciation as well." },
      C: { ru: "Текущим расходом стоимость программы не становится: срок службы дольше года.", en: "The cost is not a current expense: the useful life is more than a year." },
      D: { ru: "Возмещается, вопрос лишь в сроке.", en: "It is recovered; the only question is over how long." }
    }
  },
  {
    sec: "s74",
    ru: "Патент со сроком действия семь лет куплен отдельно, вне какой-либо покупки бизнеса. Как возмещается его стоимость?",
    en: "A patent with seven years to run was bought on its own, apart from any purchase of a business. How is its cost recovered?",
    opts: [
      { k: "A", ru: "За 15 лет по §197", en: "Over 15 years under section 197" },
      { k: "B", ru: "Прямолинейно за семь лет — по оставшемуся сроку", en: "Straight line over seven years — its remaining life" },
      { k: "C", ru: "Не возмещается: патент капитальный актив", en: "Not recovered: a patent is a capital asset" },
      { k: "D", ru: "За 36 месяцев", en: "Over 36 months" }
    ],
    correct: "B",
    why: {
      A: { ru: "§197 требует приобретения в связи с приобретением бизнеса. Отдельная покупка под него не подпадает.", en: "Section 197 requires acquisition in connection with the acquisition of a business. A stand-alone purchase is outside it." },
      B: { ru: "Верно. Вне §197 патент амортизируется прямолинейно по меньшему из выданного государством срока и оставшегося на день покупки.", en: "Correct. Outside section 197 a patent is depreciated straight line over the lesser of the term granted by the government and what remains at the date of purchase." },
      C: { ru: "Патент с определимым сроком службы амортизируется.", en: "A patent with a determinable useful life is depreciated." },
      D: { ru: "36 месяцев — правило для отдельно купленного программного обеспечения.", en: "The 36-month rule is for separately bought software." }
    }
  },
  {
    sec: "s74",
    ru: "Что из перечисленного амортизируется или списывается для целей федерального налога?",
    en: "Which of the following is depreciable or amortizable for federal tax purposes?",
    opts: [
      { k: "A", ru: "Земля, товарные запасы, личное жильё", en: "Land, inventory, a personal residence" },
      { k: "B", ru: "Жилой дом, сдаваемый внаём; приобретённый гудвилл; деловой автомобиль", en: "A rented residence, acquired goodwill, a business automobile" },
      { k: "C", ru: "Земля, приобретённый гудвилл, товарные запасы", en: "Land, acquired goodwill, inventory" },
      { k: "D", ru: "Личное жильё, деловой автомобиль, земля", en: "A personal residence, a business automobile, land" }
    ],
    correct: "B",
    why: {
      A: { ru: "Ни один из трёх: земля не изнашивается, запасы не капитализируются, личное жильё не используется в бизнесе.", en: "None of the three: land does not wear out, inventory is not capitalized, and a personal residence is not used in a business." },
      B: { ru: "Верно. Сдаваемое жильё амортизируется за 27,5 года, приобретённый гудвилл списывается за 15 лет, деловая машина — пятилетнее имущество.", en: "Correct. A rented residence is depreciated over 27.5 years, acquired goodwill is amortized over 15 years, and a business car is five-year property." },
      C: { ru: "Земля и запасы в список не входят.", en: "Land and inventory do not belong on the list." },
      D: { ru: "Личное жильё и земля в список не входят.", en: "A personal residence and land do not belong on the list." }
    }
  },
  {
    sec: "s75",
    ru: "Что из перечисленного НЕ даёт права на вычет истощения?",
    en: "Which of the following does NOT qualify for a depletion deduction?",
    opts: [
      { k: "A", ru: "Газовая скважина", en: "A gas well" },
      { k: "B", ru: "Лесной участок", en: "A timber lot" },
      { k: "C", ru: "Нефтеперегонный завод", en: "An oil refinery" },
      { k: "D", ru: "Каменный карьер", en: "A stone quarry" }
    ],
    correct: "C",
    why: {
      A: { ru: "Газовая скважина — типичный объект истощения, причём с процентной ставкой 15%.", en: "A gas well is a typical depletable property, and at a 15% percentage rate." },
      B: { ru: "Лес истощается, хотя и только по стоимости: процентного истощения для него нет.", en: "Timber is depleted, though by cost only: there is no percentage depletion for it." },
      C: { ru: "Верно. Завод перерабатывает уже добытое сырьё, экономического интереса в залежи у него нет, и истощение ему не полагается: он амортизируется.", en: "Correct. A refinery processes what has already been extracted, has no economic interest in the deposit, and gets no depletion: it is depreciated." },
      D: { ru: "Карьер — месторождение камня, истощение ему полагается.", en: "A quarry is a stone deposit and does get depletion." }
    }
  },
  {
    sec: "s75",
    ru: "Базис шахты для истощения — $500 000, извлекаемых запасов на начало года 250 000 тонн. За год добыто 60 000 тонн, продано 50 000. Каково истощение по стоимости?",
    en: "A mine's basis for depletion is $500,000 and recoverable reserves at the start of the year are 250,000 tons. During the year 60,000 tons were mined and 50,000 sold. What is cost depletion?",
    opts: [
      { k: "A", ru: "$120 000", en: "$120,000" },
      { k: "B", ru: "$100 000", en: "$100,000" },
      { k: "C", ru: "$110 000", en: "$110,000" },
      { k: "D", ru: "$500 000", en: "$500,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Взяты добытые тонны вместо проданных.", en: "Tons mined have been used instead of tons sold." },
      B: { ru: "Верно. $500 000 ÷ 250 000 × 50 000 проданных тонн = $100 000. Добытые, но не проданные 10 000 тонн станут вычетом в год их продажи.", en: "Correct. $500,000 ÷ 250,000 × 50,000 tons sold = $100,000. The 10,000 tons mined but not sold become a deduction in the year they are sold." },
      C: { ru: "Среднего между добытым и проданным формула не знает.", en: "The formula knows no average of mined and sold." },
      D: { ru: "Это весь базис, а не вычет одного года.", en: "That is the whole basis, not one year's deduction." }
    }
  },
  {
    sec: "s75",
    ru: "Чем ограничено процентное истощение по месторождению полезного ископаемого, кроме нефти и газа?",
    en: "What limits percentage depletion on a mineral property other than oil and gas?",
    opts: [
      { k: "A", ru: "50% валового дохода от объекта", en: "50% of gross income from the property" },
      { k: "B", ru: "50% налогооблагаемого дохода от этого объекта до вычета истощения", en: "50% of taxable income from that property before the depletion deduction" },
      { k: "C", ru: "50% всего налогооблагаемого дохода налогоплательщика", en: "50% of the taxpayer's entire taxable income" },
      { k: "D", ru: "Оставшимся базисом объекта", en: "The property's remaining basis" }
    ],
    correct: "B",
    why: {
      A: { ru: "Валовой доход — база для самой ставки, а не для потолка.", en: "Gross income is the base for the rate itself, not for the ceiling." },
      B: { ru: "Верно. Потолок — 50% налогооблагаемого дохода именно этого объекта, посчитанного до истощения. Для нефти и газа потолок 100%.", en: "Correct. The ceiling is 50% of the taxable income of that property, figured before depletion. For oil and gas the ceiling is 100%." },
      C: { ru: "Доход всего налогоплательщика к потолку отношения не имеет.", en: "The taxpayer's overall income has nothing to do with the ceiling." },
      D: { ru: "Базисом ограничено истощение по стоимости, а не процентное.", en: "It is cost depletion that is limited by basis, not percentage depletion." }
    }
  },
  {
    sec: "s75",
    ru: "Что отличает процентное истощение от истощения по стоимости?",
    en: "What distinguishes percentage depletion from cost depletion?",
    opts: [
      { k: "A", ru: "Оба прекращаются, когда базис исчерпан", en: "Both stop when the basis is exhausted" },
      { k: "B", ru: "Процентное прекращается на нуле базиса, по стоимости — продолжается", en: "Percentage stops at a zero basis; cost depletion continues" },
      { k: "C", ru: "Процентное продолжается и после исчерпания базиса, по стоимости — прекращается", en: "Percentage continues after the basis is exhausted; cost depletion stops" },
      { k: "D", ru: "Оба продолжаются неограниченно", en: "Both continue without limit" }
    ],
    correct: "C",
    why: {
      A: { ru: "На нуле базиса прекращается только истощение по стоимости.", en: "Only cost depletion stops at a zero basis." },
      B: { ru: "Всё наоборот.", en: "It is the other way round." },
      C: { ru: "Верно. Процентное истощение считается от валового дохода и потому может в сумме превысить вложенное; истощение по стоимости ограничено невозмещённым вложением.", en: "Correct. Percentage depletion is figured on gross income and so may exceed the investment in total; cost depletion is limited to the unrecovered investment." },
      D: { ru: "Истощение по стоимости ограничено базисом.", en: "Cost depletion is limited by basis." }
    }
  },
  {
    sec: "s75",
    ru: "Подрядчик получает фиксированную плату за каждую вывезенную с шахты тонну породы независимо от того, что в ней найдут. Имеет ли он экономический интерес?",
    en: "A contractor is paid a fixed amount for every ton of rock hauled from a mine, regardless of what is found in it. Does the contractor hold an economic interest?",
    opts: [
      { k: "A", ru: "Да: он получает доход от добычи", en: "Yes: the income comes from the extraction" },
      { k: "B", ru: "Да: он вложил в дело оборудование", en: "Yes: equipment was invested in the operation" },
      { k: "C", ru: "Нет: возврат его вложений не зависит от добытого ископаемого", en: "No: the return of capital does not look to the mineral extracted" },
      { k: "D", ru: "Нет: экономический интерес есть только у собственника земли", en: "No: only the owner of the land holds an economic interest" }
    ],
    correct: "C",
    why: {
      A: { ru: "Плата привязана к объёму работ, а не к добытому ископаемому.", en: "The pay is tied to the volume of work, not to the mineral extracted." },
      B: { ru: "Вложение само по себе интереса не создаёт: нужен интерес в ископаемом в недрах.", en: "Investment by itself creates no interest: an interest in the mineral in place is required." },
      C: { ru: "Верно. Третий признак экономического интереса — возврат капитала должен зависеть именно от добытого. Здесь подрядчику платят в любом случае.", en: "Correct. The third mark of an economic interest is that the return of capital must look to the mineral extracted. Here the contractor is paid in any event." },
      D: { ru: "Собственник земли — не единственный: интерес может быть и у арендатора недр, и у владельца роялти.", en: "The landowner is not the only one: a mineral lessee and a royalty owner may hold it too." }
    }
  },
  {
    sec: "s75",
    ru: "Какое из утверждений о лесном участке верно?",
    en: "Which statement about a timber property is true?",
    opts: [
      { k: "A", ru: "Лес истощается только по стоимости; процентного истощения для него нет", en: "Timber is depleted by cost only; there is no percentage depletion for it" },
      { k: "B", ru: "Лес истощается по процентной ставке 15%", en: "Timber is depleted at a 15% percentage rate" },
      { k: "C", ru: "Лес амортизируется за 20 лет", en: "Timber is depreciated over 20 years" },
      { k: "D", ru: "Лес не возмещается вовсе", en: "Timber's cost is not recovered at all" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Лес — единственный крупный ресурс, для которого процентное истощение не предусмотрено.", en: "Correct. Timber is the one major resource for which percentage depletion is not provided." },
      B: { ru: "15% — ставка нефти, газа и геотермальных источников.", en: "15% is the rate for oil, gas and geothermal deposits." },
      C: { ru: "20 лет — класс MACRS для сельскохозяйственных построек, а не для леса.", en: "20 years is the MACRS class for farm buildings, not for timber." },
      D: { ru: "Возмещается — истощением по стоимости.", en: "It is recovered — by cost depletion." }
    }
  },
  {
    sec: "s76",
    ru: "Всё перечисленное — имущество §1245, КРОМЕ:",
    en: "All of the following are section 1245 property EXCEPT:",
    opts: [
      { k: "A", ru: "Производственное оборудование", en: "Manufacturing equipment" },
      { k: "B", ru: "Офисное здание", en: "An office building" },
      { k: "C", ru: "Приобретённый гудвилл", en: "Acquired goodwill" },
      { k: "D", ru: "Списанная установка контроля загрязнения", en: "An amortized pollution control facility" }
    ],
    correct: "B",
    why: {
      A: { ru: "Оборудование — материальное личное имущество, классический §1245.", en: "Equipment is tangible personal property, the classic section 1245." },
      B: { ru: "Верно. Здание — амортизируемая недвижимость, то есть §1250.", en: "Correct. A building is depreciable real property, that is section 1250." },
      C: { ru: "Гудвилл — нематериальное личное имущество, которое списывалось, значит §1245.", en: "Goodwill is intangible personal property that was amortized, hence section 1245." },
      D: { ru: "Установки контроля загрязнения прямо отнесены к §1245.", en: "Pollution control facilities are expressly section 1245 property." }
    }
  },
  {
    sec: "s76",
    ru: "Что из перечисленного НЕ является имуществом §1245?",
    en: "Which of the following is NOT section 1245 property?",
    opts: [
      { k: "A", ru: "Компьютерное оборудование", en: "Computer equipment" },
      { k: "B", ru: "Товарный знак", en: "A trademark" },
      { k: "C", ru: "Земля", en: "Land" },
      { k: "D", ru: "Торговые стеллажи", en: "Display shelving" }
    ],
    correct: "C",
    why: {
      A: { ru: "Компьютер — материальное личное имущество и амортизируется.", en: "A computer is tangible personal property and is depreciated." },
      B: { ru: "Товарный знак — актив §197, который списывался, значит §1245.", en: "A trademark is a section 197 asset that was amortized, hence section 1245." },
      C: { ru: "Верно. Земля не амортизируется, а §1245 требует, чтобы имущество было объектом амортизации или списания. Деловая земля, которой владели дольше года, — чистый §1231.", en: "Correct. Land is not depreciated, and section 1245 requires property subject to depreciation or amortization. Business land held more than a year is pure section 1231." },
      D: { ru: "Стеллажи — оборудование в здании, а не его конструктивный элемент.", en: "Shelving is equipment in a building, not a structural component of it." }
    }
  },
  {
    sec: "s76",
    ru: "В производственном корпусе находятся: лифты и эскалаторы, конвейер, резервуар для хранения зерна и вентиляционная система здания. Что из них является имуществом §1245?",
    en: "A manufacturing building contains elevators and escalators, a conveyor, a grain storage tank and the building's ventilation system. Which of them is section 1245 property?",
    opts: [
      { k: "A", ru: "Лифты и эскалаторы", en: "The elevators and escalators" },
      { k: "B", ru: "Конвейер и резервуар для хранения зерна", en: "The conveyor and the grain storage tank" },
      { k: "C", ru: "Вентиляционная система здания", en: "The building's ventilation system" },
      { k: "D", ru: "Всё перечисленное", en: "All of them" }
    ],
    correct: "B",
    why: {
      A: { ru: "Лифты и эскалаторы отнесены к конструктивным элементам здания — это §1250.", en: "Elevators and escalators are structural components of the building — section 1250." },
      B: { ru: "Верно. Конвейер — неотъемлемая часть производства, а резервуар — хранилище сыпучего товара; оба входят в «прочее материальное имущество» §1245.", en: "Correct. The conveyor is an integral part of production and the tank is a bulk storage facility; both fall within the “other tangible property” of section 1245." },
      C: { ru: "Вентиляция здания — его конструктивный элемент, §1250.", en: "The building's ventilation is a structural component of it, section 1250." },
      D: { ru: "Лифты и вентиляция — §1250.", en: "Elevators and ventilation are section 1250." }
    }
  },
  {
    sec: "s76",
    ru: "Станок куплен за $80 000, амортизации взято $50 000, продан за $95 000. Каков характер прибыли?",
    en: "A machine was bought for $80,000, depreciated by $50,000 and sold for $95,000. What is the character of the gain?",
    opts: [
      { k: "A", ru: "$65 000 обычного дохода", en: "$65,000 of ordinary income" },
      { k: "B", ru: "$50 000 обычного дохода и $15 000 прибыли §1231", en: "$50,000 of ordinary income and $15,000 of section 1231 gain" },
      { k: "C", ru: "$65 000 прибыли §1231", en: "$65,000 of section 1231 gain" },
      { k: "D", ru: "$15 000 обычного дохода и $50 000 прибыли §1231", en: "$15,000 of ordinary income and $50,000 of section 1231 gain" }
    ],
    correct: "B",
    why: {
      A: { ru: "Обычным доходом становится меньшая из амортизации и прибыли, а не вся прибыль.", en: "Ordinary income is the lesser of the depreciation and the gain, not the whole gain." },
      B: { ru: "Верно. Прибыль $95 000 − $30 000 = $65 000; обычный доход по §1245 — меньшее из $50 000 амортизации и $65 000 прибыли, то есть $50 000. Остальные $15 000 — §1231.", en: "Correct. The gain is $95,000 − $30,000 = $65,000; section 1245 ordinary income is the lesser of the $50,000 depreciation and the $65,000 gain, that is $50,000. The other $15,000 is section 1231." },
      C: { ru: "Возврат амортизации применяется всегда, когда есть прибыль.", en: "Recapture applies whenever there is a gain." },
      D: { ru: "Части перепутаны местами: обычным становится амортизация, а не превышение над первоначальной ценой.", en: "The parts are swapped: it is the depreciation that becomes ordinary, not the excess over the original cost." }
    }
  },
  {
    sec: "s76",
    ru: "Оборудование куплено за $50 000, амортизации взято $30 000, продано за $38 000. Каков характер прибыли?",
    en: "Equipment was bought for $50,000, depreciated by $30,000 and sold for $38,000. What is the character of the gain?",
    opts: [
      { k: "A", ru: "$18 000 обычного дохода", en: "$18,000 of ordinary income" },
      { k: "B", ru: "$30 000 обычного дохода", en: "$30,000 of ordinary income" },
      { k: "C", ru: "$18 000 прибыли §1231", en: "$18,000 of section 1231 gain" },
      { k: "D", ru: "$12 000 обычного дохода и $6 000 прибыли §1231", en: "$12,000 of ordinary income and $6,000 of section 1231 gain" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Прибыль $38 000 − $20 000 = $18 000, и она меньше взятой амортизации, значит обычным доходом становится вся прибыль. §1231 не достаётся ничего.", en: "Correct. The gain is $38,000 − $20,000 = $18,000, less than the depreciation taken, so the whole gain is ordinary income. Section 1231 gets nothing." },
      B: { ru: "Больше прибыли вернуть нельзя: §1245 берёт меньшее из двух.", en: "No more than the gain can be recaptured: section 1245 takes the lesser of the two." },
      C: { ru: "§1231 достаётся только то, что выше первоначальной цены, а цена продажи ниже неё.", en: "Section 1231 gets only what is above the original cost, and the selling price is below it." },
      D: { ru: "Делить прибыль здесь не на что: вся она в пределах взятой амортизации.", en: "There is nothing to split here: the whole gain is within the depreciation taken." }
    }
  },
  {
    sec: "s76",
    ru: "Устаревшее оборудование со скорректированным базисом $9 000, использовавшееся в бизнесе четыре года, продано на металлолом за $2 000. Каков характер убытка?",
    en: "Outdated equipment with an adjusted basis of $9,000, used in the business for four years, was sold for scrap for $2,000. What is the character of the loss?",
    opts: [
      { k: "A", ru: "Капитальный убыток $7 000, вычитаемый не более $3 000 в год", en: "A $7,000 capital loss, deductible at no more than $3,000 a year" },
      { k: "B", ru: "Обычный убыток $7 000 по §1231", en: "A $7,000 ordinary loss under section 1231" },
      { k: "C", ru: "Убыток $7 000, возвращаемый по §1245", en: "A $7,000 loss recaptured under section 1245" },
      { k: "D", ru: "Убыток не признаётся", en: "The loss is not recognised" }
    ],
    correct: "B",
    why: {
      A: { ru: "Ограничение в $3 000 действует для капитальных убытков, а этот убыток обычный.", en: "The $3,000 limit is for capital losses, and this loss is ordinary." },
      B: { ru: "Верно. Убыток по деловому имуществу, которым владели дольше года, — обычный убыток §1231, и он гасит обычный доход без ограничения.", en: "Correct. A loss on business property held more than a year is an ordinary section 1231 loss, and it offsets ordinary income without limit." },
      C: { ru: "§1245 работает только с прибылью: убытка он не касается.", en: "Section 1245 deals only with gain: it does not touch a loss." },
      D: { ru: "Убыток по деловому имуществу признаётся полностью.", en: "A loss on business property is fully recognised." }
    }
  },
  {
    sec: "s76",
    ru: "Гудвилл с базисом $12 000 был приобретён вместе с бизнесом три года назад и списывался по $1 000 в год. При продаже бизнеса ему отнесено $20 000. Сколько обычного дохода?",
    en: "Goodwill with a basis of $12,000 was acquired with a business three years ago and amortized at $1,000 a year. On the sale of the business $20,000 was allocated to it. How much ordinary income?",
    opts: [
      { k: "A", ru: "$0: гудвилл — капитальный актив", en: "$0: goodwill is a capital asset" },
      { k: "B", ru: "$3 000", en: "$3,000" },
      { k: "C", ru: "$8 000", en: "$8,000" },
      { k: "D", ru: "$20 000", en: "$20,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Приобретённый гудвилл списывался, значит это имущество §1245.", en: "Acquired goodwill was amortized, so it is section 1245 property." },
      B: { ru: "Верно. Обычный доход — меньшее из взятого списания ($1 000 × 3 = $3 000) и признанной прибыли ($20 000 − $9 000 = $11 000).", en: "Correct. Ordinary income is the lesser of the amortization taken ($1,000 × 3 = $3,000) and the gain recognised ($20,000 − $9,000 = $11,000)." },
      C: { ru: "$8 000 — превышение цены над первоначальным базисом, это часть прибыли §1231.", en: "$8,000 is the excess of the price over the original basis, which is the section 1231 part." },
      D: { ru: "$20 000 — вся цена, а не прибыль.", en: "$20,000 is the whole price, not the gain." }
    }
  },
  {
    sec: "s76",
    ru: "Корпорация, не являющаяся S-корпорацией, продала здание. Прямолинейная амортизация составила $200 000, признанная прибыль — $350 000. Сколько обычного дохода?",
    en: "A corporation other than an S corporation sold a building. Straight-line depreciation was $200,000 and the gain recognised $350,000. How much ordinary income?",
    opts: [
      { k: "A", ru: "$0", en: "$0" },
      { k: "B", ru: "$40 000", en: "$40,000" },
      { k: "C", ru: "$70 000", en: "$70,000" },
      { k: "D", ru: "$200 000", en: "$200,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Ноль был бы у физического лица. У корпорации включается §291.", en: "Nil would be the answer for an individual. For a corporation section 291 comes in." },
      B: { ru: "Верно. §1250 даёт ноль, поскольку амортизация прямолинейная. По §291 обычным доходом становятся 20% превышения того, что было бы обычным по §1245 ($200 000), над §1250 ($0), то есть $40 000.", en: "Correct. Section 1250 gives nil because the depreciation was straight line. Under section 291, 20% of the excess of what would be ordinary under section 1245 ($200,000) over section 1250 ($0) is ordinary income, that is $40,000." },
      C: { ru: "20% взяты от всей прибыли $350 000 вместо превышения.", en: "The 20% has been taken on the whole $350,000 gain instead of the excess." },
      D: { ru: "К недвижимости §1245 не применяется: полная амортизация обычным доходом не становится.", en: "Section 1245 does not apply to real property: the whole depreciation does not become ordinary income." }
    }
  },
  {
    sec: "s76",
    ru: "Физическое лицо продало деловое здание с прибылью $300 000, из которых $120 000 приходится на прямолинейную амортизацию. Как облагается прибыль?",
    en: "An individual sold a business building at a gain of $300,000, of which $120,000 is attributable to straight-line depreciation. How is the gain taxed?",
    opts: [
      { k: "A", ru: "$120 000 обычного дохода, $180 000 по ставкам прироста капитала", en: "$120,000 of ordinary income and $180,000 at capital gains rates" },
      { k: "B", ru: "$120 000 по ставке до 25%, $180 000 по ставкам 0/15/20", en: "$120,000 at up to 25% and $180,000 at 0/15/20" },
      { k: "C", ru: "Все $300 000 по ставкам 0/15/20", en: "The whole $300,000 at 0/15/20" },
      { k: "D", ru: "Все $300 000 как обычный доход", en: "The whole $300,000 as ordinary income" }
    ],
    correct: "B",
    why: {
      A: { ru: "Обычного дохода у физического лица здесь нет: §1250 при прямолинейной амортизации даёт ноль.", en: "There is no ordinary income for an individual here: with straight-line depreciation section 1250 gives nil." },
      B: { ru: "Верно. Часть прибыли, приходящаяся на прямолинейную амортизацию, — невозвращённая прибыль §1250 со ставкой до 25%; остальное по обычным ставкам прироста капитала.", en: "Correct. The part of the gain attributable to straight-line depreciation is unrecaptured section 1250 gain at up to 25%; the rest is at the ordinary capital gains rates." },
      C: { ru: "Амортизационная часть облагается по особой ставке, а не по общим.", en: "The depreciation part is taxed at its own rate, not at the general ones." },
      D: { ru: "Обычным доходом становится только то, что возвращается по §1250 или §291.", en: "Only what is recaptured under section 1250 or 291 becomes ordinary income." }
    }
  },
  {
    sec: "s76",
    ru: "Жилая арендная недвижимость куплена 1 февраля 2025 года и продана 15 декабря 2025 года. Амортизации взято $13 000, прибыль $40 000. Что происходит с амортизацией?",
    en: "Residential rental property was bought on February 1, 2025 and sold on December 15, 2025. Depreciation of $13,000 was taken and the gain is $40,000. What happens to the depreciation?",
    opts: [
      { k: "A", ru: "Не возвращается: амортизация прямолинейная", en: "It is not recaptured: the depreciation was straight line" },
      { k: "B", ru: "Возвращается вся: имуществом владели год или меньше", en: "All of it is recaptured: the property was held one year or less" },
      { k: "C", ru: "Возвращается половина", en: "Half of it is recaptured" },
      { k: "D", ru: "Становится невозвращённой прибылью §1250 со ставкой до 25%", en: "It becomes unrecaptured section 1250 gain at up to 25%" }
    ],
    correct: "B",
    why: {
      A: { ru: "Правило о прямолинейной амортизации работает при владении дольше года.", en: "The straight-line rule works where the property is held more than a year." },
      B: { ru: "Верно. При владении год или меньше вся взятая амортизация считается дополнительной и возвращается как обычный доход по §1250.", en: "Correct. Where the property is held one year or less, all the depreciation taken counts as additional depreciation and is recaptured as ordinary income under section 1250." },
      C: { ru: "Половин закон здесь не знает.", en: "The law knows no halves here." },
      D: { ru: "Невозвращённая прибыль §1250 — понятие долгосрочной прибыли, а этот срок короткий.", en: "Unrecaptured section 1250 gain is a long-term concept, and this holding period is short." }
    }
  },
  {
    sec: "s76",
    ru: "Участок земли использовался в бизнесе шесть лет, улучшений не было. Продан с прибылью $60 000. Каков характер прибыли, если прочих сделок нет?",
    en: "A plot of land was used in a business for six years with no improvements. It was sold at a $60,000 gain. What is the character of the gain if there are no other transactions?",
    opts: [
      { k: "A", ru: "Обычный доход по §1250", en: "Ordinary income under section 1250" },
      { k: "B", ru: "Обычный доход по §1245", en: "Ordinary income under section 1245" },
      { k: "C", ru: "Долгосрочный прирост капитала по §1231", en: "Long-term capital gain under section 1231" },
      { k: "D", ru: "Обычный доход: земля не капитальный актив", en: "Ordinary income: land is not a capital asset" }
    ],
    correct: "C",
    why: {
      A: { ru: "§1250 требует амортизируемой недвижимости, а земля не амортизируется.", en: "Section 1250 requires depreciable real property, and land is not depreciated." },
      B: { ru: "§1245 требует имущества, подлежавшего амортизации или списанию.", en: "Section 1245 requires property that was subject to depreciation or amortization." },
      C: { ru: "Верно. Деловая земля, которой владели дольше года, — чистое имущество §1231: амортизации не было, возвращать нечего, и чистая прибыль долгосрочная капитальная.", en: "Correct. Business land held more than a year is pure section 1231 property: there was no depreciation, nothing to recapture, and a net gain is long-term capital." },
      D: { ru: "Земля, использованная в бизнесе, действительно не капитальный актив — но именно поэтому она попадает в §1231, который даёт капитальную ставку на прибыль.", en: "Business-use land is indeed not a capital asset — but that is exactly why it falls into section 1231, which gives capital treatment to a gain." }
    }
  },
  {
    sec: "s76",
    ru: "Что из перечисленного НЕ приводит к прибыли или убытку по §1231?",
    en: "Which of the following does NOT give rise to a section 1231 gain or loss?",
    opts: [
      { k: "A", ru: "Продажа станка, использовавшегося в бизнесе три года", en: "The sale of a machine used in the business for three years" },
      { k: "B", ru: "Продажа товарных запасов", en: "The sale of inventory" },
      { k: "C", ru: "Конфискация делового здания", en: "The condemnation of a business building" },
      { k: "D", ru: "Продажа земли, использовавшейся в бизнесе пять лет", en: "The sale of land used in the business for five years" }
    ],
    correct: "B",
    why: {
      A: { ru: "Амортизируемое деловое имущество, которым владели дольше года, — §1231.", en: "Depreciable business property held more than a year is section 1231." },
      B: { ru: "Верно. Товарные запасы прямо исключены: прибыль от их продажи — обычный доход, и §1231 к ним не применяется вовсе.", en: "Correct. Inventory is expressly excluded: gain on its sale is ordinary income, and section 1231 does not apply to it at all." },
      C: { ru: "Вынужденное выбытие делового имущества входит в §1231.", en: "An involuntary conversion of business property falls within section 1231." },
      D: { ru: "Деловая земля — чистый §1231.", en: "Business land is pure section 1231." }
    }
  },
  {
    sec: "s76",
    ru: "За год чистый результат по §1231 оказался убытком в $15 000. Как он учитывается?",
    en: "For the year the net section 1231 result was a $15,000 loss. How is it treated?",
    opts: [
      { k: "A", ru: "Как капитальный убыток с ограничением $3 000 в год", en: "As a capital loss limited to $3,000 a year" },
      { k: "B", ru: "Как обычный убыток целиком", en: "As an ordinary loss in full" },
      { k: "C", ru: "Как обычный убыток в пределах $3 000", en: "As an ordinary loss limited to $3,000" },
      { k: "D", ru: "Переносится вперёд на пять лет", en: "Carried forward five years" }
    ],
    correct: "B",
    why: {
      A: { ru: "Ограничение в $3 000 применяется к капитальным убыткам, а чистый убыток §1231 обычный.", en: "The $3,000 limit applies to capital losses, and a net section 1231 loss is ordinary." },
      B: { ru: "Верно. Чистый убыток §1231 обычный без ограничения — в этом и состоит выгода режима. Он же становится непогашенным убытком для правила обратного взгляда следующих пяти лет.", en: "Correct. A net section 1231 loss is ordinary and unlimited — that is the benefit of the regime. It also becomes a nonrecaptured loss for the look-back rule of the next five years." },
      C: { ru: "Ограничения по сумме у обычного убытка §1231 нет.", en: "There is no dollar limit on an ordinary section 1231 loss." },
      D: { ru: "Сам убыток вычитается сразу; вперёд идёт лишь память о нём для правила обратного взгляда.", en: "The loss itself is deducted at once; what goes forward is only its memory, for the look-back rule." }
    }
  },
  {
    sec: "s76",
    ru: "В 2022 году был чистый убыток §1231 в $25 000, в 2023 году — чистая прибыль $9 000. В 2025 году чистая прибыль составила $30 000. Как она облагается?",
    en: "There was a net section 1231 loss of $25,000 in 2022 and a net gain of $9,000 in 2023. In 2025 the net gain was $30,000. How is it taxed?",
    opts: [
      { k: "A", ru: "$30 000 долгосрочного прироста капитала", en: "$30,000 of long-term capital gain" },
      { k: "B", ru: "$16 000 обычного дохода и $14 000 прироста капитала", en: "$16,000 of ordinary income and $14,000 of capital gain" },
      { k: "C", ru: "$25 000 обычного дохода и $5 000 прироста капитала", en: "$25,000 of ordinary income and $5,000 of capital gain" },
      { k: "D", ru: "$30 000 обычного дохода", en: "$30,000 of ordinary income" }
    ],
    correct: "B",
    why: {
      A: { ru: "Правило обратного взгляда не применено.", en: "The look-back rule has not been applied." },
      B: { ru: "Верно. Убыток 2022 года $25 000 уже погашен на $9 000 в 2023 году, значит непогашенным осталось $16 000. Столько и становится обычным доходом, остальное — долгосрочный прирост капитала.", en: "Correct. The $25,000 loss of 2022 was already used up by $9,000 in 2023, leaving $16,000 nonrecaptured. That much becomes ordinary income and the rest is long-term capital gain." },
      C: { ru: "Убыток учтён целиком, хотя $9 000 уже погашены прибылью 2023 года.", en: "The whole loss has been counted, though $9,000 of it was already used by the 2023 gain." },
      D: { ru: "Обычным доходом становится лишь то, что покрывается непогашенными убытками.", en: "Only what the nonrecaptured losses cover becomes ordinary income." }
    }
  },
  {
    sec: "s76",
    ru: "Обычным доходом по §1245 становится:",
    en: "Ordinary income under section 1245 is:",
    opts: [
      { k: "A", ru: "Вся признанная прибыль", en: "The whole gain recognised" },
      { k: "B", ru: "Меньшее из всей взятой амортизации и признанной прибыли", en: "The lesser of all the depreciation taken and the gain recognised" },
      { k: "C", ru: "Большее из всей взятой амортизации и признанной прибыли", en: "The greater of all the depreciation taken and the gain recognised" },
      { k: "D", ru: "Превышение прибыли над первоначальной ценой", en: "The excess of the gain over the original cost" }
    ],
    correct: "B",
    why: {
      A: { ru: "Вся прибыль возвращается, только когда она не больше амортизации.", en: "The whole gain is recaptured only where it does not exceed the depreciation." },
      B: { ru: "Верно. Возвращается меньшее из двух: нельзя вернуть больше, чем было вычтено, и нельзя вернуть больше, чем заработано.", en: "Correct. The lesser of the two is recaptured: no more can come back than was deducted, and no more than was earned." },
      C: { ru: "Большее вернуло бы то, чего не было ни в вычетах, ни в прибыли.", en: "The greater would recapture something that was in neither the deductions nor the gain." },
      D: { ru: "Это, наоборот, та часть, которая остаётся прибылью §1231.", en: "That, on the contrary, is the part that stays section 1231 gain." }
    }
  },
  {
    sec: "s76",
    ru: "Станок куплен за $60 000. Взято $15 000 по §179 и $25 000 обычной амортизации. Продан за $56 000. Сколько обычного дохода?",
    en: "A machine was bought for $60,000. Section 179 of $15,000 and regular depreciation of $25,000 were taken. It was sold for $56,000. How much ordinary income?",
    opts: [
      { k: "A", ru: "$25 000", en: "$25,000" },
      { k: "B", ru: "$36 000", en: "$36,000" },
      { k: "C", ru: "$40 000", en: "$40,000" },
      { k: "D", ru: "$16 000", en: "$16,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Учтена только обычная амортизация, а вычет по §179 в возврат тоже входит.", en: "Only the regular depreciation is counted, but the section 179 deduction is part of the recapture too." },
      B: { ru: "Верно. Базис $60 000 − $40 000 = $20 000, прибыль $36 000. Она меньше всей амортизации ($40 000, включая §179), значит обычным доходом становится вся прибыль.", en: "Correct. The basis is $60,000 − $40,000 = $20,000 and the gain $36,000. That is less than the total depreciation ($40,000, section 179 included), so the whole gain is ordinary income." },
      C: { ru: "Больше прибыли вернуть нельзя.", en: "No more than the gain can be recaptured." },
      D: { ru: "Такой величины в задаче нет ни как прибыль, ни как амортизация.", en: "No such amount appears in the problem, either as gain or as depreciation." }
    }
  },
  {
    sec: "s76",
    ru: "Как §1231, §1245 и §1250 влияют на размер прибыли или убытка от продажи?",
    en: "How do sections 1231, 1245 and 1250 affect the amount of a gain or loss on sale?",
    opts: [
      { k: "A", ru: "Увеличивают прибыль на сумму возвращённой амортизации", en: "They increase the gain by the depreciation recaptured" },
      { k: "B", ru: "Уменьшают убыток на сумму взятой амортизации", en: "They reduce the loss by the depreciation taken" },
      { k: "C", ru: "Не меняют размер: они определяют только характер", en: "They do not change the amount: they settle only the character" },
      { k: "D", ru: "Увеличивают базис на сумму возвращённой амортизации", en: "They increase the basis by the depreciation recaptured" }
    ],
    correct: "C",
    why: {
      A: { ru: "Прибыль уже посчитана как цена минус скорректированный базис; возврат её не увеличивает.", en: "The gain is already figured as price less adjusted basis; recapture does not add to it." },
      B: { ru: "Убыток уменьшается амортизацией через базис, а не через эти параграфы.", en: "A loss is reduced by depreciation through basis, not through these sections." },
      C: { ru: "Верно. Все три параграфа только переквалифицируют результат: обычный или капитальный. Сумма к этому моменту уже определена.", en: "Correct. All three sections merely recharacterize the result as ordinary or capital. The amount is settled before they come in." },
      D: { ru: "Базис в момент продажи уже зафиксирован.", en: "The basis is already fixed at the moment of sale." }
    }
  },
  {
    sec: "s76",
    ru: "Станок обменян в рамках сделки с отсрочкой, и признано $8 000 прибыли, а также получен земельный участок стоимостью $5 000. Взятая амортизация — $30 000. Сколько обычного дохода по §1245?",
    en: "A machine was exchanged in a deferred transaction: $8,000 of gain was recognised and land worth $5,000 was received. The depreciation taken was $30,000. How much ordinary income under section 1245?",
    opts: [
      { k: "A", ru: "$30 000", en: "$30,000" },
      { k: "B", ru: "$13 000", en: "$13,000" },
      { k: "C", ru: "$8 000", en: "$8,000" },
      { k: "D", ru: "$0", en: "$0" }
    ],
    correct: "B",
    why: {
      A: { ru: "Вся амортизация вернулась бы при обычной продаже, а здесь прибыль отложена.", en: "The whole depreciation would come back on an ordinary sale, but here the gain is deferred." },
      B: { ru: "Верно. При отсрочке возврат по §1245 ограничен суммой признанной прибыли ($8 000) и рыночной стоимости полученного имущества, не являющегося имуществом §1245 ($5 000).", en: "Correct. On a deferral, section 1245 recapture is limited to the sum of the gain recognised ($8,000) and the fair market value of property received that is not section 1245 property ($5,000)." },
      C: { ru: "Учтена только признанная прибыль, а полученная земля тоже прибавляется.", en: "Only the gain recognised is counted, but the land received is added as well." },
      D: { ru: "Отсрочка возврат не отменяет: он лишь ограничивается.", en: "Deferral does not cancel the recapture: it merely limits it." }
    }
  },
  {
    sec: "s76",
    ru: "Какое имущество относится к §1231?",
    en: "What property falls within section 1231?",
    opts: [
      { k: "A", ru: "Любое имущество, использовавшееся в бизнесе, независимо от срока владения", en: "Any property used in a business, whatever the holding period" },
      { k: "B", ru: "Недвижимое или амортизируемое имущество, использовавшееся в бизнесе дольше года", en: "Real or depreciable property used in a business and held more than a year" },
      { k: "C", ru: "Только амортизируемое имущество", en: "Only depreciable property" },
      { k: "D", ru: "Только недвижимость", en: "Only real property" }
    ],
    correct: "B",
    why: {
      A: { ru: "Срок владения дольше года — обязательное условие.", en: "A holding period of more than a year is required." },
      B: { ru: "Верно. Сюда же входят вынужденные выбытия делового и инвестиционного имущества, включая капитальные активы.", en: "Correct. It also takes in involuntary conversions of business and investment property, capital assets included." },
      C: { ru: "Земля не амортизируется, но в §1231 входит.", en: "Land is not depreciated, yet it falls within section 1231." },
      D: { ru: "Оборудование и племенной скот тоже §1231.", en: "Equipment and breeding livestock are section 1231 too." }
    }
  },
  {
    sec: "s76",
    ru: "В каком порядке считается характер результата от продажи делового имущества?",
    en: "In what order is the character of the result on a sale of business property determined?",
    opts: [
      { k: "A", ru: "Сначала сальдирование §1231, затем возврат по §1245 и §1250", en: "First the section 1231 netting, then recapture under sections 1245 and 1250" },
      { k: "B", ru: "Сначала возврат по §1245 и §1250, затем сальдирование §1231 и правило обратного взгляда", en: "First recapture under sections 1245 and 1250, then the section 1231 netting and the look-back rule" },
      { k: "C", ru: "Сначала правило обратного взгляда, затем возврат амортизации", en: "First the look-back rule, then depreciation recapture" },
      { k: "D", ru: "Порядок не установлен", en: "No order is prescribed" }
    ],
    correct: "B",
    why: {
      A: { ru: "Обратный порядок дал бы капитальную ставку той части, которая должна быть обычной.", en: "The reverse order would give capital treatment to the part that must be ordinary." },
      B: { ru: "Верно. Обычный доход по §1245 и §1250 снимается сверху по каждому объекту, и только остаток идёт в сальдирование §1231, а затем под правило обратного взгляда.", en: "Correct. Section 1245 and 1250 ordinary income comes off the top property by property, and only the remainder enters the section 1231 netting and then the look-back rule." },
      C: { ru: "Обратный взгляд применяется к уже посчитанной чистой прибыли §1231.", en: "The look-back applies to a net section 1231 gain that has already been figured." },
      D: { ru: "Порядок установлен и на ответ влияет.", en: "The order is prescribed and it changes the answer." }
    }
  },
  {
    sec: "s76",
    ru: "Здание, служившее нежилой недвижимостью, было переведено в использование, при котором оно стало имуществом §1245. Может ли оно снова стать имуществом §1250?",
    en: "A building that was nonresidential real property was converted to a use that made it section 1245 property. Can it ever again be section 1250 property?",
    opts: [
      { k: "A", ru: "Да, если использование вернётся к прежнему", en: "Yes, if the use reverts to the earlier one" },
      { k: "B", ru: "Да, по истечении срока возмещения", en: "Yes, once the recovery period ends" },
      { k: "C", ru: "Нет, никогда", en: "No, never" },
      { k: "D", ru: "Да, по выбору налогоплательщика", en: "Yes, at the taxpayer's election" }
    ],
    correct: "C",
    why: {
      A: { ru: "Возврат использования положения не меняет.", en: "Reverting the use changes nothing." },
      B: { ru: "Срок возмещения к классификации отношения не имеет.", en: "The recovery period has nothing to do with the classification." },
      C: { ru: "Верно. Имущество §1250, ставшее имуществом §1245 сменой использования, обратно уже никогда не возвращается.", en: "Correct. Section 1250 property that becomes section 1245 property by a change of use can never again be treated as section 1250 property." },
      D: { ru: "Выбора здесь не предусмотрено.", en: "No election is provided for here." }
    }
  },
  {
    sec: "s76",
    ru: "Почему §1250 в наши дни почти никогда не даёт обычного дохода?",
    en: "Why does section 1250 nowadays almost never produce ordinary income?",
    opts: [
      { k: "A", ru: "Потому что недвижимость освобождена от возврата амортизации", en: "Because real property is exempt from depreciation recapture" },
      { k: "B", ru: "Потому что с 1987 года недвижимость амортизируется прямолинейно, и превышения над прямолинейной нет", en: "Because since 1987 real property is depreciated straight line, so there is no excess over straight line" },
      { k: "C", ru: "Потому что §1250 отменён", en: "Because section 1250 has been repealed" },
      { k: "D", ru: "Потому что §291 заменил его для всех налогоплательщиков", en: "Because section 291 replaced it for all taxpayers" }
    ],
    correct: "B",
    why: {
      A: { ru: "Освобождения нет: правило есть, просто его база обычно равна нулю.", en: "There is no exemption: the rule exists, but its base is usually nil." },
      B: { ru: "Верно. Обычным доходом по §1250 становится только превышение ускоренной амортизации над прямолинейной. Прямолинейная амортизация превышения не создаёт.", en: "Correct. Section 1250 ordinary income is only the excess of accelerated over straight-line depreciation. Straight-line depreciation creates no excess." },
      C: { ru: "Параграф действует и применяется, например, при владении год и меньше.", en: "The section is in force and applies, for instance, where the property is held one year or less." },
      D: { ru: "§291 касается только корпораций, кроме S-корпораций, и работает поверх §1250, а не вместо него.", en: "Section 291 touches only corporations other than S corporations, and works on top of section 1250, not instead of it." }
    }
  }
];
