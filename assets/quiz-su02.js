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
  s24: { no: "2.4", ru: "Фермеры", en: "Farmers" }
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
    ru: "Незамужняя женщина имеет заработную плату $210 000 и чистый заработок от самозанятости $30 000. С какой суммы взимается дополнительный налог Medicare?",
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
  }

];
