/* ===================================================================
   Вопросы тренажёра, модуль 10.

   Отдельный файл, а не блок внутри страницы: под file:// страница не
   может прочитать другой файл, поэтому единственный способ отдать
   данные двум страницам сразу — тег <script src>. Файл подключают и
   su10.html, и trainer.html.
   =================================================================== */

window.QUIZZES  = window.QUIZZES  || {};
window.QUIZSECS = window.QUIZSECS || {};

window.QUIZSECS.su10 = {
  s101: { no: "10.1", ru: "Что партнёрство считает и что показывает отдельно", en: "What the partnership figures and what it states separately" },
  s102: { no: "10.2", ru: "Доля партнёра: когда и сколько", en: "The partner's share: when and how much" },
  s103: { no: "10.3", ru: "Базис за год и четыре предела убытка", en: "Basis over the year, and four limits on loss" },
  s104: { no: "10.4", ru: "Распределения", en: "Distributions" },
  s105: { no: "10.5", ru: "Сделки партнёра со своим партнёрством", en: "A partner dealing with their own partnership" }
};

window.QUIZZES.su10 = [
  {
    sec: "s101",
    ru: "По какому признаку статья партнёрства выносится в отдельно показываемые?",
    en: "On what test is a partnership item made separately stated?",
    opts: [
      { k: "A", ru: "Она может дать разный налог у разных партнёров", en: "It may give different tax in different partners' hands" },
      { k: "B", ru: "Она превышает установленную сумму", en: "It exceeds a set amount" },
      { k: "C", ru: "Она относится к прошлому году", en: "It relates to a prior year" },
      { k: "D", ru: "Её нельзя вычесть у партнёрства", en: "It is not deductible by the partnership" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Это принцип, а не произвольный список: смешать такое в одну цифру нельзя, иначе цифра перестанет быть верной хоть для кого-нибудь.", en: "Correct. It is a principle, not an arbitrary list: such items cannot be stirred into one figure, or the figure stops being right for anybody." },
      B: { ru: "Никакого порога по сумме здесь нет.", en: "There is no threshold by amount here." },
      C: { ru: "Возвраты ранее вычтенного действительно показываются отдельно, но признак не в этом.", en: "Recoveries of amounts deducted before are indeed stated separately, but that is not the test." },
      D: { ru: "Многие отдельно показываемые статьи партнёрство как раз вычитает — например, §179.", en: "Many separately stated items are deducted by the partnership — section 179, for one." }
    }
  },
  {
    sec: "s101",
    ru: "Чем обычный доход партнёрства отличается от его налогооблагаемого дохода?",
    en: "How does a partnership's ordinary income differ from its taxable income?",
    opts: [
      { k: "A", ru: "Обычный доход — только то, что не вынесено отдельно; налогооблагаемый включает и отдельные статьи", en: "Ordinary income is only what is not stated separately; taxable income takes in the separate items too" },
      { k: "B", ru: "Это одно и то же", en: "They are the same thing" },
      { k: "C", ru: "Обычный доход считается до вычетов, налогооблагаемый — после", en: "Ordinary income is before deductions, taxable income after" },
      { k: "D", ru: "Налогооблагаемый доход — это то, с чего партнёрство платит налог", en: "Taxable income is what the partnership pays tax on" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Обычный доход делится по долям одной цифрой; налогооблагаемый — сумма всего, включая отдельные статьи.", en: "Correct. Ordinary income is divided by the shares as a single figure; taxable income is the sum of everything, separate items included." },
      B: { ru: "Разница есть, и её проверяют.", en: "There is a difference, and it is tested." },
      C: { ru: "Оба показателя считаются после вычетов, разница не в этом.", en: "Both are figured after deductions; that is not the difference." },
      D: { ru: "Партнёрство налога не платит вовсе.", en: "A partnership pays no tax at all." }
    }
  },
  {
    sec: "s101",
    ru: "Как гарантированная выплата участвует в расчёте обычного дохода партнёрства?",
    en: "How does a guaranteed payment enter the computation of the partnership's ordinary income?",
    opts: [
      { k: "A", ru: "Вычитается при расчёте обычного дохода и тут же показывается отдельно как доход получателя", en: "It is deducted in figuring ordinary income and at once stated separately as the recipient's income" },
      { k: "B", ru: "Не вычитается: это распределение прибыли", en: "It is not deducted: it is a distribution of profit" },
      { k: "C", ru: "Вычитается, но отдельно не показывается", en: "It is deducted but not stated separately" },
      { k: "D", ru: "Не вычитается и отдельно не показывается", en: "It is neither deducted nor stated separately" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Одна сумма в двух ролях: партнёрство её отдало, партнёр получил.", en: "Correct. One amount in two roles: the partnership gave it, the partner received it." },
      B: { ru: "Это как раз не распределение: выплата определяется без учёта дохода партнёрства.", en: "It is precisely not a distribution: the payment is fixed without regard to the partnership's income." },
      C: { ru: "Показывается: получатель должен увидеть её отдельной строкой.", en: "It is stated: the recipient must see it on a line of its own." },
      D: { ru: "Оба утверждения неверны.", en: "Both halves are wrong." }
    }
  },
  {
    sec: "s101",
    ru: "Партнёр внёс имущество: базис $400, рыночная стоимость $1 000. Каким будет его счёт капитала и каким базис доли?",
    en: "A partner contributed property with a basis of $400 and a market value of $1,000. What will the capital account be, and what the basis of the interest?",
    opts: [
      { k: "A", ru: "Счёт капитала $1 000, базис $400", en: "Capital account $1,000, basis $400" },
      { k: "B", ru: "Счёт капитала $400, базис $1 000", en: "Capital account $400, basis $1,000" },
      { k: "C", ru: "И то и другое $1 000", en: "Both $1,000" },
      { k: "D", ru: "И то и другое $400", en: "Both $400" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Счёт капитала — величина экономическая и открывается по рынку; базис — налоговая и открывается по базису внесённого.", en: "Correct. The capital account is an economic figure opened at market; the basis is a tax figure opened at the basis contributed." },
      B: { ru: "Всё наоборот: по рынку открывается счёт, а не базис.", en: "The other way round: it is the account that opens at market, not the basis." },
      C: { ru: "Совпадают они только тогда, когда внесены одни деньги.", en: "They coincide only where nothing but cash was contributed." },
      D: { ru: "Счёт капитала показывает экономику, а она здесь $1 000.", en: "The capital account shows the economics, and here that is $1,000." }
    }
  },
  {
    sec: "s101",
    ru: "Какой из выборов делает партнёр, а не партнёрство?",
    en: "Which election is made by the partner rather than by the partnership?",
    opts: [
      { k: "A", ru: "Взять иностранный налог на доход кредитом или вычетом", en: "Taking foreign income tax as a credit or as a deduction" },
      { k: "B", ru: "Метод учёта", en: "The accounting method" },
      { k: "C", ru: "Способ амортизации", en: "The method of depreciation" },
      { k: "D", ru: "Метод учёта запасов", en: "The inventory method" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Партнёру оставлены три выбора, и все три — те, где личные обстоятельства неизбежно различаются.", en: "Correct. Three elections are left to the partner, and all three are ones where personal circumstances inevitably differ." },
      B: { ru: "Метод учёта выбирает партнёрство, и он действует одинаково для всех.", en: "The accounting method is chosen by the partnership and applies alike to all." },
      C: { ru: "Амортизацию выбирает партнёрство.", en: "Depreciation is chosen by the partnership." },
      D: { ru: "Метод учёта запасов выбирает партнёрство.", en: "The inventory method is chosen by the partnership." }
    }
  },
  {
    sec: "s101",
    ru: "Партнёрство выбрало кассовый метод учёта. Что это значит для собственного предприятия партнёра?",
    en: "A partnership elected the cash method. What does that mean for the partner's own business?",
    opts: [
      { k: "A", ru: "Ничего: выбор партнёрства не имеет силы для непартнёрских дел партнёра", en: "Nothing: a partnership election has no force for the partner's non-partnership affairs" },
      { k: "B", ru: "Партнёр обязан перейти на кассовый метод", en: "The partner must move to the cash method" },
      { k: "C", ru: "Партнёр вправе перейти, но не обязан", en: "The partner may move to it but need not" },
      { k: "D", ru: "Партнёр обязан согласовать свой метод с партнёрством", en: "The partner must reconcile their method with the partnership's" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Оговорка прямая: никакой выбор партнёрства не действует в отношении непартнёрских интересов партнёра.", en: "Correct. The proviso is express: no partnership election has any effect on a partner's non-partnership interests." },
      B: { ru: "Обязанности нет никакой.", en: "There is no such obligation." },
      C: { ru: "Право партнёра на свой метод существует само по себе и от партнёрства не зависит.", en: "The partner's right to their own method exists independently of the partnership." },
      D: { ru: "Согласования закон не требует.", en: "The law requires no such reconciliation." }
    }
  },
  {
    sec: "s101",
    ru: "Сколько партнёров должны подписать форму 1065?",
    en: "How many partners must sign Form 1065?",
    opts: [
      { k: "A", ru: "Любой один; подпись сама по себе доказывает его полномочия", en: "Any one; the signature itself proves the authority" },
      { k: "B", ru: "Все партнёры", en: "All the partners" },
      { k: "C", ru: "Большинство партнёров", en: "A majority of the partners" },
      { k: "D", ru: "Только представитель партнёрства", en: "Only the partnership representative" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Подпись одного партнёра служит доказательством того, что он был на это уполномочен.", en: "Correct. One partner's signature is evidence that they were authorised to give it." },
      B: { ru: "Подписей всех не требуется.", en: "The signatures of all are not required." },
      C: { ru: "Большинство здесь ни при чём.", en: "A majority is irrelevant here." },
      D: { ru: "Представитель отвечает за проверку, а подписать декларацию может любой партнёр.", en: "The representative answers for examinations; any partner may sign the return." }
    }
  },
  {
    sec: "s101",
    ru: "Обязан ли представитель партнёрства быть партнёром?",
    en: "Must the partnership representative be a partner?",
    opts: [
      { k: "A", ru: "Нет, но он обязан иметь существенное присутствие в США", en: "No, but they must have a substantial presence in the United States" },
      { k: "B", ru: "Да, обязательно", en: "Yes, necessarily" },
      { k: "C", ru: "Да, и притом с долей более 50%", en: "Yes, and with more than a 50% interest at that" },
      { k: "D", ru: "Нет, и никаких других требований к нему нет", en: "No, and there are no other requirements" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Быть партнёром необязательно, а присутствие в США обязательно.", en: "Correct. Being a partner is not required; presence in the United States is." },
      B: { ru: "Представителем может быть и посторонний — например, бухгалтер партнёрства.", en: "An outsider may serve — the partnership's accountant, say." },
      C: { ru: "Размер доли к назначению отношения не имеет.", en: "The size of any interest is irrelevant to the designation." },
      D: { ru: "Требование к присутствию в США есть.", en: "The requirement of presence in the United States does exist." }
    }
  },
  {
    sec: "s101",
    ru: "Какие права у партнёра, не являющегося представителем партнёрства, при налоговой проверке?",
    en: "What rights has a partner who is not the partnership representative, in an examination?",
    opts: [
      { k: "A", ru: "По закону никаких: ни на извещение, ни на участие", en: "By law none: neither to notice nor to take part" },
      { k: "B", ru: "Право на извещение, но не на участие", en: "A right to notice but not to take part" },
      { k: "C", ru: "Право участвовать наравне с представителем", en: "A right to take part on equal terms with the representative" },
      { k: "D", ru: "Право назначить своего представителя", en: "A right to appoint a representative of their own" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Полномочия представителя исключительные, и это одна из главных особенностей нынешнего порядка.", en: "Correct. The representative's authority is exclusive, and that is one of the chief features of the present regime." },
      B: { ru: "Права на извещение тоже нет.", en: "There is no right to notice either." },
      C: { ru: "Наравне — как раз то, чего нынешний порядок не предусматривает.", en: "Equal terms are exactly what the present regime does not provide." },
      D: { ru: "Представитель у партнёрства один, и назначает его партнёрство.", en: "A partnership has one representative, designated by the partnership." }
    }
  },
  {
    sec: "s101",
    ru: "Сколько партнёров допускает выход из централизованного аудита партнёрства?",
    en: "How many partners does electing out of the centralized partnership audit regime allow?",
    opts: [
      { k: "A", ru: "100 или меньше, и все должны быть подходящими", en: "100 or fewer, and all must be eligible" },
      { k: "B", ru: "Меньше 100 без условий к их составу", en: "Fewer than 100, with no conditions as to who they are" },
      { k: "C", ru: "Любое число, если все физические лица", en: "Any number, if all are individuals" },
      { k: "D", ru: "10 или меньше", en: "10 or fewer" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Оба условия обязательны: и число, и состав.", en: "Correct. Both conditions are required: the number and the composition." },
      B: { ru: "Состав важен: партнёрство или траст среди партнёров выход закрывают.", en: "The composition matters: a partnership or a trust among the partners closes it off." },
      C: { ru: "Число ограничено независимо от состава.", en: "The number is limited whatever the composition." },
      D: { ru: "Десять — это про обязанность подавать электронно, а не про выход из аудита.", en: "Ten belongs to the electronic filing duty, not to electing out." }
    }
  },
  {
    sec: "s101",
    ru: "Партнёрство вышло из централизованного аудита. Что теперь будет при проверке?",
    en: "A partnership has elected out of the centralized audit regime. What happens now on examination?",
    opts: [
      { k: "A", ru: "Налоговая проверит каждого партнёра по отдельности", en: "The revenue will examine each partner separately" },
      { k: "B", ru: "Проверки не будет вовсе", en: "There will be no examination at all" },
      { k: "C", ru: "Проверка пройдёт на уровне партнёрства, но без доначислений", en: "The examination will be at the partnership level but without assessment" },
      { k: "D", ru: "Проверять будет только представитель партнёрства", en: "Only the partnership representative will be examined" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Выход избавляет не от проверки, а от единого фронта: налог доначисляется каждому партнёру, а не партнёрству.", en: "Correct. Electing out avoids not the examination but the united front: tax is assessed on each partner rather than on the partnership." },
      B: { ru: "Проверка никуда не девается.", en: "The examination does not go away." },
      C: { ru: "На уровне партнёрства проверка как раз и не проводится после выхода.", en: "After electing out there is no partnership-level examination." },
      D: { ru: "Представителя после выхода нет вовсе.", en: "After electing out there is no representative at all." }
    }
  },
  {
    sec: "s101",
    ru: "Как часто делается выбор представителя партнёрства или выход из централизованного аудита?",
    en: "How often is the designation of a partnership representative, or the election out, made?",
    opts: [
      { k: "A", ru: "Каждый год заново, в декларации", en: "Afresh each year, on the return" },
      { k: "B", ru: "Один раз и действует бессрочно", en: "Once, and it holds indefinitely" },
      { k: "C", ru: "Раз в три года", en: "Once every three years" },
      { k: "D", ru: "При каждой смене состава партнёров", en: "Whenever the membership changes" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. И выход возможен только на вовремя поданной декларации, с учётом продления.", en: "Correct. And electing out is possible only on a timely filed return, extensions included." },
      B: { ru: "Бессрочных выборов здесь нет.", en: "There are no indefinite elections here." },
      C: { ru: "Такого срока закон не устанавливает.", en: "The law sets no such period." },
      D: { ru: "Смена состава сама по себе выбора не требует, а год — требует.", en: "A change of membership does not of itself call for an election; a new year does." }
    }
  },
  {
    sec: "s101",
    ru: "Партнёр считает, что партнёрство неверно показало статью. Что он вправе сделать?",
    en: "A partner believes the partnership reported an item wrongly. What may they do?",
    opts: [
      { k: "A", ru: "Уведомить налоговую отдельно, а не ставить у себя свою цифру молча", en: "Notify the revenue separately, rather than quietly entering their own figure" },
      { k: "B", ru: "Показать у себя ту цифру, которую считает правильной", en: "Report whatever figure they think right" },
      { k: "C", ru: "Не показывать эту статью вовсе", en: "Leave the item out altogether" },
      { k: "D", ru: "Потребовать от партнёрства подать уточнённую декларацию", en: "Require the partnership to file an amended return" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Правило последовательности требует показывать статью в той же сумме, в том же году и того же характера, а несогласие оформляется уведомлением.", en: "Correct. The consistency rule requires the item to be reported in the same amount, the same year and the same character, and disagreement is registered by notice." },
      B: { ru: "Молча разойтись с партнёрством нельзя — это и есть нарушение правила последовательности.", en: "Quietly departing from the partnership is precisely a breach of the consistency rule." },
      C: { ru: "Пропуск статьи правилу тем более не отвечает.", en: "Omitting the item complies still less." },
      D: { ru: "Такого права у отдельного партнёра нет.", en: "An individual partner has no such right." }
    }
  },
  {
    sec: "s102",
    ru: "Партнёр с долей 40% за год не получил из партнёрства никаких выплат. Прибыль партнёрства — $150 000. Что он показывает?",
    en: "A 40% partner received no payments from the partnership during the year. The partnership's profit was $150,000. What does the partner report?",
    opts: [
      { k: "A", ru: "$60 000", en: "$60,000" },
      { k: "B", ru: "Ноль: выплат не было", en: "Nil: there were no payments" },
      { k: "C", ru: "$150 000", en: "$150,000" },
      { k: "D", ru: "$60 000, но только в год получения денег", en: "$60,000, but only in the year the money is received" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Налог платится со своей доли, а не с полученного: деньги, оставленные в деле, — тоже прибыль партнёра.", en: "Correct. Tax is paid on the share, not on what was received: money left in the business is the partner's profit too." },
      B: { ru: "Это главное заблуждение темы. Прозрачность означает, что платить должен кто-то, а партнёрство платить не может.", en: "That is the chief misconception of the subject. Transparency means somebody must pay, and the partnership cannot." },
      C: { ru: "Вся прибыль партнёрства — не доля этого партнёра.", en: "The partnership's whole profit is not this partner's share." },
      D: { ru: "Год определяется годом партнёрства, а не моментом выплаты.", en: "The year is set by the partnership's year, not by when money is paid." }
    }
  },
  {
    sec: "s102",
    ru: "Партнёрство закрывает налоговый год 31 января 2025 года. Партнёр считает по календарному году. В декларации за какой год он показывает свою долю?",
    en: "A partnership closed its tax year on January 31, 2025. The partner uses the calendar year. On the return for which year is the share reported?",
    opts: [
      { k: "A", ru: "За 2025 год", en: "2025" },
      { k: "B", ru: "За 2024 год", en: "2024" },
      { k: "C", ru: "Поровну между 2024 и 2025", en: "Split between 2024 and 2025" },
      { k: "D", ru: "За тот год, в котором были получены деньги", en: "The year in which the money was received" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Показывается доля за год партнёрства, закончившийся внутри года партнёра: 31 января 2025 лежит внутри 2025-го.", en: "Correct. The share is reported for the partnership year ending within the partner's year: January 31, 2025 lies within 2025." },
      B: { ru: "2024 — год, в котором партнёр получал выплаты, но год признания определяется иначе.", en: "2024 is when payments were received, but the year of recognition is fixed otherwise." },
      C: { ru: "Доход по месяцам не делится.", en: "The income is not divided by months." },
      D: { ru: "Момент получения денег здесь не решает ничего.", en: "When the money arrived decides nothing here." }
    }
  },
  {
    sec: "s102",
    ru: "Мэри внесла актив с базисом $80 000 и рыночной стоимостью $100 000 в равное партнёрство. Через два года его продали за $110 000. Сколько прибыли у Мэри?",
    en: "Mary contributed an asset with a basis of $80,000 and a market value of $100,000 to an equal partnership. Two years later it was sold for $110,000. What is Mary's gain?",
    opts: [
      { k: "A", ru: "$25 000", en: "$25,000" },
      { k: "B", ru: "$15 000", en: "$15,000" },
      { k: "C", ru: "$30 000", en: "$30,000" },
      { k: "D", ru: "$20 000", en: "$20,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Предвкладные $20 000 идут ей целиком, а наросшие после вклада $10 000 делятся пополам: 20 000 + 5 000 = 25 000.", en: "Correct. The $20,000 of precontribution gain is hers entire, and the $10,000 accrued afterwards is halved: 20,000 + 5,000 = 25,000." },
      B: { ru: "Это половина всей прибыли: предвкладная часть не выделена вкладчику.", en: "That is half the whole gain: the precontribution part was not given to the contributor." },
      C: { ru: "Вся прибыль отнесена к вкладчику, а послевкладная часть делится.", en: "The whole gain given to the contributor, though the post-contribution part is divided." },
      D: { ru: "Только предвкладная часть: доля в послевкладном приросте не начислена.", en: "Only the precontribution part: her share of the later growth was omitted." }
    }
  },
  {
    sec: "s102",
    ru: "На каком уровне определяется характер дохода — обычный он или капитальный?",
    en: "At what level is the character of income — ordinary or capital — determined?",
    opts: [
      { k: "A", ru: "На уровне партнёрства; к партнёру он приходит готовым", en: "At the partnership level; it reaches the partner already settled" },
      { k: "B", ru: "На уровне партнёра, по его обстоятельствам", en: "At the partner level, by their circumstances" },
      { k: "C", ru: "На уровне партнёрства, но партнёр вправе изменить его у себя", en: "At the partnership level, but the partner may change it at home" },
      { k: "D", ru: "По соглашению партнёров", en: "By agreement of the partners" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Партнёр не может переименовать у себя то, что партнёрство назвало иначе.", en: "Correct. A partner cannot rename at home what the partnership called something else." },
      B: { ru: "Обстоятельства партнёра влияют на пределы вычета, но не на характер.", en: "The partner's circumstances affect the limits on deduction, not the character." },
      C: { ru: "Изменить характер партнёр не вправе — это и есть правило последовательности.", en: "The partner may not change it — that is the consistency rule." },
      D: { ru: "Соглашение распределяет доли, а не переопределяет характер дохода.", en: "The agreement allocates shares; it does not redefine the character of income." }
    }
  },
  {
    sec: "s102",
    ru: "Партнёр внёс нереализованную дебиторскую задолженность. Через восемь лет партнёрство её взыскало. Какой характер у дохода?",
    en: "A partner contributed unrealized receivables. Eight years later the partnership collected them. What is the character of the income?",
    opts: [
      { k: "A", ru: "Обычный: у дебиторки этот характер бессрочный", en: "Ordinary: for receivables the character is permanent" },
      { k: "B", ru: "Капитальный: прошло больше пяти лет", en: "Capital: more than five years have passed" },
      { k: "C", ru: "Капитальный: дебиторка всегда капитальный актив", en: "Capital: receivables are always a capital asset" },
      { k: "D", ru: "Обычный только первые пять лет, потом капитальный", en: "Ordinary for the first five years only, capital thereafter" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. У нереализованной дебиторки обычный характер держится всегда, срока нет. Пятилетний срок — у запасов и у подешевевшего капитального имущества.", en: "Correct. For unrealized receivables the ordinary character holds for ever, with no time limit. The five years belong to inventory and to capital property that had fallen in value." },
      B: { ru: "Пятилетний срок к дебиторке не относится.", en: "The five-year period does not apply to receivables." },
      C: { ru: "Дебиторка капитальным активом не является.", en: "Receivables are not a capital asset." },
      D: { ru: "Это правило для запасов, а не для дебиторки.", en: "That is the rule for inventory, not for receivables." }
    }
  },
  {
    sec: "s102",
    ru: "Партнёр внёс запасы. Через три года партнёрство продало их с прибылью. Какой характер у прибыли?",
    en: "A partner contributed inventory. Three years later the partnership sold it at a gain. What is the character of the gain?",
    opts: [
      { k: "A", ru: "Обычный: пять лет с вклада ещё не прошли", en: "Ordinary: five years from the contribution have not yet passed" },
      { k: "B", ru: "Капитальный: у партнёрства это не запасы", en: "Capital: in the partnership's hands it is not inventory" },
      { k: "C", ru: "Обычный всегда, без срока", en: "Ordinary for ever, with no limit" },
      { k: "D", ru: "Капитальный: прошло больше года", en: "Capital: more than a year has passed" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Вложенные запасы дают обычный доход пять лет после вклада; прошло три.", en: "Correct. Contributed inventory gives ordinary income for five years after the contribution; three have passed." },
      B: { ru: "В том и смысл правила: характер прилипает к имуществу и не даёт уйти от обычного дохода через партнёрство.", en: "That is the point of the rule: the character clings to the property and prevents escaping ordinary income through a partnership." },
      C: { ru: "Бессрочен характер у дебиторки, а не у запасов.", en: "It is receivables whose character is permanent, not inventory." },
      D: { ru: "Год владения здесь ни при чём.", en: "A year's holding is irrelevant here." }
    }
  },
  {
    sec: "s102",
    ru: "Партнёр вошёл в партнёрство 1 октября. Как считается его распределяемая доля за год?",
    en: "A partner joined on October 1. How is their distributive share for the year figured?",
    opts: [
      { k: "A", ru: "По дням: только за ту часть года, когда он был партнёром", en: "Daily: only for the part of the year he was a partner" },
      { k: "B", ru: "Полная годовая доля", en: "A full annual share" },
      { k: "C", ru: "Доля не полагается вовсе до следующего года", en: "No share at all until the next year" },
      { k: "D", ru: "Половина годовой доли", en: "Half the annual share" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. При изменении размера доли в течение года распределяемые доли считаются по дням.", en: "Correct. Where the size of an interest changes during the year, the distributive shares are figured daily." },
      B: { ru: "Полная доля означала бы, что он участвует в заработанном до него.", en: "A full share would give him a part of what was earned before him." },
      C: { ru: "За свою часть года он долю получает.", en: "For his part of the year he does take a share." },
      D: { ru: "Половина — произвольная величина; считается по дням.", en: "A half is arbitrary; the count is daily." }
    }
  },
  {
    sec: "s102",
    ru: "Партнёр дарит свою долю. Долги, приходящиеся на неё, — $50 000, базис доли — $30 000. Что у дарителя?",
    en: "A partner gives away their interest. The liabilities allocable to it are $50,000 and its basis is $30,000. What follows for the donor?",
    opts: [
      { k: "A", ru: "Прибыль $20 000", en: "Gain of $20,000" },
      { k: "B", ru: "Ничего: дарение налога не создаёт", en: "Nothing: a gift creates no tax" },
      { k: "C", ru: "Убыток $20 000", en: "Loss of $20,000" },
      { k: "D", ru: "Прибыль $50 000", en: "Gain of $50,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. По общему правилу прибыли при дарении нет, но долги сверх базиса доли её создают: 50 000 − 30 000.", en: "Correct. As a rule a gift gives no gain, but liabilities above the basis of the interest do create it: 50,000 − 30,000." },
      B: { ru: "Общее правило именно такое, но у него есть это исключение, и его-то и спрашивают.", en: "That is the general rule, but it has this exception, and the exception is what gets asked." },
      C: { ru: "Убыток при дарении не признаётся никогда.", en: "Loss is never recognised on a gift." },
      D: { ru: "Прибыль — превышение долгов над базисом, а не вся сумма долгов.", en: "The gain is the excess of the liabilities over the basis, not the whole of the liabilities." }
    }
  },
  {
    sec: "s102",
    ru: "Партнёр умер в середине года. Что происходит с налоговым годом партнёрства?",
    en: "A partner died in mid-year. What happens to the partnership's tax year?",
    opts: [
      { k: "A", ru: "Закрывается только для него; для остальных идёт своим чередом", en: "It closes for that partner alone; for the others it runs on" },
      { k: "B", ru: "Закрывается для всех партнёров", en: "It closes for all the partners" },
      { k: "C", ru: "Не закрывается ни для кого", en: "It closes for nobody" },
      { k: "D", ru: "Закрывается для всех, и партнёрство прекращается", en: "It closes for all, and the partnership terminates" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Год партнёрства закрывается в отношении партнёра, чья доля прекратилась целиком, — смертью, ликвидацией или иначе.", en: "Correct. The partnership's year closes with respect to a partner whose entire interest terminates — by death, liquidation or otherwise." },
      B: { ru: "Для остальных партнёров год продолжается.", en: "For the other partners the year goes on." },
      C: { ru: "Для умершего закрывается: иначе его последнюю декларацию нечем было бы наполнить.", en: "It does close for the deceased: otherwise there would be nothing to put on the final return." },
      D: { ru: "Смерть одного партнёра партнёрства не прекращает.", en: "The death of one partner does not terminate the partnership." }
    }
  },
  {
    sec: "s102",
    ru: "Наследник получил долю умершего партнёра. Каков его базис?",
    en: "A successor received a deceased partner's interest. What is their basis?",
    opts: [
      { k: "A", ru: "Рыночная стоимость доли", en: "The market value of the interest" },
      { k: "B", ru: "Базис умершего партнёра", en: "The deceased partner's basis" },
      { k: "C", ru: "Ноль", en: "Nil" },
      { k: "D", ru: "Рыночная стоимость минус долги партнёрства", en: "Market value less the partnership's liabilities" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Наследник получает базис по рыночной стоимости — общее правило для унаследованного имущества.", en: "Correct. The successor takes a market-value basis — the general rule for inherited property." },
      B: { ru: "Перенос базиса — правило для дарения, а не для наследования.", en: "Carryover of basis is the rule for gifts, not for inheritance." },
      C: { ru: "Нулевого базиса здесь не возникает.", en: "No nil basis arises here." },
      D: { ru: "Доля в долгах партнёрства базис как раз повышает, а не понижает.", en: "The share of the partnership's liabilities raises the basis, it does not lower it." }
    }
  },
  {
    sec: "s102",
    ru: "По какой день считается доход умершего партнёра от самозанятости?",
    en: "To what day is a deceased partner's self-employment income figured?",
    opts: [
      { k: "A", ru: "По конец месяца, в котором наступила смерть", en: "To the end of the month in which the death fell" },
      { k: "B", ru: "По день смерти", en: "To the day of death" },
      { k: "C", ru: "По конец квартала", en: "To the end of the quarter" },
      { k: "D", ru: "По конец налогового года партнёрства", en: "To the end of the partnership's tax year" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Именно по конец месяца, и это мелкое правило любят спрашивать.", en: "Correct. To the end of the month, and this small rule is a favourite to ask about." },
      B: { ru: "По день смерти — правдоподобный, но неверный ответ.", en: "To the day of death is plausible but wrong." },
      C: { ru: "Кварталами этот расчёт не ведётся.", en: "The computation does not run by quarters." },
      D: { ru: "Год партнёрства для умершего как раз закрывается раньше.", en: "For the deceased the partnership's year closes earlier." }
    }
  },
  {
    sec: "s102",
    ru: "Партнёр внёс капитальное имущество, подешевевшее к дате вклада на $12 000. Через два года партнёрство продало его с убытком $20 000. Какой характер у убытка?",
    en: "A partner contributed capital property that had fallen $12,000 in value by the contribution date. Two years later the partnership sold it at a $20,000 loss. What is the character of the loss?",
    opts: [
      { k: "A", ru: "Капитальный в части $12 000, остальное — по общему правилу", en: "Capital as to $12,000; the rest follows the general rule" },
      { k: "B", ru: "Капитальный целиком", en: "Capital in full" },
      { k: "C", ru: "Обычный целиком", en: "Ordinary in full" },
      { k: "D", ru: "Капитальный только если прошло больше пяти лет", en: "Capital only if more than five years have passed" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Правило держит капитальный характер пять лет, но только в размере той просадки, что была на дату вклада.", en: "Correct. The rule keeps the capital character for five years, but only up to the drop that existed at the contribution date." },
      B: { ru: "Правило ограничено размером просадки на дату вклада, а она $12 000.", en: "The rule is limited to the drop at the contribution date, and that is $12,000." },
      C: { ru: "В пределах просадки характер как раз капитальный.", en: "Within the drop the character is precisely capital." },
      D: { ru: "Всё наоборот: правило действует первые пять лет и потом перестаёт.", en: "The other way round: the rule works for the first five years and then stops." }
    }
  },
  {
    sec: "s103",
    ru: "Базис доли на начало года $20 000, доля 50%. Обычный доход партнёрства $10 000, благотворительный взнос $4 000, распределение партнёру $3 000. Каков базис на конец года?",
    en: "The basis at the start of the year is $20,000 and the interest 50%. The partnership had $10,000 of ordinary income, made a $4,000 charitable contribution and distributed $3,000 to the partner. What is the year-end basis?",
    opts: [
      { k: "A", ru: "$20 000", en: "$20,000" },
      { k: "B", ru: "$22 000", en: "$22,000" },
      { k: "C", ru: "$25 000", en: "$25,000" },
      { k: "D", ru: "$18 000", en: "$18,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. 20 000 + 5 000 доли в доходе − 2 000 доли во взносе − 3 000 распределения = 20 000.", en: "Correct. 20,000 + 5,000 share of income − 2,000 share of the contribution − 3,000 distribution = 20,000." },
      B: { ru: "Благотворительный взнос не вычтен: он отдельно показываемая статья и базис понижает.", en: "The charitable contribution was left out: it is a separately stated item and lowers basis." },
      C: { ru: "Не вычтены ни взнос, ни распределение.", en: "Neither the contribution nor the distribution was subtracted." },
      D: { ru: "Взнос вычтен целиком, а не по доле.", en: "The whole contribution taken instead of the share." }
    }
  },
  {
    sec: "s103",
    ru: "Как гарантированная выплата влияет на базис доли получившего её партнёра?",
    en: "How does a guaranteed payment affect the basis of the receiving partner's interest?",
    opts: [
      { k: "A", ru: "Никак: она базис не меняет ни в какую сторону", en: "Not at all: it moves the basis neither way" },
      { k: "B", ru: "Понижает: партнёр получил деньги", en: "It lowers it: the partner received money" },
      { k: "C", ru: "Повышает: партнёр показал доход", en: "It raises it: the partner reported income" },
      { k: "D", ru: "Повышает, а затем понижает на ту же сумму", en: "It raises it and then lowers it by the same amount" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Самое неожиданное правило раздела: выплата уже прошла через доход отдельной строкой и распределением не является.", en: "Correct. The most surprising rule in this part: the payment has already gone through income on a line of its own and is not a distribution." },
      B: { ru: "Распределением выплата не является, и базис она не понижает.", en: "The payment is not a distribution and does not lower the basis." },
      C: { ru: "Это не доля в доходе партнёрства, а отдельная плата.", en: "It is not a share of the partnership's income but a separate payment." },
      D: { ru: "Ни того ни другого не происходит: базис просто не трогается.", en: "Neither happens: the basis is simply left alone." }
    }
  },
  {
    sec: "s103",
    ru: "Убыток партнёра застрял в правилах риска и вычету в этом году не подлежит. Что с базисом его доли?",
    en: "A partner's loss is stuck in the at-risk rules and is not deductible this year. What happens to the basis of the interest?",
    opts: [
      { k: "A", ru: "Базис всё равно уменьшается на долю в убытке", en: "The basis falls by the share of the loss all the same" },
      { k: "B", ru: "Базис не меняется, пока убыток не вычтен", en: "The basis is unchanged until the loss is deducted" },
      { k: "C", ru: "Базис уменьшается наполовину", en: "The basis falls by half" },
      { k: "D", ru: "Базис увеличивается на застрявшую часть", en: "The basis rises by the stuck part" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Базис уменьшается без оглядки на то, удалось ли убыток вычесть.", en: "Correct. The basis falls without regard to whether the loss could be deducted." },
      B: { ru: "Это распространённое заблуждение: базис и вычет живут по разным правилам.", en: "A common misconception: the basis and the deduction run by different rules." },
      C: { ru: "Никакой половины в правиле нет.", en: "There is no halving in the rule." },
      D: { ru: "Убыток базис только понижает.", en: "A loss only lowers the basis." }
    }
  },
  {
    sec: "s103",
    ru: "В каком порядке применяются четыре предела убытка партнёра?",
    en: "In what order are the four limits on a partner's loss applied?",
    opts: [
      { k: "A", ru: "Базис, риск, пассивная деятельность, избыточный деловой убыток", en: "Basis, at risk, passive activity, excess business loss" },
      { k: "B", ru: "Риск, базис, избыточный убыток, пассивная деятельность", en: "At risk, basis, excess business loss, passive activity" },
      { k: "C", ru: "Пассивная деятельность, базис, риск, избыточный убыток", en: "Passive activity, basis, at risk, excess business loss" },
      { k: "D", ru: "Порядок значения не имеет", en: "The order does not matter" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Каждый следующий применяется к тому, что прошло предыдущий.", en: "Correct. Each applies to whatever got through the one before." },
      B: { ru: "Базис идёт первым: без базиса второй фильтр применять не к чему.", en: "Basis comes first: without it there is nothing for the second filter to work on." },
      C: { ru: "Пассивность — третий фильтр, а не первый.", en: "Passivity is the third filter, not the first." },
      D: { ru: "Порядок решает всё: он определяет, сколько дойдёт до декларации.", en: "The order decides everything: it determines how much reaches the return." }
    }
  },
  {
    sec: "s103",
    ru: "Заём партнёрства без личной ответственности. Как он влияет на базис доли и на сумму риска?",
    en: "A nonrecourse partnership loan. How does it affect the basis of the interest and the amount at risk?",
    opts: [
      { k: "A", ru: "Базис повышает, сумму риска — нет", en: "It raises the basis but not the amount at risk" },
      { k: "B", ru: "Повышает обе величины", en: "It raises both" },
      { k: "C", ru: "Не влияет ни на ту, ни на другую", en: "It affects neither" },
      { k: "D", ru: "Сумму риска повышает, базис — нет", en: "It raises the amount at risk but not the basis" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Именно здесь две величины и расходятся, и на этом строят типовую задачу.", en: "Correct. This is exactly where the two figures part company, and the standard problem is built on it." },
      B: { ru: "В сумму риска идут только долги, по которым партнёр отвечает лично.", en: "Only debts for which the partner is personally liable enter the amount at risk." },
      C: { ru: "В базис такой заём входит: партнёрство им распоряжается.", en: "Such a loan does enter the basis: the partnership has the money." },
      D: { ru: "Всё наоборот.", en: "It is the other way round." }
    }
  },
  {
    sec: "s103",
    ru: "Доля партнёра в убытке — $60 000, базис доли $45 000, вся сумма базиса — из вкладов деньгами, партнёр участвует материально. Сколько он вычтет?",
    en: "A partner's share of the loss is $60,000 and the basis $45,000, all of it from cash contributions; the partner materially participates. How much is deducted?",
    opts: [
      { k: "A", ru: "$45 000", en: "$45,000" },
      { k: "B", ru: "$60 000", en: "$60,000" },
      { k: "C", ru: "$15 000", en: "$15,000" },
      { k: "D", ru: "Ноль", en: "Nil" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Первое сито — базис: $45 000. Деньги дают и базис, и риск, поэтому второе сито ничего не срезает, а материальное участие снимает третье.", en: "Correct. First sieve, basis: $45,000. Cash gives both basis and risk, so the second sieve cuts nothing, and material participation clears the third." },
      B: { ru: "Убыток сверх базиса вычесть нельзя; $15 000 ждут года, когда базис снова станет положительным.", en: "Loss above basis cannot be deducted; $15,000 waits for a year when the basis is positive again." },
      C: { ru: "Это как раз застрявшая часть, а не вычет.", en: "That is the stuck part, not the deduction." },
      D: { ru: "Базис есть, и убыток в его пределах вычитается.", en: "There is basis, and the loss is deducted within it." }
    }
  },
  {
    sec: "s103",
    ru: "Убыток партнёра превысил базис доли. Что происходит с превышением?",
    en: "A partner's loss exceeded the basis of the interest. What becomes of the excess?",
    opts: [
      { k: "A", ru: "Ждёт бессрочно года, когда базис снова станет положительным", en: "It waits indefinitely for a year when the basis is positive again" },
      { k: "B", ru: "Пропадает", en: "It is lost" },
      { k: "C", ru: "Переносится назад на два года", en: "It is carried back two years" },
      { k: "D", ru: "Делится между остальными партнёрами", en: "It is divided among the other partners" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Срока у этого ожидания нет.", en: "Correct. There is no time limit on the wait." },
      B: { ru: "Не пропадает: это отложенный, а не утраченный вычет.", en: "It is not lost: the deduction is deferred, not forfeited." },
      C: { ru: "Переноса назад здесь нет.", en: "There is no carryback here." },
      D: { ru: "Чужой убыток другим партнёрам не достаётся.", en: "One partner's loss does not pass to the others." }
    }
  },
  {
    sec: "s103",
    ru: "Партнёр в делах партнёрства материально не участвует. Каков для него характер убытка партнёрства?",
    en: "A partner does not materially participate in the partnership's business. What is the character of the partnership's loss for them?",
    opts: [
      { k: "A", ru: "Пассивный: гасит только доход от других пассивных дел", en: "Passive: it offsets only income from other passive activities" },
      { k: "B", ru: "Обычный деловой без ограничений", en: "An ordinary business loss with no limits" },
      { k: "C", ru: "Капитальный", en: "Capital" },
      { k: "D", ru: "Не вычитается вовсе", en: "Not deductible at all" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Убыток партнёрства для партнёра пассивен по умолчанию — если только он не участвует материально.", en: "Correct. A partnership loss is passive by default for the partner — unless they materially participate." },
      B: { ru: "Без материального участия ограничение по пассивным убыткам как раз и включается.", en: "Without material participation the passive loss limit is precisely what switches on." },
      C: { ru: "Характер убытка от пассивности не меняется на капитальный.", en: "Passivity does not turn the loss into a capital one." },
      D: { ru: "Вычитается — против пассивного дохода, а неиспользованное переносится.", en: "It is deductible — against passive income, and what is unused carries forward." }
    }
  },
  {
    sec: "s103",
    ru: "Какой предел убытка применяется последним и что происходит со срезанным?",
    en: "Which limit on loss applies last, and what becomes of what it cuts off?",
    opts: [
      { k: "A", ru: "Избыточный деловой убыток; срезанное становится чистым операционным убытком следующего года", en: "The excess business loss; what is cut off becomes next year's net operating loss" },
      { k: "B", ru: "Базис; срезанное пропадает", en: "Basis; what is cut off is lost" },
      { k: "C", ru: "Риск; срезанное переносится назад", en: "At risk; what is cut off is carried back" },
      { k: "D", ru: "Пассивная деятельность; срезанное становится капитальным убытком", en: "Passive activity; what is cut off becomes a capital loss" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Это четвёртый и последний фильтр, и срезанное не пропадает, а меняет форму.", en: "Correct. It is the fourth and last filter, and what it cuts off is not lost but changes form." },
      B: { ru: "Базис — первый фильтр, и срезанное им ждёт, а не пропадает.", en: "Basis is the first filter, and what it cuts off waits rather than being lost." },
      C: { ru: "Риск — второй фильтр, переноса назад там нет.", en: "At risk is the second filter, and there is no carryback there." },
      D: { ru: "Пассивность — третий фильтр, и характер убытка она не меняет.", en: "Passivity is the third filter, and it does not change the character of the loss." }
    }
  },
  {
    sec: "s103",
    ru: "Партнёрство получило $6 000 процентов по муниципальным облигациям. Доля партнёра 50%. Что с его базисом?",
    en: "A partnership received $6,000 of municipal bond interest. The partner's interest is 50%. What happens to their basis?",
    opts: [
      { k: "A", ru: "Растёт на $3 000", en: "It rises by $3,000" },
      { k: "B", ru: "Не меняется: доход необлагаемый", en: "It is unchanged: the income is exempt" },
      { k: "C", ru: "Растёт на $6 000", en: "It rises by $6,000" },
      { k: "D", ru: "Падает на $3 000", en: "It falls by $3,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Необлагаемый доход базис повышает: партнёрство на эти деньги действительно богаче, и партнёр должен иметь возможность вынести их без налога.", en: "Correct. Tax-exempt income raises the basis: by that money the partnership really is richer, and the partner must be able to take it out tax-free." },
      B: { ru: "Базис меряет вложенное, а не налог, поэтому необлагаемый доход в него входит.", en: "Basis measures what has been put in, not tax, so exempt income enters it." },
      C: { ru: "Партнёру идёт его доля, а не вся сумма.", en: "The partner takes their share, not the whole amount." },
      D: { ru: "Доход базис повышает, а не понижает.", en: "Income raises basis, it does not lower it." }
    }
  },
  {
    sec: "s103",
    ru: "Реагируют ли счета капитала партнёров на изменение долгов партнёрства?",
    en: "Do the partners' capital accounts respond to changes in the partnership's liabilities?",
    opts: [
      { k: "A", ru: "Нет; а базис доли — реагирует", en: "No; the basis of the interest does" },
      { k: "B", ru: "Да, так же как базис", en: "Yes, just as the basis does" },
      { k: "C", ru: "Да, но только на долги с личной ответственностью", en: "Yes, but only to recourse debt" },
      { k: "D", ru: "Нет, и базис тоже не реагирует", en: "No, and neither does the basis" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Ещё одно место, где две величины расходятся, и его любят проверять.", en: "Correct. One more place where the two figures part company, and a favourite to test." },
      B: { ru: "Счёт капитала — про экономику доли, и долги партнёрства его не двигают.", en: "The capital account is about the economics of the interest, and the partnership's debts do not move it." },
      C: { ru: "Ни на те, ни на другие.", en: "Neither kind." },
      D: { ru: "Базис реагирует обязательно: это ключевая особенность партнёрского базиса.", en: "The basis certainly does: it is the key feature of partnership basis." }
    }
  },
  {
    sec: "s103",
    ru: "Что входит в сумму, которой партнёр рискует, из долгов партнёрства?",
    en: "Which of the partnership's liabilities enter the amount the partner has at risk?",
    opts: [
      { k: "A", ru: "Только те, по которым партнёр отвечает лично", en: "Only those for which the partner is personally liable" },
      { k: "B", ru: "Все долги партнёрства по его доле", en: "All the partnership's debts, by their share" },
      { k: "C", ru: "Только долги без личной ответственности", en: "Only nonrecourse debts" },
      { k: "D", ru: "Никакие долги в сумму риска не входят", en: "No debts enter the amount at risk" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Риск меряется тем, придётся ли партнёру платить из своего кармана.", en: "Correct. Risk is measured by whether the partner will have to pay out of their own pocket." },
      B: { ru: "Все долги идут в базис, а не в сумму риска.", en: "All the debts go into basis, not into the amount at risk." },
      C: { ru: "Именно они и не входят: личного риска по ним нет.", en: "Those are precisely the ones that do not: there is no personal risk on them." },
      D: { ru: "Долги с личной ответственностью входят.", en: "Recourse debts do enter." }
    }
  },
  {
    sec: "s104",
    ru: "Партнёр получил из партнёрства $20 000 деньгами. Базис его доли до распределения — $35 000. Что он показывает?",
    en: "A partner received $20,000 in cash from the partnership. The basis of the interest before the distribution was $35,000. What do they report?",
    opts: [
      { k: "A", ru: "Ничего; базис становится $15 000", en: "Nothing; the basis becomes $15,000" },
      { k: "B", ru: "$20 000 обычного дохода", en: "$20,000 of ordinary income" },
      { k: "C", ru: "$20 000 капитальной прибыли", en: "$20,000 of capital gain" },
      { k: "D", ru: "$15 000 капитальной прибыли", en: "$15,000 of capital gain" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Распределение налогом не облагается: налог с этой прибыли взят, когда она была заработана. Базис просто уменьшается.", en: "Correct. A distribution is not taxed: the tax on that profit was taken when it was earned. The basis simply comes down." },
      B: { ru: "Обычным доходом распределение денег не бывает никогда.", en: "A distribution of money is never ordinary income." },
      C: { ru: "Прибыль возникает только сверх базиса, а здесь базиса хватает.", en: "Gain arises only above basis, and here the basis is enough." },
      D: { ru: "$15 000 — это остаток базиса, а не прибыль.", en: "$15,000 is the remaining basis, not a gain." }
    }
  },
  {
    sec: "s104",
    ru: "Партнёр получил $30 000 деньгами при базисе доли $18 000. Что он показывает?",
    en: "A partner received $30,000 in cash with a basis of $18,000. What do they report?",
    opts: [
      { k: "A", ru: "$12 000 капитальной прибыли", en: "$12,000 of capital gain" },
      { k: "B", ru: "$12 000 обычного дохода", en: "$12,000 of ordinary income" },
      { k: "C", ru: "$30 000 капитальной прибыли", en: "$30,000 of capital gain" },
      { k: "D", ru: "Ничего: распределения не облагаются", en: "Nothing: distributions are not taxed" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Прибыль возникает только сверх базиса, и она капитальная: 30 000 − 18 000.", en: "Correct. Gain arises only above the basis, and it is capital: 30,000 − 18,000." },
      B: { ru: "Прибыль от распределения денег капитальная, а не обычная.", en: "Gain on a distribution of money is capital, not ordinary." },
      C: { ru: "Базис вычитается: облагается только превышение.", en: "The basis is subtracted: only the excess is taxed." },
      D: { ru: "Общее правило именно такое, но здесь распределение превысило базис.", en: "That is the general rule, but here the distribution exceeded the basis." }
    }
  },
  {
    sec: "s104",
    ru: "Может ли партнёр признать убыток при текущем распределении?",
    en: "May a partner recognise a loss on a current distribution?",
    opts: [
      { k: "A", ru: "Нет, никогда", en: "No, never" },
      { k: "B", ru: "Да, если базис доли больше полученного", en: "Yes, if the basis exceeds what was received" },
      { k: "C", ru: "Да, если получены только деньги", en: "Yes, if only money was received" },
      { k: "D", ru: "Да, но только капитальный", en: "Yes, but only a capital loss" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Убыток при текущем распределении не признаётся ни при каких условиях; он возможен только при ликвидационном, о чём модуль 11.", en: "Correct. Loss is never recognised on a current distribution; it is possible only on a liquidating one, of which module 11 speaks." },
      B: { ru: "Остаток базиса просто остаётся в доле, убытком он не становится.", en: "The remaining basis simply stays in the interest; it does not become a loss." },
      C: { ru: "Вид полученного здесь ничего не меняет.", en: "What was received changes nothing here." },
      D: { ru: "Никакого убытка не признаётся вовсе.", en: "No loss is recognised at all." }
    }
  },
  {
    sec: "s104",
    ru: "Партнёрство погасило часть займа, и доля партнёра в долгах упала на $15 000. Денег ему не выдавали. Как это квалифицируется?",
    en: "A partnership paid down part of a loan and the partner's share of the liabilities fell by $15,000. No money was paid to them. How is that treated?",
    opts: [
      { k: "A", ru: "Как распределение денег на $15 000", en: "As a $15,000 distribution of money" },
      { k: "B", ru: "Никак: денег партнёр не получал", en: "Not at all: the partner received no money" },
      { k: "C", ru: "Как вклад партнёра на $15 000", en: "As a $15,000 contribution by the partner" },
      { k: "D", ru: "Как списание долга с обычным доходом", en: "As cancellation of debt with ordinary income" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Уменьшение доли в долгах приравнено к полученным деньгам — и у партнёра с низким базисом способно создать налогооблагаемую прибыль.", en: "Correct. A fall in the share of liabilities is treated as money received — and for a partner with a low basis it can create taxable gain." },
      B: { ru: "В том и неожиданность: денег нет, а распределение есть.", en: "That is the surprise: no money, and yet a distribution." },
      C: { ru: "Вкладом считается рост доли в долгах, а не её падение.", en: "A contribution is an increase in the share of liabilities, not a fall." },
      D: { ru: "Долг погашен, а не списан: списание — другой институт.", en: "The debt was paid, not cancelled: cancellation is a different matter." }
    }
  },
  {
    sec: "s104",
    ru: "Базис доли $9 000. Партнёрство погасило долги, и доля партнёра в них упала на $14 000. Что он показывает?",
    en: "The basis is $9,000. The partnership paid down debt and the partner's share fell by $14,000. What do they report?",
    opts: [
      { k: "A", ru: "$5 000 капитальной прибыли", en: "$5,000 of capital gain" },
      { k: "B", ru: "Ничего: денег не было", en: "Nothing: there was no money" },
      { k: "C", ru: "$14 000 капитальной прибыли", en: "$14,000 of capital gain" },
      { k: "D", ru: "$5 000 обычного дохода", en: "$5,000 of ordinary income" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Базиса хватило на $9 000, превышение облагается: 14 000 − 9 000. Прибыль капитальная.", en: "Correct. The basis covered $9,000 and the excess is taxed: 14,000 − 9,000. The gain is capital." },
      B: { ru: "Отсутствие денег от налога не спасает: закон считает, что партнёр их получил.", en: "The absence of money is no escape: the law treats the partner as having received it." },
      C: { ru: "Базис вычитается.", en: "The basis is subtracted." },
      D: { ru: "Прибыль от распределения денег капитальная.", en: "Gain on a distribution of money is capital." }
    }
  },
  {
    sec: "s104",
    ru: "Партнёр получил имущество. Каким будет его базис в этом имуществе?",
    en: "A partner received property. What will their basis in it be?",
    opts: [
      { k: "A", ru: "Базис партнёрства, но не больше базиса доли за вычетом полученных денег", en: "The partnership's basis, but no more than the basis of the interest less any money received" },
      { k: "B", ru: "Рыночная стоимость имущества", en: "The market value of the property" },
      { k: "C", ru: "Базис партнёрства без всяких ограничений", en: "The partnership's basis, with no limit" },
      { k: "D", ru: "Ноль", en: "Nil" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Нельзя вынести из партнёрства больше базиса, чем в нём было у самого партнёра.", en: "Correct. No more basis may be carried out of the partnership than the partner had in it." },
      B: { ru: "Рыночная стоимость базисом не становится.", en: "Market value does not become the basis." },
      C: { ru: "Ограничение базисом доли есть, и оно ключевое.", en: "The limit by the basis of the interest exists, and it is the key one." },
      D: { ru: "Нулевой базис возник бы только при нулевом базисе доли.", en: "A nil basis would follow only from a nil basis in the interest." }
    }
  },
  {
    sec: "s104",
    ru: "Базиса доли не хватает на всё полученное имущество. В каком порядке он распределяется?",
    en: "The basis of the interest does not stretch to all the property received. In what order is it allocated?",
    opts: [
      { k: "A", ru: "Сначала дебиторке и запасам, потом прочему имуществу", en: "First to receivables and inventory, then to other property" },
      { k: "B", ru: "Пропорционально рыночной стоимости всего полученного", en: "In proportion to the market value of everything received" },
      { k: "C", ru: "Сначала прочему имуществу, потом дебиторке и запасам", en: "First to other property, then to receivables and inventory" },
      { k: "D", ru: "Поровну между предметами", en: "Equally among the items" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Сначала горячим активам — в пределах базиса партнёрства в них, — и только потом остальному.", en: "Correct. First to the hot assets, up to the partnership's basis in them, and only then to the rest." },
      B: { ru: "Рыночная стоимость в этом распределении не участвует.", en: "Market value plays no part in this allocation." },
      C: { ru: "Порядок обратный.", en: "The order is the reverse." },
      D: { ru: "Поровну не делится.", en: "It is not divided equally." }
    }
  },
  {
    sec: "s104",
    ru: "Какие запасы партнёрства считаются существенно подорожавшими?",
    en: "When is a partnership's inventory substantially appreciated?",
    opts: [
      { k: "A", ru: "Те, чья рыночная стоимость больше 120% базиса партнёрства в них", en: "When its market value exceeds 120% of the partnership's basis in it" },
      { k: "B", ru: "Те, чья рыночная стоимость больше базиса", en: "When its market value exceeds its basis" },
      { k: "C", ru: "Те, чья рыночная стоимость больше 150% базиса", en: "When its market value exceeds 150% of basis" },
      { k: "D", ru: "Те, что пролежали больше года", en: "When it has been held more than a year" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. И запасы, купленные специально ради того, чтобы сбить это отношение ниже порога, в расчёт не берутся.", en: "Correct. And inventory acquired precisely to bring the ratio below the threshold is left out of the reckoning." },
      B: { ru: "Просто удорожания мало: нужен порог в 120%.", en: "Mere appreciation is not enough: the 120% threshold is required." },
      C: { ru: "Порог другой.", en: "The threshold is a different one." },
      D: { ru: "Срок хранения здесь ни при чём.", en: "How long it has been held is irrelevant here." }
    }
  },
  {
    sec: "s104",
    ru: "Что даёт несоразмерное распределение горячих активов?",
    en: "What does a disproportionate distribution of hot assets give?",
    opts: [
      { k: "A", ru: "Обычный доход", en: "Ordinary income" },
      { k: "B", ru: "Капитальную прибыль", en: "Capital gain" },
      { k: "C", ru: "Ничего: распределения не облагаются", en: "Nothing: distributions are not taxed" },
      { k: "D", ru: "Прибыль по §1231", en: "Section 1231 gain" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Считается, что партнёр обменял свою долю в горячем на что-то другое, а горячие активы при продаже дают обычный доход.", en: "Correct. The partner is treated as having exchanged their share of the hot for something else, and hot assets give ordinary income on sale." },
      B: { ru: "Правило о горячих активах для того и существует, чтобы обычный доход не превратился в капитальный.", en: "The hot asset rule exists precisely to stop ordinary income turning into capital gain." },
      C: { ru: "Это исключение из общего правила безналоговости.", en: "This is an exception to the general rule of non-taxation." },
      D: { ru: "§1231 здесь ни при чём.", en: "Section 1231 is irrelevant here." }
    }
  },
  {
    sec: "s104",
    ru: "Партнёр получил имущество, которым партнёрство владело четыре года. Каков его период владения?",
    en: "A partner received property the partnership had held for four years. What is their holding period?",
    opts: [
      { k: "A", ru: "Включает четыре года партнёрства", en: "It includes the partnership's four years" },
      { k: "B", ru: "Начинается со дня распределения", en: "It begins on the day of the distribution" },
      { k: "C", ru: "Начинается со следующего дня", en: "It begins the next day" },
      { k: "D", ru: "Равен периоду владения долей", en: "It equals the holding period of the interest" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Период владения переходит от партнёрства к партнёру.", en: "Correct. The holding period carries over from the partnership to the partner." },
      B: { ru: "Заново период не начинается.", en: "The period does not begin afresh." },
      C: { ru: "Со следующего дня — правило для доли за услуги, а не для распределённого имущества.", en: "The next day is the rule for an interest received for services, not for distributed property." },
      D: { ru: "Период владения долей и период владения имуществом — разные вещи.", en: "The holding period of the interest and of the property are different things." }
    }
  },
  {
    sec: "s105",
    ru: "Партнёр водит грузовик партнёрства и ведёт его книги — обычные дела партнёра. Как это оплачивается для налога?",
    en: "A partner drives the partnership's van and keeps its books — the customary work of a partner. How is that treated for tax?",
    opts: [
      { k: "A", ru: "Это распределяемая доля, а не компенсация; стоимость услуг партнёрство не вычитает", en: "It is a distributive share, not compensation; the partnership does not deduct the value of the services" },
      { k: "B", ru: "Это заработная плата с удержанием налога", en: "It is a wage with tax withheld" },
      { k: "C", ru: "Это гарантированная выплата", en: "It is a guaranteed payment" },
      { k: "D", ru: "Партнёрство вычитает рыночную стоимость услуг", en: "The partnership deducts the market value of the services" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Наградой за обычные партнёрские дела служит доля в прибыли, а не плата.", en: "Correct. The reward for a partner's customary work is a share of the profits, not a payment." },
      B: { ru: "Партнёр работником своего партнёрства не бывает.", en: "A partner is never an employee of their own partnership." },
      C: { ru: "Гарантированная выплата — это определённая сумма, не зависящая от дохода; здесь её нет.", en: "A guaranteed payment is a fixed amount independent of income; there is none here." },
      D: { ru: "Стоимость таких услуг партнёрство не вычитает вовсе.", en: "The partnership does not deduct the value of such services at all." }
    }
  },
  {
    sec: "s105",
    ru: "Что делает выплату партнёру гарантированной?",
    en: "What makes a payment to a partner a guaranteed payment?",
    opts: [
      { k: "A", ru: "Она определена без учёта дохода партнёрства", en: "It is fixed without regard to the partnership's income" },
      { k: "B", ru: "Она выплачена деньгами", en: "It was paid in money" },
      { k: "C", ru: "Она предусмотрена партнёрским соглашением", en: "It is provided for in the partnership agreement" },
      { k: "D", ru: "Она превышает долю партнёра в прибыли", en: "It exceeds the partner's share of the profits" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Всё остальное вытекает отсюда: «сорок тысяч в год» — гарантированная выплата, «десять процентов прибыли» — нет.", en: "Correct. Everything else follows: “forty thousand a year” is one; “ten per cent of the profits” is not." },
      B: { ru: "Форма расчёта значения не имеет.", en: "The form of payment is immaterial." },
      C: { ru: "Соглашение предусматривает и распределяемые доли.", en: "The agreement provides for distributive shares as well." },
      D: { ru: "Превышение важно при гарантированном минимуме, но определение не в этом.", en: "The excess matters with a guaranteed minimum, but that is not the definition." }
    }
  },
  {
    sec: "s105",
    ru: "Партнёру полагается 25% дохода, но не меньше $20 000. Доход партнёрства — $60 000. Какова гарантированная выплата?",
    en: "A partner is to receive 25% of the income but not less than $20,000. The partnership's income is $60,000. What is the guaranteed payment?",
    opts: [
      { k: "A", ru: "$5 000", en: "$5,000" },
      { k: "B", ru: "$20 000", en: "$20,000" },
      { k: "C", ru: "$15 000", en: "$15,000" },
      { k: "D", ru: "Ноль", en: "Nil" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Доля без учёта гарантии — 25% × 60 000 = $15 000; гарантированной выплатой считается только превышение: 20 000 − 15 000.", en: "Correct. The share disregarding the guarantee is 25% × 60,000 = $15,000; only the excess is the guaranteed payment: 20,000 − 15,000." },
      B: { ru: "Взята вся гарантия, а не превышение. Самая частая ошибка темы.", en: "The whole guarantee instead of the excess. The commonest error in the subject." },
      C: { ru: "$15 000 — это доля, а не гарантированная выплата.", en: "$15,000 is the share, not the guaranteed payment." },
      D: { ru: "Ноль был бы, если бы доля превысила гарантию; здесь наоборот.", en: "Nil would follow if the share exceeded the guarantee; here it is the other way." }
    }
  },
  {
    sec: "s105",
    ru: "Партнёру полагается 25% дохода, но не меньше $20 000. Доход партнёрства — $100 000. Какова гарантированная выплата?",
    en: "A partner is to receive 25% of the income but not less than $20,000. The partnership's income is $100,000. What is the guaranteed payment?",
    opts: [
      { k: "A", ru: "Ноль: доля больше гарантии", en: "Nil: the share exceeds the guarantee" },
      { k: "B", ru: "$20 000", en: "$20,000" },
      { k: "C", ru: "$5 000", en: "$5,000" },
      { k: "D", ru: "$25 000", en: "$25,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. 25% × 100 000 = $25 000 больше гарантии в $20 000, значит, гарантия не сработала и вычитать партнёрству нечего.", en: "Correct. 25% × 100,000 = $25,000 exceeds the $20,000 guarantee, so the guarantee did not bite and the partnership has nothing to deduct." },
      B: { ru: "Гарантия не превысила долю, и выплаты не возникает.", en: "The guarantee did not exceed the share, so no payment arises." },
      C: { ru: "Превышение здесь у доли над гарантией, а не наоборот.", en: "Here it is the share that exceeds the guarantee, not the reverse." },
      D: { ru: "$25 000 — это распределяемая доля партнёра целиком.", en: "$25,000 is the partner's whole distributive share." }
    }
  },
  {
    sec: "s105",
    ru: "Эрике полагается $10 000 в год независимо от дохода партнёрства и сверх того 10% дохода. Обычный доход партнёрства после вычета её выплаты — $50 000. Что она показывает?",
    en: "Erica is entitled to $10,000 a year regardless of income, plus 10% of the income. The partnership's ordinary income after deducting her payment is $50,000. What does she report?",
    opts: [
      { k: "A", ru: "$15 000", en: "$15,000" },
      { k: "B", ru: "$10 000", en: "$10,000" },
      { k: "C", ru: "$16 000", en: "$16,000" },
      { k: "D", ru: "$5 000", en: "$5,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. $10 000 гарантированной выплаты плюс 10% × 50 000 = $5 000 доли. Выплата здесь фиксирована и идёт сверх доли, а не поглощает её.", en: "Correct. $10,000 of guaranteed payment plus 10% × 50,000 = $5,000 of share. The payment here is fixed and comes on top of the share rather than absorbing it." },
      B: { ru: "Доля забыта.", en: "The share was forgotten." },
      C: { ru: "10% взяты от дохода до вычета выплаты; в условии дан доход уже после вычета.", en: "10% taken on the income before the payment was deducted; the facts give the income after." },
      D: { ru: "Гарантированная выплата не учтена.", en: "The guaranteed payment was left out." }
    }
  },
  {
    sec: "s105",
    ru: "Как гарантированная выплата облагается у получившего её партнёра?",
    en: "How is a guaranteed payment taxed in the receiving partner's hands?",
    opts: [
      { k: "A", ru: "Обычный доход и доход от самозанятости; налог у источника не удерживается", en: "Ordinary income and self-employment income; no tax is withheld" },
      { k: "B", ru: "Заработная плата с удержанием налога", en: "A wage with tax withheld" },
      { k: "C", ru: "Капитальная прибыль", en: "Capital gain" },
      { k: "D", ru: "Не облагается: это распределение", en: "Not taxed: it is a distribution" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Партнёр работником своего партнёрства не бывает, поэтому удержания нет, а налог на самозанятость есть.", en: "Correct. A partner is never an employee of their own partnership, so there is no withholding and there is self-employment tax." },
      B: { ru: "Заработной платой это не является именно потому, что партнёр не работник.", en: "It is not a wage precisely because a partner is not an employee." },
      C: { ru: "Это плата за услуги или за капитал, значит, обычный доход.", en: "It is pay for services or for capital, and so ordinary income." },
      D: { ru: "Распределением гарантированная выплата не является.", en: "A guaranteed payment is not a distribution." }
    }
  },
  {
    sec: "s105",
    ru: "Гарантированная выплата превысила обычный доход партнёрства. Что происходит с возникшим убытком?",
    en: "A guaranteed payment exceeded the partnership's ordinary income. What happens to the resulting loss?",
    opts: [
      { k: "A", ru: "Делится между всеми партнёрами, включая получателя выплаты", en: "It is shared among all the partners, the recipient included" },
      { k: "B", ru: "Делится между всеми, кроме получателя", en: "It is shared among all except the recipient" },
      { k: "C", ru: "Целиком относится на получателя", en: "It falls entirely on the recipient" },
      { k: "D", ru: "Не признаётся вовсе", en: "It is not recognised at all" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Убыток — обычный партнёрский, и распределяется он по общим правилам, получателя не исключая.", en: "Correct. The loss is an ordinary partnership loss and is allocated by the usual rules, without excluding the recipient." },
      B: { ru: "Исключения для получателя правило не делает.", en: "The rule makes no exception for the recipient." },
      C: { ru: "На одного получателя убыток не относится.", en: "The loss does not fall on the recipient alone." },
      D: { ru: "Признаётся: выплата вычитается партнёрством как обычный расход.", en: "It is recognised: the payment is deducted by the partnership as an ordinary expense." }
    }
  },
  {
    sec: "s105",
    ru: "Партнёрство выплатило партнёру гарантированную выплату за организацию партнёрства. Как она учитывается?",
    en: "A partnership made a guaranteed payment to a partner for organising the partnership. How is it treated?",
    opts: [
      { k: "A", ru: "Как капитальный расход, а не текущий вычет", en: "As a capital expenditure, not a current deduction" },
      { k: "B", ru: "Как обычный текущий вычет", en: "As an ordinary current deduction" },
      { k: "C", ru: "Не вычитается вовсе и не капитализируется", en: "Neither deducted nor capitalised" },
      { k: "D", ru: "Вычитается наполовину", en: "Deducted by half" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Выплаты за создание партнёрства и за размещение долей — капитальные расходы; часть организационных партнёрство вправе вычесть и амортизировать по особому выбору.", en: "Correct. Payments for organising the partnership and for syndicating interests are capital expenditures; a portion of the organisational ones may be deducted and amortised by election." },
      B: { ru: "Текущим вычетом такие выплаты не бывают.", en: "Such payments are never a current deduction." },
      C: { ru: "Организационные расходы капитализируются, а расходы на размещение долей не вычитаются и не амортизируются.", en: "Organisational costs are capitalised; syndication costs are neither deducted nor amortised." },
      D: { ru: "Половины в этом правиле нет.", en: "There is no halving in this rule." }
    }
  },
  {
    sec: "s105",
    ru: "Партнёр дал партнёрству настоящий заём под проценты. Как облагаются проценты?",
    en: "A partner made a genuine interest-bearing loan to the partnership. How is the interest taxed?",
    opts: [
      { k: "A", ru: "Доход партнёру, вычет партнёрству — как между чужими", en: "Income to the partner, a deduction to the partnership — as between strangers" },
      { k: "B", ru: "Гарантированная выплата", en: "A guaranteed payment" },
      { k: "C", ru: "Распределение прибыли", en: "A distribution of profit" },
      { k: "D", ru: "Не облагается", en: "Not taxed" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Дав настоящий заём, партнёр действует как посторонний, и сделка признаётся как между чужими.", en: "Correct. In making a genuine loan the partner acts as an outsider, and the transaction is recognised as between strangers." },
      B: { ru: "Гарантированная выплата — это плата за услуги или за пользование капиталом партнёра как партнёра, а не проценты по займу.", en: "A guaranteed payment is for services or for the use of a partner's capital as a partner, not interest on a loan." },
      C: { ru: "Распределением проценты по займу не являются.", en: "Interest on a loan is not a distribution." },
      D: { ru: "Проценты — обычный доход получателя.", en: "Interest is ordinary income of the recipient." }
    }
  },
  {
    sec: "s105",
    ru: "Партнёр владеет 70% и продаёт партнёрству имущество с убытком. Что с убытком?",
    en: "A partner owning 70% sells property to the partnership at a loss. What happens to the loss?",
    opts: [
      { k: "A", ru: "Не признаётся; при последующей продаже покупатель уменьшит на него свою прибыль, но только в её пределах", en: "It is not recognised; on a later sale the buyer reduces their gain by it, but only up to that gain" },
      { k: "B", ru: "Признаётся полностью", en: "It is recognised in full" },
      { k: "C", ru: "Не признаётся и пропадает навсегда", en: "It is not recognised and is lost for ever" },
      { k: "D", ru: "Признаётся наполовину", en: "It is recognised by half" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Владение более 50% включает правила для связанных лиц: убыток откладывается и оживает при последующей продаже.", en: "Correct. Ownership above 50% brings in the related party rules: the loss is deferred and revives on a later sale." },
      B: { ru: "При владении более половины убыток не признаётся.", en: "At ownership above a half the loss is not recognised." },
      C: { ru: "Навсегда он не пропадает: покупатель уменьшит им свою будущую прибыль.", en: "It is not lost for ever: the buyer will reduce a future gain by it." },
      D: { ru: "Половины в правиле нет.", en: "There is no halving in the rule." }
    }
  },
  {
    sec: "s105",
    ru: "Партнёр с долей 60% продал партнёрству капитальный актив с прибылью $8 000. Партнёрство будет его амортизировать. Какой характер у прибыли?",
    en: "A partner with a 60% interest sold the partnership a capital asset at an $8,000 gain. The partnership will depreciate it. What is the character of the gain?",
    opts: [
      { k: "A", ru: "Обычный доход", en: "Ordinary income" },
      { k: "B", ru: "Капитальная прибыль", en: "Capital gain" },
      { k: "C", ru: "Прибыль по §1231", en: "Section 1231 gain" },
      { k: "D", ru: "Не облагается", en: "Not taxed" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. При владении более 50% прибыль становится обычной, если у покупателя имущество не капитальный актив, — а амортизируемое имущество им не является.", en: "Correct. At ownership above 50% the gain becomes ordinary if the property is not a capital asset in the buyer's hands — and depreciable property is not." },
      B: { ru: "Капитальной прибыль была бы, если бы партнёрство держало актив как капитальный.", en: "The gain would be capital if the partnership held the asset as a capital one." },
      C: { ru: "§1231 к этому правилу отношения не имеет.", en: "Section 1231 has nothing to do with this rule." },
      D: { ru: "Прибыль облагается; вопрос только в её характере.", en: "The gain is taxed; the only question is its character." }
    }
  },
  {
    sec: "s105",
    ru: "Партнёрство на методе начисления должно партнёру с долей 60% вознаграждение, которое тот ещё не получил. Когда партнёрство вычтет расход?",
    en: "An accrual-method partnership owes a 60% partner a fee they have not yet received. When does the partnership deduct it?",
    opts: [
      { k: "A", ru: "Не раньше, чем партнёр включит его в свой доход", en: "No sooner than the partner takes it into income" },
      { k: "B", ru: "В год начисления, как любой расход по методу начисления", en: "In the year of accrual, like any accrual-method expense" },
      { k: "C", ru: "Никогда: расходы связанным лицам не вычитаются", en: "Never: expenses to related persons are not deductible" },
      { k: "D", ru: "В год, когда партнёрство закроет свой налоговый год", en: "In the year the partnership closes its tax year" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. При владении более 50% вычет ждёт дохода получателя — даже у партнёрства на методе начисления.", en: "Correct. At ownership above 50% the deduction waits for the payee's income — even for an accrual-method partnership." },
      B: { ru: "Правило для связанных лиц как раз отменяет обычный порядок начисления.", en: "The related party rule is precisely what overrides the usual accrual timing." },
      C: { ru: "Вычет не отменяется, а откладывается.", en: "The deduction is deferred, not denied." },
      D: { ru: "Момент закрытия года партнёрства решает не это.", en: "The closing of the partnership's year does not decide this." }
    }
  },
  {
    sec: "s105",
    ru: "По какому показателю меряется порог «более 50%» для правил о связанных лицах?",
    en: "By what measure is the “more than 50%” threshold for the related party rules taken?",
    opts: [
      { k: "A", ru: "По капиталу или по прибыли; те же правила действуют между двумя партнёрствами с общими владельцами", en: "By capital or by profits; the same rules apply between two partnerships with common owners" },
      { k: "B", ru: "Только по капиталу", en: "By capital only" },
      { k: "C", ru: "Только по прибыли", en: "By profits only" },
      { k: "D", ru: "По числу партнёров", en: "By the number of partners" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. И между двумя партнёрствами правила срабатывают, если более половины в каждом принадлежит одним и тем же лицам.", en: "Correct. And between two partnerships the rules bite where more than half of each belongs to the same persons." },
      B: { ru: "Прибыль тоже годится.", en: "Profits will do as well." },
      C: { ru: "Капитал тоже годится.", en: "Capital will do as well." },
      D: { ru: "Число партнёров к порогу отношения не имеет.", en: "The number of partners has nothing to do with the threshold." }
    }
  },
  {
    sec: "s105",
    ru: "Что изменилось с 4 июля 2025 года в норме о переквалификации услуг партнёра в сделку с посторонним?",
    en: "What changed on July 4, 2025 in the provision recharacterising a partner's services as a dealing with an outsider?",
    opts: [
      { k: "A", ru: "Она стала самоисполняющейся: слова «в порядке, установленном правилами» заменены на «если иное не установлено»", en: "It became self-executing: “under regulations prescribed” was replaced by “except as provided”" },
      { k: "B", ru: "Она отменена", en: "It was repealed" },
      { k: "C", ru: "Порог владения снижен до 25%", en: "The ownership threshold was cut to 25%" },
      { k: "D", ru: "Она распространена на корпорации", en: "It was extended to corporations" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Разница принципиальная: раньше без изданных правил норма почти не применялась, теперь работает сама — для услуг и передач после 4 июля 2025 года.", en: "Correct. The difference is fundamental: with no regulations issued the provision was all but unused, and now it works of itself — for services and transfers after July 4, 2025." },
      B: { ru: "Она не отменена, а усилена.", en: "It was not repealed but strengthened." },
      C: { ru: "Порогов владения эта норма не содержит вовсе.", en: "This provision contains no ownership threshold at all." },
      D: { ru: "Норма партнёрская и к корпорациям не относится.", en: "The provision is a partnership one and does not touch corporations." }
    }
  },
  {
    sec: "s105",
    ru: "Партнёр оказал партнёрству юридические услуги — он практикующий юрист, а партнёрство занимается перевозками. Как это учитывается?",
    en: "A partner rendered legal services to a partnership — they are a practising lawyer and the partnership is a haulage business. How is that treated?",
    opts: [
      { k: "A", ru: "Как сделка с посторонним: доход партнёру, обычный вычет партнёрству", en: "As a dealing with an outsider: income to the partner, an ordinary deduction to the partnership" },
      { k: "B", ru: "Как распределяемая доля", en: "As a distributive share" },
      { k: "C", ru: "Как вклад в капитал", en: "As a contribution to capital" },
      { k: "D", ru: "Никак: услуги партнёра не учитываются", en: "Not at all: a partner's services are disregarded" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Юридические услуги — не из тех, что партнёр перевозочного дела оказывает как партнёр, значит, он действует как посторонний.", en: "Correct. Legal services are not of a kind a partner in a haulage business renders as a partner, so they act as an outsider." },
      B: { ru: "Долей оплачиваются обычные партнёрские дела, а это не они.", en: "A share pays for a partner's customary work, and this is not that." },
      C: { ru: "Вклад в капитал даёт долю, а здесь речь о плате за услугу.", en: "A contribution to capital gives an interest; here the question is payment for a service." },
      D: { ru: "Учитываются, и вполне обычным образом.", en: "They are taken into account, and in quite the ordinary way." }
    }
  },
  {
    sec: "s105",
    ru: "Партнёрство платит партнёру проценты на его счёт капитала. Что это?",
    en: "A partnership pays a partner interest on their capital account. What is that?",
    opts: [
      { k: "A", ru: "Гарантированная выплата: это плата за пользование капиталом", en: "A guaranteed payment: it is payment for the use of capital" },
      { k: "B", ru: "Распределение прибыли", en: "A distribution of profit" },
      { k: "C", ru: "Проценты по займу", en: "Interest on a loan" },
      { k: "D", ru: "Возврат вклада", en: "A return of the contribution" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Гарантированной выплатой бывает плата не только за услуги, но и за пользование капиталом партнёра — в том числе в виде процентов или арендной платы за внесённое имущество.", en: "Correct. A guaranteed payment covers not only services but the use of a partner's capital — including in the form of interest, or rent for contributed property." },
      B: { ru: "Распределение зависит от дохода, а эта выплата — нет.", en: "A distribution depends on income; this payment does not." },
      C: { ru: "Займа нет: капитал внесён в качестве вклада, а не одолжен.", en: "There is no loan: the capital was contributed, not lent." },
      D: { ru: "Возврат вклада уменьшал бы счёт капитала, а проценты — нет.", en: "A return of the contribution would reduce the capital account; interest does not." }
    }
  }
];
