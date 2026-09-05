/* ===================================================================
   Вопросы тренажёра, модуль 01.

   Отдельный файл, а не блок внутри страницы: под file:// страница не
   может прочитать другой файл, поэтому единственный способ отдать
   данные двум страницам сразу — тег <script src>. Файл подключают и
   su01.html, и trainer.html.

   QUIZSECS — названия подразделов. На странице модуля они есть в
   заголовках, на странице тренажёра их нет. Карта порождается
   скриптом из тех же заголовков, а сборка отказывается собирать
   файл, если названия разошлись.
   =================================================================== */

window.QUIZZES  = window.QUIZZES  || {};
window.QUIZSECS = window.QUIZSECS || {};

window.QUIZSECS.su01 = {
  s11: { no: "1.1", ru: "Кто платит налог за бизнес", en: "Who pays the tax" },
  s12: { no: "1.2", ru: "Классификация по умолчанию и её изменение", en: "Default classification and elections" },
  s13: { no: "1.3", ru: "Работники, подрядчики и отчётность", en: "Workers, contractors and reporting" },
  s14: { no: "1.4", ru: "Методы учёта", en: "Accounting methods" },
  s15: { no: "1.5", ru: "Запасы", en: "Inventories" },
  s16: { no: "1.6", ru: "Налоговый период", en: "The tax year" },
  s17: { no: "1.7", ru: "Сроки подачи", en: "Filing deadlines" }
};

