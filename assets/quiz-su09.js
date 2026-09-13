/* ===================================================================
   Вопросы тренажёра, модуль 09.

   Отдельный файл, а не блок внутри страницы: под file:// страница не
   может прочитать другой файл, поэтому единственный способ отдать
   данные двум страницам сразу — тег <script src>. Файл подключают и
   su09.html, и trainer.html.

   QUIZSECS — названия подразделов. На странице модуля они есть в
   заголовках, на странице тренажёра их нет. Карта порождается
   скриптом из тех же заголовков, а сборка отказывается собирать
   файл, если названия разошлись.
   =================================================================== */

window.QUIZZES  = window.QUIZZES  || {};
window.QUIZSECS = window.QUIZSECS || {};

window.QUIZSECS.su09 = {
  s91: { no: "9.1", ru: "Что считается партнёрством", en: "What counts as a partnership" },
  s92: { no: "9.2", ru: "Декларация и налоговый год", en: "The return and the tax year" },
  s93: { no: "9.3", ru: "Вклады имуществом и услугами", en: "Contributions of property and services" },
  s94: { no: "9.4", ru: "Базис доли партнёра", en: "Basis of a partner's interest" }
};

window.QUIZZES.su09 = [
  {
    sec: "s91",
    ru: "Что требуется, чтобы для целей федерального налога возникло партнёрство?",
    en: "What is required for a partnership to exist for federal tax purposes?",
    opts: [
      { k: "A", ru: "Двое и более ведут дело вместе и делят прибыль", en: "Two or more persons carry on a business together and divide the profits" },
      { k: "B", ru: "Письменное партнёрское соглашение", en: "A written partnership agreement" },
      { k: "C", ru: "Регистрация в органе штата", en: "Registration with a state authority" },
      { k: "D", ru: "Идентификационный номер работодателя", en: "An employer identification number" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Партнёрство — отношение, а не организация: оно возникает само собой из совместного ведения дела и раздела прибыли.", en: "Correct. A partnership is a relationship, not an organisation: it arises of itself from carrying on a business together and dividing the profits." },
      B: { ru: "Письменного соглашения закон не требует. Оно полезно, но партнёрство возникает и без него.", en: "The law requires no written agreement. It is useful, but a partnership arises without one." },
      C: { ru: "Регистрация не нужна: люди нередко узнают о своём партнёрстве от налогового инспектора.", en: "No registration is needed: people not infrequently learn of their partnership from a revenue agent." },
      D: { ru: "Номер понадобится для отчётности, но партнёрством делает не он, а совместное дело.", en: "The number will be needed for reporting, but it is the joint business that makes a partnership, not the number." }
    }
  },
  {
    sec: "s91",
    ru: "Кто из перечисленных не может быть партнёром в партнёрстве?",
    en: "Which of the following cannot be a partner in a partnership?",
    opts: [
      { k: "A", ru: "Никто: партнёром может быть и человек, и корпорация, и траст, и другое партнёрство", en: "None of them: an individual, a corporation, a trust and another partnership may all be partners" },
      { k: "B", ru: "Корпорация", en: "A corporation" },
      { k: "C", ru: "Наследственная масса", en: "An estate" },
      { k: "D", ru: "Другое партнёрство", en: "Another partnership" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Партнёром может быть любое лицо: физическое, корпорация, траст, наследственная масса, другое партнёрство.", en: "Correct. Any person may be a partner: an individual, a corporation, a trust, an estate, another partnership." },
      B: { ru: "Корпорация партнёром быть может — ограничения на состав участников есть у S-корпорации, а не у партнёрства.", en: "A corporation may be a partner — restrictions on who may be an owner belong to the S corporation, not to the partnership." },
      C: { ru: "Наследственная масса партнёром быть может.", en: "An estate may be a partner." },
      D: { ru: "Партнёрство в партнёрстве — обычное дело; такие структуры называют многоярусными.", en: "A partnership within a partnership is commonplace; such structures are called tiered." }
    }
  },
  {
    sec: "s91",
    ru: "Двое совместно владеют домом и сдают его внаём, никаких услуг жильцам не оказывая. Что это для целей налога?",
    en: "Two people jointly own a house and let it, providing no services to the tenants. What is it for tax purposes?",
    opts: [
      { k: "A", ru: "Не партнёрство: владение — не ведение дела", en: "Not a partnership: owning is not carrying on a business" },
      { k: "B", ru: "Партнёрство с момента покупки дома", en: "A partnership from the moment the house was bought" },
      { k: "C", ru: "Партнёрство, если доход превышает определённую сумму", en: "A partnership if the income exceeds a certain amount" },
      { k: "D", ru: "Корпорация по умолчанию", en: "A corporation by default" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Совместное владение сдаваемой недвижимостью партнёрством не является — пока совладельцы не начнут оказывать жильцам услуги: уборку, питание, бельё.", en: "Correct. Co-ownership of let property is not a partnership — until the co-owners begin providing services to the tenants: cleaning, meals, linen." },
      B: { ru: "Покупка и сдача сами по себе общего дела не образуют.", en: "Buying and letting do not by themselves make a common business." },
      C: { ru: "Никакого порога по доходу здесь нет: решает наличие услуг, а не сумма.", en: "There is no income threshold here: services decide it, not the amount." },
      D: { ru: "Корпорацией это не становится ни при каких условиях без выбора классификации.", en: "It does not become a corporation under any circumstances without an election of classification." }
    }
  },
  {
    sec: "s91",
    ru: "Трое врачей договорились совместно оплачивать аренду помещения и работу регистратора, но практикует каждый сам и деньги берёт себе. Партнёрство ли это?",
    en: "Three doctors agreed to share the rent of premises and the receptionist's pay, but each practises alone and keeps their own fees. Is that a partnership?",
    opts: [
      { k: "A", ru: "Нет: договорённость только о разделе расходов партнёрством не является", en: "No: an undertaking merely to share expenses is not a partnership" },
      { k: "B", ru: "Да: они ведут дело в одном помещении", en: "Yes: they carry on business in the same premises" },
      { k: "C", ru: "Да, если расходы превышают половину их дохода", en: "Yes, if the expenses exceed half their income" },
      { k: "D", ru: "Да, поскольку у них общий работник", en: "Yes, because they have an employee in common" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Нет общей прибыли — нечего делить. Раздел расходов общего дела не образует.", en: "Correct. With no common profit there is nothing to divide. Sharing expenses does not make a common business." },
      B: { ru: "Общее помещение общим делом не является: каждый ведёт свою практику.", en: "Shared premises are not a shared business: each carries on their own practice." },
      C: { ru: "Величина расходов ни при чём: решает, делится ли прибыль.", en: "The size of the expenses is irrelevant: what decides is whether profits are divided." },
      D: { ru: "Общий работник — тоже общий расход, а не общая прибыль.", en: "An employee in common is another shared expense, not a shared profit." }
    }
  },
  {
    sec: "s91",
    ru: "У отечественной компании с ограниченной ответственностью три участника, и форму 8832 она не подавала. Как она классифицируется?",
    en: "A domestic limited liability company has three members and has not filed Form 8832. How is it classified?",
    opts: [
      { k: "A", ru: "Партнёрство", en: "A partnership" },
      { k: "B", ru: "Корпорация C", en: "A C corporation" },
      { k: "C", ru: "Неучитываемое лицо", en: "A disregarded entity" },
      { k: "D", ru: "S-корпорация", en: "An S corporation" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. У компании с ограниченной ответственностью с двумя и более участниками режим партнёрства действует по умолчанию.", en: "Correct. A limited liability company with two or more members is a partnership by default." },
      B: { ru: "Корпорацией она стала бы только по выбору, поданному на форме 8832.", en: "It would become a corporation only by an election filed on Form 8832." },
      C: { ru: "Неучитываемым лицом бывает компания с одним участником. Здесь их трое.", en: "A disregarded entity is a one-member company. Here there are three members." },
      D: { ru: "S-корпорацией можно стать только после того, как лицо станет корпорацией, и отдельным выбором.", en: "One becomes an S corporation only after becoming a corporation, and by a separate election." }
    }
  },
  {
    sec: "s91",
    ru: "У отечественной компании с ограниченной ответственностью один участник, выборов он не делал. Как она классифицируется?",
    en: "A domestic limited liability company has one member and has made no election. How is it classified?",
    opts: [
      { k: "A", ru: "Неучитываемое лицо: всё идёт в декларацию владельца", en: "A disregarded entity: everything goes on the owner's return" },
      { k: "B", ru: "Партнёрство", en: "A partnership" },
      { k: "C", ru: "Корпорация C", en: "A C corporation" },
      { k: "D", ru: "Наследственная масса", en: "An estate" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Для налога такого лица как бы нет: доход и расходы показываются прямо у владельца.", en: "Correct. For tax the entity is treated as not existing: income and expenses go straight on the owner's return." },
      B: { ru: "Партнёрство из одного участника невозможно: нужно двое и больше.", en: "A one-member partnership is impossible: two or more are needed." },
      C: { ru: "Корпорацией она станет только по выбору на форме 8832.", en: "It becomes a corporation only by an election on Form 8832." },
      D: { ru: "Наследственная масса возникает после смерти лица и к классификации компании отношения не имеет.", en: "An estate arises on a person's death and has nothing to do with classifying a company." }
    }
  },
  {
    sec: "s91",
    ru: "Кому доступен выход из режима партнёрства по §761(a)?",
    en: "Who may elect out of partnership treatment under section 761(a)?",
    opts: [
      { k: "A", ru: "Объединению, не ведущему активной деятельности, — и только с согласия всех партнёров", en: "An organisation not actively conducting a business — and only with the agreement of all the partners" },
      { k: "B", ru: "Любому партнёрству по решению партнёров, владеющих более чем половиной", en: "Any partnership, by decision of the partners owning more than half" },
      { k: "C", ru: "Только партнёрству с числом партнёров меньше десяти", en: "Only a partnership with fewer than ten partners" },
      { k: "D", ru: "Только партнёрству, у которого нет обязательств", en: "Only a partnership with no liabilities" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Типичный случай — пул частных лиц, сложивших деньги для вложений. Согласие требуется от всех.", en: "Correct. The typical case is a pool of individuals who put money together for investment. All must agree." },
      B: { ru: "Большинства недостаточно: нужно единогласие, и нужно отсутствие активной деятельности.", en: "A majority is not enough: unanimity is required, and so is the absence of active business." },
      C: { ru: "Числа партнёров в условии нет.", en: "The number of partners is not among the conditions." },
      D: { ru: "Обязательства выходу не мешают; мешает активное ведение дела.", en: "Liabilities are no obstacle; actively carrying on a business is." }
    }
  },
  {
    sec: "s91",
    ru: "Инвестиционный пул вышел из режима партнёрства по §761(a). От чего этот выход его не освобождает?",
    en: "An investment pool has elected out of partnership treatment under section 761(a). What does the election not free it from?",
    opts: [
      { k: "A", ru: "Ни от предела убытка базисом доли, ни от требования делового основания для налогового года", en: "Neither from the limit of loss to the basis of the interest, nor from the business-purpose requirement for the tax year" },
      { k: "B", ru: "Только от подачи формы 1065", en: "Only from filing Form 1065" },
      { k: "C", ru: "Ни от чего: выход чисто формальный", en: "From nothing: the election is purely formal" },
      { k: "D", ru: "От обязанности выдавать приложения K-1, но от остального освобождает", en: "From furnishing Schedules K-1, but it frees them from everything else" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Эти два правила остаются, и на них строят вопрос: выход из режима не отменяет ни базисного предела, ни правил налогового года.", en: "Correct. Those two rules remain, and questions are built on it: electing out cancels neither the basis limit nor the tax-year rules." },
      B: { ru: "От отчётности выход действительно избавляет, но вопрос был о том, что остаётся.", en: "The election does relieve them of the reporting, but the question was what remains." },
      C: { ru: "Выход вполне содержателен: каждый партнёр считает свою долю сам.", en: "The election is far from formal: each partner figures their own share." },
      D: { ru: "K-1 при выходе не выдаются, но остальное как раз не отменяется.", en: "No K-1s are furnished after electing out, but the rest is precisely what is not cancelled." }
    }
  },
  {
    sec: "s91",
    ru: "Распределение по партнёрскому соглашению не имеет существенного экономического эффекта. Что происходит?",
    en: "An allocation under the partnership agreement lacks substantial economic effect. What happens?",
    opts: [
      { k: "A", ru: "Оно отбрасывается, и всё считается по долям участия партнёров в партнёрстве", en: "It is thrown out and everything is figured by the partners' interests in the partnership" },
      { k: "B", ru: "Оно остаётся в силе: соглашение партнёров выше закона", en: "It stands: the partners' agreement prevails over the law" },
      { k: "C", ru: "Партнёрство теряет право подавать форму 1065", en: "The partnership loses the right to file Form 1065" },
      { k: "D", ru: "Распределение облагается штрафом, но применяется", en: "The allocation is penalised but applied" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Свобода распределения велика, но у неё одно условие: за долей должна стоять реальная выгода или реальное бремя.", en: "Correct. The freedom to allocate is wide, but it has one condition: a real benefit or a real burden must stand behind the share." },
      B: { ru: "Соглашение действует лишь в пределах, которые допускает закон.", en: "The agreement operates only so far as the law allows." },
      C: { ru: "Обязанность подавать декларацию от этого не меняется.", en: "The duty to file is unaffected." },
      D: { ru: "Штрафа за это нет — распределение просто переписывается по долям участия.", en: "There is no penalty for it — the allocation is simply rewritten by the partners' interests." }
    }
  },
  {
    sec: "s91",
    ru: "Кто считается семьёй при проверке семейного партнёрства?",
    en: "Who counts as family in testing a family partnership?",
    opts: [
      { k: "A", ru: "Супруг, предки, прямые потомки и трасты в их пользу — братья и сёстры не входят", en: "A spouse, ancestors, lineal descendants and trusts for their benefit — brothers and sisters are excluded" },
      { k: "B", ru: "Супруг, братья, сёстры, предки и прямые потомки", en: "A spouse, brothers, sisters, ancestors and lineal descendants" },
      { k: "C", ru: "Любые родственники до четвёртой степени", en: "Any relatives to the fourth degree" },
      { k: "D", ru: "Только супруг и несовершеннолетние дети", en: "Only a spouse and minor children" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Перечень идёт по вертикали: правила семейного партнёрства направлены против перекидывания дохода вниз по поколениям.", en: "Correct. The list runs vertically: the family-partnership rules are aimed at shifting income down the generations." },
      B: { ru: "Это перечень для конструктивного владения долей. Там братья и сёстры есть, здесь их нет — на различии и строят вопрос.", en: "That is the list for constructive ownership of an interest. Brothers and sisters are there and are not here — the difference is what the question tests." },
      C: { ru: "Такой степени родства в этом правиле нет.", en: "No such degree of kinship appears in this rule." },
      D: { ru: "Возраст детей значения не имеет, и предки в перечне тоже есть.", en: "The children's age is irrelevant, and ancestors are on the list too." }
    }
  },
  {
    sec: "s91",
    ru: "Кто считается семьёй при конструктивном владении долей в партнёрстве?",
    en: "Who counts as family for constructive ownership of a partnership interest?",
    opts: [
      { k: "A", ru: "Супруг, братья и сёстры, дети, внуки и родители", en: "A spouse, brothers and sisters, children, grandchildren and parents" },
      { k: "B", ru: "Супруг, предки и прямые потомки; братья и сёстры не входят", en: "A spouse, ancestors and lineal descendants; brothers and sisters are excluded" },
      { k: "C", ru: "Только те родственники, которые сами являются партнёрами", en: "Only those relatives who are themselves partners" },
      { k: "D", ru: "Родственники не учитываются вовсе", en: "Relatives are not taken into account at all" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Здесь братья и сёстры есть: конструктивное владение — про сговор, а сговариваются и с братом.", en: "Correct. Brothers and sisters are included here: constructive ownership is about collusion, and one colludes with a brother as readily as with anyone." },
      B: { ru: "Это перечень семейного партнёрства. Два перечня различаются ровно одной строкой.", en: "That is the family-partnership list. The two lists differ by exactly one line." },
      C: { ru: "Смысл правила обратный: доля родственника считается принадлежащей и тому, кто партнёром не является.", en: "The rule works the other way: a relative's interest is treated as owned even by someone who is not a partner." },
      D: { ru: "Родственники учитываются — в этом и суть конструктивного владения.", en: "Relatives are taken into account — that is the whole point of constructive ownership." }
    }
  },
  {
    sec: "s91",
    ru: "Доля в партнёрстве принадлежит корпорации. Кому она считается принадлежащей при конструктивном владении?",
    en: "A partnership interest is owned by a corporation. Who is treated as owning it under the constructive ownership rules?",
    opts: [
      { k: "A", ru: "Акционерам корпорации — пропорционально их долям", en: "The corporation's shareholders — in proportion to their holdings" },
      { k: "B", ru: "Только корпорации: конструктивное владение через организации не работает", en: "The corporation alone: constructive ownership does not work through entities" },
      { k: "C", ru: "Крупнейшему акционеру целиком", en: "The largest shareholder, in full" },
      { k: "D", ru: "Директорам корпорации", en: "The corporation's directors" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Доля, принадлежащая корпорации, партнёрству, наследственной массе или трасту, считается принадлежащей пропорционально акционерам, партнёрам и выгодоприобретателям.", en: "Correct. An interest owned by a corporation, a partnership, an estate or a trust is treated as owned proportionately by its shareholders, partners and beneficiaries." },
      B: { ru: "Через организации оно как раз и работает — иначе правило обходили бы одной прослойкой.", en: "It works precisely through entities — otherwise the rule would be avoided by one layer." },
      C: { ru: "Распределение пропорциональное, а не целиком крупнейшему.", en: "The attribution is proportionate, not wholly to the largest holder." },
      D: { ru: "Директора владельцами не являются; считается по долям владения.", en: "Directors are not owners; the attribution follows ownership." }
    }
  },
  {
    sec: "s91",
    ru: "Отец подарил дочери долю в капитале партнёрства, где капитал — существенный источник дохода. Признаётся ли дочь партнёром?",
    en: "A father gave his daughter a capital interest in a partnership where capital is a material income-producing factor. Is she recognised as a partner?",
    opts: [
      { k: "A", ru: "Да, если доля действительно принадлежит ей и она действительно ею распоряжается", en: "Yes, if the interest really is hers and she really controls it" },
      { k: "B", ru: "Нет: дарёная доля партнёром не делает", en: "No: a gifted interest does not make one a partner" },
      { k: "C", ru: "Да, но только если она работает в партнёрстве", en: "Yes, but only if she works in the partnership" },
      { k: "D", ru: "Да, безусловно: достаточно факта дарения", en: "Yes, unconditionally: the fact of the gift suffices" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Способ приобретения безразличен — купила или получила в дар, — но владение и распоряжение должны быть настоящими.", en: "Correct. How the interest was acquired is immaterial — bought or given — but the ownership and the control must be real." },
      B: { ru: "Наоборот: закон прямо говорит, что вопрос решается без оглядки на то, получена ли доля в дар.", en: "On the contrary: the law says expressly that the question is settled without regard to whether the interest came by gift." },
      C: { ru: "Работа нужна там, где капитал существенным источником не является. Здесь он существенный.", en: "Work matters where capital is not a material factor. Here it is material." },
      D: { ru: "Безусловности нет: формальное дарение без настоящего владения и распоряжения не проходит.", en: "It is not unconditional: a formal gift without real ownership and control does not pass." }
    }
  },
  {
    sec: "s91",
    ru: "Отец подарил сыну $200 000; сын внёс их и получил 50%. Разумная цена услуг отца за год — $60 000, валовой доход партнёрства — $140 000. Какова наибольшая доля сына?",
    en: "A father gave his son $200,000; the son contributed it and took 50%. The reasonable value of the father's services for the year is $60,000 and the partnership's gross income is $140,000. What is the most the son may have?",
    opts: [
      { k: "A", ru: "$40 000", en: "$40,000" },
      { k: "B", ru: "$70 000", en: "$70,000" },
      { k: "C", ru: "$100 000", en: "$100,000" },
      { k: "D", ru: "$80 000", en: "$80,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Сначала отцу выделяется $60 000 за услуги, остаётся $80 000, и половина от остатка — $40 000.", en: "Correct. $60,000 goes to the father for services first, $80,000 remains, and half of that is $40,000." },
      B: { ru: "Половина валового дохода. Компенсация за услуги отца не выделена, а она выделяется первой.", en: "Half the gross income. The compensation for the father's services was not taken out, and it comes out first." },
      C: { ru: "Так вышло бы, если бы весь доход делился и сыну досталось больше половины.", en: "That is what dividing the whole income and giving the son more than half would produce." },
      D: { ru: "Это остаток после компенсации целиком, без деления пополам.", en: "That is the whole remainder after the compensation, without halving it." }
    }
  },
  {
    sec: "s91",
    ru: "Какое из условий квалифицированного совместного предприятия супругов забывают чаще всего?",
    en: "Which condition of a spouses' qualified joint venture is most often forgotten?",
    opts: [
      { k: "A", ru: "Дело не должно быть оформлено на юридическое лицо штата — ни на партнёрство, ни на компанию с ограниченной ответственностью", en: "The business must not be held in a state-law entity — neither a partnership nor a limited liability company" },
      { k: "B", ru: "Супруги должны подавать совместную декларацию", en: "The spouses must file a joint return" },
      { k: "C", ru: "Оба супруга должны материально участвовать", en: "Both spouses must materially participate" },
      { k: "D", ru: "Единственные участники — супруги", en: "The only members are the spouses" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Три первых условия помнят все, а четвёртое отсекает самый частый случай: дело, уже оформленное на компанию с ограниченной ответственностью.", en: "Correct. Everyone remembers the first three, and the fourth rules out the commonest case: a business already held in a limited liability company." },
      B: { ru: "Это условие помнят: оно прямо следует из слова «супруги».", en: "That one is remembered: it follows directly from the word “spouses”." },
      C: { ru: "Материальное участие обоих тоже условие, но его как раз держат в голове.", en: "Material participation by both is a condition too, but it is the one people do keep in mind." },
      D: { ru: "Это условие очевидно из самого названия.", en: "That condition is obvious from the name itself." }
    }
  },
  {
    sec: "s91",
    ru: "Супруги выбрали квалифицированное совместное предприятие. Какое последствие для них главное, помимо избавления от формы 1065?",
    en: "Spouses have elected a qualified joint venture. What is the chief consequence for them, beyond being rid of Form 1065?",
    opts: [
      { k: "A", ru: "У каждого появляется свой чистый заработок от самозанятости, а значит, свой стаж социального обеспечения", en: "Each acquires net earnings from self-employment of their own, and with them a social security record of their own" },
      { k: "B", ru: "Доход перестаёт облагаться налогом на самозанятость", en: "The income ceases to bear self-employment tax" },
      { k: "C", ru: "Убытки перестают ограничиваться базисом", en: "Losses cease to be limited by basis" },
      { k: "D", ru: "Каждый супруг подаёт отдельную декларацию", en: "Each spouse files a separate return" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Каждый считается единоличным предпринимателем, и доход делится по долям — отсюда собственный стаж у обоих.", en: "Correct. Each is treated as a sole proprietor and the income is divided by their interests — hence a record of their own for both." },
      B: { ru: "Налог на самозанятость остаётся: он лишь распределяется между двумя.", en: "The self-employment tax remains: it is merely split between the two." },
      C: { ru: "Базисный предел к этому выбору отношения не имеет.", en: "The basis limit has nothing to do with this election." },
      D: { ru: "Наоборот: условие выбора — совместная декларация.", en: "On the contrary: a joint return is a condition of the election." }
    }
  },
  {
    sec: "s92",
    ru: "Какое партнёрство вправе не подавать форму 1065?",
    en: "Which partnership need not file Form 1065?",
    opts: [
      { k: "A", ru: "То, у которого за год не было ни дохода, ни расходов, заявляемых вычетом или кредитом", en: "One that for the year had neither income nor expenses claimed as a deduction or a credit" },
      { k: "B", ru: "Любое, закончившее год с убытком", en: "Any that ended the year with a loss" },
      { k: "C", ru: "То, у которого меньше десяти партнёров", en: "One with fewer than ten partners" },
      { k: "D", ru: "То, которое не распределяло деньги партнёрам", en: "One that made no distributions to the partners" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Исключение узкое: не «не было прибыли», а не было вообще ничего — ни дохода, ни расходов.", en: "Correct. The exception is narrow: not “made no profit” but had nothing at all — neither income nor expenses." },
      B: { ru: "Убыток от подачи не освобождает: его как раз и надо показать партнёрам.", en: "A loss is no exemption: it is precisely what must be reported to the partners." },
      C: { ru: "Число партнёров на обязанность подавать не влияет — оно влияет на обязанность подавать электронно.", en: "The number of partners does not affect the duty to file — it affects the duty to file electronically." },
      D: { ru: "Распределения к обязанности подавать отношения не имеют.", en: "Distributions have nothing to do with the duty to file." }
    }
  },
  {
    sec: "s92",
    ru: "Когда подаётся форма 1065 партнёрством с календарным налоговым годом?",
    en: "When is Form 1065 due for a calendar-year partnership?",
    opts: [
      { k: "A", ru: "15 марта", en: "March 15" },
      { k: "B", ru: "15 апреля", en: "April 15" },
      { k: "C", ru: "31 января", en: "January 31" },
      { k: "D", ru: "30 июня", en: "June 30" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Срок — 15-е число третьего месяца после закрытия года, то есть на месяц раньше декларации физического лица. За 2025 год дата сдвигается на 16 марта 2026: 15 марта — воскресенье.", en: "Correct. The due date is the 15th day of the third month after the year ends — a month earlier than an individual's return. For 2025 the date moves to March 16, 2026: March 15 is a Sunday." },
      B: { ru: "15 апреля — срок декларации физического лица. Партнёрство отчитывается раньше, чтобы партнёры успели получить K-1.", en: "April 15 is the individual's due date. The partnership reports earlier so that the partners can get their K-1s in time." },
      C: { ru: "31 января — срок форм W-2 и большинства форм 1099, а не формы 1065.", en: "January 31 is the due date for Forms W-2 and most Forms 1099, not for Form 1065." },
      D: { ru: "Такого срока для формы 1065 нет.", en: "There is no such due date for Form 1065." }
    }
  },
  {
    sec: "s92",
    ru: "На сколько продлевается срок подачи формы 1065 и какой формой?",
    en: "By how long is the Form 1065 due date extended, and on what form?",
    opts: [
      { k: "A", ru: "На 6 месяцев, форма 7004", en: "By 6 months, on Form 7004" },
      { k: "B", ru: "На 3 месяца, форма 7004", en: "By 3 months, on Form 7004" },
      { k: "C", ru: "На 6 месяцев, форма 4868", en: "By 6 months, on Form 4868" },
      { k: "D", ru: "Продление партнёрству не даётся", en: "No extension is available to a partnership" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Шесть месяцев от первоначального срока: для календарного партнёрства — до 15 сентября.", en: "Correct. Six months from the original date: for a calendar-year partnership, to September 15." },
      B: { ru: "Три месяца — это предел отсрочки года по §444, а не продление срока подачи.", en: "Three months is the limit of deferral for a section 444 year, not the filing extension." },
      C: { ru: "Форма 4868 — продление для физических лиц. Деловые декларации продлеваются формой 7004.", en: "Form 4868 is the individual extension. Business returns are extended on Form 7004." },
      D: { ru: "Продление даётся, причём автоматически.", en: "An extension is available, and automatically at that." }
    }
  },
  {
    sec: "s92",
    ru: "К какому сроку партнёрство обязано выдать партнёрам приложения K-1?",
    en: "By when must a partnership furnish Schedules K-1 to its partners?",
    opts: [
      { k: "A", ru: "К сроку подачи формы 1065, включая продление", en: "By the due date of Form 1065, extensions included" },
      { k: "B", ru: "К 31 января следующего года независимо от всего", en: "By January 31 of the next year, regardless" },
      { k: "C", ru: "К сроку подачи формы 1065 без учёта продления", en: "By the due date of Form 1065, disregarding extensions" },
      { k: "D", ru: "В течение 30 дней после подачи формы 1065", en: "Within 30 days after Form 1065 is filed" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Тот же срок, что и у самой декларации, и продление распространяется на K-1 тоже.", en: "Correct. The same date as the return itself, and the extension covers the K-1s as well." },
      B: { ru: "31 января — срок форм W-2 и 1099, а не K-1.", en: "January 31 is the date for Forms W-2 and 1099, not for K-1." },
      C: { ru: "Продление учитывается: иначе продление теряло бы смысл.", en: "Extensions are taken into account: otherwise the extension would be pointless." },
      D: { ru: "Такого отдельного тридцатидневного срока нет.", en: "There is no such separate thirty-day period." }
    }
  },
  {
    sec: "s92",
    ru: "Партнёрство из пяти партнёров подало форму 1065 с опозданием на три месяца. Как считается штраф?",
    en: "A five-partner partnership filed Form 1065 three months late. How is the penalty figured?",
    opts: [
      { k: "A", ru: "Ставка за месяц × 3 месяца × 5 партнёров", en: "The monthly amount × 3 months × 5 partners" },
      { k: "B", ru: "Ставка за месяц × 3 месяца, число партнёров не важно", en: "The monthly amount × 3 months; the number of partners is irrelevant" },
      { k: "C", ru: "Процент от неуплаченного налога партнёрства", en: "A percentage of the partnership's unpaid tax" },
      { k: "D", ru: "Штрафа нет, если у партнёрства не было прибыли", en: "There is no penalty if the partnership had no profit" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Штраф считается за каждый месяц и за каждого партнёра, до двенадцати месяцев.", en: "Correct. The penalty runs for each month and for each partner, for up to twelve months." },
      B: { ru: "Число партнёров как раз и есть множитель: в этом особенность штрафа.", en: "The number of partners is precisely the multiplier: that is the peculiarity of this penalty." },
      C: { ru: "Налога у партнёрства нет вовсе, поэтому штраф и построен иначе.", en: "A partnership has no tax at all, which is why the penalty is built differently." },
      D: { ru: "Прибыль на штраф не влияет: наказывают за неподанную декларацию, а не за неуплату.", en: "Profit does not affect the penalty: it punishes the unfiled return, not underpayment." }
    }
  },
  {
    sec: "s92",
    ru: "В каком порядке ищется обязательный налоговый год партнёрства?",
    en: "In what order is a partnership's required tax year determined?",
    opts: [
      { k: "A", ru: "Год большинства, затем год основных партнёров, затем наименьшая совокупная отсрочка", en: "The majority year, then the principal partners' year, then the least aggregate deferral" },
      { k: "B", ru: "Наименьшая совокупная отсрочка, затем год большинства", en: "The least aggregate deferral, then the majority year" },
      { k: "C", ru: "Год основных партнёров, затем год большинства", en: "The principal partners' year, then the majority year" },
      { k: "D", ru: "Любой из трёх по выбору партнёрства", en: "Any of the three, at the partnership's choice" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Проверки идут строго по порядку: сработала — на этом и остановились.", en: "Correct. The tests run strictly in order: one that applies settles the matter." },
      B: { ru: "Порядок обратный: наименьшая отсрочка — последняя ступень, а не первая.", en: "The order is the reverse: least aggregate deferral is the last rung, not the first." },
      C: { ru: "Год большинства проверяется первым, а не вторым.", en: "The majority year is tested first, not second." },
      D: { ru: "Выбора здесь нет: порядок задан.", en: "There is no choice here: the order is fixed." }
    }
  },
  {
    sec: "s92",
    ru: "Какая доля нужна для года большинства?",
    en: "What share is needed for a majority interest tax year?",
    opts: [
      { k: "A", ru: "Более 50% и капитала, и прибыли — у партнёров с одинаковым годом", en: "More than 50% of both capital and profits — held by partners with the same year" },
      { k: "B", ru: "50% и более капитала", en: "50% or more of capital" },
      { k: "C", ru: "Более 50% капитала или прибыли — достаточно одного", en: "More than 50% of capital or of profits — either will do" },
      { k: "D", ru: "5% и более в капитале или прибыли", en: "5% or more of capital or of profits" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Нужны оба показателя сразу и строго более половины; проверяется на первый день года партнёрства.", en: "Correct. Both measures are needed at once and strictly more than half; it is tested on the first day of the partnership's year." },
      B: { ru: "Ровно 50% большинством не является, и одного капитала мало.", en: "Exactly 50% is not a majority, and capital alone is not enough." },
      C: { ru: "Нужны оба показателя, а не один из двух.", en: "Both measures are needed, not one of the two." },
      D: { ru: "5% — порог основного партнёра, то есть второй ступени.", en: "5% is the principal-partner threshold, that is, the second rung." }
    }
  },
  {
    sec: "s92",
    ru: "Кто такой основной партнёр?",
    en: "Who is a principal partner?",
    opts: [
      { k: "A", ru: "Партнёр с долей 5% и более в капитале или в прибыли", en: "A partner with 5% or more of capital or of profits" },
      { k: "B", ru: "Партнёр с долей более 5% и в капитале, и в прибыли", en: "A partner with more than 5% of both capital and profits" },
      { k: "C", ru: "Партнёр, управляющий делами партнёрства", en: "The partner who manages the partnership's affairs" },
      { k: "D", ru: "Партнёр с наибольшей долей", en: "The partner with the largest interest" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Ровно пять процентов уже делают партнёра основным, и достаточно одного из двух показателей.", en: "Correct. Exactly five per cent already makes one, and one of the two measures suffices." },
      B: { ru: "Требуется «5% и более», а не «более 5%», и достаточно одного показателя.", en: "It is “5% or more”, not “more than 5%”, and one measure suffices." },
      C: { ru: "Управление здесь ни при чём: считаются доли.", en: "Management has nothing to do with it: shares are what count." },
      D: { ru: "Основных партнёров может быть несколько, и определяются они порогом, а не сравнением.", en: "There may be several principal partners, and they are determined by a threshold, not by comparison." }
    }
  },
  {
    sec: "s92",
    ru: "В какую сторону отсчитывается отсрочка при расчёте наименьшей совокупной отсрочки?",
    en: "In which direction is the deferral measured in the least aggregate deferral computation?",
    opts: [
      { k: "A", ru: "Вперёд — от предполагаемого конца года партнёрства до конца года партнёра", en: "Forward — from the proposed partnership year-end to the partner's year-end" },
      { k: "B", ru: "Назад — от конца года партнёра до конца года партнёрства", en: "Backward — from the partner's year-end to the partnership's" },
      { k: "C", ru: "От начала календарного года", en: "From the beginning of the calendar year" },
      { k: "D", ru: "От даты создания партнёрства", en: "From the date the partnership was formed" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Счёт идёт вперёд. Считать назад — самая частая ошибка, и она даёт ровно противоположный ответ.", en: "Correct. The count runs forward. Counting backward is the commonest error, and it gives precisely the opposite answer." },
      B: { ru: "Это и есть та самая ошибка: при ней наименьшей окажется другая дата.", en: "That is the error in question: it makes a different date come out smallest." },
      C: { ru: "Календарный год к расчёту отношения не имеет.", en: "The calendar year has nothing to do with the computation." },
      D: { ru: "Дата создания в расчёт не входит.", en: "The formation date does not enter the computation." }
    }
  },
  {
    sec: "s92",
    ru: "У партнёрства два равных партнёра: у первого год кончается 31 декабря, у второго 31 марта. Какая совокупная отсрочка при конце года 31 марта?",
    en: "A partnership has two equal partners: the first's year ends December 31, the second's March 31. What is the aggregate deferral for a March 31 year-end?",
    opts: [
      { k: "A", ru: "4,5", en: "4.5" },
      { k: "B", ru: "1,5", en: "1.5" },
      { k: "C", ru: "3,0", en: "3.0" },
      { k: "D", ru: "6,0", en: "6.0" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. От 31 марта вперёд до 31 декабря — 9 месяцев × 50% = 4,5; у второго партнёра отсрочка ноль. Итого 4,5.", en: "Correct. From March 31 forward to December 31 is 9 months × 50% = 4.5; the second partner's deferral is nil. Total 4.5." },
      B: { ru: "1,5 получилось бы при конце года 31 декабря: 3 месяца × 50%. Это второй вариант, и он меньше.", en: "1.5 is what a December 31 year-end gives: 3 months × 50%. That is the other option, and it is smaller." },
      C: { ru: "Три месяца — это отсрочка первого партнёра при другом варианте, и её ещё надо умножить на долю.", en: "Three months is the first partner's deferral under the other option, and it has yet to be multiplied by the share." },
      D: { ru: "Девять месяцев не умножены на долю, а доля здесь половина.", en: "Nine months not multiplied by the share, and the share here is a half." }
    }
  },
  {
    sec: "s92",
    ru: "Партнёрство хочет взять налоговый год, отличный от обязательного, и ссылается на то, что это отложит налог партнёрам. Пройдёт ли такое основание?",
    en: "A partnership wants a tax year other than the required one and argues that it will defer tax for the partners. Will that purpose pass?",
    opts: [
      { k: "A", ru: "Нет: отсрочка налога деловым основанием прямо не признаётся", en: "No: deferral of tax is expressly not a business purpose" },
      { k: "B", ru: "Да, если отсрочка не превышает трёх месяцев", en: "Yes, if the deferral does not exceed three months" },
      { k: "C", ru: "Да, при согласии всех партнёров", en: "Yes, with the agreement of all the partners" },
      { k: "D", ru: "Да, если партнёрство подаст форму 1128", en: "Yes, if the partnership files Form 1128" },
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Это сказано прямо, и на этом строят вопрос: деловое основание должно быть деловым, а не налоговым.", en: "Correct. It is said expressly, and questions are built on it: a business purpose must be a business one, not a tax one." },
      B: { ru: "Трёхмесячная отсрочка доступна по §444, но это отдельный путь, и он оплачивается деньгами, а не основанием.", en: "A three-month deferral is available under section 444, but that is a separate route, paid for in money rather than justified by a purpose." },
      C: { ru: "Согласие партнёров делового основания не создаёт.", en: "The partners' agreement does not create a business purpose." },
      D: { ru: "Форма 1128 — способ попросить, а не само основание.", en: "Form 1128 is the way of asking, not the purpose itself." }
    }
  },
  {
    sec: "s92",
    ru: "В чём состоит тест естественного делового года?",
    en: "What is the natural business year test?",
    opts: [
      { k: "A", ru: "Не менее 25% годовой выручки приходится на последние два месяца — и так в каждом из трёх предыдущих лет", en: "At least 25% of the annual gross receipts falls in the last two months — and so in each of the three preceding years" },
      { k: "B", ru: "Не менее 50% выручки приходится на последний месяц года", en: "At least 50% of the receipts falls in the last month of the year" },
      { k: "C", ru: "Не менее 25% выручки приходится на последние два месяца хотя бы одного года", en: "At least 25% of the receipts falls in the last two months of at least one year" },
      { k: "D", ru: "Выручка последнего квартала превышает выручку любого другого", en: "The last quarter's receipts exceed those of any other" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Три величины сразу: четверть выручки, два последних месяца, три года подряд.", en: "Correct. Three figures at once: a quarter of the receipts, the last two months, three years running." },
      B: { ru: "Ни доли, ни периода в правиле такого нет.", en: "Neither that share nor that period appears in the rule." },
      C: { ru: "Одного года мало: требуется каждый из трёх предыдущих.", en: "One year is not enough: each of the three preceding years is required." },
      D: { ru: "Сравнения кварталов правило не содержит.", en: "The rule contains no comparison of quarters." }
    }
  },
  {
    sec: "s92",
    ru: "Какую отсрочку допускает выбор по §444 и чем он оплачивается?",
    en: "What deferral does a section 444 election allow, and what does it cost?",
    opts: [
      { k: "A", ru: "Не более трёх месяцев; оплачивается обязательным платежом по §7519 на форме 8752", en: "No more than three months; paid for by the required payment under section 7519 on Form 8752" },
      { k: "B", ru: "До шести месяцев; бесплатно", en: "Up to six months; free of charge" },
      { k: "C", ru: "Любую, если есть деловое основание", en: "Any deferral, if there is a business purpose" },
      { k: "D", ru: "Не более трёх месяцев; оплачивается повышенным штрафом за опоздание", en: "No more than three months; paid for by an increased late-filing penalty" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Выбор заявляется формой 8716, а платёж по §7519 — это залог, а не налог.", en: "Correct. The election is made on Form 8716, and the section 7519 payment is a deposit, not a tax." },
      B: { ru: "Шесть месяцев — это продление срока подачи, а не отсрочка года. И бесплатным §444 не бывает.", en: "Six months is the filing extension, not a year's deferral. And section 444 is never free." },
      C: { ru: "Деловое основание — отдельный путь, не имеющий отношения к §444.", en: "A business purpose is a separate route, unrelated to section 444." },
      D: { ru: "Штраф здесь ни при чём: платёж вносится заранее и добровольно.", en: "The penalty is irrelevant: the payment is made in advance and voluntarily." }
    }
  },
  {
    sec: "s92",
    ru: "Действующий налоговый год партнёрства сам оказался одним из допустимых. Что партнёрство должно сделать?",
    en: "A partnership's existing tax year turns out to be one of the permitted ones. What must it do?",
    opts: [
      { k: "A", ru: "Сохранить его", en: "Keep it" },
      { k: "B", ru: "Выбрать заново из всех допустимых", en: "Choose afresh among all the permitted years" },
      { k: "C", ru: "Перейти на календарный год", en: "Move to a calendar year" },
      { k: "D", ru: "Подать форму 1128 для подтверждения", en: "File Form 1128 for confirmation" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Правило переворачивает вопрос: не «какой год выбрать», а «можно ли вообще менять». Нельзя.", en: "Correct. The rule turns the question round: not “which year to choose” but “may it be changed at all”. It may not." },
      B: { ru: "Выбора не возникает: действующий допустимый год сохраняется.", en: "No choice arises: an existing permitted year is kept." },
      C: { ru: "Перехода на календарный год правило не требует.", en: "The rule requires no move to a calendar year." },
      D: { ru: "Форма 1128 нужна для смены года, а здесь менять нечего.", en: "Form 1128 is for changing the year, and here there is nothing to change." }
    }
  },
  {
    sec: "s92",
    ru: "Когда партнёрство обязано подавать форму 1065 электронно?",
    en: "When must a partnership file Form 1065 electronically?",
    opts: [
      { k: "A", ru: "Если оно обязано подать за календарный год 10 и более деклараций любого вида или у него больше 100 партнёров", en: "If it must file 10 or more returns of any kind for the calendar year, or it has more than 100 partners" },
      { k: "B", ru: "Всегда: бумажная подача больше не допускается", en: "Always: paper filing is no longer allowed" },
      { k: "C", ru: "Если партнёров больше десяти", en: "If it has more than ten partners" },
      { k: "D", ru: "Если выручка превышает миллион долларов", en: "If its gross receipts exceed a million dollars" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Два независимых условия, и достаточно любого из них.", en: "Correct. Two independent conditions, and either one suffices." },
      B: { ru: "Остальные партнёрства подают как хотят: обязанность не всеобщая.", en: "Other partnerships may file as they please: the duty is not universal." },
      C: { ru: "Десять — это число деклараций, а не партнёров. Партнёров нужно больше ста.", en: "Ten is the number of returns, not of partners. Partners must number more than a hundred." },
      D: { ru: "Порога по выручке в этом правиле нет.", en: "There is no receipts threshold in this rule." }
    }
  },
  {
    sec: "s93",
    ru: "Партнёр вносит имущество в обмен на долю. Что признаётся по общему правилу §721?",
    en: "A partner contributes property in exchange for an interest. What is recognised under the general rule of section 721?",
    opts: [
      { k: "A", ru: "Ничего: ни партнёр, ни партнёрство не признают ни прибыли, ни убытка", en: "Nothing: neither the partner nor the partnership recognises gain or loss" },
      { k: "B", ru: "Партнёр признаёт прибыль, партнёрство — нет", en: "The partner recognises gain, the partnership does not" },
      { k: "C", ru: "Партнёрство признаёт прибыль, партнёр — нет", en: "The partnership recognises gain, the partner does not" },
      { k: "D", ru: "Оба признают прибыль по рыночной стоимости", en: "Both recognise gain at market value" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Правило двустороннее и действует как при создании партнёрства, так и много лет спустя.", en: "Correct. The rule runs both ways and applies at formation and many years later alike." },
      B: { ru: "Партнёр по общему правилу тоже ничего не признаёт: прибыль откладывается в базисе доли.", en: "The partner too recognises nothing as a rule: the gain is deferred into the basis of the interest." },
      C: { ru: "Партнёрство при получении вклада не признаёт прибыли никогда.", en: "A partnership never recognises gain on receiving a contribution." },
      D: { ru: "Рыночная стоимость здесь не работает вовсе: переносится базис.", en: "Market value plays no part here at all: basis carries over." }
    }
  },
  {
    sec: "s93",
    ru: "Каким становится базис внесённого имущества у партнёрства?",
    en: "What becomes the partnership's basis in the contributed property?",
    opts: [
      { k: "A", ru: "Равен базису у партнёра плюс прибыль, которую партнёр признал; на долги не корректируется", en: "Equal to the partner's basis plus any gain the partner recognised; not adjusted for liabilities" },
      { k: "B", ru: "Равен рыночной стоимости на дату вклада", en: "Equal to the market value at the contribution date" },
      { k: "C", ru: "Равен базису у партнёра минус принятые долги", en: "Equal to the partner's basis less the liabilities assumed" },
      { k: "D", ru: "Равен цене, которую партнёр когда-то заплатил, без амортизации", en: "Equal to what the partner once paid, without depreciation" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Базис переносится, и корректировка на долги здесь не делается — долги влияют на базис доли, а не имущества.", en: "Correct. The basis carries over, and no adjustment for liabilities is made here — liabilities affect the basis of the interest, not of the property." },
      B: { ru: "Рыночная стоимость базисом не становится: иначе встроенная прибыль исчезала бы.", en: "Market value does not become the basis: otherwise the built-in gain would vanish." },
      C: { ru: "На долги корректируется базис доли партнёра, а не базис имущества у партнёрства.", en: "It is the partner's basis in the interest that is adjusted for liabilities, not the partnership's basis in the property." },
      D: { ru: "Переносится скорректированный базис, то есть уже за вычетом взятой амортизации.", en: "It is the adjusted basis that carries over, that is, net of depreciation already taken." }
    }
  },
  {
    sec: "s93",
    ru: "Партнёр признал прибыль при вкладе имущества. Что происходит с периодом владения этим имуществом у партнёрства?",
    en: "A partner recognised gain on contributing property. What happens to the partnership's holding period in it?",
    opts: [
      { k: "A", ru: "Период владения партнёра переходит к партнёрству полностью", en: "The partner's holding period carries over to the partnership in full" },
      { k: "B", ru: "Период начинается заново со дня вклада", en: "The period begins afresh on the day of the contribution" },
      { k: "C", ru: "Период обнуляется, потому что была признана прибыль", en: "The period is reset because gain was recognised" },
      { k: "D", ru: "Период делится пропорционально признанной прибыли", en: "The period is split in proportion to the gain recognised" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Признание прибыли на период владения имуществом не влияет — это прямо оговорено.", en: "Correct. Recognising gain does not affect the holding period of the property — that is expressly provided." },
      B: { ru: "Заново период начинается у доли, полученной за услуги, а не у имущества.", en: "It is the interest received for services whose period begins afresh, not the property's." },
      C: { ru: "Обнуления не происходит: правило переноса действует и здесь.", en: "There is no reset: the carryover rule applies here too." },
      D: { ru: "Деления периода пропорционально прибыли закон не знает.", en: "The law knows no such proportionate splitting of the period." }
    }
  },
  {
    sec: "s93",
    ru: "Партнёр вносит участок: базис $30 000, рыночная стоимость $90 000, ипотека $50 000, которую принимает партнёрство. Доля партнёра — 40%. Какова признанная прибыль?",
    en: "A partner contributes land: basis $30,000, market value $90,000, mortgage $50,000 assumed by the partnership. The partner's interest is 40%. What gain is recognised?",
    opts: [
      { k: "A", ru: "Ноль", en: "Nil" },
      { k: "B", ru: "$20 000", en: "$20,000" },
      { k: "C", ru: "$60 000", en: "$60,000" },
      { k: "D", ru: "$10 000", en: "$10,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. 30 000 − 50 000 + 40% × 50 000 = 30 000 − 50 000 + 20 000 = 0. Базис ровно ноль, и прибыли нет: она возникает только при превышении.", en: "Correct. 30,000 − 50,000 + 40% × 50,000 = 30,000 − 50,000 + 20,000 = 0. The basis is exactly nil and there is no gain: gain arises only on an excess." },
      B: { ru: "$20 000 — собственная доля партнёра в долге, и она возвращается к нему, а не облагается.", en: "$20,000 is the partner's own share of the debt, and it comes back to him rather than being taxed." },
      C: { ru: "$60 000 — встроенная прибыль. При вкладе она не признаётся, а откладывается.", en: "$60,000 is the built-in gain. It is not recognised on the contribution but deferred." },
      D: { ru: "Так вышло бы, если бы доля партнёра в долге была посчитана как 20%.", en: "That is what a 20% share of the debt would give." }
    }
  },
  {
    sec: "s93",
    ru: "Тот же участок, но базис $20 000. Какова признанная прибыль?",
    en: "The same land, but with a basis of $20,000. What gain is recognised?",
    opts: [
      { k: "A", ru: "$10 000", en: "$10,000" },
      { k: "B", ru: "Ноль", en: "Nil" },
      { k: "C", ru: "$30 000", en: "$30,000" },
      { k: "D", ru: "$70 000", en: "$70,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. 20 000 − 50 000 + 20 000 = −10 000, а базис отрицательным не бывает: базис ноль, прибыль $10 000.", en: "Correct. 20,000 − 50,000 + 20,000 = −10,000, and a basis is never negative: the basis is nil and the gain $10,000." },
      B: { ru: "Ноль был бы при базисе $30 000. Здесь базиса не хватило.", en: "Nil would be right with a basis of $30,000. Here the basis fell short." },
      C: { ru: "$30 000 — это весь долг сверх базиса, но собственная доля партнёра в долге к нему возвращается.", en: "$30,000 is the whole debt above basis, but the partner's own share of it comes back to him." },
      D: { ru: "$70 000 — встроенная прибыль по рынку; при вкладе она не признаётся.", en: "$70,000 is the built-in gain at market; it is not recognised on a contribution." }
    }
  },
  {
    sec: "s93",
    ru: "Партнёр получил долю в капитале партнёрства за оказанные услуги. Как это облагается?",
    en: "A partner received a capital interest in a partnership for services rendered. How is it taxed?",
    opts: [
      { k: "A", ru: "Обычный доход в размере рыночной стоимости доли; этот доход становится базисом", en: "Ordinary income equal to the market value of the interest; that income becomes the basis" },
      { k: "B", ru: "Не облагается: §721 покрывает и услуги", en: "Not taxed: section 721 covers services too" },
      { k: "C", ru: "Долгосрочный прирост капитала", en: "Long-term capital gain" },
      { k: "D", ru: "Обычный доход, но базис доли остаётся нулевым", en: "Ordinary income, but the basis of the interest stays nil" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Это единственный вход, который облагается всегда. Утешение в том, что признанный доход целиком становится базисом.", en: "Correct. This is the one entry that is always taxed. The consolation is that the income recognised becomes the basis in full." },
      B: { ru: "Услуги имуществом не являются, и §721 их не покрывает.", en: "Services are not property, and section 721 does not cover them." },
      C: { ru: "Это плата за работу, значит, обычный доход, а не прирост капитала.", en: "It is pay for work, and so ordinary income, not capital gain." },
      D: { ru: "Базис как раз появляется — иначе доход облагался бы дважды.", en: "The basis does arise — otherwise the income would be taxed twice." }
    }
  },
  {
    sec: "s93",
    ru: "Рыночная стоимость имущества партнёрства $800 000, обязательства $200 000. Партнёр получает 15% в капитале за услуги. Какой доход он показывает?",
    en: "The market value of a partnership's property is $800,000 and its liabilities $200,000. A partner receives 15% of the capital for services. What income does he report?",
    opts: [
      { k: "A", ru: "$90 000", en: "$90,000" },
      { k: "B", ru: "$120 000", en: "$120,000" },
      { k: "C", ru: "$150 000", en: "$150,000" },
      { k: "D", ru: "Ноль", en: "Nil" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Считается от чистой стоимости: (800 000 − 200 000) × 15% = $90 000. Столько же становится базисом доли.", en: "Correct. It is figured on the net value: (800,000 − 200,000) × 15% = $90,000. The same amount becomes the basis of the interest." },
      B: { ru: "15% от валовой стоимости: обязательства не вычтены, а вычесть их надо — иначе партнёру начислят за то, чего он не получил.", en: "15% of the gross value: the liabilities were not subtracted, and they must be — otherwise the partner is charged for what he did not get." },
      C: { ru: "Такой доли в условии нет.", en: "No such share appears in the facts." },
      D: { ru: "Доля в капитале за услуги облагается всегда.", en: "A capital interest for services is always taxed." }
    }
  },
  {
    sec: "s93",
    ru: "Чем доля в капитале отличается от доли только в будущей прибыли при получении за услуги?",
    en: "How does a capital interest differ from an interest in future profits only, when received for services?",
    opts: [
      { k: "A", ru: "Доля в капитале облагается при получении, доля только в прибыли по общему правилу — нет", en: "A capital interest is taxed on receipt; an interest in profits only generally is not" },
      { k: "B", ru: "Обе облагаются одинаково", en: "Both are taxed alike" },
      { k: "C", ru: "Доля в капитале не облагается, доля в прибыли облагается", en: "A capital interest is not taxed; a profits interest is" },
      { k: "D", ru: "Ни одна не облагается", en: "Neither is taxed" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Доля в капитале дала бы держателю часть выручки при немедленной продаже всего имущества — её и оценивают. Доля в будущей прибыли пока не даёт ничего.", en: "Correct. A capital interest would give its holder a share of the proceeds on an immediate sale of everything — that is what is valued. An interest in future profits gives nothing yet." },
      B: { ru: "Разница как раз есть, и на ней строят вопрос.", en: "There is a difference, and the question is built on it." },
      C: { ru: "Всё наоборот.", en: "It is the other way round." },
      D: { ru: "Доля в капитале за услуги облагается.", en: "A capital interest for services is taxed." }
    }
  },
  {
    sec: "s93",
    ru: "Партнёр внёс имущество, а через несколько дней получил из партнёрства крупную сумму денег. Как это квалифицируется?",
    en: "A partner contributed property and a few days later received a large sum of money from the partnership. How is that characterised?",
    opts: [
      { k: "A", ru: "Замаскированная продажа: прибыль признаётся в той части, в какой имущество считается купленным другими партнёрами", en: "A disguised sale: gain is recognised to the extent the property is treated as bought by the other partners" },
      { k: "B", ru: "Обычный вклад и обычное распределение — последствий нет", en: "An ordinary contribution and an ordinary distribution — there are no consequences" },
      { k: "C", ru: "Заём партнёрства партнёру", en: "A loan from the partnership to the partner" },
      { k: "D", ru: "Ликвидация доли партнёра", en: "A liquidation of the partner's interest" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. По существу это продажа, и закон смотрит на существо, а не на название.", en: "Correct. In substance it is a sale, and the law looks to substance rather than to the name." },
      B: { ru: "Именно так это и пытаются представить; правило о замаскированной продаже для того и существует.", en: "That is exactly how it is made to look; the disguised sale rule exists for that reason." },
      C: { ru: "Заём подразумевает обязанность вернуть; здесь её нет.", en: "A loan implies an obligation to repay; there is none here." },
      D: { ru: "Ликвидация прекращает долю, а здесь партнёр остаётся партнёром.", en: "A liquidation ends the interest, and here the partner remains a partner." }
    }
  },
  {
    sec: "s93",
    ru: "Партнёр внёс оборудование в 2022 году. В 2027 году партнёрство распределяет это же оборудование другому партнёру. Каковы последствия для вкладчика?",
    en: "A partner contributed equipment in 2022. In 2027 the partnership distributes that same equipment to another partner. What follows for the contributor?",
    opts: [
      { k: "A", ru: "Он признаёт меньшее из встроенной прибыли на дату вклада и прибыли при продаже по рынку", en: "He recognises the lesser of the built-in gain at the contribution date and the gain on a sale at market" },
      { k: "B", ru: "Последствий нет: распределение получил не он", en: "There are none: he did not receive the distribution" },
      { k: "C", ru: "Он признаёт всю рыночную стоимость оборудования", en: "He recognises the whole market value of the equipment" },
      { k: "D", ru: "Последствия несёт партнёр-получатель, а не вкладчик", en: "The consequences fall on the receiving partner, not on the contributor" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Прошло меньше семи лет, и отложенная прибыль поднимается — иначе имуществом обменивались бы через партнёрство вместо прямого обмена.", en: "Correct. Fewer than seven years have passed and the deferred gain is raised — otherwise property would be swapped through the partnership instead of directly." },
      B: { ru: "В том и дело, что правило срабатывает именно тогда, когда имущество уходит другому.", en: "That is just the point: the rule bites precisely when the property goes to somebody else." },
      C: { ru: "Признаётся меньшая из двух величин, а не вся стоимость.", en: "The lesser of two amounts is recognised, not the whole value." },
      D: { ru: "Правило адресовано вкладчику: это его отложенная прибыль.", en: "The rule is addressed to the contributor: it is his deferred gain." }
    }
  },
  {
    sec: "s93",
    ru: "От какой даты отсчитывается семилетний срок для вложенного имущества?",
    en: "From what date do the seven years run for contributed property?",
    opts: [
      { k: "A", ru: "От даты вклада каждого предмета отдельно", en: "From the date each item was contributed, separately" },
      { k: "B", ru: "От даты создания партнёрства", en: "From the date the partnership was formed" },
      { k: "C", ru: "От начала налогового года, в котором сделан вклад", en: "From the start of the tax year in which the contribution was made" },
      { k: "D", ru: "От даты приобретения имущества партнёром", en: "From the date the partner acquired the property" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. У партнёрства, созданного десять лет назад, имущество, внесённое в прошлом году, под правилом, а внесённое при создании — уже нет.", en: "Correct. In a partnership formed ten years ago, property contributed last year is within the rule and property contributed at formation is not." },
      B: { ru: "Дата рождения партнёрства здесь ни при чём.", en: "The partnership's own birthday has nothing to do with it." },
      C: { ru: "Отсчёт идёт от даты вклада, а не от начала года.", en: "The count runs from the contribution date, not from the start of the year." },
      D: { ru: "Когда партнёр купил имущество, для этого правила безразлично.", en: "When the partner bought the property is immaterial for this rule." }
    }
  },
  {
    sec: "s93",
    ru: "Партнёрство продаёт имущество, внесённое партнёром, у которого на дату вклада была встроенная прибыль. Кому она достаётся?",
    en: "A partnership sells property contributed by a partner that had built-in gain at the contribution date. Who gets that gain?",
    opts: [
      { k: "A", ru: "Партнёру, который это имущество внёс", en: "The partner who contributed the property" },
      { k: "B", ru: "Всем партнёрам по долям в прибыли", en: "All the partners, by their profit shares" },
      { k: "C", ru: "Партнёрству: оно платит налог само", en: "The partnership: it pays the tax itself" },
      { k: "D", ru: "Партнёру с наибольшей долей", en: "The partner with the largest interest" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Встроенная прибыль принадлежит вкладчику, значит, ему и должна достаться, когда всплывёт.", en: "Correct. The built-in gain belongs to the contributor, so it is to the contributor that it must fall when it surfaces." },
      B: { ru: "По долям делится прибыль, возникшая уже у партнёрства, а не принесённая со стороны.", en: "The profit shares divide gain that arose in the partnership, not gain brought in from outside." },
      C: { ru: "Партнёрство налога не платит вовсе.", en: "A partnership pays no tax at all." },
      D: { ru: "Размер доли здесь ни при чём.", en: "The size of the interest is irrelevant here." }
    }
  },
  {
    sec: "s93",
    ru: "Партнёрству причитается $600 амортизации за год, а по встроенной разнице одному из партнёров следовало бы отдать $750. Сколько отдадут?",
    en: "A partnership is entitled to $600 of depreciation for the year, while the built-in difference would call for $750 to go to one partner. How much is given?",
    opts: [
      { k: "A", ru: "$600: раздать можно только то, что есть", en: "$600: only what exists can be handed out" },
      { k: "B", ru: "$750: справедливость важнее", en: "$750: fairness comes first" },
      { k: "C", ru: "$300: делится поровну", en: "$300: it is split evenly" },
      { k: "D", ru: "Ноль: при расхождении распределение не делается", en: "Nil: where there is a discrepancy no allocation is made" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Общая сумма, распределённая партнёрам, не может превышать того, что причитается партнёрству. Справедливость достигается не полностью.", en: "Correct. The total allocated among the partners cannot exceed what the partnership itself has. Fairness is achieved only in part." },
      B: { ru: "Недостающие деньги неоткуда взять: у партнёрства их просто нет.", en: "The missing amount has nowhere to come from: the partnership simply does not have it." },
      C: { ru: "Ровное деление как раз игнорирует встроенную разницу.", en: "An even split is exactly what ignores the built-in difference." },
      D: { ru: "Распределение делается — просто упирается в предел.", en: "The allocation is made — it merely runs into the ceiling." }
    }
  },
  {
    sec: "s93",
    ru: "Двое вносят разные пакеты акций в партнёрство, которое было бы инвестиционной компанией. Что происходит?",
    en: "Two persons contribute different share portfolios to a partnership that would be an investment company. What happens?",
    opts: [
      { k: "A", ru: "Реализованная прибыль признаётся: §721(b) закрывает бесплатную диверсификацию", en: "The realised gain is recognised: section 721(b) closes off free diversification" },
      { k: "B", ru: "Ничего: §721 действует и здесь", en: "Nothing: section 721 applies here too" },
      { k: "C", ru: "Признаётся и прибыль, и убыток", en: "Both gain and loss are recognised" },
      { k: "D", ru: "Партнёрство переклассифицируется в корпорацию", en: "The partnership is reclassified as a corporation" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Иначе можно было бы сложить разные акции в общий котёл и бесплатно получить диверсифицированный портфель.", en: "Correct. Otherwise one could pool different shares and get a diversified portfolio free of charge." },
      B: { ru: "§721(a) именно здесь и отключается.", en: "Section 721(a) is switched off precisely here." },
      C: { ru: "Правило говорит только о прибыли: убыток по-прежнему не признаётся.", en: "The rule speaks only of gain: loss is still not recognised." },
      D: { ru: "Классификация лица не меняется.", en: "The entity's classification does not change." }
    }
  },
  {
    sec: "s94",
    ru: "Из чего складывается начальный базис доли партнёра?",
    en: "What makes up the opening basis of a partner's interest?",
    opts: [
      { k: "A", ru: "Деньги плюс базис имущества плюс признанная прибыль плюс доля в долгах партнёрства минус свои долги, принятые партнёрством", en: "Money plus the basis of property plus gain recognised plus the share of partnership liabilities less the partner's own debts taken over" },
      { k: "B", ru: "Рыночная стоимость всего внесённого", en: "The market value of everything contributed" },
      { k: "C", ru: "Доля партнёра в рыночной стоимости активов партнёрства", en: "The partner's share of the market value of the partnership's assets" },
      { k: "D", ru: "Деньги и базис имущества; долги в базис не входят", en: "Money and the basis of property; liabilities do not enter" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Пять слагаемых, и два последних — про долг, который идёт в обе стороны.", en: "Correct. Five items, the last two being about debt, which runs both ways." },
      B: { ru: "Рыночная стоимость в базис не входит: переносится базис, иначе встроенная прибыль пропадала бы.", en: "Market value does not enter: the basis carries over, or the built-in gain would vanish." },
      C: { ru: "Базис доли считается от внесённого, а не от доли в активах.", en: "The basis of the interest is figured from what was contributed, not from a share of the assets." },
      D: { ru: "Долги входят, и это ключевая особенность партнёрского базиса.", en: "Liabilities do enter, and that is the key feature of partnership basis." }
    }
  },
  {
    sec: "s94",
    ru: "Почему доля партнёра в обязательствах партнёрства повышает базис его доли?",
    en: "Why does a partner's share of partnership liabilities raise the basis of their interest?",
    opts: [
      { k: "A", ru: "Она считается вкладом денег: партнёр отвечает за эти долги, значит, вложил больше, чем отдал", en: "It is treated as a contribution of money: the partner answers for those debts and so has more at stake than they handed over" },
      { k: "B", ru: "Потому что партнёрство получило деньги взаймы", en: "Because the partnership borrowed money" },
      { k: "C", ru: "Потому что долги уменьшают доход партнёрства", en: "Because liabilities reduce the partnership's income" },
      { k: "D", ru: "Это техническая условность без смысла", en: "It is a technical convention with no meaning behind it" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Логика прямая: за долг придётся отвечать, и базис это отражает.", en: "Correct. The logic is direct: the debt will have to be answered for, and the basis reflects it." },
      B: { ru: "Сам факт займа базиса не создаёт — создаёт его распределение долга между партнёрами.", en: "The borrowing alone does not create basis — it is the allocation of the debt among the partners that does." },
      C: { ru: "Доход уменьшают проценты, а не сама сумма долга.", en: "It is the interest that reduces income, not the principal." },
      D: { ru: "Смысл вполне содержательный: базис меряет то, чем партнёр рискует.", en: "The meaning is substantive: basis measures what the partner has at risk." }
    }
  },
  {
    sec: "s94",
    ru: "Партнёрство приняло на себя долг $80 000, обременяющий внесённое имущество. Доля партнёра — 30%. На сколько уменьшится его базис по этому основанию?",
    en: "A partnership assumed an $80,000 debt on contributed property. The partner's interest is 30%. By how much does their basis fall on that account?",
    opts: [
      { k: "A", ru: "На $56 000: чужими стали 70% долга", en: "By $56,000: 70% of the debt became somebody else's" },
      { k: "B", ru: "На $80 000: весь долг перешёл к партнёрству", en: "By $80,000: the whole debt passed to the partnership" },
      { k: "C", ru: "На $24 000: только собственная доля партнёра", en: "By $24,000: only the partner's own share" },
      { k: "D", ru: "Не уменьшится: долги базис только повышают", en: "Not at all: liabilities only raise basis" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Формально отнимается весь долг $80 000, но $24 000 возвращаются как доля партнёра в обязательствах; чистый эффект — минус $56 000.", en: "Correct. Formally the whole $80,000 is subtracted, but $24,000 comes back as the partner's share of the liabilities; the net effect is minus $56,000." },
      B: { ru: "Это самая частая ошибка: она завышает уменьшение ровно на собственную долю партнёра.", en: "That is the commonest error: it overstates the reduction by exactly the partner's own share." },
      C: { ru: "$24 000 — как раз та часть, которая возвращается, а не уменьшает.", en: "$24,000 is precisely the part that comes back, not the part that reduces." },
      D: { ru: "Принятый партнёрством долг партнёра — это полученные им деньги, и базис он уменьшает.", en: "A partner's debt taken over by the partnership is money received by them, and it does reduce basis." }
    }
  },
  {
    sec: "s94",
    ru: "Партнёрство взяло заём без личной ответственности. Входит ли он в базис долей партнёров?",
    en: "A partnership took a nonrecourse loan. Does it enter the partners' bases?",
    opts: [
      { k: "A", ru: "Да: личного риска нет ни у кого, поэтому он делится между всеми — по общему правилу по долям в прибыли", en: "Yes: nobody bears a personal risk, so it is shared among all — as a rule by the profit shares" },
      { k: "B", ru: "Нет: в базис входят только долги с личной ответственностью", en: "No: only recourse debt enters basis" },
      { k: "C", ru: "Да, но только у генеральных партнёров", en: "Yes, but only for the general partners" },
      { k: "D", ru: "Да, поровну между всеми партнёрами независимо от долей", en: "Yes, equally among all the partners regardless of their shares" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Долг без личной ответственности в базис входит; вопрос лишь в том, как его поделить.", en: "Correct. Nonrecourse debt does enter basis; the only question is how it is divided." },
      B: { ru: "Это распространённое заблуждение: в базис входят оба вида, просто по разным правилам.", en: "A common misconception: both kinds enter, merely under different rules." },
      C: { ru: "Генеральным партнёрам достаётся долг с личной ответственностью — у них есть личный риск.", en: "It is recourse debt that falls to the general partners — they are the ones with personal risk." },
      D: { ru: "Делится не поровну, а по долям.", en: "It is divided by shares, not equally." }
    }
  },
  {
    sec: "s94",
    ru: "Кому идёт в базис долг партнёрства с личной ответственностью?",
    en: "Whose basis does a recourse partnership debt enter?",
    opts: [
      { k: "A", ru: "Тем партнёрам, кто лично за него отвечает", en: "The partners who are personally liable for it" },
      { k: "B", ru: "Всем партнёрам по долям в прибыли", en: "All the partners, by their profit shares" },
      { k: "C", ru: "Всем партнёрам поровну", en: "All the partners, equally" },
      { k: "D", ru: "Никому: такой долг в базис не входит", en: "Nobody's: such debt does not enter basis" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Общее правило одно: долг повышает базис того, кто несёт экономический риск убытка.", en: "Correct. The general rule is single: debt raises the basis of whoever bears the economic risk of loss." },
      B: { ru: "По долям в прибыли делится долг без личной ответственности — там риска нет ни у кого.", en: "It is nonrecourse debt that is divided by profit shares — there nobody bears the risk." },
      C: { ru: "Поровну не делится ни тот, ни другой вид долга.", en: "Neither kind of debt is divided equally." },
      D: { ru: "Входит, и в первую очередь именно такой.", en: "It does enter, and this kind first of all." }
    }
  },
  {
    sec: "s94",
    ru: "У партнёрства на кассовом методе есть кредиторская задолженность $40 000. Входит ли она в базис долей партнёров?",
    en: "A cash-basis partnership has $40,000 of accounts payable. Do they enter the partners' bases?",
    opts: [
      { k: "A", ru: "Нет: на кассовом методе она ещё не дала вычета и ничего не прибавила к базису активов", en: "No: on the cash method they have yet to give a deduction and have added nothing to the basis of the assets" },
      { k: "B", ru: "Да: любая задолженность входит в базис", en: "Yes: any liability enters basis" },
      { k: "C", ru: "Да, но только в базис генеральных партнёров", en: "Yes, but only the general partners' bases" },
      { k: "D", ru: "Нет: кредиторская задолженность не входит в базис ни при каком методе учёта", en: "No: accounts payable never enter basis under any method" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Долг повышает базис, только если создаёт базис активов, даёт текущий вычет или даёт невычитаемый некапитальный расход. Кредиторка на кассовом методе не делает ничего из трёх.", en: "Correct. Debt raises basis only if it creates basis in the assets, gives a current deduction, or gives a nondeductible noncapital expense. On the cash method payables do none of the three." },
      B: { ru: "Не любая: именно у кассового партнёрства список ограничен тремя случаями.", en: "Not any: in a cash-basis partnership the list is limited to three cases." },
      C: { ru: "Метод учёта, а не вид партнёра, решает здесь дело.", en: "It is the accounting method, not the kind of partner, that decides here." },
      D: { ru: "У партнёрства на методе начисления та же кредиторка в базис входит: вычет уже взят.", en: "In an accrual-basis partnership the same payables do enter: the deduction has already been taken." }
    }
  },
  {
    sec: "s94",
    ru: "Партнёрство получило $8 000 процентов по муниципальным облигациям, налогом они не облагаются. Как это влияет на базис доли партнёра?",
    en: "A partnership received $8,000 of municipal bond interest, which bears no tax. How does that affect a partner's basis?",
    opts: [
      { k: "A", ru: "Повышает его на долю партнёра: базис меряет вложенное, а не налог", en: "It raises it by the partner's share: basis measures what has been put in, not tax" },
      { k: "B", ru: "Не влияет: необлагаемый доход в базис не входит", en: "No effect: tax-exempt income does not enter basis" },
      { k: "C", ru: "Понижает его: доход необлагаемый, значит, вычетов по нему нет", en: "It lowers it: the income is exempt, so there are no deductions against it" },
      { k: "D", ru: "Повышает базис партнёрства в активах, но не базис доли", en: "It raises the partnership's basis in its assets, but not the basis of the interest" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Партнёрство на эти деньги действительно богаче, и партнёр должен иметь возможность вынести их без налога.", en: "Correct. By that money the partnership really is richer, and the partner must be able to take it out tax-free." },
      B: { ru: "Входит — и это одна из двух строк, объясняющих логику всей таблицы.", en: "It does enter — and it is one of the two rows that explain the logic of the whole table." },
      C: { ru: "Понижают базис невычитаемые расходы, а не необлагаемый доход.", en: "It is nondeductible expenses that lower basis, not exempt income." },
      D: { ru: "Влияет именно на базис доли: речь о доле партнёра в доходе.", en: "It affects the basis of the interest precisely: it is the partner's share of the income." }
    }
  },
  {
    sec: "s94",
    ru: "Доля партнёра в вычете по §179 составила $5 000, но взять этот вычет у себя партнёр не смог. Что с базисом его доли?",
    en: "A partner's share of the section 179 deduction was $5,000, but the partner could not take it on their own return. What happens to the basis of their interest?",
    opts: [
      { k: "A", ru: "Базис всё равно уменьшается на $5 000", en: "The basis falls by $5,000 all the same" },
      { k: "B", ru: "Базис не меняется: вычет не взят", en: "The basis is unchanged: the deduction was not taken" },
      { k: "C", ru: "Базис уменьшается наполовину", en: "The basis falls by half that" },
      { k: "D", ru: "Базис увеличивается на $5 000", en: "The basis rises by $5,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Это прямо оговорено: доля в §179 понижает базис даже тогда, когда сам партнёр вычет взять не смог.", en: "Correct. It is expressly provided: the share of section 179 lowers the basis even where the partner could not take the deduction." },
      B: { ru: "Правило работает независимо от того, удалось ли партнёру воспользоваться вычетом.", en: "The rule works regardless of whether the partner managed to use the deduction." },
      C: { ru: "Никакой половины в правиле нет.", en: "There is no halving in the rule." },
      D: { ru: "Расходы базис понижают, а не повышают.", en: "Expenses lower basis, they do not raise it." }
    }
  },
  {
    sec: "s94",
    ru: "Партнёр внёс $50 000 деньгами и оборудование с базисом $20 000 и рыночной стоимостью $35 000. Доля — 20%, партнёрство взяло заём $100 000 без личной ответственности. Каков базис доли?",
    en: "A partner contributed $50,000 in cash and equipment with a basis of $20,000 and a market value of $35,000. The interest is 20% and the partnership took a $100,000 nonrecourse loan. What is the basis of the interest?",
    opts: [
      { k: "A", ru: "$90 000", en: "$90,000" },
      { k: "B", ru: "$70 000", en: "$70,000" },
      { k: "C", ru: "$105 000", en: "$105,000" },
      { k: "D", ru: "$85 000", en: "$85,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. 50 000 + 20 000 + 20% × 100 000 = $90 000. Заём без личной ответственности в базис входит.", en: "Correct. 50,000 + 20,000 + 20% × 100,000 = $90,000. The nonrecourse loan does enter basis." },
      B: { ru: "Заём не учтён вовсе. Долг без личной ответственности в базис всё равно входит.", en: "The loan was left out entirely. Nonrecourse debt enters basis all the same." },
      C: { ru: "За базис оборудования принята рыночная стоимость $35 000.", en: "The equipment's market value of $35,000 was taken as its basis." },
      D: { ru: "Такой суммы из условия не получается ни по одной из ошибок.", en: "No error in the facts produces that figure." }
    }
  },
  {
    sec: "s94",
    ru: "Может ли базис доли партнёра стать отрицательным?",
    en: "Can the basis of a partner's interest become negative?",
    opts: [
      { k: "A", ru: "Нет: он доходит до нуля, а превышение становится признанной прибылью", en: "No: it stops at nil, and the excess becomes recognised gain" },
      { k: "B", ru: "Да, если долги превышают вложенное", en: "Yes, if the liabilities exceed what was contributed" },
      { k: "C", ru: "Да, но только у генерального партнёра", en: "Yes, but only for a general partner" },
      { k: "D", ru: "Да, и отрицательный базис переносится на следующий год", en: "Yes, and a negative basis carries to the next year" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Отрицательного базиса не бывает: всё, чему не хватило базиса, выходит наружу прибылью.", en: "Correct. There is no such thing as a negative basis: everything the basis could not absorb comes out as gain." },
      B: { ru: "Именно в этом случае и появляется признанная прибыль вместо отрицательного базиса.", en: "That is precisely the case where recognised gain appears instead of a negative basis." },
      C: { ru: "Вид партнёра здесь ни при чём.", en: "The kind of partner is irrelevant here." },
      D: { ru: "Переносить нечего: превышение облагается сразу.", en: "There is nothing to carry: the excess is taxed at once." }
    }
  },
  {
    sec: "s94",
    ru: "Партнёр получил долю в обмен на капитальное имущество, которым владел четыре года. Каков период владения долей?",
    en: "A partner received an interest in exchange for capital property held for four years. What is the holding period of the interest?",
    opts: [
      { k: "A", ru: "Включает четыре года владения имуществом", en: "It includes the four years the property was held" },
      { k: "B", ru: "Начинается со дня получения доли", en: "It begins on the day the interest was received" },
      { k: "C", ru: "Начинается со следующего дня после получения", en: "It begins the day after receipt" },
      { k: "D", ru: "Равен периоду существования партнёрства", en: "It equals the life of the partnership" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Период владения переходит на долю от вложенного капитального имущества и имущества по §1231.", en: "Correct. The holding period carries over to the interest from contributed capital property and section 1231 property." },
      B: { ru: "Заново период начинается у доли, полученной за услуги или за имущество обычного дохода.", en: "It begins afresh for an interest received for services or for ordinary-income property." },
      C: { ru: "Со следующего дня — это как раз случай услуг.", en: "The next day is precisely the services case." },
      D: { ru: "Срок жизни партнёрства к периоду владения долей отношения не имеет.", en: "The partnership's lifetime has nothing to do with the holding period of the interest." }
    }
  },
  {
    sec: "s94",
    ru: "Покупатель приобрёл долю у партнёра за $200 000. Его доля в обязательствах партнёрства — $30 000. Каков базис доли?",
    en: "A buyer acquired an interest from a partner for $200,000. Their share of the partnership's liabilities is $30,000. What is the basis of the interest?",
    opts: [
      { k: "A", ru: "$230 000", en: "$230,000" },
      { k: "B", ru: "$200 000", en: "$200,000" },
      { k: "C", ru: "$170 000", en: "$170,000" },
      { k: "D", ru: "Базис продавца, перенесённый на покупателя", en: "The seller's basis, carried over to the buyer" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Цена плюс доля покупателя в обязательствах партнёрства.", en: "Correct. The price plus the buyer's share of the partnership's liabilities." },
      B: { ru: "Долги в базис входят и здесь: покупатель отвечает за них наравне с прочими.", en: "Liabilities enter basis here too: the buyer answers for them like everyone else." },
      C: { ru: "Долги повышают базис, а не понижают.", en: "Liabilities raise basis, they do not lower it." },
      D: { ru: "Правило переноса базиса здесь не работает: это обычная покупка.", en: "The carryover rule does not apply here: this is an ordinary purchase." }
    }
  },
  {
    sec: "s94",
    ru: "Кто делает выбор по §754 и на кого распространяется корректировка базиса активов?",
    en: "Who makes the section 754 election, and to whom does the adjustment to the basis of the assets apply?",
    opts: [
      { k: "A", ru: "Выбор делает партнёрство; корректировка действует только для того партнёра, чья доля сменилась", en: "The partnership makes it; the adjustment applies only to the partner whose interest changed" },
      { k: "B", ru: "Выбор делает покупатель доли; корректировка действует для всех партнёров", en: "The buyer of the interest makes it; the adjustment applies to all the partners" },
      { k: "C", ru: "Выбор делает продавец; корректировка действует для всех", en: "The seller makes it; the adjustment applies to all" },
      { k: "D", ru: "Выбор делает партнёрство; корректировка действует для всех партнёров", en: "The partnership makes it; the adjustment applies to all the partners" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Обе особенности и спрашивают: выбор партнёрства, а действие — только для одного партнёра.", en: "Correct. Both features are what get asked about: the partnership elects, and the effect is for one partner only." },
      B: { ru: "Покупатель выбора не делает, хотя выигрывает от него именно он.", en: "The buyer does not make the election, though it is the buyer who benefits from it." },
      C: { ru: "Продавец к этому выбору отношения не имеет.", en: "The seller has nothing to do with this election." },
      D: { ru: "Первая половина верна, вторая — нет: для остальных базис активов остаётся прежним.", en: "The first half is right and the second is not: for everyone else the basis of the assets is unchanged." }
    }
  },
  {
    sec: "s94",
    ru: "Зачем партнёрству выбор по §754 после того, как новый партнёр купил долю дорого?",
    en: "Why would a partnership make a section 754 election after a new partner bought an interest at a high price?",
    opts: [
      { k: "A", ru: "Иначе новый партнёр заплатит налог с прибыли, за которую уже заплатил продавцу", en: "Otherwise the new partner will pay tax on a gain they have already paid the seller for" },
      { k: "B", ru: "Чтобы уменьшить штраф за позднюю подачу", en: "To reduce the late-filing penalty" },
      { k: "C", ru: "Чтобы сменить налоговый год", en: "To change the tax year" },
      { k: "D", ru: "Чтобы перейти на метод начисления", en: "To move to the accrual method" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Базис доли у покупателя высокий, а базис активов внутри партнёрства прежний — выбор по §754 подтягивает второй к первому.", en: "Correct. The buyer's basis in the interest is high while the basis of the assets inside is unchanged — the section 754 election brings the second up to the first." },
      B: { ru: "К штрафам этот выбор отношения не имеет.", en: "The election has nothing to do with penalties." },
      C: { ru: "Налоговый год меняется формой 1128 или выбором по §444.", en: "The tax year is changed on Form 1128 or by a section 444 election." },
      D: { ru: "Метод учёта меняется формой 3115.", en: "The accounting method is changed on Form 3115." }
    }
  },
  {
    sec: "s94",
    ru: "Что из перечисленного повышает базис доли партнёра?",
    en: "Which of the following raises the basis of a partner's interest?",
    opts: [
      { k: "A", ru: "Выросшая доля партнёра в обязательствах партнёрства", en: "An increased share of the partnership's liabilities" },
      { k: "B", ru: "Полученное от партнёрства распределение денег", en: "A distribution of money received from the partnership" },
      { k: "C", ru: "Доля в убытке партнёрства", en: "A share of the partnership's loss" },
      { k: "D", ru: "Доля в невычитаемом некапитальном расходе", en: "A share of a nondeductible noncapital expense" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Рост доли в долгах приравнивается к вкладу денег.", en: "Correct. An increased share of the liabilities is treated as a contribution of money." },
      B: { ru: "Распределение денег базис понижает — вместе со снизившейся долей в долгах.", en: "A distribution of money lowers basis — along with a decreased share of the liabilities." },
      C: { ru: "Убытки базис понижают.", en: "Losses lower basis." },
      D: { ru: "Невычитаемые расходы базис понижают: деньги действительно ушли.", en: "Nondeductible expenses lower basis: the money really did go." }
    }
  },
  {
    sec: "s94",
    ru: "Признаёт ли партнёрство прибыль или убыток, получая вклад имущества в обмен на долю?",
    en: "Does a partnership recognise gain or loss on receiving a contribution of property in exchange for an interest?",
    opts: [
      { k: "A", ru: "Нет, никогда", en: "No, never" },
      { k: "B", ru: "Да, если рыночная стоимость выше базиса", en: "Yes, if the market value exceeds the basis" },
      { k: "C", ru: "Да, если имущество обременено долгом", en: "Yes, if the property is subject to a debt" },
      { k: "D", ru: "Да, если вкладчик признал прибыль", en: "Yes, if the contributor recognised gain" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Правило §721 двустороннее, и со стороны партнёрства исключений у него нет.", en: "Correct. The section 721 rule runs both ways, and on the partnership's side it has no exceptions." },
      B: { ru: "Разница между рынком и базисом остаётся встроенной прибылью и откладывается.", en: "The difference between market and basis remains built-in gain and is deferred." },
      C: { ru: "Долг может создать прибыль у партнёра, но не у партнёрства.", en: "Debt may create gain for the partner, but not for the partnership." },
      D: { ru: "Признание прибыли партнёром повышает базис имущества у партнёрства, но прибыли ему не создаёт.", en: "Gain recognised by the partner raises the partnership's basis in the property but creates no gain for it." }
    }
  },
  {
    sec: "s94",
    ru: "Три величины решаются базисом доли. Какая из перечисленных к ним не относится?",
    en: "Three things turn on the basis of the interest. Which of the following is not one of them?",
    opts: [
      { k: "A", ru: "Налоговый год партнёрства", en: "The partnership's tax year" },
      { k: "B", ru: "Сколько убытка партнёр вправе вычесть", en: "How much loss the partner may deduct" },
      { k: "C", ru: "Сколько партнёр может получить из партнёрства без налога", en: "How much the partner may take out tax-free" },
      { k: "D", ru: "Какой будет прибыль при выходе из партнёрства", en: "What the gain will be on leaving the partnership" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Налоговый год определяется годами партнёров и их долями в капитале и прибыли, а не базисом.", en: "Correct. The tax year is determined by the partners' years and their shares of capital and profits, not by basis." },
      B: { ru: "Это первое, что решает базис: убыток вычитается в его пределах.", en: "That is the first thing basis decides: loss is deducted within its limits." },
      C: { ru: "Полученное сверх базиса становится прибылью — значит, базис решает и это.", en: "Anything received above basis becomes gain — so basis decides this too." },
      D: { ru: "Прибыль при выходе — это разница между полученным и базисом доли.", en: "The gain on leaving is the difference between what is received and the basis of the interest." }
    }
  },
  {
    sec: "s94",
    ru: "Партнёр внёс имущество, признав при этом прибыль $12 000 из-за долга сверх базиса. Как эта прибыль влияет на базис его доли?",
    en: "A partner contributed property and recognised $12,000 of gain because the debt exceeded the basis. How does that gain affect the basis of their interest?",
    opts: [
      { k: "A", ru: "Входит в базис как отдельное слагаемое, но базис всё равно оказывается нулевым", en: "It enters the basis as a separate item, though the basis still comes out nil" },
      { k: "B", ru: "Не влияет: признанная прибыль в базис не входит", en: "No effect: gain recognised does not enter basis" },
      { k: "C", ru: "Понижает базис на ту же сумму", en: "It lowers the basis by the same amount" },
      { k: "D", ru: "Делает базис положительным на $12 000", en: "It makes the basis positive by $12,000" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Признанная прибыль — третье слагаемое формулы, иначе она облагалась бы дважды. Но в этом случае долг всё равно доводит базис до нуля.", en: "Correct. Gain recognised is the third item of the formula, or it would be taxed twice. But here the debt still takes the basis to nil." },
      B: { ru: "Входит обязательно: это общее правило для любого признанного дохода.", en: "It does enter: that is the general rule for any income recognised." },
      C: { ru: "Прибыль базис повышает, а не понижает.", en: "Gain raises basis, it does not lower it." },
      D: { ru: "Прибыль потому и возникла, что базиса не хватило: она его не делает положительным.", en: "The gain arose precisely because the basis ran out: it does not make the basis positive." }
    }
  },
  {
    sec: "s94",
    ru: "Может ли одна доля в партнёрстве иметь разные периоды владения по разным своим частям?",
    en: "Can a single partnership interest have different holding periods for different parts of itself?",
    opts: [
      { k: "A", ru: "Да: часть, полученная за капитальное имущество, наследует его период, а часть за услуги начинает свой", en: "Yes: the part received for capital property inherits its period, and the part for services starts its own" },
      { k: "B", ru: "Нет: у доли всегда один период владения", en: "No: an interest always has one holding period" },
      { k: "C", ru: "Да, но только у генерального партнёра", en: "Yes, but only for a general partner" },
      { k: "D", ru: "Нет: период всегда начинается со дня получения доли", en: "No: the period always begins on the day the interest is received" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Это странность, о которой стоит знать: доля может оказаться расщеплённой по периодам владения.", en: "Correct. It is an oddity worth knowing: an interest may end up split by holding period." },
      B: { ru: "Один период был бы, если бы вклад был однородным. Смешанный вклад даёт смешанный период.", en: "One period would follow from a single kind of contribution. A mixed contribution gives a mixed period." },
      C: { ru: "Вид партнёра здесь ни при чём.", en: "The kind of partner is irrelevant here." },
      D: { ru: "Со дня получения период начинается только для доли за услуги — и то со следующего дня.", en: "The period begins on receipt only for an interest for services — and then from the next day." }
    }
  }
];
