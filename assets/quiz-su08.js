/* ===================================================================
   Вопросы тренажёра, модуль 08.

   Отдельный файл, а не блок внутри страницы: под file:// страница не
   может прочитать другой файл, поэтому единственный способ отдать
   данные двум страницам сразу — тег <script src>. Файл подключают и
   su08.html, и trainer.html.

   QUIZSECS — названия подразделов. На странице модуля они есть в
   заголовках, на странице тренажёра их нет. Карта порождается
   скриптом из тех же заголовков, а сборка отказывается собирать
   файл, если названия разошлись.
   =================================================================== */

window.QUIZZES  = window.QUIZZES  || {};
window.QUIZSECS = window.QUIZSECS || {};

window.QUIZSECS.su08 = {
  s81: { no: "8.1", ru: "Общий кредит бизнеса", en: "The general business credit" },
  s82: { no: "8.2", ru: "Чистый операционный убыток", en: "Net operating loss" },
  s83: { no: "8.3", ru: "Несчастные случаи и кражи", en: "Casualties and thefts" },
  s84: { no: "8.4", ru: "Дополнительные налоги", en: "Additional taxes" }
};

window.QUIZZES.su08 = [
  {
    sec: "s81",
    ru: "Все перечисленные кредиты входят в общий кредит бизнеса, КРОМЕ:",
    en: "All of the following credits are part of the general business credit EXCEPT:",
    opts: [
      { k: "A", ru: "Кредит за наём из целевых групп", en: "The work opportunity credit" },
      { k: "B", ru: "Кредит за запуск пенсионного плана", en: "The pension plan start-up credit" },
      { k: "C", ru: "Иностранный налоговый кредит", en: "The foreign tax credit" },
      { k: "D", ru: "Кредит за доступность для инвалидов", en: "The disabled access credit" }
    ],
    correct: "C",
    why: {
      A: { ru: "Входит и считается на форме 5884, а итог переносится на форму 3800.", en: "It is part of it, figured on Form 5884 and carried to Form 3800." },
      B: { ru: "Входит.", en: "It is part of it." },
      C: { ru: "Верно. Иностранный налоговый кредит в общий кредит бизнеса не входит: у него свой предел и свои сроки переноса — назад на год и вперёд на десять.", en: "Correct. The foreign tax credit is not part of the general business credit: it has its own limit and its own carryover periods — back one year and forward ten." },
      D: { ru: "Входит и считается на форме 8826.", en: "It is part of it, figured on Form 8826." }
    }
  },
  {
    sec: "s81",
    ru: "Какой из кредитов НЕ является деловым и потому в общий кредит бизнеса не входит?",
    en: "Which of these is not a business credit and so is outside the general business credit?",
    opts: [
      { k: "A", ru: "Кредит за детский сад для работников", en: "The employer-provided childcare credit" },
      { k: "B", ru: "Кредит на усыновление", en: "The adoption credit" },
      { k: "C", ru: "Кредит за FICA с чаевых", en: "The credit for FICA on tips" },
      { k: "D", ru: "Кредит на исследования", en: "The research credit" }
    ],
    correct: "B",
    why: {
      A: { ru: "Деловой: работодатель устраивает сад для работников.", en: "A business credit: the employer provides childcare for employees." },
      B: { ru: "Верно. Кредит на усыновление личный, а не деловой, и в общий кредит бизнеса не входит — как и кредит за заработанный доход.", en: "Correct. The adoption credit is personal, not a business credit, and is outside the general business credit — as is the earned income credit." },
      C: { ru: "Деловой: возвращает работодателю его долю налогов с чаевых.", en: "A business credit: it returns the employer's share of taxes on tips." },
      D: { ru: "Деловой и один из самых крупных в ящике.", en: "A business credit, and one of the largest in the container." }
    }
  },
  {
    sec: "s81",
    ru: "Чистый налог на доход — $80 000, предварительный минимальный налог — $50 000. Каков предел общего кредита бизнеса?",
    en: "Net income tax is $80,000 and the tentative minimum tax $50,000. What is the general business credit limit?",
    opts: [
      { k: "A", ru: "$80 000", en: "$80,000" },
      { k: "B", ru: "$30 000", en: "$30,000" },
      { k: "C", ru: "$13 750", en: "$13,750" },
      { k: "D", ru: "$66 250", en: "$66,250" }
    ],
    correct: "B",
    why: {
      A: { ru: "Кредит не может снять весь налог: часть его закон оставляет неприкосновенной.", en: "The credit cannot take off the whole tax: the law keeps part of it out of reach." },
      B: { ru: "Верно. Четверть налога сверх $25 000 — это 25% × 55 000 = $13 750; предварительный минимальный налог $50 000 больше, значит вычитается он: 80 000 − 50 000 = $30 000.", en: "Correct. A quarter of the tax above $25,000 is 25% × 55,000 = $13,750; the tentative minimum tax of $50,000 is greater, so it is subtracted: 80,000 − 50,000 = $30,000." },
      C: { ru: "$13 750 — сама четверть, а не разность, да ещё и меньшая из двух величин.", en: "$13,750 is the quarter itself, not the difference, and the lesser of the two amounts at that." },
      D: { ru: "Вычтена четверть вместо большей из двух величин.", en: "The quarter subtracted instead of the greater of the two." }
    }
  },
  {
    sec: "s81",
    ru: "Как считается предел общего кредита бизнеса у корпорации, не являющейся S-корпорацией?",
    en: "How is the general business credit limit figured for a corporation other than an S corporation?",
    opts: [
      { k: "A", ru: "Так же, как у человека: вычитается большее из предварительного минимального налога и четверти налога сверх $25 000", en: "As for an individual: the greater of the tentative minimum tax and a quarter of the tax above $25,000 is subtracted" },
      { k: "B", ru: "Вычитается четверть чистого налога на доход сверх $25 000", en: "A quarter of the net income tax above $25,000 is subtracted" },
      { k: "C", ru: "Предела нет: корпорация может свести налог к нулю", en: "There is no limit: a corporation may reduce the tax to zero" },
      { k: "D", ru: "Вычитается весь предварительный минимальный налог", en: "The whole tentative minimum tax is subtracted" }
    ],
    correct: "B",
    why: {
      A: { ru: "Сравнивать не с чем: предварительного минимального налога в формуле корпорации нет.", en: "There is nothing to compare with: the tentative minimum tax does not enter a corporation's formula." },
      B: { ru: "Верно. У корпорации остаётся одно слагаемое, и оно вычитается сразу.", en: "Correct. For a corporation one term remains, and it is subtracted directly." },
      C: { ru: "Предел есть, просто он устроен проще.", en: "There is a limit; it is merely simpler." },
      D: { ru: "Именно этого элемента в формуле корпорации и нет.", en: "That is exactly the element a corporation's formula lacks." }
    }
  },
  {
    sec: "s81",
    ru: "На какие сроки переносится неиспользованный общий кредит бизнеса?",
    en: "Over what periods is an unused general business credit carried?",
    opts: [
      { k: "A", ru: "Назад на 2 года, вперёд на 20 лет", en: "Back 2 years, forward 20 years" },
      { k: "B", ru: "Назад на 1 год, вперёд на 20 лет", en: "Back 1 year, forward 20 years" },
      { k: "C", ru: "Только вперёд, без ограничения срока", en: "Forward only, with no time limit" },
      { k: "D", ru: "Назад на 1 год, вперёд на 10 лет", en: "Back 1 year, forward 10 years" }
    ],
    correct: "B",
    why: {
      A: { ru: "Назад переносится один год, а не два.", en: "The carryback is one year, not two." },
      B: { ru: "Верно. Назад на год, вперёд на двадцать лет.", en: "Correct. Back one year and forward twenty." },
      C: { ru: "Бессрочный перенос вперёд — это про чистый операционный убыток, а не про кредит.", en: "An unlimited carryforward belongs to the net operating loss, not to the credit." },
      D: { ru: "Десять лет вперёд — у иностранного налогового кредита.", en: "Ten years forward belongs to the foreign tax credit." }
    }
  },
  {
    sec: "s81",
    ru: "В каком порядке кредиты расходуются внутри года?",
    en: "In what order are credits used within the year?",
    opts: [
      { k: "A", ru: "Сначала кредиты текущего года, потом переносы", en: "The current year's credits first, then carryovers" },
      { k: "B", ru: "Сначала переносы из прошлых лет, потом кредиты текущего года, потом переносы из будущего", en: "Carryforwards from earlier years first, then the current year's credits, then carrybacks" },
      { k: "C", ru: "В любом порядке по выбору налогоплательщика", en: "In any order the taxpayer chooses" },
      { k: "D", ru: "Сначала переносы из будущего", en: "Carrybacks first" }
    ],
    correct: "B",
    why: {
      A: { ru: "Тогда самые старые кредиты успевали бы истечь неиспользованными.", en: "Then the oldest credits would expire unused." },
      B: { ru: "Верно. Первыми расходуются те, у которых скорее истекает двадцатилетний срок.", en: "Correct. What is spent first is whatever is nearest to the end of its twenty years." },
      C: { ru: "Очередь установлена законом.", en: "The order is set by law." },
      D: { ru: "Перенос назад появляется позже всех и расходуется последним.", en: "A carryback arises latest of all and is used last." }
    }
  },
  {
    sec: "s81",
    ru: "Что происходит с общим кредитом бизнеса, не использованным и за двадцать лет переноса?",
    en: "What happens to a general business credit still unused after the twenty carryforward years?",
    opts: [
      { k: "A", ru: "Пропадает бесследно", en: "It vanishes without trace" },
      { k: "B", ru: "Становится вычетом по §196", en: "It becomes a deduction under section 196" },
      { k: "C", ru: "Переносится ещё на двадцать лет", en: "It carries forward another twenty years" },
      { k: "D", ru: "Становится возвратным кредитом", en: "It becomes a refundable credit" }
    ],
    correct: "B",
    why: {
      A: { ru: "Не совсем: остаток превращается в вычет.", en: "Not quite: the balance turns into a deduction." },
      B: { ru: "Верно. Остаток вычитается в последнем году переноса, а у человека — в год смерти. Кредит теряет в цене, но не исчезает.", en: "Correct. The balance is deducted in the last carryforward year, and for an individual in the year of death. The credit loses value but does not vanish." },
      C: { ru: "Второго двадцатилетия закон не даёт.", en: "The law grants no second twenty years." },
      D: { ru: "Возвратным он не становится никогда.", en: "It never becomes refundable." }
    }
  },
  {
    sec: "s81",
    ru: "Работник из целевой группы отработал 95 часов и получил $2 400. Каков кредит за наём?",
    en: "An employee from a targeted group worked 95 hours and was paid $2,400. What is the work opportunity credit?",
    opts: [
      { k: "A", ru: "$960", en: "$960" },
      { k: "B", ru: "$600", en: "$600" },
      { k: "C", ru: "$0", en: "$0" },
      { k: "D", ru: "$2 400", en: "$2,400" }
    ],
    correct: "C",
    why: {
      A: { ru: "Это 40% от платы, но до полной ставки не хватает и 120 часов.", en: "That is 40% of the pay, but the hours fall short even of 120." },
      B: { ru: "Это пониженная ставка, но и она полагается только от 120 часов.", en: "That is the reduced rate, but even it starts at 120 hours." },
      C: { ru: "Верно. Меньше 120 часов — заработная плата признаётся нулевой для кредита, и кредита нет вовсе, а не по пониженной ставке.", en: "Correct. Below 120 hours the qualified wages are treated as zero, and there is no credit at all rather than one at the reduced rate." },
      D: { ru: "Вся плата кредитом не становится ни при каких условиях.", en: "The whole pay never becomes the credit." }
    }
  },
  {
    sec: "s81",
    ru: "Работник из обычной целевой группы отработал 250 часов и получил $9 000. Потолок платы для группы — $6 000. Каков кредит?",
    en: "An employee from an ordinary targeted group worked 250 hours and was paid $9,000. The group's wage cap is $6,000. What is the credit?",
    opts: [
      { k: "A", ru: "$2 400", en: "$2,400" },
      { k: "B", ru: "$1 500", en: "$1,500" },
      { k: "C", ru: "$2 250", en: "$2,250" },
      { k: "D", ru: "$3 600", en: "$3,600" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это полная ставка 40% от потолка, а часов меньше 400.", en: "That is the full 40% of the cap, but the hours are fewer than 400." },
      B: { ru: "Верно. От 120 до 399 часов ставка 25%, плата обрезается потолком до $6 000, и 25% дают $1 500.", en: "Correct. Between 120 and 399 hours the rate is 25%, the pay is cut by the cap to $6,000, and 25% gives $1,500." },
      C: { ru: "Ставка верна, но плата взята полностью, без потолка группы.", en: "The rate is right but the pay is taken in full, without the group's cap." },
      D: { ru: "Взята полная ставка от всей платы: не то и не другое.", en: "The full rate on the whole pay: neither is right." }
    }
  },
  {
    sec: "s81",
    ru: "По какой целевой группе кредит за наём полагается и за второй год работы?",
    en: "For which targeted group is the work opportunity credit available for a second year?",
    opts: [
      { k: "A", ru: "Ветераны", en: "Veterans" },
      { k: "B", ru: "Летняя молодёжь", en: "Summer youth" },
      { k: "C", ru: "Получатели долгосрочной семейной помощи", en: "Long-term family assistance recipients" },
      { k: "D", ru: "Бывшие заключённые", en: "Ex-felons" }
    ],
    correct: "C",
    why: {
      A: { ru: "У ветеранов самый высокий потолок платы, но второго года нет.", en: "Veterans have the highest wage cap but no second year." },
      B: { ru: "У летней молодёжи самый низкий потолок и один год.", en: "Summer youth have the lowest cap and one year." },
      C: { ru: "Верно. Единственная группа со вторым годом, и ставка второго года — 50%.", en: "Correct. The only group with a second year, and the second-year rate is 50%." },
      D: { ru: "Один год, как и у большинства групп.", en: "One year, as for most groups." }
    }
  },
  {
    sec: "s81",
    ru: "В каком случае кредит за наём НЕ полагается?",
    en: "In which case is there no work opportunity credit?",
    opts: [
      { k: "A", ru: "Работник отработал ровно 400 часов", en: "The employee worked exactly 400 hours" },
      { k: "B", ru: "Работник — сын нанимателя", en: "The employee is the employer's son" },
      { k: "C", ru: "Работник получил $14 000 при потолке группы $6 000", en: "The employee was paid $14,000 against a $6,000 group cap" },
      { k: "D", ru: "Работник трудится в сельском хозяйстве", en: "The employee works in agriculture" }
    ],
    correct: "B",
    why: {
      A: { ru: "Ровно 400 часов дают полную ставку: условие сформулировано как «не менее».", en: "Exactly 400 hours gives the full rate: the condition reads “at least”." },
      B: { ru: "Верно. Кредита нет, если работник — родственник нанимателя, его иждивенец или уже работал у него раньше.", en: "Correct. There is no credit where the employee is a relative of the employer, a dependent, or has worked there before." },
      C: { ru: "Кредит есть, просто плата обрезается потолком.", en: "There is a credit; the pay is merely cut by the cap." },
      D: { ru: "Сельскохозяйственный труд кредиту не мешает, для него есть особое правило о заработной плате.", en: "Agricultural labour is no bar; there is a special rule for its wages." }
    }
  },
  {
    sec: "s81",
    ru: "Что происходит с вычетом по заработной плате, если по ней заявлен кредит за наём?",
    en: "What happens to the wage deduction where the work opportunity credit is claimed on those wages?",
    opts: [
      { k: "A", ru: "Ничего: вычет и кредит независимы", en: "Nothing: the deduction and the credit are independent" },
      { k: "B", ru: "Вычет уменьшается на сумму кредита", en: "The deduction is reduced by the amount of the credit" },
      { k: "C", ru: "Вычет уменьшается вдвое", en: "The deduction is halved" },
      { k: "D", ru: "Вычет отменяется полностью", en: "The deduction is cancelled entirely" }
    ],
    correct: "B",
    why: {
      A: { ru: "Двойной выгоды закон не допускает.", en: "The law allows no double benefit." },
      B: { ru: "Верно. Это общее правило для почти всех деловых кредитов: расход, породивший кредит, вычитается на его сумму меньше.", en: "Correct. This is the general rule for nearly all business credits: the expense that produced the credit is deducted by that much less." },
      C: { ru: "Половин здесь нет: уменьшение точно на сумму кредита.", en: "There are no halves here: the reduction is exactly the amount of the credit." },
      D: { ru: "Отменяется не весь вычет, а только его часть, равная кредиту.", en: "Not the whole deduction is cancelled, only the part equal to the credit." }
    }
  },
  {
    sec: "s81",
    ru: "Малый бизнес потратил $12 000 на устранение барьеров для инвалидов. Каков кредит за доступность?",
    en: "A small business spent $12,000 on removing barriers for people with disabilities. What is the disabled access credit?",
    opts: [
      { k: "A", ru: "$6 000", en: "$6,000" },
      { k: "B", ru: "$5 000", en: "$5,000" },
      { k: "C", ru: "$5 875", en: "$5,875" },
      { k: "D", ru: "$12 000", en: "$12,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Половина всех затрат, без учёта порога и потолка.", en: "Half of all the expenditure, ignoring both floor and ceiling." },
      B: { ru: "Верно. Учитываются затраты между $250 и $10 250; половина от разницы даёт максимум $5 000, и при $12 000 затрат кредит именно таков.", en: "Correct. Expenditure between $250 and $10,250 counts; half the difference gives a maximum of $5,000, and at $12,000 of spending the credit is exactly that." },
      C: { ru: "Так вышло бы, если бы вычесть только порог, забыв про потолок: (12 000 − 250) × 50%.", en: "That would follow from subtracting only the floor and forgetting the ceiling: (12,000 − 250) × 50%." },
      D: { ru: "Вся сумма затрат кредитом не становится.", en: "The whole expenditure does not become the credit." }
    }
  },
  {
    sec: "s81",
    ru: "Какое условие должно выполняться, чтобы бизнес имел право на кредит за доступность?",
    en: "What condition must be met for a business to qualify for the disabled access credit?",
    opts: [
      { k: "A", ru: "В предшествующем году — не более 30 работников полной занятости либо не более $1 000 000 валовой выручки", en: "In the preceding year — no more than 30 full-time employees or no more than $1,000,000 of gross receipts" },
      { k: "B", ru: "В текущем году — не более 50 работников", en: "In the current year — no more than 50 employees" },
      { k: "C", ru: "Здание должно быть введено в эксплуатацию самим налогоплательщиком", en: "The building must have been first placed in service by the taxpayer" },
      { k: "D", ru: "Затраты должны превышать $10 250", en: "The expenditure must exceed $10,250" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Достаточно любого из двух условий, и смотрят на предшествующий год, а не на текущий.", en: "Correct. Either condition suffices, and it is the preceding year that is looked at, not the current one." },
      B: { ru: "Ни число, ни год не те.", en: "Neither the number nor the year is right." },
      C: { ru: "Наоборот: затраты по зданию, впервые введённому в эксплуатацию самим налогоплательщиком, под кредит не подпадают. Кредит не для новых зданий.", en: "The opposite: expenditure on a building first placed in service by the taxpayer does not qualify. The credit is not for new buildings." },
      D: { ru: "$10 250 — потолок учитываемых затрат, а не условие права на кредит.", en: "$10,250 is the ceiling on countable expenditure, not a condition of eligibility." }
    }
  },
  {
    sec: "s81",
    ru: "У работодателя ровно 25 работников в пересчёте на полную занятость и средняя годовая плата $40 000. Полагается ли кредит за медицинскую страховку?",
    en: "An employer has exactly 25 full-time equivalent employees and average annual pay of $40,000. Is the small employer health insurance credit available?",
    opts: [
      { k: "A", ru: "Да: условие — «25 и меньше»", en: "Yes: the condition is “25 or fewer”" },
      { k: "B", ru: "Нет: требуется строго меньше 25", en: "No: strictly fewer than 25 is required" },
      { k: "C", ru: "Да, но по половинной ставке", en: "Yes, but at half the rate" },
      { k: "D", ru: "Нет: средняя плата слишком велика", en: "No: the average pay is too high" }
    ],
    correct: "B",
    why: {
      A: { ru: "Формулировка «25 и меньше» встречается в пересказах и неверна.", en: "The phrasing “25 or fewer” turns up in summaries and is wrong." },
      B: { ru: "Верно. Требуется строго меньше 25, и инструкция к форме 8941 отмечает прямо: при ровно 25 работниках кредит по расчёту обнуляется.", en: "Correct. Strictly fewer than 25 is required, and the instructions to Form 8941 note expressly that at exactly 25 the credit works out to nothing." },
      C: { ru: "Половинных ставок за превышение порога закон не знает.", en: "The law knows no half rates for crossing the threshold." },
      D: { ru: "$40 000 ниже потолка средней платы; дело не в ней.", en: "$40,000 is below the average pay ceiling; that is not the problem." }
    }
  },
  {
    sec: "s81",
    ru: "Сколько лет подряд доступен кредит за медицинскую страховку у малого работодателя?",
    en: "For how many consecutive years is the small employer health insurance credit available?",
    opts: [
      { k: "A", ru: "Два года подряд", en: "Two consecutive years" },
      { k: "B", ru: "Три года подряд", en: "Three consecutive years" },
      { k: "C", ru: "Пять лет подряд", en: "Five consecutive years" },
      { k: "D", ru: "Без ограничения срока", en: "With no time limit" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Отсчёт начинается с первого года, за который подана форма 8941 с положительной суммой кредита.", en: "Correct. The count begins with the first year for which Form 8941 is filed showing a positive credit." },
      B: { ru: "Три года — срок кредита за запуск пенсионного плана.", en: "Three years is the period of the pension plan start-up credit." },
      C: { ru: "Пяти лет здесь нет; пять лет — срок кредита на восстановление здания.", en: "There are no five years here; five is the rehabilitation credit's period." },
      D: { ru: "Срок жёстко ограничен.", en: "The period is strictly limited." }
    }
  },
  {
    sec: "s81",
    ru: "Что уменьшает кредит за медицинскую страховку у малого работодателя?",
    en: "What reduces the small employer health insurance credit?",
    opts: [
      { k: "A", ru: "Только превышение числа работников над 10", en: "Only the headcount above 10" },
      { k: "B", ru: "Только превышение средней платы над $33 000", en: "Only average pay above $33,000" },
      { k: "C", ru: "Оба уменьшения, и они считаются отдельно и складываются", en: "Both reductions, figured separately and added together" },
      { k: "D", ru: "Ни то ни другое: кредит либо полагается целиком, либо не полагается вовсе", en: "Neither: the credit is either allowed in full or not at all" }
    ],
    correct: "C",
    why: {
      A: { ru: "Это лишь один из двух счётчиков.", en: "That is only one of the two meters." },
      B: { ru: "Это второй счётчик, но не единственный.", en: "That is the second meter, but not the only one." },
      C: { ru: "Верно. Оба уменьшения независимы и складываются, поэтому кредит может обнулиться задолго до формальных порогов в 25 работников и $67 000.", en: "Correct. Both reductions are independent and add together, so the credit can reach zero well before the formal thresholds of 25 employees and $67,000." },
      D: { ru: "Кредит уменьшается плавно, а не только включается и выключается.", en: "The credit is reduced gradually, not merely switched on and off." }
    }
  },
  {
    sec: "s81",
    ru: "Каковы ставки кредита за детский сад для работников и его годовой потолок?",
    en: "What are the rates of the employer-provided childcare credit and its annual cap?",
    opts: [
      { k: "A", ru: "25% затрат на сад и 10% на подбор, потолок $150 000", en: "25% of facility costs and 10% of referral costs, capped at $150,000" },
      { k: "B", ru: "10% затрат на сад и 25% на подбор, потолок $150 000", en: "10% of facility costs and 25% of referral costs, capped at $150,000" },
      { k: "C", ru: "25% всех затрат, потолок $500 000", en: "25% of all costs, capped at $500,000" },
      { k: "D", ru: "50% затрат, потолок $5 000", en: "50% of the costs, capped at $5,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Сам сад даёт 25%, справочные и подбирающие услуги — 10%, а общий потолок на обе ставки один.", en: "Correct. The facility itself gives 25%, resource and referral services 10%, and a single cap covers both." },
      B: { ru: "Ставки переставлены местами.", en: "The rates are swapped." },
      C: { ru: "Ставка одна не бывает, и потолок другой.", en: "There is not a single rate, and the cap is different." },
      D: { ru: "50% и $5 000 — это кредит за доступность для инвалидов.", en: "50% and $5,000 belong to the disabled access credit." }
    }
  },
  {
    sec: "s81",
    ru: "Что верно о затратах на детский сад для работников?",
    en: "Which is true of employer-provided childcare expenditure?",
    opts: [
      { k: "A", ru: "Их можно списать по §179", en: "It may be expensed under section 179" },
      { k: "B", ru: "Под §179 они не подпадают", en: "It does not qualify for section 179" },
      { k: "C", ru: "Они вычитаются целиком в год оплаты", en: "It is deducted in full in the year paid" },
      { k: "D", ru: "Они не амортизируются вовсе", en: "It is not depreciated at all" }
    ],
    correct: "B",
    why: {
      A: { ru: "Прямо запрещено: затраты, давшие этот кредит, под §179 не идут.", en: "Expressly barred: expenditure that produced this credit does not go to section 179." },
      B: { ru: "Верно. Кредит и немедленное списание по §179 по одним и тем же затратам не совмещаются.", en: "Correct. The credit and immediate section 179 expensing are not combined on the same expenditure." },
      C: { ru: "Здание детского сада — капитальное вложение, а не текущий расход.", en: "A childcare facility is a capital investment, not a current expense." },
      D: { ru: "Амортизируются по общим правилам, просто без §179.", en: "It is depreciated under the general rules, merely without section 179." }
    }
  },
  {
    sec: "s81",
    ru: "Какова обычная ставка кредита на исследования и ставка упрощённого расчёта?",
    en: "What is the ordinary research credit rate and the alternative simplified rate?",
    opts: [
      { k: "A", ru: "20% и 14%", en: "20% and 14%" },
      { k: "B", ru: "14% и 20%", en: "14% and 20%" },
      { k: "C", ru: "20% и 15,8%", en: "20% and 15.8%" },
      { k: "D", ru: "25% и 10%", en: "25% and 10%" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. 20% от превышения расходов над базовой суммой; при упрощённом расчёте — 14% от превышения над половиной средних расходов трёх предыдущих лет.", en: "Correct. 20% of the excess of expenses over the base amount; under the simplified method, 14% of the excess over half the average expenses of the three preceding years." },
      B: { ru: "Ставки переставлены местами.", en: "The rates are swapped." },
      C: { ru: "15,8% — это пониженная ставка по выбору §280C, а не упрощённый расчёт.", en: "15.8% is the reduced rate under the section 280C election, not the simplified method." },
      D: { ru: "25% и 10% — ставки кредита за детский сад.", en: "25% and 10% are the childcare credit rates." }
    }
  },
  {
    sec: "s81",
    ru: "Что даёт налогоплательщику выбор по §280C в отношении кредита на исследования?",
    en: "What does the section 280C election give a taxpayer in respect of the research credit?",
    opts: [
      { k: "A", ru: "Кредит увеличивается, а вычет по расходам пропадает", en: "The credit is increased and the deduction for the expenses is lost" },
      { k: "B", ru: "Кредит уменьшается с 20% до 15,8%, зато вычет по расходам сохраняется полностью", en: "The credit drops from 20% to 15.8%, but the deduction for the expenses is kept in full" },
      { k: "C", ru: "Кредит можно перенести назад на пять лет", en: "The credit may be carried back five years" },
      { k: "D", ru: "Кредит становится возвратным", en: "The credit becomes refundable" }
    ],
    correct: "B",
    why: {
      A: { ru: "Всё наоборот: кредит уменьшается, а вычет сохраняется.", en: "It is the other way round: the credit shrinks and the deduction survives." },
      B: { ru: "Верно. Это выбор между большим кредитом с урезанным вычетом и меньшим кредитом с целым вычетом.", en: "Correct. It is a choice between a larger credit with a cut deduction and a smaller credit with a whole one." },
      C: { ru: "Сроки переноса выбор §280C не меняет.", en: "The section 280C election does not change the carryover periods." },
      D: { ru: "Возвратным кредит не становится; отдельно есть выбор зачесть его против зарплатных налогов.", en: "The credit does not become refundable; separately there is an election to apply it against payroll taxes." }
    }
  },
  {
    sec: "s81",
    ru: "Как берётся кредит на восстановление сертифицированного исторического здания?",
    en: "How is the rehabilitation credit for a certified historic structure taken?",
    opts: [
      { k: "A", ru: "20% целиком в год завершения работ", en: "20% in full in the year the work is finished" },
      { k: "B", ru: "20% равными долями за 5 лет, то есть по 4% в год", en: "20% ratably over 5 years, that is 4% a year" },
      { k: "C", ru: "10% целиком в год ввода здания в эксплуатацию", en: "10% in full in the year the building is placed in service" },
      { k: "D", ru: "20% за 10 лет", en: "20% over 10 years" }
    ],
    correct: "B",
    why: {
      A: { ru: "Сразу кредит не берётся: он растянут во времени.", en: "The credit is not taken at once: it is spread over time." },
      B: { ru: "Верно. И базис здания уменьшается на весь кредит, а затраты должны превышать большее из $5 000 и скорректированного базиса.", en: "Correct. And the building's basis is reduced by the whole credit, while the expenditure must exceed the greater of $5,000 and the adjusted basis." },
      C: { ru: "Ставка 10% для исторических зданий больше не применяется.", en: "The 10% rate no longer applies to historic structures." },
      D: { ru: "Срок — пять лет, а не десять.", en: "The period is five years, not ten." }
    }
  },
  {
    sec: "s81",
    ru: "Всемирный налогооблагаемый доход $600 000, из них иностранный $150 000. Налог США до кредитов $120 000. За рубежом уплачено $40 000. Каков иностранный налоговый кредит?",
    en: "Worldwide taxable income is $600,000, of which $150,000 is foreign. US tax before credits is $120,000. Foreign taxes of $40,000 were paid. What is the foreign tax credit?",
    opts: [
      { k: "A", ru: "$40 000", en: "$40,000" },
      { k: "B", ru: "$30 000", en: "$30,000" },
      { k: "C", ru: "$10 000", en: "$10,000" },
      { k: "D", ru: "$120 000", en: "$120,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это уплаченная сумма, а она выше предела.", en: "That is the amount paid, and it exceeds the limit." },
      B: { ru: "Верно. Предел: 120 000 × 150 000 ÷ 600 000 = $30 000, и кредит — меньшее из уплаченного и предела. Неиспользованные $10 000 идут назад на год и вперёд на десять.", en: "Correct. The limit is 120,000 × 150,000 ÷ 600,000 = $30,000, and the credit is the lesser of the amount paid and the limit. The unused $10,000 goes back one year and forward ten." },
      C: { ru: "$10 000 — превышение над пределом, то есть то, что переносится.", en: "$10,000 is the excess over the limit, that is what carries over." },
      D: { ru: "Весь налог США кредитом стать не может.", en: "The whole US tax cannot become the credit." }
    }
  },
  {
    sec: "s81",
    ru: "Что верно о нерефундируемости общего кредита бизнеса?",
    en: "Which is true of the general business credit being nonrefundable?",
    opts: [
      { k: "A", ru: "Он может довести налог до нуля и дать возврат сверх того", en: "It may bring the tax to zero and produce a refund beyond that" },
      { k: "B", ru: "Он не может довести налог даже до нуля: часть налога закон оставляет неприкосновенной", en: "It cannot even bring the tax to zero: the law keeps part of the tax out of reach" },
      { k: "C", ru: "Он может довести налог ровно до нуля, но не ниже", en: "It may bring the tax exactly to zero, but no lower" },
      { k: "D", ru: "Он вообще не уменьшает налог, а уменьшает доход", en: "It does not reduce tax at all but reduces income" }
    ],
    correct: "B",
    why: {
      A: { ru: "Возврата сверх налога нерефундируемый кредит не даёт никогда.", en: "A nonrefundable credit never produces a refund beyond the tax." },
      B: { ru: "Верно. Предел устроен так, что из чистого налога вычитается большая из двух величин, и остаток налога кредиту недоступен.", en: "Correct. The limit is built so that the greater of two amounts is subtracted from the net tax, and the remaining tax is beyond the credit's reach." },
      C: { ru: "До нуля кредит обычно не доходит: мешает предел.", en: "The credit usually does not reach zero: the limit is in the way." },
      D: { ru: "Доход уменьшает вычет, а кредит уменьшает налог.", en: "A deduction reduces income; a credit reduces tax." }
    }
  },
  {
    sec: "s81",
    ru: "Какой кредит объединяет несколько кредитов, чтобы дать им единые правила переноса назад и вперёд?",
    en: "Which credit combines several credits so as to give them uniform carryback and carryover rules?",
    opts: [
      { k: "A", ru: "Инвестиционный кредит", en: "The investment credit" },
      { k: "B", ru: "Общий кредит бизнеса", en: "The general business credit" },
      { k: "C", ru: "Иностранный налоговый кредит", en: "The foreign tax credit" },
      { k: "D", ru: "Кредит на исследования", en: "The research credit" }
    ],
    correct: "B",
    why: {
      A: { ru: "Инвестиционный кредит сам объединяет несколько кредитов, но входит в общий как одна из его частей.", en: "The investment credit does combine several credits, but it sits inside the general one as a part of it." },
      B: { ru: "Верно. Это и есть его назначение: общий предел, общая очередь, общие сроки для нескольких десятков кредитов.", en: "Correct. That is exactly its purpose: one limit, one queue and one set of periods for several dozen credits." },
      C: { ru: "Иностранный налоговый кредит стоит отдельно и ничего не объединяет.", en: "The foreign tax credit stands apart and combines nothing." },
      D: { ru: "Кредит на исследования — одна из частей общего кредита.", en: "The research credit is one of the parts of the general credit." }
    }
  },
  {
    sec: "s82",
    ru: "Какая из организаций НЕ имеет собственного чистого операционного убытка?",
    en: "Which of these has no net operating loss of its own?",
    opts: [
      { k: "A", ru: "Наследственная масса", en: "An estate" },
      { k: "B", ru: "Партнёрство", en: "A partnership" },
      { k: "C", ru: "Корпорация C", en: "A C corporation" },
      { k: "D", ru: "Траст", en: "A trust" }
    ],
    correct: "B",
    why: {
      A: { ru: "Наследственная масса считает убыток у себя, по форме 172.", en: "An estate figures the loss itself, on Form 172." },
      B: { ru: "Верно. У партнёрства и S-корпорации убытка нет: он проходит насквозь к партнёрам и акционерам, и уже они считают его своим.", en: "Correct. A partnership and an S corporation have none: the loss passes through to the partners and shareholders, and it is they who figure it as their own." },
      C: { ru: "Корпорация C считает убыток у себя, только без разделения на деловое и неделовое.", en: "A C corporation figures its own, merely without the business/nonbusiness split." },
      D: { ru: "Траст, как и наследственная масса, считает убыток у себя.", en: "A trust, like an estate, figures its own." }
    }
  },
  {
    sec: "s82",
    ru: "При расчёте чистого операционного убытка физического лица что из перечисленного считается ДЕЛОВЫМ доходом?",
    en: "In figuring an individual's net operating loss, which of the following counts as BUSINESS income?",
    opts: [
      { k: "A", ru: "Проценты по личным сбережениям", en: "Interest on personal savings" },
      { k: "B", ru: "Дивиденды по акциям", en: "Dividends on shares" },
      { k: "C", ru: "Заработная плата по найму", en: "Wages from employment" },
      { k: "D", ru: "Выплаты социального обеспечения", en: "Social security benefits" }
    ],
    correct: "C",
    why: {
      A: { ru: "Проценты от вложений — неделовой доход.", en: "Interest from investments is nonbusiness income." },
      B: { ru: "Дивиденды — неделовой доход.", en: "Dividends are nonbusiness income." },
      C: { ru: "Верно. Работа по найму — тоже занятие, и заработная плата считается деловым доходом. Пособие по безработице — тоже.", en: "Correct. Employment is an occupation too, and wages count as business income. So does unemployment compensation." },
      D: { ru: "Выплаты социального обеспечения — неделовой доход.", en: "Social security benefits are nonbusiness income." }
    }
  },
  {
    sec: "s82",
    ru: "Что из перечисленного НЕ является деловым доходом или вычетом при расчёте убытка?",
    en: "Which of the following is NOT business income or a business deduction in figuring the loss?",
    opts: [
      { k: "A", ru: "Пособие по безработице", en: "Unemployment compensation" },
      { k: "B", ru: "Взнос самозанятого в собственный пенсионный план", en: "A self-employed person's contribution to their own retirement plan" },
      { k: "C", ru: "Арендный доход", en: "Rental income" },
      { k: "D", ru: "Потеря личного имущества от несчастного случая", en: "A casualty loss on personal property" }
    ],
    correct: "B",
    why: {
      A: { ru: "Деловой доход: пособие заменяет заработную плату.", en: "Business income: the benefit stands in for wages." },
      B: { ru: "Верно. Взносы в пенсионный план самозанятого — неделовой вычет и вычищаются из убытка.", en: "Correct. Contributions to a self-employed retirement plan are a nonbusiness deduction and are stripped out of the loss." },
      C: { ru: "Арендный доход — деловой.", en: "Rental income is business income." },
      D: { ru: "Потери от несчастного случая считаются деловым вычетом даже тогда, когда имущество было личным. Это намеренное исключение.", en: "Casualty losses count as a business deduction even where the property was personal. That is a deliberate exception." }
    }
  },
  {
    sec: "s82",
    ru: "Какая из корректировок НЕ требуется при расчёте чистого операционного убытка?",
    en: "Which adjustment is NOT required in figuring a net operating loss?",
    opts: [
      { k: "A", ru: "Прибавить обратно вычет убытка другого года", en: "Add back another year's loss deduction" },
      { k: "B", ru: "Прибавить обратно вычет квалифицированного дохода бизнеса", en: "Add back the qualified business income deduction" },
      { k: "C", ru: "Прибавить обратно превышение неделовых вычетов над неделовым доходом", en: "Add back the excess of nonbusiness deductions over nonbusiness income" },
      { k: "D", ru: "Прибавить обратно заработную плату по найму", en: "Add back wages from employment" }
    ],
    correct: "D",
    why: {
      A: { ru: "Требуется: иначе прошлый убыток считался бы дважды.", en: "Required: otherwise the past loss would count twice." },
      B: { ru: "Требуется: это льгота, а не настоящий расход.", en: "Required: it is a relief, not a real expense." },
      C: { ru: "Требуется, и это главный шаг всего расчёта.", en: "Required, and it is the chief step of the whole computation." },
      D: { ru: "Верно, такой корректировки нет. Заработная плата — деловой доход и остаётся в убытке.", en: "Correct — there is no such adjustment. Wages are business income and stay inside the loss." }
    }
  },
  {
    sec: "s82",
    ru: "Одинокий налогоплательщик: зарплата $10 000, проценты $500, убыток предприятия $40 000, стандартный вычет $15 750. Каков чистый операционный убыток?",
    en: "A single taxpayer: wages $10,000, interest $500, a $40,000 business loss, standard deduction $15,750. What is the net operating loss?",
    opts: [
      { k: "A", ru: "$45 250", en: "$45,250" },
      { k: "B", ru: "$30 000", en: "$30,000" },
      { k: "C", ru: "$40 000", en: "$40,000" },
      { k: "D", ru: "$29 500", en: "$29,500" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это отрицательный налогооблагаемый доход до корректировок: 10 000 + 500 − 40 000 − 15 750.", en: "That is negative taxable income before adjustments: 10,000 + 500 − 40,000 − 15,750." },
      B: { ru: "Верно. Обратно прибавляется превышение неделовых вычетов над неделовым доходом: 15 750 − 500 = 15 250. Итог: −45 250 + 15 250 = −30 000, то есть зарплата минус убыток предприятия.", en: "Correct. Added back is the excess of nonbusiness deductions over nonbusiness income: 15,750 − 500 = 15,250. The result: −45,250 + 15,250 = −30,000, that is the wages less the business loss." },
      C: { ru: "Взят просто убыток предприятия, без заработной платы.", en: "The business loss taken on its own, without the wages." },
      D: { ru: "Обратно прибавлен весь стандартный вычет, а не его превышение над процентами.", en: "The whole standard deduction added back rather than its excess over the interest." }
    }
  },
  {
    sec: "s82",
    ru: "Куда переносится чистый операционный убыток, возникший в 2025 году, если фермерской части в нём нет?",
    en: "Where is a 2025 net operating loss carried if it has no farming portion?",
    opts: [
      { k: "A", ru: "Назад на 2 года, вперёд на 20 лет", en: "Back 2 years, forward 20 years" },
      { k: "B", ru: "Назад на 5 лет, вперёд без ограничения", en: "Back 5 years, forward indefinitely" },
      { k: "C", ru: "Только вперёд, без ограничения срока", en: "Forward only, with no time limit" },
      { k: "D", ru: "Только назад, на 2 года", en: "Back only, 2 years" }
    ],
    correct: "C",
    why: {
      A: { ru: "Такие сроки были у убытков до 2018 года.", en: "Those were the periods for pre-2018 losses." },
      B: { ru: "Пятилетний перенос назад действовал для убытков 2018–2020 годов.", en: "The five-year carryback applied to losses of 2018 through 2020." },
      C: { ru: "Верно. Убытки, возникшие после 2020 года, назад не переносятся, а вперёд идут без ограничения срока — но не более чем на 80% дохода каждого года.", en: "Correct. Losses arising after 2020 are not carried back, and go forward with no time limit — but never against more than 80% of any year's income." },
      D: { ru: "Перенос назад остался только у фермерской части.", en: "The carryback survives only for the farming portion." }
    }
  },
  {
    sec: "s82",
    ru: "У фермера убыток $80 000, из которых фермерская часть — $50 000. Что можно перенести назад?",
    en: "A farmer has an $80,000 loss, of which the farming portion is $50,000. What may be carried back?",
    opts: [
      { k: "A", ru: "Весь убыток $80 000 на 2 года", en: "The whole $80,000 loss, 2 years" },
      { k: "B", ru: "Только фермерскую часть $50 000, на 2 года", en: "The farming portion of $50,000 only, 2 years" },
      { k: "C", ru: "Весь убыток на 5 лет", en: "The whole loss, 5 years" },
      { k: "D", ru: "Ничего: перенос назад отменён", en: "Nothing: the carryback has been abolished" }
    ],
    correct: "B",
    why: {
      A: { ru: "Назад идёт только фермерская часть, а не весь убыток.", en: "Only the farming portion goes back, not the whole loss." },
      B: { ru: "Верно. Это единственное исключение из запрета на перенос назад. От переноса можно и отказаться, оставив всё идти вперёд.", en: "Correct. This is the only exception to the ban on carrybacks. The carryback may also be waived, leaving everything to go forward." },
      C: { ru: "Пять лет — правило для убытков 2018–2020 годов.", en: "Five years is the rule for losses of 2018 through 2020." },
      D: { ru: "Для фермерской части перенос назад сохранён.", en: "For the farming portion the carryback survives." }
    }
  },
  {
    sec: "s82",
    ru: "Убыток 2022 года — $250 000. В 2025 году налогооблагаемый доход до его вычета — $200 000. Сколько облагается в 2025 году?",
    en: "The 2022 loss was $250,000. In 2025 taxable income before that deduction is $200,000. How much is taxed in 2025?",
    opts: [
      { k: "A", ru: "$0", en: "$0" },
      { k: "B", ru: "$40 000", en: "$40,000" },
      { k: "C", ru: "$50 000", en: "$50,000" },
      { k: "D", ru: "$160 000", en: "$160,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Убытка хватило бы на весь доход, но ограничение в 80% не даёт погасить его целиком.", en: "The loss would cover the whole income, but the 80% limitation stops it being wiped out." },
      B: { ru: "Верно. Вычет не больше 80% × 200 000 = $160 000, значит облагается $40 000. Остаток убытка $90 000 идёт дальше.", en: "Correct. The deduction is no more than 80% × 200,000 = $160,000, so $40,000 is taxed. The remaining $90,000 of loss goes on." },
      C: { ru: "Такой величины расчёт не даёт.", en: "The computation gives no such figure." },
      D: { ru: "$160 000 — это сам вычет, а не облагаемый остаток.", en: "$160,000 is the deduction itself, not the taxable remainder." }
    }
  },
  {
    sec: "s82",
    ru: "От какой величины считаются 80%, ограничивающие вычет перенесённого убытка?",
    en: "What is the 80% limiting the carried-loss deduction measured against?",
    opts: [
      { k: "A", ru: "От суммы самого убытка", en: "The amount of the loss itself" },
      { k: "B", ru: "От налогооблагаемого дохода года, посчитанного до вычета убытка и вычета QBI", en: "The year's taxable income figured before the loss deduction and the QBI deduction" },
      { k: "C", ru: "От валового дохода года", en: "The year's gross income" },
      { k: "D", ru: "От налогооблагаемого дохода после вычета убытка", en: "Taxable income after the loss deduction" }
    ],
    correct: "B",
    why: {
      A: { ru: "База — доход года, куда убыток пришёл, а не сам убыток.", en: "The base is the income of the year the loss reaches, not the loss itself." },
      B: { ru: "Верно. И вычет по §250 из базы тоже исключается.", en: "Correct. The section 250 deduction is likewise excluded from the base." },
      C: { ru: "Не валовой, а налогооблагаемый доход.", en: "Not gross but taxable income." },
      D: { ru: "Это дало бы круговой расчёт: доход после вычета зависит от самого вычета.", en: "That would be circular: income after the deduction depends on the deduction." }
    }
  },
  {
    sec: "s82",
    ru: "У налогоплательщика накопились убытки 2019, 2021 и 2023 годов. Какой расходуется первым?",
    en: "A taxpayer has losses from 2019, 2021 and 2023. Which is used first?",
    opts: [
      { k: "A", ru: "Самый ранний — 2019 года", en: "The earliest — 2019" },
      { k: "B", ru: "Самый поздний — 2023 года", en: "The latest — 2023" },
      { k: "C", ru: "Самый крупный по сумме", en: "The largest in amount" },
      { k: "D", ru: "Любой по выбору налогоплательщика", en: "Any the taxpayer chooses" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Убытки расходуются в порядке возникновения, начиная с самого раннего.", en: "Correct. Losses are used in the order they arose, earliest first." },
      B: { ru: "Обратный порядок закон не устанавливает.", en: "The law prescribes no reverse order." },
      C: { ru: "Размер убытка на очередь не влияет.", en: "The size of the loss does not affect the queue." },
      D: { ru: "Выбора здесь нет.", en: "There is no choice here." }
    }
  },
  {
    sec: "s82",
    ru: "Что происходит с избыточным убытком бизнеса, срезанным порогом §461(l)?",
    en: "What happens to the excess business loss cut off by the section 461(l) threshold?",
    opts: [
      { k: "A", ru: "Пропадает безвозвратно", en: "It is lost for good" },
      { k: "B", ru: "Переносится вперёд и становится чистым операционным убытком следующего года", en: "It carries forward and becomes the next year's net operating loss" },
      { k: "C", ru: "Переносится назад на два года", en: "It carries back two years" },
      { k: "D", ru: "Вычитается в том же году как капитальный убыток", en: "It is deducted the same year as a capital loss" }
    ],
    correct: "B",
    why: {
      A: { ru: "Срезанное не пропадает: оно меняет год и режим.", en: "What is cut off is not lost: it changes year and regime." },
      B: { ru: "Верно. Дальше оно живёт по правилам чистого операционного убытка и подпадает под ограничение в 80%.", en: "Correct. From then on it lives by the net operating loss rules and falls under the 80% limitation." },
      C: { ru: "Назад оно не идёт.", en: "It does not go back." },
      D: { ru: "Капитальным убытком оно не становится.", en: "It does not become a capital loss." }
    }
  },
  {
    sec: "s82",
    ru: "У корпорации C доходы от деятельности $700 000, расходы $760 000, плюс полученные дивиденды $80 000. Что верно о её убытке?",
    en: "A C corporation has $700,000 of operating income, $760,000 of expenses, and $80,000 of dividends received. What is true of its loss?",
    opts: [
      { k: "A", ru: "У корпорации, как и у человека, доход делится на деловой и неделовой", en: "For a corporation, as for an individual, income splits into business and nonbusiness" },
      { k: "B", ru: "У корпорации всё считается деловым, разделения нет", en: "For a corporation everything counts as business; there is no split" },
      { k: "C", ru: "Корпорация чистого операционного убытка иметь не может", en: "A corporation cannot have a net operating loss" },
      { k: "D", ru: "Дивиденды всегда исключаются из расчёта", en: "Dividends are always excluded from the computation" }
    ],
    correct: "B",
    why: {
      A: { ru: "Разделение на деловое и неделовое — правило для физических лиц, наследственных масс и трастов.", en: "The business/nonbusiness split is a rule for individuals, estates and trusts." },
      B: { ru: "Верно. У корпорации нет личной жизни, и потому нет неделовых статей: расчёт у неё проще.", en: "Correct. A corporation has no private life and so no nonbusiness items: its computation is simpler." },
      C: { ru: "Может, и считает его у себя.", en: "It can, and figures it itself." },
      D: { ru: "Дивиденды в расчёт входят; отдельно на них действует вычет полученных дивидендов.", en: "Dividends do enter the computation; the dividends-received deduction applies to them separately." }
    }
  },
  {
    sec: "s82",
    ru: "Почему при расчёте убытка обратно прибавляется вычет квалифицированного дохода бизнеса?",
    en: "Why is the qualified business income deduction added back in figuring the loss?",
    opts: [
      { k: "A", ru: "Потому что это неделовой вычет", en: "Because it is a nonbusiness deduction" },
      { k: "B", ru: "Потому что это льгота, а не настоящий расход деятельности", en: "Because it is a relief, not a real expense of the activity" },
      { k: "C", ru: "Потому что он всегда равен нулю при убытке", en: "Because it is always nil where there is a loss" },
      { k: "D", ru: "Он не прибавляется обратно", en: "It is not added back" }
    ],
    correct: "B",
    why: {
      A: { ru: "Он связан именно с деловым доходом; дело не в этом.", en: "It is tied to business income precisely; that is not the reason." },
      B: { ru: "Верно. Убыток должен отражать настоящие расходы деятельности, а не налоговые льготы. По той же причине прибавляется обратно и вычет по §250.", en: "Correct. The loss must reflect the activity's real expenses, not tax reliefs. For the same reason the section 250 deduction is added back too." },
      C: { ru: "Он мог быть взят в том же году по другой деятельности.", en: "It could have been taken the same year on another activity." },
      D: { ru: "Прибавляется: это одна из обязательных корректировок.", en: "It is added back: this is one of the required adjustments." }
    }
  },
  {
    sec: "s82",
    ru: "Неделовой капитальный убыток $9 000 при неделовой капитальной прибыли $3 000. Как это входит в расчёт чистого операционного убытка?",
    en: "A nonbusiness capital loss of $9,000 against a nonbusiness capital gain of $3,000. How does this enter the net operating loss computation?",
    opts: [
      { k: "A", ru: "Убыток вычитается целиком", en: "The loss is deducted in full" },
      { k: "B", ru: "Убыток вычитается только в пределах неделовой капитальной прибыли, то есть $3 000; остальные $6 000 в убыток не входят", en: "The loss is deducted only up to the nonbusiness capital gain, that is $3,000; the other $6,000 does not enter the loss" },
      { k: "C", ru: "Убыток вычитается в пределах $3 000 ограничения по капитальным убыткам", en: "The loss is deducted up to the $3,000 capital loss limitation" },
      { k: "D", ru: "Неделовые капитальные убытки в расчёте не участвуют вовсе", en: "Nonbusiness capital losses take no part at all" }
    ],
    correct: "B",
    why: {
      A: { ru: "Неделовой убыток сверх неделовой прибыли в деловой убыток не входит.", en: "A nonbusiness loss beyond nonbusiness gain does not enter a business loss." },
      B: { ru: "Верно. Совпадение с $3 000 здесь случайное: важна именно неделовая капитальная прибыль, а не общее ограничение.", en: "Correct. The coincidence with $3,000 here is accidental: what matters is the nonbusiness capital gain, not the general limitation." },
      C: { ru: "Общее ограничение капитальных убытков — другое правило и другая величина.", en: "The general capital loss limitation is a different rule and a different amount." },
      D: { ru: "Участвуют, просто в пределах неделовой капитальной прибыли.", en: "They do take part, merely up to the nonbusiness capital gain." }
    }
  },
  {
    sec: "s82",
    ru: "Деятельность ведётся не ради прибыли. Что происходит с её убытком?",
    en: "An activity is not engaged in for profit. What happens to its loss?",
    opts: [
      { k: "A", ru: "Становится чистым операционным убытком и переносится вперёд", en: "It becomes a net operating loss and carries forward" },
      { k: "B", ru: "Убытка не возникает вовсе: расходы не вычитаются", en: "There is no loss at all: the expenses are not deducted" },
      { k: "C", ru: "Вычитается в пределах $3 000 в год", en: "It is deducted up to $3,000 a year" },
      { k: "D", ru: "Переносится назад на два года", en: "It carries back two years" }
    ],
    correct: "B",
    why: {
      A: { ru: "Чтобы убыток стал чистым операционным, деятельность должна вестись ради прибыли.", en: "For a loss to become a net operating loss the activity must be engaged in for profit." },
      B: { ru: "Верно. Доход при этом облагается, а расходы не вычитаются, так что убытка не образуется. Признаки и правило «прибыль в трёх годах из пяти» — в модуле 1.", en: "Correct. The income is still taxed while the expenses are not deducted, so no loss arises. The marks and the “profit in three years out of five” rule are in module 1." },
      C: { ru: "Ограничение в $3 000 относится к капитальным убыткам.", en: "The $3,000 limit belongs to capital losses." },
      D: { ru: "Переносить нечего.", en: "There is nothing to carry." }
    }
  },
  {
    sec: "s83",
    ru: "Что из перечисленного НЕ является потерей от несчастного случая?",
    en: "Which of the following is NOT a casualty loss?",
    opts: [
      { k: "A", ru: "Здание повреждено ураганом", en: "A building damaged by a hurricane" },
      { k: "B", ru: "Деревянные конструкции разрушены термитами за несколько лет", en: "Timbers destroyed by termites over several years" },
      { k: "C", ru: "Склад сгорел при пожаре", en: "A warehouse burned down" },
      { k: "D", ru: "Оборудование разбито при землетрясении", en: "Equipment smashed in an earthquake" }
    ],
    correct: "B",
    why: {
      A: { ru: "Ураган — внезапное событие внешней силы.", en: "A hurricane is a sudden event of external force." },
      B: { ru: "Верно. Постепенное разрушение — термиты, ржавчина, гниль, засуха — под несчастный случай не подпадает: не хватает внезапности.", en: "Correct. Progressive deterioration — termites, rust, rot, drought — is not a casualty: it lacks suddenness." },
      C: { ru: "Пожар — классический несчастный случай.", en: "Fire is the classic casualty." },
      D: { ru: "Землетрясение — тоже.", en: "So is an earthquake." }
    }
  },
  {
    sec: "s83",
    ru: "Товар похищен из магазина в декабре 2024 года, а пропажа обнаружена в марте 2025 года. К какому году относится потеря?",
    en: "Goods were stolen from a shop in December 2024 and the loss discovered in March 2025. To which year does the loss belong?",
    opts: [
      { k: "A", ru: "К 2024 году — когда кража произошла", en: "To 2024 — when the theft occurred" },
      { k: "B", ru: "К 2025 году — когда она обнаружена", en: "To 2025 — when it was discovered" },
      { k: "C", ru: "Делится между двумя годами", en: "It is split between the two years" },
      { k: "D", ru: "К году получения страхового возмещения", en: "To the year the insurance is received" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это правило для несчастного случая, а не для кражи.", en: "That is the rule for a casualty, not for a theft." },
      B: { ru: "Верно. Потеря от кражи вычитается в год обнаружения, а от несчастного случая — в год события. В этом их отличие.", en: "Correct. A theft loss is deducted in the year of discovery, a casualty loss in the year of the event. That is the difference between them." },
      C: { ru: "Деления между годами закон не знает.", en: "The law knows no split between years." },
      D: { ru: "Год выплаты влияет только на размер вычета, а не на год.", en: "The year of payment affects the amount of the deduction, not the year." }
    }
  },
  {
    sec: "s83",
    ru: "Деловое оборудование с базисом $22 000 и рыночной стоимостью $14 000 полностью уничтожено. Страховки нет, остатков нет. Каков вычет?",
    en: "Business equipment with a basis of $22,000 and a market value of $14,000 was completely destroyed. There is no insurance and no salvage. What is the deduction?",
    opts: [
      { k: "A", ru: "$14 000", en: "$14,000" },
      { k: "B", ru: "$22 000", en: "$22,000" },
      { k: "C", ru: "$8 000", en: "$8,000" },
      { k: "D", ru: "$13 900", en: "$13,900" }
    ],
    correct: "B",
    why: {
      A: { ru: "Рыночная стоимость здесь не рассматривается вовсе.", en: "Market value is not considered here at all." },
      B: { ru: "Верно. У делового имущества, погибшего целиком, вычет равен скорректированному базису за вычетом остатков и возмещения. Рыночная стоимость роли не играет.", en: "Correct. For business property destroyed entirely the deduction is the adjusted basis less salvage and reimbursement. Market value plays no part." },
      C: { ru: "Разница между базисом и рыночной стоимостью здесь ни при чём.", en: "The difference between basis and market value is beside the point." },
      D: { ru: "Порог в $100 к деловому имуществу не применяется.", en: "The $100 floor does not apply to business property." }
    }
  },
  {
    sec: "s83",
    ru: "Деловой станок частично повреждён пожаром. Базис до события — $30 000, падение рыночной стоимости — $40 000. Возмещения нет. Каков вычет?",
    en: "A business machine was partly damaged by fire. Its basis before the event was $30,000 and the decline in market value $40,000. There is no reimbursement. What is the deduction?",
    opts: [
      { k: "A", ru: "$40 000", en: "$40,000" },
      { k: "B", ru: "$30 000", en: "$30,000" },
      { k: "C", ru: "$35 000", en: "$35,000" },
      { k: "D", ru: "$10 000", en: "$10,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Больше базиса вычесть нельзя: это была бы потеря того, что не вкладывалось.", en: "No more than basis may be deducted: that would be losing what was never invested." },
      B: { ru: "Верно. При частичном разрушении берётся меньшее из падения рыночной стоимости и скорректированного базиса. Здесь меньший — базис.", en: "Correct. On partial destruction the lesser of the decline in market value and the adjusted basis is taken. Here the basis is the lesser." },
      C: { ru: "Среднего между двумя величинами правило не знает.", en: "The rule knows no average of the two." },
      D: { ru: "Разность здесь ни при чём.", en: "The difference is beside the point." }
    }
  },
  {
    sec: "s83",
    ru: "Личная машина угнана. Событие не входит в объявленное бедствие, прибылей от несчастных случаев за год нет. Каков вычет?",
    en: "A private car was stolen. The event is not within a declared disaster and there were no casualty gains for the year. What is the deduction?",
    opts: [
      { k: "A", ru: "Меньшее из базиса и падения стоимости, минус пороги", en: "The lesser of basis and decline in value, less the floors" },
      { k: "B", ru: "Полный базис машины", en: "The car's full basis" },
      { k: "C", ru: "Ноль: личные потери вне объявленного бедствия не вычитаются", en: "Nil: personal losses outside a declared disaster are not deducted" },
      { k: "D", ru: "Ноль, но только если машина была застрахована", en: "Nil, but only if the car was insured" }
    ],
    correct: "C",
    why: {
      A: { ru: "Так считалось бы, будь это бедствие федерального уровня.", en: "That would be the computation if this were a federally declared disaster." },
      B: { ru: "Полный базис берётся у делового имущества, а машина личная.", en: "Full basis is taken for business property, and this car is personal." },
      C: { ru: "Верно. С 2018 года личные потери вычитаются только при бедствии федерального уровня — либо в пределах прибылей от несчастных случаев того же года.", en: "Correct. Since 2018 personal losses are deducted only in a federally declared disaster — or up to that year's casualty gains." },
      D: { ru: "Страховка на само право на вычет не влияет.", en: "Insurance does not affect the right to a deduction as such." }
    }
  },
  {
    sec: "s83",
    ru: "Личная потеря в объявленном бедствии — $25 000; скорректированный валовой доход — $150 000. Каков вычет?",
    en: "A personal loss in a declared disaster is $25,000; adjusted gross income is $150,000. What is the deduction?",
    opts: [
      { k: "A", ru: "$25 000", en: "$25,000" },
      { k: "B", ru: "$24 900", en: "$24,900" },
      { k: "C", ru: "$9 900", en: "$9,900" },
      { k: "D", ru: "$10 000", en: "$10,000" }
    ],
    correct: "C",
    why: {
      A: { ru: "Пороги не применены.", en: "The floors have not been applied." },
      B: { ru: "Применён только порог на событие, а десятая доля дохода — нет.", en: "Only the per-event floor applied; the tenth of income was not." },
      C: { ru: "Верно. 25 000 − 100 порога на событие − 15 000 (десятая доля дохода) = $9 900.", en: "Correct. 25,000 − the $100 per-event floor − 15,000 (a tenth of income) = $9,900." },
      D: { ru: "Порог на событие забыт.", en: "The per-event floor has been forgotten." }
    }
  },
  {
    sec: "s83",
    ru: "Здание используется на 70% в бизнесе и на 30% лично. Как считать потерю от несчастного случая?",
    en: "A building is used 70% in a business and 30% personally. How is the casualty loss figured?",
    opts: [
      { k: "A", ru: "Одним расчётом по всему зданию", en: "In one computation for the whole building" },
      { k: "B", ru: "Двумя отдельными расчётами: деловая часть по своим правилам, личная по своим", en: "In two separate computations: the business part by its rules, the personal part by its own" },
      { k: "C", ru: "Как деловое имущество целиком, раз бизнеса больше половины", en: "Wholly as business property, since business use exceeds half" },
      { k: "D", ru: "Как личное имущество целиком", en: "Wholly as personal property" }
    ],
    correct: "B",
    why: {
      A: { ru: "Режимы для делового и личного слишком разные, чтобы считать разом.", en: "The business and personal regimes differ too much to be figured together." },
      B: { ru: "Верно. Базис и падение стоимости делятся по долям, и к личной части применяются пороги, а к деловой — нет.", en: "Correct. Basis and decline in value are split by the shares, and the floors apply to the personal part but not to the business one." },
      C: { ru: "Правила «больше половины» здесь нет: это правило списанного имущества из модуля 7.", en: "There is no “more than half” rule here: that belongs to listed property in module 7." },
      D: { ru: "Деловая часть остаётся деловой.", en: "The business part stays business." }
    }
  },
  {
    sec: "s83",
    ru: "Как учесть потерю товарных запасов от кражи?",
    en: "How is a theft loss of inventory accounted for?",
    opts: [
      { k: "A", ru: "Через себестоимость проданных товаров либо отдельной потерей — на выбор, но не обоими способами", en: "Through cost of goods sold or as a separate loss — either, but not both" },
      { k: "B", ru: "Обязательно через себестоимость", en: "Necessarily through cost of goods sold" },
      { k: "C", ru: "Обязательно отдельной потерей", en: "Necessarily as a separate loss" },
      { k: "D", ru: "Обоими способами сразу, чтобы отразить и потерю, и рост себестоимости", en: "Both ways at once, to show both the loss and the rise in cost of goods sold" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Способа два, итог один, но с возмещением они обходятся по-разному: при первом оно идёт в доход, при втором уменьшает саму потерю.", en: "Correct. There are two routes to one result, but they treat the reimbursement differently: under the first it goes into income, under the second it reduces the loss itself." },
      B: { ru: "Второй способ тоже допустим.", en: "The second route is permitted too." },
      C: { ru: "Первый способ тоже допустим.", en: "The first route is permitted too." },
      D: { ru: "Это тот же товар, вычтенный дважды.", en: "That is the same goods deducted twice." }
    }
  },
  {
    sec: "s83",
    ru: "Товар на $12 000 украден в 2025 году; страховая признала требование и выплатит $5 000 в 2026 году. Какова потеря 2025 года при учёте отдельной потерей?",
    en: "Goods worth $12,000 were stolen in 2025; the insurer accepted the claim and will pay $5,000 in 2026. What is the 2025 loss if accounted for as a separate loss?",
    opts: [
      { k: "A", ru: "$12 000", en: "$12,000" },
      { k: "B", ru: "$7 000", en: "$7,000" },
      { k: "C", ru: "$0", en: "$0" },
      { k: "D", ru: "$5 000", en: "$5,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Пока есть обоснованная надежда на возмещение, эта часть потери не вычитается.", en: "While there is a reasonable prospect of recovery, that part of the loss is not deducted." },
      B: { ru: "Верно. 12 000 − 5 000 ожидаемого возмещения. Год деньги не меняет: потеря относится к году обнаружения кражи.", en: "Correct. 12,000 less the $5,000 expected. The timing of the money changes nothing: the loss belongs to the year the theft was discovered." },
      C: { ru: "Потеря не откладывается до года выплаты целиком.", en: "The loss is not postponed wholesale to the year of payment." },
      D: { ru: "$5 000 — это возмещение, а не потеря.", en: "$5,000 is the reimbursement, not the loss." }
    }
  },
  {
    sec: "s83",
    ru: "Имущество застраховано, но владелец решил не подавать требование в страховую. Что он может вычесть?",
    en: "The property was insured but the owner chose not to file a claim. What may be deducted?",
    opts: [
      { k: "A", ru: "Всю невозмещённую сумму потери", en: "The whole unrecovered amount of the loss" },
      { k: "B", ru: "Только ту часть потери, которую полис и так не покрывал, включая франшизу", en: "Only the part the policy would not have covered anyway, the excess included" },
      { k: "C", ru: "Ничего", en: "Nothing" },
      { k: "D", ru: "Половину потери", en: "Half the loss" }
    ],
    correct: "B",
    why: {
      A: { ru: "Именно этого правило и не допускает: нельзя переложить на казну то, что заплатила бы страховая.", en: "That is what the rule forbids: what the insurer would have paid may not be shifted onto the treasury." },
      B: { ru: "Верно. Франшиза сюда входит — её страховая не заплатила бы в любом случае.", en: "Correct. The excess counts here — the insurer would never have paid it." },
      C: { ru: "Непокрытая полисом часть вычитается.", en: "The part outside the policy is deducted." },
      D: { ru: "Половин закон здесь не знает.", en: "The law knows no halves here." }
    }
  },
  {
    sec: "s83",
    ru: "Потеря понесена в бедствии федерального уровня в 2025 году. Какой выбор есть у налогоплательщика?",
    en: "A loss was sustained in a federally declared disaster in 2025. What choice does the taxpayer have?",
    opts: [
      { k: "A", ru: "Вычесть в 2025 году или в 2026 году", en: "Deduct it in 2025 or in 2026" },
      { k: "B", ru: "Вычесть в 2025 году или в 2024 году, подав уточнённую декларацию", en: "Deduct it in 2025 or in 2024, by filing an amended return" },
      { k: "C", ru: "Растянуть вычет на пять лет", en: "Spread the deduction over five years" },
      { k: "D", ru: "Выбора нет: только год потери", en: "No choice: the year of the loss only" }
    ],
    correct: "B",
    why: {
      A: { ru: "Вперёд потеря не переносится.", en: "The loss does not go forward." },
      B: { ru: "Верно. Смысл выбора — получить деньги раньше. Отменить его можно до истечения срока подачи декларации за год самой потери.", en: "Correct. The point of the election is to get the money sooner. It may be revoked until the due date of the return for the year of the loss itself." },
      C: { ru: "Растягивать потерю нельзя.", en: "The loss may not be spread." },
      D: { ru: "Выбор есть, и он в этом и состоит.", en: "There is a choice, and this is it." }
    }
  },
  {
    sec: "s83",
    ru: "Ураган повредил личный жилой дом, декоративные деревья и кустарник вокруг него. Как считается потеря?",
    en: "A hurricane damaged a private house and the ornamental trees and shrubs around it. How is the loss figured?",
    opts: [
      { k: "A", ru: "По каждому объекту отдельно: дом, деревья, кустарник", en: "Item by item: the house, the trees, the shrubs" },
      { k: "B", ru: "Весь участок со строениями и насаждениями считается одной вещью", en: "The whole plot with its buildings and plantings counts as one item" },
      { k: "C", ru: "Только по дому; насаждения не учитываются", en: "By the house only; plantings are not counted" },
      { k: "D", ru: "По каждому объекту, и порог в $100 применяется к каждому", en: "Item by item, with the $100 floor applied to each" }
    ],
    correct: "B",
    why: {
      A: { ru: "Пораздельный расчёт — общее правило, но для личной недвижимости из него сделано исключение.", en: "Separate computation is the general rule, but personal real property is an exception to it." },
      B: { ru: "Верно. Берётся меньшее из падения стоимости всего участка и его скорректированного базиса.", en: "Correct. The lesser of the decline in the whole property's value and its adjusted basis is taken." },
      C: { ru: "Насаждения входят в стоимость участка.", en: "The plantings are part of the property's value." },
      D: { ru: "Порог на событие применяется один раз, сколько бы вещей ни пострадало.", en: "The per-event floor applies once, however many items were damaged." }
    }
  },
  {
    sec: "s83",
    ru: "Владелец потратил $3 000 на укрепление крыши, чтобы защитить склад от будущих бурь. Как это учитывается?",
    en: "An owner spent $3,000 reinforcing a roof to protect a warehouse from future storms. How is this treated?",
    opts: [
      { k: "A", ru: "Как часть потери от несчастного случая", en: "As part of a casualty loss" },
      { k: "B", ru: "Как расход на защиту имущества: в потерю от несчастного случая не входит", en: "As a cost of protecting property: it is not part of a casualty loss" },
      { k: "C", ru: "Вычитается в двойном размере", en: "Deducted at double the amount" },
      { k: "D", ru: "Вычитается только при объявленном бедствии", en: "Deducted only in a declared disaster" }
    ],
    correct: "B",
    why: {
      A: { ru: "Расходы на защиту от будущих потерь потерей не являются.", en: "The cost of guarding against future loss is not a loss." },
      B: { ru: "Верно. Это либо текущий расход, либо улучшение, увеличивающее базис, но никак не потеря от несчастного случая.", en: "Correct. It is either a current expense or an improvement adding to basis, but in no case a casualty loss." },
      C: { ru: "Двойных вычетов здесь нет.", en: "There are no double deductions here." },
      D: { ru: "Объявленное бедствие природы расхода не меняет.", en: "A declared disaster does not change the nature of the expense." }
    }
  },
  {
    sec: "s83",
    ru: "У налогоплательщика за год были личные потери от несчастного случая вне объявленного бедствия на $8 000 и прибыль от несчастного случая $5 000. Что происходит?",
    en: "For the year a taxpayer had personal casualty losses of $8,000 outside a declared disaster and a casualty gain of $5,000. What happens?",
    opts: [
      { k: "A", ru: "Потери не вычитаются вовсе", en: "The losses are not deducted at all" },
      { k: "B", ru: "Потери вычитаются в пределах прибыли, то есть $5 000", en: "The losses are deducted up to the gain, that is $5,000" },
      { k: "C", ru: "Потери вычитаются целиком", en: "The losses are deducted in full" },
      { k: "D", ru: "Прибыль не облагается", en: "The gain is not taxed" }
    ],
    correct: "B",
    why: {
      A: { ru: "Общее правило именно таково, но здесь работает исключение.", en: "That is the general rule, but here the exception applies." },
      B: { ru: "Верно. Когда за год есть прибыли от несчастных случаев, личные потери вычитаются в их пределах даже без объявленного бедствия.", en: "Correct. Where the year brings casualty gains, personal losses are deducted up to those gains even without a declared disaster." },
      C: { ru: "Сверх прибыли потери всё равно не вычитаются.", en: "Beyond the gain the losses are still not deducted." },
      D: { ru: "Прибыль от несчастного случая облагается по общим правилам.", en: "A casualty gain is taxed under the general rules." }
    }
  },
  {
    sec: "s84",
    ru: "С какой полной облагаемой массы платится налог за пользование дорогами?",
    en: "From what taxable gross weight is the highway use tax due?",
    opts: [
      { k: "A", ru: "С 26 000 фунтов", en: "From 26,000 pounds" },
      { k: "B", ru: "С 55 000 фунтов", en: "From 55,000 pounds" },
      { k: "C", ru: "С 6 000 фунтов", en: "From 6,000 pounds" },
      { k: "D", ru: "С 14 000 фунтов", en: "From 14,000 pounds" }
    ],
    correct: "B",
    why: {
      A: { ru: "Такого порога в этом налоге нет.", en: "This tax has no such threshold." },
      B: { ru: "Верно. 55 000 фунтов и больше, и при этом машина должна быть дорожной, зарегистрированной для дорог и использоваться на дорогах общего пользования.", en: "Correct. 55,000 pounds or more, and the vehicle must also be a highway vehicle, registered for highway use and used on public highways." },
      C: { ru: "6 000 фунтов — порог пределов §280F для легковых машин из модуля 7.", en: "6,000 pounds is the section 280F threshold for passenger cars, from module 7." },
      D: { ru: "14 000 фунтов — верхняя граница потолка §179 для внедорожников.", en: "14,000 pounds is the upper bound of the section 179 cap for sport utility vehicles." }
    }
  },
  {
    sec: "s84",
    ru: "Грузовик впервые выехал на дорогу общего пользования 10 июля. Когда подавать форму 2290?",
    en: "A lorry was first driven on a public highway on July 10. When is Form 2290 due?",
    opts: [
      { k: "A", ru: "До 31 июля", en: "By July 31" },
      { k: "B", ru: "До 31 августа", en: "By August 31" },
      { k: "C", ru: "До 30 июня следующего года", en: "By June 30 of the next year" },
      { k: "D", ru: "До 15 апреля следующего года", en: "By April 15 of the next year" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это конец месяца первого использования, а срок — конец следующего месяца.", en: "That is the end of the month of first use, but the deadline is the end of the following month." },
      B: { ru: "Верно. Форма подаётся до последнего дня месяца, следующего за месяцем первого использования.", en: "Correct. The form is due by the last day of the month following the month of first use." },
      C: { ru: "30 июня — конец налогового периода, а не срок подачи.", en: "June 30 is the end of the tax period, not the filing deadline." },
      D: { ru: "Со сроком подоходной декларации этот налог не связан.", en: "This tax is not tied to the income tax return's deadline." }
    }
  },
  {
    sec: "s84",
    ru: "При каком ожидаемом пробеге налог за пользование дорогами приостанавливается?",
    en: "At what expected mileage is the highway use tax suspended?",
    opts: [
      { k: "A", ru: "5 000 миль и меньше; 7 500 для сельскохозяйственной машины", en: "5,000 miles or less; 7,500 for an agricultural vehicle" },
      { k: "B", ru: "7 500 миль и меньше; 5 000 для сельскохозяйственной машины", en: "7,500 miles or less; 5,000 for an agricultural vehicle" },
      { k: "C", ru: "10 000 миль и меньше для любой машины", en: "10,000 miles or less for any vehicle" },
      { k: "D", ru: "Приостановки не бывает", en: "There is no suspension" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Пробег ожидаемый: приостановка заявляется вперёд, и если предел всё же превышен, налог за весь период становится должным.", en: "Correct. The mileage is the expected figure: the suspension is claimed in advance, and if the limit is exceeded after all, the tax for the whole period falls due." },
      B: { ru: "Пределы переставлены местами: у сельскохозяйственной машины он выше.", en: "The limits are swapped: an agricultural vehicle has the higher one." },
      C: { ru: "Единого предела в 10 000 миль нет.", en: "There is no single 10,000-mile limit." },
      D: { ru: "Приостановка предусмотрена и заявляется в самой форме 2290.", en: "The suspension exists and is claimed on Form 2290 itself." }
    }
  },
  {
    sec: "s84",
    ru: "Из чего складывается полная облагаемая масса грузовика?",
    en: "What makes up a lorry's taxable gross weight?",
    opts: [
      { k: "A", ru: "Только снаряжённая масса самой машины", en: "The vehicle's own unloaded weight only" },
      { k: "B", ru: "Снаряжённая масса машины, снаряжённая масса обычно используемых прицепов и обычно перевозимый максимальный груз", en: "The vehicle's unloaded weight, the unloaded weight of trailers customarily used, and the maximum load customarily carried" },
      { k: "C", ru: "Снаряжённая масса машины плюс груз, без прицепов", en: "The vehicle's unloaded weight plus the load, without trailers" },
      { k: "D", ru: "Максимальная разрешённая производителем масса", en: "The maximum weight allowed by the manufacturer" }
    ],
    correct: "B",
    why: {
      A: { ru: "Забыты и прицепы, и груз — два слагаемых из трёх.", en: "Both the trailers and the load are forgotten — two terms out of three." },
      B: { ru: "Верно. Груз считается и на самой машине, и на обычно используемых с ней прицепах.", en: "Correct. The load is counted both on the vehicle and on the trailers customarily used with it." },
      C: { ru: "Прицепы входят.", en: "Trailers are included." },
      D: { ru: "Берётся обычно перевозимый груз, а не предел производителя.", en: "What is taken is the load customarily carried, not the manufacturer's limit." }
    }
  },
  {
    sec: "s84",
    ru: "По какому топливу фермер НЕ может заявить кредит за акциз?",
    en: "For which fuel can a farmer NOT claim the excise credit?",
    opts: [
      { k: "A", ru: "Бензин, использованный на ферме", en: "Gasoline used on a farm" },
      { k: "B", ru: "Дизельное топливо, использованное на ферме", en: "Diesel fuel used on a farm" },
      { k: "C", ru: "Сжатый природный газ", en: "Compressed natural gas" },
      { k: "D", ru: "Авиационное топливо, использованное на ферме", en: "Aviation fuel used on a farm" }
    ],
    correct: "B",
    why: {
      A: { ru: "Бензин, потраченный на ферме, кредит даёт.", en: "Gasoline spent on a farm earns the credit." },
      B: { ru: "Верно. И причина не в отказе в льготе: топливо для фермы продаётся окрашенным и без акциза, значит возвращать нечего — ничего и не взяли.", en: "Correct. And the reason is not a benefit denied: farm fuel is sold dyed and free of the excise, so there is nothing to refund — nothing was taken." },
      C: { ru: "Сжатый природный газ в перечень входит.", en: "Compressed natural gas is on the list." },
      D: { ru: "Авиационное топливо, использованное на ферме, тоже входит.", en: "Aviation fuel used on a farm is on the list too." }
    }
  },
  {
    sec: "s84",
    ru: "Кто считается работником полной занятости для целей платежа крупного работодателя за медицинское покрытие?",
    en: "Who is a full-time employee for the purposes of the large employer's health coverage payment?",
    opts: [
      { k: "A", ru: "Занятый в среднем 30 часов в неделю или 120 часов в месяц", en: "One averaging 30 hours a week or 120 hours a month" },
      { k: "B", ru: "Занятый в среднем 30 часов в неделю или 130 часов в месяц", en: "One averaging 30 hours a week or 130 hours a month" },
      { k: "C", ru: "Занятый в среднем 40 часов в неделю", en: "One averaging 40 hours a week" },
      { k: "D", ru: "Занятый в среднем 35 часов в неделю или 140 часов в месяц", en: "One averaging 35 hours a week or 140 hours a month" }
    ],
    correct: "B",
    why: {
      A: { ru: "Цифра 120 выглядит правдоподобно и встречается в пересказах, но она неверна.", en: "The figure 120 looks plausible and turns up in summaries, but it is wrong." },
      B: { ru: "Верно. Месячный порог — 130 часов: тридцать часов в неделю за месяц дают заметно больше ста двадцати.", en: "Correct. The monthly threshold is 130 hours: thirty hours a week over a month comes to appreciably more than a hundred and twenty." },
      C: { ru: "Сорок часов — обычная полная неделя, но порог закона ниже.", en: "Forty hours is the usual full week, but the statutory threshold is lower." },
      D: { ru: "Таких величин закон не устанавливает.", en: "The law sets no such figures." }
    }
  },
  {
    sec: "s84",
    ru: "У крупного работодателя 70 работников полной занятости, покрытие не предложено никому, двое получили кредит на бирже. Каков платёж?",
    en: "A large employer has 70 full-time employees, offered coverage to nobody, and two received the marketplace credit. What is the payment?",
    opts: [
      { k: "A", ru: "$203 000", en: "$203,000" },
      { k: "B", ru: "$116 000", en: "$116,000" },
      { k: "C", ru: "$8 700", en: "$8,700" },
      { k: "D", ru: "$124 700", en: "$124,700" }
    ],
    correct: "B",
    why: {
      A: { ru: "Первые тридцать работников не вычтены: 70 × $2 900.", en: "The first thirty employees not subtracted: 70 × $2,900." },
      B: { ru: "Верно. (70 − 30) × $2 900 = $116 000. Число получивших кредит на бирже лишь включает обязанность, а в расчёте не участвует.", en: "Correct. (70 − 30) × $2,900 = $116,000. The number who received the marketplace credit merely switches the liability on and takes no part in the arithmetic." },
      C: { ru: "Это второй вид платежа по двум работникам: 2 × $4 350. Он здесь не применяется — работодатель платит один из двух.", en: "That is the second kind of payment on the two employees: 2 × $4,350. It does not apply here — an employer pays one of the two." },
      D: { ru: "Сложены оба вида платежа, а вместе они не берутся.", en: "The two kinds added together, and they are never charged together." }
    }
  }
];