window.QUIZZES.su01 = [
  {
    sec: "s12",
    ru: "Единственный участник LLC не подавал форму 8832. Как компания отражается для целей федерального налога?",
    en: "A single-member LLC has not filed Form 8832. How is it treated for federal tax purposes?",
    opts: [
      { k: "A", ru: "Как корпорация, декларация 1120", en: "As a corporation filing Form 1120" },
      { k: "B", ru: "Как неучитываемое лицо; деятельность идёт в Schedule C владельца", en: "As a disregarded entity; the activity is reported on the owner’s Schedule C" },
      { k: "C", ru: "Как партнёрство, декларация 1065", en: "As a partnership filing Form 1065" },
      { k: "D", ru: "Как S-корпорация, декларация 1120-S", en: "As an S corporation filing Form 1120-S" }
    ],
    correct: "B",
    why: {
      A: { ru: "Обложение как корпорация возможно, но требует подачи формы 8832. По умолчанию оно не возникает.", en: "Corporate treatment is available but requires Form 8832. It is not the default." },
      B: { ru: "Верно. По умолчанию LLC с одним участником — неучитываемое лицо, и его деятельность отражается так, как если бы компании не существовало.", en: "Correct. The default for a single-member LLC is a disregarded entity, reported as though the company did not exist." },
      C: { ru: "Партнёрство требует не менее двух участников.", en: "A partnership requires at least two members." },
      D: { ru: "Статус S-корпорации требует отдельного выбора по форме 2553 и соответствия условиям.", en: "S corporation status requires a separate election on Form 2553 and meeting the eligibility rules." }
    }
  },
  {
    sec: "s11",
    ru: "Супруги владеют мастерской в равных долях, оба работают полный день, бизнес оформлен как LLC штата. Подают совместную декларацию. Доступен ли режим совместного предприятия супругов?",
    en: "Spouses own a shop in equal shares, both work full time, and the business is a state-law LLC. They file jointly. Is qualified joint venture treatment available?",
    opts: [
      { k: "A", ru: "Да, все условия выполнены", en: "Yes, all requirements are met" },
      { k: "B", ru: "Да, но только если доли строго равны", en: "Yes, but only if the shares are exactly equal" },
      { k: "C", ru: "Нет: бизнес ведётся в форме юридического лица штата", en: "No: the business is held in a state-law entity" },
      { k: "D", ru: "Нет: требуется, чтобы участвовал только один супруг", en: "No: only one spouse may participate" }
    ],
    correct: "C",
    why: {
      A: { ru: "Четвёртое условие нарушено — бизнес оформлен как LLC.", en: "The fourth requirement fails: the business is an LLC." },
      B: { ru: "Равенство долей не требуется; каждый показывает свою фактическую долю.", en: "Equal shares are not required; each spouse reports their actual share." },
      C: { ru: "Верно. Режим требует, чтобы бизнес не был оформлен как юридическое лицо штата. Исключение возможно лишь в штатах общей собственности супругов.", en: "Correct. The election requires that the business not be held in a state-law entity. Only community property states offer an exception." },
      D: { ru: "Наоборот: материально участвовать должны оба супруга.", en: "The opposite: both spouses must materially participate." }
    }
  },
  {
    sec: "s13",
    ru: "Бизнес выплатил независимому подрядчику $780 за услуги в 2025 году. Возникает ли обязанность подать форму 1099-NEC?",
    en: "A business paid an independent contractor $780 for services during 2025. Is a Form 1099-NEC required?",
    opts: [
      { k: "A", ru: "Нет, сумма ниже порога $2 000", en: "No, the amount is below the $2,000 threshold" },
      { k: "B", ru: "Да, порог за 2025 год составляет $600", en: "Yes, the 2025 threshold is $600" },
      { k: "C", ru: "Нет, форма подаётся только при выплатах свыше $20 000", en: "No, the form is required only above $20,000" },
      { k: "D", ru: "Да, форма подаётся при любой сумме", en: "Yes, the form is required for any amount" }
    ],
    correct: "B",
    why: {
      A: { ru: "Порог $2 000 применяется к платежам после 31 декабря 2025 года. К периоду 2025 он не относится.", en: "The $2,000 threshold applies to payments made after December 31, 2025 and does not reach the 2025 tax year." },
      B: { ru: "Верно. За 2025 год действует порог $600, не менявшийся с 1954 года.", en: "Correct. For 2025 the threshold is $600, unchanged since 1954." },
      C: { ru: "$20 000 — это порог формы 1099-K для расчётных организаций, а не 1099-NEC.", en: "$20,000 is the Form 1099-K threshold for settlement organisations, not 1099-NEC." },
      D: { ru: "Без порога выдаётся форма W-2 работнику, а не 1099-NEC подрядчику.", en: "It is Form W-2 for an employee that has no threshold, not Form 1099-NEC." }
    }
  },
  {
    sec: "s13",
    ru: "Работник получил форму W-2 с отметкой «статутный работник» в боксе 13. Как он отражает доход и расходы?",
    en: "A worker receives a Form W-2 with the statutory employee box checked. How are income and expenses reported?",
    opts: [
      { k: "A", ru: "Доход в Schedule C, расходы там же; налог на самозанятость не начисляется", en: "Income and expenses on Schedule C; no self-employment tax" },
      { k: "B", ru: "Доход в Schedule C, расходы там же; налог на самозанятость начисляется", en: "Income and expenses on Schedule C; self-employment tax applies" },
      { k: "C", ru: "Доход как зарплата в форме 1040; деловые расходы не вычитаются", en: "Income as wages on Form 1040; no business expenses deductible" },
      { k: "D", ru: "Доход в Schedule E", en: "Income on Schedule E" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Социальные взносы уже удержаны работодателем, поэтому налога на самозанятость нет, но Schedule C нужен для вычета собственных деловых расходов.", en: "Correct. Payroll taxes were already withheld, so no self-employment tax arises, yet Schedule C is needed to deduct the worker’s own business expenses." },
      B: { ru: "Налог на самозанятость не начисляется: взносы уже уплачены пополам с работодателем.", en: "No self-employment tax arises: the payroll taxes were already split with the employer." },
      C: { ru: "Статутный работник как раз вправе вычитать деловые расходы в Schedule C — в этом смысл категории.", en: "A statutory employee may deduct business expenses on Schedule C — that is the point of the category." },
      D: { ru: "Schedule E предназначен для аренды и сквозных доходов, а не для вознаграждения за услуги.", en: "Schedule E is for rentals and pass-through income, not for compensation for services." }
    }
  },
  {
    sec: "s13",
    ru: "У работодателя пять работников, каждому за 2025 год выплачено по $30 000. Взносы в фонд штата уплачены полностью и в срок. Какова сумма федерального налога по безработице?",
    en: "An employer has five employees, each paid $30,000 during 2025. State unemployment contributions were paid in full and on time. What is the FUTA tax?",
    opts: [
      { k: "A", ru: "$900", en: "$900" },
      { k: "B", ru: "$210", en: "$210" },
      { k: "C", ru: "$2 100", en: "$2,100" },
      { k: "D", ru: "$150 000 × 0,6% = $900", en: "$150,000 × 0.6% = $900" }
    ],
    correct: "B",
    why: {
      A: { ru: "Так получится, если применить ставку ко всей зарплате. База ограничена $7 000 на работника.", en: "This results from applying the rate to total wages. The base is capped at $7,000 per employee." },
      B: { ru: "Верно. База: 5 × $7 000 = $35 000. Эффективная ставка после полного кредита 0,6%. Налог: $35 000 × 0,6% = $210.", en: "Correct. Base: 5 × $7,000 = $35,000. The net rate after the full credit is 0.6%. Tax: $35,000 × 0.6% = $210." },
      C: { ru: "Это результат применения ставки 6,0% без учёта кредита за взносы в штат.", en: "This applies the 6.0% rate without the credit for state contributions." },
      D: { ru: "Ошибка в базе: облагается не вся зарплата, а первые $7 000 на каждого работника.", en: "The base is wrong: only the first $7,000 per employee is taxed, not total wages." }
    }
  },
  {
    sec: "s14",
    ru: "Средняя годовая валовая выручка партнёрства за три предыдущих года — $18 млн. Один из партнёров — C-корпорация. Вправе ли партнёрство применять кассовый метод в 2025 году?",
    en: "A partnership’s average annual gross receipts for the three prior years are $18 million. One partner is a C corporation. May the partnership use the cash method for 2025?",
    opts: [
      { k: "A", ru: "Нет: наличие партнёра-корпорации исключает кассовый метод без изъятий", en: "No: having a corporate partner rules out the cash method absolutely" },
      { k: "B", ru: "Да: тест валовой выручки пройден", en: "Yes: the gross receipts test is met" },
      { k: "C", ru: "Нет: партнёрства вообще не применяют кассовый метод", en: "No: partnerships may never use the cash method" },
      { k: "D", ru: "Да, но только с разрешения IRS по форме 3115", en: "Yes, but only with IRS consent on Form 3115" }
    ],
    correct: "B",
    why: {
      A: { ru: "Запрет снимается, если пройден тест валовой выручки. Изъятие как раз предусмотрено.", en: "The prohibition lifts where the gross receipts test is met. The exception exists precisely for this." },
      B: { ru: "Верно. $18 млн ниже порога, поэтому партнёрство считается малым налогоплательщиком и вправе применять кассовый метод.", en: "Correct. $18 million is below the threshold, so the partnership is a small business taxpayer and may use the cash method." },
      C: { ru: "Партнёрства применяют кассовый метод свободно, если среди партнёров нет C-корпорации или пройден тест выручки.", en: "Partnerships may use the cash method freely absent a C corporation partner, or where the receipts test is met." },
      D: { ru: "Форма 3115 нужна для смены уже применяемого метода, а не для права его применять.", en: "Form 3115 is for changing an existing method, not for the right to use one." }
    }
  },
  {
    sec: "s14",
    ru: "Что из перечисленного не позволяет применять кассовый метод независимо от размера валовой выручки?",
    en: "Which of the following may not use the cash method regardless of the size of its gross receipts?",
    opts: [
      { k: "A", ru: "Партнёрство с двумя физическими лицами", en: "A partnership of two individuals" },
      { k: "B", ru: "S-корпорация", en: "An S corporation" },
      { k: "C", ru: "Налоговое убежище", en: "A tax shelter" },
      { k: "D", ru: "Индивидуальный предприниматель без запасов", en: "A sole proprietor with no inventory" }
    ],
    correct: "C",
    why: {
      A: { ru: "Такое партнёрство ограничений не имеет.", en: "Such a partnership faces no restriction." },
      B: { ru: "S-корпорации кассовый метод доступен.", en: "An S corporation may use the cash method." },
      C: { ru: "Верно. Для налогового убежища изъятия по тесту валовой выручки не предусмотрено.", en: "Correct. No gross receipts exception is available to a tax shelter." },
      D: { ru: "Это типичный пользователь кассового метода.", en: "This is the typical cash method taxpayer." }
    }
  },
  {
    sec: "s14",
    ru: "Налогоплательщик на методе начисления подписал в декабре 2025 года договор на ремонт крыши и оплатил его целиком. Работы выполнены в марте 2026 года. Когда возникает вычет?",
    en: "An accrual method taxpayer signed a roof repair contract in December 2025 and paid it in full. The work was done in March 2026. When is the deduction allowed?",
    opts: [
      { k: "A", ru: "В 2025 году — по дате оплаты", en: "In 2025, when payment was made" },
      { k: "B", ru: "В 2025 году — по дате заключения договора", en: "In 2025, when the contract was signed" },
      { k: "C", ru: "В 2026 году — когда наступило экономическое исполнение", en: "In 2026, when economic performance occurred" },
      { k: "D", ru: "Распределяется поровну между 2025 и 2026 годами", en: "Split evenly between 2025 and 2026" }
    ],
    correct: "C",
    why: {
      A: { ru: "Дата оплаты решает вопрос при кассовом методе, а не при методе начисления.", en: "The date of payment governs under the cash method, not the accrual method." },
      B: { ru: "Заключение договора выполняет тест всех событий, но экономическое исполнение ещё не наступило.", en: "Signing satisfies the all-events test, but economic performance has not yet occurred." },
      C: { ru: "Верно. При методе начисления нужны оба условия, и услуги считаются исполненными по мере их оказания — в марте 2026 года.", en: "Correct. The accrual method requires both conditions, and services are performed as they are provided — in March 2026." },
      D: { ru: "Распределение здесь не предусмотрено: работы выполнены единовременно в 2026 году.", en: "No allocation applies: the work was performed at one time in 2026." }
    }
  },
  {
    sec: "s14",
    ru: "1 ноября 2025 года оплачен договор на обслуживание оборудования сроком 12 месяцев, до 31 октября 2026 года. Применимо ли правило двенадцати месяцев?",
    en: "On November 1, 2025 a taxpayer paid for a twelve-month maintenance contract running to October 31, 2026. Does the twelve-month rule apply?",
    opts: [
      { k: "A", ru: "Да: право не выходит ни за 12 месяцев, ни за конец 2026 года", en: "Yes: the benefit extends beyond neither twelve months nor the end of 2026" },
      { k: "B", ru: "Нет: право переходит на следующий год", en: "No: the benefit crosses into the following year" },
      { k: "C", ru: "Нет: правило применяется только при кассовом методе", en: "No: the rule applies only to cash method taxpayers" },
      { k: "D", ru: "Да, но вычет ограничен двумя месяцами 2025 года", en: "Yes, but the deduction is limited to the two months falling in 2025" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Оба предела соблюдены: срок ровно 12 месяцев, и он заканчивается до конца 2026 года — года, следующего за годом оплаты.", en: "Correct. Both limits hold: the term is exactly twelve months and it ends before the close of 2026, the year following payment." },
      B: { ru: "Переход на следующий год сам по себе правилу не мешает — на то оно и рассчитано.", en: "Crossing into the next year does not defeat the rule; that is what it is designed for." },
      C: { ru: "Правило относится к капитализации предоплаченных расходов и не ограничено кассовым методом.", en: "The rule concerns capitalisation of prepaid expenses and is not limited to the cash method." },
      D: { ru: "Смысл правила в том и состоит, что распределять не требуется — вычитается вся сумма.", en: "The point of the rule is that no allocation is required — the whole amount is deducted." }
    }
  },
  {
    sec: "s15",
    ru: "Что произойдёт с себестоимостью проданного и с прибылью, если конечные запасы занижены?",
    en: "If ending inventory is understated, what happens to cost of goods sold and to profit?",
    opts: [
      { k: "A", ru: "Себестоимость занижена, прибыль завышена", en: "Cost of goods sold understated, profit overstated" },
      { k: "B", ru: "Себестоимость завышена, прибыль занижена", en: "Cost of goods sold overstated, profit understated" },
      { k: "C", ru: "Обе величины занижены", en: "Both are understated" },
      { k: "D", ru: "Ни одна не меняется", en: "Neither changes" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это результат завышения конечных запасов, а не занижения.", en: "That is the effect of overstating ending inventory, not understating it." },
      B: { ru: "Верно. Конечные запасы вычитаются из суммы доступных товаров: чем они меньше, тем больше себестоимость и тем меньше прибыль.", en: "Correct. Ending inventory is subtracted from goods available: the smaller it is, the larger cost of goods sold and the smaller the profit." },
      C: { ru: "Себестоимость и прибыль движутся в противоположных направлениях.", en: "Cost of goods sold and profit move in opposite directions." },
      D: { ru: "Конечные запасы входят в формулу напрямую и влияют на результат.", en: "Ending inventory enters the formula directly and does affect the result." }
    }
  },
  {
    sec: "s15",
    ru: "Какое утверждение о методе LIFO верно?",
    en: "Which statement about the LIFO method is correct?",
    opts: [
      { k: "A", ru: "Он сочетается с оценкой по меньшей из себестоимости и рыночной цены", en: "It may be combined with the lower of cost or market valuation" },
      { k: "B", ru: "Он требует применения того же метода в финансовой отчётности", en: "It requires the same method to be used in financial statements" },
      { k: "C", ru: "Он применяется автоматически, без выбора", en: "It applies automatically, with no election" },
      { k: "D", ru: "Он оставляет в остатке самые поздние по времени затраты", en: "It leaves the most recent costs in ending inventory" }
    ],
    correct: "B",
    why: {
      A: { ru: "Такое сочетание не допускается.", en: "That combination is not permitted." },
      B: { ru: "Верно. Требование соответствия обязывает показывать LIFO и в отчётности перед кредиторами и собственниками.", en: "Correct. The conformity requirement obliges the taxpayer to use LIFO in statements given to creditors and owners." },
      C: { ru: "Метод требует выбора, оформляемого формой 970.", en: "The method requires an election, made on Form 970." },
      D: { ru: "Это описание FIFO: при LIFO в остатке остаются самые ранние затраты.", en: "That describes FIFO: under LIFO the earliest costs remain in ending inventory." }
    }
  },
  {
    sec: "s16",
    ru: "В партнёрстве партнёры с одинаковым налоговым годом владеют 60% прибыли и капитала. Какой тест определяет налоговый период?",
    en: "Partners sharing the same tax year own 60% of a partnership’s profits and capital. Which test determines the partnership’s year?",
    opts: [
      { k: "A", ru: "Наименьшей совокупной отсрочки", en: "Least aggregate deferral" },
      { k: "B", ru: "Основных партнёров", en: "Principal partners" },
      { k: "C", ru: "Мажоритарной доли", en: "Majority interest" },
      { k: "D", ru: "Партнёрство выбирает период свободно", en: "The partnership may choose freely" }
    ],
    correct: "C",
    why: {
      A: { ru: "Этот тест применяется последним и только если два предыдущих не дали результата.", en: "This test comes last and only if the first two produce no answer." },
      B: { ru: "К тесту основных партнёров переходят, когда мажоритарной группы нет.", en: "The principal partner test is reached only when there is no majority group." },
      C: { ru: "Верно. Более 50% прибыли и капитала у партнёров с общим периодом — партнёрство берёт их период.", en: "Correct. More than 50% of profits and capital held by partners with a common year fixes the partnership’s year." },
      D: { ru: "Свободы выбора у сквозного субъекта нет: период привязан к периоду владельцев.", en: "A pass-through has no free choice: its year follows that of its owners." }
    }
  },
  {
    sec: "s16",
    ru: "Корпорация личных услуг хочет закончить налоговый год 30 сентября. Требуемый период — календарный год. Что позволит это сделать?",
    en: "A personal service corporation wants a September 30 year end. Its required year is the calendar year. What makes this possible?",
    opts: [
      { k: "A", ru: "Выбор по §444 с подачей формы 8716", en: "A section 444 election on Form 8716" },
      { k: "B", ru: "Подача формы 3115", en: "Filing Form 3115" },
      { k: "C", ru: "Ничего: календарный год обязателен без исключений", en: "Nothing: the calendar year is mandatory without exception" },
      { k: "D", ru: "Подача формы 8832", en: "Filing Form 8832" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Отсрочка составляет три месяца — ровно предел нормы. Выбор оформляется формой 8716. Платежа по форме 8752 у корпорации личных услуг не возникает: он предусмотрен для партнёрства и S-корпорации, а корпорация личных услуг вместо него соблюдает минимальные распределения работникам-собственникам.", en: "Correct. The deferral is three months, exactly the statutory cap, and the election is made on Form 8716. No Form 8752 payment arises for a personal service corporation: that payment applies to a partnership and an S corporation, while a PSC must instead meet minimum distribution requirements to its employee-owners." },
      B: { ru: "Форма 3115 меняет метод учёта, а не налоговый период.", en: "Form 3115 changes an accounting method, not a tax year." },
      C: { ru: "Исключения есть: выбор по §444, 52—53-недельный год и обоснованная деловая цель.", en: "Exceptions exist: a section 444 election, a 52-53-week year, and an established business purpose." },
      D: { ru: "Форма 8832 меняет классификацию субъекта, а не его период.", en: "Form 8832 changes an entity’s classification, not its year." }
    }
  },
  {
    sec: "s14",
    ru: "Какую форму подают, чтобы изменить метод учёта?",
    en: "Which form is filed to change an accounting method?",
    opts: [
      { k: "A", ru: "1128", en: "Form 1128" },
      { k: "B", ru: "8716", en: "Form 8716" },
      { k: "C", ru: "3115", en: "Form 3115" },
      { k: "D", ru: "8832", en: "Form 8832" }
    ],
    correct: "C",
    why: {
      A: { ru: "Форма 1128 меняет налоговый период.", en: "Form 1128 changes the tax year." },
      B: { ru: "Форма 8716 оформляет выбор по §444.", en: "Form 8716 makes the section 444 election." },
      C: { ru: "Верно. Смена метода учёта требует согласия IRS и оформляется формой 3115.", en: "Correct. A change of method requires IRS consent and is made on Form 3115." },
      D: { ru: "Форма 8832 меняет классификацию субъекта.", en: "Form 8832 changes entity classification." }
    }
  },
  {
    sec: "s17",
    ru: "S-корпорация с тремя акционерами подала декларацию 1120-S за 2025 год с опозданием на два месяца. Налога к уплате нет. Каков штраф за несвоевременную подачу?",
    en: "An S corporation with three shareholders filed its 2025 Form 1120-S two months late. No tax is due. What is the late filing penalty?",
    opts: [
      { k: "A", ru: "$0 — налога к уплате нет", en: "$0 — no tax is due" },
      { k: "B", ru: "$525", en: "$525" },
      { k: "C", ru: "$1 530", en: "$1,530" },
      { k: "D", ru: "$510", en: "$510" }
    ],
    correct: "C",
    why: {
      A: { ru: "Штраф не зависит от наличия налога: он считается от числа акционеров и месяцев просрочки.", en: "The penalty does not depend on tax being due: it is based on shareholders and months late." },
      B: { ru: "$525 — минимальный штраф при просрочке свыше 60 дней, а не расчёт по числу акционеров.", en: "$525 is the minimum penalty for a return over 60 days late, not the per-shareholder computation." },
      C: { ru: "Верно. $255 × 3 акционера × 2 месяца = $1 530.", en: "Correct. $255 × 3 shareholders × 2 months = $1,530." },
      D: { ru: "Эта величина получается при умножении на двух акционеров вместо трёх.", en: "This results from using two shareholders instead of three." }
    }
  },
  {
    sec: "s12",
    ru: "Когда индивидуальному предпринимателю обязательно требуется идентификационный номер работодателя?",
    en: "When must a sole proprietor obtain an employer identification number?",
    opts: [
      { k: "A", ru: "Всегда, с момента начала деятельности", en: "Always, from the start of the business" },
      { k: "B", ru: "Когда появляются работники или обязанность по акцизным налогам", en: "When there are employees or an excise tax obligation" },
      { k: "C", ru: "Когда выручка превышает $100 000", en: "When receipts exceed $100,000" },
      { k: "D", ru: "Только при открытии банковского счёта", en: "Only to open a bank account" }
    ],
    correct: "B",
    why: {
      A: { ru: "Пока работников нет, предприниматель пользуется своим номером социального страхования.", en: "Without employees the proprietor uses a social security number." },
      B: { ru: "Верно. Номер становится обязательным при найме работников, при акцизных налогах и при наличии пенсионного плана.", en: "Correct. An EIN becomes necessary with employees, excise taxes, or a retirement plan." },
      C: { ru: "Размер выручки на обязанность получить номер не влияет.", en: "The size of receipts has no bearing on the requirement." },
      D: { ru: "Требования банка не создают налоговой обязанности.", en: "A bank’s requirements do not create a tax obligation." }
    }
  },
  {
    sec: "s14",
    ru: "Валовая выручка корпорации составила $34 млн, $29 млн и $27 млн за 2022, 2023 и 2024 годы. Вправе ли она применять кассовый метод в 2025 году?",
    en: "A corporation had gross receipts of $34M, $29M and $27M in 2022, 2023 and 2024. May it use the cash method for 2025?",
    opts: [
      { k: "A", ru: "Нет: в 2022 году выручка превысила порог", en: "No: receipts exceeded the threshold in 2022" },
      { k: "B", ru: "Да: среднее равно $30 млн и не превышает порог", en: "Yes: the average is $30 million and does not exceed the threshold" },
      { k: "C", ru: "Нет: корпорациям кассовый метод недоступен", en: "No: corporations may not use the cash method" },
      { k: "D", ru: "Да, но только с разрешения IRS", en: "Yes, but only with IRS consent" }
    ],
    correct: "B",
    why: {
      A: { ru: "Тест применяется к среднему за три года, а не к отдельному году.", en: "The test applies to the three-year average, not to a single year." },
      B: { ru: "Верно. Сумма $90 млн, среднее $30 млн — ниже порога, значит корпорация является малым налогоплательщиком.", en: "Correct. The total is $90 million and the average $30 million — below the threshold, so the corporation is a small business taxpayer." },
      C: { ru: "Запрет для C-корпораций снимается при прохождении теста валовой выручки.", en: "The prohibition on C corporations lifts when the gross receipts test is met." },
      D: { ru: "Отдельного разрешения для применения метода при первой декларации не требуется.", en: "No separate consent is needed to adopt a method on the first return." }
    }
  },
  {
    sec: "s13",
    ru: "Какое утверждение о налоге по безработице верно?",
    en: "Which statement about the federal unemployment tax is correct?",
    opts: [
      { k: "A", ru: "Он удерживается из заработной платы работника", en: "It is withheld from the employee’s wages" },
      { k: "B", ru: "Он делится поровну между работником и работодателем", en: "It is split evenly between employee and employer" },
      { k: "C", ru: "Его платит работодатель из собственных средств", en: "The employer pays it from its own funds" },
      { k: "D", ru: "Его платят только корпорации", en: "Only corporations pay it" }
    ],
    correct: "C",
    why: {
      A: { ru: "Из зарплаты удерживаются подоходный налог и социальные взносы, но не этот налог.", en: "Income tax and payroll taxes are withheld from wages, but not this tax." },
      B: { ru: "Пополам делятся социальные взносы, а не налог по безработице.", en: "It is the social security and Medicare taxes that are split, not the unemployment tax." },
      C: { ru: "Верно. Работодатель несёт этот налог полностью сам.", en: "Correct. The employer bears this tax entirely." },
      D: { ru: "Обязанность зависит от выплат работникам, а не от формы бизнеса.", en: "The obligation depends on wages paid, not on the form of the business." }
    }
  },
  {
    sec: "s12",
    ru: "Иностранная организация с тремя участниками не подавала форму 8832. У всех участников ответственность ограничена. Как она классифицируется по умолчанию?",
    en: "A foreign organisation with three members never filed Form 8832. All members have limited liability. What is its default classification?",
    opts: [
      { k: "A", ru: "Партнёрство: участников больше одного", en: "A partnership: it has more than one member" },
      { k: "B", ru: "Объединение, облагаемое как корпорация", en: "An association taxable as a corporation" },
      { k: "C", ru: "Неучитываемое лицо", en: "A disregarded entity" },
      { k: "D", ru: "Классификация не определяется без подачи формы", en: "No classification arises until the form is filed" }
    ],
    correct: "B",
    why: {
      A: { ru: "Правило числа участников — для отечественных субъектов. У иностранных решает ответственность: партнёрством организация была бы, если бы хотя бы у одного участника ответственность не была ограничена.", en: "The member-count rule applies to domestic entities. For a foreign entity liability decides: it would be a partnership only if at least one member lacked limited liability." },
      B: { ru: "Верно. У иностранного субъекта, где ответственность ограничена у всех участников, классификация по умолчанию — объединение, облагаемое как корпорация.", en: "Correct. Where all members of a foreign eligible entity have limited liability, the default is an association taxable as a corporation." },
      C: { ru: "Неучитываемым лицом иностранный субъект становится при единственном участнике с неограниченной ответственностью.", en: "A foreign entity is disregarded when it has a single owner without limited liability." },
      D: { ru: "Классификация по умолчанию существует всегда; форма нужна лишь для отступления от неё.", en: "A default classification always exists; the form is needed only to depart from it." }
    }
  },
  {
    sec: "s12",
    ru: "Какая организация не может быть классифицирована как партнёрство?",
    en: "Which organisation cannot be classified as a partnership?",
    opts: [
      { k: "A", ru: "Синдикат, ведущий деятельность с целью прибыли", en: "A syndicate carrying on a business for profit" },
      { k: "B", ru: "Совместное предприятие двух неродственных лиц", en: "A joint venture between two unrelated persons" },
      { k: "C", ru: "Страховая компания", en: "An insurance company" },
      { k: "D", ru: "Неинкорпорированный пул участников", en: "An unincorporated pool of participants" }
    ],
    correct: "C",
    why: {
      A: { ru: "Синдикат прямо назван среди образований, охватываемых определением партнёрства.", en: "A syndicate is expressly within the definition of a partnership." },
      B: { ru: "Совместное предприятие — классический случай партнёрства для налоговых целей.", en: "A joint venture is the classic partnership for tax purposes." },
      C: { ru: "Верно. Страховая компания признаётся корпорацией по определению и подходящим субъектом не является, поэтому выбор ей недоступен.", en: "Correct. An insurance company is a corporation by definition and is not an eligible entity, so no election is open to it." },
      D: { ru: "Пул назван в определении партнёрства наравне с синдикатом и группой.", en: "A pool appears in the definition of a partnership alongside a syndicate and a group." }
    }
  },
  {
    sec: "s12",
    ru: "В каком случае требуется получить новый идентификационный номер работодателя?",
    en: "In which case must a new employer identification number be obtained?",
    opts: [
      { k: "A", ru: "Индивидуальный предприниматель учредил корпорацию", en: "A sole proprietor incorporates" },
      { k: "B", ru: "Бизнес сменил название", en: "The business changes its name" },
      { k: "C", ru: "Корпорация выбрала статус S-корпорации", en: "A corporation elects S corporation status" },
      { k: "D", ru: "В партнёрстве сменились владельцы, но оно не прекратилось", en: "Ownership of a partnership changes without terminating it" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Меняется вид организации: вместо предпринимателя появляется корпорация, а это другой субъект.", en: "Correct. The type of organisation changes: a corporation replaces the proprietorship, and that is a different entity." },
      B: { ru: "Смена названия или адреса номера не меняет.", en: "A change of name or location does not change the number." },
      C: { ru: "Выбор или отмена статуса S-корпорации нового номера не требует: субъект остаётся прежним.", en: "Electing or revoking S corporation status needs no new number: the entity is unchanged." },
      D: { ru: "Смена состава владельцев без прекращения партнёрства нового номера не требует.", en: "A change in ownership that does not terminate the partnership requires no new number." }
    }
  },
  {
    sec: "s13",
    ru: "К кому из перечисленных не применяется правило о статутных неработниках?",
    en: "To which of the following does the statutory nonemployee rule NOT apply?",
    opts: [
      { k: "A", ru: "Продавец потребительских товаров на дому, вознаграждение — процент от продаж", en: "Someone selling consumer products door to door, paid a percentage of sales" },
      { k: "B", ru: "Продавец, вознаграждение которого считается от отработанных часов", en: "A seller whose pay is measured by the hours worked" },
      { k: "C", ru: "Лицензированный агент по недвижимости, доход которого зависит от сделок", en: "A licensed real estate agent whose income depends on transactions" },
      { k: "D", ru: "Разносчик газет, работающий по письменному договору", en: "A newspaper distributor working under a written contract" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это первая группа прямых продавцов, и связь вознаграждения с результатом соблюдена.", en: "That is the first group of direct sellers, and pay is tied to output." },
      B: { ru: "Верно. Требуется, чтобы практически всё вознаграждение было связано с продажами или иным результатом, а не с числом часов. Оплата по часам разрушает защиту, даже если профессия подходящая.", en: "Correct. Substantially all pay must relate to sales or output rather than hours. Hourly pay destroys the safe harbour even where the occupation fits." },
      C: { ru: "Лицензированные агенты по недвижимости — одна из трёх категорий статутных неработников.", en: "A licensed real estate agent falls into the second of the three statutory nonemployee categories." },
      D: { ru: "Разносчики газет и рекламных изданий прямо отнесены к прямым продавцам.", en: "Distributors of newspapers and shopping news are expressly direct sellers." }
    }
  },
  {
    sec: "s14",
    ru: "Покупатель внёс оплату на счёт эскроу 15 декабря 2025 года. Сделка закрыта и деньги переданы продавцу 10 января 2026 года. Продавец на кассовом методе. В каком году доход?",
    en: "A buyer placed the payment in escrow on December 15, 2025. The deal closed and the money reached the seller on January 10, 2026. The seller uses the cash method. Which year?",
    opts: [
      { k: "A", ru: "2025: сумма была внесена в декабре", en: "2025: the money was deposited in December" },
      { k: "B", ru: "2026: до закрытия сделки распоряжение было ограничено по существу", en: "2026: until closing, control was subject to a substantial restriction" },
      { k: "C", ru: "Пропорционально между 2025 и 2026 годами", en: "Split between 2025 and 2026" },
      { k: "D", ru: "2025, если продавец знал о внесении", en: "2025 if the seller knew of the deposit" }
    ],
    correct: "B",
    why: {
      A: { ru: "Внесение на эскроу само по себе распоряжения не даёт: деньги удерживает третье лицо до наступления условий.", en: "A deposit into escrow gives no control: a third party holds the funds until the conditions are met." },
      B: { ru: "Верно. Конструктивного получения нет, если распоряжение доходом ограничено по существу. Эскроу — типовой пример такого ограничения.", en: "Correct. There is no constructive receipt where control is subject to substantial restrictions, and escrow is the standard example." },
      C: { ru: "Кассовый метод пропорционального распределения не знает.", en: "The cash method knows no proportional split." },
      D: { ru: "Осведомлённость значения не имеет; значение имеет возможность распорядиться.", en: "Awareness is irrelevant; the ability to draw on the funds is what counts." }
    }
  },
  {
    sec: "s14",
    ru: "1 ноября 2024 года консультационная фирма на методе начисления получила $9 000 за 12 ежемесячных отчётов. Два отчёта сданы в 2024 году, девять в 2025-м, последний задержан до февраля 2026-го. Отсрочка выбрана. Как распределяется доход?",
    en: "On November 1, 2024 an accrual-basis consulting firm received $9,000 for 12 monthly reports. Two were delivered in 2024 and nine in 2025; the last slipped to February 2026. Deferral elected. How is the income reported?",
    opts: [
      { k: "A", ru: "$1 500 в 2024, $6 750 в 2025 и $750 в 2026", en: "$1,500 in 2024, $6,750 in 2025 and $750 in 2026" },
      { k: "B", ru: "$1 500 в 2024 и $7 500 в 2025", en: "$1,500 in 2024 and $7,500 in 2025" },
      { k: "C", ru: "$9 000 в 2024", en: "$9,000 in 2024" },
      { k: "D", ru: "$9 000 в 2025", en: "$9,000 in 2025" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это и есть проверяемая ошибка. Отсрочка возможна только на один год вперёд: остаток обязан попасть в 2025 год независимо от того, оказаны ли услуги.", en: "This is the error being tested. Deferral runs one year only: the remainder must fall into 2025 whether or not the services were performed." },
      B: { ru: "Верно. В году получения показывается заработанная часть, весь остаток — в следующем году.", en: "Correct. The earned portion is reported in the year of receipt and the entire remainder in the following year." },
      C: { ru: "Полное включение в год получения — правило по умолчанию, но выбор отсрочки сделан.", en: "Full inclusion in the year of receipt is the default, but the deferral election was made." },
      D: { ru: "Заработанная в 2024 году часть должна быть показана в 2024 году.", en: "The portion earned in 2024 must be reported in 2024." }
    }
  },
  {
    sec: "s14",
    ru: "Что из перечисленного является сменой метода учёта и требует согласия IRS?",
    en: "Which of the following is a change of accounting method requiring IRS consent?",
    opts: [
      { k: "A", ru: "Исправление ошибки в сложении сумм за прошлый год", en: "Correcting an addition error from a prior year" },
      { k: "B", ru: "Исправление ошибки в расчёте налогового кредита", en: "Correcting an error in figuring a tax credit" },
      { k: "C", ru: "Переход к оценке запасов методом LIFO", en: "Adopting the LIFO method of valuing inventory" },
      { k: "D", ru: "Уточнение срока полезного использования оборудования", en: "Adjusting the useful life of a piece of equipment" }
    ],
    correct: "C",
    why: {
      A: { ru: "Арифметическая ошибка и ошибка в переносе суммы прямо названы не являющимися сменой метода.", en: "A math or posting error is expressly not a change of method." },
      B: { ru: "Ошибка в исчислении налога методом не является: она не меняет год отражения статьи.", en: "An error in figuring tax is not a method: it changes no year of reporting." },
      C: { ru: "Верно. Смена метода или базы оценки запасов прямо названа сменой метода учёта. Оформляется она по-разному: переход <strong>к</strong> LIFO — формой 970 вместе со своевременно поданной декларацией, а переход <strong>с</strong> LIFO и прочие смены метода оценки запасов — формой 3115.", en: "Correct. A change in the method or basis of valuing inventory is expressly a change in accounting method. The paperwork differs: adopting LIFO is done on Form 970 with a timely filed return, while changing <strong>from</strong> LIFO and other inventory method changes go on Form 3115." },
      D: { ru: "Отдельные корректировки срока полезного использования прямо отнесены к изменениям, согласия не требующим.", en: "Certain adjustments to useful life are expressly among the changes that need no consent." }
    }
  },
  {
    sec: "s15",
    ru: "На конец года у торговца остались: товар, отправленный им на консигнацию, товар, принятый на консигнацию, и купленная партия в пути, титул на которую уже перешёл к нему. Что входит в запасы?",
    en: "At year end a dealer has: goods it sent out on consignment, goods consigned to it, and a purchased shipment in transit to which title has already passed. What is in inventory?",
    opts: [
      { k: "A", ru: "Только принятый на консигнацию товар", en: "Only the goods consigned to it" },
      { k: "B", ru: "Отправленный на консигнацию товар и партия в пути", en: "The goods sent out on consignment and the shipment in transit" },
      { k: "C", ru: "Только партия в пути", en: "Only the shipment in transit" },
      { k: "D", ru: "Всё перечисленное", en: "All of them" }
    ],
    correct: "B",
    why: {
      A: { ru: "Принятый на консигнацию товар принадлежит другому лицу и в ваши запасы не входит.", en: "Goods consigned to you belong to someone else and never enter your inventory." },
      B: { ru: "Верно. Титул на отправленный на консигнацию товар остаётся у отправителя, а купленный товар в пути уже ваш — значит, оба в запасах.", en: "Correct. Title to goods sent out on consignment stays with the consignor, and purchased goods in transit are already yours — so both are in inventory." },
      C: { ru: "Отправленный на консигнацию товар тоже остаётся вашим до продажи комиссионером.", en: "Goods sent out on consignment also remain yours until the consignee sells them." },
      D: { ru: "Принятый на консигнацию товар исключается: он чужой.", en: "Goods consigned to you are excluded: they are not yours." }
    }
  },
  {
    sec: "s15",
    ru: "Партнёрство оценивает запасы по меньшей из себестоимости и рыночной цены. Позиция K: себестоимость $260, рынок $310. Позиция L: $180 и $145. Позиция M: $400 и $355. Какова стоимость запасов?",
    en: "A partnership values inventory at lower of cost or market. Item K: cost $260, market $310. Item L: $180 and $145. Item M: $400 and $355. What is the inventory value?",
    opts: [
      { k: "A", ru: "$760", en: "$760" },
      { k: "B", ru: "$795", en: "$795" },
      { k: "C", ru: "$810", en: "$810" },
      { k: "D", ru: "$840", en: "$840" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. По каждой позиции берётся меньшая величина: $260 + $145 + $355 = $760.", en: "Correct. The lower figure is taken for each item: $260 + $145 + $355 = $760." },
      B: { ru: "$795 получается, если по одной из позиций взять большую величину. Каждая берётся строго по минимуму.", en: "$795 arises from taking the higher figure on one of the items. Each is taken strictly at its minimum." },
      C: { ru: "$810 — итог рыночных цен по всем трём позициям. Итоги не сравниваются вовсе.", en: "$810 is the total market value of all three items. Totals are never compared at all." },
      D: { ru: "$840 — итог себестоимости. Заготовленная ошибка: сравнить $840 с $810 и взять меньшее вместо поэлементного расчёта.", en: "$840 is the total cost. The prepared error: compare $840 with $810 and take the lower instead of working item by item." }
    }
  },
  {
    sec: "s15",
    ru: "Что из перечисленного не влияет на себестоимость проданного?",
    en: "Which of the following does NOT affect cost of goods sold?",
    opts: [
      { k: "A", ru: "Скидка за быструю оплату, отнесённая на отдельный счёт скидок", en: "A cash discount credited to a separate discount account" },
      { k: "B", ru: "Торговая скидка", en: "A trade discount" },
      { k: "C", ru: "Доставка сырья до предприятия", en: "Freight-in on raw materials" },
      { k: "D", ru: "Возвраты и уценки поставщику", en: "Purchase returns and allowances" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. При этом способе себестоимость не уменьшается, а накопленный на счёте остаток в конце года включается в доход бизнеса.", en: "Correct. Under that method cost of goods sold is not reduced; the year-end balance of the account is included in business income." },
      B: { ru: "Торговая скидка входит в цену: в учёт берётся только фактически уплаченная сумма, значит себестоимость меняется.", en: "A trade discount is built into the price: only the amount actually paid is used, so cost changes." },
      C: { ru: "Доставка, экспедирование и перевозка сырья входят в себестоимость проданного.", en: "Freight-in, express-in and cartage-in on raw materials are part of cost of goods sold." },
      D: { ru: "Возвраты уменьшают стоимость товара в наличии.", en: "Returns reduce the cost of goods on hand." }
    }
  },
  {
    sec: "s16",
    ru: "Кто обязан применять календарный год в качестве налогового периода?",
    en: "Who must use the calendar year as their tax year?",
    opts: [
      { k: "A", ru: "Любая C-корпорация", en: "Any C corporation" },
      { k: "B", ru: "Любое партнёрство", en: "Any partnership" },
      { k: "C", ru: "Налоговое убежище", en: "A tax shelter" },
      { k: "D", ru: "Тот, у кого нет ни книг, ни годового учётного периода", en: "Someone with neither books nor an annual accounting period" }
    ],
    correct: "D",
    why: {
      A: { ru: "C-корпорация свободна в выборе календарного или фискального года.", en: "A C corporation may choose either a calendar or a fiscal year." },
      B: { ru: "Партнёрство применяет требуемый период, определяемый тремя тестами, а не непременно календарный.", en: "A partnership uses its required year, determined by the three tests, not necessarily the calendar year." },
      C: { ru: "Налоговому убежищу запрещён кассовый метод, но период это не предопределяет.", en: "A tax shelter is barred from the cash method, but that does not fix its tax year." },
      D: { ru: "Верно. Отсутствие книг или годового учётного периода делает календарный год обязательным.", en: "Correct. Having no books or no annual accounting period makes the calendar year compulsory." }
    }
  },
  {
    sec: "s16",
    ru: "Что достаточно сделать, чтобы фискальный период считался принятым уже с первой декларации?",
    en: "What is enough for a fiscal year to count as adopted from the very first return?",
    opts: [
      { k: "A", ru: "Приложить заполненную форму 1128", en: "Attach a completed Form 1128" },
      { k: "B", ru: "Вести книги и отражать доходы и расходы по этому периоду", en: "Keep books and report income and expenses on that basis" },
      { k: "C", ru: "Подать декларацию за короткий период", en: "File a short-period return" },
      { k: "D", ru: "Получить разрешение IRS", en: "Obtain IRS approval" }
    ],
    correct: "B",
    why: {
      A: { ru: "Форма 1128 нужна для смены уже принятого периода, а не для его первоначального принятия.", en: "Form 1128 changes a year already adopted; it is not used to adopt one." },
      B: { ru: "Верно. Достаточно вести книги и отчитываться по выбранному периоду — этим он и принимается.", en: "Correct. Keeping books and reporting on the chosen period is what adopts it." },
      C: { ru: "Короткий период возникает при смене периода или неполном годе существования, а не при первоначальном выборе.", en: "A short period arises on a change of year or a partial year of existence, not on the initial choice." },
      D: { ru: "Разрешение требуется для смены периода, а не для его принятия.", en: "Approval is needed to change a year, not to adopt one." }
    }
  },
  {
    sec: "s16",
    ru: "Налогоплательщик сменил налоговый период и подаёт декларацию за восемь месяцев: скорректированный валовой доход $58 000, постатейные вычеты $22 000. Каков годовой эквивалент дохода?",
    en: "A taxpayer changed its tax year and files for an eight-month period: adjusted gross income $58,000, itemized deductions $22,000. What is the annualized income?",
    opts: [
      { k: "A", ru: "$36 000", en: "$36,000" },
      { k: "B", ru: "$54 000", en: "$54,000" },
      { k: "C", ru: "$58 000", en: "$58,000" },
      { k: "D", ru: "$87 000", en: "$87,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "$36 000 — изменённый облагаемый доход до приведения к годовому эквиваленту.", en: "$36,000 is the modified taxable income before annualizing." },
      B: { ru: "Верно. ($58 000 − $22 000) × 12 ÷ 8 = $54 000. На коротком периоде вычеты обязаны быть постатейными: стандартный вычет недоступен.", en: "Correct. ($58,000 − $22,000) × 12 ÷ 8 = $54,000. On a short period deductions must be itemized: the standard deduction is unavailable." },
      C: { ru: "Это валовой доход короткого периода, к году он не приведён и вычеты не учтены.", en: "That is the short period’s gross income, neither annualized nor reduced by deductions." },
      D: { ru: "$87 000 получилось бы при приведении валового дохода к году без учёта вычетов.", en: "$87,000 annualizes gross income without deducting anything." }
    }
  },
  {
    sec: "s17",
    ru: "У C-корпорации налоговый период заканчивается 31 августа 2025 года. Когда без учёта продлений подаётся декларация?",
    en: "A C corporation’s tax year ends August 31, 2025. When is its return due, disregarding extensions?",
    opts: [
      { k: "A", ru: "15 ноября 2025 года", en: "November 15, 2025" },
      { k: "B", ru: "15 декабря 2025 года", en: "December 15, 2025" },
      { k: "C", ru: "15 марта 2026 года", en: "March 15, 2026" },
      { k: "D", ru: "15 апреля 2026 года", en: "April 15, 2026" }
    ],
    correct: "B",
    why: {
      A: { ru: "15 ноября — 15-й день 3-го месяца. Это правило форм 1065 и 1120-S, а для 1120 — только при годе, заканчивающемся 30 июня.", en: "November 15 is the 15th day of the 3rd month. That is the rule for Forms 1065 and 1120-S, and for Form 1120 only with a June 30 year end." },
      B: { ru: "Верно. 15-й день 4-го месяца после 31 августа — 15 декабря 2025 года.", en: "Correct. The 15th day of the 4th month after August 31 is December 15, 2025." },
      C: { ru: "Март возник бы при отсчёте от календарного года, а период здесь фискальный.", en: "March would follow from a calendar year, but this year is fiscal." },
      D: { ru: "15 апреля — срок C-корпорации, у которой год закончился 31 декабря.", en: "April 15 is the date for a C corporation whose year ended December 31." }
    }

  },
  {
    sec: "s11",
    ru: "Деятельность признана не ведущейся ради прибыли. Выручка за 2025 год $9 400, расходы $13 200, товаров на продажу нет. Как это отражается?",
    en: "An activity is held not to be engaged in for profit. Receipts for 2025 are $9,400 and expenses are $13,200; there are no goods for sale. How is it reported?",
    opts: [
      { k: "A", ru: "Убыток $3 800 в Schedule C", en: "A $3,800 loss on Schedule C" },
      { k: "B", ru: "Доход $9 400 в Schedule 1; расходы за 2025 год не вычитаются", en: "$9,400 of income on Schedule 1; the expenses are not deductible for 2025" },
      { k: "C", ru: "Доход $9 400 и расходы $9 400 в Schedule C", en: "$9,400 of income and $9,400 of expenses on Schedule C" },
      { k: "D", ru: "Не отражается ничего: деятельность убыточна", en: "Nothing is reported: the activity ran at a loss" }
    ],
    correct: "B",
    why: {
      A: { ru: "Убыток против прочего дохода даёт только деятельность, ведущаяся ради прибыли.", en: "Only an activity engaged in for profit produces a loss against other income." },
      B: { ru: "Верно. Доход идёт в Schedule 1, строку 8j, а расходы деятельности не для прибыли за 2025 год не вычитаются вовсе: прочие постатейные вычеты приостановлены.", en: "Correct. The income goes on Schedule 1, line 8j, and expenses of a not-for-profit activity are not deductible at all for 2025: miscellaneous itemized deductions are suspended." },
      C: { ru: "Схема «вычет до размера дохода» действовала до приостановления прочих постатейных вычетов. Кроме того, Schedule C здесь не заполняется.", en: "Deducting up to the amount of income was the pre-suspension rule for miscellaneous itemized deductions. Besides, no Schedule C is filed here." },
      D: { ru: "Отнесение к деятельности не для прибыли отменяет расходы, а не выручку.", en: "The not-for-profit label removes the expenses, not the receipts." }
    }
  },
  {
    sec: "s11",
    ru: "Деятельность по разведению и показу лошадей принесла прибыль в двух годах из последних семи. Что из этого следует?",
    en: "An activity of breeding and showing horses was profitable in two of the last seven years. What follows?",
    opts: [
      { k: "A", ru: "Деятельность предполагается ведущейся ради прибыли", en: "The activity is presumed to be engaged in for profit" },
      { k: "B", ru: "Деятельность признаётся хобби: прибыльных лет меньше трёх", en: "The activity is a hobby: there are fewer than three profitable years" },
      { k: "C", ru: "Презумпция неприменима: она требует трёх лет из пяти", en: "The presumption does not apply: it requires three years out of five" },
      { k: "D", ru: "Решение автоматически откладывается до конца четвёртого года", en: "The determination is automatically postponed to the close of the fourth year" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Для разведения, тренинга, выставок и скачек лошадей презумпция требует двух прибыльных лет из семи.", en: "Correct. For breeding, training, showing or racing horses the presumption asks for two profitable years out of seven." },
      B: { ru: "Даже недостижение презумпции хобби не создаёт, а здесь она как раз достигнута.", en: "Failing the presumption would not create a hobby, and here it is in fact met." },
      C: { ru: "Три года из пяти — общее правило; для лошадей числа заменяются на два и семь.", en: "Three out of five is the general rule; for horses the numbers become two and seven." },
      D: { ru: "Отсрочка возможна по выбору налогоплательщика на форме 5213 и для лошадей длится до конца шестого года, а не наступает сама.", en: "Postponement is elective on Form 5213 and for horses runs to the close of the sixth year; it does not happen by itself." }
    }
  },
  {
    sec: "s14",
    ru: "Налогоплательщик на кассовом методе 27 декабря 2025 года оплатил кредитной картой ремонт оборудования на $4 100 и в тот же день выдал поставщику собственный вексель на $2 300. Счёт банка оплачен в феврале 2026 года, вексель погашен в марте 2026 года. Какая сумма вычитается за 2025 год?",
    en: "On December 27, 2025, a cash-method taxpayer charged $4,100 of equipment repairs to a credit card and on the same day gave a supplier a $2,300 promissory note of his own. The card bill was paid in February 2026 and the note in March 2026. How much is deductible for 2025?",
    opts: [
      { k: "A", ru: "$0", en: "$0" },
      { k: "B", ru: "$2 300", en: "$2,300" },
      { k: "C", ru: "$4 100", en: "$4,100" },
      { k: "D", ru: "$6 400", en: "$6,400" }
    ],
    correct: "C",
    why: {
      A: { ru: "Списание по карте платежом является: перед подрядчиком налогоплательщик рассчитался.", en: "A card charge is payment: the contractor has been paid." },
      B: { ru: "Здесь перепутаны две суммы. Именно вексель платежом не является.", en: "This reverses the two amounts. It is the note that is not payment." },
      C: { ru: "Верно. Оплата картой даёт вычет в год списания; собственный вексель, выданный продавцу, лишь переоформляет долг перед ним и вычета не создаёт.", en: "Correct. A card charge is deducted in the year of the charge; the taxpayer’s own note merely rewrites the debt to the same seller and produces no deduction." },
      D: { ru: "Сложены обе суммы. Вексель на $2 300 вычитается только при погашении, то есть в 2026 году.", en: "This adds both amounts. The $2,300 note is deductible only when paid, that is in 2026." }
    }
  },
  {
    sec: "s14",
    ru: "Корпорация оказывает юридические услуги — 98% её деятельности. Половина акций принадлежит работающим в ней юристам, вторая половина — их супругам, в корпорации не работающим. Средняя валовая выручка $52 млн. Вправе ли корпорация применять кассовый метод?",
    en: "A corporation performs legal services — 98% of its activities. Half its stock is held by the lawyers working in it and half by their spouses, who do not work there. Average gross receipts are $52 million. May it use the cash method?",
    opts: [
      { k: "A", ru: "Да: тест по роду занятий пройден", en: "Yes: the function test is met" },
      { k: "B", ru: "Да: акции супругов приписываются работникам", en: "Yes: the spouses’ stock is attributed to the employees" },
      { k: "C", ru: "Нет: тест собственников не пройден", en: "No: the ownership test fails" },
      { k: "D", ru: "Нет: юридические услуги в перечень не входят", en: "No: legal services are not on the list" }
    ],
    correct: "C",
    why: {
      A: { ru: "Тестов два, и пройти нужно оба. Одного рода занятий недостаточно.", en: "There are two tests and both must be met. The function test alone is not enough." },
      B: { ru: "Косвенное владение учитывается через партнёрства, S-корпорации и другие корпорации личных услуг. Владение членов семьи здесь не приписывается.", en: "Indirect ownership counts through partnerships, S corporations and other qualified PSCs. Family ownership is not attributed here." },
      C: { ru: "Верно. Практически все акции должны принадлежать работникам, оказывающим услуги, бывшим работникам или их наследственным массам. Половина у неработающих супругов этому не отвечает, а тест валовой выручки при $52 млн провален.", en: "Correct. Substantially all the stock must be held by employees performing the services, retired employees or their estates. Half held by non-employee spouses does not satisfy that, and at $52 million the gross receipts test fails too." },
      D: { ru: "Право прямо названо среди областей, отвечающих тесту по роду занятий.", en: "Law is named expressly among the fields that meet the function test." }
    }
  },
  {
    sec: "s14",
    ru: "Владелец ведёт розничный магазин и консультационную практику, по каждому — полный отдельный комплект книг и записей. Может ли он применять к магазину метод начисления, а к практике кассовый метод?",
    en: "An owner runs a retail store and a consulting practice, where each keeps its own complete set of books and records. May the store be on an accrual method and the practice on the cash method?",
    opts: [
      { k: "A", ru: "Нет: налогоплательщик применяет единый метод ко всей своей деятельности", en: "No: a taxpayer applies one method to all of their activity" },
      { k: "B", ru: "Да, поскольку по каждому бизнесу ведётся полный отдельный комплект книг", en: "Yes, because a complete separate set of books is kept for each business" },
      { k: "C", ru: "Да, но только если оба бизнеса проходят тест валовой выручки", en: "Yes, but only if both businesses meet the gross receipts test" },
      { k: "D", ru: "Да, и раздельных книг для этого не требуется", en: "Yes, and separate books are not required for it" }
    ],
    correct: "B",
    why: {
      A: { ru: "Метод учёта выбирается для каждого обособленного бизнеса, а не для налогоплательщика в целом.", en: "An accounting method is chosen for each separate and distinct business, not for the taxpayer as a whole." },
      B: { ru: "Верно. Обособленность бизнесов подтверждается именно полным раздельным учётом. Оговорка одна: разные методы не должны использоваться для переноса прибыли между бизнесами.", en: "Correct. Complete separate records are what make the businesses separate and distinct. One caveat: the different methods must not be used to shift profits between them." },
      C: { ru: "Тест валовой выручки решает, доступен ли кассовый метод, но обособленность бизнесов от него не зависит.", en: "The gross receipts test decides whether the cash method is available; it has nothing to do with whether the businesses are separate." },
      D: { ru: "Раздельные книги и есть условие обособленности: без них бизнесы обособленными не считаются.", en: "Separate books are the condition of separateness: without them the businesses are not separate and distinct." }
    }
  },
  {
    sec: "s14",
    ru: "Компания на методе начисления оспаривает предъявленное требование на $75 000. В декабре 2025 года она перечисляет эту сумму на счёт эскроу, распоряжаться которым не вправе; спор продолжается. В 2027 году спор проигран. За какой год вычет?",
    en: "An accrual-method company contests an asserted liability of $75,000. In December 2025 it transfers that amount to an escrow account it cannot draw on; the contest continues. The dispute is lost in 2027. For which year is the deduction allowed?",
    opts: [
      { k: "A", ru: "2025", en: "2025" },
      { k: "B", ru: "2026", en: "2026" },
      { k: "C", ru: "2027", en: "2027" },
      { k: "D", ru: "Вычет невозможен, пока спор не разрешён", en: "No deduction until the dispute is resolved" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Все четыре условия соблюдены: требование оспаривается, деньги переданы, спор продолжается после передачи, и без спора вычет полагался бы за этот же год. Вычет даётся за год передачи.", en: "Correct. All four conditions are met: the liability is contested, the money was transferred, the contest continues after the transfer, and but for the contest the deduction would be allowed for that year. The deduction goes to the year of the transfer." },
      B: { ru: "Годы между передачей и разрешением спора значения не имеют.", en: "The years between the transfer and the resolution do not matter." },
      C: { ru: "Год разрешения спора был бы верен, если бы передачи не было. Передача как раз и переносит вычет вперёд.", en: "The year the dispute ends would be right had there been no transfer. The transfer is what moves the deduction forward." },
      D: { ru: "Это общее правило, из которого передача денег и есть исключение.", en: "That is the general rule, and transferring the money is the exception to it." }
    }
  },
  {
    sec: "s15",
    ru: "Компания оценивает запасы по скользящему среднему и в финансовой отчётности, и для налога, пересчитывая среднюю себестоимость ежемесячно. Отклонение от FIFO составляет 1,7%, запасы оборачиваются пять раз в год. Отвечает ли метод установленным условиям?",
    en: "A company values inventory on a rolling average for both financial and tax purposes, recomputing average cost monthly. The variance from FIFO is 1.7% and the inventory turns five times a year. Does the method meet the conditions?",
    opts: [
      { k: "A", ru: "Да: четырёх оборотов в год достаточно", en: "Yes: four turns a year is enough" },
      { k: "B", ru: "Нет: отклонение превышает 1%", en: "No: the variance exceeds 1%" },
      { k: "C", ru: "Нет: требуется пересчёт при каждом поступлении товара", en: "No: the average must be recomputed on each purchase" },
      { k: "D", ru: "Да: достаточно применения того же метода в финансовой отчётности", en: "Yes: using the same method in the financial statements is enough" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Два количественных признака — отклонение до 1% и оборачиваемость не менее четырёх раз в год — соединены союзом «либо». Пяти оборотов достаточно, несмотря на отклонение в 1,7%.", en: "Correct. The two quantitative tests — a variance of 1% or less and at least four inventory turns a year — are joined by “or”. Five turns suffice despite the 1.7% variance." },
      B: { ru: "Превышение отклонения снимается вторым признаком: достаточно любого из двух.", en: "The excess variance is cured by the other test: either one is enough." },
      C: { ru: "Пересчёт при каждом поступлении — одна из двух допустимых частот. Регулярный пересчёт не реже раза в месяц равноценен.", en: "Recomputing on each purchase is one of two permitted frequencies. Recomputing regularly and at least monthly is equally acceptable." },
      D: { ru: "Соответствие финансовой отчётности — лишь входное условие; к нему нужны частота пересчёта и один из двух количественных признаков.", en: "Conformity with the financial statements is only the entry condition; the recomputation frequency and one of the two quantitative tests are also required." }
    }
  },
  {
    sec: "s13",
    ru: "В третьем квартале 2025 года в мастерской работали трое: им выплачено $700, $500 и $400. В остальных кварталах 2025 года и в течение всего 2024 года работников не было. Возникает ли у мастерской обязанность по федеральному налогу по безработице?",
    en: "In the third quarter of 2025 a workshop had three employees, paid $700, $500 and $400. There were no employees in the other quarters of 2025 or at any time during 2024. Does the workshop owe federal unemployment tax?",
    opts: [
      { k: "A", ru: "Да: за квартал выплачено $1 600 — не ниже порога", en: "Yes: $1,600 was paid for the quarter, at or above the threshold" },
      { k: "B", ru: "Нет: ни одному работнику не выплачено $1 500", en: "No: no single employee was paid $1,500" },
      { k: "C", ru: "Нет: работники были менее чем в 20 различных неделях", en: "No: there were employees in fewer than 20 different weeks" },
      { k: "D", ru: "Да, но налог начисляется только на $100 сверх порога", en: "Yes, but the tax applies only to the $100 above the threshold" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Порог сравнивается с выплатами всем работникам вместе: $700 + $500 + $400 = $1 600. Достаточно одного квартала за текущий или предыдущий год.", en: "Correct. The threshold is measured against wages paid to all employees together: $700 + $500 + $400 = $1,600. A single quarter in the current or prior year is enough." },
      B: { ru: "Это и есть основная ошибка: по каждому работнику отдельно считается база $7 000, а не порог $1 500.", en: "That is the central error: it is the $7,000 wage base that is computed per employee, not the $1,500 threshold." },
      C: { ru: "Тесты соединены союзом «либо». Недельный тест действительно не выполнен, но выплатного достаточно самого по себе.", en: "The two tests are joined by “or”. The weeks test indeed fails, but the wage test alone suffices." },
      D: { ru: "Порог решает, возникает ли обязанность, но из базы не вычитается. Каждый работник заработал меньше $7 000, поэтому облагаются все $1 600.", en: "The threshold decides whether the obligation arises; it is not subtracted from the base. Each employee earned less than $7,000, so the whole $1,600 is taxable." }
    }
  },
  {
    sec: "s14",
    ru: "Фермерское партнёрство со средней годовой валовой выручкой $2 400 000 распределяет 48% убытков ограниченным партнёрам, не занятым управлением. Доли в размещении не предлагались, корпоративных партнёров нет. Какой метод учёта доступен партнёрству?",
    en: "A farming partnership with average annual gross receipts of $2,400,000 allocates 48% of its losses to limited partners who take no part in management. No interests were offered in a registered offering and there is no corporate partner. Which accounting method is available?",
    opts: [
      { k: "A", ru: "Кассовый: выручка много ниже порога", en: "Cash: receipts are far below the threshold" },
      { k: "B", ru: "Кассовый: корпоративных партнёров нет", en: "Cash: there is no corporate partner" },
      { k: "C", ru: "Только метод начисления", en: "An accrual method only" },
      { k: "D", ru: "Кассовый, поскольку доли не размещались публично", en: "Cash, because the interests were not publicly offered" }
    ],
    correct: "C",
    why: {
      A: { ru: "Тест валовой выручки здесь не работает: запрет наложен строением хозяйства, а не его размером.", en: "The gross receipts test does not operate here: the bar comes from how the operation is structured, not from its size." },
      B: { ru: "Отсутствие корпоративного партнёра снимает общее ограничение, но не признак синдиката.", en: "The absence of a corporate partner lifts the general restriction but not the syndicate test." },
      C: { ru: "Верно. Более 35% убытков приходится на ограниченных партнёров — хозяйство является фермерским синдикатом, то есть налоговым убежищем, и кассовый метод ему недоступен при любой выручке.", en: "Correct. More than 35% of the losses go to limited partners, so the operation is a farming syndicate — a tax shelter — and the cash method is unavailable at any level of receipts." },
      D: { ru: "Признака два, и они соединены союзом «либо». Отсутствие размещения снимает только первый.", en: "There are two tests joined by “or”. The absence of an offering disposes of the first one only." }
    }
  },
  {
    sec: "s14",
    ru: "1 сентября 2025 года бизнес на методе начисления заплатил $18 000 за аренду склада на двенадцать месяцев, с 1 сентября 2025 по 31 августа 2026 года. Правило двенадцати месяцев соблюдено. Какая сумма вычитается в 2025 году?",
    en: "On September 1, 2025 an accrual-method business paid $18,000 for twelve months of warehouse rent running from September 1, 2025 to August 31, 2026. The twelve-month rule is satisfied. How much is deductible in 2025?",
    opts: [
      { k: "A", ru: "$18 000 — правило двенадцати месяцев соблюдено", en: "$18,000 — the twelve-month rule is satisfied" },
      { k: "B", ru: "$6 000", en: "$6,000" },
      { k: "C", ru: "Ничего: вычет откладывается до окончания аренды", en: "Nothing: the deduction waits until the lease ends" },
      { k: "D", ru: "$9 000 — половина срока", en: "$9,000 — half the term" }
    ],
    correct: "B",
    why: {
      A: { ru: "Так было бы на кассовом методе. При начислении правило снимает только капитализацию, а вычет по-прежнему требует экономического исполнения.", en: "That would be the answer on the cash method. On the accrual method the rule removes only the capitalisation; the deduction still requires economic performance." },
      B: { ru: "Верно. Расход за пользование имуществом исполняется по мере пользования: на 2025 год приходятся четыре месяца, $18 000 ÷ 12 × 4 = $6 000.", en: "Correct. An expense for the use of property is performed as the property is used: four months fall in 2025, $18,000 ÷ 12 × 4 = $6,000." },
      C: { ru: "Исполнение происходит непрерывно по мере пользования, а не в конце срока.", en: "Performance occurs continuously as the property is used, not at the end of the term." },
      D: { ru: "Половина срока пришлась бы на 2025 год при оплате с 1 июля. Здесь аренда начата 1 сентября — четыре месяца.", en: "Half the term would fall in 2025 had the lease begun on July 1. Here it begins September 1 — four months." }
    }
  },
  {
    sec: "s14",
    ru: "1 октября 2025 года арендатор заплатил арендодателю $24 000 за двенадцать месяцев аренды помещения, с 1 октября 2025 по 30 сентября 2026 года. Обе стороны применяют метод начисления и календарный год. Какие суммы попадут в декларации за 2025 год?",
    en: "On October 1, 2025 a tenant paid a landlord $24,000 for twelve months of rent running from October 1, 2025 to September 30, 2026. Both parties use the accrual method and a calendar year. What amounts belong on the 2025 returns?",
    opts: [
      { k: "A", ru: "Арендодатель включает в доход $24 000, арендатор вычитает $6 000", en: "The landlord includes $24,000; the tenant deducts $6,000" },
      { k: "B", ru: "Обе стороны показывают по $6 000", en: "Both sides report $6,000" },
      { k: "C", ru: "Обе стороны показывают по $24 000", en: "Both sides report $24,000" },
      { k: "D", ru: "Арендодатель включает $6 000, арендатор вычитает $24 000", en: "The landlord includes $6,000; the tenant deducts $24,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Предоплата аренды исключена из понятия авансового платежа, поэтому отсрочки у получателя нет — весь $24 000 в доход 2025 года. У плательщика экономическое исполнение наступает по мере пользования: на 2025 год приходятся три месяца, $24 000 ÷ 12 × 3 = $6 000.", en: "Correct. Prepaid rent is excluded from the definition of an advance payment, so the recipient has no deferral — the whole $24,000 is 2025 income. For the payer, economic performance occurs as the property is used: three months fall in 2025, $24,000 ÷ 12 × 3 = $6,000." },
      B: { ru: "Зеркальность выглядит естественно, но нормы для дохода и для вычета разные, и по аренде они расходятся.", en: "Mirroring looks natural, but the income rule and the deduction rule are different, and on rent they diverge." },
      C: { ru: "Сумма целиком верна только для арендодателя. Плательщик так вычесть не может: пользование помещением в 2025 году составило три месяца.", en: "The full amount is right for the landlord only. The payer cannot deduct it: the property was used for three months in 2025." },
      D: { ru: "Это обратная сторона той же ошибки: правила сторон перепутаны местами.", en: "This is the same error inverted: the two sides’ rules have been swapped." }
    }
  },
  {
    sec: "s17",
    ru: "Партнёрство с шестью партнёрами подало форму 1065 за 2025 год 20 мая 2026 года. Продление не запрашивалось, налога партнёрство не платит. Какой штраф начисляется?",
    en: "A partnership with six partners filed its 2025 Form 1065 on May 20, 2026. No extension was requested and the partnership pays no tax. What penalty applies?",
    opts: [
      { k: "A", ru: "$4 590", en: "$4,590" },
      { k: "B", ru: "$1 530", en: "$1,530" },
      { k: "C", ru: "Штрафа нет: налога к уплате нет", en: "No penalty: there is no tax due" },
      { k: "D", ru: "$3 060", en: "$3,060" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Срок — 16 марта 2026 года; с 16 марта по 20 мая проходят три месяца или их части. $255 × 3 месяца × 6 партнёров = $4 590. Часть месяца считается за полный.", en: "Correct. The due date is March 16, 2026; from March 16 to May 20 there are three months or parts of months. $255 × 3 months × 6 partners = $4,590. A part of a month counts as a whole." },
      B: { ru: "Это один месяц вместо трёх: $255 × 6. Просрочка длилась дольше.", en: "That is one month instead of three: $255 × 6. The delay ran longer." },
      C: { ru: "Штраф считается по числу партнёров, а не по налогу. Отсутствие налога его не отменяет.", en: "The penalty is measured by the number of partners, not by tax. Having no tax does not remove it." },
      D: { ru: "$3 060 получается при четырёх партнёрах либо при двух месяцах у шести. Пересчитайте оба множителя.", en: "$3,060 comes from four partners, or from two months with six. Recheck both multipliers." }
    }
  },
  {
    sec: "s17",
    ru: "За 2025 год бизнес обязан подать 6 форм 1099-NEC, 3 формы 1099-MISC и 2 формы W-2. Обязан ли он представлять их электронно?",
    en: "For 2025 a business must file 6 Forms 1099-NEC, 3 Forms 1099-MISC and 2 Forms W-2. Is electronic filing required?",
    opts: [
      { k: "A", ru: "Да: всего 11 деклараций, порог перейдён", en: "Yes: 11 returns in all, the threshold is crossed" },
      { k: "B", ru: "Нет: ни одного вида формы не набралось десяти", en: "No: no single form type reached ten" },
      { k: "C", ru: "Да, но только по формам 1099-NEC", en: "Yes, but only for the Forms 1099-NEC" },
      { k: "D", ru: "Нет: W-2 в подсчёт не входят", en: "No: Forms W-2 do not count" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Порог в десять деклараций считается по всем видам форм в совокупности за календарный год: 6 + 3 + 2 = 11.", en: "Correct. The ten-return threshold counts all form types together for the calendar year: 6 + 3 + 2 = 11." },
      B: { ru: "Именно эта ошибка и проверяется: порог не применяется отдельно к каждому виду формы.", en: "That is precisely the error being tested: the threshold does not apply separately to each form type." },
      C: { ru: "Обязанность возникает по всем информационным декларациям, а не по той форме, которой больше всего.", en: "The requirement covers all the information returns, not the form type with the largest count." },
      D: { ru: "W-2 входят в совокупный подсчёт наравне с формами 1099.", en: "Forms W-2 count in the aggregate along with the Forms 1099." }
    }
  },
  {
    sec: "s17",
    ru: "За четыре квартала, закончившиеся 30 июня 2025 года, зарплатные налоги работодателя составили $46 000. В марте 2026 года он выплачивает премии и накапливает за один день обязательство в $112 000. Как он депонирует налог?",
    en: "For the four quarters ending June 30, 2025 an employer's employment taxes were $46,000. In March 2026 it pays bonuses and accumulates a $112,000 liability on a single day. How must it deposit?",
    opts: [
      { k: "A", ru: "На следующий рабочий день", en: "By the next business day" },
      { k: "B", ru: "До 15 апреля 2026 года: график ежемесячный", en: "By April 15, 2026: the schedule is monthly" },
      { k: "C", ru: "По графику дважды в неделю: сумма превысила $50 000", en: "On the semiweekly schedule: the amount exceeded $50,000" },
      { k: "D", ru: "Вместе с формой 941 за первый квартал", en: "With the Form 941 for the first quarter" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Контрольный период даёт ежемесячный график, но накопление $100 000 и более за один день требует депозита на следующий рабочий день при любом графике.", en: "Correct. The lookback period gives a monthly schedule, but accumulating $100,000 or more on a single day requires a next-business-day deposit under either schedule." },
      B: { ru: "Ежемесячный график определён верно, но правило ста тысяч его перебивает.", en: "The monthly schedule is identified correctly, but the hundred-thousand rule overrides it." },
      C: { ru: "График задан контрольным периодом прошлого года — $46 000, — а не текущей суммой. Внутри года он не меняется.", en: "The schedule comes from last year's lookback period — $46,000 — not from the current amount. It does not change mid-year." },
      D: { ru: "Уплата вместе с декларацией вместо депозита сама по себе даёт штраф в 10%.", en: "Paying with the return instead of depositing is itself a 10% penalty." }
    }
  },
  {
    sec: "s17",
    ru: "Бизнес выплатил подрядчику $9 000 за услуги и не подал форму 1099-NEC ни в налоговую службу, ни самому подрядчику. К декабрю 2026 года нарушение не исправлено. Какой штраф за эту форму?",
    en: "A business paid a contractor $9,000 for services and neither filed the Form 1099-NEC with the IRS nor furnished it to the contractor. By December 2026 nothing has been corrected. What is the penalty for that one form?",
    opts: [
      { k: "A", ru: "$680: по $340 за каждое из двух нарушений", en: "$680: $340 for each of the two failures" },
      { k: "B", ru: "$340: форма одна, значит и штраф один", en: "$340: one form, therefore one penalty" },
      { k: "C", ru: "$900: 10% от выплаченной суммы", en: "$900: 10% of the amount paid" },
      { k: "D", ru: "$60: минимальный размер штрафа", en: "$60: the minimum penalty amount" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. §6721 наказывает за неподачу в налоговую службу, §6722 — за невыдачу получателю. Это два самостоятельных нарушения, и после 1 августа каждое стоит $340.", en: "Correct. Section 6721 covers the failure to file with the IRS and section 6722 the failure to furnish the payee. They are separate failures, and after August 1 each costs $340." },
      B: { ru: "Именно эта ошибка и проверяется: форма уходит по двум адресам, и штрафы за адреса независимы.", en: "That is exactly the error being tested: the form goes to two addresses, and the penalties for them are independent." },
      C: { ru: "10% применяется только при умышленном пренебрежении и берётся как большая из двух величин, а не вместо них.", en: "The 10% figure applies only to intentional disregard, and then as the greater of the two amounts, not instead of them." },
      D: { ru: "$60 — размер штрафа, если нарушение исправлено в течение 30 дней. Здесь оно не исправлено вовсе.", en: "$60 applies when the failure is corrected within 30 days. Here it was never corrected." }
    }
  },
  {
    sec: "s17",
    ru: "Работодатель должен был подать 25 форм 1099-NEC к 2 февраля 2026 года, а подал 20 февраля. Средняя годовая выручка за три года — $2 000 000. Какой штраф по §6721?",
    en: "An employer had to file 25 Forms 1099-NEC by February 2, 2026 and filed them on February 20. Average annual gross receipts for three years are $2,000,000. What is the section 6721 penalty?",
    opts: [
      { k: "A", ru: "$1 500", en: "$1,500" },
      { k: "B", ru: "$3 250", en: "$3,250" },
      { k: "C", ru: "$8 500", en: "$8,500" },
      { k: "D", ru: "Штрафа нет: формы поданы до 1 августа", en: "No penalty: the forms were filed before August 1" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Просрочка 18 дней укладывается в 30 дней после срока, значит $60 за форму: $60 × 25 = $1 500. Годовой максимум для выручки не выше $5 000 000 здесь не достигнут.", en: "Correct. Eighteen days is within 30 days of the due date, so the rate is $60 per return: $60 × 25 = $1,500. The annual cap for receipts of $5,000,000 or less is nowhere near." },
      B: { ru: "$130 за форму берётся с 31-го дня и до 1 августа. Здесь просрочка короче.", en: "The $130 rate starts on the 31st day and runs to August 1. Here the delay was shorter." },
      C: { ru: "$340 за форму — ставка для нарушения, исправленного после 1 августа либо не исправленного вовсе.", en: "The $340 rate applies to a failure corrected after August 1 or never corrected at all." },
      D: { ru: "1 августа — граница между ставками, а не дата, до которой штрафа нет.", en: "August 1 divides one rate from another; it is not a date before which no penalty applies." }
    }
  }
,
  {
    sec: "s13",
    ru: "Программиста уволили по сокращению, и бывший работодатель тут же нанял его на разовый проект за твёрдую сумму. Сроки не оговорены, минимума за потраченные часы нет, указаний сверх технического задания не даётся, на планёрки его не зовут, льгот нет. В договоре он назван независимым подрядчиком, по итогам года ему выдадут форму 1099-NEC. Кем он является?",
    en: "A programmer was laid off, and the former employer immediately hired him for a one-off project at a flat fee. No deadline is set, no minimum is guaranteed for the hours spent, no instructions are given beyond the specification, he is not expected at staff meetings and receives no benefits. The contract calls him an independent contractor and he will receive a Form 1099-NEC. What is he?",
    opts: [
      { k: "A", ru: "По-прежнему штатным работником: он работает на прежнего работодателя", en: "Still a regular employee: he is working for his former employer" },
      { k: "B", ru: "Временным работником, поскольку проект ограничен по объёму", en: "A temporary employee, because the project is limited in scope" },
      { k: "C", ru: "Независимым подрядчиком", en: "An independent contractor" },
      { k: "D", ru: "Независимым подрядчиком только потому, что так написано в договоре", en: "An independent contractor solely because the contract says so" }
    ],
    correct: "C",
    why: {
      A: { ru: "Прежние отношения сами по себе ничего не переносят в новые. Каждое соглашение оценивается по своему содержанию, и здесь контроля почти нет.", en: "The earlier relationship carries nothing over by itself. Each arrangement is judged on its own substance, and here there is almost no control." },
      B: { ru: "«Временный работник» — не категория налогового права. Работник он или подрядчик, решает степень контроля, а не срок работы.", en: "\u201cTemporary employee\u201d is not a category in tax law. Whether someone is an employee or a contractor turns on control, not on how long the work lasts." },
      C: { ru: "Верно. Заказчик задаёт только требования к результату: ни как выполнять работу, ни сколько часов на неё тратить он не указывает, не обучает, не возмещает расходов, не даёт льгот и не требует присутствия на совещаниях. Поведенческий и финансовый контроль отсутствуют, характер отношений разовый — это независимый подрядчик.", en: "Correct. The payer sets only the specification for the result: it does not direct how the work is done or how many hours it takes, provides no training, reimburses nothing, gives no benefits and does not require attendance at meetings. Behavioral and financial control are both absent and the relationship is a one-off \u2014 this is an independent contractor." },
      D: { ru: "Вывод верный, а основание нет. Название в договоре и форма 1099-NEC статуса не создают: работай он под указаниями заказчика, он был бы работником при том же договоре.", en: "The conclusion is right but the reason is not. The contract label and the Form 1099-NEC create no status: had he worked under the payer\u2019s direction he would be an employee under that same contract." }
    }
  },
  {
    sec: "s17",
    ru: "Что относится к налогам доверительного фонда?",
    en: "Which amounts are trust fund taxes?",
    opts: [
      { k: "A", ru: "Средства, которые работодатель откладывает на льготы работникам", en: "Amounts the employer sets aside to provide benefits to employees" },
      { k: "B", ru: "Доля работодателя в социальном обеспечении и Medicare", en: "The employer\u2019s matching share of social security and Medicare" },
      { k: "C", ru: "Удержанные у работника подоходный налог и его доля социального обеспечения и Medicare", en: "The income tax and the employee\u2019s share of social security and Medicare withheld from wages" },
      { k: "D", ru: "Удержанное у работника вместе с долей работодателя — всё, что уходит одним депозитом", en: "The withheld amounts together with the employer\u2019s share \u2014 everything that goes in as one deposit" }
    ],
    correct: "C",
    why: {
      A: { ru: "Деньги на льготы — расход работодателя, а не удержанный налог. К доверительному фонду они отношения не имеют.", en: "Money for benefits is an employer expense, not a withheld tax. It has nothing to do with the trust fund." },
      B: { ru: "Доля работодателя — его собственный налог. Ни у кого не удерживалась, значит ни для кого и не удерживается в доверительном управлении.", en: "The employer\u2019s share is its own tax. It was withheld from no one, so it is held in trust for no one." },
      C: { ru: "Верно. Доверительный фонд — то, что <strong>удержано у работника</strong>: подоходный налог с его зарплаты и его доля социального обеспечения и Medicare. Работодатель эти деньги не зарабатывал: он держит их для казначейства, пока не внесёт. Это деньги работника.", en: "Correct. The trust fund is what is <strong>withheld from the employee</strong>: the income tax on their wages and their share of social security and Medicare. The employer never earned that money; it holds it for the Treasury until it is deposited. It is the employee\u2019s money." },
      D: { ru: "Соблазнительно, потому что обе суммы уходят одним депозитом в один срок. Но общий платёж не делает долю работодателя доверительным фондом — и штраф с неё не считается.", en: "Tempting, because both amounts go in as one deposit on one date. But sharing a payment does not make the employer\u2019s share trust fund money \u2014 and the penalty is not computed on it." }
    }
  },
  {
    sec: "s17",
    ru: "За квартал работодатель удержал у работников $52 000 подоходного налога и социальных взносов и должен ещё $18 000 собственной доли. В казначейство не внесено ничего: деньги ушли поставщикам, о недоимке распорядитель средств знал. От какой суммы считается штраф за взыскание доверительного фонда?",
    en: "For the quarter an employer withheld $52,000 of income tax and payroll taxes from employees and owes a further $18,000 as its own share. Nothing was paid over: the money went to suppliers, and the person controlling the funds knew of the shortfall. On what amount is the trust fund recovery penalty computed?",
    opts: [
      { k: "A", ru: "$70 000 — вся недоимка", en: "$70,000 \u2014 the entire shortfall" },
      { k: "B", ru: "$52 000", en: "$52,000" },
      { k: "C", ru: "$26 000 — половина удержанного", en: "$26,000 \u2014 half of the withheld amount" },
      { k: "D", ru: "$18 000", en: "$18,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "В $70 000 входит доля работодателя. Она остаётся долгом бизнеса, но в базу этого штрафа не входит.", en: "The $70,000 includes the employer\u2019s share. That remains a debt of the business but is outside the base of this penalty." },
      B: { ru: "Верно. Штраф равен <span data-fig=\"tfrp_rate\"></span> неуплаченного налога доверительного фонда, то есть удержанного у работников: $52 000. Оба условия налицо — распорядитель средств вправе решать, кому платить, и знал, что налог не вносится. Заплатить поставщику вместо казначейства, зная о недоимке, — это и есть умышленность.", en: "Correct. The penalty is <span data-fig=\"tfrp_rate\"></span> of the unpaid trust fund tax, that is, of the amounts withheld from employees: $52,000. Both requirements are met \u2014 the person controlling the funds decides who gets paid and knew the tax was not being paid over. Paying a supplier instead of the Treasury while knowing of the shortfall is willfulness." },
      C: { ru: "Половина возникает при делении взносов между работником и работодателем, но к этому штрафу отношения не имеет: он равен полной сумме удержанного.", en: "Halving comes from splitting payroll taxes between employee and employer and has nothing to do with this penalty: it equals the full withheld amount." },
      D: { ru: "$18 000 — как раз доля работодателя, единственная часть, которая доверительным фондом не является.", en: "$18,000 is precisely the employer\u2019s share, the one part that is not trust fund money." }
    }
  },
  {
    sec: "s17",
    ru: "С кого может быть взыскан штраф за взыскание доверительного фонда, если получить налог с самого бизнеса не удалось?",
    en: "From whom may the trust fund recovery penalty be collected where the tax could not be obtained from the business itself?",
    opts: [
      { k: "A", ru: "Только с должностных лиц корпорации: у прочих обязанности нет", en: "Only from officers of a corporation: no one else bears the duty" },
      { k: "B", ru: "С любого, кто обязан собирать, учитывать или вносить налог и не сделал этого умышленно, — включая бухгалтера и директора на общественных началах", en: "From anyone required to collect, account for or pay over the tax who willfully failed to do so \u2014 including an accountant or a volunteer director" },
      { k: "C", ru: "С работников, у которых налог был удержан: это их деньги", en: "From the employees whose wages the tax was withheld from: it is their money" },
      { k: "D", ru: "С любого работника бизнеса независимо от полномочий и осведомлённости", en: "From any employee of the business regardless of authority or knowledge" }
    ],
    correct: "B",
    why: {
      A: { ru: "Должность в перечне не главное. Ответственным признаётся всякий, у кого есть полномочия распоряжаться средствами бизнеса, — вплоть до того, кто просто подписывает платёжные документы.", en: "A job title is not the point. A responsible person is anyone with authority over the business\u2019s funds \u2014 down to whoever signs its cheques." },
      B: { ru: "Верно. Перечень строится по полномочиям, а не по должности: должностное лицо или работник корпорации, партнёр или работник партнёрства, бухгалтер, директор или попечитель на общественных началах, работник индивидуального предпринимателя — всякий, кто вправе распоряжаться средствами. Вторым условием требуется умышленность.", en: "Correct. The list is built on authority rather than title: an officer or employee of a corporation, a partner or employee of a partnership, an accountant, a volunteer director or trustee, an employee of a sole proprietorship \u2014 anyone with authority over the funds. The second requirement is willfulness." },
      C: { ru: "С работника взыскивать нечего: налог у него уже удержан, и в его декларации он засчитывается как уплаченный. Потерял деньги бюджет, а не работник.", en: "There is nothing to collect from the employee: the tax was already withheld and is credited as paid on their return. It is the Treasury that lost the money, not the employee." },
      D: { ru: "Нужны оба условия сразу — полномочия и умышленность. Работник без права распоряжаться средствами ответственным лицом не является.", en: "Both requirements must hold at once \u2014 authority and willfulness. An employee with no power over the funds is not a responsible person." }
    }
  }
];
