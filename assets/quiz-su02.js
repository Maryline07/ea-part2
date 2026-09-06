/* ===================================================================
   Вопросы тренажёра, модуль 02.

   Отдельный файл, а не блок внутри страницы: под file:// страница не
   может прочитать другой файл, поэтому единственный способ отдать
   данные двум страницам сразу — тег <script src>. Файл подключают и
   su02.html, и trainer.html.

   QUIZSECS — названия подразделов. На странице модуля они есть в
   заголовках, на странице тренажёра их нет. Карта порождается
   скриптом из тех же заголовков, а сборка отказывается собирать
   файл, если названия разошлись.
   =================================================================== */

window.QUIZZES  = window.QUIZZES  || {};
window.QUIZSECS = window.QUIZSECS || {};

window.QUIZSECS.su02 = {
  s21: { no: "2.1", ru: "Что считается доходом бизнеса", en: "What counts as business income" },
  s22: { no: "2.2", ru: "Налог на самозанятость", en: "Self-employment tax" },
  s23: { no: "2.3", ru: "Дополнительный налог Medicare", en: "Additional Medicare Tax" },
  s24: { no: "2.4", ru: "Фермеры", en: "Farmers" },
  s25: { no: "2.5", ru: "Списание долга", en: "Cancelled debt" }
};

