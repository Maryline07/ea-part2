/* ===================================================================
   Вопросы тренажёра, модуль 04.

   Отдельный файл, а не блок внутри страницы: под file:// страница не
   может прочитать другой файл, поэтому единственный способ отдать
   данные двум страницам сразу — тег <script src>. Файл подключают и
   su04.html, и trainer.html.

   QUIZSECS — названия подразделов. На странице модуля они есть в
   заголовках, на странице тренажёра их нет. Карта порождается
   скриптом из тех же заголовков, а сборка отказывается собирать
   файл, если названия разошлись.
   =================================================================== */

window.QUIZZES  = window.QUIZZES  || {};
window.QUIZSECS = window.QUIZSECS || {};

window.QUIZSECS.su04 = {
  s41: { no: "4.1", ru: "Что вообще вычитается", en: "What is deductible at all" },
  s42: { no: "4.2", ru: "Оплата труда", en: "Employees’ pay" },
  s43: { no: "4.3", ru: "Проценты", en: "Interest" },
  s44: { no: "4.4", ru: "Аренда как расход", en: "Rent expense" },
  s45: { no: "4.5", ru: "Налоги", en: "Taxes" }
};

window.QUIZZES.su04 = [
  {
    ru: "Какое утверждение о требовании «обычный и необходимый» верно?",
    en: "Which statement about the “ordinary and necessary” requirement is correct?",
    opts: [
      { k: "A", ru: "«Необходимый» означает, что без этого расхода вести бизнес невозможно", en: "“Necessary” means the business could not be carried on without the expense" },
      { k: "B", ru: "«Обычный» означает принятый в вашей отрасли, «необходимый» — полезный и уместный", en: "“Ordinary” means common in your trade; “necessary” means helpful and appropriate" },
      { k: "C", ru: "Расход должен быть и обычным, и необходимым для любого бизнеса, а не только для вашего", en: "The expense must be ordinary and necessary for any business, not merely for yours" },
      { k: "D", ru: "Достаточно выполнения одного из двух условий", en: "Meeting either one of the two conditions is enough" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это завышенная планка. Незаменимости закон не требует.", en: "That sets the bar too high. Indispensability is not required." },
      B: { ru: "Верно. Оба слова понимаются мягче, чем звучат: обычность оценивается по отрасли, необходимость — по полезности и уместности для этого бизнеса.", en: "Correct. Both words are read more mildly than they sound: ordinariness is judged by the trade, necessity by helpfulness and appropriateness for this business." },
      C: { ru: "Оценка привязана именно к вашему виду деятельности, а не к бизнесу вообще.", en: "The test is tied to your particular trade or business, not to business in general." },
      D: { ru: "Нужны оба условия сразу.", en: "Both conditions are required together." }
    }
  },
  {
    ru: "В ноябре 2025 года уплачено $18 000 за трёхлетнее обслуживание оборудования с декабря 2025 по ноябрь 2028 года. Сколько вычитается за 2025 год у налогоплательщика на кассовом методе?",
    en: "In November 2025, $18,000 was paid for three years of equipment servicing running December 2025 to November 2028. How much is deductible for 2025 by a cash-method taxpayer?",
    opts: [
      { k: "A", ru: "$18 000: деньги уплачены в 2025 году", en: "$18,000: the money was paid in 2025" },
      { k: "B", ru: "$500", en: "$500" },
      { k: "C", ru: "$6 000", en: "$6,000" },
      { k: "D", ru: "Ноль: услуги ещё не оказаны", en: "Zero: the services have not been performed" }
    ],
    correct: "B",
    why: {
      A: { ru: "Кассовый метод не отменяет правило о предоплате: платёж создал актив со сроком далеко за пределами года.", en: "The cash method does not override the prepayment rule: the payment created an asset lasting well beyond the year." },
      B: { ru: "Верно. На 2025 год приходится один месяц из тридцати шести: $18 000 ÷ 36 = $500. Правило двенадцати месяцев здесь не спасает — период превышает год.", en: "Correct. One month of thirty-six falls in 2025: $18,000 ÷ 36 = $500. The twelve-month rule does not help — the period exceeds a year." },
      C: { ru: "$6 000 — это годовая доля. За 2025 год отработан лишь один месяц.", en: "$6,000 is a full year’s share. Only one month of 2025 is covered." },
      D: { ru: "Часть услуг за декабрь оказана, и эта часть вычитается.", en: "The December portion was performed and that part is deductible." }
    }
  },
  {
    ru: "Что из перечисленного вычитается как деловой расход?",
    en: "Which of the following is deductible as a business expense?",
    opts: [
      { k: "A", ru: "Взнос в местный деловой клуб", en: "Dues to a local business club" },
      { k: "B", ru: "Пожертвование благотворительному фонду от имени магазина", en: "A donation to a charity made in the shop’s name" },
      { k: "C", ru: "Неустойка поставщику за досрочное расторжение договора поставки", en: "Damages paid to a supplier for terminating a supply contract early" },
      { k: "D", ru: "Взнос в поддержку кандидата на местных выборах", en: "A contribution supporting a candidate in a local election" }
    ],
    correct: "C",
    why: {
      A: { ru: "Взносы в клубы — деловые, общественные, спортивные, обеденные, авиационные, гостиничные — не вычитаются.", en: "Club dues — business, social, athletic, luncheon, airline, hotel — are not deductible." },
      B: { ru: "У индивидуального предпринимателя благотворительный взнос идёт в Schedule A, а не в расходы бизнеса.", en: "For a sole proprietor a charitable contribution goes on Schedule A, not into business expenses." },
      C: { ru: "Верно. Это неустойка контрагенту по договору, а не штраф государственному органу за нарушение закона. Обычный деловой расход.", en: "Correct. This is contractual damages to a counterparty, not a fine to a government body for breaking the law. An ordinary business expense." },
      D: { ru: "Политические взносы не вычитаются никогда.", en: "Political contributions are never deductible." }
    }
  },
  {
    ru: "Ресторан заплатил $4 500 штрафа санитарной службе за нарушение правил хранения продуктов и $2 800 адвокату, защищавшему его в этом деле. Что вычитается?",
    en: "A restaurant paid a $4,500 fine to the health authority for breaching food storage rules and $2,800 to the lawyer who defended it. What is deductible?",
    opts: [
      { k: "A", ru: "$7 300", en: "$7,300" },
      { k: "B", ru: "$2 800", en: "$2,800" },
      { k: "C", ru: "$4 500", en: "$4,500" },
      { k: "D", ru: "Ничего", en: "Nothing" }
    ],
    correct: "B",
    why: {
      A: { ru: "Сам штраф государственному органу за нарушение закона не вычитается.", en: "The fine itself, paid to a government body for breaking the law, is not deductible." },
      B: { ru: "Верно. Не вычитается только штраф. Гонорар юриста за защиту бизнеса — обычный и необходимый расход и вычету подлежит.", en: "Correct. Only the fine is disallowed. Legal fees for defending the business are an ordinary and necessary expense and remain deductible." },
      C: { ru: "Здесь вычтено ровно то, что вычесть нельзя.", en: "This deducts precisely the item that cannot be deducted." },
      D: { ru: "Запрет распространяется на штраф, а не на сопутствующие юридические расходы.", en: "The bar covers the fine, not the associated legal costs." }
    }
  },
  {
    ru: "Компания потратила $23 000 на замену изношенной кровли склада и $1 900 на устранение течи в одном месте той же кровли годом ранее. Как учитываются эти суммы?",
    en: "A company spent $23,000 replacing the worn roof of its warehouse and, a year earlier, $1,900 fixing a single leak in that roof. How are the amounts treated?",
    opts: [
      { k: "A", ru: "Обе вычитаются как ремонт", en: "Both are deducted as repairs" },
      { k: "B", ru: "Обе капитализируются", en: "Both are capitalized" },
      { k: "C", ru: "$1 900 вычитается, $23 000 капитализируется", en: "$1,900 is deducted and $23,000 is capitalized" },
      { k: "D", ru: "$23 000 вычитается, $1 900 капитализируется", en: "$23,000 is deducted and $1,900 is capitalized" }
    ],
    correct: "C",
    why: {
      A: { ru: "Замена всей кровли — восстановление существенной части объекта.", en: "Replacing the whole roof is a restoration of a major component." },
      B: { ru: "Устранение течи в одном месте объект не улучшает и к новому использованию не приспосабливает.", en: "Fixing a single leak neither betters the property nor adapts it to a new use." },
      C: { ru: "Верно. Точечный ремонт вычитается целиком в своём году, а полная замена кровли капитализируется и возмещается через амортизацию.", en: "Correct. A spot repair is deducted in full in its year, while a full roof replacement is capitalized and recovered through depreciation." },
      D: { ru: "Всё ровно наоборот.", en: "This is exactly backwards." }
    }
  },
  {
    ru: "Компания урегулировала спор о домогательствах, выплатив $90 000, и включила в соглашение условие о неразглашении. Гонорар юристов по этому делу — $15 000. Что вычитается?",
    en: "A company settled a harassment claim for $90,000 and included a nondisclosure clause in the agreement. Legal fees on the matter were $15,000. What is deductible?",
    opts: [
      { k: "A", ru: "$105 000", en: "$105,000" },
      { k: "B", ru: "$90 000", en: "$90,000" },
      { k: "C", ru: "$15 000", en: "$15,000" },
      { k: "D", ru: "Ничего", en: "Nothing" }
    ],
    correct: "D",
    why: {
      A: { ru: "Запрет распространяется и на выплату, и на относящиеся к ней гонорары юристов.", en: "The bar covers both the payment and the related attorney fees." },
      B: { ru: "Именно выплата и оказывается под запретом при наличии условия о неразглашении.", en: "It is the payment that is barred once a nondisclosure clause is present." },
      C: { ru: "Гонорары юристов, относящиеся к такой выплате, тоже не вычитаются.", en: "Attorney fees related to such a payment are also nondeductible." },
      D: { ru: "Верно. Условие о неразглашении лишает вычета и саму выплату, и юридические расходы по ней. Без такого условия обе суммы вычитались бы.", en: "Correct. The nondisclosure clause denies a deduction both for the payment and for the legal costs. Without that clause both would be deductible." }
    }
  },
  {
    ru: "Какое условие НЕ требуется для вычета оплаты труда работника?",
    en: "Which condition is NOT required for deducting an employee’s pay?",
    opts: [
      { k: "A", ru: "Оплата разумна по размеру", en: "The pay is reasonable in amount" },
      { k: "B", ru: "Оплата произведена за фактически оказанные услуги", en: "The pay is for services actually performed" },
      { k: "C", ru: "Оплата уплачена или начислена в налоговом году", en: "The pay is paid or incurred in the tax year" },
      { k: "D", ru: "Оплата произведена деньгами, а не имуществом или услугами", en: "The pay is made in money rather than property or services" }
    ],
    correct: "D",
    why: {
      A: { ru: "Разумность — одно из двух прямо названных условий.", en: "Reasonableness is one of the two expressly stated tests." },
      B: { ru: "Услуги должны быть фактически оказаны — второе условие.", en: "The services must actually have been performed — the second test." },
      C: { ru: "Требование по времени сохраняется во всех случаях.", en: "The timing requirement applies in every case." },
      D: { ru: "Верно. Оплата может быть деньгами, имуществом или услугами. Форма значения не имеет — важны размер и встречное предоставление.", en: "Correct. Pay may be in cash, property or services. The form does not matter — the amount and the services rendered do." }
    }
  },
  {
    ru: "Владелец кафе, действующего как индивидуальное предприятие, перечислил себе $52 000 и оформил на себя W-2. Что он вычитает в Schedule C?",
    en: "The owner of a café operated as a sole proprietorship transferred $52,000 to himself and issued himself a Form W-2. What does he deduct on Schedule C?",
    opts: [
      { k: "A", ru: "$52 000 как заработную плату", en: "$52,000 as wages" },
      { k: "B", ru: "Ничего: он не работник своего бизнеса", en: "Nothing: he is not an employee of his own business" },
      { k: "C", ru: "$52 000, но только если сумма разумна", en: "$52,000, but only if the amount is reasonable" },
      { k: "D", ru: "Половину суммы", en: "Half the amount" }
    ],
    correct: "B",
    why: {
      A: { ru: "Оформление W-2 положения не меняет: индивидуальный предприниматель работником своего бизнеса не является.", en: "Issuing a W-2 changes nothing: a sole proprietor is not an employee of his own business." },
      B: { ru: "Верно. Перечисление себе — изъятие средств, а не расход. Прибыль облагается у владельца в любом случае, а разумность обсуждается у S-корпораций, а не здесь.", en: "Correct. A transfer to himself is a draw, not an expense. The profit is taxed to the owner in any event, and reasonable compensation is an S corporation issue, not this one." },
      C: { ru: "Условие разумности к собственным изъятиям неприменимо: они не вычитаются в принципе.", en: "The reasonableness test does not apply to a proprietor’s own draws: they are not deductible at all." },
      D: { ru: "Половина вычитается у налога на самозанятость, и это другое правило.", en: "One-half relates to self-employment tax, which is a different rule." }
    }
  },
  {
    ru: "Магазин выдал продавцу аванс $3 000 и в том же году решил не требовать его назад, поскольку продавец отработал сезон. Как это учитывается у магазина?",
    en: "A shop advanced $3,000 to a salesperson and later that year decided not to seek repayment, since the salesperson had worked the season. How does the shop treat it?",
    opts: [
      { k: "A", ru: "Как невозвратный заём: убыток по безнадёжному долгу", en: "As an uncollectible loan: a bad debt loss" },
      { k: "B", ru: "Как оплату труда, вычитаемую в Schedule C", en: "As pay, deductible on Schedule C" },
      { k: "C", ru: "Как подарок работнику, не вычитаемый вовсе", en: "As a gift to the employee, not deductible" },
      { k: "D", ru: "Никак: деньги были выданы авансом", en: "Not at all: the money was an advance" }
    ],
    correct: "B",
    why: {
      A: { ru: "Безнадёжный долг возникает там, где возврата ждали. Здесь возврата не ждут, а выплата привязана к отработанному сезону.", en: "A bad debt arises where repayment was expected. Here it is not, and the payment tracks the season worked." },
      B: { ru: "Верно. Заём или аванс, возврата которого вы не ждёте, считается оплатой труда, если он дан за фактически оказанные личные услуги.", en: "Correct. A loan or advance you do not expect to be repaid is treated as pay if given for personal services actually performed." },
      C: { ru: "Передача работнику за услуги подарком не является — это оплата.", en: "A transfer to an employee for services is not a gift — it is pay." },
      D: { ru: "Расход возник в момент, когда стало ясно, что возврата не будет.", en: "The expense arose when it became clear there would be no repayment." }
    }
  },
  {
    ru: "Компания на методе начисления начислила в декабре 2025 года премию $40 000 своему единственному акционеру, работающему в ней; акционер на кассовом методе, выплата произведена в июле 2026 года. Когда вычитается премия?",
    en: "An accrual-method company accrued a $40,000 bonus in December 2025 to its sole shareholder-employee, who is on the cash method; the bonus was paid in July 2026. When is it deductible?",
    opts: [
      { k: "A", ru: "В 2025 году: расход начислен", en: "In 2025: the expense was accrued" },
      { k: "B", ru: "В 2026 году, когда сумма попадёт в доход получателя", en: "In 2026, when the amount enters the recipient’s income" },
      { k: "C", ru: "Половина в 2025, половина в 2026 году", en: "Half in 2025 and half in 2026" },
      { k: "D", ru: "Не вычитается вовсе", en: "Not deductible at all" }
    ],
    correct: "B",
    why: {
      A: { ru: "Обычное правило начисления здесь вытесняется правилом соответствия для связанных лиц.", en: "The ordinary accrual rule is displaced here by the matching rule for related persons." },
      B: { ru: "Верно. По §267 расход перед связанным лицом на кассовом методе вычитается не раньше года, в котором сумма включается в доход получателя. Правило разобрано в модуле 1.", en: "Correct. Under section 267 an expense owed to a related cash-method person is deductible no earlier than the year the amount is included in the recipient’s income. The rule is covered in module 1." },
      C: { ru: "Деления правило не предусматривает.", en: "The rule provides for no split." },
      D: { ru: "Вычет не теряется, а откладывается.", en: "The deduction is deferred, not lost." }
    }
  },
  {
    ru: "Владелец мастерской платит сыну-студенту $28 000 в год за работу приёмщиком; на рынке такая работа стоит около $27 000, сын действительно работает полный день. Что вычитается?",
    en: "A workshop owner pays his student son $28,000 a year as a service adviser; the market rate for the role is about $27,000 and the son genuinely works full time. What is deductible?",
    opts: [
      { k: "A", ru: "Ничего: выплаты членам семьи не вычитаются", en: "Nothing: payments to family members are not deductible" },
      { k: "B", ru: "$28 000", en: "$28,000" },
      { k: "C", ru: "$27 000, а разница считается подарком", en: "$27,000, with the difference treated as a gift" },
      { k: "D", ru: "Половина суммы", en: "Half the amount" }
    ],
    correct: "B",
    why: {
      A: { ru: "Автоматического запрета на выплаты родственникам нет. Проверяются те же два условия, что и для любого работника.", en: "There is no automatic bar on paying relatives. The same two tests apply as for any employee." },
      B: { ru: "Верно. Оба условия выполнены: работа фактически выполняется полный день, а $28 000 против рыночных $27 000 — сумма разумная. Точного совпадения с рынком закон не требует.", en: "Correct. Both tests are met: the work is genuinely performed full time and $28,000 against a $27,000 market rate is reasonable. Exact equality with the market is not required." },
      C: { ru: "Небольшое превышение над средней рыночной ставкой разумности не разрушает.", en: "A modest excess over the average market rate does not destroy reasonableness." },
      D: { ru: "Оснований делить сумму пополам нет.", en: "There is no ground for halving the amount." }
    }
  },
  {
    ru: "Что из перечисленного НЕ является дополнительной льготой работнику?",
    en: "Which of the following is NOT a fringe benefit?",
    opts: [
      { k: "A", ru: "Предоставление служебного автомобиля", en: "The use of a company car" },
      { k: "B", ru: "Скидки на товары компании", en: "Discounts on the company’s goods" },
      { k: "C", ru: "Питание и жильё, предоставленные работодателем", en: "Meals and lodging provided by the employer" },
      { k: "D", ru: "Возмещение работнику подтверждённых командировочных расходов", en: "Reimbursement of an employee’s substantiated travel costs" }
    ],
    correct: "D",
    why: {
      A: { ru: "Служебный автомобиль — классический пример дополнительной льготы.", en: "A company car is a classic fringe benefit." },
      B: { ru: "Скидки на товары и услуги прямо названы среди льгот.", en: "Discounts on property or services are expressly listed as fringe benefits." },
      C: { ru: "Питание и жильё — тоже льгота, хотя часть её может быть освобождена от налога.", en: "Meals and lodging are a fringe benefit too, though part may be tax-free." },
      D: { ru: "Верно. Возмещение подтверждённых деловых расходов — не форма вознаграждения, а возврат работнику его же затрат по подотчётному плану. У работника оно не образует дохода.", en: "Correct. Reimbursing substantiated business costs is not a form of pay but a return of the employee’s own outlay under an accountable plan. It produces no income for the employee." }
    }
  },
  {
    ru: "Компания передала работнику в счёт вознаграждения оборудование рыночной стоимостью $9 000; её база в оборудовании — $5 500. Какую сумму компания вычитает как оплату труда?",
    en: "A company transferred equipment worth $9,000 to an employee as compensation; its basis in the equipment is $5,500. How much does it deduct as pay?",
    opts: [
      { k: "A", ru: "$5 500", en: "$5,500" },
      { k: "B", ru: "$9 000", en: "$9,000" },
      { k: "C", ru: "$3 500", en: "$3,500" },
      { k: "D", ru: "Ничего: оплата произведена не деньгами", en: "Nothing: the payment was not in money" }
    ],
    correct: "B",
    why: {
      A: { ru: "База важна для расчёта прибыли от передачи имущества, но не для размера вознаграждения.", en: "Basis matters in computing gain on the transfer, not in measuring the compensation." },
      B: { ru: "Верно. Оплата в натуральной форме измеряется рыночной стоимостью переданного. У работника в доход тоже войдут $9 000.", en: "Correct. Payment in kind is measured by the fair market value of what was transferred. The employee likewise takes $9,000 into income." },
      C: { ru: "$3 500 — это прирост стоимости имущества, отдельная величина.", en: "$3,500 is the appreciation in the property, a separate figure." },
      D: { ru: "Оплата может быть деньгами, имуществом или услугами.", en: "Pay may be in cash, property or services." }
    }
  },
  {
    ru: "Предприниматель взял в банке $80 000: $60 000 потрачены на оборудование мастерской, $20 000 — на семейный отпуск. За год уплачено $6 400 процентов. Сколько идёт в Schedule C?",
    en: "A proprietor borrowed $80,000: $60,000 went on workshop equipment and $20,000 on a family holiday. Interest for the year was $6,400. How much goes on Schedule C?",
    opts: [
      { k: "A", ru: "$6 400: заём взят предпринимателем на бизнес", en: "$6,400: the loan was taken by a business owner" },
      { k: "B", ru: "$4 800", en: "$4,800" },
      { k: "C", ru: "$1 600", en: "$1,600" },
      { k: "D", ru: "Ничего: заём смешанный", en: "Nothing: the loan is mixed" }
    ],
    correct: "B",
    why: {
      A: { ru: "Смешанный заём делится по назначению средств.", en: "A mixed-purpose loan is split according to the use of the proceeds." },
      B: { ru: "Верно. Деловая доля — $60 000 из $80 000, то есть 75%: $6 400 × 0,75 = $4 800. Остальное следует правилам личных процентов.", en: "Correct. The business share is $60,000 of $80,000, that is 75%: $6,400 × 0.75 = $4,800. The rest follows the personal interest rules." },
      C: { ru: "$1 600 — это личная доля, а не деловая.", en: "$1,600 is the personal share, not the business one." },
      D: { ru: "Смешанный характер займа не лишает вычета деловую часть.", en: "A mixed purpose does not disallow the business portion." }
    }
  },
  {
    ru: "Предприниматель заложил станки своей мастерской и все полученные средства направил на покупку дачи для семьи. Как учитываются проценты по этому займу?",
    en: "A proprietor pledged his workshop machinery and spent all the proceeds buying a holiday house for the family. How is the interest treated?",
    opts: [
      { k: "A", ru: "Деловые проценты: заём обеспечен имуществом бизнеса", en: "Business interest: the loan is secured by business property" },
      { k: "B", ru: "Личные проценты: средства израсходованы на личные цели", en: "Personal interest: the proceeds were spent personally" },
      { k: "C", ru: "Делятся пополам", en: "Split evenly" },
      { k: "D", ru: "Не вычитаются вовсе", en: "Not deductible at all" }
    ],
    correct: "B",
    why: {
      A: { ru: "Предмет залога не определяет характер процентов — это и есть проверяемая ошибка.", en: "The collateral does not determine the character of the interest — that is the very error being tested." },
      B: { ru: "Верно. Решает назначение средств. Заём под деловое имущество, потраченный лично, даёт личные проценты — как и обратный случай даёт деловые.", en: "Correct. The use of the proceeds decides. A loan against business property spent personally yields personal interest — just as the reverse case yields business interest." },
      C: { ru: "Делить нечего: все средства пошли на одну цель.", en: "There is nothing to split: all the proceeds went to one purpose." },
      D: { ru: "Личные проценты по такому займу могут быть вычитаемы по своим правилам, но в Schedule C они не идут.", en: "Personal interest on such a loan may be deductible under its own rules, but it does not belong on Schedule C." }
    }
  },
  {
    ru: "Самозанятый уплатил $1 800 процентов по автокредиту; автомобиль используется на 40% в бизнесе. Он заявил личную долю как проценты по квалифицированному автозайму в Schedule 1-A. Что он вправе поставить в Schedule C?",
    en: "A self-employed taxpayer paid $1,800 of car loan interest; the car is 40% business. He claimed the personal share as qualified passenger vehicle loan interest on Schedule 1-A. What may he put on Schedule C?",
    opts: [
      { k: "A", ru: "$1 800", en: "$1,800" },
      { k: "B", ru: "$720", en: "$720" },
      { k: "C", ru: "$1 080", en: "$1,080" },
      { k: "D", ru: "Ничего: вычет уже заявлен в Schedule 1-A", en: "Nothing: the deduction was already claimed on Schedule 1-A" }
    ],
    correct: "B",
    why: {
      A: { ru: "Личная доля в Schedule C не идёт никогда, а здесь она к тому же уже заявлена в другом месте.", en: "The personal share never belongs on Schedule C, and here it has already been claimed elsewhere." },
      B: { ru: "Верно. Деловая доля 40% от $1 800 — это $720, и она идёт в Schedule C. В Schedule 1-A заявлены остальные $1 080 личной доли; удвоение запрещено, но деловая часть не затрагивается.", en: "Correct. The business share, 40% of $1,800, is $720 and goes on Schedule C. The other $1,080 personal share went on Schedule 1-A; double-claiming is barred, but the business portion is untouched." },
      C: { ru: "$1 080 — это личная доля, заявленная в Schedule 1-A.", en: "$1,080 is the personal share claimed on Schedule 1-A." },
      D: { ru: "Запрет касается повторного заявления одной и той же суммы, а не делового вычета вообще.", en: "The bar covers claiming the same amount twice, not the business deduction as such." }
    }
  },
  {
    ru: "Какое изменение действует при расчёте лимита вычета деловых процентов за налоговые годы, начинающиеся в 2025 году?",
    en: "What change applies in figuring the business interest limitation for tax years beginning in 2025?",
    opts: [
      { k: "A", ru: "Амортизация, амортизация нематериальных активов и истощение прибавляются обратно к налогооблагаемому доходу", en: "Depreciation, amortization and depletion are added back to taxable income" },
      { k: "B", ru: "Ограничение отменено для всех налогоплательщиков", en: "The limitation is repealed for all taxpayers" },
      { k: "C", ru: "Ограничение распространено на всех независимо от выручки", en: "The limitation now covers everyone regardless of receipts" },
      { k: "D", ru: "Лимит считается от валовой выручки, а не от дохода", en: "The limit is figured on gross receipts rather than on income" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Возврат к базе, из которой не вычитаются амортизация и истощение, расширяет скорректированный налогооблагаемый доход и тем смягчает ограничение.", en: "Correct. Returning to a base that does not subtract depreciation and depletion widens adjusted taxable income and so loosens the limitation." },
      B: { ru: "Ограничение сохраняется; изменилась лишь база его расчёта.", en: "The limitation remains; only the base for computing it changed." },
      C: { ru: "Освобождение малого налогоплательщика по тесту валовой выручки действует по-прежнему.", en: "The small business exemption under the gross receipts test still applies." },
      D: { ru: "Лимит по-прежнему считается от скорректированного налогооблагаемого дохода.", en: "The limit is still computed on adjusted taxable income." }
    }
  },
  {
    ru: "Предприниматель уплатил IRS $1 400 процентов на недоплаченный подоходный налог, возникший из-за занижения прибыли по Schedule C, и $900 процентов по кредиту на закупку товара. Что идёт в Schedule C?",
    en: "A proprietor paid the IRS $1,400 of interest on an income tax underpayment caused by understated Schedule C profit, and $900 of interest on a loan used to buy inventory. What goes on Schedule C?",
    opts: [
      { k: "A", ru: "$2 300", en: "$2,300" },
      { k: "B", ru: "$900", en: "$900" },
      { k: "C", ru: "$1 400", en: "$1,400" },
      { k: "D", ru: "Ничего", en: "Nothing" }
    ],
    correct: "B",
    why: {
      A: { ru: "Проценты по личному подоходному налогу деловыми не становятся от происхождения недоимки.", en: "Interest on personal income tax does not become business interest because of where the underpayment came from." },
      B: { ru: "Верно. Вычитаются только проценты по займу, средства которого пошли на бизнес.", en: "Correct. Only the interest on the loan whose proceeds went into the business is deductible." },
      C: { ru: "Это как раз невычитаемая часть.", en: "That is precisely the nondeductible part." },
      D: { ru: "Проценты по товарному кредиту — обычный деловой расход.", en: "Interest on an inventory loan is an ordinary business expense." }
    }
  },
  {
    ru: "Договор на погрузчик: 60 месячных платежей по $1 200, по окончании срока право собственности переходит к плательщику без дополнительной оплаты. Как учитываются платежи?",
    en: "A forklift agreement calls for 60 monthly payments of $1,200, after which title passes to the payer at no further cost. How are the payments treated?",
    opts: [
      { k: "A", ru: "Вычитаются как аренда по $14 400 в год", en: "Deducted as rent at $14,400 a year" },
      { k: "B", ru: "Не вычитаются как аренда: формируют базис и амортизируются", en: "Not deducted as rent: they build basis and are depreciated" },
      { k: "C", ru: "Вычитаются как аренда, но только половина", en: "Deducted as rent, but only half" },
      { k: "D", ru: "Вычитаются в последний год договора", en: "Deducted in the final year of the agreement" }
    ],
    correct: "B",
    why: {
      A: { ru: "Аренда — плата за пользование имуществом, которым вы не владеете и не станете владеть.", en: "Rent is payment for the use of property you do not own and will not own." },
      B: { ru: "Верно. Переход титула по окончании срока делает договор покупкой в рассрочку: платежи формируют базис погрузчика и возмещаются через амортизацию.", en: "Correct. Title passing at the end makes this a purchase in instalments: the payments build the forklift’s basis and are recovered through depreciation." },
      C: { ru: "Частичного вычета такой договор не даёт.", en: "Such an agreement gives no partial rent deduction." },
      D: { ru: "Отложить вычет на последний год оснований нет.", en: "There is no ground for deferring the deduction to the final year." }
    }
  },
  {
    ru: "Компания арендует склад у своего единственного акционера за $9 000 в месяц; аналогичные склады в районе сдаются за $5 500. Что вычитается?",
    en: "A company rents a warehouse from its sole shareholder for $9,000 a month; comparable warehouses in the area let for $5,500. What is deductible?",
    opts: [
      { k: "A", ru: "$108 000 за год", en: "$108,000 for the year" },
      { k: "B", ru: "$66 000 за год", en: "$66,000 for the year" },
      { k: "C", ru: "Ничего: арендодатель — связанное лицо", en: "Nothing: the lessor is a related party" },
      { k: "D", ru: "$54 000 за год", en: "$54,000 for the year" }
    ],
    correct: "B",
    why: {
      A: { ru: "Неразумно завышенная часть аренды вычету не подлежит.", en: "The unreasonably inflated portion of the rent is not deductible." },
      B: { ru: "Верно. Разумной признаётся аренда в размере того, что заплатили бы постороннему: $5 500 × 12 = $66 000. Превышение вычету не подлежит.", en: "Correct. Reasonable rent is what would be paid to a stranger: $5,500 × 12 = $66,000. The excess is not deductible." },
      C: { ru: "Связанность сама по себе вычета не отменяет — она лишь заставляет проверять разумность.", en: "Relatedness alone does not deny the deduction — it merely makes reasonableness an issue." },
      D: { ru: "Половины рыночной ставки правило не требует.", en: "The rule does not call for half the market rate." }
    }
  },
  {
    ru: "Арендная плата магазина установлена как 7% валовой выручки; арендодатель — посторонняя компания. За год выручка составила $1 400 000, аренда — $98 000. Что вычитается?",
    en: "A shop’s rent is set at 7% of gross receipts and the lessor is unrelated. Receipts for the year were $1,400,000 and rent $98,000. What is deductible?",
    opts: [
      { k: "A", ru: "$98 000", en: "$98,000" },
      { k: "B", ru: "Ничего: аренда не может зависеть от выручки", en: "Nothing: rent cannot depend on receipts" },
      { k: "C", ru: "Только часть, соответствующая рыночной ставке за площадь", en: "Only the portion matching a market rate per square foot" },
      { k: "D", ru: "$70 000 — максимум 5% выручки", en: "$70,000 — a maximum of 5% of receipts" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Расчёт аренды как доли валовой выручки — обычное условие торговых договоров и неразумной её не делает. Арендодатель к тому же не связан с арендатором.", en: "Correct. Figuring rent as a share of gross receipts is a standard retail arrangement and does not make it unreasonable. The lessor is unrelated besides." },
      B: { ru: "Такого запрета не существует.", en: "No such prohibition exists." },
      C: { ru: "Пересчёт по ставке за площадь потребовался бы при связанном арендодателе и явно завышенной плате.", en: "Recomputing at a per-area rate would arise only with a related lessor and clearly inflated rent." },
      D: { ru: "Потолка в процентах от выручки закон не устанавливает.", en: "The law sets no percentage-of-receipts ceiling." }
    }
  },
  {
    ru: "1 сентября 2025 года компания на кассовом методе уплатила $30 000 аренды за период с сентября 2025 по август 2026 года. Сколько вычитается за 2025 год?",
    en: "On September 1, 2025, a cash-method company paid $30,000 of rent covering September 2025 through August 2026. How much is deductible for 2025?",
    opts: [
      { k: "A", ru: "$30 000", en: "$30,000" },
      { k: "B", ru: "$10 000", en: "$10,000" },
      { k: "C", ru: "$20 000", en: "$20,000" },
      { k: "D", ru: "Ничего до окончания срока аренды", en: "Nothing until the lease period ends" }
    ],
    correct: "B",
    why: {
      A: { ru: "Аренда вперёд вычитается только в части, приходящейся на пользование имуществом в этом году.", en: "Rent paid in advance is deducted only to the extent it covers use of the property this year." },
      B: { ru: "Верно. На 2025 год приходятся четыре месяца из двенадцати: $30 000 × 4 ÷ 12 = $10 000. Оставшиеся $20 000 вычитаются в 2026 году.", en: "Correct. Four of the twelve months fall in 2025: $30,000 × 4 ÷ 12 = $10,000. The other $20,000 is deducted in 2026." },
      C: { ru: "$20 000 — это доля 2026 года.", en: "$20,000 is the 2026 share." },
      D: { ru: "Часть периода в 2025 году уже использована, и она вычитается.", en: "Part of the period fell in 2025 and that part is deductible." }
    }
  },
  {
    ru: "Арендатор по условиям договора уплатил налог на недвижимость арендодателя $11 000. Как это учитывается?",
    en: "Under the lease a tenant paid $11,000 of the landlord’s real estate tax. How is that treated?",
    opts: [
      { k: "A", ru: "Арендатор вычитает $11 000 как налог; у арендодателя дохода нет", en: "The tenant deducts $11,000 as tax; the landlord has no income" },
      { k: "B", ru: "Арендатор вычитает $11 000 как дополнительную арендную плату; арендодатель включает $11 000 в доход", en: "The tenant deducts $11,000 as additional rent; the landlord includes $11,000 in income" },
      { k: "C", ru: "Ни у кого ничего не возникает: налог просто уплачен", en: "Nothing arises for either party: the tax was simply paid" },
      { k: "D", ru: "Арендодатель вычитает налог, арендатор — ничего", en: "The landlord deducts the tax and the tenant deducts nothing" }
    ],
    correct: "B",
    why: {
      A: { ru: "Половина верна: вычет у арендатора есть. Но обязанность была не его, поэтому вычитается аренда, а у арендодателя возникает доход.", en: "Half right: the tenant does get a deduction. But the obligation was not his, so what he deducts is rent, and the landlord has income." },
      B: { ru: "Верно. Налоги, уплаченные арендатором за арендодателя по деловому имуществу, считаются дополнительной арендной платой: вычет у одного, доход у другого.", en: "Correct. Taxes a tenant pays for a landlord on business property are additional rent: a deduction for one and income for the other." },
      C: { ru: "Обе стороны обязаны отразить операцию.", en: "Both sides must report the transaction." },
      D: { ru: "Арендодатель включает сумму в доход и одновременно вычитает уплаченный за него налог — но не вместо арендатора.", en: "The landlord takes the amount into income and also deducts the tax paid on his behalf — but not instead of the tenant." }
    }
  },
  {
    ru: "Арендатор за свой счёт возвёл на арендованном участке склад стоимостью $260 000. Срок аренды — 20 лет. Как учитываются затраты?",
    en: "A tenant built a $260,000 warehouse on leased land at his own expense. The lease runs 20 years. How is the cost treated?",
    opts: [
      { k: "A", ru: "Вычитаются как дополнительная арендная плата в год постройки", en: "Deducted as additional rent in the year of construction" },
      { k: "B", ru: "Капитализируются и возмещаются через амортизацию", en: "Capitalized and recovered through depreciation" },
      { k: "C", ru: "Вычитаются равными долями по $13 000 в год как арендная плата", en: "Deducted as rent in equal parts of $13,000 a year" },
      { k: "D", ru: "Не учитываются вовсе: имущество чужое", en: "Not accounted for at all: the property belongs to someone else" }
    ],
    correct: "B",
    why: {
      A: { ru: "Постройка создала долгоживущий актив, а не оплатила пользование за год.", en: "The building created a long-lived asset rather than paying for a year’s use." },
      B: { ru: "Верно. Стоимость зданий и постоянных улучшений, возведённых арендатором на чужом имуществе, капитализируется и возмещается через амортизацию, а не вычитается как аренда.", en: "Correct. The cost of buildings and permanent improvements a tenant erects on the lessor’s property is capitalized and recovered through depreciation, not deducted as rent." },
      C: { ru: "Равномерное распределение по сроку аренды применяется к плате за приобретение самого договора, а не к постройкам.", en: "Spreading over the lease term applies to a sum paid to acquire the leasehold, not to buildings." },
      D: { ru: "Затраты понесены арендатором и подлежат возмещению им же.", en: "The tenant incurred the cost and recovers it himself." }
    }
  },
  {
    ru: "Компания заплатила $45 000 предыдущему арендатору за передачу договора аренды, до конца которого остаётся 15 лет. Как учитывается эта сумма?",
    en: "A company paid $45,000 to a previous tenant to take over a lease with 15 years remaining. How is that treated?",
    opts: [
      { k: "A", ru: "Вычитается целиком в год уплаты", en: "Deducted in full in the year paid" },
      { k: "B", ru: "$3 000 в год в течение оставшегося срока аренды", en: "$3,000 a year over the remaining term of the lease" },
      { k: "C", ru: "Амортизируется как нежилая недвижимость за 39 лет", en: "Depreciated as nonresidential real property over 39 years" },
      { k: "D", ru: "Не вычитается: это плата за нематериальное право", en: "Not deductible: it buys an intangible right" }
    ],
    correct: "B",
    why: {
      A: { ru: "Сумма куплена ради выгоды на весь оставшийся срок и на один год не относится.", en: "The payment buys a benefit for the whole remaining term and does not belong to one year." },
      B: { ru: "Верно. Приобретение самого договора аренды за определённую сумму даёт вычет равными долями исходя из числа лет, которые договору осталось действовать: $45 000 ÷ 15 = $3 000.", en: "Correct. Acquiring a leasehold for a specified sum gives a deduction of an aliquot part each year over the years the lease has to run: $45,000 ÷ 15 = $3,000." },
      C: { ru: "Срок амортизации недвижимости к стоимости договора отношения не имеет.", en: "The recovery period for real property has nothing to do with the cost of a lease." },
      D: { ru: "Вычет полагается, но растянутый во времени.", en: "A deduction is allowed, but spread over time." }
    }
  },
  {
    ru: "Куда идёт половина налога на самозанятость?",
    en: "Where does one-half of self-employment tax go?",
    opts: [
      { k: "A", ru: "В Schedule C как расход бизнеса", en: "On Schedule C as a business expense" },
      { k: "B", ru: "В Schedule 1, строку 15", en: "On Schedule 1, line 15" },
      { k: "C", ru: "В Schedule A при детализации вычетов", en: "On Schedule A if the taxpayer itemizes" },
      { k: "D", ru: "Не вычитается вовсе", en: "It is not deductible at all" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это самая частая ошибка: вычет существует, но он не уменьшает прибыль Schedule C и потому не уменьшает саму базу налога на самозанятость.", en: "This is the commonest error: the deduction exists but does not reduce Schedule C profit, and so does not reduce the self-employment tax base itself." },
      B: { ru: "Верно. Половина налога на самозанятость вычитается в Schedule 1, строке 15 — выше линии, но за пределами Schedule C.", en: "Correct. One-half of self-employment tax is deducted on Schedule 1, line 15 — above the line, but outside Schedule C." },
      C: { ru: "Schedule A предназначен для постатейных вычетов, а этот вычет доступен независимо от детализации.", en: "Schedule A is for itemized deductions, and this one is available whether or not the taxpayer itemizes." },
      D: { ru: "Вычет существует и предоставляется всем плательщикам налога на самозанятость.", en: "The deduction exists and is available to every payer of self-employment tax." }
    }
  },
  {
    ru: "Какой налог вычитается в Schedule C?",
    en: "Which tax is deducted on Schedule C?",
    opts: [
      { k: "A", ru: "Федеральный подоходный налог владельца", en: "The owner’s federal income tax" },
      { k: "B", ru: "Налог штата на валовой доход бизнеса", en: "A state tax on the gross income of the business" },
      { k: "C", ru: "Подоходный налог штата с чистого дохода владельца", en: "State income tax on the owner’s net income" },
      { k: "D", ru: "Удержанная из зарплаты работников доля социального налога", en: "The employees’ share of social security withheld from wages" }
    ],
    correct: "B",
    why: {
      A: { ru: "Федеральный подоходный налог не вычитается нигде.", en: "Federal income tax is deducted nowhere." },
      B: { ru: "Верно. Налог штата на <em>валовой</em> доход, прямо относящийся к бизнесу, идёт в Schedule C. Именно валовой, а не чистый — в этом и различие.", en: "Correct. A state tax on <em>gross</em> income directly attributable to the business goes on Schedule C. Gross, not net — that is the distinction." },
      C: { ru: "Подоходные налоги штата с чистого дохода идут в Schedule A при детализации вычетов.", en: "State income taxes on net income go on Schedule A if the taxpayer itemizes." },
      D: { ru: "Удержанная доля работника — его деньги. Вычитается только доля работодателя.", en: "The withheld employee share is the employee’s money. Only the employer share is deducted." }
    }
  },
  {
    ru: "Компания начислила работникам зарплату $200 000, удержала $15 300 их доли социального налога и Medicare и уплатила столько же как работодатель. Какую сумму она вычитает?",
    en: "A company accrued $200,000 of wages, withheld $15,300 as the employees’ share of social security and Medicare, and paid the same amount as employer. What does it deduct?",
    opts: [
      { k: "A", ru: "$200 000", en: "$200,000" },
      { k: "B", ru: "$215 300", en: "$215,300" },
      { k: "C", ru: "$230 600", en: "$230,600" },
      { k: "D", ru: "$184 700", en: "$184,700" }
    ],
    correct: "B",
    why: {
      A: { ru: "Пропущена доля работодателя — это отдельный вычитаемый расход.", en: "This omits the employer share, which is a separate deductible expense." },
      B: { ru: "Верно. Зарплата $200 000 вычитается целиком, включая удержанную часть, плюс $15 300 доли работодателя. Итого $215 300.", en: "Correct. The $200,000 of wages is deducted in full, withholding included, plus the $15,300 employer share. That is $215,300." },
      C: { ru: "Здесь доля работника посчитана дважды: она уже сидит внутри $200 000 зарплаты.", en: "This counts the employee share twice: it is already inside the $200,000 of wages." },
      D: { ru: "Удержанная сумма из вычета не исключается: она часть начисленной зарплаты.", en: "The withheld amount is not excluded from the deduction: it is part of the wages accrued." }
    }
  },
  {
    ru: "Магазин купил витрины за $22 000 и уплатил налог с продаж $1 760. Как учитывается налог с продаж?",
    en: "A shop bought display cases for $22,000 and paid $1,760 of sales tax. How is the sales tax treated?",
    opts: [
      { k: "A", ru: "Вычитается в Schedule C как налог", en: "Deducted on Schedule C as a tax" },
      { k: "B", ru: "Прибавляется к базе амортизации витрин", en: "Added to the depreciable basis of the display cases" },
      { k: "C", ru: "Вычитается в Schedule A", en: "Deducted on Schedule A" },
      { k: "D", ru: "Не учитывается вовсе", en: "Not accounted for at all" }
    ],
    correct: "B",
    why: {
      A: { ru: "Налог с продаж на покупку отдельной строкой расхода не вычитается.", en: "Sales tax on a purchase is not deducted as a separate expense item." },
      B: { ru: "Верно. Налог с продаж входит в стоимость приобретённого: база амортизации витрин составит $23 760. Если бы купили товар для перепродажи, налог вошёл бы в себестоимость.", en: "Correct. Sales tax becomes part of the cost of what was bought: the depreciable basis is $23,760. Had it been merchandise for resale, the tax would enter cost of goods sold." },
      C: { ru: "Schedule A к покупкам для бизнеса отношения не имеет.", en: "Schedule A has nothing to do with business purchases." },
      D: { ru: "Сумма учитывается — через стоимость актива.", en: "The amount is accounted for — through the asset’s cost." }
    }
  },
  {
    ru: "Автомобиль прошёл за год 30 000 миль, из них 21 000 по делам бизнеса. Уплачены налог на движимое имущество $420 и регистрационный сбор штата $80. Сколько вычитается при учёте фактических расходов?",
    en: "A car ran 30,000 miles in the year, 21,000 of them on business. Personal property tax of $420 and a state registration fee of $80 were paid. How much is deductible under the actual expense method?",
    opts: [
      { k: "A", ru: "$500", en: "$500" },
      { k: "B", ru: "$350", en: "$350" },
      { k: "C", ru: "$294", en: "$294" },
      { k: "D", ru: "$420", en: "$420" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это вся сумма без учёта личного использования.", en: "That is the whole amount, ignoring personal use." },
      B: { ru: "Верно. Доля бизнеса — 21 000 ÷ 30 000 = 70%. Регистрационный сбор за право пользоваться имуществом в штате приравнивается к налогу: ($420 + $80) × 0,70 = $350.", en: "Correct. The business share is 21,000 ÷ 30,000 = 70%. A registration fee for the right to use property within a state is treated like the tax: ($420 + $80) × 0.70 = $350." },
      C: { ru: "Здесь взяты 70% только от налога, а регистрационный сбор пропущен.", en: "This takes 70% of the tax alone and leaves out the registration fee." },
      D: { ru: "Это налог целиком, без деления по использованию.", en: "That is the full tax, undivided by use." }
    }
  },
  {
    ru: "Магазин собрал с покупателей $26 000 налога с продаж и перечислил их в бюджет штата. Как это отражается в декларации?",
    en: "A shop collected $26,000 of sales tax from customers and remitted it to the state. How does that appear on the return?",
    opts: [
      { k: "A", ru: "$26 000 в валовую выручку и $26 000 в вычеты", en: "$26,000 into gross receipts and $26,000 into deductions" },
      { k: "B", ru: "$26 000 только в вычеты", en: "$26,000 into deductions only" },
      { k: "C", ru: "Не отражается ни в выручке, ни в вычетах", en: "Neither in receipts nor in deductions" },
      { k: "D", ru: "$26 000 только в валовую выручку", en: "$26,000 into gross receipts only" }
    ],
    correct: "C",
    why: {
      A: { ru: "Итог получился бы верный, но правило прямо предписывает не включать эти суммы ни туда, ни туда.", en: "The net result would be right, but the rule expressly says to include the amounts in neither." },
      B: { ru: "Вычета нет, поскольку сумма и в доход не включалась.", en: "There is no deduction, because the amount never entered income." },
      C: { ru: "Верно. Налог, собранный с покупателя и переданный государству, проходит мимо декларации: это не ваш доход и не ваш расход.", en: "Correct. Tax collected from the buyer and passed to the government bypasses the return: it is neither your income nor your expense." },
      D: { ru: "Включение в выручку без вычета завысило бы прибыль.", en: "Including it in receipts without a deduction would overstate profit." }
    }
  },
  {
    ru: "Транспортная компания уплатила $34 000 налога на дизельное топливо, использованное в перевозках. Как это отражается?",
    en: "A haulage company paid $34,000 of tax on diesel fuel used in its operations. How is that reported?",
    opts: [
      { k: "A", ru: "Отдельной строкой налогов в Schedule C", en: "As a separate tax line on Schedule C" },
      { k: "B", ru: "Входит в стоимость топлива и отдельно не вычитается", en: "Included in the cost of the fuel and not deducted separately" },
      { k: "C", ru: "Не вычитается вовсе", en: "Not deductible at all" },
      { k: "D", ru: "Капитализируется как часть стоимости транспортных средств", en: "Capitalized into the basis of the vehicles" }
    ],
    correct: "B",
    why: {
      A: { ru: "Именно этого правило и просит не делать.", en: "That is precisely what the rule asks you not to do." },
      B: { ru: "Верно. Налоги на бензин, дизельное топливо и другие моторные топлива обычно входят в стоимость топлива. При этом за акциз на топливо, использованное в определённых целях, может полагаться кредит или возврат.", en: "Correct. Taxes on gasoline, diesel and other motor fuels are ordinarily part of the cost of the fuel. A credit or refund of federal excise tax may still be available for fuel used for certain purposes." },
      C: { ru: "Сумма вычитается — но в составе стоимости топлива.", en: "The amount is deducted — inside the cost of the fuel." },
      D: { ru: "Топливо расходуется, а не входит в стоимость транспортных средств.", en: "Fuel is consumed; it does not become part of the vehicles’ cost." }
    }
  }
];
