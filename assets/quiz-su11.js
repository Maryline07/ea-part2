/* ===================================================================
   Вопросы тренажёра, модуль 11.

   Отдельный файл, а не блок внутри страницы: под file:// страница не
   может прочитать другой файл, поэтому единственный способ отдать
   данные двум страницам сразу — тег <script src>. Файл подключают и
   su11.html, и trainer.html.
   =================================================================== */

window.QUIZZES  = window.QUIZZES  || {};
window.QUIZSECS = window.QUIZSECS || {};

window.QUIZSECS.su11 = {
  s111: { no: "11.1", ru: "Продажа доли", en: "Selling an interest" },
  s112: { no: "11.2", ru: "Ликвидационные распределения", en: "Liquidating distributions" },
  s113: { no: "11.3", ru: "Выход и смерть партнёра", en: "A partner retires or dies" },
  s114: { no: "11.4", ru: "Прекращение партнёрства", en: "Terminating the partnership" }
};

window.QUIZZES.su11 = [
  {
    sec: "s111",
    ru: "Какой характер по общему правилу имеет результат продажи доли в партнёрстве?",
    en: "What is the general character of the result of selling a partnership interest?",
    opts: [
      { k: "A", ru: "Капитальная прибыль или убыток", en: "Capital gain or loss" },
      { k: "B", ru: "Обычный доход или убыток", en: "Ordinary income or loss" },
      { k: "C", ru: "Прибыль по §1231", en: "Section 1231 gain" },
      { k: "D", ru: "Не облагается вовсе", en: "Not taxed at all" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Доля в партнёрстве — капитальный актив. Исключение одно: часть цены, приходящаяся на горячие активы.", en: "Correct. A partnership interest is a capital asset. There is one exception: the part of the price attributable to hot assets." },
      B: { ru: "Обычным становится только то, что приходится на дебиторку и подорожавшие запасы.", en: "Only what is attributable to receivables and appreciated inventory becomes ordinary." },
      C: { ru: "§1231 — про деловое имущество, а не про долю в партнёрстве.", en: "Section 1231 is about business property, not about a partnership interest." },
      D: { ru: "Продажа доли облагается как обычная сделка с имуществом.", en: "A sale of an interest is taxed like any dealing in property." }
    }
  },
  {
    sec: "s111",
    ru: "Базис доли $30 000, включая $12 000 доли в долгах партнёрства. Партнёр продаёт долю за $28 000 деньгами, покупатель принимает долги. Какова прибыль?",
    en: "The basis is $30,000, including $12,000 of partnership liabilities. The partner sells for $28,000 in cash and the buyer takes over the debts. What is the gain?",
    opts: [
      { k: "A", ru: "$10 000", en: "$10,000" },
      { k: "B", ru: "Убыток $2 000", en: "A loss of $2,000" },
      { k: "C", ru: "$16 000", en: "$16,000" },
      { k: "D", ru: "$22 000", en: "$22,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Реализовано 28 000 + 12 000 = 40 000; минус базис 30 000.", en: "Correct. The amount realized is 28,000 + 12,000 = 40,000, less the basis of 30,000." },
      B: { ru: "Освобождение от долга не включено в реализованное, а его надо прибавить.", en: "The debt relief was left out of the amount realized, and it must be added." },
      C: { ru: "Долг вычтен из цены вместо того, чтобы прибавиться к ней.", en: "The debt was subtracted from the price instead of added to it." },
      D: { ru: "Долг и прибавлен к цене, и снят с базиса — посчитан дважды.", en: "The debt was both added to the price and taken off the basis — counted twice." }
    }
  },
  {
    sec: "s111",
    ru: "Партнёр выходит из партнёрства, когда базис его доли равен нулю, и не получает ничего. Его доля в долгах партнёрства — $15 000. Что он показывает?",
    en: "A partner leaves when the basis of the interest is nil and receives nothing. Their share of the partnership's liabilities is $15,000. What do they report?",
    opts: [
      { k: "A", ru: "$15 000 капитальной прибыли", en: "$15,000 of capital gain" },
      { k: "B", ru: "Ничего: он не получил денег", en: "Nothing: no money was received" },
      { k: "C", ru: "$15 000 обычного дохода", en: "$15,000 of ordinary income" },
      { k: "D", ru: "Убыток $15 000", en: "A loss of $15,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Освобождение от доли в долгах считается полученным, а базиса нет — значит, вся сумма прибыль, и она капитальная.", en: "Correct. Relief from the share of liabilities counts as received, and there is no basis — so the whole amount is gain, and it is capital." },
      B: { ru: "Отсутствие денег от налога не спасает: долг снят с его плеч, и это ценность.", en: "The absence of money is no escape: the debt was lifted from his shoulders, and that is value." },
      C: { ru: "Прибыль от продажи доли капитальная, если нет горячих активов.", en: "Gain on a sale of an interest is capital where there are no hot assets." },
      D: { ru: "Убытка здесь быть не может: базис уже нулевой.", en: "There can be no loss here: the basis is already nil." }
    }
  },
  {
    sec: "s111",
    ru: "Что нужно сделать с базисом доли перед тем, как считать прибыль от её продажи?",
    en: "What must be done with the basis of an interest before figuring the gain on its sale?",
    opts: [
      { k: "A", ru: "Довести его до дня продажи долей в результатах текущего года", en: "Bring it up to the day of sale by the share of the current year's results" },
      { k: "B", ru: "Ничего: берётся базис на начало года", en: "Nothing: the basis at the start of the year is taken" },
      { k: "C", ru: "Обнулить его", en: "Reduce it to nil" },
      { k: "D", ru: "Заменить его рыночной стоимостью доли", en: "Replace it with the market value of the interest" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Доля в доходе или убытке за прожитую часть года сначала корректирует базис, и только потом считается прибыль.", en: "Correct. The share of income or loss for the part of the year lived through adjusts the basis first, and only then is the gain figured." },
      B: { ru: "Базис на начало года устарел: за прожитую часть года он изменился.", en: "The basis at the start of the year is stale: it changed over the part of the year lived through." },
      C: { ru: "Обнулять базис не нужно ни при каких условиях.", en: "There is never any occasion to reduce the basis to nil." },
      D: { ru: "Рыночная стоимость доли в расчёте прибыли не участвует.", en: "The market value of the interest plays no part in figuring the gain." }
    }
  },
  {
    sec: "s111",
    ru: "Партнёр продал долю с прибылью $50 000. На его долю в нереализованной дебиторке приходится $18 000. Как делится результат?",
    en: "A partner sold an interest at a $50,000 gain. $18,000 is attributable to their share of the unrealized receivables. How does the result split?",
    opts: [
      { k: "A", ru: "$18 000 обычного дохода и $32 000 капитальной прибыли", en: "$18,000 of ordinary income and $32,000 of capital gain" },
      { k: "B", ru: "$50 000 капитальной прибыли", en: "$50,000 of capital gain" },
      { k: "C", ru: "$18 000 капитальной прибыли и $32 000 обычного дохода", en: "$18,000 of capital gain and $32,000 of ordinary income" },
      { k: "D", ru: "$50 000 обычного дохода", en: "$50,000 of ordinary income" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Обычная часть — приходящаяся на горячие активы — выделяется первой, и только остаток остаётся капитальным.", en: "Correct. The ordinary part, attributable to the hot assets, is taken out first, and only the remainder stays capital." },
      B: { ru: "Так было бы, не будь у партнёрства горячих активов.", en: "That would be so had the partnership no hot assets." },
      C: { ru: "Характеры переставлены: обычной становится часть, приходящаяся на дебиторку.", en: "The characters are swapped: it is the part attributable to the receivables that becomes ordinary." },
      D: { ru: "Обычной становится только часть, а не вся прибыль.", en: "Only a part becomes ordinary, not the whole gain." }
    }
  },
  {
    sec: "s111",
    ru: "Что относится к горячим активам партнёрства?",
    en: "What counts as a partnership's hot assets?",
    opts: [
      { k: "A", ru: "Нереализованная дебиторская задолженность и существенно подорожавшие запасы", en: "Unrealized receivables and substantially appreciated inventory" },
      { k: "B", ru: "Любое подорожавшее имущество", en: "Any property that has appreciated" },
      { k: "C", ru: "Денежные средства и ликвидные вложения", en: "Cash and liquid investments" },
      { k: "D", ru: "Амортизируемое имущество", en: "Depreciable property" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Горячими их называют потому, что при продаже они дают обычный доход, а не капитальный.", en: "Correct. They are called hot because on sale they give ordinary income rather than capital gain." },
      B: { ru: "Одного удорожания мало: перечень закрытый.", en: "Mere appreciation is not enough: the list is closed." },
      C: { ru: "Деньги горячим активом не являются.", en: "Cash is not a hot asset." },
      D: { ru: "Амортизируемое имущество в этот перечень не входит.", en: "Depreciable property is not on the list." }
    }
  },
  {
    sec: "s111",
    ru: "Партнёр продаёт долю другому партнёру. Как это квалифицируется?",
    en: "A partner sells their interest to another partner. How is that treated?",
    opts: [
      { k: "A", ru: "Как обычная продажа доли", en: "As an ordinary sale of an interest" },
      { k: "B", ru: "Как ликвидационное распределение", en: "As a liquidating distribution" },
      { k: "C", ru: "Как текущее распределение", en: "As a current distribution" },
      { k: "D", ru: "Как вклад в партнёрство", en: "As a contribution to the partnership" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Природу сделки меняет только выкуп самим партнёрством; кому продаёт партнёр — постороннему или коллеге — безразлично.", en: "Correct. Only a buy-back by the partnership itself changes the nature; whether the buyer is an outsider or a colleague is immaterial." },
      B: { ru: "Ликвидационным распределением становится продажа партнёрству, а не партнёру.", en: "It is a sale to the partnership, not to a partner, that becomes a liquidating distribution." },
      C: { ru: "Распределением это не является вовсе: платит не партнёрство.", en: "It is no distribution at all: the partnership is not paying." },
      D: { ru: "Вкладом это не является: доля не создаётся, а переходит.", en: "It is no contribution: no interest is created, one passes hands." }
    }
  },
  {
    sec: "s111",
    ru: "Долю партнёра выкупает само партнёрство. Как это квалифицируется?",
    en: "The partnership itself buys back a partner's interest. How is that treated?",
    opts: [
      { k: "A", ru: "Как ликвидационное распределение", en: "As a liquidating distribution" },
      { k: "B", ru: "Как обычная продажа доли", en: "As an ordinary sale of an interest" },
      { k: "C", ru: "Как вклад остальных партнёров", en: "As a contribution by the other partners" },
      { k: "D", ru: "Как прекращение партнёрства", en: "As a termination of the partnership" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Выглядит как сделка, а считается как расчёт: со своими правилами об убытке, базисе полученного имущества и выплатах за дебиторку и гудвилл.", en: "Correct. It looks like a bargain and is reckoned as a settlement: with its own rules on loss, on the basis of property received, and on payments for receivables and goodwill." },
      B: { ru: "Продажей это остаётся, только если платит не партнёрство.", en: "It stays a sale only where the payer is not the partnership." },
      C: { ru: "Платит партнёрство своими средствами, а не партнёры своими.", en: "It is the partnership that pays, out of its own funds, not the partners out of theirs." },
      D: { ru: "Партнёрство прекращается только со свёртыванием всей деятельности.", en: "A partnership terminates only when all operations are discontinued." }
    }
  },
  {
    sec: "s111",
    ru: "Чем внешний базис отличается от внутреннего?",
    en: "How does outside basis differ from inside basis?",
    opts: [
      { k: "A", ru: "Внешний — базис партнёра в доле, внутренний — базис партнёрства в его активах", en: "Outside is the partner's basis in the interest; inside is the partnership's basis in its assets" },
      { k: "B", ru: "Внешний — по рынку, внутренний — по цене приобретения", en: "Outside is at market, inside at cost" },
      { k: "C", ru: "Внешний — у иностранных партнёров, внутренний — у отечественных", en: "Outside belongs to foreign partners, inside to domestic ones" },
      { k: "D", ru: "Это два названия одного и того же", en: "They are two names for the same thing" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Продажа доли меняет внешний базис у покупателя и не трогает внутренний.", en: "Correct. A sale of an interest changes the buyer's outside basis and leaves the inside basis alone." },
      B: { ru: "Способ оценки здесь ни при чём: разница в том, чей это базис и в чём.", en: "The method of valuation is not the point: the difference is whose basis it is and in what." },
      C: { ru: "К резидентству это отношения не имеет.", en: "It has nothing to do with residence." },
      D: { ru: "Это разные величины, и расхождение между ними и создаёт нужду в выборе §754.", en: "They are different figures, and the gap between them is what creates the need for the section 754 election." }
    }
  },
  {
    sec: "s111",
    ru: "Покупатель заплатил за долю дорого, а активы внутри партнёрства числятся по старой стоимости. Что можно сделать?",
    en: "A buyer paid a high price for an interest while the assets inside the partnership stand at their old value. What may be done?",
    opts: [
      { k: "A", ru: "Партнёрство вправе выбрать §754 и подтянуть внутренний базис — только для этого партнёра", en: "The partnership may elect under section 754 and bring the inside basis up — for that partner only" },
      { k: "B", ru: "Покупатель вправе сам переоценить активы", en: "The buyer may revalue the assets himself" },
      { k: "C", ru: "Ничего: расхождение неустранимо", en: "Nothing: the gap cannot be removed" },
      { k: "D", ru: "Партнёрство обязано подтянуть базис для всех партнёров", en: "The partnership must bring the basis up for all the partners" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Выбор делает партнёрство, а не покупатель, и корректировка действует только для него.", en: "Correct. The election is made by the partnership rather than the buyer, and the adjustment works for that partner alone." },
      B: { ru: "Покупатель на внутренний базис влиять не может.", en: "The buyer cannot touch the inside basis." },
      C: { ru: "Лекарство есть, и это выбор §754.", en: "There is a remedy, and it is the section 754 election." },
      D: { ru: "Ни обязанности, ни действия для всех здесь нет.", en: "There is neither an obligation nor an effect for everyone here." }
    }
  },
  {
    sec: "s111",
    ru: "Базис доли $45 000, из них $10 000 — доля в долгах. Партнёр продаёт долю за $22 000 деньгами, покупатель принимает долги. Каков результат?",
    en: "The basis is $45,000, of which $10,000 is a share of liabilities. The partner sells for $22,000 in cash and the buyer takes over the debts. What is the result?",
    opts: [
      { k: "A", ru: "Капитальный убыток $13 000", en: "A capital loss of $13,000" },
      { k: "B", ru: "Капитальный убыток $23 000", en: "A capital loss of $23,000" },
      { k: "C", ru: "Капитальная прибыль $13 000", en: "A capital gain of $13,000" },
      { k: "D", ru: "Ноль", en: "Nil" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Реализовано 22 000 + 10 000 = 32 000; 32 000 − 45 000 = −13 000. При продаже доли убыток признаётся.", en: "Correct. The amount realized is 22,000 + 10,000 = 32,000; 32,000 − 45,000 = −13,000. On a sale of an interest a loss is recognised." },
      B: { ru: "Освобождение от долга не прибавлено к реализованному.", en: "The debt relief was not added to the amount realized." },
      C: { ru: "Знак перепутан: реализовано меньше базиса.", en: "The sign is wrong: the amount realized is less than the basis." },
      D: { ru: "Результат не нулевой, и убыток при продаже признаётся.", en: "The result is not nil, and a loss on a sale is recognised." }
    }
  },
  {
    sec: "s112",
    ru: "Чем ликвидационное распределение отличается от текущего?",
    en: "How does a liquidating distribution differ from a current one?",
    opts: [
      { k: "A", ru: "Убытком, который может быть признан, и тем, что весь оставшийся базис доли обязан разойтись по полученному", en: "By the loss that may be recognised, and by the whole remaining basis having to be spread over what was received" },
      { k: "B", ru: "Ничем: правила одинаковые", en: "In nothing: the rules are the same" },
      { k: "C", ru: "Тем, что прибыль становится обычной", en: "In that the gain becomes ordinary" },
      { k: "D", ru: "Тем, что базис доли не уменьшается", en: "In that the basis of the interest is not reduced" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. В остальном оно считается так же: прибыль только сверх базиса, и она капитальная.", en: "Correct. In all else it is reckoned the same: gain only above basis, and that gain capital." },
      B: { ru: "Два отличия есть, и оба существенные.", en: "There are two differences, and both matter." },
      C: { ru: "Прибыль остаётся капитальной — если не вмешались горячие активы.", en: "The gain stays capital — unless hot assets intervene." },
      D: { ru: "Базис уменьшается и здесь, только раздаётся он иначе.", en: "The basis is reduced here too; it is merely spread differently." }
    }
  },
  {
    sec: "s112",
    ru: "При каких условиях убыток при ликвидационном распределении признаётся?",
    en: "On what conditions is a loss on a liquidating distribution recognised?",
    opts: [
      { k: "A", ru: "Базис больше распределённого, доля прекращается целиком, распределены только деньги, дебиторка и запасы — всё сразу", en: "The basis exceeds the distribution, the interest ends entirely, and only money, receivables and inventory were distributed — all at once" },
      { k: "B", ru: "Достаточно того, что базис больше распределённого", en: "It is enough that the basis exceeds the distribution" },
      { k: "C", ru: "Достаточно того, что распределены только деньги", en: "It is enough that only money was distributed" },
      { k: "D", ru: "Убыток при ликвидации не признаётся никогда", en: "A loss on liquidation is never recognised" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Три условия, и нужны все три одновременно.", en: "Correct. Three conditions, and all three are needed at once." },
      B: { ru: "Одного этого мало: нужны ещё полное прекращение доли и ограниченный перечень полученного.", en: "That alone is not enough: the complete ending of the interest and the limited list of what was received are also required." },
      C: { ru: "Перечень шире: годятся также дебиторка и запасы. Но одного этого условия мало.", en: "The list is wider: receivables and inventory will do too. But that condition alone is not enough." },
      D: { ru: "Никогда не признаётся убыток при <em>текущем</em> распределении; при ликвидационном — может.", en: "It is on a <em>current</em> distribution that loss is never recognised; on a liquidating one it may be." }
    }
  },
  {
    sec: "s112",
    ru: "Базис доли $25 000. При полной ликвидации партнёр получает $16 000 деньгами и дебиторку с базисом у партнёрства ноль. Каков результат?",
    en: "The basis is $25,000. On complete liquidation the partner receives $16,000 in cash and receivables with a partnership basis of nil. What is the result?",
    opts: [
      { k: "A", ru: "Капитальный убыток $9 000", en: "A capital loss of $9,000" },
      { k: "B", ru: "Убытка нет", en: "There is no loss" },
      { k: "C", ru: "Обычный убыток $9 000", en: "An ordinary loss of $9,000" },
      { k: "D", ru: "Капитальный убыток $25 000", en: "A capital loss of $25,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Все три условия выполнены: 25 000 − 16 000 − 0 = 9 000, и характер капитальный.", en: "Correct. All three conditions are met: 25,000 − 16,000 − 0 = 9,000, and the character is capital." },
      B: { ru: "Дебиторка входит в перечень допустимого, значит, третье условие выполнено.", en: "Receivables are on the permitted list, so the third condition is met." },
      C: { ru: "Убыток при ликвидации доли характеризуется как от продажи капитального актива.", en: "A loss on liquidating an interest is characterised as from the sale of a capital asset." },
      D: { ru: "Полученные деньги из базиса вычитаются.", en: "The money received is subtracted from the basis." }
    }
  },
  {
    sec: "s112",
    ru: "Те же условия, но вместо дебиторки партнёр получил станок. Что с убытком?",
    en: "The same facts, but instead of the receivables the partner received a machine. What of the loss?",
    opts: [
      { k: "A", ru: "Убытка нет; лишний базис уходит в станок", en: "There is no loss; the surplus basis goes into the machine" },
      { k: "B", ru: "Убыток тот же $9 000", en: "The same $9,000 loss" },
      { k: "C", ru: "Убыток $9 000, но обычный", en: "A $9,000 loss, but ordinary" },
      { k: "D", ru: "Убыток удваивается", en: "The loss is doubled" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Третье условие нарушено — распределено имущество вне перечня. Убыток не пропал: он ждёт продажи станка.", en: "Correct. The third condition fails — property outside the list was distributed. The loss is not lost: it waits for the machine to be sold." },
      B: { ru: "Именно третье условие и не выполнено.", en: "It is precisely the third condition that fails." },
      C: { ru: "Убытка нет вовсе, и характер обсуждать нечего.", en: "There is no loss at all, so there is no character to discuss." },
      D: { ru: "Удвоения ни при каких условиях не происходит.", en: "No doubling ever occurs." }
    }
  },
  {
    sec: "s112",
    ru: "Как считается размер признанного убытка при ликвидации доли?",
    en: "How is the amount of a recognised loss on liquidating an interest figured?",
    opts: [
      { k: "A", ru: "Базис доли минус деньги минус базис полученных дебиторки и запасов", en: "The basis of the interest less the money less the basis of the receivables and inventory received" },
      { k: "B", ru: "Базис доли минус рыночная стоимость всего полученного", en: "The basis of the interest less the market value of everything received" },
      { k: "C", ru: "Рыночная стоимость доли минус полученное", en: "The market value of the interest less what was received" },
      { k: "D", ru: "Базис доли целиком", en: "The whole basis of the interest" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Из базиса вычитается всё полученное — по базису, а не по рынку.", en: "Correct. Everything received is subtracted from the basis — at basis, not at market." },
      B: { ru: "Рыночная стоимость здесь не используется.", en: "Market value is not used here." },
      C: { ru: "Рыночная стоимость доли в расчёте не участвует.", en: "The market value of the interest plays no part." },
      D: { ru: "Полученное надо вычесть.", en: "What was received must be subtracted." }
    }
  },
  {
    sec: "s112",
    ru: "Что происходит с оставшимся базисом доли при ликвидационном распределении?",
    en: "What happens to the remaining basis of the interest on a liquidating distribution?",
    opts: [
      { k: "A", ru: "Он весь обязан разойтись по полученному имуществу — при необходимости с наращиванием", en: "All of it must be spread over the property received — with a build-up where needed" },
      { k: "B", ru: "Он просто пропадает", en: "It simply vanishes" },
      { k: "C", ru: "Он остаётся у партнёра как отложенный вычет", en: "It stays with the partner as a deferred deduction" },
      { k: "D", ru: "Он только обрезается вниз, как при текущем распределении", en: "It is only cut down, as on a current distribution" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. В доле базису больше ждать негде: доли не существует.", en: "Correct. There is no interest left for the basis to wait in." },
      B: { ru: "Пропасть ему не дают — в этом и смысл наращивания.", en: "It is not allowed to vanish — that is the point of the build-up." },
      C: { ru: "Отдельного отложенного вычета закон здесь не знает.", en: "The law knows no separate deferred deduction here." },
      D: { ru: "Обрезка вниз бывает и здесь, но наращивание вверх возможно только при ликвидации.", en: "The cut down happens here too, but the build-up upwards is possible only on a liquidation." }
    }
  },
  {
    sec: "s112",
    ru: "В каком порядке наращивается базис при ликвидации, если его больше, чем базис розданного имущества?",
    en: "In what order is basis built up on a liquidation where it exceeds the basis of the property handed over?",
    opts: [
      { k: "A", ru: "Существующий базис, затем удорожание каждого предмета, затем остаток по рыночной стоимости", en: "The existing basis, then each item's appreciation, then the remainder by market value" },
      { k: "B", ru: "Сразу весь базис по рыночной стоимости", en: "The whole basis by market value at once" },
      { k: "C", ru: "Сразу весь базис поровну между предметами", en: "The whole basis equally among the items" },
      { k: "D", ru: "Существующий базис, затем остаток по базисам", en: "The existing basis, then the remainder by the bases" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Три шага, и второй — про удорожание, а не про рынок целиком.", en: "Correct. Three steps, and the second is about appreciation rather than market value as such." },
      B: { ru: "Соблазнительное сокращение. Оно даёт верный ответ, пока всё имущество дорожало, но ломается, как только среди розданного есть подешевевшее.", en: "A tempting short cut. It gives the right answer so long as everything appreciated, and breaks as soon as something handed over has fallen in value." },
      C: { ru: "Поровну не делится.", en: "It is not divided equally." },
      D: { ru: "Остаток делится по рыночной стоимости, а не по базисам.", en: "The remainder is divided by market value, not by the bases." }
    }
  },
  {
    sec: "s112",
    ru: "Базис доли $180 000, денег нет. Партнёр получает станок (рынок $30 000, базис у партнёрства $40 000) и здание (рынок $90 000, базис $50 000). Каков базис станка?",
    en: "The basis is $180,000 and there is no money. The partner receives a machine (market $30,000, partnership basis $40,000) and a building (market $90,000, basis $50,000). What is the machine's basis?",
    opts: [
      { k: "A", ru: "$52 500", en: "$52,500" },
      { k: "B", ru: "$45 000", en: "$45,000" },
      { k: "C", ru: "$40 000", en: "$40,000" },
      { k: "D", ru: "$30 000", en: "$30,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Шаг 1: 40 000. Шаг 2: удорожания у станка нет, у здания 40 000; разошлось 130 000. Шаг 3: остаток 50 000 по рынку 1:3 — станку 12 500. Итого 40 000 + 12 500.", en: "Correct. Step 1: 40,000. Step 2: no appreciation on the machine, 40,000 on the building; 130,000 spread. Step 3: the 50,000 remainder by market 1:3 — 12,500 to the machine. In all 40,000 + 12,500." },
      B: { ru: "Это сокращённый путь: 180 000 разделены сразу по рынку. Он ломается именно тогда, когда среди имущества есть подешевевшее, как здесь.", en: "That is the short cut: 180,000 divided by market value at once. It breaks precisely where something has fallen in value, as here." },
      C: { ru: "Базис перенесён без наращивания, и часть базиса доли пропала бы.", en: "The basis carried over without the build-up, and part of the interest's basis would vanish." },
      D: { ru: "За базис принята рыночная стоимость.", en: "The market value taken as the basis." }
    }
  },
  {
    sec: "s112",
    ru: "Базис доли $52 000. При ликвидации получены $24 000 деньгами, запасы с базисом у партнёрства $12 000 и земля с базисом $22 000. Каков базис земли?",
    en: "The basis is $52,000. On liquidation the partner receives $24,000 in cash, inventory with a partnership basis of $12,000 and land with a basis of $22,000. What is the land's basis?",
    opts: [
      { k: "A", ru: "$16 000", en: "$16,000" },
      { k: "B", ru: "$22 000", en: "$22,000" },
      { k: "C", ru: "$28 000", en: "$28,000" },
      { k: "D", ru: "$18 118", en: "$18,118" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. 52 000 − 24 000 = 28 000 к раздаче; запасам 12 000 в пределах их базиса; земле остаётся 16 000.", en: "Correct. 52,000 − 24,000 = 28,000 to spread; 12,000 to the inventory up to its basis; 16,000 is left for the land." },
      B: { ru: "Базис партнёрства перенесён без обрезки, а базиса доли на это не хватает.", en: "The partnership's basis carried over without the cut, and the interest's basis does not stretch to it." },
      C: { ru: "Запасам не дано ничего, хотя они идут первыми.", en: "Nothing given to the inventory, though it comes first." },
      D: { ru: "Остаток поделён пропорционально базисам вместо порядка «сначала запасы».", en: "The remainder split in proportion to the bases instead of the “inventory first” order." }
    }
  },
  {
    sec: "s112",
    ru: "Партнёр получил при ликвидации нереализованную дебиторку и через два года её взыскал. Какой характер у дохода?",
    en: "A partner received unrealized receivables on liquidation and collected them two years later. What is the character of the income?",
    opts: [
      { k: "A", ru: "Обычный: у дебиторки этот характер бессрочный", en: "Ordinary: for receivables the character is permanent" },
      { k: "B", ru: "Капитальный: прошло больше года", en: "Capital: more than a year has passed" },
      { k: "C", ru: "Обычный только первые пять лет", en: "Ordinary for the first five years only" },
      { k: "D", ru: "Зависит от того, чем дебиторка стала у партнёра", en: "It depends on what the receivables became in the partner's hands" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Характер прилипчив в обе стороны: ни внесение в партнёрство, ни получение обратно не превращает обычный доход в капитальный.", en: "Correct. Character clings both ways: neither putting property in nor taking it back turns ordinary income into capital gain." },
      B: { ru: "Срок владения дебиторку не перекрашивает.", en: "Holding period does not repaint receivables." },
      C: { ru: "Пятилетний срок — у запасов, а не у дебиторки.", en: "The five years belong to inventory, not to receivables." },
      D: { ru: "От назначения у получателя зависит характер запасов, а не дебиторки.", en: "It is inventory whose character depends on its use in the recipient's hands, not receivables." }
    }
  },
  {
    sec: "s112",
    ru: "Партнёр получил при ликвидации имущество, которым партнёрство владело три года. Каков его период владения?",
    en: "A partner received property on liquidation that the partnership had held for three years. What is the holding period?",
    opts: [
      { k: "A", ru: "Включает три года партнёрства", en: "It includes the partnership's three years" },
      { k: "B", ru: "Начинается со дня распределения", en: "It begins on the day of the distribution" },
      { k: "C", ru: "Начинается со следующего дня", en: "It begins the next day" },
      { k: "D", ru: "Обнуляется, потому что доля прекратилась", en: "It is reset because the interest ended" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Период владения переходит и при ликвидации, как при текущем распределении.", en: "Correct. The holding period carries over on a liquidation as on a current distribution." },
      B: { ru: "Заново он не начинается.", en: "It does not begin afresh." },
      C: { ru: "Со следующего дня начинается период доли, полученной за услуги.", en: "The next day is where the period of an interest received for services begins." },
      D: { ru: "Прекращение доли на период владения имуществом не влияет.", en: "The ending of the interest does not affect the property's holding period." }
    }
  },
  {
    sec: "s112",
    ru: "Что вычитается из базиса доли в первую очередь при распределении?",
    en: "What is subtracted from the basis of the interest first on a distribution?",
    opts: [
      { k: "A", ru: "Полученные деньги", en: "The money received" },
      { k: "B", ru: "Базис полученного имущества", en: "The basis of the property received" },
      { k: "C", ru: "Рыночная стоимость полученного имущества", en: "The market value of the property received" },
      { k: "D", ru: "Доля в долгах партнёрства", en: "The share of the partnership's liabilities" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Деньги всегда первые, и только остаток раздаётся по имуществу.", en: "Correct. Money is always first, and only the remainder is spread over the property." },
      B: { ru: "Имущество получает то, что осталось после денег.", en: "The property takes what is left after the money." },
      C: { ru: "Рыночная стоимость в этом расчёте не участвует — кроме третьего шага наращивания.", en: "Market value plays no part here — except at the third step of the build-up." },
      D: { ru: "Уменьшение доли в долгах само приравнено к деньгам и идёт вместе с ними.", en: "A fall in the share of liabilities is itself treated as money and goes with it." }
    }
  },
  {
    sec: "s113",
    ru: "Партнёрство платит выбывающему партнёру за его долю в имуществе партнёрства. Как это считается?",
    en: "A partnership pays a departing partner for their share of its property. How is that reckoned?",
    opts: [
      { k: "A", ru: "Как распределение: капитальная прибыль сверх базиса, и партнёрство не вычитает", en: "As a distribution: capital gain above basis, and the partnership does not deduct" },
      { k: "B", ru: "Как гарантированная выплата с вычетом у партнёрства", en: "As a guaranteed payment, deductible by the partnership" },
      { k: "C", ru: "Как заработная плата", en: "As a wage" },
      { k: "D", ru: "Как распределяемая доля", en: "As a distributive share" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Плата за долю в имуществе — это распределение, а распределение вычету не подлежит.", en: "Correct. Payment for a share of the property is a distribution, and a distribution is not deductible." },
      B: { ru: "Во вторую строку уходят выплаты, зависящие от дохода, и особый случай дебиторки и гудвилла.", en: "The second row takes payments turning on income, and the special case of receivables and goodwill." },
      C: { ru: "Партнёр работником своего партнёрства не бывает.", en: "A partner is never an employee of their own partnership." },
      D: { ru: "Распределяемой долей это становится, только если размер выплаты зависит от дохода.", en: "It becomes a distributive share only where the amount turns on income." }
    }
  },
  {
    sec: "s113",
    ru: "Выбывающему партнёру платят в течение восьми лет, и размер каждой выплаты зависит от прибыли партнёрства. Как это квалифицируется?",
    en: "A departing partner is paid over eight years and each payment's amount turns on the partnership's profit. How is that treated?",
    opts: [
      { k: "A", ru: "Как распределяемая доля — все восемь лет", en: "As a distributive share — for all eight years" },
      { k: "B", ru: "Как распределение: срок слишком долгий", en: "As a distribution: the period is too long" },
      { k: "C", ru: "Как распределение в первый год и доля в остальные", en: "As a distribution in the first year and a share in the rest" },
      { k: "D", ru: "Как продажа доли в рассрочку", en: "As an instalment sale of the interest" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Признак один: размер определяется доходом партнёрства. Срок выплат значения не имеет.", en: "Correct. There is one test: the amount turns on the partnership's income. The length of the period is immaterial." },
      B: { ru: "Срок на квалификацию не влияет вовсе.", en: "The period does not affect the characterisation at all." },
      C: { ru: "Деления по годам правило не знает.", en: "The rule knows no division by year." },
      D: { ru: "Продажей это не является: платит партнёрство.", en: "It is no sale: the partnership is paying." }
    }
  },
  {
    sec: "s113",
    ru: "Выплата выбывающему признана распределяемой долей. Облагается ли она налогом на самозанятость?",
    en: "A payment to a departing partner is treated as a distributive share. Does it bear self-employment tax?",
    opts: [
      { k: "A", ru: "Да, как и гарантированная выплата", en: "Yes, as does a guaranteed payment" },
      { k: "B", ru: "Нет: партнёр уже вышел", en: "No: the partner has already left" },
      { k: "C", ru: "Нет: это капитальная прибыль", en: "No: it is capital gain" },
      { k: "D", ru: "Только в первый год", en: "Only in the first year" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Выплаты, признанные распределяемой долей или гарантированной выплатой, облагаются налогом на самозанятость.", en: "Correct. Payments treated as a distributive share or a guaranteed payment bear self-employment tax." },
      B: { ru: "Выбывающий считается партнёром до последней выплаты в полную ликвидацию доли.", en: "A leaver is treated as a partner until the last payment in complete liquidation of the interest." },
      C: { ru: "Капитальной становится прибыль от платы за долю в имуществе, а это другая строка.", en: "It is payment for the share of property that gives capital gain, and that is the other row." },
      D: { ru: "Ограничения по годам здесь нет.", en: "There is no limitation by year here." }
    }
  },
  {
    sec: "s113",
    ru: "При каких условиях выплаты за долю выбывающего в дебиторке и гудвилле перестают считаться платой за имущество?",
    en: "On what conditions do payments for a departing partner's share of receivables and goodwill stop being treated as payment for property?",
    opts: [
      { k: "A", ru: "Капитал не существенный источник дохода и партнёр был генеральным — оба условия сразу", en: "Capital is not a material income-producing factor and the partner was a general one — both at once" },
      { k: "B", ru: "Достаточно, чтобы партнёр был генеральным", en: "It is enough that the partner was a general one" },
      { k: "C", ru: "Достаточно, чтобы капитал не был существенным источником дохода", en: "It is enough that capital is not a material factor" },
      { k: "D", ru: "Всегда: дебиторка и гудвилл имуществом не считаются", en: "Always: receivables and goodwill are never property" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Два условия, и нужны оба. Типичный случай — юридическая или бухгалтерская фирма.", en: "Correct. Two conditions, and both are needed. The typical case is a law or accountancy firm." },
      B: { ru: "Одного этого мало: капитал не должен быть существенным источником дохода.", en: "That alone is not enough: capital must also not be a material factor." },
      C: { ru: "Одного этого мало: партнёр должен был быть генеральным.", en: "That alone is not enough: the partner must also have been a general one." },
      D: { ru: "По общему правилу они как раз считаются имуществом партнёрства.", en: "As a rule they are precisely treated as partnership property." }
    }
  },
  {
    sec: "s113",
    ru: "Партнёрское соглашение прямо предусматривает разумную выплату выбывающему за гудвилл. Как она считается?",
    en: "The partnership agreement expressly provides a reasonable payment to a leaver for goodwill. How is it treated?",
    opts: [
      { k: "A", ru: "Как плата за имущество — то есть распределение", en: "As payment for property — that is, a distribution" },
      { k: "B", ru: "Как распределяемая доля", en: "As a distributive share" },
      { k: "C", ru: "Как гарантированная выплата", en: "As a guaranteed payment" },
      { k: "D", ru: "Не учитывается вовсе", en: "It is disregarded" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Это изъятие из изъятия: записали в соглашении — значит, плата за имущество, и она возвращается в первую строку.", en: "Correct. This is the exception to the exception: put it in the agreement and it is payment for property, and back it goes to the first row." },
      B: { ru: "В долю она уходила бы, не будь оговорки в соглашении.", en: "It would go to the share were the agreement silent." },
      C: { ru: "Гарантированной выплатой она не становится именно из-за оговорки.", en: "It does not become a guaranteed payment precisely because of the provision." },
      D: { ru: "Учитывается, и вполне определённым образом.", en: "It is taken into account, and in a quite definite way." }
    }
  },
  {
    sec: "s113",
    ru: "Генеральный партнёр вышел из юридической фирмы. Ему платят $140 000 за долю в имуществе и $60 000 за долю в дебиторке; базис доли $110 000. О гудвилле соглашение молчит. Что он показывает?",
    en: "A general partner left a law firm. He is paid $140,000 for his share of the property and $60,000 for his share of the receivables; the basis is $110,000. The agreement is silent on goodwill. What does he report?",
    opts: [
      { k: "A", ru: "$30 000 капитальной прибыли и $60 000 обычного дохода", en: "$30,000 of capital gain and $60,000 of ordinary income" },
      { k: "B", ru: "$90 000 капитальной прибыли", en: "$90,000 of capital gain" },
      { k: "C", ru: "$60 000 капитальной прибыли и $30 000 обычного дохода", en: "$60,000 of capital gain and $30,000 of ordinary income" },
      { k: "D", ru: "$200 000 обычного дохода", en: "$200,000 of ordinary income" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. За имущество: 140 000 − 110 000 = 30 000 капитальной. За дебиторку: оба условия выполнены, значит, 60 000 обычного дохода с налогом на самозанятость и вычетом у фирмы.", en: "Correct. For the property: 140,000 − 110,000 = 30,000 of capital gain. For the receivables: both conditions are met, so 60,000 of ordinary income bearing self-employment tax and deductible by the firm." },
      B: { ru: "Дебиторка не выделена: 200 000 − 110 000. Так было бы в магазине, где капитал существенный источник дохода.", en: "The receivables not separated: 200,000 − 110,000. That would be so in a shop, where capital is a material factor." },
      C: { ru: "Характеры переставлены местами.", en: "The characters are swapped." },
      D: { ru: "Вся выплата отнесена ко второй строке, хотя плата за имущество остаётся распределением.", en: "The whole payment put in the second row, though payment for property stays a distribution." }
    }
  },
  {
    sec: "s113",
    ru: "Расчёт с выбывающим партнёром растянут на пять лет. Считается ли он партнёром всё это время?",
    en: "A settlement with a departing partner is spread over five years. Is he treated as a partner all that time?",
    opts: [
      { k: "A", ru: "Да, до последней выплаты в полную ликвидацию доли", en: "Yes, until the last payment in complete liquidation of the interest" },
      { k: "B", ru: "Нет: он перестал быть партнёром в день выхода", en: "No: he ceased to be a partner on the day he left" },
      { k: "C", ru: "Да, но только первый год", en: "Yes, but only for the first year" },
      { k: "D", ru: "Это решают оставшиеся партнёры", en: "The remaining partners decide" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Всё это время он получает приложение K-1, и партнёрство продолжает его считать.", en: "Correct. All that while he receives a Schedule K-1 and the partnership goes on counting him." },
      B: { ru: "Для налога он остаётся партнёром, пока расчёт не закончен.", en: "For tax he stays a partner until the settlement is complete." },
      C: { ru: "Ограничения одним годом нет.", en: "There is no limitation to one year." },
      D: { ru: "Это вопрос закона, а не решения партнёров.", en: "It is a question of law, not of the partners' decision." }
    }
  },
  {
    sec: "s113",
    ru: "Когда закрывается налоговый год партнёрства в отношении выбывающего партнёра?",
    en: "When does the partnership's tax year close with respect to a departing partner?",
    opts: [
      { k: "A", ru: "Когда его доля прекратилась целиком", en: "When the interest has ended entirely" },
      { k: "B", ru: "С первой выплатой в счёт расчёта", en: "With the first payment towards the settlement" },
      { k: "C", ru: "В день, когда он объявил о выходе", en: "On the day he announced his departure" },
      { k: "D", ru: "В конце календарного года", en: "At the end of the calendar year" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Не с первой выплатой, а с последней — когда доля прекратилась полностью.", en: "Correct. Not with the first payment but with the last — when the interest has ended completely." },
      B: { ru: "Первая выплата долю не прекращает.", en: "The first payment does not end the interest." },
      C: { ru: "Объявление о выходе налоговых последствий само по себе не создаёт.", en: "An announcement of departure creates no tax consequence of itself." },
      D: { ru: "Конец календарного года к этому правилу отношения не имеет.", en: "The end of the calendar year has nothing to do with this rule." }
    }
  },
  {
    sec: "s113",
    ru: "Партнёр умер в мае. Как делится его доля в результатах партнёрства за год?",
    en: "A partner died in May. How is their share of the partnership's results for the year divided?",
    opts: [
      { k: "A", ru: "До дня смерти — в последнюю декларацию умершего, после — правопреемнику", en: "Up to the day of death on the deceased's final return, afterwards to the successor" },
      { k: "B", ru: "Целиком в последнюю декларацию умершего", en: "Wholly on the deceased's final return" },
      { k: "C", ru: "Целиком правопреемнику", en: "Wholly to the successor" },
      { k: "D", ru: "Поровну между ними", en: "Equally between them" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Граница проходит по дате смерти. Заметьте: доход от самозанятости при этом считается по конец месяца.", en: "Correct. The line falls at the date of death. Note that self-employment income is nonetheless figured to the end of the month." },
      B: { ru: "После смерти доля переходит к правопреемнику.", en: "After the death the share passes to the successor." },
      C: { ru: "До смерти доля принадлежала умершему.", en: "Before the death the share belonged to the deceased." },
      D: { ru: "Поровну не делится: делится по дате.", en: "It is not divided equally: it is divided by date." }
    }
  },
  {
    sec: "s114",
    ru: "Когда партнёрство прекращается для целей федерального налога?",
    en: "When does a partnership terminate for federal tax purposes?",
    opts: [
      { k: "A", ru: "Когда вся его деятельность свёрнута и никем из партнёров в партнёрстве не продолжается", en: "When all its operations are discontinued and none is carried on by any of its partners in a partnership" },
      { k: "B", ru: "Когда сменилось больше половины состава партнёров", en: "When more than half the membership has changed" },
      { k: "C", ru: "Когда партнёры приняли решение о ликвидации", en: "When the partners resolve to liquidate" },
      { k: "D", ru: "Когда продана большая часть активов", en: "When most of the assets have been sold" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Это единственное основание; прочие события партнёрства не прекращают.", en: "Correct. That is the only ground; no other event terminates a partnership." },
      B: { ru: "Прекращение по смене состава существовало прежде, но теперь его нет.", en: "Termination on a change of membership existed formerly but exists no longer." },
      C: { ru: "Решение само по себе деятельность не сворачивает.", en: "A resolution does not of itself discontinue the operations." },
      D: { ru: "Продажа активов — часть свёртывания, но не сам его конец.", en: "Selling assets is part of the winding up but not its end." }
    }
  },
  {
    sec: "s114",
    ru: "Какой день считается днём прекращения партнёрства?",
    en: "What day is the date of a partnership's termination?",
    opts: [
      { k: "A", ru: "День, когда завершено свёртывание дел", en: "The day the winding up is completed" },
      { k: "B", ru: "День решения партнёров", en: "The day the partners resolved" },
      { k: "C", ru: "День последней сделки", en: "The day of the last transaction" },
      { k: "D", ru: "Последний день календарного года", en: "The last day of the calendar year" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Именно завершение свёртывания, а не намерение и не последняя продажа.", en: "Correct. The completion of the winding up, not the intention and not the last sale." },
      B: { ru: "Решение — начало процесса, а не его конец.", en: "The resolution begins the process; it does not end it." },
      C: { ru: "После последней сделки остаются расчёты, и свёртывание продолжается.", en: "After the last transaction settlements remain and the winding up goes on." },
      D: { ru: "Конец календарного года здесь ни при чём.", en: "The end of the calendar year is irrelevant here." }
    }
  },
  {
    sec: "s114",
    ru: "Партнёрство прекратилось 30 сентября. Когда подавать форму 1065 за короткий период?",
    en: "A partnership terminated on September 30. When is the short-period Form 1065 due?",
    opts: [
      { k: "A", ru: "К 15 декабря — 15-й день 3-го месяца после дня прекращения", en: "By December 15 — the 15th day of the 3rd month after the date of termination" },
      { k: "B", ru: "К 15 марта следующего года", en: "By March 15 of the next year" },
      { k: "C", ru: "К 31 декабря", en: "By December 31" },
      { k: "D", ru: "Короткую декларацию подавать не нужно", en: "No short-period return is required" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Срок тот же, но отсчитывается от дня прекращения, а не от конца календарного года.", en: "Correct. The due date is the usual one but runs from the date of termination, not from the end of the calendar year." },
      B: { ru: "15 марта был бы сроком, если бы год шёл до конца декабря.", en: "March 15 would be the date had the year run to the end of December." },
      C: { ru: "Такого срока правило не устанавливает.", en: "The rule sets no such date." },
      D: { ru: "Короткая декларация обязательна: за период с начала года по день прекращения.", en: "A short-period return is required: for the period from the start of the year to the date of termination." }
    }
  },
  {
    sec: "s114",
    ru: "Партнёрство преобразовалось в компанию с ограниченной ответственностью, которая для налога остаётся партнёрством. Что происходит?",
    en: "A partnership converted into a limited liability company that remains a partnership for tax. What happens?",
    opts: [
      { k: "A", ru: "Ни продажи, ни обмена, ни ликвидации; год не закрывается, номер сохраняется", en: "No sale, no exchange, no liquidation; the year does not close and the number is kept" },
      { k: "B", ru: "Партнёрство прекращается, и создаётся новое лицо", en: "The partnership terminates and a new entity arises" },
      { k: "C", ru: "Каждый партнёр считается продавшим свою долю", en: "Each partner is treated as having sold their interest" },
      { k: "D", ru: "Год закрывается, но номер сохраняется", en: "The year closes but the number is kept" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Для налога не произошло ничего — кроме возможного пересчёта базисов, о котором отдельный вопрос.", en: "Correct. For tax nothing happened — save the possible refiguring of bases, which is a separate matter." },
      B: { ru: "Новое лицо не возникает: то же партнёрство в другой оболочке.", en: "No new entity arises: the same partnership in a different shell." },
      C: { ru: "Продажи нет ни у кого.", en: "Nobody has sold anything." },
      D: { ru: "Год как раз не закрывается.", en: "The year precisely does not close." }
    }
  },
  {
    sec: "s114",
    ru: "Почему при преобразовании партнёрства в компанию с ограниченной ответственностью базисы партнёров могут измениться?",
    en: "Why may the partners' bases change when a partnership converts into a limited liability company?",
    opts: [
      { k: "A", ru: "Долги с личной ответственностью часто становятся без неё, а делятся эти два вида по-разному", en: "Recourse debts often become nonrecourse, and the two kinds are shared differently" },
      { k: "B", ru: "Активы переоцениваются по рынку", en: "The assets are revalued at market" },
      { k: "C", ru: "Партнёрство закрывает налоговый год", en: "The partnership closes its tax year" },
      { k: "D", ru: "Базисы при преобразовании не меняются никогда", en: "Bases never change on a conversion" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Долги с личной ответственностью идут в базис тем, кто отвечает лично; без неё — всем по долям в прибыли. Смена вида меняет и раскладку.", en: "Correct. Recourse debt goes into the basis of those personally liable; nonrecourse goes to all by the profit shares. Changing the kind changes the allocation." },
      B: { ru: "Переоценки не происходит: сделки нет.", en: "There is no revaluation: there is no transaction." },
      C: { ru: "Год как раз не закрывается.", en: "The year precisely does not close." },
      D: { ru: "Могут — и именно из-за долгов.", en: "They may — and precisely because of the debts." }
    }
  },
  {
    sec: "s114",
    ru: "При ликвидации партнёрства в каком порядке расходятся деньги от продажи активов?",
    en: "On the liquidation of a partnership, in what order are the proceeds of selling the assets paid out?",
    opts: [
      { k: "A", ru: "Сначала долги, включая займы самих партнёров, потом доли партнёров", en: "Debts first, including loans from the partners themselves, then the partners' interests" },
      { k: "B", ru: "Сначала доли партнёров, потом долги", en: "The partners' interests first, then the debts" },
      { k: "C", ru: "Пропорционально всем требованиям сразу", en: "Proportionately to all claims at once" },
      { k: "D", ru: "Сначала генеральным партнёрам, потом кредиторам", en: "General partners first, then creditors" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Партнёр, одолживший партнёрству деньги, стоит в этой очереди как кредитор, а не как партнёр.", en: "Correct. A partner who lent the partnership money stands in that queue as a creditor, not as a partner." },
      B: { ru: "Долги идут первыми — даже если активы проданы с убытком.", en: "Debts come first — even where the assets were sold at a loss." },
      C: { ru: "Очередь строгая, а не пропорциональная.", en: "The queue is strict, not proportionate." },
      D: { ru: "Кредиторы впереди любых партнёров.", en: "Creditors come ahead of any partner." }
    }
  },
  {
    sec: "s114",
    ru: "В партнёрстве из пяти партнёров четверо продали свои доли посторонним, дело продолжается. Прекратилось ли партнёрство?",
    en: "In a five-partner partnership four sold their interests to outsiders and the business goes on. Has the partnership terminated?",
    opts: [
      { k: "A", ru: "Нет: деятельность не свёрнута", en: "No: the operations were not discontinued" },
      { k: "B", ru: "Да: сменилось больше половины состава", en: "Yes: more than half the membership changed" },
      { k: "C", ru: "Да: продано больше 50% долей", en: "Yes: more than 50% of the interests were sold" },
      { k: "D", ru: "Да, но только если продажи прошли в один день", en: "Yes, but only if the sales happened on one day" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Единственное основание прекращения — свёртывание всей деятельности. Смена состава партнёрства не прекращает.", en: "Correct. The only ground of termination is the discontinuance of all operations. A change of membership terminates nothing." },
      B: { ru: "Прекращение по смене состава существовало прежде и было отменено.", en: "Termination on a change of membership existed formerly and was repealed." },
      C: { ru: "Порога в 50% в нынешнем правиле нет.", en: "There is no 50% threshold in the present rule." },
      D: { ru: "Одновременность продаж значения не имеет.", en: "Whether the sales were simultaneous is immaterial." }
    }
  },
  {
    sec: "s114",
    ru: "Что происходит с налоговым годом партнёрства в день его прекращения?",
    en: "What happens to the partnership's tax year on the date of its termination?",
    opts: [
      { k: "A", ru: "Он заканчивается в этот день", en: "It ends on that day" },
      { k: "B", ru: "Он продолжается до конца календарного года", en: "It runs to the end of the calendar year" },
      { k: "C", ru: "Он продлевается на шесть месяцев", en: "It is extended by six months" },
      { k: "D", ru: "Он не меняется", en: "It is unchanged" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Отсюда и короткая декларация — за период с начала года по день прекращения.", en: "Correct. Hence the short-period return — for the period from the start of the year to the date of termination." },
      B: { ru: "Продолжаться ему не с чем: лица больше нет.", en: "There is nothing for it to run in: the entity is gone." },
      C: { ru: "Продление даётся на подачу, а не на сам год.", en: "An extension is of the filing date, not of the year." },
      D: { ru: "Меняется: год обрывается в день прекращения.", en: "It does change: the year is cut off on the date of termination." }
    }
  },
  {
    sec: "s111",
    ru: "Партнёрство ведёт учёт кассовым методом, и его дебиторская задолженность числится с нулевым базисом. Почему она называется горячим активом?",
    en: "A partnership is on the cash method and its receivables stand at a nil basis. Why are they called a hot asset?",
    opts: [
      { k: "A", ru: "Потому что при взыскании она даст обычный доход на всю сумму, и закон не даёт уйти от этого через продажу доли", en: "Because on collection they give ordinary income on the whole amount, and the law does not let that be escaped by selling the interest" },
      { k: "B", ru: "Потому что её нельзя продать", en: "Because they cannot be sold" },
      { k: "C", ru: "Потому что она быстро обесценивается", en: "Because they lose value quickly" },
      { k: "D", ru: "Потому что она облагается по повышенной ставке", en: "Because they bear an increased rate" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. У кассового партнёрства доход по дебиторке ещё не признан, базис нулевой, и вся сумма при взыскании будет обычным доходом.", en: "Correct. In a cash-basis partnership the income on the receivables is not yet recognised, the basis is nil, and the whole amount will be ordinary income on collection." },
      B: { ru: "Продать её можно; дело в характере дохода, а не в оборотоспособности.", en: "They can be sold; the point is the character of the income, not transferability." },
      C: { ru: "Обесценивание к определению отношения не имеет.", en: "Losing value has nothing to do with the definition." },
      D: { ru: "Повышенной ставки для горячих активов нет — есть обычная вместо капитальной.", en: "There is no increased rate for hot assets — there is the ordinary rate instead of the capital one." }
    }
  },
  {
    sec: "s111",
    ru: "Партнёр владел долей четыре года и продал её с прибылью. Горячих активов у партнёрства нет. Какой это прирост?",
    en: "A partner held an interest for four years and sold it at a gain. The partnership has no hot assets. What kind of gain is it?",
    opts: [
      { k: "A", ru: "Долгосрочный прирост капитала: решает период владения долей", en: "Long-term capital gain: the holding period of the interest decides" },
      { k: "B", ru: "Краткосрочный: доля каждый год меняется", en: "Short-term: the interest changes every year" },
      { k: "C", ru: "Обычный доход", en: "Ordinary income" },
      { k: "D", ru: "Зависит от периода владения активами партнёрства", en: "It depends on how long the partnership held its assets" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Продаётся доля, значит, смотрят период владения долей, а он четыре года.", en: "Correct. It is the interest that is sold, so its holding period is what is looked at, and that is four years." },
      B: { ru: "Изменения базиса период владения не обнуляют.", en: "Changes in basis do not reset the holding period." },
      C: { ru: "Обычным становится только то, что приходится на горячие активы, а их здесь нет.", en: "Only what is attributable to hot assets becomes ordinary, and there are none here." },
      D: { ru: "Период владения активами партнёрства решает характер прибыли у партнёрства, а не у продавца доли.", en: "The partnership's holding period settles the character of its own gains, not that of the seller of an interest." }
    }
  },
  {
    sec: "s112",
    ru: "Партнёр получает при полной ликвидации только деньги — $60 000 при базисе доли $45 000. Что он показывает?",
    en: "On complete liquidation a partner receives only money — $60,000 against a basis of $45,000. What does he report?",
    opts: [
      { k: "A", ru: "$15 000 капитальной прибыли", en: "$15,000 of capital gain" },
      { k: "B", ru: "$60 000 капитальной прибыли", en: "$60,000 of capital gain" },
      { k: "C", ru: "$15 000 обычного дохода", en: "$15,000 of ordinary income" },
      { k: "D", ru: "Ничего", en: "Nothing" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Прибыль возникает только сверх базиса и здесь, как и при текущем распределении, она капитальная.", en: "Correct. Gain arises only above the basis, and here, as on a current distribution, it is capital." },
      B: { ru: "Базис вычитается.", en: "The basis is subtracted." },
      C: { ru: "Обычной прибыль стала бы при несоразмерном распределении горячих активов; здесь только деньги.", en: "The gain would be ordinary on a disproportionate distribution of hot assets; here there is only money." },
      D: { ru: "Полученное превысило базис, значит, есть и прибыль.", en: "What was received exceeded the basis, so there is gain." }
    }
  },
  {
    sec: "s112",
    ru: "Базис доли $70 000. При полной ликвидации партнёр получает $50 000 деньгами и здание с базисом у партнёрства $30 000. Каков базис здания у партнёра?",
    en: "The basis is $70,000. On complete liquidation the partner receives $50,000 in cash and a building with a partnership basis of $30,000. What is the partner's basis in the building?",
    opts: [
      { k: "A", ru: "$20 000", en: "$20,000" },
      { k: "B", ru: "$30 000", en: "$30,000" },
      { k: "C", ru: "$70 000", en: "$70,000" },
      { k: "D", ru: "Ноль", en: "Nil" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. 70 000 − 50 000 = 20 000 остаётся на имущество, и базис здания обрезается до этой суммы.", en: "Correct. 70,000 − 50,000 = 20,000 is left for the property, and the building's basis is cut down to it." },
      B: { ru: "Базис партнёрства перенесён без обрезки, а базиса доли на него не хватает.", en: "The partnership's basis carried over without the cut, and the interest's basis does not stretch to it." },
      C: { ru: "Деньги из базиса доли не вычтены.", en: "The money was not subtracted from the interest's basis." },
      D: { ru: "Базис остался, и он уходит в здание.", en: "Basis remains, and it goes into the building." }
    }
  },
  {
    sec: "s112",
    ru: "Партнёр получил при ликвидации запасы и продал их через семь лет. Чем определяется характер результата?",
    en: "A partner received inventory on liquidation and sold it seven years later. What settles the character of the result?",
    opts: [
      { k: "A", ru: "Тем, чем эти запасы стали в руках партнёра: пять лет уже прошли", en: "By what the inventory became in the partner's hands: five years have passed" },
      { k: "B", ru: "Обычный доход в любом случае", en: "Ordinary income in any event" },
      { k: "C", ru: "Капитальная прибыль в любом случае", en: "Capital gain in any event" },
      { k: "D", ru: "Характером у партнёрства до распределения", en: "By its character in the partnership before the distribution" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Первые пять лет после распределения результат обычный; потом решает назначение имущества у самого партнёра.", en: "Correct. For the first five years after the distribution the result is ordinary; thereafter the use in the partner's own hands decides." },
      B: { ru: "Бессрочно обычный характер держится у дебиторки, а не у запасов.", en: "It is receivables whose ordinary character is permanent, not inventory." },
      C: { ru: "Капитальной прибыль будет, только если у партнёра это капитальный актив.", en: "The gain is capital only if in the partner's hands it is a capital asset." },
      D: { ru: "Прежний характер держится пять лет, и они истекли.", en: "The former character holds five years, and they have run out." }
    }
  },
  {
    sec: "s112",
    ru: "Базис доли $90 000, денег нет. Партнёр получает один участок: рынок $50 000, базис у партнёрства $35 000. Каков базис участка?",
    en: "The basis is $90,000 and there is no money. The partner receives one plot: market $50,000, partnership basis $35,000. What is its basis?",
    opts: [
      { k: "A", ru: "$90 000", en: "$90,000" },
      { k: "B", ru: "$35 000", en: "$35,000" },
      { k: "C", ru: "$50 000", en: "$50,000" },
      { k: "D", ru: "$55 000", en: "$55,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Предмет один, и весь оставшийся базис доли уходит в него — даже если он вдвое выше рыночной стоимости. Шаги с удорожанием и рынком нужны только при нескольких предметах.", en: "Correct. There is one item and all the remaining basis goes into it — even where that is twice the market value. The appreciation and market steps are needed only with several items." },
      B: { ru: "Базис перенесён без наращивания, и $55 000 пропали бы.", en: "The basis carried over without the build-up, and $55,000 would vanish." },
      C: { ru: "За базис принята рыночная стоимость.", en: "The market value taken as the basis." },
      D: { ru: "Это разница, а не базис.", en: "That is the difference, not the basis." }
    }
  },
  {
    sec: "s113",
    ru: "Партнёрство выплачивает выбывающему партнёру фиксированную сумму ежегодно, не зависящую от прибыли, за его долю в имуществе. Вычитает ли партнёрство эти выплаты?",
    en: "A partnership pays a departing partner a fixed annual amount, independent of profit, for their share of the property. Does the partnership deduct it?",
    opts: [
      { k: "A", ru: "Нет: это распределение, а распределение вычету не подлежит", en: "No: it is a distribution, and a distribution is not deductible" },
      { k: "B", ru: "Да: сумма фиксирована, значит, это гарантированная выплата", en: "Yes: the amount is fixed, so it is a guaranteed payment" },
      { k: "C", ru: "Да, наполовину", en: "Yes, by half" },
      { k: "D", ru: "Да, если партнёр был генеральным", en: "Yes, if the partner was a general one" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Решает не форма выплаты, а за что платят: за долю в имуществе — значит, распределение.", en: "Correct. What decides is not the form of the payment but what is being paid for: a share of the property means a distribution." },
      B: { ru: "Фиксированность сама по себе выплату гарантированной не делает: смотрят на предмет платежа.", en: "A fixed amount does not of itself make a payment guaranteed: what is looked at is what is being paid for." },
      C: { ru: "Половин здесь нет.", en: "There are no halves here." },
      D: { ru: "Условие о генеральном партнёре относится к выплатам за дебиторку и гудвилл, а не к плате за имущество.", en: "The general partner condition belongs to payments for receivables and goodwill, not to payment for property." }
    }
  },
  {
    sec: "s113",
    ru: "Из магазина, где капитал существенный источник дохода, выходит генеральный партнёр. Ему платят в том числе за долю в гудвилле. Как это считается?",
    en: "A general partner leaves a shop where capital is a material income-producing factor and is paid, among other things, for a share of the goodwill. How is that treated?",
    opts: [
      { k: "A", ru: "Как плата за имущество: первое условие не выполнено", en: "As payment for property: the first condition fails" },
      { k: "B", ru: "Как распределяемая доля: партнёр был генеральным", en: "As a distributive share: the partner was a general one" },
      { k: "C", ru: "Как гарантированная выплата", en: "As a guaranteed payment" },
      { k: "D", ru: "Не облагается", en: "Not taxed" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Нужны оба условия; в магазине капитал существенный источник дохода, значит, режим имущества сохраняется.", en: "Correct. Both conditions are needed; in a shop capital is a material factor, so the property regime holds." },
      B: { ru: "Одного условия о генеральном партнёре мало.", en: "The general partner condition alone is not enough." },
      C: { ru: "Гарантированной выплатой это стало бы только при выполнении обоих условий.", en: "It would become a guaranteed payment only if both conditions were met." },
      D: { ru: "Облагается: прибыль сверх базиса доли.", en: "It is taxed: gain above the basis of the interest." }
    }
  },
  {
    sec: "s114",
    ru: "Партнёрство продало все активы с убытком, и вырученного не хватает на все долги. Кому платят в первую очередь?",
    en: "A partnership sold all its assets at a loss and the proceeds do not cover the debts. Who is paid first?",
    opts: [
      { k: "A", ru: "Кредиторам, включая партнёров, одолживших партнёрству деньги", en: "The creditors, including partners who lent the partnership money" },
      { k: "B", ru: "Генеральным партнёрам", en: "The general partners" },
      { k: "C", ru: "Партнёрам с ограниченной ответственностью", en: "The limited partners" },
      { k: "D", ru: "Всем поровну", en: "Everyone equally" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Долги идут первыми даже при убыточной продаже, и партнёр-заимодавец стоит в очереди как кредитор.", en: "Correct. Debts come first even where the sale was at a loss, and a partner who lent money stands in the queue as a creditor." },
      B: { ru: "Генеральные партнёры получают последними — после кредиторов и партнёров с ограниченной ответственностью.", en: "General partners are paid last — after the creditors and the limited partners." },
      C: { ru: "Они идут после кредиторов, а не первыми.", en: "They come after the creditors, not first." },
      D: { ru: "Очередь строгая.", en: "The queue is strict." }
    }
  },
  {
    sec: "s114",
    ru: "Партнёрство прекратило деятельность 20 июня, но расчёты с кредиторами и раздел имущества закончились только 5 августа. Какой день считается днём прекращения?",
    en: "A partnership ceased trading on June 20, but the settlement with creditors and the division of property were finished only on August 5. What is the date of termination?",
    opts: [
      { k: "A", ru: "5 августа: день, когда завершено свёртывание дел", en: "August 5: the day the winding up was completed" },
      { k: "B", ru: "20 июня: день прекращения деятельности", en: "June 20: the day trading ceased" },
      { k: "C", ru: "31 декабря", en: "December 31" },
      { k: "D", ru: "Любой из двух по выбору партнёрства", en: "Either of the two, at the partnership's choice" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Считается завершение свёртывания, а не остановка торговли. От этого дня и отсчитывается срок короткой декларации.", en: "Correct. It is the completion of the winding up that counts, not the stopping of trade. The short-period return's due date runs from that day." },
      B: { ru: "Остановка деятельности — начало свёртывания, а не его конец.", en: "Ceasing to trade begins the winding up; it does not end it." },
      C: { ru: "Конец календарного года здесь ни при чём.", en: "The end of the calendar year is irrelevant." },
      D: { ru: "Выбора нет: день задан правилом.", en: "There is no choice: the day is fixed by the rule." }
    }
  }

];