window.QUIZZES.su02 = [
  {
    sec: "s22",
    ru: "Чистая прибыль по Schedule C составила $60 000, заработной платы нет. Какова база для расчёта налога на самозанятость?",
    en: "Net profit on Schedule C is $60,000 and there are no wages. What is the base for computing self-employment tax?",
    opts: [
      { k: "A", ru: "$60 000", en: "$60,000" },
      { k: "B", ru: "$55 410", en: "$55,410" },
      { k: "C", ru: "$30 000", en: "$30,000" },
      { k: "D", ru: "$46 200", en: "$46,200" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это чистая прибыль до применения множителя. Налог считается не с неё.", en: "That is net profit before the factor is applied. The tax is not computed on it." },
      B: { ru: "Верно. 60 000 × 92,35% = $55 410. Множитель имитирует вычет, который был бы у работодателя.", en: "Correct. 60,000 × 92.35% = $55,410. The factor mirrors the deduction an employer would have taken." },
      C: { ru: "Половина прибыли — это не база. Пополам делится сам уплаченный налог, и только для вычета по подоходному налогу.", en: "Half the profit is not the base. It is the tax itself that is halved, and only for the income tax deduction." },
      D: { ru: "Такой множитель в расчёте не участвует.", en: "No such factor enters the computation." }
    }
  },
  {
    sec: "s22",
    ru: "Чистый заработок от самозанятости составил $190 000, заработной платы нет. Как считается социальная часть налога?",
    en: "Net earnings from self-employment are $190,000 with no wages. How is the social security portion computed?",
    opts: [
      { k: "A", ru: "190 000 × 12,4%", en: "190,000 × 12.4%" },
      { k: "B", ru: "176 100 × 12,4%", en: "176,100 × 12.4%" },
      { k: "C", ru: "190 000 × 15,3%", en: "190,000 × 15.3%" },
      { k: "D", ru: "176 100 × 15,3%", en: "176,100 × 15.3%" }
    ],
    correct: "B",
    why: {
      A: { ru: "Социальная часть ограничена базой $176 100; сумма сверх неё этой ставкой не облагается.", en: "The social security portion is capped at the $176,100 base; amounts above it are not taxed at this rate." },
      B: { ru: "Верно. Социальная часть считается с меньшей из двух величин — чистого заработка и предела базы.", en: "Correct. The social security portion applies to the lesser of net earnings and the base limit." },
      C: { ru: "Ставка 15,3% объединяет обе части, а предел базы относится только к социальной.", en: "The 15.3% rate combines both portions, while the base limit applies to the social security portion only." },
      D: { ru: "Часть Medicare предела не имеет, поэтому применять к базе объединённую ставку нельзя.", en: "The Medicare portion has no limit, so the combined rate cannot be applied to the capped base." }
    }
  },
  {
    sec: "s22",
    ru: "Какое утверждение о вычете половины налога на самозанятость верно?",
    en: "Which statement about the deduction for one half of the self-employment tax is correct?",
    opts: [
      { k: "A", ru: "Он уменьшает сам налог на самозанятость вдвое", en: "It halves the self-employment tax itself" },
      { k: "B", ru: "Он уменьшает облагаемый доход, но не сам налог на самозанятость", en: "It reduces taxable income but not the self-employment tax itself" },
      { k: "C", ru: "Он применяется только при использовании постатейных вычетов", en: "It is available only to taxpayers who itemize" },
      { k: "D", ru: "Он включает половину дополнительного налога Medicare", en: "It includes half of the Additional Medicare Tax" }
    ],
    correct: "B",
    why: {
      A: { ru: "Сам налог на самозанятость остаётся в полной сумме.", en: "The self-employment tax remains payable in full." },
      B: { ru: "Верно. Это два разных расчёта: вычет действует в подоходном налоге и не затрагивает базу и сумму налога на самозанятость.", en: "Correct. These are separate computations: the deduction operates in the income tax and leaves the self-employment tax untouched." },
      C: { ru: "Вычет предоставляется независимо от того, применяются постатейные вычеты или стандартный.", en: "The deduction is allowed whether the taxpayer itemizes or takes the standard deduction." },
      D: { ru: "Дополнительный налог Medicare в вычет не входит: у него нет работодательской половины.", en: "The Additional Medicare Tax is excluded: it has no employer half." }
    }
  },
  {
    sec: "s21",
    ru: "Сантехник получил от частных заказчиков $8 400 наличными и ни одной формы 1099-NEC. Что он показывает в декларации?",
    en: "A plumber received $8,400 in cash from private customers and no Form 1099-NEC. What does he report?",
    opts: [
      { k: "A", ru: "Ничего: без формы 1099 доход не отражается", en: "Nothing: without a Form 1099 the income is not reported" },
      { k: "B", ru: "Только сумму сверх порога информационной отчётности", en: "Only the amount above the information reporting threshold" },
      { k: "C", ru: "Все $8 400 как доход бизнеса", en: "The full $8,400 as business income" },
      { k: "D", ru: "Половину суммы, поскольку заказчики — частные лица", en: "Half the amount, since the customers are individuals" }
    ],
    correct: "C",
    why: {
      A: { ru: "Обязанность показать доход лежит на получателе и от выдачи формы не зависит.", en: "The duty to report rests on the recipient and does not depend on a form being issued." },
      B: { ru: "Порог относится к обязанности плательщика подать форму, а не к налогооблагаемости дохода.", en: "The threshold governs the payer’s filing duty, not whether the income is taxable." },
      C: { ru: "Верно. Доход облагается независимо от формы оплаты и наличия информационной декларации.", en: "Correct. The income is taxable regardless of how it was paid or whether an information return exists." },
      D: { ru: "Статус заказчика на размер облагаемого дохода не влияет.", en: "The status of the customer does not affect how much income is taxable." }
    }
  },
  {
    sec: "s21",
    ru: "Столяр изготовил мебель для юриста, а юрист взамен оформил ему договоры. Обычная цена работ каждого — $4 000. Каковы последствия?",
    en: "A carpenter built furniture for a lawyer, and the lawyer drafted contracts in return. Each service is normally worth $4,000. What are the consequences?",
    opts: [
      { k: "A", ru: "Последствий нет: деньги не передавались", en: "None: no money changed hands" },
      { k: "B", ru: "Каждый показывает $4 000 дохода", en: "Each reports $4,000 of income" },
      { k: "C", ru: "Доход показывает только тот, кто получил услугу дороже", en: "Only the party receiving the more valuable service reports income" },
      { k: "D", ru: "Каждый показывает $2 000 дохода", en: "Each reports $2,000 of income" }
    ],
    correct: "B",
    why: {
      A: { ru: "Бартер облагается: доход равен рыночной стоимости полученного.", en: "Barter is taxable: income equals the fair market value of what is received." },
      B: { ru: "Верно. Обе стороны получили услугу стоимостью $4 000, и каждая показывает эту сумму в своём Schedule C.", en: "Correct. Both parties received a service worth $4,000 and each reports that amount on their own Schedule C." },
      C: { ru: "Доход возникает у обеих сторон независимо от соотношения стоимостей.", en: "Income arises for both parties regardless of any difference in value." },
      D: { ru: "Стоимость полученного не делится пополам.", en: "The value received is not halved." }
    }
  },
  {
    sec: "s22",
    ru: "Что из перечисленного НЕ входит в базу налога на самозанятость?",
    en: "Which of the following is NOT included in the self-employment tax base?",
    opts: [
      { k: "A", ru: "Чистая прибыль индивидуального предпринимателя", en: "A sole proprietor’s net profit" },
      { k: "B", ru: "Гарантированная выплата полному партнёру за услуги", en: "A guaranteed payment to a general partner for services" },
      { k: "C", ru: "Доля прибыли акционера S-корпорации", en: "An S corporation shareholder’s distributive share" },
      { k: "D", ru: "Доход фермера, материально участвующего в деятельности", en: "Farm income of a materially participating farmer" }
    ],
    correct: "C",
    why: {
      A: { ru: "Это базовый случай обложения налогом на самозанятость.", en: "This is the core case for the self-employment tax." },
      B: { ru: "Гарантированные выплаты за услуги в базу входят.", en: "Guaranteed payments for services are included." },
      C: { ru: "Верно. Доля прибыли акционера налогом на самозанятость не облагается; обычные взносы платятся только с его разумной заработной платы.", en: "Correct. The distributive share bears no self-employment tax; regular payroll taxes apply only to reasonable compensation." },
      D: { ru: "Материальное участие как раз и вводит фермерский доход в базу.", en: "Material participation is precisely what brings farm income into the base." }
    }
  },
  {
    sec: "s23",
    ru: "Одинокий налогоплательщик имеет заработную плату $210 000 и чистый заработок от самозанятости $30 000. С какой суммы взимается дополнительный налог Medicare?",
    en: "A single taxpayer has $210,000 of wages and $30,000 of net earnings from self-employment. On what amount is the Additional Medicare Tax imposed?",
    opts: [
      { k: "A", ru: "$30 000", en: "$30,000" },
      { k: "B", ru: "$40 000", en: "$40,000" },
      { k: "C", ru: "$10 000", en: "$10,000" },
      { k: "D", ru: "$240 000", en: "$240,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "В расчёт берётся весь трудовой доход вместе, а не только самозанятость.", en: "All earned income is combined, not just the self-employment portion." },
      B: { ru: "Верно. Совокупно $240 000, порог $200 000, превышение $40 000. Работодатель уже удержал налог с $10 000 зарплаты сверх $200 000, остальное досчитывается по форме 8959.", en: "Correct. Combined $240,000 against a $200,000 threshold leaves $40,000. The employer already withheld on the $10,000 of wages above $200,000; the rest is computed on Form 8959." },
      C: { ru: "Это лишь та часть зарплаты, с которой удержал работодатель; доход от самозанятости тоже учитывается.", en: "That is only the portion the employer withheld on; the self-employment earnings count too." },
      D: { ru: "Налог берётся с превышения над порогом, а не со всей суммы дохода.", en: "The tax applies to the excess over the threshold, not to the whole amount." }
    }
  },
  {
    sec: "s24",
    ru: "Фермер получил выплату по страхованию урожая в 2025 году из-за градобоя. Обычно урожай продаётся в следующем году. Что он вправе сделать?",
    en: "A farmer received crop insurance proceeds in 2025 after hail damage. The crop is normally sold in the following year. What may the farmer do?",
    opts: [
      { k: "A", ru: "Не показывать выплату вовсе", en: "Exclude the proceeds entirely" },
      { k: "B", ru: "Выбрать отсрочку признания дохода на 2026 год", en: "Elect to defer the income to 2026" },
      { k: "C", ru: "Распределить выплату на три года", en: "Spread the proceeds over three years" },
      { k: "D", ru: "Показать выплату как прирост капитала", en: "Report the proceeds as capital gain" }
    ],
    correct: "B",
    why: {
      A: { ru: "Страховая выплата является доходом; освобождения для неё нет.", en: "Crop insurance proceeds are income; no exclusion applies." },
      B: { ru: "Верно. Отсрочка на один год допускается именно потому, что фермер обычно продавал бы урожай в следующем году.", en: "Correct. The one-year deferral is available precisely because the farmer would normally have sold the crop the following year." },
      C: { ru: "Распределение на три года — это усреднение дохода по Schedule J, другой механизм.", en: "Spreading over three years is income averaging on Schedule J, a different mechanism." },
      D: { ru: "Это обычный доход фермерской деятельности, а не прирост капитала.", en: "This is ordinary farm income, not capital gain." }
    }
  },
  {
    sec: "s24",
    ru: "Валовой доход налогоплательщика за 2025 год: ферма $70 000, аренда квартиры $32 000. Применим ли особый порядок расчётного налога для фермеров?",
    en: "A taxpayer’s 2025 gross income: farming $70,000 and apartment rent $32,000. Does the special estimated tax rule for farmers apply?",
    opts: [
      { k: "A", ru: "Да: фермерский доход больше половины", en: "Yes: farm income exceeds half" },
      { k: "B", ru: "Нет: требуется не менее двух третей, а получается 68,6%", en: "No: two-thirds is required and the share is 68.6%" },
      { k: "C", ru: "Да: доля составляет 68,6%, что выше двух третей", en: "Yes: the share is 68.6%, above two-thirds" },
      { k: "D", ru: "Нет: аренда полностью лишает права на особый порядок", en: "No: any rental income disqualifies the taxpayer" }
    ],
    correct: "C",
    why: {
      A: { ru: "Требуется не половина, а две трети — порог выше.", en: "The requirement is two-thirds, not one half — a higher bar." },
      B: { ru: "Арифметика верна, вывод — нет: 68,6% превышает 66,7%.", en: "The arithmetic is right but the conclusion is not: 68.6% exceeds 66.7%." },
      C: { ru: "Верно. 70 000 ÷ 102 000 = 68,6%, что выше двух третей, поэтому особый порядок применяется.", en: "Correct. 70,000 ÷ 102,000 = 68.6%, above two-thirds, so the special rule applies." },
      D: { ru: "Наличие иного дохода само по себе права не лишает; важна только доля.", en: "Other income does not disqualify by itself; only the share matters." }
    }
  },
  {
    sec: "s24",
    ru: "Владелец земли сдаёт её фермеру за долю урожая и в управлении не участвует. Как отражается доход?",
    en: "A landowner rents farmland for a share of the crop and does not participate in management. How is the income reported?",
    opts: [
      { k: "A", ru: "Schedule F, облагается налогом на самозанятость", en: "Schedule F, subject to self-employment tax" },
      { k: "B", ru: "Форма 4835, налогом на самозанятость не облагается", en: "Form 4835, not subject to self-employment tax" },
      { k: "C", ru: "Schedule C, облагается налогом на самозанятость", en: "Schedule C, subject to self-employment tax" },
      { k: "D", ru: "Форма 4835, облагается налогом на самозанятость", en: "Form 4835, subject to self-employment tax" }
    ],
    correct: "B",
    why: {
      A: { ru: "Schedule F применяется при материальном участии, которого здесь нет.", en: "Schedule F applies where the owner materially participates, which is not the case here." },
      B: { ru: "Верно. Отсутствие материального участия выводит доход в форму 4835 и за пределы базы налога на самозанятость.", en: "Correct. The absence of material participation puts the income on Form 4835 and outside the self-employment tax base." },
      C: { ru: "Schedule C предназначен для торговой или производственной деятельности, а не для сдачи земли внаём.", en: "Schedule C is for a trade or business, not for renting out land." },
      D: { ru: "Форма выбрана верно, но налога на самозанятость в этом случае нет.", en: "The form is right, but there is no self-employment tax in this case." }
    }
  },
  {
    sec: "s24",
    ru: "Фермер продал выращенный им скот за $45 000. Какая сумма является доходом?",
    en: "A farmer sold livestock he raised for $45,000. How much is income?",
    opts: [
      { k: "A", ru: "$45 000 полностью", en: "The full $45,000" },
      { k: "B", ru: "$45 000 за вычетом рыночной стоимости скота", en: "$45,000 less the fair market value of the livestock" },
      { k: "C", ru: "Ничего: продажа скота освобождена", en: "Nothing: livestock sales are exempt" },
      { k: "D", ru: "Половина суммы", en: "Half the amount" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. У выращенного скота базиса нет: корма, ветеринария и прочие затраты уже были вычтены как текущие расходы.", en: "Correct. Raised livestock has no basis: feed, veterinary care and other costs were already deducted as current expenses." },
      B: { ru: "Вычитается базис, а не рыночная стоимость, и у выращенного скота базис отсутствует.", en: "It is basis that is subtracted, not fair market value, and raised livestock has none." },
      C: { ru: "Освобождения для продажи скота не существует.", en: "No exemption exists for livestock sales." },
      D: { ru: "Оснований делить выручку пополам нет.", en: "There is no basis for halving the proceeds." }
    }
  },
  {
    sec: "s24",
    ru: "Какое утверждение об усреднении дохода по Schedule J верно?",
    en: "Which statement about income averaging on Schedule J is correct?",
    opts: [
      { k: "A", ru: "Оно доступно любому индивидуальному предпринимателю", en: "It is available to any sole proprietor" },
      { k: "B", ru: "Оно позволяет перенести доход на три предыдущих года и обложить его по ставкам тех лет", en: "It spreads income back over the three prior years at those years’ rates" },
      { k: "C", ru: "Оно освобождает часть дохода от налога", en: "It exempts part of the income from tax" },
      { k: "D", ru: "Оно переносит доход на будущие годы", en: "It shifts income into future years" }
    ],
    correct: "B",
    why: {
      A: { ru: "Возможность предоставлена только фермерам и рыбакам.", en: "The election is limited to farmers and fishermen." },
      B: { ru: "Верно. Это способ сгладить последствия удачного года, а не уменьшить сам доход.", en: "Correct. It smooths the effect of a good year rather than reducing the income itself." },
      C: { ru: "Освобождения не происходит: меняются только применяемые ставки.", en: "Nothing is exempted: only the rates applied change." },
      D: { ru: "Перенос делается назад, на прошедшие годы, а не вперёд.", en: "The spreading is backward, to prior years, not forward." }
    }
  },
  {
    sec: "s22",
    ru: "Чистый заработок от самозанятости составил $410. Какие обязанности возникают?",
    en: "Net earnings from self-employment are $410. What obligations arise?",
    opts: [
      { k: "A", ru: "Никаких: сумма незначительна", en: "None: the amount is trivial" },
      { k: "B", ru: "Подаётся Schedule SE и уплачивается налог на самозанятость", en: "Schedule SE is filed and self-employment tax is paid" },
      { k: "C", ru: "Только подоходный налог, Schedule SE не нужен", en: "Income tax only; no Schedule SE" },
      { k: "D", ru: "Обязанность возникает начиная с $1 000", en: "The obligation begins at $1,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Порог составляет всего $400, и он превышен.", en: "The threshold is only $400 and it has been exceeded." },
      B: { ru: "Верно. Чистый заработок достиг порога $400, поэтому Schedule SE обязателен.", en: "Correct. Net earnings reached the $400 threshold, so Schedule SE is required." },
      C: { ru: "Подоходный налог начисляется, но и Schedule SE при таком заработке обязателен.", en: "Income tax applies, but Schedule SE is also required at this level of earnings." },
      D: { ru: "Такого порога в законе нет.", en: "No such threshold exists." }
    }
  },
  {
    sec: "s21",
    ru: "Ресторан списал долг поставщику: поставщик простил $12 000 задолженности. Налогоплательщик платёжеспособен и в банкротстве не находится. Каковы последствия?",
    en: "A restaurant’s supplier forgave $12,000 of debt. The taxpayer is solvent and not in bankruptcy. What are the consequences?",
    opts: [
      { k: "A", ru: "$12 000 дохода от списания долга", en: "$12,000 of cancellation of debt income" },
      { k: "B", ru: "Последствий нет: деньги не получены", en: "None: no money was received" },
      { k: "C", ru: "Уменьшается базис активов, дохода нет", en: "Basis in assets is reduced and there is no income" },
      { k: "D", ru: "$12 000 прироста капитала", en: "$12,000 of capital gain" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. По общему правилу прощённый долг образует доход; исключения для банкротства и неплатёжеспособности здесь не применяются.", en: "Correct. Forgiven debt is generally income; the bankruptcy and insolvency exceptions do not apply here." },
      B: { ru: "Освобождение от обязанности платить экономически равнозначно получению денег.", en: "Being relieved of an obligation is economically equivalent to receiving money." },
      C: { ru: "Уменьшение базиса применяется в случаях исключения дохода, например при неплатёжеспособности.", en: "Basis reduction applies where the income is excluded, such as under the insolvency exception." },
      D: { ru: "Это обычный доход, а не прирост капитала.", en: "This is ordinary income, not capital gain." }
    }
  },
  {
    sec: "s22",
    ru: "Какая часть налога на самозанятость не имеет предела базы?",
    en: "Which portion of the self-employment tax has no base limit?",
    opts: [
      { k: "A", ru: "Социальная часть", en: "The social security portion" },
      { k: "B", ru: "Часть Medicare", en: "The Medicare portion" },
      { k: "C", ru: "Обе части ограничены", en: "Both portions are capped" },
      { k: "D", ru: "Ни одна не ограничена", en: "Neither portion is capped" }
    ],
    correct: "B",
    why: {
      A: { ru: "Именно социальная часть ограничена базой $176 100.", en: "It is the social security portion that is capped at $176,100." },
      B: { ru: "Верно. Часть Medicare начисляется на весь чистый заработок без потолка.", en: "Correct. The Medicare portion applies to all net earnings with no ceiling." },
      C: { ru: "Ограничена только социальная часть.", en: "Only the social security portion is capped." },
      D: { ru: "Социальная часть ограничение имеет.", en: "The social security portion does have a limit." }
    }
  },
  {
    sec: "s22",
    ru: "Индивидуальный предприниматель получил $6 000 процентов по банковскому вкладу, открытому на средства бизнеса. Как это влияет на налог на самозанятость?",
    en: "A sole proprietor received $6,000 of interest on a bank account holding business funds. How does this affect self-employment tax?",
    opts: [
      { k: "A", ru: "Увеличивает базу на $6 000", en: "It increases the base by $6,000" },
      { k: "B", ru: "Увеличивает базу на $5 541", en: "It increases the base by $5,541" },
      { k: "C", ru: "В базу не входит", en: "It is not included in the base" },
      { k: "D", ru: "Уменьшает базу на $6 000", en: "It reduces the base by $6,000" }
    ],
    correct: "C",
    why: {
      A: { ru: "Проценты по вкладу не являются доходом от торговой деятельности.", en: "Bank interest is not income from a trade or business." },
      B: { ru: "Множитель применяется к чистому заработку от деятельности, а проценты в него не входят.", en: "The factor applies to net earnings from the business, and interest is not part of them." },
      C: { ru: "Верно. Проценты — инвестиционный доход; они облагаются подоходным налогом, но в базу налога на самозанятость не входят.", en: "Correct. Interest is investment income: subject to income tax, but outside the self-employment tax base." },
      D: { ru: "Доход базу не уменьшает.", en: "Income does not reduce the base." }
    }
  },
  {
    sec: "s22",
    ru: "Пенсионер 70 лет получает социальное пособие и подрабатывает консультантом с чистым заработком $25 000. Платит ли он налог на самозанятость?",
    en: "A 70-year-old retiree draws social security and consults on the side with $25,000 of net earnings. Does self-employment tax apply?",
    opts: [
      { k: "A", ru: "Нет: он уже получает социальное пособие", en: "No: he already receives social security" },
      { k: "B", ru: "Нет: после 65 лет налог не взимается", en: "No: the tax does not apply after age 65" },
      { k: "C", ru: "Да: возраст и получение пособия значения не имеют", en: "Yes: age and receipt of benefits are irrelevant" },
      { k: "D", ru: "Да, но только часть Medicare", en: "Yes, but only the Medicare portion" }
    ],
    correct: "C",
    why: {
      A: { ru: "Получение пособия от уплаты налога не освобождает.", en: "Receiving benefits does not exempt a person from the tax." },
      B: { ru: "Возрастного освобождения закон не предусматривает.", en: "The law provides no age-based exemption." },
      C: { ru: "Верно. Налог зависит только от размера чистого заработка, а не от возраста налогоплательщика.", en: "Correct. The tax depends solely on the amount of net earnings, not on the taxpayer’s age." },
      D: { ru: "Обе части начисляются в обычном порядке.", en: "Both portions apply in the ordinary way." }
    }
  },
  {
    sec: "s24",
    ru: "Что показывает форма 1099-G фермеру?",
    en: "What does a farmer’s Form 1099-G report?",
    opts: [
      { k: "A", ru: "Выплаты по государственным сельскохозяйственным программам", en: "Agricultural program payments" },
      { k: "B", ru: "Кооперативные выплаты", en: "Patronage dividends" },
      { k: "C", ru: "Выручку от продажи скота", en: "Proceeds from livestock sales" },
      { k: "D", ru: "Страховые выплаты за урожай", en: "Crop insurance proceeds" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Форма 1099-G отражает выплаты от государственных органов, включая сельскохозяйственные программы.", en: "Correct. Form 1099-G reports government payments, including agricultural program payments." },
      B: { ru: "Кооперативные выплаты отражаются в форме 1099-PATR.", en: "Patronage dividends are reported on Form 1099-PATR." },
      C: { ru: "Продажи скота информационной декларацией такого вида не оформляются.", en: "Livestock sales are not reported on this type of information return." },
      D: { ru: "Страховые выплаты поступают от страховой компании, а не от государственного органа.", en: "Insurance proceeds come from an insurer, not from a government agency." }
    }
  },
  {
    sec: "s22",
    ru: "За год получено: зарплата от собственной S-корпорации $12 000, её распределяемая прибыль $34 000, гонорар члена совета директоров $3 500 и страховая выплата за упущенный доход от прекращения деятельности $7 600. Каков чистый заработок от самозанятости?",
    en: "For the year: $12,000 salary from your own S corporation, $34,000 of its distributive income, a $3,500 director’s fee, and $7,600 of insurance for income lost when a business ceased. What are net earnings from self-employment?",
    opts: [
      { k: "A", ru: "$3 500", en: "$3,500" },
      { k: "B", ru: "$11 100", en: "$11,100" },
      { k: "C", ru: "$23 100", en: "$23,100" },
      { k: "D", ru: "$57 100", en: "$57,100" }
    ],
    correct: "B",
    why: {
      A: { ru: "Гонорар директора действительно входит, но возмещение упущенного дохода входит тоже: оно замещает прибыль, которая облагалась бы налогом на самозанятость.", en: "The director’s fee does belong, but so does the payment for lost income: it stands in for profit that would itself have borne self-employment tax." },
      B: { ru: "Верно. $3 500 гонорара + $7 600 возмещения упущенного дохода. Зарплата от S-корпорации — доход работника, доля прибыли S-корпорации в базу не входит.", en: "Correct. The $3,500 fee plus $7,600 for lost income. The S corporation salary is employee income and its distributive share stays out of the base." },
      C: { ru: "Здесь ошибочно добавлена зарплата от S-корпорации: она облагается обычными взносами через удержание, а не налогом на самозанятость.", en: "This wrongly adds the S corporation salary: it bears ordinary payroll taxes through withholding, not self-employment tax." },
      D: { ru: "Добавлена вся доля прибыли S-корпорации — самая частая ошибка темы.", en: "This adds the entire S corporation distributive share, the commonest error in the topic." }
    }
  },
  {
    sec: "s22",
    ru: "Чей доход от аренды недвижимости облагается налогом на самозанятость?",
    en: "Whose rental income from real estate is subject to self-employment tax?",
    opts: [
      { k: "A", ru: "Владельца жилого дома, сдающего квартиры без дополнительных услуг", en: "The owner of an apartment house who provides no services to tenants" },
      { k: "B", ru: "Дилера недвижимости, получающего аренду с имущества, предназначенного к продаже покупателям", en: "A real estate dealer receiving rent on property held for sale to customers" },
      { k: "C", ru: "Владельца земли, сдающего её фермеру за долю урожая без материального участия", en: "A landowner renting to a farmer for a crop share without material participation" },
      { k: "D", ru: "Наследника, сдающего унаследованное помещение по долгосрочному договору", en: "An heir letting inherited premises on a long-term lease" }
    ],
    correct: "B",
    why: {
      A: { ru: "Без оказания услуг это пассивная аренда: Schedule E, налога на самозанятость нет.", en: "Without services this is passive renting: Schedule E, no self-employment tax." },
      B: { ru: "Верно. Аренда, полученная в рамках деятельности дилера недвижимости, входит в базу. Так же облагается доход владельца гостиницы, оказывающего услуги постояльцам.", en: "Correct. Rent received in the course of a real estate dealer’s business is in the base. So is the income of a hotel owner providing services to guests." },
      C: { ru: "Это аренда фермы без материального участия: форма 4835, налога на самозанятость нет.", en: "That is farm rental without material participation: Form 4835, no self-employment tax." },
      D: { ru: "Способ получения имущества к базе отношения не имеет; значение имеет только деятельность.", en: "How the property was acquired is irrelevant; only the activity matters." }
    }
  },
  {
    sec: "s22",
    ru: "Что из перечисленного уменьшает базу налога на самозанятость?",
    en: "Which of the following reduces the self-employment tax base?",
    opts: [
      { k: "A", ru: "Взносы владельца в собственный пенсионный план", en: "The owner’s contributions to their own retirement plan" },
      { k: "B", ru: "Премии по медицинскому страхованию самозанятого", en: "The self-employed health insurance premium" },
      { k: "C", ru: "Коммунальные расходы помещения, где ведётся деятельность", en: "Utilities for the premises where the business operates" },
      { k: "D", ru: "Чистый операционный убыток прошлого года", en: "A prior-year net operating loss" }
    ],
    correct: "C",
    why: {
      A: { ru: "Взнос вычитается в Schedule 1, то есть ниже Schedule C. Облагаемый подоходным налогом доход он уменьшает, базу самозанятости — нет.", en: "The contribution is deducted on Schedule 1, below Schedule C. It reduces income subject to income tax, not the self-employment base." },
      B: { ru: "Премия тоже вычитается в Schedule 1 и базу не затрагивает.", en: "The premium is likewise a Schedule 1 deduction and leaves the base untouched." },
      C: { ru: "Верно. Это обычный деловой расход Schedule C, а Schedule SE берёт именно чистую прибыль Schedule C.", en: "Correct. It is an ordinary Schedule C business expense, and Schedule SE takes the Schedule C net profit." },
      D: { ru: "Чистые операционные убытки прошлых лет прямо исключены из расчёта чистого заработка.", en: "Net operating losses from other years are expressly excluded from net earnings." }
    }
  },
  {
    sec: "s21",
    ru: "В 2024 году бизнес на методе начисления вычел безнадёжный долг $11 000; год закончен с прибылью. В 2025 году взыскано $6 800. Как отражается взыскание?",
    en: "In 2024 an accrual-basis business deducted an $11,000 bad debt and ended the year profitable. In 2025 it recovered $6,800. How is the recovery reported?",
    opts: [
      { k: "A", ru: "Прочий доход в Schedule C за 2025 год", en: "Other income on the 2025 Schedule C" },
      { k: "B", ru: "Прочий доход в Schedule 1 формы 1040 за 2025 год", en: "Other income on Schedule 1 of the 2025 Form 1040" },
      { k: "C", ru: "Уменьшение вычета по безнадёжным долгам в Schedule C за 2025 год", en: "A reduction of the 2025 Schedule C bad debt deduction" },
      { k: "D", ru: "Уточнённая декларация за 2024 год", en: "An amended 2024 return" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Доход остаётся деловым, значит показывается прочим доходом в Schedule C того года, когда получен.", en: "Correct. The income stays business income and is reported as other income on the Schedule C of the year received." },
      B: { ru: "Schedule 1 предназначен для внеделовых поступлений; здесь долг возник в бизнесе.", en: "Schedule 1 is for non-business receipts; here the debt arose in the business." },
      C: { ru: "Вычет текущего года к прошлому взысканию отношения не имеет: это разные долги.", en: "The current year’s deduction is unrelated to an earlier recovery: these are different debts." },
      D: { ru: "Прошлый год не уточняют: тогда списание было правомерным, и ошибки в декларации нет.", en: "The earlier year is not amended: the write-off was correct then and the return contains no error." }
    }
  },
  {
    sec: "s21",
    ru: "Заёмщик взял в банке $20 000 на покупку станка. Банк продавцом станка не был. Позже банк, при том что заёмщик платёжеспособен, уменьшил долг на $10 000. Что происходит?",
    en: "A borrower took a $20,000 bank loan to buy a machine. The bank was not the seller. Later, while the borrower was solvent, the bank reduced the debt by $10,000. What follows?",
    opts: [
      { k: "A", ru: "Уменьшается базис станка, дохода нет", en: "The machine’s basis is reduced and there is no income" },
      { k: "B", ru: "Возникает доход $10 000", en: "There is $10,000 of income" },
      { k: "C", ru: "Последствия откладываются до окончательного погашения", en: "The tax effect waits until the debt is finally repaid" },
      { k: "D", ru: "Стоимость станка списывается на величину снисхождения", en: "The machine’s carrying cost is written down by the amount of the relief" }
    ],
    correct: "B",
    why: {
      A: { ru: "Уменьшение базиса вместо дохода возможно, когда долг уменьшил сам <em>продавец</em> имущества. Банк продавцом не был.", en: "Reducing basis instead of income applies when the <em>seller</em> of the property reduces the debt. The bank was not the seller." },
      B: { ru: "Верно. Прощение долга даёт доход, если нет банкротства, неплатёжеспособности или иного специального исключения.", en: "Correct. Cancelled debt produces income absent bankruptcy, insolvency or another specific exception." },
      C: { ru: "Доход возникает в году прощения, а не в году погашения остатка.", en: "The income arises in the year of forgiveness, not when the balance is repaid." },
      D: { ru: "Списание стоимости вместо дохода — это правило для снисхождения от продавца, а не от постороннего кредитора.", en: "Writing the cost down instead of reporting income is the seller-relief rule, not one for an outside lender." }
    }
  },
  {
    sec: "s24",
    ru: "Фермер продал выращенную трёхлетнюю молочную корову за $1 450, заплатив $130 за доставку и комиссию. Как отражается сделка?",
    en: "A farmer sold a raised three-year-old dairy cow for $1,450, paying $130 in shipping and commissions. How is the sale reported?",
    opts: [
      { k: "A", ru: "Прирост $1 320 по §1231 в форме 4797", en: "A $1,320 section 1231 gain on Form 4797" },
      { k: "B", ru: "Прирост $1 320 по §1245 в форме 4797", en: "A $1,320 section 1245 gain on Form 4797" },
      { k: "C", ru: "Доход $1 320 в Schedule F как обычный фермерский доход", en: "$1,320 of ordinary farm income on Schedule F" },
      { k: "D", ru: "Убыток, поскольку выращивание коровы обошлось дороже", en: "A loss, since raising the cow cost more than that" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Молочный скот — средство производства фермы; при владении не менее 24 месяцев продажа даёт прирост по §1231. Расходы на продажу уменьшают выручку: $1 450 − $130.", en: "Correct. Dairy livestock is a means of production; held at least 24 months, the sale gives a section 1231 gain. Selling expenses reduce the amount realised: $1,450 − $130." },
      B: { ru: "Форма верна, норма — нет: §1245 возвращает ранее взятую амортизацию, а у выращенного животного её не было.", en: "The form is right, the provision is not: section 1245 recaptures depreciation, and a raised animal had none." },
      C: { ru: "В Schedule F идут выращенные и купленные <em>на продажу</em> продукция и скот. Молочное стадо к ним не относится.", en: "Schedule F carries products and livestock raised or bought <em>for sale</em>. A dairy herd is not among them." },
      D: { ru: "Затраты на корма и уход уже вычтены в те годы, когда они понесены; базиса у выращенного животного нет, и второй раз их не вычитают.", en: "Feed and care were already deducted in the years incurred; a raised animal has no basis and they are not deducted twice." }
    }
  },
  {
    sec: "s24",
    ru: "Фермер продал сена на $37 500, племенных коров на $19 800, получил кооперативные выплаты $268, помощь на корма $940 и $2 150 за прессование сена у соседа. Какая сумма идёт в Schedule F?",
    en: "A farmer sold $37,500 of hay and $19,800 of breeding cows, and received $268 of patronage dividends, $940 of feed assistance and $2,150 for custom baling on a neighbour’s land. What goes on Schedule F?",
    opts: [
      { k: "A", ru: "$40 590", en: "$40,590" },
      { k: "B", ru: "$40 858", en: "$40,858" },
      { k: "C", ru: "$60 390", en: "$60,390" },
      { k: "D", ru: "$60 658", en: "$60,658" }
    ],
    correct: "B",
    why: {
      A: { ru: "Здесь выброшены кооперативные выплаты: они относятся к деятельности фермы и в Schedule F входят.", en: "This drops the patronage dividends: they relate to the farming business and belong on Schedule F." },
      B: { ru: "Верно. $37 500 + $268 + $940 + $2 150 = $40 858. Продажа племенных коров идёт в форму 4797.", en: "Correct. $37,500 + $268 + $940 + $2,150 = $40,858. The breeding cows go on Form 4797." },
      C: { ru: "Добавлены племенные коровы и выброшены кооперативные выплаты — обе ошибки сразу.", en: "This adds the breeding cows and drops the patronage dividends — both errors at once." },
      D: { ru: "Добавлены племенные коровы: их продажа в Schedule F не показывается никогда.", en: "This adds the breeding cows, whose sale never appears on Schedule F." }
    }
  },
  {
    sec: "s24",
    ru: "Какое условие не требуется для отсрочки дохода по §451(g) при вынужденной погодной продаже скота?",
    en: "Which condition is NOT required for the section 451(g) postponement on a weather-forced sale of livestock?",
    opts: [
      { k: "A", ru: "Основная деятельность налогоплательщика — фермерство", en: "The taxpayer’s principal business is farming" },
      { k: "B", ru: "Применяется метод начисления", en: "The taxpayer uses the accrual method" },
      { k: "C", ru: "Погодные условия вызвали признание местности имеющей право на федеральную помощь", en: "The weather caused the area to be designated eligible for federal assistance" },
      { k: "D", ru: "При обычном ведении дел лишние животные в этом году проданы бы не были", en: "Under usual practice the additional animals would not have been sold this year" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это одно из четырёх обязательных условий.", en: "That is one of the four required conditions." },
      B: { ru: "Верно, поскольку требуется прямо обратное: отсрочка доступна только при <strong>кассовом</strong> методе учёта.", en: "Correct, because the opposite is required: the postponement is available only on the <strong>cash</strong> method." },
      C: { ru: "Объявление зоны для §451(g) обязательно — в отличие от §1033(e), где оно не требуется.", en: "The designation is required for section 451(g) — unlike section 1033(e), where it is not." },
      D: { ru: "Это тоже одно из четырёх условий.", en: "That too is one of the four conditions." }
    }
  },
  {
    sec: "s24",
    ru: "Фермер на кассовом методе обычно продаёт 150 голов коз в год. Из-за засухи в 2025 году продано 180 голов на $27 000, местность объявлена зоной бедствия. Какую сумму можно отложить на 2026 год?",
    en: "A cash-method farmer normally sells 150 goats a year. Because of drought, 180 were sold in 2025 for $27,000 and the area was declared a disaster area. How much may be postponed to 2026?",
    opts: [
      { k: "A", ru: "$4 500", en: "$4,500" },
      { k: "B", ru: "$5 400", en: "$5,400" },
      { k: "C", ru: "$27 000", en: "$27,000" },
      { k: "D", ru: "Ничего: правило действует только при засухе в отношении племенного скота", en: "Nothing: the rule covers only breeding livestock in a drought" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Цена головы $27 000 ÷ 180 = $150; лишних голов 180 − 150 = 30; 30 × $150 = $4 500.", en: "Correct. Per head: $27,000 ÷ 180 = $150; additional head: 180 − 150 = 30; 30 × $150 = $4,500." },
      B: { ru: "$5 400 получается, если разделить выручку на обычные 150 голов вместо фактически проданных 180. Цена головы берётся из фактической продажи.", en: "$5,400 divides the proceeds by the normal 150 head instead of the 180 actually sold. The per-head price comes from the actual sale." },
      C: { ru: "Откладывается доход только от лишних животных, а не вся выручка года.", en: "Only the income from the additional animals is postponed, not the year’s whole proceeds." },
      D: { ru: "§451(g) охватывает любой скот, включая птицу, и любое погодное явление — засуху, наводнение или иное.", en: "Section 451(g) covers all livestock including poultry, and any weather-related condition — drought, flood or otherwise." }
    }
  },
  {
    sec: "s24",
    ru: "Чем §1033(e) отличается от §451(g) при продаже скота из-за погоды?",
    en: "How does section 1033(e) differ from section 451(g) on a weather-related sale of livestock?",
    opts: [
      { k: "A", ru: "Требует объявления зоны бедствия, но не требует покупки замены", en: "It requires a disaster designation but no replacement purchase" },
      { k: "B", ru: "Требует покупки замены, но не требует объявления зоны бедствия", en: "It requires a replacement purchase but no disaster designation" },
      { k: "C", ru: "Охватывает любой скот, включая птицу", en: "It covers all livestock, including poultry" },
      { k: "D", ru: "Даёт отсрочку ровно на один год", en: "It postpones the income for exactly one year" }
    ],
    correct: "B",
    why: {
      A: { ru: "Всё наоборот: объявление зоны обязательно для §451(g), а замена — для §1033(e).", en: "It is the other way round: the designation belongs to section 451(g), the replacement to section 1033(e)." },
      B: { ru: "Верно. §1033(e) работает как вынужденное выбытие: прирост не признаётся, если куплена замена — в течение двух лет с конца года продажи, а в местности, имеющей право на федеральную помощь, — четырёх.", en: "Correct. Section 1033(e) works as an involuntary conversion: the gain is not recognised if replacements are bought within two years of the end of the year of sale, or four years where the area is eligible for federal assistance." },
      C: { ru: "Любой скот, включая птицу, охватывает §451(g). §1033(e) — только тягловый, племенной и молочный.", en: "All livestock including poultry belongs to section 451(g). Section 1033(e) covers draft, breeding and dairy only." },
      D: { ru: "Отсрочку на один год даёт §451(g); §1033(e) даёт непризнание прироста при замене.", en: "The one-year postponement is section 451(g); section 1033(e) gives nonrecognition on replacement." }
    }
  },
  {
    sec: "s24",
    ru: "Фермер обязан внести расчётный налог. Налог за 2025 год составит $30 000, в декларации за 2024 год показано $19 000. Каков обязательный годовой платёж?",
    en: "A qualified farmer must pay estimated tax. The 2025 tax will be $30,000 and the 2024 return showed $19,000. What is the required annual payment?",
    opts: [
      { k: "A", ru: "$12 667 — две трети налога за 2024 год", en: "$12,667 — two-thirds of the 2024 tax" },
      { k: "B", ru: "$19 000 — 100% налога за 2024 год", en: "$19,000 — 100% of the 2024 tax" },
      { k: "C", ru: "$20 000 — 66⅔% налога за 2025 год", en: "$20,000 — 66 2/3% of the 2025 tax" },
      { k: "D", ru: "$30 000 — весь налог за 2025 год", en: "$30,000 — the whole 2025 tax" }
    ],
    correct: "B",
    why: {
      A: { ru: "Годы перепутаны: две трети берутся от налога <em>текущего</em> года, а от прошлого берутся все сто процентов.", en: "The years are swapped: two-thirds applies to the <em>current</em> year, while the prior year is taken at one hundred percent." },
      B: { ru: "Верно. Платёж — меньшая из величин: 66⅔% от $30 000 = $20 000 либо 100% от $19 000 = $19 000. Меньшая — $19 000.", en: "Correct. The payment is the smaller of 66 2/3% of $30,000 = $20,000 and 100% of $19,000 = $19,000. The smaller is $19,000." },
      C: { ru: "Это одна из двух величин, но берётся не бо́льшая, а меньшая.", en: "That is one of the two figures, but the smaller is taken, not the larger." },
      D: { ru: "Полная сумма налога уплачивается, если фермер выбирает подать декларацию и уплатить всё к сроку в марте, а не платить расчётный налог.", en: "The full tax is paid where the farmer chooses to file and pay everything by the March date instead of paying estimated tax." }
    }
  },
  {
    sec: "s24",
    ru: "Что не входит в валовой доход от фермерства при проверке доли в две трети?",
    en: "Which is NOT gross income from farming for the two-thirds test?",
    opts: [
      { k: "A", ru: "Доля урожая, полученная за пользование вашей землёй", en: "Crop shares received for the use of your land" },
      { k: "B", ru: "Валовой доход от аренды фермы по форме 4835", en: "Gross farm rental income from Form 4835" },
      { k: "C", ru: "Заработная плата, полученная как наёмный работник фермы", en: "Wages received as a farm employee" },
      { k: "D", ru: "Прирост от продажи скота для разведения, тягла, спорта или дойки", en: "Gains from sales of breeding, draft, sporting or dairy livestock" }
    ],
    correct: "C",
    why: {
      A: { ru: "Доли урожая за пользование землёй прямо названы фермерским доходом.", en: "Crop shares for the use of land are expressly farm income." },
      B: { ru: "Валовой доход от аренды фермы по форме 4835 входит в числитель.", en: "Gross farm rental income on Form 4835 belongs in the numerator." },
      C: { ru: "Верно. Работа по найму фермерским доходом не является: зарплата попадает только в знаменатель, каким бы ни был работодатель.", en: "Correct. Employment is not farm income: wages go into the denominator only, whoever the employer is." },
      D: { ru: "Прирост от продажи племенного, тяглового, спортивного и молочного скота прямо включён.", en: "Gains from breeding, draft, sporting and dairy livestock are expressly included." }
    }
  },
  {
    sec: "s24",
    ru: "Кто вправе применить усреднение дохода по Schedule J?",
    en: "Who may use income averaging on Schedule J?",
    opts: [
      { k: "A", ru: "Физическое лицо, партнёр партнёрства и акционер S-корпорации", en: "An individual, a partner in a partnership and an S corporation shareholder" },
      { k: "B", ru: "Физическое лицо, а также партнёрство и S-корпорация как самостоятельные субъекты", en: "An individual, plus a partnership and an S corporation acting as entities in their own right" },
      { k: "C", ru: "Физическое лицо, наследственная масса и траст", en: "An individual, an estate and a trust" },
      { k: "D", ru: "Только физическое лицо, лично ведущее ферму", en: "Only an individual personally operating a farm" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Усреднение применяет тот, кто ведёт фермерскую деятельность сам, через партнёрство либо через S-корпорацию. Услуги в качестве работника при этом не учитываются.", en: "Correct. Averaging is for someone engaged in the farming business directly, through a partnership or through an S corporation. Services as an employee are disregarded." },
      B: { ru: "Партнёрства, S-корпорации и корпорации усреднение применять не могут — только их участники как физические лица.", en: "Partnerships, S corporations and corporations may not average — only their owners as individuals." },
      C: { ru: "Наследственные массы и трасты прямо лишены этой возможности.", en: "Estates and trusts are expressly barred." },
      D: { ru: "Ограничение слишком узкое: фермерский доход, полученный через партнёрство или S-корпорацию, тоже подходит.", en: "That is too narrow: farm income received through a partnership or an S corporation qualifies too." }
    }
  },
  {
    sec: "s24",
    ru: "Фермер на кассовом методе в декабре 2025 года купил удобрений на $7 500 для внесения в 2026 году. Прочие вычитаемые фермерские расходы 2025 года — $9 000. В прошлые годы предоплата у него тоже превышала обычную. Когда вычитаются удобрения?",
    en: "In December 2025 a cash-method farmer bought $7,500 of fertiliser to be applied in 2026. Other deductible farm expenses for 2025 were $9,000, and prepayments exceeded the norm in earlier years too. When is the fertiliser deductible?",
    opts: [
      { k: "A", ru: "$7 500 в 2025 году", en: "$7,500 in 2025" },
      { k: "B", ru: "$4 500 в 2025 году и $3 000 в 2026 году", en: "$4,500 in 2025 and $3,000 in 2026" },
      { k: "C", ru: "$3 750 в 2025 году и $3 750 в 2026 году", en: "$3,750 in 2025 and $3,750 in 2026" },
      { k: "D", ru: "$7 500 в 2026 году", en: "$7,500 in 2026" }
    ],
    correct: "B",
    why: {
      A: { ru: "Полный вычет в году оплаты и есть то, что норма ограничивает: иначе кассовый метод позволял бы переносить прибыль закупками в декабре.", en: "A full deduction in the year of payment is exactly what the rule limits: otherwise the cash method would let profit be shifted by December buying." },
      B: { ru: "Верно. Предел — 50% прочих вычитаемых фермерских расходов года: 50% от $9 000 = $4 500. Излишек $3 000 вычитается в году, когда удобрения внесены.", en: "Correct. The limit is 50% of the year’s other deductible farm expenses: 50% of $9,000 = $4,500. The $3,000 excess is deducted in the year the fertiliser is applied." },
      C: { ru: "Предел считается от прочих расходов года, а не делением предоплаты пополам.", en: "The limit is measured against the year’s other expenses, not by halving the prepayment." },
      D: { ru: "Разрешённая часть вычитается уже в году оплаты; переносится только излишек.", en: "The permitted part is deducted in the year of payment; only the excess carries forward." }
    }

  },
  {
    sec: "s21",
    ru: "Владелец бизнеса на кассовом методе поручил заказчику перечислить $12 000 за уже выполненную работу напрямую банку — в погашение личного кредита владельца. Заказчик так и сделал. Как отражается сумма?",
    en: "A cash-method business owner directed a client to send $12,000 for work already done straight to a bank, to pay down the owner’s personal loan. The client did so. How is the amount reported?",
    opts: [
      { k: "A", ru: "Не отражается: владелец денег не получал", en: "Not reported: the owner never received the money" },
      { k: "B", ru: "$12 000 в валовую выручку владельца", en: "$12,000 in the owner’s gross receipts" },
      { k: "C", ru: "$12 000 отражает банк", en: "The bank reports the $12,000" },
      { k: "D", ru: "$12 000 отражается как доход от списания долга", en: "$12,000 is reported as cancellation of debt income" }
    ],
    correct: "B",
    why: {
      A: { ru: "Распоряжение о том, куда направить оплату, налогоплательщика не меняет.", en: "An instruction about where to send the payment does not change the taxpayer." },
      B: { ru: "Верно. Доход заработал владелец, и то, что деньги пошли на погашение его личного долга чужими руками, этого не отменяет.", en: "Correct. The owner earned the income, and the fact that it went to pay the owner’s personal debt through someone else’s hands changes nothing." },
      C: { ru: "Банк получил погашение выданного кредита, а не доход от оказанных услуг.", en: "The bank received repayment of a loan it made, not income from services." },
      D: { ru: "Списания долга не произошло: долг погашен полностью, а не прощён кредитором.", en: "No debt was cancelled: the loan was paid in full, not forgiven." }
    }
  },
  {
    sec: "s21",
    ru: "В марте владелец подарил совершеннолетней дочери сдаваемое в аренду оборудование вместе с договором аренды. Арендная плата за январь—март составила $6 000, за апрель—декабрь — $18 000. Как распределяется доход?",
    en: "In March an owner gave an adult daughter a piece of leased equipment together with the lease. Rent for January–March was $6,000 and for April–December $18,000. How is the income split?",
    opts: [
      { k: "A", ru: "Весь доход $24 000 у отца", en: "All $24,000 to the father" },
      { k: "B", ru: "$6 000 у отца, $18 000 у дочери", en: "$6,000 to the father and $18,000 to the daughter" },
      { k: "C", ru: "Весь доход $24 000 у дочери", en: "All $24,000 to the daughter" },
      { k: "D", ru: "По $12 000 у каждого", en: "$12,000 to each" }
    ],
    correct: "B",
    why: {
      A: { ru: "Передан сам источник дохода, а не право на уже заработанные суммы, поэтому доход после дарения принадлежит новому владельцу.", en: "The source itself was transferred, not merely a right to amounts already earned, so income after the gift belongs to the new owner." },
      B: { ru: "Верно. Передать можно источник дохода: плата за периоды после дарения — доход дочери, а заработанное до него остаётся у отца.", en: "Correct. The source may be transferred: rent for periods after the gift is the daughter’s income, while what was earned before it stays with the father." },
      C: { ru: "Доход, заработанный до дарения, вместе с имуществом не переходит.", en: "Income earned before the gift does not travel with the property." },
      D: { ru: "Доход делится по фактическим периодам пользования, а не поровну.", en: "The income is split by the actual rental periods, not evenly." }
    }
  },
  {
    sec: "s21",
    ru: "По условиям договора арендатор уплатил за арендодателя страховой взнос $3 400 в январе 2026 года. Счёт был выставлен арендодателю в ноябре 2025 года. Арендодатель применяет кассовый метод. Когда сумма попадает в его валовую выручку?",
    en: "Under the lease the tenant paid a $3,400 insurance premium on the landlord’s behalf in January 2026. The bill had been issued to the landlord in November 2025. The landlord uses the cash method. When does the amount enter gross receipts?",
    opts: [
      { k: "A", ru: "В 2025 году — по дате выставления счёта", en: "In 2025, by the date of the bill" },
      { k: "B", ru: "В 2026 году — в момент уплаты арендатором", en: "In 2026, when the tenant pays" },
      { k: "C", ru: "Не попадает: платил арендатор, а не арендодатель", en: "Never: the tenant paid, not the landlord" },
      { k: "D", ru: "Делится поровну между 2025 и 2026 годами", en: "Split evenly between 2025 and 2026" }
    ],
    correct: "B",
    why: {
      A: { ru: "Дата выставления счёта значения не имеет: доход возникает от платежа, а не от обязанности.", en: "The date of the bill does not matter: the income arises from the payment, not from the obligation." },
      B: { ru: "Верно. Платёж арендатора по обязательствам арендодателя включается в валовую выручку арендодателя в момент, когда арендатор платит.", en: "Correct. A tenant’s payment of the landlord’s obligations is included in the landlord’s gross receipts when the tenant makes the payment." },
      C: { ru: "Арендатор погасил обязательство арендодателя — это доход арендодателя, хотя денег он в руки не получил.", en: "The tenant discharged the landlord’s obligation, which is the landlord’s income even though no money passed through their hands." },
      D: { ru: "Основания для деления нет: платёж совершён один раз и в одном году.", en: "There is nothing to split: the payment was made once and in one year." }
    }
  },
  {
    sec: "s21",
    ru: "Бизнес на методе начисления получил за год: доход от услуг $25 000, прирост от продажи станка $1 500, проценты по счетам покупателей $3 000. Какова валовая выручка в Schedule C?",
    en: "For the year an accrual-basis business received: service income of $25,000, a gain of $1,500 on the sale of a machine and $3,000 of interest on accounts receivable. What are its gross receipts on Schedule C?",
    opts: [
      { k: "A", ru: "$25 000", en: "$25,000" },
      { k: "B", ru: "$26 500", en: "$26,500" },
      { k: "C", ru: "$28 000", en: "$28,000" },
      { k: "D", ru: "$29 500", en: "$29,500" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Валовая выручка — строка 1, и в неё идёт только выручка от того, чем бизнес занимается. Проценты по счетам покупателей — прочий доход, строка 6; прирост от продажи станка в Schedule C не попадает вовсе, он в форме 4797.", en: "Correct. Gross receipts are line 1, and only the receipts from what the business does go there. Interest on accounts receivable is other income, line 6; the gain on the machine is not on Schedule C at all but on Form 4797." },
      B: { ru: "Прирост от продажи станка добавлен напрасно. Выбытие делового имущества показывается в форме 4797, а не в Schedule C, — и в базу налога на самозанятость оно тоже не входит.", en: "The gain on the machine has been added in error. Disposing of business property is reported on Form 4797, not Schedule C — and it is outside the self-employment base as well." },
      C: { ru: "Проценты по счетам покупателей — доход бизнеса, но не валовая выручка: им место в строке 6. В прибыль и в базу самозанятости они попадут, а в ответ на этот вопрос — нет.", en: "Interest on accounts receivable is business income but not gross receipts: its place is line 6. It reaches profit and the self-employment base, but not the answer to this question." },
      D: { ru: "Сложено всё подряд. Из трёх сумм в строку 1 идёт одна, и различать их приходится именно потому, что вопрос спрашивает про выручку, а не про прибыль.", en: "Everything has simply been added up. Of the three amounts only one belongs on line 1, and telling them apart is required precisely because the question asks about receipts, not profit." }
    }
  },
  {
    sec: "s21",
    ru: "Магазин продал товара на $180 000 и дополнительно собрал с покупателей $14 400 налога с продаж, который по закону штата лежит на покупателе. Налог перечислен в бюджет. Что показывается в валовой выручке?",
    en: "A shop sold $180,000 of goods and additionally collected $14,400 of sales tax from customers, a tax imposed by state law on the buyer. The tax was remitted. What goes into gross receipts?",
    opts: [
      { k: "A", ru: "$194 400, а перечисленный налог — вычитаемый расход", en: "$194,400, with the remitted tax as a deductible expense" },
      { k: "B", ru: "$180 000", en: "$180,000" },
      { k: "C", ru: "$194 400, и вычета нет: налог платил покупатель", en: "$194,400, with no deduction: the buyer paid the tax" },
      { k: "D", ru: "$165 600 — выручка за вычетом налога", en: "$165,600 — receipts net of the tax" }
    ],
    correct: "B",
    why: {
      A: { ru: "Итог по прибыли сойдётся, а ответ всё равно неверен: показывать в доходе и тут же вычитать то, что доходом не было, — не тот порядок. И вопрос спрашивает про выручку.", en: "The bottom line would come out the same, yet the answer is wrong: putting into income what was never income and deducting it again is not the right treatment. And the question asks about receipts." },
      B: { ru: "Верно. Налог, возложенный законом на покупателя, продавец лишь собирает и перечисляет. С момента продажи это его обязательство перед бюджетом, а не выручка: в доход он не идёт и в расходы, соответственно, тоже.", en: "Correct. A tax the law imposes on the buyer is merely collected and remitted by the seller. From the moment of sale it is a liability to the state, not a receipt: it goes into neither income nor expenses." },
      C: { ru: "Этот вариант удваивает налог: он и в доход попал, и вычета не получил. Правильный ход — не включать его вовсе.", en: "This choice taxes the amount twice over: it went into income and got no deduction. The right course is to leave it out altogether." },
      D: { ru: "Вычитать нечего: $14 400 в $180 000 и не входили. Сумма собрана сверх цены.", en: "There is nothing to subtract: the $14,400 was never inside the $180,000. It was collected on top of the price." }
    }
  },
  {
    sec: "s21",
    ru: "Владелец облигаций хочет, чтобы проценты за будущие годы облагались у совершеннолетней дочери. В каком случае это получится?",
    en: "A bondholder wants the interest of future years to be taxed to an adult daughter. When does that work?",
    opts: [
      { k: "A", ru: "Если он письменно поручит эмитенту перечислять купон дочери", en: "If he instructs the issuer in writing to pay the coupon to the daughter" },
      { k: "B", ru: "Если он подарит дочери сами облигации, не сохранив над ними контроля, — на проценты, начисленные после дарения", en: "If he gives her the bonds themselves, retaining no control over them — as to interest accruing after the gift" },
      { k: "C", ru: "Если он подарит дочери право на проценты, оставив облигации себе", en: "If he gives her the right to the interest, keeping the bonds himself" },
      { k: "D", ru: "Ни в каком: доход по облигациям всегда облагается у первоначального владельца", en: "In no case: bond income is always taxed to the original owner" }
    ],
    correct: "B",
    why: {
      A: { ru: "Распоряжение о том, куда направить деньги, меняет получателя, но не налогоплательщика. Передан не источник, а сам доход, и облагается он по-прежнему у владельца.", en: "An instruction about where to send the money changes the recipient, not the taxpayer. What was transferred is the income, not the source, and it is still taxed to the owner." },
      B: { ru: "Верно, и все три условия здесь налицо: передача полная и настоящая, контроль не сохранён, совершена до того, как проценты заработаны. Купон, уже причитавшийся к моменту дарения, остаётся у дарителя.", en: "Correct, and all three conditions hold: the transfer is complete and bona fide, no control is retained, and it precedes the earning of the interest. The coupon already accrued at the moment of the gift stays with the donor." },
      C: { ru: "Это передача плода без дерева. Источник остался у владельца, значит и доход остаётся его.", en: "This is handing over the fruit without the tree. The source stayed with the owner, so the income stays his too." },
      D: { ru: "Слишком сильно. Передать источник можно, и тогда доход после передачи облагается у нового владельца. Нельзя передать доход отдельно от источника.", en: "Too strong. The source may be transferred, and then income arising after the transfer is taxed to the new owner. What cannot be transferred is the income apart from the source." }
    }
  },
  {
    sec: "s21",
    ru: "Корпорация выпустила пятилетние облигации номиналом $40 000 и выручила за них $43 000. Как отражается разница?",
    en: "A corporation issued five-year bonds with a face amount of $40,000 and received $43,000 for them. How is the difference treated?",
    opts: [
      { k: "A", ru: "$3 000 дохода в году выпуска", en: "$3,000 of income in the year of issue" },
      { k: "B", ru: "Доход признаётся по мере амортизации премии — за срок обращения облигаций", en: "Income is recognised as the premium is amortised — over the life of the bonds" },
      { k: "C", ru: "Дохода нет: это заёмные средства", en: "No income: these are borrowed funds" },
      { k: "D", ru: "$3 000 дохода в году погашения облигаций", en: "$3,000 of income in the year the bonds are redeemed" }
    ],
    correct: "B",
    why: {
      A: { ru: "Вся премия сразу — соблазнительный, но неверный ход. Она относится ко всему сроку обращения и распределяется по нему.", en: "The whole premium at once is tempting and wrong. It relates to the entire term and is spread across it." },
      B: { ru: "Верно. Заняв больше номинала, эмитент получил премию, и она признаётся доходом постепенно, по мере амортизации за срок обращения. Зеркальная сторона — дисконт: заняв меньше номинала, эмитент получает вычет тем же порядком.", en: "Correct. Having borrowed more than face value, the issuer received a premium, and it is taken into income gradually as it is amortised over the term. The mirror image is a discount: having borrowed less than face, the issuer gets a deduction the same way." },
      C: { ru: "Заём действительно доходом не является, но превышение над номиналом эмитент возвращать не обязан — этим премия от основного долга и отличается.", en: "A loan is indeed not income, but the issuer need not repay the excess over face value — which is what distinguishes the premium from the principal." },
      D: { ru: "К погашению премия уже полностью самортизирована. Откладывать её туда — значит признать доход не в тех годах.", en: "By redemption the premium is fully amortised. Deferring it to then means recognising income in the wrong years." }
    }
  },
  {
    sec: "s22",
    ru: "Консультант получил за 2025 год чистую нефермерская прибыль $5 200 при валовом нефермерском доходе $9 000. Самозанятость у него регулярная, дополнительными методами он пользовался дважды. Может ли он применить нефермерский дополнительный метод?",
    en: "For 2025 a consultant had net nonfarm profits of $5,200 on gross nonfarm income of $9,000. He is regularly self-employed and has used an optional method twice before. May he use the nonfarm optional method?",
    opts: [
      { k: "A", ru: "Нет: прибыль превышает 72,189% валового дохода", en: "No: the profit exceeds 72.189% of gross income" },
      { k: "B", ru: "Да: оба условия выполнены и лимит применений не исчерпан", en: "Yes: both conditions are met and the limit on uses is not exhausted" },
      { k: "C", ru: "Нет: нефермерский метод применяется не более двух раз", en: "No: the nonfarm method may be used no more than twice" },
      { k: "D", ru: "Да, но только если валовой доход не превышает $10 860", en: "Yes, but only if gross income does not exceed $10,860" }
    ],
    correct: "B",
    why: {
      A: { ru: "Посчитайте: 72,189% от $9 000 — это $6 497. Прибыль $5 200 ниже, значит условие выполнено, а не нарушено.", en: "Do the arithmetic: 72.189% of $9,000 is $6,497. The $5,200 profit is below that, so the condition is met, not failed." },
      B: { ru: "Верно. Нужны оба условия сразу, и оба соблюдены: $5 200 ниже порога чистой прибыли $7 840 и ниже 72,189% от $9 000, то есть $6 497. Регулярная самозанятость есть, применений было два из пяти.", en: "Correct. Both conditions must hold and both do: $5,200 is below the $7,840 net profit threshold and below 72.189% of $9,000, that is $6,497. He is regularly self-employed, and two of the five permitted uses have been made." },
      C: { ru: "Ограничение существует, но оно другое: не более пяти раз за жизнь. Двух прошлых применений мало, чтобы его исчерпать.", en: "The limit exists but is different: no more than five times in a lifetime. Two past uses do not exhaust it." },
      D: { ru: "$10 860 — порог валового дохода в <strong>фермерском</strong> методе. У нефермерского валовой доход участвует иначе: с ним сравнивают прибыль по доле 72,189%.", en: "$10,860 is the gross income threshold in the <strong>farm</strong> method. In the nonfarm method gross income enters differently: profit is compared with 72.189% of it." }
    }
  },
  {
    sec: "s22",
    ru: "Супруги подают совместную декларацию. У жены прибыль по Schedule C $15 000, у мужа убыток по Schedule F $7 000. Как считается налог на самозанятость?",
    en: "A married couple files jointly. The wife has a $15,000 Schedule C profit and the husband a $7,000 Schedule F loss. How is self-employment tax computed?",
    opts: [
      { k: "A", ru: "С $8 000: прибыль уменьшается убытком супруга", en: "On $8,000: the profit is reduced by the spouse's loss" },
      { k: "B", ru: "Жена считает налог со своих $15 000; убыток мужа её базу не уменьшает", en: "The wife computes tax on her $15,000; the husband's loss does not reduce her base" },
      { k: "C", ru: "Налога нет: в совокупности супруги получили меньше порога", en: "No tax: taken together the couple earned less than the threshold" },
      { k: "D", ru: "С $15 000, но муж вправе перенести свой убыток на её Schedule SE в следующем году", en: "On $15,000, but the husband may carry his loss to her Schedule SE next year" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это верно для <strong>одного</strong> человека с двумя занятиями: там база одна и убыток уменьшает прибыль. Но у супругов базы разные.", en: "That is right for <strong>one</strong> person with two businesses: there the base is single and the loss reduces the profit. Spouses, however, have separate bases." },
      B: { ru: "Верно. Совместная декларация объединяет подоходный налог, но не налог на самозанятость: каждый супруг подаёт свою Schedule SE. Налог покупает страховой стаж конкретному человеку, и чужой убыток его уменьшать не может.", en: "Correct. A joint return combines income tax but not self-employment tax: each spouse files their own Schedule SE. The tax buys social security credits for a particular person, and someone else's loss cannot cut them." },
      C: { ru: "Складывать заработок супругов для проверки порога нельзя по той же причине: пороги применяются к каждому отдельно.", en: "Adding the spouses' earnings together to test the threshold fails for the same reason: the thresholds apply to each of them separately." },
      D: { ru: "Переноса убытка на чужую Schedule SE не бывает ни в этом году, ни в следующем. Более того, и собственные чистые операционные убытки прошлых лет базу не уменьшают.", en: "There is no carrying a loss to someone else's Schedule SE, this year or next. Indeed, even one's own net operating losses from earlier years do not reduce the base." }
    }
  },
  {
    sec: "s22",
    ru: "Рукоположённому служителю церковь предоставила дом. Формы 4361 у него нет. Рыночная стоимость пользования домом — $18 000 за год, денежное содержание — $40 000. Что входит в базу налога на самозанятость?",
    en: "A church provided an ordained minister with a home. He has no Form 4361. The rental value of the home is $18,000 for the year and his cash pay is $40,000. What is in the self-employment base?",
    opts: [
      { k: "A", ru: "$40 000: стоимость жилья из дохода исключена", en: "$40,000: the value of the housing is excluded from income" },
      { k: "B", ru: "$58 000", en: "$58,000" },
      { k: "C", ru: "Ничего: доход служителя церкви налогом на самозанятость не облагается", en: "Nothing: a minister's earnings are not subject to self-employment tax" },
      { k: "D", ru: "$18 000: денежное содержание облагается обычными взносами как заработная плата", en: "$18,000: the cash pay bears ordinary payroll taxes as wages" }
    ],
    correct: "B",
    why: {
      A: { ru: "Из <strong>подоходного</strong> налога стоимость жилья действительно исключена — но только из него. В базу налога на самозанятость она входит, и на этом расхождении построен вопрос.", en: "From <strong>income</strong> tax the value of the housing is indeed excluded — but only from that. It is inside the self-employment base, and the question is built on that divergence." },
      B: { ru: "Верно. Служитель считается самозанятым по своей служительской деятельности, и в заработок входит как денежное содержание, так и стоимость предоставленного жилья: $40 000 + $18 000.", en: "Correct. A minister is treated as self-employed as to ministerial services, and earnings include both the cash pay and the rental value of the home provided: $40,000 + $18,000." },
      C: { ru: "Освобождение существует, но требует одобренной формы 4361 или 4029. Без неё служитель налог платит.", en: "The exemption exists but requires an approved Form 4361 or 4029. Without one the minister pays." },
      D: { ru: "Наоборот: с содержания служителя обычные взносы работодателем не удерживаются — именно поэтому он платит сам, как самозанятый.", en: "The opposite: ordinary payroll taxes are not withheld from a minister's pay — which is exactly why he pays himself, as a self-employed person." }
    }
  },
  {
    sec: "s22",
    ru: "Дилер недвижимости получил за год $90 000 арендной платы с объектов, которые держит для продажи покупателям, и $50 000 с объекта, купленного как вложение. Услуг арендаторам он не оказывает. Что входит в базу налога на самозанятость?",
    en: "A real estate dealer received $90,000 of rent from properties held for sale to customers and $50,000 from one bought as an investment. He provides no services to tenants. What is in the self-employment base?",
    opts: [
      { k: "A", ru: "$140 000: он дилер, значит вся аренда облагается", en: "$140,000: he is a dealer, so all the rent is taxed" },
      { k: "B", ru: "$90 000", en: "$90,000" },
      { k: "C", ru: "Ничего: услуг арендаторам он не оказывает", en: "Nothing: he provides no services to tenants" },
      { k: "D", ru: "$50 000", en: "$50,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Статус дилера сам по себе всю аренду не втягивает. Смотрят на назначение конкретного объекта, а не на род занятий владельца в целом.", en: "Dealer status does not by itself pull in all the rent. What is examined is the purpose for which the particular property is held, not the owner's occupation in general." },
      B: { ru: "Верно. Изъятие для аренды недвижимости не действует у дилера — но только в отношении имущества, которое он держит <strong>для продажи покупателям</strong>. Объект, купленный как вложение, остаётся обычным Schedule E, как у любого другого владельца.", en: "Correct. The exclusion for real estate rents does not apply to a dealer — but only as to property held <strong>for sale to customers</strong>. Property bought as an investment stays ordinary Schedule E, as for any other owner." },
      C: { ru: "Услуги постояльцам — второй, самостоятельный путь в базу: он нужен владельцу гостиницы, а не дилеру. У дилера основание другое.", en: "Services to occupants are a second, independent route into the base: that is what a hotel owner needs, not a dealer. The dealer's basis is different." },
      D: { ru: "Стороны перепутаны. Облагается аренда с товарного запаса, а не с вложения.", en: "The sides have been swapped. It is rent from stock in trade that is taxed, not rent from an investment." }
    }
  },
  {
    sec: "s22",
    ru: "Кто из перечисленных НЕ платит налог на самозанятость?",
    en: "Which of the following does NOT pay self-employment tax?",
    opts: [
      { k: "A", ru: "Полный партнёр, не участвующий в делах партнёрства, — со своей распределяемой доли", en: "A general partner taking no part in the partnership's affairs, on their distributive share" },
      { k: "B", ru: "Член совета директоров корпорации — с гонорара за эту работу", en: "A corporate director, on the fee for that work" },
      { k: "C", ru: "Отставной партнёр, получающий пожизненные периодические выплаты по плану, если иной доли в партнёрстве у него нет и услуг он не оказывал", en: "A retired partner receiving lifelong periodic payments under a plan, with no other interest in the partnership and no services performed" },
      { k: "D", ru: "Работник на гонорарной основе в органе местного самоуправления, чья должность не покрыта соглашением о социальном страховании", en: "A fee-basis local government official whose position is not covered by a social security agreement" }
    ],
    correct: "C",
    why: {
      A: { ru: "Полный партнёр платит независимо от участия — этим он и отличается от ограниченного, у которого доля в базу не входит.", en: "A general partner pays regardless of participation — which is what distinguishes them from a limited partner, whose share is outside the base." },
      B: { ru: "Гонорар директора в базу входит: директор не работник корпорации, он оказывает услуги самостоятельно.", en: "A director's fee is in the base: a director is not an employee of the corporation but renders services independently." },
      C: { ru: "Верно. Это прямое изъятие, и условия у него строгие: выплаты пожизненные и периодические, предусмотрены письменным планом, иной доли в партнёрстве нет, услуг в этом году не оказывалось. Уберите любое условие — и изъятие перестанет действовать.", en: "Correct. This is an outright exclusion with strict conditions: the payments are lifelong and periodic, provided for by a written plan, there is no other interest in the partnership, and no services were performed during the year. Remove any one condition and the exclusion falls away." },
      D: { ru: "Как раз наоборот. Обычный государственный служащий налога не платит, а работник на гонорарной основе вне соглашения о социальном страховании — платит: это прямо названо среди включаемого.", en: "The opposite is true. An ordinary public employee does not pay, but a fee-basis official outside a social security agreement does: it is named expressly among the inclusions." }
    }
  },
  {
    sec: "s23",
    ru: "Одинокий налогоплательщик получил заработную плату $130 000 и имеет чистый заработок от самозанятости $145 000. Каков дополнительный налог Medicare?",
    en: "A single filer has $130,000 of wages and $145,000 of net earnings from self-employment. What is the Additional Medicare Tax?",
    opts: [
      { k: "A", ru: "$675 — с $75 000", en: "$675 — on $75,000" },
      { k: "B", ru: "$0: ни один из видов дохода порога не достиг", en: "$0: neither kind of income reached the threshold" },
      { k: "C", ru: "$1 305 — с $145 000", en: "$1,305 — on $145,000" },
      { k: "D", ru: "$495 — с $55 000", en: "$495 — on $55,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Заработная плата $130 000 порога $200 000 не достигла, налога с неё нет. Порог уменьшается на всю заработную плату: 200 000 − 130 000 = $70 000. Самозанятость сравнивается с остатком: 145 000 − 70 000 = $75 000, и 75 000 × 0,9% = $675.", en: "Correct. The $130,000 of wages did not reach the $200,000 threshold, so no tax on them. The threshold is reduced by the whole of the wages: 200,000 − 130,000 = $70,000. Self-employment is set against the remainder: 145,000 − 70,000 = $75,000, and 75,000 × 0.9% = $675." },
      B: { ru: "Каждый вид по отдельности порога действительно не достиг, но в этом и смысл порядка: неизрасходованный остаток порога переходит к следующему виду дохода, а не обнуляется.", en: "Neither kind on its own reached the threshold, and that is the point of the ordering: the unused remainder of the threshold passes to the next kind of income rather than being reset." },
      C: { ru: "Порог не применён вовсе. Облагается только превышение, а не весь заработок от самозанятости.", en: "The threshold has not been applied at all. Only the excess is taxed, not the whole of the self-employment earnings." },
      D: { ru: "$55 000 получается, если из совокупных $275 000 вычесть $220 000 или ошибиться в пороге. Верное превышение — $75 000: 275 000 − 200 000.", en: "$55,000 comes from subtracting $220,000 from the combined $275,000, or from an error in the threshold. The correct excess is $75,000: 275,000 − 200,000." }
    }
  },
  {
    sec: "s23",
    ru: "Одинокий налогоплательщик получил заработную плату $230 000 и понёс убыток по Schedule C $40 000. Каков дополнительный налог Medicare?",
    en: "A single filer has $230,000 of wages and a $40,000 Schedule C loss. What is the Additional Medicare Tax?",
    opts: [
      { k: "A", ru: "$0: совокупный трудовой доход $190 000 ниже порога", en: "$0: combined earned income of $190,000 is below the threshold" },
      { k: "B", ru: "$270 — с $30 000", en: "$270 — on $30,000" },
      { k: "C", ru: "$180 — с $20 000", en: "$180 — on $20,000" },
      { k: "D", ru: "$2 070 — с $230 000", en: "$2,070 — on $230,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это и есть проверяемая ошибка. Отрицательный чистый заработок от самозанятости принимается за ноль и с заработной платой не сальдируется. В подоходном налоге убыток бизнеса общий доход уменьшает, здесь — нет.", en: "This is the error being tested. Negative net earnings from self-employment are taken as zero and are not netted against wages. In income tax a business loss reduces total income; here it does not." },
      B: { ru: "Верно. Заработная плата $230 000 сравнивается с порогом $200 000, превышение $30 000 × 0,9% = $270. Убыток по Schedule C в расчёте не участвует вовсе.", en: "Correct. The $230,000 of wages is compared with the $200,000 threshold, the excess of $30,000 × 0.9% = $270. The Schedule C loss plays no part in the computation." },
      C: { ru: "$20 000 ниоткуда не следует: ни как превышение над порогом, ни как результат сальдирования.", en: "$20,000 follows from nothing: neither as the excess over the threshold nor as a result of netting." },
      D: { ru: "Порог не применён: облагается превышение, а не вся заработная плата.", en: "The threshold has not been applied: the excess is taxed, not the whole of the wages." }
    }
  },
  {
    sec: "s23",
    ru: "Супруги подают совместную декларацию. У мужа заработная плата $210 000 от одного работодателя, у жены дохода нет. Работодатель удержал дополнительный налог Medicare с $10 000. Что будет в декларации?",
    en: "A married couple files jointly. The husband has $210,000 of wages from one employer; the wife has no income. The employer withheld Additional Medicare Tax on $10,000. What happens on the return?",
    opts: [
      { k: "A", ru: "Ничего: удержанное и есть окончательный налог", en: "Nothing: what was withheld is the final tax" },
      { k: "B", ru: "Удержанные $90 засчитываются как уплаченный налог и возвращаются: обязанности не возникло", en: "The $90 withheld is credited as tax paid and refunded: no liability arose" },
      { k: "C", ru: "Придётся доплатить: порог для совместной декларации ниже", en: "More is owed: the threshold for a joint return is lower" },
      { k: "D", ru: "Удержание было ошибкой работодателя, и вернуть его может только он", en: "The withholding was the employer's mistake, and only the employer can refund it" }
    ],
    correct: "B",
    why: {
      A: { ru: "Удержание — не окончательный расчёт. Налог определяется в декларации по форме 8959, а удержанное лишь засчитывается в счёт него.", en: "Withholding is not the final computation. The tax is determined on the return, on Form 8959, and what was withheld is merely credited against it." },
      B: { ru: "Верно. Работодатель обязан удерживать с заработной платы свыше $200 000 и о статусе подачи не осведомлён. Порог для совместной декларации — $250 000, а совокупный трудовой доход супругов $210 000, значит налога нет. Удержанные $90 возвращаются.", en: "Correct. An employer must withhold on wages above $200,000 and knows nothing of the filing status. The joint threshold is $250,000 and the couple's combined earned income is $210,000, so no tax is due. The $90 withheld comes back." },
      C: { ru: "Порог для совместной декларации, наоборот, самый высокий из трёх — $250 000. Ниже он у раздельной декларации супругов: $125 000.", en: "The joint threshold is on the contrary the highest of the three — $250,000. The lower one belongs to married filing separately: $125,000." },
      D: { ru: "Ошибки не было: работодатель поступил ровно так, как обязан. Излишек возвращается по декларации, а не через работодателя.", en: "There was no mistake: the employer did exactly what it must. The excess is recovered on the return, not through the employer." }
    }
  },
  {
    sec: "s23",
    ru: "Одинокий работник получил за год по $150 000 от каждого из двух работодателей. Ни один из них дополнительный налог Medicare не удерживал. Верно ли это и каковы последствия?",
    en: "A single employee received $150,000 from each of two employers for the year. Neither withheld Additional Medicare Tax. Was that right, and what follows?",
    opts: [
      { k: "A", ru: "Работодатели поступили верно, и налога нет: каждый платил ниже порога", en: "The employers were right and no tax is due: each paid below the threshold" },
      { k: "B", ru: "Работодатели поступили верно, но налог есть: $900 с превышения $100 000, и уплатить его нужно по декларации", en: "The employers were right, but tax is due: $900 on the $100,000 excess, payable on the return" },
      { k: "C", ru: "Работодатели нарушили обязанность: каждый должен был удержать со своей доли", en: "The employers failed in their duty: each should have withheld on its portion" },
      { k: "D", ru: "Налог есть, но взыскивается он с работодателей, а не с работника", en: "Tax is due, but it is collected from the employers, not the employee" }
    ],
    correct: "B",
    why: {
      A: { ru: "Первая половина верна, вторая нет. Работодатель смотрит только на свою выплату, а порог статуса применяется ко всему трудовому доходу человека.", en: "The first half is right, the second is not. An employer looks only at what it paid, while the threshold for the status applies to all of the person's earned income." },
      B: { ru: "Верно. Ни один работодатель $200 000 не выплатил, поэтому удерживать было не с чего. Но совокупно $300 000 превысили порог для этого статуса на $100 000, и 100 000 × 0,9% = $900 считаются в форме 8959 и уплачиваются с декларацией.", en: "Correct. Neither employer paid $200,000, so there was nothing to withhold. Yet the combined $300,000 exceeded the threshold for the status by $100,000, and 100,000 × 0.9% = $900 is computed on Form 8959 and paid with the return." },
      C: { ru: "Обязанность удерживать возникает только при выплате свыше $200 000 <strong>одним</strong> работодателем. Складывать чужие выплаты он не может и не обязан.", en: "The duty to withhold arises only where <strong>one</strong> employer pays more than $200,000. It cannot and need not add in what others paid." },
      D: { ru: "Дополнительный налог Medicare — налог работника. Работодательской половины у него нет, и при недоудержании обязанность остаётся на работнике.", en: "The Additional Medicare Tax is the employee's tax. It has no employer half, and where it was not withheld the liability stays with the employee." }
    }
  },
  {
    sec: "s23",
    ru: "Самозанятый заплатил за 2025 год налог на самозанятость $22 000, из которых $400 приходится на дополнительный налог Medicare. Какую сумму он вычитает при расчёте подоходного налога?",
    en: "For 2025 a self-employed person paid $22,000 of self-employment tax, of which $400 is Additional Medicare Tax. What amount is deductible in computing income tax?",
    opts: [
      { k: "A", ru: "$11 000 — половина всей уплаченной суммы", en: "$11,000 — half of everything paid" },
      { k: "B", ru: "$10 800 — половина суммы без дополнительного налога", en: "$10,800 — half of the amount excluding the additional tax" },
      { k: "C", ru: "$22 000", en: "$22,000" },
      { k: "D", ru: "$200 — половина дополнительного налога", en: "$200 — half of the additional tax" }
    ],
    correct: "B",
    why: {
      A: { ru: "Дополнительный налог включён в базу вычета напрасно. Вычет половины существует потому, что у работника вторую половину платил бы работодатель, — а у дополнительного налога работодательской половины нет вовсе.", en: "The additional tax has been wrongly included in the base of the deduction. The deduction for one half exists because an employer would pay the other half for an employee — and the additional tax has no employer half at all." },
      B: { ru: "Верно. Вычитается половина от $21 600, то есть $10 800. Дополнительный налог Medicare в расчёт вычета не входит: он целиком лежит на самом человеке.", en: "Correct. Half of $21,600 is deducted, that is $10,800. The Additional Medicare Tax is left out of the deduction: it falls wholly on the person." },
      C: { ru: "Вычитается половина, а не весь налог. И этот вычет уменьшает облагаемый доход, а не сам налог на самозанятость.", en: "Half is deducted, not the whole tax. And that deduction reduces taxable income, not the self-employment tax itself." },
      D: { ru: "Половина дополнительного налога не вычитается именно потому, что второй половины у него нет.", en: "Half of the additional tax is not deductible precisely because it has no other half." }
    }
  },
  {
    sec: "s24",
    ru: "Фермер продал племенную корову за $3 200, расходы на продажу $150. Корова была куплена за $2 400, начисленной амортизации $1 540. Как отражается результат?",
    en: "A farmer sold a breeding cow for $3,200 with $150 of selling expenses. The cow had been bought for $2,400 and $1,540 of depreciation was allowed. How is the result reported?",
    opts: [
      { k: "A", ru: "Прирост $2 190, весь по §1231", en: "A gain of $2,190, all under §1231" },
      { k: "B", ru: "Прирост $2 190: $1 540 обычного дохода по §1245 и $650 по §1231", en: "A gain of $2,190: $1,540 of ordinary income under §1245 and $650 under §1231" },
      { k: "C", ru: "Прирост $3 050, весь по §1231: у племенного скота базиса нет", en: "A gain of $3,050, all under §1231: breeding stock has no basis" },
      { k: "D", ru: "Прирост $800: из выручки вычитается покупная цена", en: "A gain of $800: the purchase price comes out of the proceeds" }
    ],
    correct: "B",
    why: {
      A: { ru: "Срок владения соблюдён, и §1231 применим — но только к остатку. Начисленная амортизация возвращается впереди него как обычный доход.", en: "The holding period is met and §1231 does apply — but only to the remainder. The depreciation allowed comes back ahead of it as ordinary income." },
      B: { ru: "Верно. Выручка за вычетом расходов на продажу $3 050, скорректированный базис 2 400 − 1 540 = $860, прирост $2 190. Возврат по §1245 равен меньшей из двух величин — начисленной амортизации $1 540 или всего прироста, — то есть $1 540. Остаток $650 идёт по §1231.", en: "Correct. Proceeds net of selling expenses are $3,050, the adjusted basis is 2,400 − 1,540 = $860, and the gain is $2,190. The §1245 recapture is the lesser of the depreciation allowed, $1,540, or the whole gain — that is $1,540. The remaining $650 falls under §1231." },
      C: { ru: "Нулевой базис — правило для <strong>выращенного</strong> животного: его корма уже вычтены. Купленное животное амортизировалось, и остаток амортизации есть базис.", en: "Zero basis is the rule for a <strong>raised</strong> animal: its feed was already deducted. A purchased animal was depreciated, and what is left of it is basis." },
      D: { ru: "Вычтена полная покупная цена, как если бы амортизации не было. Она была, и базис на неё уменьшен.", en: "The full purchase price has been subtracted as though no depreciation had been taken. It was, and the basis is reduced by it." }
    }
  },
  {
    sec: "s24",
    ru: "Валовой доход фермера от фермерства за 2025 год — $80 000. На террасирование и борьбу с эрозией по утверждённому плану он потратил $26 000. Сколько вычитается в 2025 году?",
    en: "A farmer's gross income from farming for 2025 is $80,000. He spent $26,000 on terracing and erosion control under an approved plan. How much is deductible in 2025?",
    opts: [
      { k: "A", ru: "$26 000", en: "$26,000" },
      { k: "B", ru: "$20 000, остальные $6 000 переносятся на следующие годы", en: "$20,000, with the remaining $6,000 carried to later years" },
      { k: "C", ru: "$20 000, остальные $6 000 добавляются к базису земли", en: "$20,000, with the remaining $6,000 added to the basis of the land" },
      { k: "D", ru: "Ничего: улучшения земли капитализируются", en: "Nothing: improvements to land are capitalised" }
    ],
    correct: "B",
    why: {
      A: { ru: "Предел не применён. Вычет расходов на охрану почв и вод ограничен 25% валового дохода от фермерства за год.", en: "The cap has not been applied. The deduction for soil and water conservation is limited to 25% of gross income from farming for the year." },
      B: { ru: "Верно. Предел — 25% от $80 000, то есть $20 000. Излишек $6 000 не пропадает и в базис не уходит: он переносится вперёд и вычитается в следующие годы, в каждом в пределах того же процента. Срок переноса не ограничен.", en: "Correct. The cap is 25% of $80,000, that is $20,000. The excess of $6,000 is neither lost nor added to basis: it carries forward and is deducted in later years, each within the same percentage. There is no time limit on the carryforward." },
      C: { ru: "Излишек именно переносится, а не капитализируется. В базис уходило бы всё, если бы правила о вычете не существовало вовсе.", en: "The excess is carried forward, not capitalised. Everything would go into basis only if the deduction rule did not exist at all." },
      D: { ru: "Это общее правило, из которого для фермеров как раз сделано изъятие: такие расходы разрешено вычитать, а не держать в базисе до продажи.", en: "That is the general rule, and farmers are the exception to it: these expenses may be deducted rather than held in basis until sale." }
    }
  },
  {
    sec: "s24",
    ru: "В июле 2025 года наводнение погубило урожай фермера на кассовом методе. В ноябре 2025 года он получил страховое возмещение $40 000. Обычно доход от этого урожая он показывал в следующем году. Что он вправе сделать?",
    en: "In July 2025 a flood destroyed the crop of a cash-method farmer. In November 2025 he received $40,000 of insurance proceeds. He would normally have reported the income from that crop in the following year. What may he do?",
    opts: [
      { k: "A", ru: "Показать $40 000 в 2026 году, выбрав отсрочку", en: "Report the $40,000 in 2026 by making the deferral election" },
      { k: "B", ru: "Разделить сумму между 2025 и 2026 годами по своему усмотрению", en: "Split the amount between 2025 and 2026 as he sees fit" },
      { k: "C", ru: "Показать $40 000 в 2025 году: выбора для страховых выплат не предусмотрено", en: "Report the $40,000 in 2025: no election is available for insurance proceeds" },
      { k: "D", ru: "Отложить сумму до года, в котором он продаст следующий урожай", en: "Defer the amount to the year in which he sells the next crop" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Все три условия выполнены: кассовый метод, выплата получена в том же году, в котором урожай пострадал, и обычная практика фермера — отражать доход от этого урожая в следующем году. Отсрочка ровно на один год.", en: "Correct. All three conditions are met: the cash method, the payment received in the same year the crop was damaged, and a normal practice of reporting income from that crop in the following year. The deferral is exactly one year." },
      B: { ru: "Делить нельзя: выбор распространяется на <strong>все</strong> такие поступления года целиком. Удобной частью обойтись не получится.", en: "Splitting is not allowed: the election covers <strong>every</strong> such receipt of the year in full. There is no picking a convenient part." },
      C: { ru: "Выбор предусмотрен и охватывает как страховые выплаты, так и государственную помощь при бедствии.", en: "The election does exist and covers both insurance proceeds and federal disaster assistance." },
      D: { ru: "Отсрочка — на один налоговый год, а не до какого-то будущего события. Дальше следующего года откладывать нечего.", en: "The deferral runs one tax year, not until some future event. There is no deferring beyond the following year." }
    }
  },
  {
    sec: "s24",
    ru: "Что из перечисленного фермер НЕ амортизирует?",
    en: "Which of the following does a farmer NOT depreciate?",
    opts: [
      { k: "A", ru: "Купленную племенную корову", en: "A purchased breeding cow" },
      { k: "B", ru: "Сельскохозяйственную ограду", en: "An agricultural fence" },
      { k: "C", ru: "Выращенную на ферме племенную корову", en: "A breeding cow raised on the farm" },
      { k: "D", ru: "Зернохранилище", en: "A grain storage building" }
    ],
    correct: "C",
    why: {
      A: { ru: "Купленный племенной скот амортизируется: покупная цена нигде не вычиталась, и её нужно списать за срок службы животного.", en: "Purchased breeding stock is depreciated: the purchase price was never deducted, and it must be written off over the animal's life." },
      B: { ru: "Ограда — сооружение с ограниченным сроком службы, она амортизируется.", en: "A fence is a structure with a limited life and is depreciated." },
      C: { ru: "Верно. Корма и уход уже вычтены в те годы, когда их несли, поэтому амортизировать нечего: базиса у выращенного животного нет. Не амортизируются также земля, товарные запасы, скот для перепродажи и личное имущество.", en: "Correct. Feed and care were already deducted in the years they were incurred, so there is nothing to depreciate: a raised animal has no basis. Also not depreciable are land, inventory, livestock held for resale and personal items." },
      D: { ru: "Постройки и сооружения фермы амортизируются. Не амортизируется только земля под ними.", en: "Farm buildings and structures are depreciated. Only the land beneath them is not." }
    }
  },
  {
    sec: "s24",
    ru: "В октябре 2025 года фермер на календарном году продал сельскохозяйственную землю подходящему фермеру с приростом $400 000. Может ли он уплатить налог с этого прироста четырьмя ежегодными платежами по §1062?",
    en: "In October 2025 a calendar-year farmer sold farmland to a qualified farmer at a $400,000 gain. May he pay the tax on that gain in four annual instalments under section 1062?",
    opts: [
      { k: "A", ru: "Да: продажа состоялась после 4 июля 2025 года", en: "Yes: the sale took place after July 4, 2025" },
      { k: "B", ru: "Нет: выбор доступен для налоговых периодов, начинающихся после 4 июля 2025 года, а его период начался 1 января", en: "No: the election is available for tax years beginning after July 4, 2025, and his year began on January 1" },
      { k: "C", ru: "Да, но только если он перейдёт на фискальный год", en: "Yes, but only if he changes to a fiscal year" },
      { k: "D", ru: "Нет: §1062 распространяется только на продажу построек, но не земли", en: "No: section 1062 covers sales of buildings only, not land" }
    ],
    correct: "B",
    why: {
      A: { ru: "Дата продажи здесь ни при чём. Норма привязана к началу <strong>налогового периода</strong>, а не к дате сделки, и это различие в вопросе и проверяется.", en: "The date of the sale is beside the point. The provision keys off the beginning of the <strong>tax year</strong>, not the date of the transaction, and that distinction is what the question tests." },
      B: { ru: "Верно. Выбор доступен для налоговых периодов, начинающихся после 4 июля 2025 года. У фермера на календарном годе период 2025 года начался 1 января, значит впервые норма станет доступна за 2026 год.", en: "Correct. The election is available for tax years beginning after July 4, 2025. For a calendar-year farmer the 2025 year began on January 1, so the provision first becomes available for 2026." },
      C: { ru: "Смена налогового периода задним числом положения не спасает и требует согласия налоговой службы по собственным основаниям.", en: "Changing the tax year after the fact does not rescue the position and requires the IRS's consent on grounds of its own." },
      D: { ru: "Наоборот: норма как раз о продаже подходящей сельскохозяйственной <strong>земли</strong> подходящему фермеру.", en: "The opposite: the provision is precisely about selling qualified farm<strong>land</strong> to a qualified farmer." }
    }
  },
  {
    sec: "s25",
    ru: "Непосредственно перед прощением долга обязательства предпринимателя составляли $180 000, а справедливая стоимость всего его имущества — $145 000. Кредитор простил $50 000 делового долга. Банкротства не было. Сколько попадает в доход?",
    en: "Immediately before the cancellation a proprietor's liabilities were $180,000 and the fair market value of all his property was $145,000. A creditor forgave $50,000 of business debt. There was no bankruptcy. How much goes into income?",
    opts: [
      { k: "A", ru: "$50 000", en: "$50,000" },
      { k: "B", ru: "$15 000", en: "$15,000" },
      { k: "C", ru: "$0", en: "$0" },
      { k: "D", ru: "$35 000", en: "$35,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Исключение по неплатёжеспособности не применено. Оно действует и вне банкротства, было бы превышение обязательств над стоимостью активов.", en: "The insolvency exclusion has not been applied. It operates outside bankruptcy too, provided liabilities exceeded the value of assets." },
      B: { ru: "Верно. Неплатёжеспособность равна 180 000 − 145 000 = $35 000, и ровно столько исключается. Остаток 50 000 − 35 000 = $15 000 идёт в доход. Исключённые $35 000 придётся оплатить уменьшением налоговых атрибутов.", en: "Correct. The insolvency is 180,000 − 145,000 = $35,000, and exactly that much is excluded. The remainder, 50,000 − 35,000 = $15,000, goes into income. The excluded $35,000 must be paid for by reducing tax attributes." },
      C: { ru: "Исключается не всё прощённое, а лишь столько, на сколько должник был неплатёжеспособен. Прощено больше этой суммы.", en: "Not everything forgiven is excluded, only as much as the debtor was insolvent. More than that was forgiven." },
      D: { ru: "$35 000 — исключаемая часть, а спрашивают об облагаемой. Варианты в таких вопросах всегда содержат обе.", en: "$35,000 is the excluded part, and the question asks for the taxable one. Such questions always offer both." }
    }
  },
  {
    sec: "s25",
    ru: "Фермер, у которого более половины валовой выручки за три предыдущих года пришлось на фермерство, добился списания долга перед банком в деле о банкротстве. Какое исключение применяется?",
    en: "A farmer, more than half of whose gross receipts for the three preceding years came from farming, had a bank debt discharged in a bankruptcy case. Which exclusion applies?",
    opts: [
      { k: "A", ru: "Исключение для долга фермера: оно специальнее", en: "The farm debt exclusion: it is the more specific one" },
      { k: "B", ru: "Исключение по банкротству", en: "The bankruptcy exclusion" },
      { k: "C", ru: "Любое на выбор налогоплательщика", en: "Either, at the taxpayer's choice" },
      { k: "D", ru: "Никакое: в банкротстве прощённый долг облагается на общих основаниях", en: "Neither: debt discharged in bankruptcy is taxed in the ordinary way" }
    ],
    correct: "B",
    why: {
      A: { ru: "Специальность нормы здесь роли не играет: очередь установлена прямо. Исключение для долга фермера к списанию в деле о банкротстве не применяется вовсе.", en: "Specificity does not decide here: the order is laid down expressly. The farm debt exclusion does not apply to a discharge in a bankruptcy case at all." },
      B: { ru: "Верно. Очередь жёсткая: банкротство впереди всего. Если бы банкротства не было, но должник оказался неплатёжеспособен, сначала применялась бы неплатёжеспособность и лишь остаток — фермерское исключение.", en: "Correct. The order is fixed: bankruptcy comes first. Had there been no bankruptcy but the debtor was insolvent, insolvency would apply first and only the remainder would fall under the farm exclusion." },
      C: { ru: "Выбора нет. Именно потому вопрос и задаётся: фактура подходит под два исключения, а применимо одно.", en: "There is no choice. That is exactly why the question is asked: the facts fit two exclusions but only one governs." },
      D: { ru: "Наоборот: списание в деле о банкротстве исключается полностью и без предела по сумме.", en: "The opposite: a discharge in a bankruptcy case is excluded in full and without any ceiling." }
    }
  },
  {
    sec: "s25",
    ru: "Платёжеспособная корпорация передала кредитору собственные акции в погашение долга $30 000. Справедливая стоимость акций — $21 000, балансовая — $16 000. Какой доход возникает у корпорации?",
    en: "A solvent corporation transferred its own stock to a creditor in satisfaction of a $30,000 debt. The fair market value of the stock was $21,000 and its book value $16,000. What income does the corporation have?",
    opts: [
      { k: "A", ru: "$14 000 обычного дохода", en: "$14,000 of ordinary income" },
      { k: "B", ru: "$9 000 обычного дохода", en: "$9,000 of ordinary income" },
      { k: "C", ru: "$5 000 прироста от передачи акций", en: "$5,000 of gain on transferring the stock" },
      { k: "D", ru: "Дохода нет: долг погашен полностью", en: "No income: the debt was fully satisfied" }
    ],
    correct: "B",
    why: {
      A: { ru: "Взята балансовая стоимость: 30 000 − 16 000. Она в расчёте не участвует и приведена в условии ровно затем, чтобы её взяли.", en: "Book value has been used: 30,000 − 16,000. It plays no part in the computation and is in the facts precisely so that it will be used." },
      B: { ru: "Верно. Передача собственных акций приравнивается к уплате суммы, равной их <strong>справедливой стоимости</strong>: 30 000 − 21 000 = $9 000 дохода от списания. То же правило действует для партнёрства, передающего кредитору долю в себе.", en: "Correct. A transfer of the debtor's own stock is treated as payment of an amount equal to its <strong>fair market value</strong>: 30,000 − 21,000 = $9,000 of cancellation income. The same rule applies to a partnership transferring an interest in itself." },
      C: { ru: "Прироста от выпуска собственных акций у корпорации не возникает: своими акциями она распоряжается не как имуществом. Разница между балансовой и рыночной стоимостью здесь ничего не образует.", en: "A corporation realises no gain on issuing its own stock: its own shares are not property in its hands. The difference between book and market value produces nothing here." },
      D: { ru: "Долг погашен не полностью, а лишь на $21 000 — на стоимость переданного. Непокрытый остаток и есть доход.", en: "The debt was not fully satisfied but only to the extent of $21,000, the value of what was transferred. The uncovered remainder is the income." }
    }
  },
  {
    sec: "s25",
    ru: "Предприниматель передал кредитору землю в погашение долга $70 000. Базис земли — $40 000, справедливая стоимость — $55 000. Остаток долга кредитор простил. Должник платёжеспособен. Каковы налоговые последствия?",
    en: "A proprietor transferred land to a creditor against a $70,000 debt. The land's basis is $40,000 and its fair market value $55,000. The creditor forgave the rest. The debtor is solvent. What are the tax consequences?",
    opts: [
      { k: "A", ru: "Обычный доход $30 000", en: "$30,000 of ordinary income" },
      { k: "B", ru: "Прирост $15 000 от выбытия земли и обычный доход от списания $15 000", en: "A $15,000 gain on disposing of the land and $15,000 of ordinary cancellation income" },
      { k: "C", ru: "Прирост $30 000 от выбытия земли", en: "A $30,000 gain on disposing of the land" },
      { k: "D", ru: "Обычный доход $15 000; прироста нет, поскольку земля передана, а не продана", en: "$15,000 of ordinary income; no gain, since the land was handed over rather than sold" }
    ],
    correct: "B",
    why: {
      A: { ru: "Две разные величины сложены в одну и названы одним именем. У них разная природа: прирост капитальный, доход от списания обычный.", en: "Two different amounts have been merged into one and given a single name. Their natures differ: the gain is capital, the cancellation income ordinary." },
      B: { ru: "Верно. Событий два. Земля считается проданной за справедливую стоимость: 55 000 − 40 000 = $15 000 прироста. Долг погашен на $55 000, непокрытый остаток 70 000 − 55 000 = $15 000 — обычный доход от списания. Совпадение сумм здесь случайно.", en: "Correct. There are two events. The land is treated as sold at fair market value: 55,000 − 40,000 = $15,000 of gain. The debt is satisfied to the extent of $55,000, and the uncovered remainder of 70,000 − 55,000 = $15,000 is ordinary cancellation income. That the two coincide is an accident." },
      C: { ru: "Прирост считается от справедливой стоимости, а не от суммы долга. Разница между долгом и стоимостью — это уже второе событие.", en: "The gain is measured from fair market value, not from the amount of the debt. The difference between debt and value is the second event." },
      D: { ru: "Передача имущества в погашение долга — такое же выбытие, как продажа: имущество ушло, обязательство уменьшилось. Прирост возникает.", en: "Handing property over against a debt is a disposition just as a sale is: the property left and the liability fell. A gain arises." }
    }
  },
  {
    sec: "s25",
    ru: "Здание магазина с базисом $145 000 и справедливой стоимостью $120 000 обременено долгом $134 000, по которому владелец лично не отвечает. Кредитор обратил взыскание. Каковы последствия?",
    en: "A shop building with a basis of $145,000 and a fair market value of $120,000 carries $134,000 of debt for which the owner is not personally liable. The lender foreclosed. What follows?",
    opts: [
      { k: "A", ru: "Убыток $25 000 и доход от списания $14 000", en: "A $25,000 loss and $14,000 of cancellation income" },
      { k: "B", ru: "Убыток $11 000; дохода от списания нет", en: "An $11,000 loss; no cancellation income" },
      { k: "C", ru: "Убыток $25 000; дохода от списания нет", en: "A $25,000 loss; no cancellation income" },
      { k: "D", ru: "Дохода и убытка нет: имущество просто выбыло", en: "Neither income nor loss: the property simply went" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это расчёт для долга <strong>с личной ответственностью</strong>. Здесь её нет, и обе величины считаются иначе.", en: "That is the computation for a <strong>recourse</strong> debt. There is none here, and both amounts are figured differently." },
      B: { ru: "Верно. При отсутствии личной ответственности в выручку от выбытия входит <strong>весь</strong> непогашенный долг: 134 000 − 145 000 = убыток $11 000. Дохода от списания не возникает вовсе — превышение долга над стоимостью уже учтено в выручке.", en: "Correct. Without personal liability the amount realised includes the <strong>entire</strong> unpaid debt: 134,000 − 145,000 = an $11,000 loss. No cancellation income arises at all — the excess of debt over value is already inside the amount realised." },
      C: { ru: "Убыток $25 000 получается от справедливой стоимости, а она берётся при личной ответственности. Здесь берётся сумма долга.", en: "The $25,000 loss comes from fair market value, which is used where there is personal liability. Here the amount of the debt is used." },
      D: { ru: "Обращение взыскания приравнивается к продаже имущества, и результат по нему считается всегда.", en: "A foreclosure is treated as a sale of the property, and its result is always computed." }
    }
  },
  {
    sec: "s25",
    ru: "Предприниматель исключил из дохода $35 000 прощённого долга по неплатёжеспособности. Что происходит дальше?",
    en: "A proprietor excluded $35,000 of forgiven debt from income under the insolvency exclusion. What happens next?",
    opts: [
      { k: "A", ru: "Ничего: сумма выведена из-под налога окончательно", en: "Nothing: the amount is out of tax for good" },
      { k: "B", ru: "На $35 000 уменьшаются налоговые атрибуты — начиная с чистого операционного убытка; форма 982", en: "Tax attributes are reduced by $35,000 — beginning with the net operating loss; Form 982" },
      { k: "C", ru: "Сумма переносится в доход следующего года", en: "The amount is carried into the following year's income" },
      { k: "D", ru: "На $35 000 уменьшается базис имущества, и только он", en: "The basis of property is reduced by $35,000, and nothing else" }
    ],
    correct: "B",
    why: {
      A: { ru: "Исключение откладывает налог, а не отменяет его. Именно поэтому верный ответ на вопрос «что даёт исключение» — «налога не будет сейчас».", en: "An exclusion defers the tax rather than cancelling it. Which is why the right answer to “what does an exclusion give you” is “no tax now”." },
      B: { ru: "Верно. Порядок установлен: чистый операционный убыток, перенос общего делового кредита, кредит по минимальному налогу, перенос убытка от прироста капитала, базис имущества, пассивные переносы, кредит по иностранным налогам. Убытки уменьшаются доллар за доллар, кредиты — по 33⅓ цента на доллар.", en: "Correct. The order is prescribed: net operating loss, general business credit carryover, minimum tax credit, capital loss carryover, basis of property, passive carryovers, foreign tax credit carryover. Losses are cut dollar for dollar, credits at 33⅓ cents per dollar." },
      C: { ru: "Переноса самой суммы в доход не происходит. Расплата идёт атрибутами, а не отложенным доходом.", en: "The amount itself is not carried into income. The price is paid in attributes, not in deferred income." },
      D: { ru: "Базис стоит в очереди пятым, а не первым. Первым он становится только по прямому выбору налогоплательщика — уменьшить базис амортизируемого имущества раньше убытка.", en: "Basis is fifth in the queue, not first. It comes first only by an express election to reduce the basis of depreciable property ahead of the loss." }
    }
  },
  {
    sec: "s25",
    ru: "Что из перечисленного НЕ образует дохода от списания долга?",
    en: "Which of the following does NOT produce cancellation of debt income?",
    opts: [
      { k: "A", ru: "Банк уменьшил остаток кредита на покупку станка платёжеспособному заёмщику", en: "A bank reduced the balance of a machine loan for a solvent borrower" },
      { k: "B", ru: "Продавец станка уменьшил цену и вместе с ней остаток долга покупателя", en: "The seller of the machine reduced the price and with it the buyer's remaining debt" },
      { k: "C", ru: "Поставщик простил задолженность за поставленные материалы", en: "A supplier forgave the amount owed for materials delivered" },
      { k: "D", ru: "Кредитор простил часть долга в обмен на досрочное погашение остального", en: "A creditor forgave part of a debt in exchange for early payment of the rest" }
    ],
    correct: "B",
    why: {
      A: { ru: "Банк продавцом не является, и его снисхождение к цене покупки отношения не имеет: это обычный доход от списания.", en: "A bank is not the seller, and its indulgence has nothing to do with the purchase price: this is ordinary cancellation income." },
      B: { ru: "Верно. Уменьшение долга <strong>продавцом</strong> имущества у платёжеспособного покупателя вне банкротства считается корректировкой цены покупки: дохода нет, уменьшается базис имущества. Это изъятие, а не исключение, поэтому атрибуты не трогают и форму 982 по этому основанию не подают.", en: "Correct. A reduction of the debt by the <strong>seller</strong> of the property, for a solvent buyer outside bankruptcy, is treated as a purchase price adjustment: no income, and the basis of the property goes down. This is an exception, not an exclusion, so attributes are untouched and no Form 982 is filed on this ground." },
      C: { ru: "Прощённая задолженность за материалы — доход. Изъятие для вычитаемого долга сюда не подходит: у покупателя на кассовом методе материалы вычитались бы при оплате, но материалы уже поставлены и учтены.", en: "A forgiven amount owed for materials is income. The exception for deductible debt does not fit: for a cash-method buyer the materials would be deducted when paid, but they have already been delivered and accounted for." },
      D: { ru: "Скидка за досрочное погашение — доход от списания на общих основаниях: часть долга не уплачена и не подлежит уплате.", en: "A discount for early payment is cancellation income on ordinary principles: part of the debt went unpaid and is no longer payable." }
    }
  }
];
