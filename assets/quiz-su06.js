/* ===================================================================
   Вопросы тренажёра, модуль 06.

   Отдельный файл, а не блок внутри страницы: под file:// страница не
   может прочитать другой файл, поэтому единственный способ отдать
   данные двум страницам сразу — тег <script src>. Файл подключают и
   su06.html, и trainer.html.

   QUIZSECS — названия подразделов. На странице модуля они есть в
   заголовках, на странице тренажёра их нет. Карта порождается
   скриптом из тех же заголовков, а сборка отказывается собирать
   файл, если названия разошлись.
   =================================================================== */

window.QUIZZES  = window.QUIZZES  || {};
window.QUIZSECS = window.QUIZSECS || {};

window.QUIZSECS.su06 = {
  s61: { no: "6.1", ru: "Откуда берётся базис", en: "Where basis comes from" },
  s62: { no: "6.2", ru: "Как базис меняется", en: "How basis changes" },
  s63: { no: "6.3", ru: "Обмен на подобное", en: "Like-kind exchanges" },
  s64: { no: "6.4", ru: "Вынужденное выбытие", en: "Involuntary conversions" }
};

window.QUIZZES.su06 = [
  {
    sec: "s61",
    ru: "Здание куплено за $45 000 наличными; покупатель принял на себя ипотеку $155 000 и уплатил $6 000 комиссии брокеру. Каков базис здания?",
    en: "A building was bought for $45,000 cash; the buyer assumed a $155,000 mortgage and paid a $6,000 broker's commission. What is the basis?",
    opts: [
      { k: "A", ru: "$45 000", en: "$45,000" },
      { k: "B", ru: "$200 000", en: "$200,000" },
      { k: "C", ru: "$206 000", en: "$206,000" },
      { k: "D", ru: "$51 000", en: "$51,000" }
    ],
    correct: "C",
    why: {
      A: { ru: "В базис входят не только собственные деньги.", en: "Basis is not only your own cash." },
      B: { ru: "Ипотека учтена, а комиссия брокеру — нет; она тоже капитализируется.", en: "The mortgage is counted but the broker's commission is not; it is capitalized too." },
      C: { ru: "Верно. Принятое обязательство входит в базис так же, как деньги, а комиссия брокеру — закрывающий расход, который капитализируется.", en: "Correct. A liability assumed enters basis just as cash does, and the broker's commission is a closing cost that is capitalized." },
      D: { ru: "Принятая ипотека — часть цены, а не постороннее обстоятельство.", en: "The assumed mortgage is part of the price, not an outside circumstance." }
    }
  },
  {
    sec: "s61",
    ru: "Что из перечисленного НЕ входит в базис купленного здания?",
    en: "Which of the following does NOT go into the basis of a building bought?",
    opts: [
      { k: "A", ru: "Страхование титула", en: "Title insurance" },
      { k: "B", ru: "Налог с продаж, уплаченный при покупке", en: "Sales tax paid on the purchase" },
      { k: "C", ru: "Проценты по кредиту, взятому на покупку", en: "Interest on the loan used to buy it" },
      { k: "D", ru: "Регистрационные сборы", en: "Recording fees" }
    ],
    correct: "C",
    why: {
      A: { ru: "Закрывающий расход: капитализируется.", en: "A closing cost: capitalized." },
      B: { ru: "Налог с продаж входит в стоимость купленного.", en: "Sales tax becomes part of the cost of what was bought." },
      C: { ru: "Верно. Проценты — расход на пользование деньгами, а не на приобретение вещи; в базис они не идут, но вычитаются по своим правилам.", en: "Correct. Interest is a cost of using money, not of acquiring the thing; it stays out of basis but is deducted under its own rules." },
      D: { ru: "Закрывающий расход: капитализируется.", en: "A closing cost: capitalized." }
    }
  },
  {
    sec: "s61",
    ru: "Продавец вернул покупателю $3 000 скидки после покупки оборудования за $40 000. Как это учитывается?",
    en: "A seller paid the buyer a $3,000 rebate after the purchase of $40,000 of equipment. How is that treated?",
    opts: [
      { k: "A", ru: "Прочий доход $3 000; базис остаётся $40 000", en: "$3,000 of other income; basis stays $40,000" },
      { k: "B", ru: "Не доход; базис становится $37 000", en: "Not income; basis becomes $37,000" },
      { k: "C", ru: "Не доход и базис не меняется", en: "Not income and basis is unchanged" },
      { k: "D", ru: "Прочий доход $3 000; базис становится $37 000", en: "$3,000 of other income; basis becomes $37,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Скидка доходом не признаётся.", en: "A rebate is not income." },
      B: { ru: "Верно. Скидка покупателю — это уменьшение цены: ни дохода, ни включения в базис.", en: "Correct. A rebate to the buyer is a reduction of the purchase price: neither income nor an addition to basis." },
      C: { ru: "Цена фактически стала ниже, и базис следует за ней.", en: "The price is in fact lower, and basis follows it." },
      D: { ru: "Двойного учёта здесь нет: либо доход, либо уменьшение базиса, и верно второе.", en: "There is no double counting: either income or a basis reduction, and it is the latter." }
    }
  },
  {
    sec: "s61",
    ru: "Управляющий магазином полгода искал площадку под второй магазин; его зарплата за это время — $30 000. Комиссия риелтору за найденный объект — $12 000. Что капитализируется?",
    en: "A shop manager spent six months looking for a site for a second shop; his pay for that time was $30,000. The agent's commission on the property found was $12,000. What is capitalized?",
    opts: [
      { k: "A", ru: "Оба: $42 000", en: "Both: $42,000" },
      { k: "B", ru: "Только комиссия $12 000", en: "Only the $12,000 commission" },
      { k: "C", ru: "Только зарплата $30 000", en: "Only the $30,000 of pay" },
      { k: "D", ru: "Ничего", en: "Neither" }
    ],
    correct: "B",
    why: {
      A: { ru: "Оплата труда собственных работников приобретению не способствует по прямому правилу.", en: "Employee compensation is treated by an express rule as not facilitating the acquisition." },
      B: { ru: "Верно. Комиссия уплачена стороннему лицу за приобретение конкретного объекта и капитализируется; зарплата своего работника вычитается, сколько бы времени он на поиски ни потратил.", en: "Correct. The commission was paid to an outsider to acquire a particular property and is capitalized; an employee's pay is deducted, however much time was spent searching." },
      C: { ru: "Всё наоборот: капитализируется как раз комиссия.", en: "It is the other way round: the commission is what is capitalized." },
      D: { ru: "Комиссия — классический способствующий расход.", en: "The commission is the classic facilitative cost." }
    }
  },
  {
    sec: "s61",
    ru: "За $300 000 куплены здание и участок; их рыночные стоимости — $280 000 и $120 000. Каков базис здания?",
    en: "A building and a plot were bought together for $300,000; their market values are $280,000 and $120,000. What is the basis of the building?",
    opts: [
      { k: "A", ru: "$280 000", en: "$280,000" },
      { k: "B", ru: "$210 000", en: "$210,000" },
      { k: "C", ru: "$180 000", en: "$180,000" },
      { k: "D", ru: "$150 000", en: "$150,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Рыночная стоимость сама по себе базисом не становится: заплачено меньше.", en: "Market value does not itself become basis: less was paid." },
      B: { ru: "Верно. Цена делится пропорционально рыночным стоимостям: 300 000 × 280 000 ÷ 400 000.", en: "Correct. The price is split in proportion to market values: 300,000 × 280,000 ÷ 400,000." },
      C: { ru: "Так выходит, если вычесть из цены рыночную стоимость участка целиком.", en: "That is the result of subtracting the plot's full market value from the price." },
      D: { ru: "Пополам цена не делится: пропорция считается по рыночным стоимостям.", en: "The price is not halved: the proportion comes from market values." }
    }
  },
  {
    sec: "s61",
    ru: "Действующий бизнес куплен за $700 000. Рыночная стоимость всех его активов — $620 000. Что получает гудвилл?",
    en: "A going business was bought for $700,000. The market value of all its assets is $620,000. What does goodwill get?",
    opts: [
      { k: "A", ru: "$0", en: "$0" },
      { k: "B", ru: "$80 000", en: "$80,000" },
      { k: "C", ru: "$700 000", en: "$700,000" },
      { k: "D", ru: "Доля пропорционально стоимости остальных активов", en: "A share proportionate to the value of the other assets" }
    ],
    correct: "B",
    why: {
      A: { ru: "Ноль был бы, если бы цена оказалась ниже суммарной рыночной стоимости активов.", en: "Nothing would go there had the price fallen below the total market value of the assets." },
      B: { ru: "Верно. По остаточному методу каждому классу достаётся его рыночная стоимость, а гудвиллу — весь остаток цены: 700 000 − 620 000.", en: "Correct. Under the residual method each class takes its market value and goodwill takes the whole residue: 700,000 − 620,000." },
      C: { ru: "Прочие активы получают базис первыми.", en: "The other assets take basis first." },
      D: { ru: "Пропорция в остаточном методе не применяется; классы идут по очереди.", en: "The residual method uses no proportion; the classes go in order." }
    }
  },
  {
    sec: "s61",
    ru: "Подарены акции: базис дарителя $40 000, рыночная стоимость на день дарения $25 000. Одаряемый продал их за $47 000. Каков результат?",
    en: "Shares were given away: the donor's basis $40,000, market value at the date of the gift $25,000. The donee sold them for $47,000. What is the result?",
    opts: [
      { k: "A", ru: "Прибыль $22 000", en: "A $22,000 gain" },
      { k: "B", ru: "Прибыль $7 000", en: "A $7,000 gain" },
      { k: "C", ru: "Ни прибыли, ни убытка", en: "Neither gain nor loss" },
      { k: "D", ru: "Прибыль $47 000", en: "A $47,000 gain" }
    ],
    correct: "B",
    why: {
      A: { ru: "Так выходит от рыночной стоимости, а её берут только для убытка.", en: "That comes from the market value, which is used only for a loss." },
      B: { ru: "Верно. Для прибыли берётся базис дарителя: 47 000 − 40 000.", en: "Correct. For gain the donor's basis is used: 47,000 − 40,000." },
      C: { ru: "Средняя зона лежит между $25 000 и $40 000; продажа выше её.", en: "The middle zone lies between $25,000 and $40,000; this sale is above it." },
      D: { ru: "Базис у одаряемого есть, и он не нулевой.", en: "The donee does have a basis, and it is not zero." }
    }
  },
  {
    sec: "s61",
    ru: "Те же акции: базис дарителя $40 000, рыночная стоимость на день дарения $25 000. Продажа за $18 000. Каков результат?",
    en: "The same shares: the donor's basis $40,000, market value at the date of the gift $25,000. Sold for $18,000. What is the result?",
    opts: [
      { k: "A", ru: "Убыток $22 000", en: "A $22,000 loss" },
      { k: "B", ru: "Убыток $7 000", en: "A $7,000 loss" },
      { k: "C", ru: "Ни прибыли, ни убытка", en: "Neither gain nor loss" },
      { k: "D", ru: "Убыток $18 000", en: "An $18,000 loss" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это убыток по базису дарителя, а его для убытка брать нельзя: падение цены до дарения было потерей дарителя.", en: "That is the loss on the donor's basis, which may not be used for a loss: the fall in value before the gift was the donor's." },
      B: { ru: "Верно. Для убытка берётся рыночная стоимость на день дарения: 25 000 − 18 000.", en: "Correct. For loss the market value at the date of the gift is used: 25,000 − 18,000." },
      C: { ru: "Средняя зона кончается на $25 000; продажа ниже её.", en: "The middle zone ends at $25,000; this sale is below it." },
      D: { ru: "Базис не нулевой.", en: "The basis is not zero." }
    }
  },
  {
    sec: "s61",
    ru: "Те же акции: базис дарителя $40 000, рыночная стоимость на день дарения $25 000. Продажа за $32 000. Каков результат?",
    en: "The same shares: the donor's basis $40,000, market value at the date of the gift $25,000. Sold for $32,000. What is the result?",
    opts: [
      { k: "A", ru: "Прибыль $7 000", en: "A $7,000 gain" },
      { k: "B", ru: "Убыток $8 000", en: "An $8,000 loss" },
      { k: "C", ru: "Ни прибыли, ни убытка", en: "Neither gain nor loss" },
      { k: "D", ru: "Прибыль $7 000 и убыток $8 000 одновременно", en: "A $7,000 gain and an $8,000 loss at once" }
    ],
    correct: "C",
    why: {
      A: { ru: "Прибыль считается только по базису дарителя, а по нему выходит убыток.", en: "Gain is figured only on the donor's basis, and that gives a loss." },
      B: { ru: "Убыток считается только по рыночной стоимости, а по ней выходит прибыль.", en: "Loss is figured only on the market value, and that gives a gain." },
      C: { ru: "Верно. Оба расчёта запрещены своими же правилами, и результат — ноль. Это средняя зона между рыночной стоимостью и базисом дарителя.", en: "Correct. Each computation is barred by its own rule and the result is zero. This is the middle zone between market value and the donor's basis." },
      D: { ru: "Двух результатов сразу не бывает: остаётся ни того ни другого.", en: "There are not two results at once: what remains is neither." }
    }
  },
  {
    sec: "s61",
    ru: "Подарен участок рыночной стоимостью $69 000; базис дарителя $39 000, уплаченный налог на дарение $9 000, других подарков получателю не было. Каков базис одаряемого?",
    en: "A plot worth $69,000 was given away; the donor's basis was $39,000, the gift tax paid $9,000, and there were no other gifts to the recipient. What is the donee's basis?",
    opts: [
      { k: "A", ru: "$48 000", en: "$48,000" },
      { k: "B", ru: "$44 400", en: "$44,400" },
      { k: "C", ru: "$39 000", en: "$39,000" },
      { k: "D", ru: "$69 000", en: "$69,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Прибавлен весь налог, а прибавляется лишь его доля.", en: "The whole tax is added, when only a share of it is." },
      B: { ru: "Верно. Прирост $30 000 относится к сумме дарения $50 000 (69 000 минус годовое освобождение $19 000) как 60%; прибавляется 9 000 × 60% = $5 400.", en: "Correct. The $30,000 increase is 60% of the $50,000 amount of the gift (69,000 less the $19,000 annual exclusion); 9,000 × 60% = $5,400 is added." },
      C: { ru: "Часть налога на дарение к базису прибавляется.", en: "Part of the gift tax is added to basis." },
      D: { ru: "Рыночная стоимость становится базисом при наследовании, а не при дарении.", en: "Market value becomes basis on inheritance, not on a gift." }
    }
  },
  {
    sec: "s61",
    ru: "Наследник продал унаследованные акции через месяц после смерти наследодателя, купившего их за неделю до неё. Каков характер прироста?",
    en: "An heir sold inherited shares a month after the death of a decedent who had bought them a week before it. What is the character of the gain?",
    opts: [
      { k: "A", ru: "Краткосрочный: суммарно меньше года", en: "Short-term: less than a year in total" },
      { k: "B", ru: "Долгосрочный", en: "Long-term" },
      { k: "C", ru: "Обычный доход", en: "Ordinary income" },
      { k: "D", ru: "Зависит от срока владения наследодателя", en: "It depends on the decedent's holding period" }
    ],
    correct: "B",
    why: {
      A: { ru: "Календарь здесь не работает: правило устанавливает характер прямо.", en: "The calendar does not decide here: the rule fixes the character directly." },
      B: { ru: "Верно. Унаследованное имущество считается находившимся в долгосрочном владении всегда, независимо от фактических сроков у обоих.", en: "Correct. Inherited property is always treated as held long-term, whatever the actual periods on either side." },
      C: { ru: "Обычным доход становится по другим правилам — например, при возврате амортизации.", en: "Income becomes ordinary under other rules — depreciation recapture, for instance." },
      D: { ru: "Срок наследодателя к делу не относится.", en: "The decedent's period is irrelevant." }
    }
  },
  {
    sec: "s61",
    ru: "Управляющий наследством выбрал альтернативную дату оценки. Как определяется базис унаследованных активов?",
    en: "The personal representative elected the alternate valuation date. How is the basis of the inherited assets determined?",
    opts: [
      { k: "A", ru: "По рыночной стоимости через 6 месяцев после смерти — для всего имущества сразу", en: "At market value six months after death — for all the property at once" },
      { k: "B", ru: "По рыночной стоимости через 6 месяцев — для тех активов, которые подешевели", en: "At market value six months later — for those assets that fell in value" },
      { k: "C", ru: "По базису наследодателя", en: "At the decedent's basis" },
      { k: "D", ru: "По меньшей из стоимости на дату смерти и через 6 месяцев", en: "At the lesser of the value at death and six months later" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Выбор делается один раз и распространяется на всё наследство; выборочно применять его нельзя.", en: "Correct. The election is made once and applies to the whole estate; it cannot be applied selectively." },
      B: { ru: "Выборочность и есть главная ловушка этого вопроса.", en: "Selectivity is the main trap in this question." },
      C: { ru: "Базис наследодателя при наследовании не переходит.", en: "The decedent's basis does not carry over on inheritance." },
      D: { ru: "Меньшая из величин берётся при переводе личного имущества в деловое, а не здесь.", en: "The lesser of two figures is used on a conversion to business use, not here." }
    }
  },
  {
    sec: "s61",
    ru: "Квартира переведена в аренду. Скорректированный базис на день перевода — $180 000, рыночная стоимость — $150 000. Какова база для амортизации?",
    en: "A flat was converted to rental use. The adjusted basis at the date of the change was $180,000 and the market value $150,000. What is the basis for depreciation?",
    opts: [
      { k: "A", ru: "$180 000", en: "$180,000" },
      { k: "B", ru: "$150 000", en: "$150,000" },
      { k: "C", ru: "$165 000 — среднее", en: "$165,000 — the average" },
      { k: "D", ru: "Ноль: амортизация начинается только с покупки", en: "Zero: depreciation runs only from a purchase" }
    ],
    correct: "B",
    why: {
      A: { ru: "Скорректированный базис берётся для прибыли при продаже, а не для амортизации.", en: "The adjusted basis is used for gain on a later sale, not for depreciation." },
      B: { ru: "Верно. База для амортизации — меньшая из скорректированного базиса и рыночной стоимости на день перевода: падение цены за личный период в деловые вычеты не переходит.", en: "Correct. The basis for depreciation is the lesser of adjusted basis and market value at the date of the change: a fall in value during the personal period does not migrate into business deductions." },
      C: { ru: "Усреднение правилом не предусмотрено.", en: "No averaging is provided for." },
      D: { ru: "Переведённое имущество амортизируется с даты перевода.", en: "Converted property is depreciated from the date of the change." }
    }
  },
  {
    sec: "s62",
    ru: "Владелец сдавал здание пять лет и амортизацию не заявлял. При продаже базис уменьшается?",
    en: "An owner let a building for five years and never claimed depreciation. Is basis reduced on the sale?",
    opts: [
      { k: "A", ru: "Нет: вычета не было, значит и уменьшать нечего", en: "No: there was no deduction, so there is nothing to reduce" },
      { k: "B", ru: "Да, на полагавшуюся амортизацию", en: "Yes, by the depreciation that was allowable" },
      { k: "C", ru: "Да, но только наполовину", en: "Yes, but only by half" },
      { k: "D", ru: "Нет, если подана уточнённая декларация", en: "No, if an amended return is filed" }
    ],
    correct: "B",
    why: {
      A: { ru: "Именно этот ход правило и перекрывает.", en: "That is exactly the move the rule closes off." },
      B: { ru: "Верно. Базис уменьшается на амортизацию заявленную или полагавшуюся — на большую из двух. Пропуск вычета базис не сохраняет; исправляется это изменением метода учёта по форме 3115.", en: "Correct. Basis is reduced by depreciation allowed or allowable — the greater of the two. Skipping the deduction does not preserve basis; the remedy is a change of accounting method on Form 3115." },
      C: { ru: "Половин правило не знает.", en: "The rule knows no halves." },
      D: { ru: "Пропущенная амортизация за несколько лет уточнённой декларацией не исправляется.", en: "Several years of missed depreciation are not fixed by an amended return." }
    }
  },
  {
    sec: "s62",
    ru: "Что из перечисленного УВЕЛИЧИВАЕТ базис имущества?",
    en: "Which of the following INCREASES the basis of property?",
    opts: [
      { k: "A", ru: "Гонорары юристов за защиту титула на объект", en: "Legal fees to defend title to the property" },
      { k: "B", ru: "Полученное страховое возмещение по ущербу", en: "Insurance received for casualty damage" },
      { k: "C", ru: "Вычет по §179", en: "The section 179 deduction" },
      { k: "D", ru: "Необлагаемое распределение корпорации", en: "A nontaxable corporate distribution" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Защита титула — расход на само право собственности, он капитализируется, как и премии по страхованию титула.", en: "Correct. Defending title is a cost of the ownership itself; it is capitalized, as are title insurance premiums." },
      B: { ru: "Возмещение базис уменьшает.", en: "A recovery reduces basis." },
      C: { ru: "§179 приравнен к амортизации и базис уменьшает.", en: "Section 179 is treated as depreciation and reduces basis." },
      D: { ru: "Необлагаемое распределение — возврат капитала: базис уменьшается.", en: "A nontaxable distribution is a return of capital: basis goes down." }
    }
  },
  {
    sec: "s62",
    ru: "Здание пострадало от урагана. Заявлен вычет по ущербу $30 000, получено страховое возмещение $50 000, на ремонт потрачено $70 000 с восстановлением прежнего состояния. Как меняется базис?",
    en: "A building was damaged by a storm. A $30,000 casualty loss was deducted, $50,000 of insurance was received and $70,000 spent restoring it to its former condition. How does basis change?",
    opts: [
      { k: "A", ru: "Уменьшается на $80 000 и увеличивается на $70 000", en: "Down by $80,000 and up by $70,000" },
      { k: "B", ru: "Уменьшается на $30 000", en: "Down by $30,000" },
      { k: "C", ru: "Увеличивается на $70 000", en: "Up by $70,000" },
      { k: "D", ru: "Не меняется", en: "Unchanged" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Базис уменьшается и на вычет по ущербу, и на полученное возмещение, а восстановление имущества его увеличивает.", en: "Correct. Basis is reduced both by the casualty deduction and by the insurance received, and restoring the property increases it." },
      B: { ru: "Возмещение тоже уменьшает базис: это возврат вложенного.", en: "The insurance reduces basis as well: it is a return of what was invested." },
      C: { ru: "Уменьшения учтены не были.", en: "The reductions have been left out." },
      D: { ru: "Все три события базис затрагивают.", en: "All three events touch basis." }
    }
  },
  {
    sec: "s62",
    ru: "Оборудование куплено за $60 000, весь вычет по §179 заявлен в первый год. Каков базис в начале второго года?",
    en: "Equipment was bought for $60,000 and the whole section 179 deduction taken in the first year. What is the basis at the start of the second year?",
    opts: [
      { k: "A", ru: "$60 000", en: "$60,000" },
      { k: "B", ru: "$0", en: "$0" },
      { k: "C", ru: "$30 000", en: "$30,000" },
      { k: "D", ru: "$60 000 — §179 базис не трогает", en: "$60,000 — section 179 does not touch basis" }
    ],
    correct: "B",
    why: {
      A: { ru: "Базис уменьшается в год списания.", en: "Basis is reduced in the year of the write-off." },
      B: { ru: "Верно. §179 приравнен к амортизации и уменьшает базис на всю списанную сумму. При последующей продаже это даст возврат амортизации.", en: "Correct. Section 179 is treated as depreciation and reduces basis by the whole amount written off. On a later sale this produces depreciation recapture." },
      C: { ru: "Половинных правил здесь нет.", en: "There is no half rule here." },
      D: { ru: "Как раз трогает: это и есть его смысл.", en: "It does touch it: that is the point of it." }
    }
  },
  {
    sec: "s62",
    ru: "Куплен участок со старым складом за $400 000, из них $120 000 приходилось на склад. Склад снесён; снос обошёлся в $25 000. Что происходит?",
    en: "A plot with an old warehouse was bought for $400,000, of which $120,000 was the warehouse. The warehouse was demolished at a cost of $25,000. What happens?",
    opts: [
      { k: "A", ru: "$145 000 вычитаются как убыток", en: "$145,000 is deducted as a loss" },
      { k: "B", ru: "$25 000 вычитаются, $120 000 остаются в базисе склада", en: "$25,000 is deducted and $120,000 stays in the warehouse's basis" },
      { k: "C", ru: "И $25 000, и $120 000 переходят в базис земли", en: "Both the $25,000 and the $120,000 go into the basis of the land" },
      { k: "D", ru: "$120 000 амортизируются дальше", en: "The $120,000 continues to be depreciated" }
    ],
    correct: "C",
    why: {
      A: { ru: "Ни расходы на снос, ни несписанный базис вычету не подлежат.", en: "Neither the demolition costs nor the remaining basis is deductible." },
      B: { ru: "Расходы на снос тоже не вычитаются.", en: "The demolition costs are not deductible either." },
      C: { ru: "Верно. Базис снесённого строения и стоимость сноса относятся на землю; вернутся они только при продаже участка.", en: "Correct. The demolished structure's basis and the cost of demolition are allocated to the land; they come back only on a sale of the plot." },
      D: { ru: "Снесённого объекта больше нет, амортизировать нечего.", en: "The demolished property no longer exists; there is nothing to depreciate." }
    }
  },
  {
    sec: "s62",
    ru: "У акционера 200 акций с общим базисом $10 000. Объявлено дробление два к одному. Каков базис одной акции после дробления?",
    en: "A shareholder holds 200 shares with a total basis of $10,000. A two-for-one split is declared. What is the basis of one share afterwards?",
    opts: [
      { k: "A", ru: "$50", en: "$50" },
      { k: "B", ru: "$25", en: "$25" },
      { k: "C", ru: "$100", en: "$100" },
      { k: "D", ru: "Ноль у новых акций, $50 у прежних", en: "Zero for the new shares and $50 for the old" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это базис до дробления.", en: "That is the basis before the split." },
      B: { ru: "Верно. Дробление базис не создаёт: прежние $10 000 делятся на 400 акций.", en: "Correct. A split creates no basis: the old $10,000 is divided among 400 shares." },
      C: { ru: "Базис от дробления не растёт.", en: "Basis does not grow from a split." },
      D: { ru: "Нулевой базис — правило для прав на покупку акций, а не для дробления.", en: "A zero basis is the rule for stock rights, not for a split." }
    }
  },
  {
    sec: "s62",
    ru: "Акционеру распределены права на покупку акций. На дату распределения права стоят $6, сама акция — $50. Каков базис прав, если выбор о распределении базиса не сделан?",
    en: "A shareholder received rights to buy stock. At the date of distribution the rights are worth $6 and the stock $50. What is the basis of the rights if no allocation election is made?",
    opts: [
      { k: "A", ru: "$6", en: "$6" },
      { k: "B", ru: "Часть базиса акций пропорционально стоимостям", en: "A share of the stock's basis in proportion to values" },
      { k: "C", ru: "Ноль", en: "Zero" },
      { k: "D", ru: "$50", en: "$50" }
    ],
    correct: "C",
    why: {
      A: { ru: "Рыночная стоимость прав их базисом не становится: за них ничего не платили.", en: "The market value of the rights does not become their basis: nothing was paid for them." },
      B: { ru: "Так было бы при выборе о распределении базиса, но его не сделали.", en: "That would follow from the allocation election, which was not made." },
      C: { ru: "Верно. Права стоят $6 при акции в $50, то есть меньше 15% её стоимости; без специального выбора их базис нулевой.", en: "Correct. The rights are worth $6 against a $50 share, less than 15% of its value; without an election their basis is zero." },
      D: { ru: "Это стоимость самой акции.", en: "That is the value of the share itself." }
    }
  },
  {
    sec: "s62",
    ru: "Из участка с базисом $200 000 продана половина по площади; рыночная стоимость проданной половины вдвое выше оставшейся. Какой базис относится к проданной части?",
    en: "Half the area of a plot with a $200,000 basis was sold; the market value of the half sold is twice that of the half kept. What basis attaches to the part sold?",
    opts: [
      { k: "A", ru: "$100 000 — половина по площади", en: "$100,000 — half by area" },
      { k: "B", ru: "$200 000 — весь базис участка", en: "$200,000 — the whole basis of the plot" },
      { k: "C", ru: "$133 333 — по относительной рыночной стоимости", en: "$133,333 — by relative market value" },
      { k: "D", ru: "Ноль, пока не продан весь участок", en: "Zero until the whole plot is sold" }
    ],
    correct: "C",
    why: {
      A: { ru: "Площадь — не мера стоимости; делят по рыночным стоимостям.", en: "Area is no measure of value; the split follows market values." },
      B: { ru: "Весь базис относится к целому, а не к части: прибыль от этого исчезла бы.", en: "The whole basis belongs to the whole, not to a part: the gain would vanish." },
      C: { ru: "Верно. Базис делится справедливо, обычно по относительной рыночной стоимости: две трети от $200 000.", en: "Correct. Basis is divided equitably, ordinarily by relative market value: two-thirds of $200,000." },
      D: { ru: "Частичное выбытие признаётся сразу.", en: "A partial disposition is recognised at once." }
    }
  },
  {
    sec: "s62",
    ru: "Акционер получил от корпорации распределение $8 000, признанное возвратом капитала. Базис его акций был $30 000. Что происходит?",
    en: "A shareholder received an $8,000 distribution from a corporation treated as a return of capital. The basis of the shares was $30,000. What happens?",
    opts: [
      { k: "A", ru: "Доход $8 000, базис не меняется", en: "$8,000 of income, basis unchanged" },
      { k: "B", ru: "Дохода нет, базис становится $22 000", en: "No income, basis becomes $22,000" },
      { k: "C", ru: "Дохода нет, базис становится $38 000", en: "No income, basis becomes $38,000" },
      { k: "D", ru: "Прирост капитала $8 000", en: "An $8,000 capital gain" }
    ],
    correct: "B",
    why: {
      A: { ru: "Возврат капитала доходом не является.", en: "A return of capital is not income." },
      B: { ru: "Верно. Необлагаемое распределение уменьшает базис: налог придёт позже, при продаже акций.", en: "Correct. A nontaxable distribution reduces basis: the tax arrives later, on a sale of the shares." },
      C: { ru: "Получение денег базис не увеличивает.", en: "Receiving money does not increase basis." },
      D: { ru: "Прирост возник бы, только если бы распределение превысило базис.", en: "A gain would arise only if the distribution exceeded basis." }
    }
  },
  {
    sec: "s63",
    ru: "Какой из обменов может подпадать под §1031 в 2025 году?",
    en: "Which of these exchanges can fall under section 1031 in 2025?",
    opts: [
      { k: "A", ru: "Грузовик на грузовик, оба в бизнесе", en: "A lorry for a lorry, both used in business" },
      { k: "B", ru: "Инвестиционный пустой участок на здание, сдаваемое в аренду", en: "A vacant investment plot for a building let to tenants" },
      { k: "C", ru: "Доля в партнёрстве на долю в другом партнёрстве", en: "An interest in one partnership for an interest in another" },
      { k: "D", ru: "Акции одной корпорации на акции другой", en: "Shares of one corporation for shares of another" }
    ],
    correct: "B",
    why: {
      A: { ru: "С 2018 года движимое имущество из §1031 исключено.", en: "Since 2018 personal property is outside section 1031." },
      B: { ru: "Верно. Обе — недвижимость, обе держатся для инвестиций или бизнеса; различия в застройке и в назначении подобию не мешают.", en: "Correct. Both are real property held for investment or business; differences in improvements and in use do not defeat like kind." },
      C: { ru: "Доли в партнёрстве прямо исключены.", en: "Partnership interests are expressly excluded." },
      D: { ru: "Ценные бумаги исключены.", en: "Securities are excluded." }
    }
  },
  {
    sec: "s63",
    ru: "Инвестиционный участок в Аризоне обменян на инвестиционный участок в Португалии. Что происходит с прибылью?",
    en: "An investment plot in Arizona was exchanged for an investment plot in Portugal. What happens to the gain?",
    opts: [
      { k: "A", ru: "Откладывается: обе — недвижимость для инвестиций", en: "Deferred: both are real property held for investment" },
      { k: "B", ru: "Признаётся полностью", en: "Fully recognised" },
      { k: "C", ru: "Откладывается наполовину", en: "Half deferred" },
      { k: "D", ru: "Откладывается, если обмен через квалифицированного посредника", en: "Deferred if a qualified intermediary is used" }
    ],
    correct: "B",
    why: {
      A: { ru: "Подобия здесь нет: география решает.", en: "There is no like kind here: geography decides." },
      B: { ru: "Верно. Американская и иностранная недвижимость подобными не считаются. Заметьте противоположное правило при конфискации по §1033.", en: "Correct. Domestic and foreign real property are not like kind. Note the opposite rule on a condemnation under section 1033." },
      C: { ru: "Частичной отсрочки по этому основанию не бывает.", en: "There is no partial deferral on this ground." },
      D: { ru: "Посредник помогает с процедурой, но подобия не создаёт.", en: "An intermediary helps with the mechanics but does not create like kind." }
    }
  },
  {
    sec: "s63",
    ru: "Инвестор обменял участок на право аренды другого участка сроком 35 лет. Подпадает ли обмен под §1031?",
    en: "An investor exchanged a plot for a 35-year leasehold in another plot. Does section 1031 apply?",
    opts: [
      { k: "A", ru: "Да: аренда сроком тридцать лет и дольше приравнена к недвижимости", en: "Yes: a lease of thirty years or more is treated as real property" },
      { k: "B", ru: "Нет: аренда — не недвижимость", en: "No: a lease is not real property" },
      { k: "C", ru: "Да, но только если аренда бессрочная", en: "Yes, but only if the lease is perpetual" },
      { k: "D", ru: "Нет: с 2018 года §1031 к аренде не применяется", en: "No: since 2018 section 1031 does not apply to leases" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Тридцатилетний рубеж и есть проверяемая деталь; при более коротком сроке подобия нет.", en: "Correct. The thirty-year mark is the detail being tested; a shorter lease is not like kind." },
      B: { ru: "Долгосрочная аренда приравнена к самой земле.", en: "A long lease is treated as the land itself." },
      C: { ru: "Бессрочности не требуется — достаточно тридцати лет.", en: "Perpetuity is not required — thirty years is enough." },
      D: { ru: "Изменение 2018 года убрало из §1031 движимое имущество, а не аренду недвижимости.", en: "The 2018 change removed personal property from section 1031, not leases of real property." }
    }
  },
  {
    sec: "s63",
    ru: "Владелец обменял дом, в котором сам живёт, на инвестиционный участок. Применяется ли §1031?",
    en: "An owner exchanged the house he lives in for an investment plot. Does section 1031 apply?",
    opts: [
      { k: "A", ru: "Да: обе — недвижимость", en: "Yes: both are real property" },
      { k: "B", ru: "Нет: отданное имущество должно держаться для бизнеса или инвестиций", en: "No: the property given up must be held for business or investment" },
      { k: "C", ru: "Да, если он проживёт в новом объекте два года", en: "Yes, if he lives in the new property for two years" },
      { k: "D", ru: "Да, но только в части прироста сверх исключения по продаже жилья", en: "Yes, but only for the gain above the home sale exclusion" }
    ],
    correct: "B",
    why: {
      A: { ru: "Недвижимости мало: проверяется ещё и назначение, причём с обеих сторон.", en: "Being real property is not enough: the use is tested too, on both sides." },
      B: { ru: "Верно. Личное жильё под §1031 не подпадает; для него существует своё исключение при продаже.", en: "Correct. A personal residence is outside section 1031; it has its own exclusion on a sale." },
      C: { ru: "Проживание в полученном объекте условию по отданному не помогает.", en: "Living in the property received does not cure the property given up." },
      D: { ru: "Два правила не складываются: сделка просто не подпадает под §1031.", en: "The two rules do not combine: the transaction is simply outside section 1031." }
    }
  },
  {
    sec: "s63",
    ru: "Отдан участок с базисом $50 000; получены подобный участок стоимостью $40 000 и $20 000 деньгами. Какова признанная прибыль?",
    en: "A plot with a $50,000 basis was given up; a like-kind plot worth $40,000 and $20,000 in cash were received. What gain is recognised?",
    opts: [
      { k: "A", ru: "$20 000", en: "$20,000" },
      { k: "B", ru: "$10 000", en: "$10,000" },
      { k: "C", ru: "$0", en: "$0" },
      { k: "D", ru: "$60 000", en: "$60,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это добавка, но реализованная прибыль меньше, а берётся меньшая величина.", en: "That is the boot, but the realised gain is smaller, and the lesser figure governs." },
      B: { ru: "Верно. Реализованная прибыль — $10 000 (40 000 + 20 000 − 50 000), добавка — $20 000; признаётся меньшая.", en: "Correct. The realised gain is $10,000 (40,000 + 20,000 − 50,000) and the boot $20,000; the lesser is recognised." },
      C: { ru: "Полученная добавка отсрочку в своей части снимает.", en: "Boot received removes the deferral to its extent." },
      D: { ru: "Это сумма полученного, а не прибыль.", en: "That is the total received, not the gain." }
    }
  },
  {
    sec: "s63",
    ru: "Отдан участок с базисом $100 000 и ипотекой $30 000, которую принимает другая сторона; получен подобный участок стоимостью $150 000 без обременений. Какова признанная прибыль?",
    en: "A plot with a $100,000 basis and a $30,000 mortgage assumed by the other side was given up; a like-kind plot worth $150,000 and free of debt was received. What gain is recognised?",
    opts: [
      { k: "A", ru: "$0: деньги не получены", en: "$0: no cash was received" },
      { k: "B", ru: "$30 000", en: "$30,000" },
      { k: "C", ru: "$80 000", en: "$80,000" },
      { k: "D", ru: "$50 000", en: "$50,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Добавка бывает и без денег: освобождение от долга к ней приравнено.", en: "Boot need not be cash: relief from debt counts as boot." },
      B: { ru: "Верно. Реализованная прибыль — $80 000 (150 000 + 30 000 − 100 000), добавка — освобождение от долга $30 000; признаётся меньшая.", en: "Correct. The realised gain is $80,000 (150,000 + 30,000 − 100,000) and the boot is the $30,000 of debt relief; the lesser is recognised." },
      C: { ru: "Это реализованная прибыль целиком; признаётся лишь часть.", en: "That is the whole realised gain; only part is recognised." },
      D: { ru: "Такой величины в расчёте нет.", en: "No such figure appears in the computation." }
    }
  },
  {
    sec: "s63",
    ru: "Каждая сторона обмена приняла на себя ипотеку другой: одна $80 000, другая $50 000. Что считается добавкой у стороны, освободившейся от большего долга?",
    en: "Each side of an exchange assumed the other's mortgage: one of $80,000, the other of $50,000. What is boot to the party relieved of the larger debt?",
    opts: [
      { k: "A", ru: "$80 000", en: "$80,000" },
      { k: "B", ru: "$130 000", en: "$130,000" },
      { k: "C", ru: "$30 000", en: "$30,000" },
      { k: "D", ru: "Ничего: долги взаимно погашаются", en: "Nothing: the debts cancel out" }
    ],
    correct: "C",
    why: {
      A: { ru: "Учитывается только чистая величина, а не полная сумма своего долга.", en: "Only the net figure counts, not the full amount of one's own debt." },
      B: { ru: "Долги не складываются: они зачитываются друг против друга.", en: "The debts are not added: they are netted." },
      C: { ru: "Верно. При встречном принятии обязательств добавкой считается только разница: 80 000 − 50 000.", en: "Correct. Where each side assumes debt, only the difference is boot: 80,000 − 50,000." },
      D: { ru: "Зачёт полный только при равных долгах.", en: "The netting is complete only if the debts are equal." }
    }
  },
  {
    sec: "s63",
    ru: "Отдан участок с базисом $90 000; получены подобный участок стоимостью $80 000 и $5 000 деньгами. Что признаётся?",
    en: "A plot with a $90,000 basis was given up; a like-kind plot worth $80,000 and $5,000 in cash were received. What is recognised?",
    opts: [
      { k: "A", ru: "Убыток $5 000", en: "A $5,000 loss" },
      { k: "B", ru: "Прибыль $5 000: получена добавка", en: "A $5,000 gain: boot was received" },
      { k: "C", ru: "Ничего", en: "Nothing" },
      { k: "D", ru: "Убыток $10 000", en: "A $10,000 loss" }
    ],
    correct: "C",
    why: {
      A: { ru: "Убыток реализован, но по §1031 он не признаётся ни при какой добавке.", en: "The loss is realised, but under section 1031 it is never recognised, with any amount of boot." },
      B: { ru: "Добавка порождает прибыль только тогда, когда прибыль реализована; здесь реализован убыток.", en: "Boot produces gain only where gain is realised; here a loss is." },
      C: { ru: "Верно. Реализован убыток $5 000, и он уходит в базис полученного: 90 000 − 5 000 = $85 000.", en: "Correct. A $5,000 loss is realised and goes into the basis of what was received: 90,000 − 5,000 = $85,000." },
      D: { ru: "Полученные деньги в расчёте участвуют.", en: "The cash received enters the computation." }
    }
  },
  {
    sec: "s63",
    ru: "Отдан участок с базисом $180 000; получены подобный участок стоимостью $220 000 и $20 000 деньгами, а другая сторона приняла ипотеку $60 000. Каков базис полученного участка?",
    en: "A plot with a $180,000 basis was given up; a like-kind plot worth $220,000 and $20,000 in cash were received, and the other side assumed a $60,000 mortgage. What is the basis of the plot received?",
    opts: [
      { k: "A", ru: "$220 000", en: "$220,000" },
      { k: "B", ru: "$180 000", en: "$180,000" },
      { k: "C", ru: "$100 000", en: "$100,000" },
      { k: "D", ru: "$260 000", en: "$260,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Рыночная стоимость базисом не становится: тогда отложенная прибыль исчезла бы навсегда.", en: "Market value does not become basis: the deferred gain would then vanish for good." },
      B: { ru: "Верно. 180 000 + признанная прибыль 80 000 − полученная добавка 80 000. Проверка: 220 000 минус отложенные 40 000 — те же 180 000.", en: "Correct. 180,000 + 80,000 of recognised gain − 80,000 of boot received. Check: 220,000 less the $40,000 deferred is the same 180,000." },
      C: { ru: "Так выходит, если вычесть добавку, забыв прибавить признанную прибыль.", en: "That is what comes of subtracting the boot and forgetting to add the recognised gain." },
      D: { ru: "Такой величины в расчёте нет.", en: "No such figure appears in the computation." }
    }
  },
  {
    sec: "s63",
    ru: "Сколько дней даётся на письменное определение замещающего объекта и от какой даты они считаются?",
    en: "How many days are allowed to identify the replacement property in writing, and from what date do they run?",
    opts: [
      { k: "A", ru: "45 дней от передачи отданного объекта", en: "45 days from the transfer of the relinquished property" },
      { k: "B", ru: "45 дней от подписания договора", en: "45 days from signing the contract" },
      { k: "C", ru: "180 дней от передачи отданного объекта", en: "180 days from the transfer of the relinquished property" },
      { k: "D", ru: "45 дней от конца налогового года", en: "45 days from the end of the tax year" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Отсчёт идёт от дня передачи, а определить можно несколько объектов — описание должно быть однозначным и передано другой стороне.", en: "Correct. The count runs from the day of transfer, and several properties may be identified — the description must be unambiguous and delivered to the other party." },
      B: { ru: "Договор срок не запускает: запускает передача.", en: "The contract does not start the clock; the transfer does." },
      C: { ru: "180 дней — срок на получение, а не на определение.", en: "180 days is the period to receive, not to identify." },
      D: { ru: "Конец года к этому сроку отношения не имеет.", en: "The end of the year has nothing to do with this period." }
    }
  },
  {
    sec: "s63",
    ru: "Отданный объект передан 1 ноября 2025 года. Декларация за 2025 год не продлевалась. До какого дня надо получить замену?",
    en: "The relinquished property was transferred on November 1, 2025. The 2025 return was not extended. By when must the replacement be received?",
    opts: [
      { k: "A", ru: "До 30 апреля 2026 года — 180-й день", en: "By April 30, 2026 — the 180th day" },
      { k: "B", ru: "До 15 апреля 2026 года", en: "By April 15, 2026" },
      { k: "C", ru: "До 31 декабря 2025 года", en: "By December 31, 2025" },
      { k: "D", ru: "До 15 декабря 2025 года — 45-й день", en: "By December 15, 2025 — the 45th day" }
    ],
    correct: "B",
    why: {
      A: { ru: "180-й день действительно приходится на конец апреля, но берётся более ранняя из двух дат.", en: "The 180th day does fall at the end of April, but the earlier of the two dates governs." },
      B: { ru: "Верно. Срок — более ранняя из 180-го дня и срока подачи декларации за год передачи. Продление декларации сдвинуло бы и этот срок, и подают его именно ради обмена.", en: "Correct. The deadline is the earlier of the 180th day and the due date of the return for the year of transfer. Extending the return would move this deadline too, which is why it is filed." },
      C: { ru: "Конец календарного года срока не образует.", en: "The end of the calendar year sets no deadline." },
      D: { ru: "45-й день — срок на определение объекта, а не на его получение.", en: "The 45th day is for identifying the property, not for receiving it." }
    }
  },
  {
    sec: "s63",
    ru: "Как соотносятся сроки в 45 и 180 дней?",
    en: "How do the 45-day and 180-day periods relate to each other?",
    opts: [
      { k: "A", ru: "180 дней отсчитываются после истечения 45", en: "The 180 days begin when the 45 run out" },
      { k: "B", ru: "Оба идут от одного дня — передачи отданного объекта", en: "Both run from the same day — the transfer of the relinquished property" },
      { k: "C", ru: "45 дней внутри 180 только если объектов несколько", en: "The 45 fall inside the 180 only where there are several properties" },
      { k: "D", ru: "180 дней считаются от определения объекта", en: "The 180 days run from the identification of the property" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это самая частая ошибка: сроки не последовательные, а вложенные.", en: "That is the commonest error: the periods are nested, not consecutive." },
      B: { ru: "Верно. Оба отсчитываются от передачи, поэтому на получение объекта остаётся 135 дней после его определения, а не 180.", en: "Correct. Both run from the transfer, so 135 days are left to receive the property after identifying it, not 180." },
      C: { ru: "Число объектов на устройство сроков не влияет.", en: "The number of properties does not change how the periods work." },
      D: { ru: "Определение объекта отсчёт не запускает.", en: "Identifying the property starts no clock." }
    }
  },
  {
    sec: "s63",
    ru: "Продавец получил деньги за отданный объект на свой счёт, а через месяц купил на них подобный участок. Действует ли §1031?",
    en: "A seller received the money for the relinquished property into his own account and a month later bought a like-kind plot with it. Does section 1031 apply?",
    opts: [
      { k: "A", ru: "Да: срок в 180 дней соблюдён", en: "Yes: the 180-day period was met" },
      { k: "B", ru: "Нет: получив деньги, он совершил продажу, а не обмен", en: "No: by taking the money he made a sale, not an exchange" },
      { k: "C", ru: "Да, если объект был определён в 45 дней", en: "Yes, if the property was identified within 45 days" },
      { k: "D", ru: "Да, но только наполовину", en: "Yes, but only by half" }
    ],
    correct: "B",
    why: {
      A: { ru: "Сроки соблюдены, но нарушено более раннее условие.", en: "The periods were met but an earlier condition was broken." },
      B: { ru: "Верно. Отсрочка требует, чтобы деньги не попадали к налогоплательщику: для этого их держит квалифицированный посредник, который и считается владельцем объекта на время сделки.", en: "Correct. The deferral requires that the money never reach the taxpayer: a qualified intermediary holds it and is treated as the beneficial owner of the property meanwhile." },
      C: { ru: "Определение объекта фактического получения денег не исправляет.", en: "Identifying the property does not cure actual receipt of the money." },
      D: { ru: "Половинных решений здесь нет.", en: "There are no half measures here." }
    }
  },
  {
    sec: "s63",
    ru: "Налогоплательщик хочет признать убыток по обмену подобной недвижимостью, чтобы уменьшить налог. Может ли он отказаться от §1031?",
    en: "A taxpayer wants to recognise a loss on a like-kind exchange of real property in order to reduce tax. Can he decline section 1031?",
    opts: [
      { k: "A", ru: "Да: §1031 применяется по выбору", en: "Yes: section 1031 applies by election" },
      { k: "B", ru: "Нет: если сделка подпадает под §1031, непризнание обязательно", en: "No: where the transaction qualifies, non-recognition is mandatory" },
      { k: "C", ru: "Да, если приложить заявление к декларации", en: "Yes, by attaching a statement to the return" },
      { k: "D", ru: "Да, но только в год, следующий за обменом", en: "Yes, but only in the year after the exchange" }
    ],
    correct: "B",
    why: {
      A: { ru: "Выбора здесь нет — в отличие от косвенного вынужденного выбытия по §1033.", en: "There is no election here — unlike an indirect involuntary conversion under section 1033." },
      B: { ru: "Верно. Отсюда практический вывод: чтобы признать убыток, имущество надо продать, а не обменять.", en: "Correct. Hence the practical consequence: to take the loss, sell the property rather than exchange it." },
      C: { ru: "Заявление порядок не меняет.", en: "A statement does not change the treatment." },
      D: { ru: "Перенести признание на другой год нельзя.", en: "Recognition cannot be moved to another year." }
    }
  },
  {
    sec: "s64",
    ru: "Что из перечисленного НЕ является вынужденным выбытием по §1033?",
    en: "Which of the following is NOT an involuntary conversion under section 1033?",
    opts: [
      { k: "A", ru: "Изъятие участка под дорогу", en: "A plot taken for a road" },
      { k: "B", ru: "Объявленная угроза изъятия, после которой владелец продал объект городу", en: "An announced threat of condemnation after which the owner sold to the city" },
      { k: "C", ru: "Продажа здания на открытом рынке ради переезда в другой город", en: "Selling a building on the open market in order to move to another city" },
      { k: "D", ru: "Гибель склада в пожаре", en: "A warehouse destroyed by fire" }
    ],
    correct: "C",
    why: {
      A: { ru: "Классическая конфискация.", en: "The classic condemnation." },
      B: { ru: "Угроза изъятия приравнена к самому изъятию — в этом смысл слова «вынужденное».", en: "The threat of condemnation counts as the condemnation itself — that is what “involuntary” means here." },
      C: { ru: "Верно. Добровольная продажа под §1033 не подпадает, каким бы уважительным ни был мотив.", en: "Correct. A voluntary sale is outside section 1033, however good the reason." },
      D: { ru: "Уничтожение имущества — вынужденное выбытие.", en: "Destruction of property is an involuntary conversion." }
    }
  },
  {
    sec: "s64",
    ru: "Здание уничтожено, и страховая компания вместо денег предоставила равноценное здание. Что происходит с прибылью?",
    en: "A building was destroyed and the insurer provided an equivalent building instead of money. What happens to the gain?",
    opts: [
      { k: "A", ru: "Признаётся полностью", en: "Fully recognised" },
      { k: "B", ru: "Откладывается обязательно, без всякого выбора", en: "Deferred mandatorily, with no election" },
      { k: "C", ru: "Откладывается по выбору налогоплательщика", en: "Deferred at the taxpayer's election" },
      { k: "D", ru: "Откладывается, если подано заявление в течение двух лет", en: "Deferred if an election is filed within two years" }
    ],
    correct: "B",
    why: {
      A: { ru: "Прямое превращение прибыль как раз откладывает.", en: "A direct conversion is precisely what defers the gain." },
      B: { ru: "Верно. При прямом превращении в подобное имущество непризнание обязательно; базис нового равен базису погибшего.", en: "Correct. On a direct conversion into similar property non-recognition is mandatory; the basis of the new equals that of the old." },
      C: { ru: "Выбор существует только при косвенном превращении — когда сначала приходят деньги.", en: "The election exists only on an indirect conversion — where money comes first." },
      D: { ru: "Заявления здесь не требуется.", en: "No election is required here." }
    }
  },
  {
    sec: "s64",
    ru: "Склад с базисом $200 000 сгорел; страховка $320 000. Новый склад куплен за $290 000 в срок, выбор об отсрочке сделан. Какова признанная прибыль?",
    en: "A warehouse with a $200,000 basis burned down; insurance was $320,000. A new warehouse was bought in time for $290,000 and the deferral elected. What gain is recognised?",
    opts: [
      { k: "A", ru: "$120 000", en: "$120,000" },
      { k: "B", ru: "$30 000", en: "$30,000" },
      { k: "C", ru: "$0", en: "$0" },
      { k: "D", ru: "$90 000", en: "$90,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это вся реализованная прибыль; отсрочка применена не была.", en: "That is the whole realised gain; no deferral applied." },
      B: { ru: "Верно. Признаётся то, что не вложено в замену: 320 000 − 290 000, но не больше реализованной прибыли $120 000.", en: "Correct. What is recognised is what was not reinvested: 320,000 − 290,000, capped at the $120,000 realised gain." },
      C: { ru: "Вложено меньше, чем получено, поэтому часть прибыли всё же признаётся.", en: "Less was reinvested than received, so part of the gain is recognised." },
      D: { ru: "Пропорциональной доли правило не знает.", en: "The rule knows no proportionate share." }
    }
  },
  {
    sec: "s64",
    ru: "Каков базис нового склада в предыдущем вопросе?",
    en: "What is the basis of the new warehouse in the previous question?",
    opts: [
      { k: "A", ru: "$290 000", en: "$290,000" },
      { k: "B", ru: "$200 000", en: "$200,000" },
      { k: "C", ru: "$320 000", en: "$320,000" },
      { k: "D", ru: "$140 000", en: "$140,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Уменьшение на отложенную прибыль пропущено, и тогда она не вернулась бы никогда.", en: "The reduction for the deferred gain is omitted, and it would then never come back." },
      B: { ru: "Верно. Стоимость замены $290 000 минус отложенная прибыль $90 000 (120 000 реализованной минус 30 000 признанной).", en: "Correct. The $290,000 cost of the replacement less the $90,000 of deferred gain (120,000 realised less 30,000 recognised)." },
      C: { ru: "Страховка базисом не становится: базисом становится стоимость купленного.", en: "The insurance does not become basis; the cost of what was bought does." },
      D: { ru: "Такой величины в расчёте нет.", en: "No such figure appears in the computation." }
    }
  },
  {
    sec: "s64",
    ru: "Оборудование с базисом $90 000 уничтожено; страховка составила $60 000. Замена куплена за $100 000. Что происходит?",
    en: "Equipment with a $90,000 basis was destroyed; the insurance came to $60,000. A replacement was bought for $100,000. What happens?",
    opts: [
      { k: "A", ru: "Убыток $30 000 откладывается и уменьшает базис замены", en: "A $30,000 loss is deferred and reduces the basis of the replacement" },
      { k: "B", ru: "Убыток $30 000 признаётся по общим правилам; базис замены $100 000", en: "The $30,000 loss is recognised under the ordinary rules; the replacement's basis is $100,000" },
      { k: "C", ru: "Ничего не признаётся, базис замены $70 000", en: "Nothing is recognised and the replacement's basis is $70,000" },
      { k: "D", ru: "Убыток признаётся только в части, не покрытой страховкой", en: "The loss is recognised only to the extent not covered by insurance" }
    ],
    correct: "B",
    why: {
      A: { ru: "§1033 откладывает прибыль и только прибыль.", en: "Section 1033 defers gain, and gain only." },
      B: { ru: "Верно. Убытки по вынужденному выбытию не откладываются; базис замены равен её стоимости без всяких уменьшений.", en: "Correct. Losses on an involuntary conversion are not deferred; the replacement takes its cost as basis, with no reduction." },
      C: { ru: "Уменьшать базис не на что: отложенной прибыли нет.", en: "There is nothing to reduce basis by: no gain was deferred." },
      D: { ru: "Убыток и есть непокрытая часть; он признаётся целиком.", en: "The loss is the uncovered part, and it is recognised in full." }
    }
  },
  {
    sec: "s64",
    ru: "Здание уничтожено пожаром в мае 2025 года, прибыль реализована в том же году. До какого срока надо купить замену по общему правилу?",
    en: "A building was destroyed by fire in May 2025 and the gain realized the same year. By when must a replacement be bought under the general rule?",
    opts: [
      { k: "A", ru: "До мая 2027 года — два года от события", en: "By May 2027 — two years from the event" },
      { k: "B", ru: "До 31 декабря 2027 года", en: "By December 31, 2027" },
      { k: "C", ru: "До 31 декабря 2028 года", en: "By December 31, 2028" },
      { k: "D", ru: "До 15 апреля 2026 года", en: "By April 15, 2026" }
    ],
    correct: "B",
    why: {
      A: { ru: "Отсчёт идёт не от события, а от конца налогового года.", en: "The count runs not from the event but from the end of the tax year." },
      B: { ru: "Верно. Два года считаются от конца первого года, в котором признана хоть какая-то часть прибыли, то есть от 31 декабря 2025 года.", en: "Correct. The two years run from the end of the first year in which any part of the gain is realized, that is from December 31, 2025." },
      C: { ru: "Три года даются при конфискации деловой недвижимости, а не при пожаре.", en: "Three years are allowed on a condemnation of business real property, not on a fire." },
      D: { ru: "Срок подачи декларации относится к обмену по §1031.", en: "The return's due date belongs to a section 1031 exchange." }
    }
  },
  {
    sec: "s64",
    ru: "Дом, в котором владелец жил сам, конфискован под дорогу. Он вложил возмещение в продуктовый магазин. Действует ли отсрочка?",
    en: "The house an owner lived in was condemned for a road. He put the award into a grocery store. Does the deferral apply?",
    opts: [
      { k: "A", ru: "Да: и то и другое — недвижимость", en: "Yes: both are real property" },
      { k: "B", ru: "Нет: замена не подобна и не родственна по использованию", en: "No: the replacement is not similar or related in service or use" },
      { k: "C", ru: "Да, если магазин дороже дома", en: "Yes, if the store cost more than the house" },
      { k: "D", ru: "Да, если вложение сделано в течение трёх лет", en: "Yes, if the investment was made within three years" }
    ],
    correct: "B",
    why: {
      A: { ru: "Мягкий стандарт «подобного» действует лишь для деловой и инвестиционной недвижимости при конфискации. Здесь дом был личным.", en: "The looser like-kind standard applies only to business and investment real property on a condemnation. Here the house was personal." },
      B: { ru: "Верно. Владельцу-пользователю нужна вещь, работающая так же: дом заменяется домом.", en: "Correct. An owner-user needs something that functions the same way: a home is replaced by a home." },
      C: { ru: "Сумма вложения условию о характере замены не помогает.", en: "The amount invested does not cure the character of the replacement." },
      D: { ru: "Трёхлетний срок к личному жилью не относится, да и срок сам по себе характера замены не меняет.", en: "The three-year period does not reach a personal residence, and in any event a period does not change the character of a replacement." }
    }
  },
  {
    sec: "s64",
    ru: "Деловой склад конфискован. Владелец вложил возмещение в инвестиционный участок земли во Франции. Как это оценивается?",
    en: "A business warehouse was condemned. The owner put the award into an investment plot of land in France. How is that judged?",
    opts: [
      { k: "A", ru: "Замена не годится: земля не похожа на склад", en: "The replacement fails: land is not like a warehouse" },
      { k: "B", ru: "Замена не годится: иностранная недвижимость не подобна американской", en: "The replacement fails: foreign real property is not like kind with domestic" },
      { k: "C", ru: "Замена годится: при конфискации деловой недвижимости достаточно стандарта «подобного», и иностранная недвижимость ему отвечает", en: "The replacement qualifies: on a condemnation of business real property the like-kind standard is enough, and foreign real property meets it" },
      { k: "D", ru: "Замена годится только на половину суммы", en: "The replacement qualifies only for half the amount" }
    ],
    correct: "C",
    why: {
      A: { ru: "По мягкому стандарту застройка значения не имеет: земля подобна зданию.", en: "Under the looser standard improvements do not matter: land is like kind with a building." },
      B: { ru: "Это правило §1031, и при конфискации оно как раз не действует.", en: "That is the section 1031 rule, and on a condemnation it is precisely the one that does not apply." },
      C: { ru: "Верно. Здесь два параграфа расходятся: то, что не подобно для обмена, считается подобным при конфискации.", en: "Correct. Here the two sections part ways: what is not like kind for an exchange is like kind on a condemnation." },
      D: { ru: "Частичной годности замены не бывает; частичной бывает только сумма вложения.", en: "A replacement is not partly qualifying; only the amount reinvested can be partial." }
    }
  }
];
