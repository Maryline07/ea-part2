/* ===================================================================
   Вопросы тренажёра, модуль 03.

   Отдельный файл, а не блок внутри страницы: под file:// страница не
   может прочитать другой файл, поэтому единственный способ отдать
   данные двум страницам сразу — тег <script src>. Файл подключают и
   su03.html, и trainer.html.

   QUIZSECS — названия подразделов. На странице модуля они есть в
   заголовках, на странице тренажёра их нет. Карта порождается
   скриптом из тех же заголовков, а сборка отказывается собирать
   файл, если названия разошлись.
   =================================================================== */

window.QUIZZES  = window.QUIZZES  || {};
window.QUIZSECS = window.QUIZSECS || {};

window.QUIZSECS.su03 = {
  s31: { no: "3.1", ru: "Доход от аренды", en: "Rental income" },
  s32: { no: "3.2", ru: "Расходы по аренде", en: "Rental expenses" },
  s33: { no: "3.3", ru: "Личное пользование жильём", en: "Personal use of a dwelling" },
  s34: { no: "3.4", ru: "Четыре лимита убытка", en: "The four loss limits" }
};

window.QUIZZES.su03 = [
  {
    sec: "s31",
    ru: "1 ноября 2025 года подписан трёхлетний договор аренды. Арендодатель на методе начисления получил при подписании плату за ноябрь и декабрь 2025 года $3 400 и плату за последний месяц срока — октябрь 2028 года — $1 700. Какая сумма войдёт в доход 2025 года?",
    en: "On November 1, 2025, a three-year lease was signed. The accrual-method landlord received $3,400 for November and December 2025 plus $1,700 for the final month of the term, October 2028. How much enters 2025 income?",
    opts: [
      { k: "A", ru: "$3 400", en: "$3,400" },
      { k: "B", ru: "$5 100", en: "$5,100" },
      { k: "C", ru: "$1 700", en: "$1,700" },
      { k: "D", ru: "$3 457 — плата за два месяца плюс доля последнего месяца", en: "$3,457 — two months plus a prorated share of the final month" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это только текущая плата. Авансовая плата за последний месяц включается сразу.", en: "That is only the current rent. Advance rent for the final month is included at once." },
      B: { ru: "Верно. Авансовая арендная плата включается в доход в год получения независимо от покрываемого периода и независимо от метода учёта. Метод начисления здесь ничего не меняет.", en: "Correct. Advance rent is included in the year received regardless of the period it covers and regardless of the accounting method. Accrual accounting changes nothing here." },
      C: { ru: "Это только аванс, без платы за ноябрь и декабрь.", en: "That is the advance alone, without the November and December rent." },
      D: { ru: "Аванс не растягивается по сроку договора. Он включается целиком в год получения.", en: "Advance rent is not spread over the term. It goes in entirely in the year received." }
    }
  },
  {
    sec: "s31",
    ru: "Арендатор внёс $2 000, которые по договору возвращаются в конце срока при отсутствии повреждений, и ещё $2 000, которые по договору зачитываются в счёт платы за последний месяц. Что включается в доход в год получения?",
    en: "A tenant paid $2,000 refundable at the end of the term if there is no damage, and another $2,000 that the lease applies to the final month’s rent. What is included in income in the year received?",
    opts: [
      { k: "A", ru: "$4 000: обе суммы получены", en: "$4,000: both amounts were received" },
      { k: "B", ru: "$2 000 — только зачитываемая в последний месяц", en: "$2,000 — only the amount applied to the final month" },
      { k: "C", ru: "$2 000 — только возвращаемая", en: "$2,000 — only the refundable amount" },
      { k: "D", ru: "Ноль: обе суммы называются депозитом", en: "Zero: both are called deposits" }
    ],
    correct: "B",
    why: {
      A: { ru: "Возвращаемый депозит доходом не является: он не ваш, пока вы его не удержали.", en: "A refundable deposit is not income: it is not yours until you keep it." },
      B: { ru: "Верно. Сумма, идущая в счёт последнего платежа, — авансовая арендная плата и доход сразу. Возвращаемый депозит станет доходом только в том году, когда вы его удержите.", en: "Correct. An amount applied to the final rent payment is advance rent and income at once. The refundable deposit becomes income only in the year you keep it." },
      C: { ru: "Перепутаны роли: доход даёт как раз не возвращаемая, а зачитываемая сумма.", en: "The roles are reversed: it is the applied amount, not the refundable one, that is income." },
      D: { ru: "Название в договоре значения не имеет; решает судьба денег.", en: "The label in the lease is irrelevant; what matters is what happens to the money." }
    }
  },
  {
    sec: "s31",
    ru: "По договору арендатор платит счета за воду напрямую поставщику и вычитает их из арендной платы. За год он уплатил $1 150 и внёс арендодателю $16 850 вместо $18 000. Что отражает арендодатель?",
    en: "Under the lease the tenant pays the water bills directly and deducts them from the rent. Over the year the tenant paid $1,150 and remitted $16,850 instead of $18,000. What does the landlord report?",
    opts: [
      { k: "A", ru: "Доход $16 850, расходов нет", en: "$16,850 of income and no expense" },
      { k: "B", ru: "Доход $18 000 и расход $1 150", en: "$18,000 of income and $1,150 of expense" },
      { k: "C", ru: "Доход $18 000, расходов нет", en: "$18,000 of income and no expense" },
      { k: "D", ru: "Доход $16 850 и расход $1 150", en: "$16,850 of income and $1,150 of expense" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это учёт по фактически полученным деньгам. Оплата арендатором ваших счетов — тоже ваш доход.", en: "That records only the cash received. The tenant’s payment of your bills is your income too." },
      B: { ru: "Верно. Расходы, оплаченные арендатором за вас, включаются в доход, и та же сумма вычитается как расход, если она вычитаема. Итог по налогу совпадает с вариантом A, но обе строки должны быть в декларации.", en: "Correct. Expenses the tenant pays for you are income, and the same amount is deducted if it is a deductible expense. The tax result equals choice A, but both lines belong on the return." },
      C: { ru: "Половина верна: доход действительно $18 000. Но расход на воду вычитается.", en: "Half right: the income is indeed $18,000. But the water expense is deductible." },
      D: { ru: "Здесь $1 150 вычтены дважды — из дохода и как расход.", en: "Here the $1,150 is subtracted twice — from income and again as an expense." }
    }
  },
  {
    sec: "s31",
    ru: "Арендатор-электрик перевёл проводку в квартире вместо платы за два месяца. Обычная плата — $1 450 в месяц; стороны согласовали стоимость работ в $2 900, и это соответствует рыночным расценкам. Что отражает арендодатель?",
    en: "A tenant who is an electrician rewired the flat instead of paying two months’ rent. The normal rent is $1,450 a month; the parties agreed the work was worth $2,900, which matches market rates. What does the landlord report?",
    opts: [
      { k: "A", ru: "Ничего: денег не поступало", en: "Nothing: no money changed hands" },
      { k: "B", ru: "Доход $2 900; расход на ремонт не возникает", en: "$2,900 of income; no repair expense arises" },
      { k: "C", ru: "Доход $2 900 и расход $2 900", en: "$2,900 of income and $2,900 of expense" },
      { k: "D", ru: "Доход $2 900 и капитализируемое улучшение $2 900", en: "$2,900 of income and a $2,900 capitalized improvement" }
    ],
    correct: "D",
    why: {
      A: { ru: "Услуги вместо платы включаются в доход по рыночной стоимости.", en: "Services received instead of rent are income at fair market value." },
      B: { ru: "Доход указан верно, но полученные работы — это ещё и затраты на объект, которые надо куда-то отнести.", en: "The income is right, but the work received is also an outlay on the property that has to go somewhere." },
      C: { ru: "Так было бы при обычном ремонте. Полная замена проводки — восстановление существенной части объекта.", en: "That would be the answer for an ordinary repair. Rewiring the whole flat replaces a major component." },
      D: { ru: "Верно. Доход равен рыночной стоимости услуг, а сами работы капитализируются как восстановление и возмещаются через амортизацию, а не вычитаются сразу.", en: "Correct. The income equals the fair market value of the services, while the work itself is capitalized as a restoration and recovered through depreciation rather than deducted at once." }
    }
  },
  {
    sec: "s31",
    ru: "Арендатор заплатил $5 500 за право досрочно расторгнуть договор и съехал. Как арендодатель отражает эту сумму?",
    en: "A tenant paid $5,500 to cancel the lease early and moved out. How does the landlord report it?",
    opts: [
      { k: "A", ru: "Как арендный доход в год получения", en: "As rental income in the year received" },
      { k: "B", ru: "Как прирост капитала", en: "As a capital gain" },
      { k: "C", ru: "Как возврат ранее вычтенных расходов", en: "As a recovery of previously deducted expenses" },
      { k: "D", ru: "Растягивается на оставшийся срок договора", en: "Spread over the remaining term of the lease" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Плата за расторжение договора — обычный арендный доход в год получения.", en: "Correct. A payment to cancel a lease is ordinary rental income in the year received." },
      B: { ru: "Капитального актива арендодатель не продавал: договор прекращён, а не отчуждён.", en: "The landlord sold no capital asset: the lease was terminated, not disposed of." },
      C: { ru: "Никаких расходов эта сумма не возвращает.", en: "The payment recovers no previously deducted expense." },
      D: { ru: "Растягивание применялось бы к авансу за будущие периоды по методу начисления, но и там правило иное. Плата за расторжение включается сразу.", en: "Spreading would suit prepaid future rent under an accrual method, and even there the rule differs. A cancellation payment is included at once." }
    }
  },
  {
    sec: "s31",
    ru: "Владелец сдаёт четыре квартиры, обеспечивает отопление, освещение, вывоз мусора и убирает лестничные клетки. Никаких услуг внутри квартир он не оказывает. Где отражается результат?",
    en: "An owner rents out four flats and provides heat, light, trash collection and cleaning of the stairwells. No services are provided inside the flats. Where is the result reported?",
    opts: [
      { k: "A", ru: "Schedule C: услуг много и они регулярны", en: "Schedule C: the services are numerous and regular" },
      { k: "B", ru: "Schedule E, при этом понадобится более одного бланка", en: "Schedule E, and more than one copy of it will be needed" },
      { k: "C", ru: "Schedule E, одного бланка достаточно", en: "Schedule E, and one copy is enough" },
      { k: "D", ru: "Schedule 1, строка 8j", en: "Schedule 1, line 8j" }
    ],
    correct: "B",
    why: {
      A: { ru: "Отопление, свет, вывоз мусора и уборка мест общего пользования существенными услугами не считаются.", en: "Heat, light, trash collection and cleaning of common areas are not substantial services." },
      B: { ru: "Верно. Услуги не существенные, значит Schedule E. Один бланк вмещает три объекта, а их четыре — нужен второй.", en: "Correct. The services are not substantial, so Schedule E applies. One copy holds three properties and there are four, so a second copy is required." },
      C: { ru: "Форма выбрана верно, но на одном бланке помещаются только три объекта.", en: "The right form, but a single copy holds only three properties." },
      D: { ru: "Строка 8j предназначена для деятельности, ведущейся не ради прибыли.", en: "Line 8j is for an activity not engaged in for profit." }
    }
  },
  {
    sec: "s31",
    ru: "Владелец сдаёт домик соседям за символическую плату, много лет получая меньше, чем тратит, и прибыли не ищет. Доход за 2025 год $3 200, расходы $7 400. Как это отражается?",
    en: "An owner rents a cottage to neighbours for a token amount, has spent more than it brings in for years, and seeks no profit. Income for 2025 is $3,200 and expenses $7,400. How is it reported?",
    opts: [
      { k: "A", ru: "Убыток $4 200 в Schedule E", en: "A $4,200 loss on Schedule E" },
      { k: "B", ru: "Доход $3 200 и расходы $3 200 в Schedule E", en: "$3,200 of income and $3,200 of expenses on Schedule E" },
      { k: "C", ru: "Доход $3 200 в Schedule 1, строке 8j; расходы по аренде не вычитаются", en: "$3,200 on Schedule 1, line 8j; the rental expenses are not deductible" },
      { k: "D", ru: "Не отражается: плата символическая", en: "Not reported: the rent is only nominal" }
    ],
    correct: "C",
    why: {
      A: { ru: "Убыток даёт только деятельность, ведущаяся ради прибыли.", en: "Only an activity engaged in for profit produces a loss." },
      B: { ru: "Ограничение вычета размером дохода — это правило §280A для жилья, используемого как дом, а не для аренды не ради прибыли.", en: "Capping deductions at the income is the section 280A rule for a dwelling used as a home, not the not-for-profit rule." },
      C: { ru: "Верно. Аренда не ради прибыли отражается так же, как хобби: доход в Schedule 1, строку 8j, расходы по аренде не вычитаются. Проценты и налоги можно взять в Schedule A при детализации.", en: "Correct. A not-for-profit rental follows the hobby pattern: income on Schedule 1, line 8j, and no deduction for rental expenses. Interest and taxes may go on Schedule A if the taxpayer itemizes." },
      D: { ru: "Доход остаётся доходом независимо от размера платы.", en: "Income remains income whatever the size of the rent." }
    }
  },
  {
    sec: "s31",
    ru: "Договор аренды даёт арендатору право выкупить объект. В июне арендатор реализовал это право. Платежи за январь—май составили $7 500, за июнь—декабрь — $10 500. Как отражаются платежи после даты продажи?",
    en: "A lease gives the tenant an option to buy, and in June the tenant exercised it. Payments for January through May were $7,500 and for June through December $10,500. How are the post-sale payments treated?",
    opts: [
      { k: "A", ru: "Как арендный доход: договор так и назывался арендой", en: "As rental income: the agreement was called a lease" },
      { k: "B", ru: "Как часть цены продажи", en: "As part of the selling price" },
      { k: "C", ru: "Как возврат капитала, не облагаемый вовсе", en: "As a tax-free return of capital" },
      { k: "D", ru: "Как процентный доход", en: "As interest income" }
    ],
    correct: "B",
    why: {
      A: { ru: "Так отражаются платежи <em>до</em> даты продажи — здесь это $7 500.", en: "That is the treatment of payments <em>before</em> the sale date — here, the $7,500." },
      B: { ru: "Верно. При реализации права выкупа платежи за период после даты продажи входят в цену продажи, а не в арендный доход.", en: "Correct. When the option is exercised, payments for the period after the sale date become part of the selling price rather than rent." },
      C: { ru: "Возврат капитала определяется при расчёте прибыли от продажи, а не заменяет её.", en: "Return of capital is worked out inside the gain computation; it does not replace it." },
      D: { ru: "Процентов договор аренды с правом выкупа сам по себе не порождает.", en: "A lease with an option to buy does not by itself generate interest." }
    }
  },
  {
    sec: "s32",
    ru: "Квартира была свободна с марта по июнь: прежний арендатор съехал, новый въехал в июле. Всё это время объект предлагался к сдаче за $1 600 в месяц. За период простоя уплачены коммунальные $520, страховка $340, налог на имущество $780. Что вычитается за эти четыре месяца?",
    en: "A flat stood empty from March through June: the old tenant left and a new one moved in in July. Throughout, it was offered for rent at $1,600 a month. During the vacancy $520 of utilities, $340 of insurance and $780 of property tax were paid. What is deductible for those four months?",
    opts: [
      { k: "A", ru: "Ничего: дохода за период не было", en: "Nothing: there was no income for the period" },
      { k: "B", ru: "$1 640 плюс амортизация за период", en: "$1,640 plus depreciation for the period" },
      { k: "C", ru: "$8 040: расходы плюс недополученная плата", en: "$8,040: the expenses plus the lost rent" },
      { k: "D", ru: "$6 400 недополученной платы", en: "$6,400 of lost rent" }
    ],
    correct: "B",
    why: {
      A: { ru: "Расходы периода простоя вычитаются, пока объект предлагается к сдаче. Дохода за период для этого не требуется.", en: "Expenses of a vacant period are deductible while the property is held out for rent. Income for the period is not required." },
      B: { ru: "Верно. $520 + $340 + $780 = $1 640, и амортизация за время простоя тоже продолжает начисляться.", en: "Correct. $520 + $340 + $780 = $1,640, and depreciation keeps running through the vacancy." },
      C: { ru: "Недополученная плата к расходам не добавляется: её никогда не было в доходе.", en: "The lost rent is not added to expenses: it was never in income." },
      D: { ru: "Неполученный доход расходом не является ни при каком методе учёта.", en: "Income never received is not an expense under any accounting method." }
    }
  },
  {
    sec: "s32",
    ru: "Купленный в марте дом требовал ремонта. С марта по июль владелец красил стены и чинил полы, потратив $6 300. В августе объект был выставлен в аренду, а первый арендатор въехал в октябре. Расходы на объявления в августе и сентябре — $400. Что вычитается в 2025 году?",
    en: "A house bought in March needed work. From March to July the owner painted and repaired floors, spending $6,300. In August it was listed for rent and the first tenant moved in in October. Advertising in August and September cost $400. What is deductible in 2025?",
    opts: [
      { k: "A", ru: "$6 700", en: "$6,700" },
      { k: "B", ru: "$400", en: "$400" },
      { k: "C", ru: "Ничего до октября", en: "Nothing until October" },
      { k: "D", ru: "$6 300", en: "$6,300" }
    ],
    correct: "B",
    why: {
      A: { ru: "Работы до ввода объекта в эксплуатацию приводят его в пригодное состояние и входят в базу, а не вычитаются.", en: "Work done before the property is placed in service readies it for use and goes into basis rather than being deducted." },
      B: { ru: "Верно. Расходы вычитаются с момента, когда объект стал доступен для сдачи, то есть с августа. $6 300 подготовительных работ капитализируются и амортизируются.", en: "Correct. Expenses run from the time the property is available for rent, that is from August. The $6,300 of readying costs is capitalized and depreciated." },
      C: { ru: "Ждать первого арендатора не нужно: важна доступность объекта для сдачи, а не факт заселения.", en: "There is no need to wait for the first tenant: what matters is availability, not occupancy." },
      D: { ru: "Это как раз та часть, которая вычету не подлежит.", en: "That is precisely the part that cannot be deducted." }
    }
  },
  {
    sec: "s32",
    ru: "В сдаваемом доме заменены все двадцать окон за $27 000. Прежние окна были исправны, новые — энергосберегающие. Как учитывается расход?",
    en: "All twenty windows in a rental house were replaced for $27,000. The old windows worked; the new ones are energy-efficient. How is the cost treated?",
    opts: [
      { k: "A", ru: "Вычитается целиком как ремонт", en: "Deducted in full as a repair" },
      { k: "B", ru: "Капитализируется: заменена существенная часть объекта", en: "Capitalized: a major component was replaced" },
      { k: "C", ru: "Вычитается целиком, поскольку окна работали и до замены", en: "Deducted in full, since the windows worked before the replacement" },
      { k: "D", ru: "Делится пополам между ремонтом и улучшением", en: "Split evenly between repair and improvement" }
    ],
    correct: "B",
    why: {
      A: { ru: "Замена одного разбитого стекла была бы ремонтом. Замена всех окон — другой масштаб.", en: "Replacing one broken pane would be a repair. Replacing every window is a different scale." },
      B: { ru: "Верно. Замена существенной части объекта — восстановление, расход капитализируется и возмещается через амортизацию. Улучшение характеристик добавляет к этому ещё один признак.", en: "Correct. Replacing a major component is a restoration: the cost is capitalized and recovered through depreciation. The improved performance adds a second ground for the same conclusion." },
      C: { ru: "Исправность прежних окон не спасает: восстановление возникает и при замене работоспособной существенной части.", en: "The old windows working does not help: a restoration arises even when a functioning major component is replaced." },
      D: { ru: "Такого деления правила не предусматривают.", en: "The rules provide for no such split." }
    }
  },
  {
    sec: "s32",
    ru: "Владелец сам, без подрядчиков, отремонтировал крышу сдаваемого дома. Работа заняла три недели; расценки подрядчиков за такую работу — $9 000. Материалы обошлись в $2 100. Что вычитается?",
    en: "An owner repaired the roof of a rental house personally, without contractors. The job took three weeks; contractors would have charged $9,000. Materials cost $2,100. What is deductible?",
    opts: [
      { k: "A", ru: "$11 100", en: "$11,100" },
      { k: "B", ru: "$9 000", en: "$9,000" },
      { k: "C", ru: "$2 100", en: "$2,100" },
      { k: "D", ru: "Ничего: работа выполнена собственными силами", en: "Nothing: the work was done in-house" }
    ],
    correct: "C",
    why: {
      A: { ru: "Сюда включена стоимость собственного труда, которая не вычитается.", en: "This includes the value of the owner’s own labour, which is not deductible." },
      B: { ru: "Стоимость вашего собственного труда в вычет не входит: она никогда не была включена в доход.", en: "The value of your own labour is not deductible: it was never taken into income." },
      C: { ru: "Верно. Вычитаются только реально понесённые расходы — материалы. Ремонт крыши без замены самой кровли остаётся текущим ремонтом.", en: "Correct. Only costs actually incurred are deductible — the materials. Repairing a roof without replacing the covering itself remains a current repair." },
      D: { ru: "Материалы куплены за деньги и вычитаются.", en: "The materials were bought with money and are deductible." }
    }
  },
  {
    sec: "s32",
    ru: "Квартира, служившая основным жильём, переведена в аренду. Скорректированный базис на дату перевода — $215 000, рыночная стоимость — $186 000. Какова база для амортизации?",
    en: "A flat that served as a main home is converted to rental use. Its adjusted basis at conversion is $215,000 and its fair market value $186,000. What is the depreciable basis?",
    opts: [
      { k: "A", ru: "$215 000", en: "$215,000" },
      { k: "B", ru: "$186 000", en: "$186,000" },
      { k: "C", ru: "$200 500 — среднее из двух величин", en: "$200,500 — the average of the two" },
      { k: "D", ru: "Первоначальная цена покупки", en: "The original purchase price" }
    ],
    correct: "B",
    why: {
      A: { ru: "Скорректированный базис берётся, только если он меньше рыночной стоимости.", en: "Adjusted basis is used only when it is the lower of the two." },
      B: { ru: "Верно. При переводе жилья в аренду база для амортизации — меньшая из скорректированного базиса и рыночной стоимости на дату перевода. Падение стоимости за время личного пользования через амортизацию не возмещается.", en: "Correct. On converting a home to rental use the depreciable basis is the lesser of adjusted basis and fair market value at conversion. A decline in value during personal use is not recovered through depreciation." },
      C: { ru: "Усреднения правило не предусматривает.", en: "The rule provides for no averaging." },
      D: { ru: "Первоначальная цена уже учтена внутри скорректированного базиса.", en: "The original price is already inside the adjusted basis." }
    }
  },
  {
    sec: "s32",
    ru: "Владелец десять лет сдавал дом, но амортизацию в декларациях не заявлял ни разу. Разрешённая за эти годы амортизация составила бы $74 000. Дом продан. Как это влияет на базис?",
    en: "An owner rented out a house for ten years but never claimed depreciation. The allowable depreciation for those years would have been $74,000. The house is sold. How does this affect basis?",
    opts: [
      { k: "A", ru: "Базис не уменьшается: вычет не заявлялся", en: "Basis is not reduced: no deduction was claimed" },
      { k: "B", ru: "Базис уменьшается на $74 000", en: "Basis is reduced by $74,000" },
      { k: "C", ru: "Базис уменьшается на половину суммы", en: "Basis is reduced by half the amount" },
      { k: "D", ru: "Базис увеличивается на $74 000", en: "Basis is increased by $74,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это самая частая ошибка. Базис уменьшается на амортизацию разрешённую или взятую — по большей из двух величин.", en: "This is the commonest error. Basis is reduced by depreciation allowed or allowable — whichever is greater." },
      B: { ru: "Верно. Отказ заявлять амортизацию базис не сохраняет: прибыль от продажи всё равно считается от уменьшенного базиса, а вычет за прошедшие годы просто потерян.", en: "Correct. Declining to claim depreciation does not preserve basis: the gain is still computed from the reduced basis, and the deductions for past years are simply lost." },
      C: { ru: "Деления пополам правило не знает.", en: "The rule knows no halving." },
      D: { ru: "Амортизация базис только уменьшает.", en: "Depreciation only reduces basis." }
    }
  },
  {
    sec: "s33",
    ru: "Дача сдавалась по рыночной цене 240 дней. Владелец пользовался ею 22 дня. Использовалась ли она как дом?",
    en: "A holiday home was rented at a fair price for 240 days and used personally for 22 days. Was it used as a home?",
    opts: [
      { k: "A", ru: "Да: 22 дня больше 14", en: "Yes: 22 days exceeds 14" },
      { k: "B", ru: "Нет: порог равен 24 дням", en: "No: the threshold is 24 days" },
      { k: "C", ru: "Да: 22 дня больше 10% от 240", en: "Yes: 22 days exceeds 10% of 240" },
      { k: "D", ru: "Нет: порог равен 38 дням", en: "No: the threshold is 38 days" }
    ],
    correct: "B",
    why: {
      A: { ru: "Берётся большая из двух величин, а не первая попавшаяся. При 240 днях сдачи 10% дают 24, и это больше 14.", en: "The greater of the two figures applies, not the first one. With 240 rental days, 10% is 24, which exceeds 14." },
      B: { ru: "Верно. Порог — большая из 14 дней и 10% от 240, то есть 24 дня. Личное пользование 22 дня его не превышает, поэтому жильё домом не считается и убыток в принципе возможен.", en: "Correct. The threshold is the greater of 14 days and 10% of 240, that is 24 days. Personal use of 22 days does not exceed it, so the dwelling is not used as a home and a loss is possible in principle." },
      C: { ru: "10% от 240 — это 24, а 22 меньше 24.", en: "10% of 240 is 24, and 22 is less than 24." },
      D: { ru: "38 — это сумма 14 и 24. Величины не складываются.", en: "38 adds 14 and 24. The figures are not summed." }
    }
  },
  {
    sec: "s33",
    ru: "Владелец провёл в сдаваемом доме 19 дней. Из них 5 дней он с утра до вечера менял полы, а вечерами семья отдыхала. Дом сдавался 90 дней по рыночной цене. Сколько дней личного пользования?",
    en: "An owner spent 19 days at a rental house. On five of them he replaced flooring from morning to night while the family relaxed in the evenings. The house was rented at fair price for 90 days. How many days of personal use?",
    opts: [
      { k: "A", ru: "19", en: "19" },
      { k: "B", ru: "14", en: "14" },
      { k: "C", ru: "5", en: "5" },
      { k: "D", ru: "0", en: "0" }
    ],
    correct: "B",
    why: {
      A: { ru: "Дни, целиком отданные ремонту, из личного пользования исключаются.", en: "Days spent substantially full time on repairs are excluded from personal use." },
      B: { ru: "Верно. 19 − 5 = 14. Отдых семьи в те же дни ничего не меняет: правило прямо допускает это. Порог здесь — большая из 14 и 9, то есть 14, и 14 его не превышает, поэтому домом жильё не считается.", en: "Correct. 19 − 5 = 14. The family relaxing on those same days changes nothing: the rule expressly allows it. The threshold here is the greater of 14 and 9, that is 14, and 14 does not exceed it, so the dwelling is not used as a home." },
      C: { ru: "Это как раз исключаемые дни, а не личное пользование.", en: "Those are the excluded days, not the personal use." },
      D: { ru: "Четырнадцать дней обычного пребывания остаются личным пользованием.", en: "The fourteen ordinary days of occupancy remain personal use." }
    }
  },
  {
    sec: "s33",
    ru: "Сестра владельца живёт в его квартире круглый год, платит рыночную цену и другого жилья не имеет. Брат владельца провёл там две недели отпуска, заплатив половину рыночной цены. Сколько дней личного пользования у владельца?",
    en: "The owner’s sister lives in the flat all year, pays a fair rental price and has no other home. The owner’s brother spent a fortnight there on holiday, paying half the market rate. How many days of personal use does the owner have?",
    opts: [
      { k: "A", ru: "365: оба — члены семьи", en: "365: both are family members" },
      { k: "B", ru: "14", en: "14" },
      { k: "C", ru: "0", en: "0" },
      { k: "D", ru: "351", en: "351" }
    ],
    correct: "B",
    why: {
      A: { ru: "Родство само по себе личного пользования не создаёт: важны цена и то, основной ли это дом.", en: "Kinship alone does not create personal use: what matters is the price and whether it is a main home." },
      B: { ru: "Верно. Сестра платит рыночную цену и живёт как в основном доме — её дни личным пользованием не считаются. Брат платит ниже рыночной, поэтому все 14 дней идут в личное пользование.", en: "Correct. The sister pays a fair price and uses it as her main home, so her days are not personal use. The brother pays below market, so all 14 of his days count as personal use." },
      C: { ru: "Дни брата исключить нельзя: он платит ниже рыночной цены.", en: "The brother’s days cannot be excluded: he pays below the fair rental price." },
      D: { ru: "Здесь дни сестры засчитаны, а дни брата — нет. Всё ровно наоборот.", en: "This counts the sister’s days and not the brother’s. It is exactly the wrong way round." }
    }
  },
  {
    sec: "s33",
    ru: "Владелец живёт в доме сам и в дни городского фестиваля сдал его на 10 дней за $14 000. Расходы, приходящиеся на эти дни, составили $900. Что попадёт в декларацию?",
    en: "An owner lives in the house and let it for 10 days during a city festival for $14,000. Expenses allocable to those days were $900. What goes on the return?",
    opts: [
      { k: "A", ru: "Доход $14 000 и расход $900", en: "$14,000 of income and $900 of expense" },
      { k: "B", ru: "Доход $14 000, расходы не вычитаются", en: "$14,000 of income and no deductible expenses" },
      { k: "C", ru: "Ни дохода, ни расходов по аренде", en: "Neither rental income nor rental expenses" },
      { k: "D", ru: "Доход $14 000 в Schedule 1, строке 8j", en: "$14,000 on Schedule 1, line 8j" }
    ],
    correct: "C",
    why: {
      A: { ru: "Это обычные правила аренды, которые здесь не применяются вовсе.", en: "Those are the ordinary rental rules, which do not apply here at all." },
      B: { ru: "Доход тоже не включается — в этом и состоит смысл правила.", en: "The income is excluded as well — that is the whole point of the rule." },
      C: { ru: "Верно. Жильё используется как дом и сдано менее 15 дней: доход не включается вовсе, расходы по аренде не вычитаются. Проценты по ипотеке и налоги идут в Schedule A по обычным правилам.", en: "Correct. The dwelling is used as a home and was rented fewer than 15 days: the income is excluded entirely and rental expenses are not deducted. Mortgage interest and taxes go on Schedule A as usual." },
      D: { ru: "Строка 8j предназначена для деятельности не ради прибыли, а не для этого правила.", en: "Line 8j is for a not-for-profit activity, not for this rule." }
    }
  },
  {
    sec: "s33",
    ru: "Жильё признано использованным как дом. Доход от аренды $9 000. Приходящиеся на аренду проценты и налоги — $6 500, операционные расходы — $3 800, амортизация — $2 900. Какая сумма переносится на следующий год?",
    en: "A dwelling is used as a home. Rental income is $9,000. The rental share of interest and taxes is $6,500, operating expenses $3,800 and depreciation $2,900. How much carries forward?",
    opts: [
      { k: "A", ru: "$4 200", en: "$4,200" },
      { k: "B", ru: "$2 900", en: "$2,900" },
      { k: "C", ru: "Ничего: убыток $4 200 вычитается", en: "Nothing: the $4,200 loss is deductible" },
      { k: "D", ru: "$6 700", en: "$6,700" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Первыми идут проценты и налоги $6 500 — остаётся $2 500. Операционных расходов $3 800, из них проходит $2 500, а $1 300 переносится. Амортизация $2 900 переносится целиком. Итого $1 300 + $2 900 = $4 200.", en: "Correct. Interest and taxes of $6,500 go first, leaving $2,500. Of the $3,800 of operating expenses, $2,500 is allowed and $1,300 carries forward. The full $2,900 of depreciation carries forward. Together $1,300 + $2,900 = $4,200." },
      B: { ru: "Перенесена только амортизация. Часть операционных расходов тоже не поместилась в доход.", en: "Only depreciation is carried. Part of the operating expenses did not fit within the income either." },
      C: { ru: "Убытка в этом режиме не возникает: вычет ограничен размером дохода.", en: "No loss arises in this regime: the deduction is capped at the income." },
      D: { ru: "$6 700 — это все операционные расходы плюс вся амортизация. Так выходит, если забыть, что после процентов и налогов от дохода осталось ещё $2 500.", en: "$6,700 is all the operating expenses plus all the depreciation. That follows from forgetting that $2,500 of income remains after interest and taxes." }
    }
  },
  {
    sec: "s33",
    ru: "Дача, признанная домом владельца, принесла в 2025 году убыток по расчёту $5 000, который вычесть не удалось. У владельца есть пассивный доход $12 000 от товарищества. Может ли он погасить остаток этим доходом?",
    en: "A holiday home treated as the owner’s home produced a computed $5,000 loss that could not be deducted. The owner has $12,000 of passive income from a partnership. Can that income absorb the balance?",
    opts: [
      { k: "A", ru: "Да: приостановленный убыток гасится любым пассивным доходом", en: "Yes: a suspended loss is absorbed by any passive income" },
      { k: "B", ru: "Нет: остаток переносится и ждёт дохода от аренды этого же объекта", en: "No: the balance carries forward and waits for rental income from the same property" },
      { k: "C", ru: "Да, но только в пределах $2 500", en: "Yes, but only up to $2,500" },
      { k: "D", ru: "Нет: остаток пропадает безвозвратно", en: "No: the balance is lost for good" }
    ],
    correct: "B",
    why: {
      A: { ru: "Пассивные правила здесь не работают вообще: жильё, используемое как дом, им не подчиняется.", en: "The passive rules do not operate here at all: a dwelling used as a home is outside them." },
      B: { ru: "Верно. Ограничение идёт по §280A, а не по правилам пассивной деятельности: остаток переносится на следующий год и снова встаёт в очередь против дохода от аренды того же объекта.", en: "Correct. The limitation is under section 280A rather than the passive activity rules: the balance carries to the next year and queues again against rental income from the same property." },
      C: { ru: "Никакого частичного зачёта правило не предусматривает.", en: "The rule provides for no partial offset." },
      D: { ru: "Остаток не пропадает, он переносится вперёд.", en: "The balance is not lost; it carries forward." }
    }
  },
  {
    sec: "s34",
    ru: "В каком порядке применяются ограничения к убытку некорпоративного налогоплательщика?",
    en: "In what order are the limitations applied to a noncorporate taxpayer’s loss?",
    opts: [
      { k: "A", ru: "Пассивная деятельность → базис → риск → избыточный убыток", en: "Passive activity → basis → at-risk → excess business loss" },
      { k: "B", ru: "Базис → риск → пассивная деятельность → избыточный убыток бизнеса", en: "Basis → at-risk → passive activity → excess business loss" },
      { k: "C", ru: "Риск → базис → избыточный убыток → пассивная деятельность", en: "At-risk → basis → excess business loss → passive activity" },
      { k: "D", ru: "Порядок значения не имеет: результат один и тот же", en: "The order does not matter: the result is the same" }
    ],
    correct: "B",
    why: {
      A: { ru: "Пассивные правила применяются третьими, а не первыми.", en: "The passive rules come third, not first." },
      B: { ru: "Верно. Сначала сколько вложено, затем сколько реально теряется, затем участвовали ли вы сами, и в конце общий потолок по форме 461.", en: "Correct. First how much was put in, then how much is genuinely at stake, then whether you participated yourself, and finally the overall cap on Form 461." },
      C: { ru: "Базис проверяется раньше риска, а избыточный убыток — последним.", en: "Basis comes before at-risk, and the excess business loss is last." },
      D: { ru: "Порядок меняет ответ: каждый фильтр работает с тем, что пропустил предыдущий.", en: "The order changes the answer: each filter works on what the previous one let through." }
    }
  },
  {
    sec: "s34",
    ru: "Налогоплательщик вложил в деятельность $60 000 собственных средств и взял безоборотный заём $40 000 под залог оборудования этой же деятельности. Доля убытка за год — $85 000. Сколько проходит лимит риска?",
    en: "A taxpayer put $60,000 of their own money into an activity and took a $40,000 nonrecourse loan secured by that activity’s own equipment. The year’s share of loss is $85,000. How much passes the at-risk limit?",
    opts: [
      { k: "A", ru: "$85 000", en: "$85,000" },
      { k: "B", ru: "$100 000", en: "$100,000" },
      { k: "C", ru: "$60 000", en: "$60,000" },
      { k: "D", ru: "$40 000", en: "$40,000" }
    ],
    correct: "C",
    why: {
      A: { ru: "Это весь убыток. Лимит риска пропускает лишь то, чем вы действительно рискуете.", en: "That is the whole loss. The at-risk limit passes only what you genuinely stand to lose." },
      B: { ru: "Это базис. Безоборотный заём в базис попал, но под риском не находится.", en: "That is basis. The nonrecourse loan is in basis but is not at risk." },
      C: { ru: "Верно. Под риском только собственные $60 000: по безоборотному займу под имущество самой деятельности вы не отвечаете ничем. Исключение сделано только для квалифицированного финансирования недвижимости, а здесь заложено оборудование.", en: "Correct. Only the $60,000 of own funds is at risk: on a nonrecourse loan secured by the activity’s own property you risk nothing. The exception covers only qualified nonrecourse financing of real property, and here the security is equipment." },
      D: { ru: "Это как раз та часть, которая под риском не находится.", en: "That is precisely the part that is not at risk." }
    }
  },
  {
    sec: "s34",
    ru: "Инвестор владеет доходным зданием. Оно приобретено за счёт безоборотного займа от независимого банка, обеспеченного этим же зданием, не конвертируемого в долю участия. Под риском ли эта сумма?",
    en: "An investor owns a commercial building bought with a nonrecourse loan from an unrelated bank, secured by that building and not convertible into an ownership interest. Is that amount at risk?",
    opts: [
      { k: "A", ru: "Нет: заём безоборотный", en: "No: the loan is nonrecourse" },
      { k: "B", ru: "Да: это квалифицированное безоборотное финансирование недвижимости", en: "Yes: this is qualified nonrecourse financing of real property" },
      { k: "C", ru: "Да, но только если инвестор лично поручился", en: "Yes, but only if the investor gave a personal guarantee" },
      { k: "D", ru: "Нет: заём получен не от государственного органа", en: "No: the loan did not come from a government body" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это общее правило, но для недвижимости из него сделано исключение.", en: "That is the general rule, but real property has an exception." },
      B: { ru: "Верно. Все четыре условия соблюдены: заём взят в связи с владением недвижимостью, обеспечен ею, не конвертируется в долю и получен от квалифицированного кредитора. Личной ответственности нет ни у кого — в этом и смысл исключения.", en: "Correct. All four conditions are met: borrowed in connection with holding real property, secured by it, not convertible into an ownership interest, and obtained from a qualified person. Nobody is personally liable — that is the point of the exception." },
      C: { ru: "Личное поручительство сделало бы заём оборотным, и исключение стало бы не нужно.", en: "A personal guarantee would make the loan recourse, and the exception would not be needed." },
      D: { ru: "Достаточно займа от квалифицированного кредитора; государственный орган — лишь один из вариантов.", en: "A loan from a qualified person suffices; a government body is only one of the options." }
    }
  },
  {
    sec: "s34",
    ru: "Совладелец мастерской отработал в ней 140 часов за год. Второй совладелец отработал 130 часов, наёмный управляющий — 900 часов. Существенно ли участие первого?",
    en: "A co-owner of a workshop worked 140 hours in it during the year. The other co-owner worked 130 hours and a hired manager 900 hours. Does the first co-owner materially participate?",
    opts: [
      { k: "A", ru: "Да: более 100 часов и не меньше, чем у любого другого", en: "Yes: more than 100 hours and at least as much as anyone else" },
      { k: "B", ru: "Нет: 140 часов меньше 500", en: "No: 140 hours is less than 500" },
      { k: "C", ru: "Нет: управляющий отработал больше", en: "No: the manager worked more" },
      { k: "D", ru: "Да: 140 часов больше 100", en: "Yes: 140 hours exceeds 100" }
    ],
    correct: "C",
    why: {
      A: { ru: "Второе условие теста 3 нарушено: наёмный управляющий отработал 900 часов, и он учитывается, хотя доли в деятельности не имеет.", en: "The second half of test 3 fails: the hired manager worked 900 hours, and he counts even though he owns no interest." },
      B: { ru: "Верный факт, но недостаточный вывод: тест 1 — не единственный из семи.", en: "A true fact but not a sufficient conclusion: test 1 is not the only one of the seven." },
      C: { ru: "Верно. Тест 3 требует не только более 100 часов, но и участия не меньшего, чем у любого другого лица, включая работников без доли. 140 против 900 этому не отвечает, а прочие тесты по условию не проходят.", en: "Correct. Test 3 requires not only more than 100 hours but participation at least equal to any other individual, including employees with no interest. 140 against 900 fails that, and the other tests are not met on these facts." },
      D: { ru: "Само по себе превышение 100 часов ничего не даёт: у теста 3 два условия, а у теста 7 сто часов — это нижняя граница, а не достаточное условие.", en: "Exceeding 100 hours by itself gives nothing: test 3 has two conditions, and in test 7 one hundred hours is a floor, not a sufficient condition." }
    }
  },
  {
    sec: "s34",
    ru: "Владелец лично управляет четырьмя доходными домами и тратит на это 1 900 часов в год. Другой работы у него нет. Является ли деятельность пассивной?",
    en: "An owner personally manages four rental buildings and spends 1,900 hours a year doing it. He has no other work. Is the activity passive?",
    opts: [
      { k: "A", ru: "Да: аренда пассивна по определению, и часы этого не меняют", en: "Yes: a rental is passive by definition and hours do not change that" },
      { k: "B", ru: "Нет: выполнены оба условия профессионала рынка недвижимости", en: "No: both conditions for a real estate professional are met" },
      { k: "C", ru: "Да: 1 900 часов меньше 2 000", en: "Yes: 1,900 hours is less than 2,000" },
      { k: "D", ru: "Нет: пройден тест 500 часов", en: "No: the 500-hour test is met" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это верно как общее правило, но у него есть именно одно исключение, и оно здесь сработало.", en: "True as a general rule, but it has exactly one exception, and here that exception applies." },
      B: { ru: "Верно. Более 750 часов в сферах недвижимости с существенным участием и более половины всех личных услуг за год — других работ нет вовсе. Автоматическая пассивность снимается.", en: "Correct. More than 750 hours in real property trades with material participation, and more than half of all personal services for the year — there is no other work at all. The automatic passive label is removed." },
      C: { ru: "Порога в 2 000 часов не существует. Порог — 750.", en: "There is no 2,000-hour threshold. The threshold is 750." },
      D: { ru: "Тесты существенного участия аренду из пассивной категории не выводят: она пассивна по определению, а не из-за участия.", en: "The material participation tests do not lift a rental out of the passive category: it is passive by definition, not for want of participation." }
    }
  },
  {
    sec: "s34",
    ru: "Супруги подают совместную декларацию. Муж отработал в сфере недвижимости 500 часов, жена — 400 часов; у обоих это единственная работа. Признаётся ли кто-то профессионалом рынка недвижимости?",
    en: "Spouses file jointly. The husband worked 500 hours in real property trades and the wife 400 hours; for both it is their only work. Does either qualify as a real estate professional?",
    opts: [
      { k: "A", ru: "Да: вместе 900 часов, порог взят", en: "Yes: together 900 hours clears the threshold" },
      { k: "B", ru: "Нет: ни один из супругов в одиночку не набрал более 750 часов", en: "No: neither spouse alone exceeded 750 hours" },
      { k: "C", ru: "Да: достаточно, чтобы порог взял хотя бы один из супругов, а совместная декларация распространяет статус", en: "Yes: it is enough for one spouse to qualify, and a joint return extends the status" },
      { k: "D", ru: "Да, у мужа: 500 часов — это тест существенного участия", en: "Yes, the husband: 500 hours is the material participation test" }
    ],
    correct: "B",
    why: {
      A: { ru: "Часы супругов для этого порога не складываются, даже при совместной декларации.", en: "Spouses’ hours are not added for this threshold, even on a joint return." },
      B: { ru: "Верно. Порог в 750 часов должен взять кто-то один. 500 и 400 по отдельности его не достигают, и статус не возникает ни у кого.", en: "Correct. One spouse must clear the 750 hours alone. Neither 500 nor 400 does, and neither spouse qualifies." },
      C: { ru: "Условие верное по форме, но по факту порог не взял никто.", en: "The condition is correctly stated but on these facts nobody cleared the threshold." },
      D: { ru: "500 часов — тест существенного участия, а не порог профессионала. Это разные величины из разных правил.", en: "500 hours is the material participation test, not the professional threshold. They are different figures from different rules." }
    }
  },
  {
    sec: "s34",
    ru: "Налогоплательщик владеет 6% долей в товариществе, сдающем жилой комплекс, и участвует в одобрении арендаторов и утверждении расходов. Его доля убытка — $9 000, MAGI — $80 000. Сколько он вычтет по особому вычету?",
    en: "A taxpayer owns a 6% interest in a partnership renting out a housing complex and takes part in approving tenants and expenditures. The share of loss is $9,000 and MAGI is $80,000. How much may be deducted under the special allowance?",
    opts: [
      { k: "A", ru: "$9 000: убыток меньше $25 000, а MAGI ниже порога", en: "$9,000: the loss is under $25,000 and MAGI is below the threshold" },
      { k: "B", ru: "$25 000", en: "$25,000" },
      { k: "C", ru: "Ноль: доля меньше 10% по стоимости", en: "Zero: the interest is less than 10% by value" },
      { k: "D", ru: "$1 500 — пропорционально доле", en: "$1,500 — in proportion to the interest" }
    ],
    correct: "C",
    why: {
      A: { ru: "Оба факта верны, но проверено не то: до размера убытка и дохода нужно убедиться в активном участии.", en: "Both facts are true but the wrong thing was checked: before the loss and the income comes active participation." },
      B: { ru: "Это максимум вычета, а не вычитаемая сумма, и права на него в этой ситуации нет.", en: "That is the maximum allowance, not the amount deductible, and here there is no right to it." },
      C: { ru: "Верно. Активно участвующим не признаётся тот, чья доля вместе с долей супруга составляет менее 10% по стоимости всех долей. Управленческие решения этого не восполняют, и весь убыток приостанавливается.", en: "Correct. Someone whose interest, together with a spouse’s, is under 10% by value of all interests is not treated as actively participating. Management decisions do not make up for it, and the whole loss is suspended." },
      D: { ru: "Пропорционального уменьшения вычета правило не предусматривает: условие о доле работает как порог допуска.", en: "The rule provides for no pro-rata reduction: the interest requirement is a gate, not a scale." }
    }
  },
  {
    sec: "s34",
    ru: "Одинокий налогоплательщик активно участвует в сдаче квартиры, доля 100%. Убыток от аренды $23 000, MAGI $141 000, пассивного дохода нет. Сколько вычитается в 2025 году?",
    en: "A single taxpayer actively participates in renting out a flat and owns 100% of it. The rental loss is $23,000, MAGI is $141,000 and there is no passive income. How much is deductible in 2025?",
    opts: [
      { k: "A", ru: "$4 500", en: "$4,500" },
      { k: "B", ru: "$23 000", en: "$23,000" },
      { k: "C", ru: "$25 000", en: "$25,000" },
      { k: "D", ru: "Ноль", en: "Zero" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Превышение MAGI над $100 000 составляет $41 000, сокращение — половина, то есть $20 500. Вычет $25 000 − $20 500 = $4 500. Оставшиеся $18 500 приостанавливаются.", en: "Correct. MAGI exceeds $100,000 by $41,000 and the reduction is half of that, $20,500. The allowance is $25,000 − $20,500 = $4,500. The remaining $18,500 is suspended." },
      B: { ru: "Весь убыток вычитался бы при MAGI ниже $100 000.", en: "The whole loss would be deductible with MAGI below $100,000." },
      C: { ru: "$25 000 — это потолок вычета до сокращения, а сокращение здесь значительное.", en: "$25,000 is the cap before the phaseout, and here the phaseout is substantial." },
      D: { ru: "Ноль был бы при MAGI $150 000 и выше. $141 000 до этого не дотягивает.", en: "Zero would apply at MAGI of $150,000 or more. $141,000 falls short of that." }
    }
  },
  {
    sec: "s34",
    ru: "У налогоплательщика приостановленный пассивный убыток $34 000 по единственному объекту аренды. Он продаёт объект посторонней компании с прибылью $12 000. Что происходит?",
    en: "A taxpayer has $34,000 of suspended passive losses on a single rental property and sells it to an unrelated company at a $12,000 gain. What happens?",
    opts: [
      { k: "A", ru: "Вычитается $12 000, остаток $22 000 продолжает ждать", en: "$12,000 is deducted and the $22,000 balance keeps waiting" },
      { k: "B", ru: "Весь убыток $34 000 высвобождается, прибыль $12 000 облагается", en: "The full $34,000 is released and the $12,000 gain is taxed" },
      { k: "C", ru: "Убыток пропадает: объект продан", en: "The loss is lost: the property is gone" },
      { k: "D", ru: "Вычитается $25 000 — предел особого вычета", en: "$25,000 is deducted — the special allowance cap" }
    ],
    correct: "B",
    why: {
      A: { ru: "Так работает обычное погашение пассивным доходом. При полном выбытии правило другое.", en: "That is how ordinary absorption by passive income works. A complete disposition follows a different rule." },
      B: { ru: "Верно. Все три условия соблюдены: выбытие полное, сделка налогооблагаемая, покупатель посторонний. Приостановленный убыток высвобождается целиком, а не только против прибыли от продажи.", en: "Correct. All three conditions are met: the disposition is complete, the transaction is taxable, and the buyer is unrelated. The suspended loss is released in full, not merely against the gain on sale." },
      C: { ru: "Полное выбытие убыток как раз высвобождает, а не уничтожает.", en: "A complete disposition releases the loss rather than destroying it." },
      D: { ru: "Предел особого вычета к высвобождению при выбытии отношения не имеет.", en: "The special allowance cap has nothing to do with release on disposition." }
    }
  },
  {
    sec: "s34",
    ru: "Владелец продаёт объект аренды с приостановленным убытком $16 000 своему брату по рыночной цене. Высвобождается ли убыток?",
    en: "An owner sells a rental property carrying $16,000 of suspended losses to his brother at fair market value. Are the losses released?",
    opts: [
      { k: "A", ru: "Да: сделка возмездная и налогооблагаемая", en: "Yes: the sale is for value and taxable" },
      { k: "B", ru: "Нет: покупатель — связанное лицо", en: "No: the buyer is a related party" },
      { k: "C", ru: "Да, но только наполовину", en: "Yes, but only half of it" },
      { k: "D", ru: "Нет: убыток прибавляется к базису у брата", en: "No: the loss is added to the brother’s basis" }
    ],
    correct: "B",
    why: {
      A: { ru: "Двух условий из трёх мало. Третье — сделка с посторонним лицом.", en: "Two of the three conditions are not enough. The third is a transfer to an unrelated party." },
      B: { ru: "Верно. Продажа связанному лицу высвобождения не даёт: убыток остаётся приостановленным у продавца и ждёт выбытия объекта из круга связанных лиц.", en: "Correct. A sale to a related party gives no release: the loss stays suspended with the seller and waits until the property leaves the related group." },
      C: { ru: "Частичного высвобождения правило не знает.", en: "The rule knows no partial release." },
      D: { ru: "Прибавление к базису происходит при дарении, а не при продаже связанному лицу.", en: "Adding to basis happens on a gift, not on a sale to a related party." }
    }
  },
  {
    sec: "s34",
    ru: "Налогоплательщик подаёт декларацию как одинокий. После применения базиса, риска и пассивных правил его совокупный убыток от бизнеса составил $402 000. Сколько вычитается в 2025 году?",
    en: "A single filer’s aggregate business loss, after applying basis, at-risk and the passive rules, is $402,000. How much is deductible in 2025?",
    opts: [
      { k: "A", ru: "$402 000", en: "$402,000" },
      { k: "B", ru: "$313 000; остальное переносится вперёд как чистый операционный убыток", en: "$313,000; the rest carries forward as a net operating loss" },
      { k: "C", ru: "$626 000", en: "$626,000" },
      { k: "D", ru: "$313 000; остальные $89 000 пропадают", en: "$313,000; the other $89,000 is lost" }
    ],
    correct: "B",
    why: {
      A: { ru: "Четвёртый фильтр ограничивает совокупный убыток порогом.", en: "The fourth filter caps the aggregate loss at the threshold." },
      B: { ru: "Верно. Порог на 2025 год — $313 000 для одинокого налогоплательщика. Избыточные $89 000 не пропадают: они переносятся вперёд как чистый операционный убыток.", en: "Correct. The 2025 threshold is $313,000 for a single filer. The excess $89,000 is not lost: it carries forward as a net operating loss." },
      C: { ru: "$626 000 — порог при совместной подаче супругов.", en: "$626,000 is the threshold on a joint return." },
      D: { ru: "Сумма верна, вывод — нет. Избыточный убыток переносится вперёд.", en: "The figure is right but the conclusion is not. The excess loss carries forward." }
    }
  },
  {
    sec: "s34",
    ru: "К кому правила пассивной деятельности применяются напрямую?",
    en: "To whom do the passive activity rules apply directly?",
    opts: [
      { k: "A", ru: "К партнёрствам и S-корпорациям", en: "To partnerships and S corporations" },
      { k: "B", ru: "К физическим лицам, наследственным массам, трастам, корпорациям личных услуг и закрытым корпорациям", en: "To individuals, estates and trusts, and to closely held corporations and personal service corporations" },
      { k: "C", ru: "К любым корпорациям без исключения", en: "To all corporations without exception" },
      { k: "D", ru: "К доверительным трастам учредителя", en: "To grantor trusts" }
    ],
    correct: "B",
    why: {
      A: { ru: "К ним правила напрямую не применяются — они применяются к их владельцам, получающим K-1.", en: "They are not subject directly — the rules apply to their owners, who receive Schedule K-1." },
      B: { ru: "Верно. Именно этот перечень. Партнёрства и S-корпорации в него не входят, но их владельцы применяют правила у себя.", en: "Correct. That is the list. Partnerships and S corporations are outside it, but their owners apply the rules at their own level." },
      C: { ru: "Обычная C-корпорация под пассивные правила не подпадает, если она не закрытая и не корпорация личных услуг.", en: "An ordinary C corporation is outside the passive rules unless it is closely held or a personal service corporation." },
      D: { ru: "Доверительные трасты учредителя прямо исключены: доход и вычеты отражаются у учредителя.", en: "Grantor trusts are expressly excluded: the income and deductions are reported by the grantor." }
    }
  },
  {
    sec: "s34",
    ru: "Владелец сдаёт дачу через сайт бронирования: за 2025 год 40 сдач, всего 200 дней, то есть в среднем 5 дней за одну сдачу. Владелец сам занимается уборкой и встречает гостей, набрав за год 620 часов. Убыток за год $19 000, пассивного дохода нет. Как он отражается?",
    en: "An owner rents out a cabin through a booking site: 40 rentals over 2025 totalling 200 days, an average of 5 days per rental. The owner does the cleaning and meets the guests, logging 620 hours for the year. The loss is $19,000 and there is no passive income. How is it treated?",
    opts: [
      { k: "A", ru: "Вычитается полностью: деятельность не является арендой, а участие существенно", en: "Fully deductible: the activity is not a rental and participation is material" },
      { k: "B", ru: "Вычитается $19 000 как особый вычет для активного участия", en: "$19,000 is deductible under the special allowance for active participation" },
      { k: "C", ru: "Приостанавливается целиком: аренда пассивна по определению", en: "Suspended in full: a rental is passive by definition" },
      { k: "D", ru: "Вычитается только $12 500", en: "Only $12,500 is deductible" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Средний срок пользования — 5 дней, то есть не больше семи, поэтому деятельность арендой для этих правил не считается. Она переходит в первый вид — торговля или бизнес, — а 620 часов дают существенное участие по тесту более 500 часов. Убыток непассивный и вычитается без потолка.", en: "Correct. The average period of customer use is 5 days, which is not more than seven, so the activity is not a rental for these rules. It moves into the first kind — a trade or business — and 620 hours meet material participation under the more-than-500-hours test. The loss is nonpassive and deductible with no ceiling." },
      B: { ru: "Особый вычет предназначен для пассивной аренды с активным участием и ограничен $25 000 с сокращением по доходу. Здесь он не нужен и не применяется.", en: "The special allowance is for a passive rental with active participation and is capped at $25,000 with an income phase-out. It is neither needed nor available here." },
      C: { ru: "Аренда пассивна по определению, но у определения шесть исключений. Средний срок в пять дней — первое из них.", en: "A rental is passive by definition, but the definition has six exceptions. A five-day average is the first of them." },
      D: { ru: "$12 500 — половина особого вычета при раздельной подаче супругов. К этому условию величина отношения не имеет.", en: "$12,500 is half the special allowance for married taxpayers filing separately. It has nothing to do with these facts." }
    }
  },
  {
    sec: "s34",
    ru: "Налогоплательщик владеет долей в партнёрстве, которое сдаёт складское помещение. Базис его доли на конец 2025 года — $8 000, сумма под риском — $14 000, распределённый ему убыток — $23 000, пассивного дохода нет. Какая сумма доходит до проверки на пассивность?",
    en: "A taxpayer holds an interest in a partnership that rents out a warehouse. At the end of 2025 the basis of the interest is $8,000, the amount at risk is $14,000, and the loss allocated to the taxpayer is $23,000, with no passive income. How much reaches the passive activity test?",
    opts: [
      { k: "A", ru: "$8 000", en: "$8,000" },
      { k: "B", ru: "$14 000", en: "$14,000" },
      { k: "C", ru: "$23 000", en: "$23,000" },
      { k: "D", ru: "$0: пассивный убыток без пассивного дохода не вычитается", en: "$0: a passive loss with no passive income is not deductible" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Первым работает лимит базиса: до проверки на риск доходит $8 000, а не $23 000. Сумма под риском больше базиса и потому ничего не отсекает. На пассивность проверяется $8 000; остальные $15 000 ждут восстановления базиса.", en: "Correct. The basis limit operates first: $8,000 reaches the at-risk test, not $23,000. The amount at risk exceeds basis and so cuts nothing. The passive test examines $8,000; the other $15,000 waits for basis to be restored." },
      B: { ru: "Сумма под риском применяется вторым фильтром и к тому, что пропустил первый. Начинать с неё — самая частая ошибка порядка.", en: "The at-risk amount is the second filter and applies to what the first let through. Starting there is the commonest ordering error." },
      C: { ru: "Полная сумма убытка не доходит даже до второго фильтра.", en: "The full loss does not reach even the second filter." },
      D: { ru: "Вопрос не о том, сколько вычитается в итоге, а о том, сколько доходит до третьего фильтра.", en: "The question is not how much is finally deductible but how much reaches the third filter." }
    }
  },
  {
    sec: "s31",
    ru: "Арендатор за свой счёт пристроил к складу навес. Арендная плата вносилась полностью и в срок, зачёта не было. По окончании аренды навес остался владельцу. Что показывает владелец?",
    en: "A tenant built a canopy onto the warehouse at their own expense. Rent was paid in full and on time, with nothing set off. When the lease ended the canopy stayed with the owner. What does the owner report?",
    opts: [
      { k: "A", ru: "Доход по рыночной стоимости навеса в год окончания аренды", en: "Income equal to the canopy's fair market value in the year the lease ends" },
      { k: "B", ru: "Дохода нет, и базис объекта на стоимость навеса не увеличивается", en: "No income, and the basis of the property is not increased by the canopy" },
      { k: "C", ru: "Дохода нет, но базис увеличивается на стоимость навеса", en: "No income, but the basis is increased by the canopy" },
      { k: "D", ru: "Доход по стоимости строительства в год постройки", en: "Income equal to the construction cost in the year it was built" }
    ],
    correct: "B",
    why: {
      A: { ru: "Доход возник бы, если бы навес шёл <strong>взамен арендной платы</strong>. Здесь плата вносилась полностью, значит улучшение платой не является.", en: "There would be income if the canopy had been <strong>in place of rent</strong>. Here the rent was paid in full, so the improvement is not rent." },
      B: { ru: "Верно. Стоимость улучшений, доставшихся арендодателю при прекращении аренды не взамен платы, из валового дохода исключается — и базис объекта на них не растёт. Налог не отменён, а отложен: он придёт приростом при продаже.", en: "Correct. The value of improvements coming to the landlord at the end of a lease, not in place of rent, is excluded from gross income — and the basis is not increased. The tax is deferred, not cancelled: it arrives as gain on a later sale." },
      C: { ru: "Половина ответа верна, половина нет. Именно отсутствие прибавки к базису и делает исключение временным.", en: "Half right and half wrong. It is precisely the absence of any basis increase that makes the exclusion temporary." },
      D: { ru: "Ни год постройки, ни затраты арендатора здесь ни при чём.", en: "Neither the year of construction nor the tenant's cost matters here." }
    }
  },
  {
    sec: "s31",
    ru: "Владелец здания заплатил арендатору $30 000, чтобы тот досрочно освободил помещение. Как эту сумму отражает <strong>арендатор</strong>?",
    en: "A building owner paid a tenant $30,000 to vacate early. How does the <strong>tenant</strong> report it?",
    opts: [
      { k: "A", ru: "Как обычный доход года получения", en: "As ordinary income for the year received" },
      { k: "B", ru: "Как выручку от выбытия имущества: сам договор аренды и есть выбывшее имущество", en: "As an amount realised on a disposition: the lease itself is the property given up" },
      { k: "C", ru: "Как возврат ранее уплаченной арендной платы, уменьшающий расходы", en: "As a refund of rent already paid, reducing the expense" },
      { k: "D", ru: "Не отражает никак: это компенсация неудобств", en: "Not at all: it compensates inconvenience" }
    ],
    correct: "B",
    why: {
      A: { ru: "Обычный доход — это ответ для <strong>арендодателя</strong>, получившего плату за расторжение: у него она заменяет неполученную аренду. Стороны в этом вопросе легко перепутать.", en: "Ordinary income is the answer for the <strong>landlord</strong> receiving a cancellation payment: for them it stands in for rent. The two sides are easy to swap here." },
      B: { ru: "Верно. Суммы, полученные арендатором за расторжение, считаются полученными в обмен на сам договор аренды, и результат определяется по правилам выбытия имущества.", en: "Correct. Amounts received by a tenant for a cancellation are treated as received in exchange for the lease itself, and the result follows the rules for a disposition of property." },
      C: { ru: "Возврата платы здесь нет: деньги платят за отказ от права пользоваться помещением.", en: "There is no refund of rent: the money is paid for giving up the right to occupy." },
      D: { ru: "Сумма облагается — вопрос лишь в том, по каким правилам.", en: "The amount is taxable; the only question is under which rules." }
    }
  },
  {
    sec: "s31",
    ru: "Владелец один раз за год сдал в аренду принадлежащий ему прицеп соседу и получил $900. Постоянно сдачей он не занимается, прибыли не ищет систематически. Где отражается доход?",
    en: "An owner let a trailer to a neighbour once during the year and received $900. He is not in the business of renting and pursues no systematic profit. Where is the income reported?",
    opts: [
      { k: "A", ru: "Schedule E, часть I — как всякая аренда", en: "Schedule E, Part I, like any rental" },
      { k: "B", ru: "Schedule C — сдача имущества всегда деятельность", en: "Schedule C: renting property is always a business" },
      { k: "C", ru: "Schedule 1, а расходы — там же, отдельной строкой", en: "Schedule 1, with the expenses on the same schedule on their own line" },
      { k: "D", ru: "Нигде: разовые сделки не отражаются", en: "Nowhere: one-off transactions are not reported" }
    ],
    correct: "C",
    why: {
      A: { ru: "Schedule E — бланк для аренды недвижимости. Движимое имущество попадает туда только тогда, когда сдаётся <em>вместе</em> с недвижимостью.", en: "Schedule E is the form for renting real estate. Personal property reaches it only when let <em>together</em> with real property." },
      B: { ru: "Schedule C нужен, когда есть бизнес, а его признаки — цель извлечь доход плюс непрерывность и регулярность. Разовая сдача им не отвечает.", en: "Schedule C is for a business, which means the purpose of income or profit plus continuity and regularity. A single letting meets neither." },
      C: { ru: "Верно. Сдача движимого имущества вне бизнеса идёт в Schedule 1: доход одной строкой, расходы другой. В базу налога на самозанятость этот доход не входит.", en: "Correct. Renting personal property outside a business goes on Schedule 1: the income on one line, the expenses on another. It does not enter the self-employment tax base." },
      D: { ru: "Доход есть, и его надо показать; вопрос только в бланке.", en: "There is income and it must be reported; only the form is in question." }
    }
  },
  {
    sec: "s32",
    ru: "Владелец сдаваемой квартиры купил по одному счёту десять одинаковых холодильников по $2 000 каждый и сделал выбор гавани малой суммы. Применимой финансовой отчётности у него нет. Что он вправе сделать?",
    en: "The owner of a rental flat bought ten identical refrigerators at $2,000 each on one invoice and elected the de minimis safe harbour. He has no applicable financial statement. What may he do?",
    opts: [
      { k: "A", ru: "Списать все десять сразу: порог считается по каждому предмету", en: "Deduct all ten at once: the limit is per item" },
      { k: "B", ru: "Списать сразу только один: за счёт можно не более $2 500", en: "Deduct only one at once: the limit is $2,500 per invoice" },
      { k: "C", ru: "Капитализировать все десять: общая сумма счёта $20 000 выше порога", en: "Capitalise all ten: the invoice total of $20,000 exceeds the limit" },
      { k: "D", ru: "Списать сразу два и капитализировать остальные", en: "Deduct two at once and capitalise the rest" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Порог гавани малой суммы — за счёт <strong>или за предмет</strong>, подтверждённый счётом. Каждый холодильник по $2 000 ниже $2 500, и все десять списываются сразу.", en: "Correct. The de minimis limit is per invoice <strong>or per item</strong> as substantiated by invoice. Each refrigerator at $2,000 is below $2,500, so all ten are deducted at once." },
      B: { ru: "Именно на прочтении «за счёт целиком» и построен неверный вариант.", en: "Reading the limit as applying to the invoice as a whole is exactly how the wrong answer is built." },
      C: { ru: "Итог счёта роли не играет: сравнивается цена предмета.", en: "The invoice total is irrelevant: it is the price of the item that is compared." },
      D: { ru: "Такого деления норма не знает.", en: "The rule knows no such split." }
    }
  },
  {
    sec: "s32",
    ru: "В сдаваемом здании владелец раз в четыре года чистит и балансирует систему вентиляции — так он и планировал при вводе здания в эксплуатацию. Очередная работа обошлась в $9 000. Как её отразить?",
    en: "Every four years the owner of a rental building cleans and balances the ventilation system, as planned when the building was placed in service. The latest such work cost $9,000. How is it treated?",
    opts: [
      { k: "A", ru: "Капитализировать: работа касается системы здания", en: "Capitalise it: the work touches a building system" },
      { k: "B", ru: "Списать сразу по гавани регулярного обслуживания", en: "Deduct it at once under the routine maintenance safe harbour" },
      { k: "C", ru: "Капитализировать: сумма выше порога гавани малой суммы", en: "Capitalise it: the amount exceeds the de minimis limit" },
      { k: "D", ru: "Списать сразу, но только половину", en: "Deduct half of it at once" }
    ],
    correct: "B",
    why: {
      A: { ru: "Отнесение к системе здания само по себе капитализации не требует: для этого есть отдельная гавань.", en: "Touching a building system does not by itself require capitalisation: that is what the separate harbour is for." },
      B: { ru: "Верно. Для здания и его систем гавань работает, если при вводе объекта в эксплуатацию повторение работ ожидалось более одного раза за десять лет. Раз в четыре года — ожидалось.", en: "Correct. For a building and its systems the harbour applies where, when the property was placed in service, the work was expected to recur more than once in ten years. Every four years qualifies." },
      C: { ru: "Гавань малой суммы здесь ни при чём: работает вторая, и порога в долларах у неё нет.", en: "The de minimis harbour is not in play: the other one applies, and it has no dollar limit." },
      D: { ru: "Деления суммы норма не предусматривает.", en: "The rule provides for no such split." }
    }
  },
  {
    sec: "s33",
    ru: "Владелец жил в квартире как в основном жилье с января по апрель, затем сдал её и непрерывно сдавал до конца следующего года — больше двенадцати месяцев подряд. Считаются ли январь—апрель днями личного пользования при проверке, использовалось ли жильё как дом?",
    en: "An owner lived in the flat as a main home from January to April, then let it and kept it let for more than twelve consecutive months. Do January to April count as personal-use days for the test of whether the dwelling was used as a home?",
    opts: [
      { k: "A", ru: "Да: он там жил, и это личное пользование", en: "Yes: he lived there, so it is personal use" },
      { k: "B", ru: "Нет: объект сдавался двенадцать месяцев подряд и дольше", en: "No: the property was rented for twelve consecutive months or more" },
      { k: "C", ru: "Считается половина этих дней", en: "Half of those days count" },
      { k: "D", ru: "Нет, потому что до сдачи объект вообще не был арендным", en: "No, because before the letting the property was not a rental at all" }
    ],
    correct: "B",
    why: {
      A: { ru: "Общее правило именно такое, но из него есть прямое изъятие для дней до и после сдачи.", en: "That is the general rule, but there is an express carve-out for days before and after the renting." },
      B: { ru: "Верно. Дни проживания в качестве основного жилья до или после сдачи не считаются личным пользованием, если объект сдавался или предлагался к сдаче двенадцать месяцев подряд и дольше — либо срок был короче, но кончился продажей или обменом.", en: "Correct. Days lived in the property as a main home before or after the renting are not personal use where it was rented or offered for rent for twelve consecutive months or more — or the period was shorter but ended in a sale or exchange." },
      C: { ru: "Половин норма не знает: дни либо считаются, либо нет.", en: "The rule knows no halves: the days either count or they do not." },
      D: { ru: "Вывод верный, обоснование нет: решает длительность сдачи, а не статус объекта до неё.", en: "Right answer, wrong reason: what decides is the length of the letting, not the property's status before it." }
    }
  },
  {
    sec: "s33",
    ru: "Условия те же: четыре месяца собственного проживания, затем сдача дольше двенадцати месяцев подряд. Как эти четыре месяца учитываются при <strong>распределении расходов</strong> между личным и арендным использованием?",
    en: "Same facts: four months of living there, then a letting of more than twelve consecutive months. How do those four months count when <strong>dividing expenses</strong> between personal and rental use?",
    opts: [
      { k: "A", ru: "Не учитываются: то же изъятие действует и здесь", en: "They do not count: the same carve-out applies here too" },
      { k: "B", ru: "Учитываются как обычно: изъятие на распределение расходов не распространяется", en: "They count as usual: the carve-out does not reach the division of expenses" },
      { k: "C", ru: "Учитываются только в части процентов и налогов", en: "They count only for interest and taxes" },
      { k: "D", ru: "Расходы за эти месяцы вычитаются полностью", en: "The expenses for those months are fully deductible" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это и есть проверяемая ошибка — перенос льготы из одного вопроса в другой.", en: "This is the error being tested: carrying the relief from one question into another." },
      B: { ru: "Верно. Изъятие работает <strong>только</strong> при проверке «использовалось ли жильё как дом». При делении расходов между личным и арендным использованием те же дни считаются обычным порядком.", en: "Correct. The carve-out works <strong>only</strong> for the test of whether the dwelling was used as a home. When expenses are divided between personal and rental use, those same days count in the ordinary way." },
      C: { ru: "Такого разделения по видам расходов норма здесь не делает.", en: "The rule draws no such distinction between kinds of expense here." },
      D: { ru: "Расходы личного периода не вычитаются вовсе — вычитается доля, приходящаяся на аренду.", en: "Expenses of the personal period are not deductible at all; what is deducted is the share attributable to the renting." }
    }
  },
  {
    sec: "s34",
    ru: "Одинокий налогоплательщик активно участвует в сдаче квартиры. Скорректированный валовой доход — $104 000, и в нём уже вычтены $7 000 взносов в IRA. Пассивных доходов нет. От какой величины считается сокращение особого вычета?",
    en: "A single taxpayer actively participates in letting a flat. Adjusted gross income is $104,000, already reduced by a $7,000 IRA deduction. There is no passive income. From what figure is the taper of the special allowance computed?",
    opts: [
      { k: "A", ru: "От $104 000: берётся скорректированный валовой доход как есть", en: "From $104,000: adjusted gross income as it stands" },
      { k: "B", ru: "От $111 000: вычет взносов в IRA возвращается обратно", en: "From $111,000: the IRA deduction is added back" },
      { k: "C", ru: "От $97 000: взносы в IRA вычитаются ещё раз", en: "From $97,000: the IRA contribution is subtracted again" },
      { k: "D", ru: "От суммы убытка от аренды, а не от дохода", en: "From the rental loss, not from income" }
    ],
    correct: "B",
    why: {
      A: { ru: "Порог смотрит на <strong>модифицированный</strong> доход, а не на обычный. Подмена одного другим — половина неверных ответов в этой теме.", en: "The threshold looks at <strong>modified</strong> adjusted gross income, not the ordinary figure. Substituting one for the other accounts for half the wrong answers here." },
      B: { ru: "Верно. Модифицированный доход считается без вычета взносов в IRA, без вычета половины налога на самозанятость, без налогооблагаемой части социального обеспечения и без самих пассивных убытков. $104 000 + $7 000 = $111 000, и превышение над порогом составит $11 000.", en: "Correct. Modified adjusted gross income is figured without the IRA deduction, without the deduction for one half of self-employment tax, without the taxable part of social security and without the passive losses themselves. $104,000 + $7,000 = $111,000, so the excess over the threshold is $11,000." },
      C: { ru: "Вычет возвращают обратно, а не применяют повторно.", en: "The deduction is added back, not taken twice." },
      D: { ru: "Сокращение считается от превышения дохода над порогом; убыток определяет лишь, что именно ограничивается.", en: "The taper runs on the excess of income over the threshold; the loss only determines what is being limited." }
    }
  },
  {
    sec: "s34",
    ru: "Ограниченный партнёр владеет 20% в товариществе, которое сдаёт жилой комплекс, и участвует в утверждении бюджета и выборе управляющего. Доступен ли ему особый вычет до $25 000?",
    en: "A limited partner holds 20% of a partnership letting a residential complex and takes part in approving the budget and choosing the manager. Is the special allowance of up to $25,000 available?",
    opts: [
      { k: "A", ru: "Да: доля выше 10% и участие в решениях есть", en: "Yes: the interest exceeds 10% and there is participation in decisions" },
      { k: "B", ru: "Нет: ограниченный партнёр активно участвующим не признаётся", en: "No: a limited partner is not treated as actively participating" },
      { k: "C", ru: "Да, но только в половинном размере", en: "Yes, but only at half the amount" },
      { k: "D", ru: "Да, если товарищество не имеет иного дохода", en: "Yes, provided the partnership has no other income" }
    ],
    correct: "B",
    why: {
      A: { ru: "Оба условия сами по себе верны для активного участия, но для ограниченного партнёра норма закрыта прямо, независимо от доли и от фактического участия.", en: "Both conditions are genuine features of active participation, but the provision is closed to a limited partner outright, whatever the interest or the actual involvement." },
      B: { ru: "Верно. Особый вычет требует активного участия, а ограниченный партнёр по прямому указанию нормы им не обладает. Доля не ниже 10% и участие в решениях — условия, до которых дело здесь не доходит.", en: "Correct. The special allowance requires active participation, and a limited partner is expressly denied it. The 10% interest and the involvement in decisions are conditions the analysis never reaches." },
      C: { ru: "Половинный размер относится к раздельной подаче супругов, а не к виду партнёра.", en: "The halved amount belongs to married taxpayers filing separately, not to a kind of partner." },
      D: { ru: "Наличие иного дохода у товарищества этот вопрос не решает.", en: "Other income of the partnership does not decide this question." }
    }
  }
];
