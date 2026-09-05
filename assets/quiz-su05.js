/* ===================================================================
   Вопросы тренажёра, модуль 05.

   Отдельный файл, а не блок внутри страницы: под file:// страница не
   может прочитать другой файл, поэтому единственный способ отдать
   данные двум страницам сразу — тег <script src>. Файл подключают и
   su05.html, и trainer.html.

   QUIZSECS — названия подразделов. На странице модуля они есть в
   заголовках, на странице тренажёра их нет. Карта порождается
   скриптом из тех же заголовков, а сборка отказывается собирать
   файл, если названия разошлись.
   =================================================================== */

window.QUIZZES  = window.QUIZZES  || {};
window.QUIZSECS = window.QUIZSECS || {};

window.QUIZSECS.su05 = {
  s51: { no: "5.1", ru: "Поездки, транспорт и питание", en: "Travel, transport and meals" },
  s52: { no: "5.2", ru: "Деловые подарки", en: "Business gifts" },
  s53: { no: "5.3", ru: "Страхование", en: "Insurance" },
  s54: { no: "5.4", ru: "Безнадёжные долги", en: "Bad debts" },
  s55: { no: "5.5", ru: "Прочие расходы и создание бизнеса", en: "Other expenses and starting up" },
  s56: { no: "5.6", ru: "Домашний офис", en: "Business use of the home" },
  s57: { no: "5.7", ru: "Вычет QBI", en: "The QBI deduction" }
};

window.QUIZZES.su05 = [
  {
    ru: "Инженер живёт в Портленде, а его единственное постоянное место работы — в Сиэтле, где он снимает квартиру и проводит рабочую неделю. Каждые выходные он ездит домой. Что вычитается?",
    en: "An engineer lives in Portland while his only regular workplace is in Seattle, where he rents a flat and spends the working week. He drives home every weekend. What is deductible?",
    opts: [
      { k: "A", ru: "Поездки домой и аренда квартиры в Сиэтле", en: "The trips home and the Seattle flat" },
      { k: "B", ru: "Только аренда квартиры в Сиэтле", en: "Only the Seattle flat" },
      { k: "C", ru: "Ничего из перечисленного", en: "Neither of them" },
      { k: "D", ru: "Только поездки домой", en: "Only the trips home" }
    ],
    correct: "C",
    why: {
      A: { ru: "Оба расхода личные: налоговый дом инженера — Сиэтл, и он там не в отъезде.", en: "Both are personal: the engineer’s tax home is Seattle, and he is not away from it." },
      B: { ru: "Жильё в месте налогового дома — личный расход, а не командировочный.", en: "Housing at the tax home is a personal expense, not a travel one." },
      C: { ru: "Верно. Налоговый дом — основное место работы, то есть Сиэтл. Находясь там, инженер дома, а не в отъезде; поездки к семье личные. Выбор места жительства вдали от работы налоговых последствий не создаёт.", en: "Correct. The tax home is the main place of business, Seattle. While there the engineer is at home, not away; the trips to the family are personal. Choosing to live away from work carries no tax consequences." },
      D: { ru: "Поездки к семье — классический пример личных расходов.", en: "Trips to the family are the classic example of a personal expense." }
    }
  },
  {
    ru: "Водитель выехал в 5 утра, доставил груз за 400 миль, поспал четыре часа в мотеле и вернулся вечером того же дня. Считается ли он находившимся в отъезде?",
    en: "A driver left at 5 a.m., delivered a load 400 miles away, slept four hours at a motel and returned the same evening. Was he away from home?",
    opts: [
      { k: "A", ru: "Нет: он не отсутствовал целые сутки", en: "No: he was not away a whole day" },
      { k: "B", ru: "Да: перерыв был достаточным для необходимого отдыха", en: "Yes: the break was long enough for the necessary rest" },
      { k: "C", ru: "Нет: отдых был не ночью", en: "No: the rest was not overnight" },
      { k: "D", ru: "Да, но только если поездка была более 300 миль", en: "Yes, but only because the trip exceeded 300 miles" }
    ],
    correct: "B",
    why: {
      A: { ru: "Отсутствовать целые сутки не требуется.", en: "Being away a whole day is not required." },
      B: { ru: "Верно. Оба условия выполнены: обязанности требовали отсутствия существенно дольше обычного рабочего дня, и потребовался настоящий отдых. Четыре часа сна в мотеле — не «вздремнуть в машине».", en: "Correct. Both conditions are met: the duties kept him away far longer than an ordinary working day, and genuine rest was needed. Four hours’ sleep at a motel is not “napping in the car”." },
      C: { ru: "Правило не требует, чтобы отдых приходился на ночь: «от заката до рассвета» — не условие.", en: "The rule does not require the rest to be at night: “dusk to dawn” is not a condition." },
      D: { ru: "Пороговых расстояний в правиле нет.", en: "The rule sets no distance threshold." }
    }
  },
  {
    ru: "Специалиста направили на объект в другой штат. Изначально работа планировалась на 10 месяцев, но на восьмом месяце срок продлили ещё на год, и он остался. Как учитываются расходы на поездку?",
    en: "A specialist was posted to a site in another state. The job was planned for 10 months, but in the eighth month it was extended by another year and he stayed. How are travel expenses treated?",
    opts: [
      { k: "A", ru: "Не вычитаются вовсе: фактически он пробыл дольше года", en: "Not deductible at all: he in fact stayed more than a year" },
      { k: "B", ru: "Вычитаются за первые восемь месяцев, дальше — нет", en: "Deductible for the first eight months, not afterwards" },
      { k: "C", ru: "Вычитаются за весь период", en: "Deductible for the whole period" },
      { k: "D", ru: "Вычитаются за первые двенадцать месяцев", en: "Deductible for the first twelve months" }
    ],
    correct: "B",
    why: {
      A: { ru: "Задним числом ничего не пересчитывается: пока ожидание было в пределах года, назначение оставалось временным.", en: "Nothing is recomputed retrospectively: while the expectation was within a year, the assignment was temporary." },
      B: { ru: "Верно. До продления работа реально ожидалась не дольше года и была временной. С момента, когда ожидание изменилось, назначение стало бессрочным, и новое место превратилось в налоговый дом.", en: "Correct. Until the extension the work was realistically expected to last a year or less and was temporary. From the moment the expectation changed the assignment became indefinite and the new location became the tax home." },
      C: { ru: "После изменения ожидания вычет прекращается.", en: "Once the expectation changed the deduction stops." },
      D: { ru: "Граница проходит не по календарным двенадцати месяцам, а по моменту изменения ожидания.", en: "The line is drawn not at twelve calendar months but at the moment the expectation changed." }
    }
  },
  {
    ru: "У консультанта есть постоянный офис в городе. В понедельник он поехал из дома прямо к клиенту на другом конце города, а оттуда в свой офис. Что вычитается?",
    en: "A consultant has a regular office in town. On Monday he drove from home straight to a client across town, and from there to his office. What is deductible?",
    opts: [
      { k: "A", ru: "Обе поездки", en: "Both legs" },
      { k: "B", ru: "Только поездка от клиента в офис", en: "Only the leg from the client to the office" },
      { k: "C", ru: "Ничего: день начался дома", en: "Nothing: the day began at home" },
      { k: "D", ru: "Только поездка из дома к клиенту", en: "Only the leg from home to the client" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Поездка из дома на временное место работы вычитается, если есть постоянное рабочее место, а переезд с одного рабочего места на другое вычитается всегда. Дорогой на работу была бы только поездка из дома прямо в офис.", en: "Correct. Home to a temporary workplace is deductible when you have a regular one, and travel between workplaces is always deductible. Only home directly to the office would be commuting." },
      B: { ru: "Половина ответа верна, но первая поездка тоже вычитается: клиент — временное место работы.", en: "Half right, but the first leg is deductible too: the client is a temporary workplace." },
      C: { ru: "Начало дня дома само по себе поездку личной не делает.", en: "Starting the day at home does not by itself make the trip personal." },
      D: { ru: "Вторая поездка — переезд между рабочими местами и вычитается тем более.", en: "The second leg is travel between workplaces and is deductible all the more." }
    }
  },
  {
    ru: "Владелец использует стандартную ставку за милю. За 2025 год деловой пробег — 14 200 миль. Кроме того, уплачено $1 900 страховки по автомобилю и $640 за замену масла. Какой вычет по автомобилю?",
    en: "An owner uses the standard mileage rate. Business mileage for 2025 is 14,200. He also paid $1,900 of car insurance and $640 for oil changes. What is the car deduction?",
    opts: [
      { k: "A", ru: "$9 940", en: "$9,940" },
      { k: "B", ru: "$12 480", en: "$12,480" },
      { k: "C", ru: "$11 840", en: "$11,840" },
      { k: "D", ru: "$2 540", en: "$2,540" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. 14 200 × $0,70 = $9 940. Страхование и обслуживание уже включены в ставку и отдельно не вычитаются.", en: "Correct. 14,200 × $0.70 = $9,940. Insurance and servicing are already inside the rate and are not deducted separately." },
      B: { ru: "Здесь к пробегу добавлены и страховка, и обслуживание — двойной счёт.", en: "This adds both insurance and servicing to the mileage — double counting." },
      C: { ru: "Здесь к пробегу добавлена страховка, которая в ставку уже входит.", en: "This adds insurance, which the rate already covers." },
      D: { ru: "Это только фактические расходы без пробега — смешаны два метода.", en: "These are the actual costs alone, without the mileage — the two methods are mixed." }
    }
  },
  {
    ru: "Владелец использовал автомобиль в бизнесе с первого года по фактическим расходам. На третий год он хочет перейти на стандартную ставку. Возможно ли это?",
    en: "An owner used the car in business from the first year on the actual expense method. In the third year he wants to switch to the standard mileage rate. Is that possible?",
    opts: [
      { k: "A", ru: "Да, метод можно менять ежегодно", en: "Yes, the method may be changed each year" },
      { k: "B", ru: "Нет: по этому автомобилю стандартная ставка больше недоступна", en: "No: the standard rate is no longer available for this car" },
      { k: "C", ru: "Да, но только после полной амортизации автомобиля", en: "Yes, but only once the car is fully depreciated" },
      { k: "D", ru: "Нет: перейти нельзя ни в ту, ни в другую сторону", en: "No: no switch is allowed in either direction" }
    ],
    correct: "B",
    why: {
      A: { ru: "Свободного выбора каждый год нет: первый год фиксирует возможности.", en: "There is no free annual choice: the first year fixes the options." },
      B: { ru: "Верно. Стандартную ставку нужно выбрать в первый год использования автомобиля в бизнесе. Начав с фактических расходов, вернуться к ставке по этому автомобилю уже нельзя.", en: "Correct. The standard rate must be elected in the first year the car is used in the business. Having started with actual expenses, you may never return to the rate for that car." },
      C: { ru: "Полная амортизация ограничение не снимает.", en: "Full depreciation does not lift the restriction." },
      D: { ru: "Обратный переход возможен: начав со стандартной ставки, можно перейти на фактические расходы.", en: "The reverse switch is allowed: having started with the rate, you may move to actual expenses." }
    }
  },
  {
    ru: "Счёт из ресторана: ужин с клиентом $180 и билеты на концерт $220, всё выделено в счёте отдельными строками. Какой вычет?",
    en: "A bill shows dinner with a client of $180 and concert tickets of $220, each stated separately. What is the deduction?",
    opts: [
      { k: "A", ru: "$200", en: "$200" },
      { k: "B", ru: "$90", en: "$90" },
      { k: "C", ru: "$400", en: "$400" },
      { k: "D", ru: "Ничего", en: "Nothing" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это половина от всей суммы, включая развлечение, которое не вычитается вовсе.", en: "That halves the whole bill, entertainment included, which is not deductible at all." },
      B: { ru: "Верно. Питание $180 даёт половину — $90. Концерт $220 является развлечением и не вычитается ни в каком размере. Выделение питания отдельной строкой как раз и сохранило ему право на половину.", en: "Correct. The $180 meal gives half, $90. The $220 concert is entertainment and is deductible in no amount. Stating the meal separately is precisely what preserved its half." },
      C: { ru: "Полный вычет не полагается ни питанию, ни развлечению.", en: "Neither the meal nor the entertainment qualifies for a full deduction." },
      D: { ru: "Питание не пропадает: оно выделено отдельно и сохраняет половину.", en: "The meal is not lost: it is stated separately and keeps its half." }
    }
  },
  {
    ru: "Командировка на три дня: перелёт $520, гостиница $690, питание $300, конференционный сбор $450. Какова общая сумма вычета?",
    en: "A three-day trip: airfare $520, hotel $690, meals $300, conference fee $450. What is the total deduction?",
    opts: [
      { k: "A", ru: "$1 960", en: "$1,960" },
      { k: "B", ru: "$1 810", en: "$1,810" },
      { k: "C", ru: "$980", en: "$980" },
      { k: "D", ru: "$1 660", en: "$1,660" }
    ],
    correct: "B",
    why: {
      A: { ru: "Здесь питание взято целиком.", en: "This takes the meals in full." },
      B: { ru: "Верно. $520 + $690 + $450 = $1 660 вычитаются целиком, питание $300 даёт $150. Итого $1 810.", en: "Correct. $520 + $690 + $450 = $1,660 in full, and the $300 of meals gives $150. That is $1,810." },
      C: { ru: "Это половина всей командировки — распространённая ошибка: предел применяется только к питанию.", en: "This halves the whole trip — the common error: the limit applies to meals only." },
      D: { ru: "Здесь питание выброшено целиком, а половина его вычитается.", en: "This drops the meals entirely, but half of them is deductible." }
    }
  },
  {
    ru: "Ужин с клиентом обошёлся в $340 в дорогом ресторане отеля. Деловые вопросы обсуждались весь вечер. Что вычитается?",
    en: "Dinner with a client cost $340 at an expensive hotel restaurant. Business was discussed all evening. What is deductible?",
    opts: [
      { k: "A", ru: "Ничего: сумма чрезмерна", en: "Nothing: the amount is excessive" },
      { k: "B", ru: "$170", en: "$170" },
      { k: "C", ru: "$340", en: "$340" },
      { k: "D", ru: "Ничего: ужин в отеле считается развлечением", en: "Nothing: dinner at a hotel counts as entertainment" }
    ],
    correct: "B",
    why: {
      A: { ru: "Расходы на питание не отклоняются только из-за превышения какой-то суммы.", en: "Meal costs are not disallowed merely for exceeding some figure." },
      B: { ru: "Верно. Половина от $340 — $170. Дороговизна ресторана, отеля или курорта сама по себе вычету не мешает: оценка идёт по совокупности обстоятельств.", en: "Correct. Half of $340 is $170. A deluxe restaurant, hotel or resort is not by itself a bar: the test is the facts and circumstances." },
      C: { ru: "Предел в половину действует независимо от обстоятельств.", en: "The 50% limit applies whatever the circumstances." },
      D: { ru: "Место не превращает питание в развлечение.", en: "The venue does not turn a meal into entertainment." }
    }
  },
  {
    ru: "Клиенту подарена ваза за $70; упаковка и доставка обошлись в $22. Какова сумма вычета?",
    en: "A client was given a $70 vase; packaging and delivery cost $22. What is the deduction?",
    opts: [
      { k: "A", ru: "$25", en: "$25" },
      { k: "B", ru: "$47", en: "$47" },
      { k: "C", ru: "$92", en: "$92" },
      { k: "D", ru: "$70", en: "$70" }
    ],
    correct: "B",
    why: {
      A: { ru: "Верно посчитан подарок, но забыты сопутствующие затраты.", en: "The gift is right but the incidental costs are forgotten." },
      B: { ru: "Верно. Подарок ограничен $25, а $22 за упаковку и доставку — сопутствующие затраты, которые в предел не входят и вычитаются сверх него: $25 + $22 = $47.", en: "Correct. The gift is capped at $25, while the $22 of packaging and delivery is an incidental cost outside the limit and deducted on top: $25 + $22 = $47." },
      C: { ru: "Ограничение в $25 к самому подарку применяется в любом случае.", en: "The $25 cap on the gift itself applies regardless." },
      D: { ru: "$70 превышает предел подарка более чем вдвое.", en: "$70 is nearly three times the gift limit." }
    }
  },
  {
    ru: "Поставщик подарил корзину фруктов за $40, из которых $28 приходится на декоративную корзину, а $12 — на фрукты. Какова сумма вычета?",
    en: "A supplier gave a $40 fruit basket, of which $28 was the ornamental basket and $12 the fruit. What is the deduction?",
    opts: [
      { k: "A", ru: "$40: корзина — сопутствующая затрата", en: "$40: the basket is an incidental cost" },
      { k: "B", ru: "$25", en: "$25" },
      { k: "C", ru: "$12", en: "$12" },
      { k: "D", ru: "$37", en: "$37" }
    ],
    correct: "B",
    why: {
      A: { ru: "Затрата считается сопутствующей, только если не добавляет существенной стоимости. Корзина дороже фруктов вдвое.", en: "A cost is incidental only if it adds no substantial value. The basket is worth more than twice the fruit." },
      B: { ru: "Верно. Корзина, сопоставимая по стоимости с содержимым, сопутствующей затратой не является и входит в стоимость подарка. Весь подарок стоит $40 и ограничивается $25.", en: "Correct. A basket comparable in value to its contents is not an incidental cost and forms part of the gift. The whole gift is $40 and is capped at $25." },
      C: { ru: "Отделять фрукты от корзины оснований нет.", en: "There is no basis for separating the fruit from the basket." },
      D: { ru: "Это $25 плюс корзина как сопутствующая затрата, которой она здесь не является.", en: "This is $25 plus the basket as incidental, which here it is not." }
    }
  },
  {
    ru: "Компания подарила заказчику — юридическому лицу — набор стоимостью $300, прямо предназначенный его директору для личного пользования. Какова сумма вычета?",
    en: "A company gave a corporate customer a $300 set expressly intended for its director’s personal use. What is the deduction?",
    opts: [
      { k: "A", ru: "$300: подарок сделан компании, а не человеку", en: "$300: the gift went to a company, not a person" },
      { k: "B", ru: "$25", en: "$25" },
      { k: "C", ru: "Ничего: подарки юридическим лицам не вычитаются", en: "Nothing: gifts to companies are not deductible" },
      { k: "D", ru: "$150", en: "$150" }
    ],
    correct: "B",
    why: {
      A: { ru: "Подарок компании, предназначенный конкретному человеку, считается косвенным подарком этому человеку.", en: "A gift to a company intended for a particular person is an indirect gift to that person." },
      B: { ru: "Верно. Косвенный подарок директору подчиняется тому же пределу в $25 на человека за год.", en: "Correct. An indirect gift to the director is subject to the same $25 per person per year limit." },
      C: { ru: "Подарок деловому партнёру вычитается — в пределах $25.", en: "A gift to a business contact is deductible — up to $25." },
      D: { ru: "Половинного предела для подарков не существует: это правило питания.", en: "There is no half limit for gifts: halving is the meals rule." }
    }
  },
  {
    ru: "Какая из страховок НЕ вычитается?",
    en: "Which of these insurance premiums is NOT deductible?",
    opts: [
      { k: "A", ru: "Страхование накладных расходов бизнеса на время вашей длительной болезни", en: "Overhead insurance covering business overhead during your long illness" },
      { k: "B", ru: "Полис, выплачивающий вам утраченный заработок при нетрудоспособности", en: "A policy paying you your lost earnings while disabled" },
      { k: "C", ru: "Страхование от перерыва в деятельности, покрывающее упущенную прибыль", en: "Business interruption insurance covering lost profits" },
      { k: "D", ru: "Страхование профессиональной ответственности", en: "Malpractice insurance" }
    ],
    correct: "B",
    why: {
      A: { ru: "Этот полис покрывает расходы бизнеса и прямо назван среди вычитаемых.", en: "This policy covers the business’s costs and is expressly listed as deductible." },
      B: { ru: "Верно. Премии по полису, возмещающему <em>вам</em> утраченный заработок из-за болезни или нетрудоспособности, не вычитаются. Различие с вариантом A — в том, чьи расходы покрываются.", en: "Correct. Premiums for a policy replacing <em>your</em> lost earnings due to sickness or disability are not deductible. The difference from choice A is whose costs are covered." },
      C: { ru: "Страхование от перерыва в деятельности вычитается.", en: "Business interruption insurance is deductible." },
      D: { ru: "Страхование профессиональной небрежности вычитается.", en: "Malpractice insurance is deductible." }
    }
  },
  {
    ru: "Компания застраховала жизнь ключевого сотрудника и назначила выгодоприобретателем саму себя. Вычитаются ли премии?",
    en: "A company insured a key employee’s life and named itself the beneficiary. Are the premiums deductible?",
    opts: [
      { k: "A", ru: "Да: это страхование работника", en: "Yes: it is insurance on an employee" },
      { k: "B", ru: "Нет: компания является выгодоприобретателем", en: "No: the company is the beneficiary" },
      { k: "C", ru: "Да, но только половина премии", en: "Yes, but only half the premium" },
      { k: "D", ru: "Да, если сотрудник дал письменное согласие", en: "Yes, if the employee consented in writing" }
    ],
    correct: "B",
    why: {
      A: { ru: "Страхование жизни работника вычитается лишь при условии, что вы не выгодоприобретатель.", en: "Life insurance on an employee is deductible only if you are not the beneficiary." },
      B: { ru: "Верно. Премии не вычитаются, если вы прямо или косвенно являетесь выгодоприобретателем по договору. Это ровно тот случай.", en: "Correct. Premiums are not deductible where you are directly or indirectly the beneficiary under the contract. This is exactly that case." },
      C: { ru: "Половинного вычета для страхования не существует.", en: "There is no half deduction for insurance." },
      D: { ru: "Согласие работника на характер выгодоприобретателя не влияет.", en: "The employee’s consent does not change who benefits." }
    }
  },
  {
    ru: "Компания не смогла застраховать один из своих рисков и ежегодно относит $50 000 в собственный резерв самострахования. Что вычитается?",
    en: "A company could not insure one of its risks and each year credits $50,000 to a self-insurance reserve. What is deductible?",
    opts: [
      { k: "A", ru: "$50 000 ежегодно", en: "$50,000 each year" },
      { k: "B", ru: "Ничего по отчислениям; фактические убытки могут вычитаться, когда возникнут", en: "Nothing for the credits; actual losses may be deducted when they occur" },
      { k: "C", ru: "$50 000, поскольку страхование недоступно", en: "$50,000, since insurance is unavailable" },
      { k: "D", ru: "Половина отчислений", en: "Half the credits" }
    ],
    correct: "B",
    why: {
      A: { ru: "Отчисления в резерв — перекладывание своих же денег, а не расход.", en: "Crediting a reserve moves your own money about; it is not an expense." },
      B: { ru: "Верно. Суммы, отнесённые в резерв самострахования, не вычитаются — и это правило действует, даже если получить страховое покрытие было невозможно. Фактические убытки вычитаются по своим правилам.", en: "Correct. Amounts credited to a self-insurance reserve are not deductible — and that holds even where coverage could not be obtained. Actual losses are deductible under their own rules." },
      C: { ru: "Недоступность страхования прямо оговорена как не меняющая правила.", en: "The unavailability of coverage is expressly stated not to change the rule." },
      D: { ru: "Частичного вычета правило не предусматривает.", en: "The rule provides for no partial deduction." }
    }
  },
  {
    ru: "Самозанятый уплатил $9 600 за медицинскую страховку для себя и семьи. Его чистая прибыль от самозанятости $70 000; правом участвовать в плане работодателя супруги он не располагал. Где вычитается страховка?",
    en: "A self-employed taxpayer paid $9,600 for health insurance for himself and his family. Net profit from self-employment is $70,000 and he was not eligible for a spouse’s employer plan. Where is the premium deducted?",
    opts: [
      { k: "A", ru: "В Schedule C среди расходов бизнеса", en: "Among the business expenses on Schedule C" },
      { k: "B", ru: "В Schedule 1 как корректировка дохода", en: "On Schedule 1 as an adjustment to income" },
      { k: "C", ru: "В Schedule A как медицинские расходы", en: "On Schedule A as a medical expense" },
      { k: "D", ru: "Не вычитается", en: "Not deductible" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это ключевая ошибка: попав в Schedule C, страховка уменьшила бы и базу налога на самозанятость, чего правило не допускает.", en: "This is the key error: on Schedule C the premium would also reduce the self-employment tax base, which the rule does not allow." },
      B: { ru: "Верно. Вычет идёт корректировкой дохода в Schedule 1, ограничен чистой прибылью от самозанятости и не полагается за месяцы участия в плане работодателя своего или супруга.", en: "Correct. The deduction is an adjustment to income on Schedule 1, limited by net profit from self-employment and unavailable for months of eligibility under an employer plan, one’s own or a spouse’s." },
      C: { ru: "Schedule A применяется к остатку, не покрытому этим вычетом, и только при детализации.", en: "Schedule A takes only what this deduction does not cover, and only if the taxpayer itemizes." },
      D: { ru: "Вычет существует и здесь полностью доступен.", en: "The deduction exists and is fully available here." }
    }
  },
  {
    ru: "Владелец на методе начисления признал доход $22 000 по счёту в 2024 году. В 2025 году заказчик обанкротился, и долг стал полностью безнадёжным. Как это отражается?",
    en: "An accrual-method owner recognised $22,000 of income on an invoice in 2024. In 2025 the customer went bankrupt and the debt became wholly worthless. How is that reported?",
    opts: [
      { k: "A", ru: "Обычный вычет $22 000 в Schedule C за 2025 год", en: "An ordinary $22,000 deduction on Schedule C for 2025" },
      { k: "B", ru: "Краткосрочный капитальный убыток $22 000", en: "A $22,000 short-term capital loss" },
      { k: "C", ru: "Уточнённая декларация за 2024 год", en: "An amended 2024 return" },
      { k: "D", ru: "Никак: доход уже был обложен", en: "Not at all: the income was already taxed" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Долг возник из деятельности бизнеса, значит это деловой безнадёжный долг: обычный вычет в году, когда долг признан безнадёжным.", en: "Correct. The debt arose in the business, so it is a business bad debt: an ordinary deduction in the year it became worthless." },
      B: { ru: "Краткосрочный капитальный убыток — участь неделового долга.", en: "A short-term capital loss is the fate of a nonbusiness debt." },
      C: { ru: "Прошлый год не пересматривается: в 2024 году доход был признан правильно.", en: "The earlier year is not revisited: the 2024 income was correctly recognised." },
      D: { ru: "Именно потому, что доход был обложен, вычет и полагается.", en: "It is precisely because the income was taxed that a deduction is due." }
    }
  },
  {
    ru: "Владелец бизнеса одолжил $15 000 соседу под расписку на личные нужды соседа. Долг стал полностью безнадёжным. Как он вычитается?",
    en: "A business owner lent $15,000 to a neighbour on a note for the neighbour’s personal purposes. The debt became wholly worthless. How is it deducted?",
    opts: [
      { k: "A", ru: "Обычный вычет в Schedule C", en: "An ordinary deduction on Schedule C" },
      { k: "B", ru: "Долгосрочный капитальный убыток, если заём был выдан более года назад", en: "A long-term capital loss if the loan was made over a year ago" },
      { k: "C", ru: "Краткосрочный капитальный убыток независимо от срока", en: "A short-term capital loss regardless of holding period" },
      { k: "D", ru: "Не вычитается: заём личный", en: "Not deductible: the loan was personal" }
    ],
    correct: "C",
    why: {
      A: { ru: "Schedule C предназначен для деловых долгов, а этот с бизнесом не связан.", en: "Schedule C is for business debts, and this one has no connection to the business." },
      B: { ru: "Срок владения здесь роли не играет — это специальное правило.", en: "The holding period is irrelevant here — that is the special rule." },
      C: { ru: "Верно. Неделовой безнадёжный долг всегда отражается как краткосрочный капитальный убыток в форме 8949 и Schedule D, каким бы давним он ни был.", en: "Correct. A nonbusiness bad debt is always a short-term capital loss on Form 8949 and Schedule D, however old the debt." },
      D: { ru: "Вычет полагается, но по правилам капитальных убытков, а не деловых расходов.", en: "A deduction is available, but under the capital loss rules rather than as a business expense." }
    }
  },
  {
    ru: "Деловой долг стал безнадёжным наполовину: должник рассчитался частично и объявил о реструктуризации. Можно ли списать безнадёжную половину сейчас?",
    en: "A business debt became half worthless: the debtor paid part and announced a restructuring. May the worthless half be written off now?",
    opts: [
      { k: "A", ru: "Да: деловой долг можно списывать по частям", en: "Yes: a business debt may be written off in part" },
      { k: "B", ru: "Нет: списание возможно только при полной безнадёжности", en: "No: a write-off requires total worthlessness" },
      { k: "C", ru: "Да, но только через резерв по сомнительным долгам", en: "Yes, but only through a reserve for doubtful debts" },
      { k: "D", ru: "Нет: сначала нужно исчерпать все меры взыскания", en: "No: all collection remedies must be exhausted first" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Частичное списание допустимо именно для делового долга. Требование полной безнадёжности относится к неделовым долгам.", en: "Correct. Partial write-off is available precisely for a business debt. Total worthlessness is required for nonbusiness debts." },
      B: { ru: "Это правило неделовых долгов, а здесь долг деловой.", en: "That is the nonbusiness rule, and this debt is a business one." },
      C: { ru: "Метод резерва для налоговых целей не применяется: списание идёт по конкретному долгу.", en: "The reserve method is not used for tax purposes: write-offs are made debt by debt." },
      D: { ru: "Формального исчерпания всех мер не требуется; нужны разумные основания считать долг безнадёжным.", en: "No formal exhaustion of remedies is required; reasonable grounds to treat the debt as worthless suffice." }
    }
  },
  {
    ru: "Мастер на кассовом методе выставил счёт на $6 800, заказчик исчез. Какой вычет по безнадёжному долгу?",
    en: "A cash-method tradesman invoiced $6,800 and the customer vanished. What bad debt deduction is available?",
    opts: [
      { k: "A", ru: "$6 800 в Schedule C", en: "$6,800 on Schedule C" },
      { k: "B", ru: "$6 800 как краткосрочный капитальный убыток", en: "$6,800 as a short-term capital loss" },
      { k: "C", ru: "Ничего", en: "Nothing" },
      { k: "D", ru: "$3 000 — предел вычета капитальных убытков за год", en: "$3,000 — the annual capital loss limit" }
    ],
    correct: "C",
    why: {
      A: { ru: "Вычитать можно лишь то, что было включено в доход. На кассовом методе счёт в доход не попадал.", en: "You may deduct only what was taken into income. On the cash method the invoice never entered income." },
      B: { ru: "Долг деловой, но дело не в его характере: базиса в этом долге у мастера нет вовсе.", en: "The debt is a business one, but that is not the issue: the tradesman has no basis in it at all." },
      C: { ru: "Верно. Неоплаченный счёт на кассовом методе вычета не даёт: он никогда не был доходом. Тот же принцип, что и с неполученной арендной платой.", en: "Correct. An unpaid invoice on the cash method gives no deduction: it was never income. The same principle as rent never received." },
      D: { ru: "Предел капитальных убытков здесь ни при чём: вычитать нечего.", en: "The capital loss limit is beside the point: there is nothing to deduct." }
    }
  },
  {
    ru: "Компания уплатила $6 000 неустойки заказчику за срыв срока и $6 000 штрафа надзорному ведомству. Что вычитается?",
    en: "A company paid $6,000 of contractual damages to a customer for missing a deadline and a $6,000 fine to a regulator. What is deductible?",
    opts: [
      { k: "A", ru: "$12 000", en: "$12,000" },
      { k: "B", ru: "$6 000 — неустойка заказчику", en: "$6,000 — the damages to the customer" },
      { k: "C", ru: "$6 000 — штраф ведомству", en: "$6,000 — the fine to the regulator" },
      { k: "D", ru: "Ничего: обе суммы являются штрафами", en: "Nothing: both are penalties" }
    ],
    correct: "B",
    why: {
      A: { ru: "Штраф государственному органу за нарушение закона не вычитается.", en: "A fine to a government body for breaking the law is not deductible." },
      B: { ru: "Верно. Неустойка за просрочку или неисполнение договора прямо названа среди вычитаемых расходов; штраф надзорному органу — среди невычитаемых.", en: "Correct. A penalty for late or non-performance of a contract is expressly listed as deductible; a fine to a regulator is listed as not." },
      C: { ru: "Всё ровно наоборот.", en: "This is exactly backwards." },
      D: { ru: "Русское и английское слово «штраф» покрывает оба случая, но правила у них разные.", en: "The word “penalty” covers both cases, but the rules differ." }
    }
  },
  {
    ru: "Бухгалтер оплатил курсы: $2 400 на повышение квалификации по налогообложению и $9 000 на программу подготовки к экзамену адвоката. Что вычитается?",
    en: "An accountant paid for courses: $2,400 of continuing tax education and $9,000 for a bar exam preparation programme. What is deductible?",
    opts: [
      { k: "A", ru: "$11 400", en: "$11,400" },
      { k: "B", ru: "$2 400", en: "$2,400" },
      { k: "C", ru: "$9 000", en: "$9,000" },
      { k: "D", ru: "Ничего", en: "Nothing" }
    ],
    correct: "B",
    why: {
      A: { ru: "Обучение, дающее право на новую профессию, не вычитается.", en: "Education qualifying you for a new trade is not deductible." },
      B: { ru: "Верно. Курсы поддерживают и улучшают навыки в текущем деле и вычитаются. Подготовка к адвокатскому экзамену открывает новую профессию, а такие расходы вычету не подлежат.", en: "Correct. The courses maintain and improve skills in the present trade and are deductible. Bar exam preparation qualifies the taxpayer for a new profession, and such costs are not deductible." },
      C: { ru: "Это как раз невычитаемая часть.", en: "That is precisely the nondeductible part." },
      D: { ru: "Повышение квалификации в своей профессии вычитается.", en: "Continuing education within one’s own profession is deductible." }
    }
  },
  {
    ru: "Перед открытием ресторана потрачено $62 000 на исследования, обучение персонала и подбор помещения. Ресторан открылся 1 декабря 2025 года. Какой вычет за 2025 год?",
    en: "Before opening a restaurant, $62,000 was spent on research, staff training and finding premises. It opened on December 1, 2025. What is the 2025 deduction?",
    opts: [
      { k: "A", ru: "$5 344", en: "$5,344" },
      { k: "B", ru: "$344", en: "$344" },
      { k: "C", ru: "$5 000", en: "$5,000" },
      { k: "D", ru: "Ничего до следующего года", en: "Nothing until next year" }
    ],
    correct: "B",
    why: {
      A: { ru: "Единовременный вычет здесь равен нулю: затраты превысили $55 000.", en: "The immediate deduction is zero here: the costs exceeded $55,000." },
      B: { ru: "Верно. Превышение над $50 000 составляет $12 000, что больше $5 000, поэтому единовременного вычета не остаётся. Все $62 000 амортизируются: $62 000 ÷ 180 = $344 за один месяц декабря.", en: "Correct. The excess over $50,000 is $12,000, more than $5,000, so nothing is deductible immediately. The whole $62,000 is amortized: $62,000 ÷ 180 = $344 for the single month of December." },
      C: { ru: "$5 000 сокращаются доллар за доллар на превышение над $50 000 и здесь обнуляются.", en: "The $5,000 is reduced dollar for dollar by the excess over $50,000 and here reaches zero." },
      D: { ru: "Амортизация начинается с месяца начала деятельности, то есть уже в декабре.", en: "Amortization begins with the month the business starts, that is in December." }
    }
  },
  {
    ru: "Компания вернула заказчику $18 000, полученных и обложенных в прошлом году, поскольку услуга была оказана ненадлежаще. Как учитывается возврат?",
    en: "A company refunded $18,000 to a customer, received and taxed in a prior year, because the service was defective. How is the refund treated?",
    opts: [
      { k: "A", ru: "Не учитывается: доход прошлого года уже обложен", en: "Not accounted for: the prior year’s income was already taxed" },
      { k: "B", ru: "Вычитается как расход текущего года", en: "Deducted as an expense of the current year" },
      { k: "C", ru: "Только через уточнённую декларацию за прошлый год", en: "Only through an amended prior-year return" },
      { k: "D", ru: "Как капитальный убыток", en: "As a capital loss" }
    ],
    correct: "B",
    why: {
      A: { ru: "Именно потому, что доход был обложен, его возврат и даёт вычет.", en: "It is precisely because the income was taxed that repaying it gives a deduction." },
      B: { ru: "Верно. Возврат ранее полученного дохода прямо назван среди вычитаемых расходов. Это зеркало правила о возврате ранее вычтенного из модуля 2.", en: "Correct. Repayment of income previously received is expressly listed among deductible expenses. It mirrors the recovery rule from module 2." },
      C: { ru: "Прошлый год был отражён правильно; исправлять нечего.", en: "The prior year was reported correctly; there is nothing to correct." },
      D: { ru: "Капитального актива здесь нет.", en: "There is no capital asset here." }
    }
  },
  {
    ru: "Что из перечисленного вычитается?",
    en: "Which of the following is deductible?",
    opts: [
      { k: "A", ru: "Взнос в местный гольф-клуб для встреч с клиентами", en: "Dues to a local golf club used for meeting clients" },
      { k: "B", ru: "Взнос в отраслевую ассоциацию производителей", en: "Dues to an industry trade association" },
      { k: "C", ru: "Расходы на лоббирование законопроекта", en: "Lobbying costs on a bill" },
      { k: "D", ru: "Взнос в поддержку кандидата в мэры", en: "A contribution to a mayoral candidate" }
    ],
    correct: "B",
    why: {
      A: { ru: "Взносы в спортивные, обеденные и подобные клубы не вычитаются, как бы они ни использовались.", en: "Dues to athletic, luncheon and similar clubs are not deductible, however they are used." },
      B: { ru: "Верно. Взносы в деловые организации прямо названы среди вычитаемых расходов — в отличие от клубных взносов.", en: "Correct. Donations to business organizations are expressly listed as deductible — unlike club dues." },
      C: { ru: "Расходы на лоббирование не вычитаются.", en: "Lobbying expenses are not deductible." },
      D: { ru: "Политические взносы не вычитаются.", en: "Political contributions are not deductible." }
    }
  },
  {
    ru: "Комната площадью 180 кв. футов используется исключительно и регулярно как основное место деятельности. Дом — 1 500 кв. футов. Косвенные расходы за год $14 000. Что даст упрощённый метод и что фактический?",
    en: "A 180 square foot room is the principal place of business, used regularly and for nothing else. The house is 1,500 square feet. Indirect expenses for the year are $14,000. What do the simplified and actual methods give?",
    opts: [
      { k: "A", ru: "Упрощённый $900, фактический $1 680", en: "Simplified $900, actual $1,680" },
      { k: "B", ru: "Упрощённый $1 500, фактический $1 680", en: "Simplified $1,500, actual $1,680" },
      { k: "C", ru: "Упрощённый $900, фактический $14 000", en: "Simplified $900, actual $14,000" },
      { k: "D", ru: "Упрощённый $1 800, фактический $1 680", en: "Simplified $1,800, actual $1,680" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Упрощённый: $5 × 180 = $900. Фактический: доля 180 ÷ 1 500 = 12%, и 12% от $14 000 = $1 680.", en: "Correct. Simplified: $5 × 180 = $900. Actual: the share is 180 ÷ 1,500 = 12%, and 12% of $14,000 = $1,680." },
      B: { ru: "$1 500 — это максимум упрощённого метода при 300 кв. футах, а здесь их 180.", en: "$1,500 is the simplified maximum at 300 square feet; here there are 180." },
      C: { ru: "Косвенные расходы берутся в доле, а не целиком.", en: "Indirect expenses are taken in proportion, not in full." },
      D: { ru: "$1 800 получилось бы при ставке $10 за фут, которой не существует.", en: "$1,800 would follow from a $10 rate per foot, which does not exist." }
    }
  },
  {
    ru: "Владелец выбрал упрощённый метод. Валовой доход от деятельности за вычетом прочих расходов составил $800, а расчёт по упрощённому методу дал $1 500. Что происходит с разницей?",
    en: "An owner elected the simplified method. Gross income from the activity less other expenses was $800, while the simplified computation gave $1,500. What happens to the difference?",
    opts: [
      { k: "A", ru: "Переносится на следующий год", en: "Carries forward to next year" },
      { k: "B", ru: "Пропадает", en: "It is lost" },
      { k: "C", ru: "Создаёт убыток $700", en: "It creates a $700 loss" },
      { k: "D", ru: "Переносится, но только на три года", en: "Carries forward, but only for three years" }
    ],
    correct: "B",
    why: {
      A: { ru: "Перенос существует при фактическом методе, но не при упрощённом.", en: "A carryover exists under the actual method, not the simplified one." },
      B: { ru: "Верно. Вычет ограничен $800, а неиспользованные $700 при упрощённом методе не переносятся и пропадают. Это и есть цена простоты.", en: "Correct. The deduction is capped at $800 and the unused $700 does not carry forward under the simplified method — it is lost. That is the price of simplicity." },
      C: { ru: "Вычет по домашнему офису убытка не создаёт ни при каком методе.", en: "The home office deduction creates no loss under either method." },
      D: { ru: "Никакого срока переноса здесь нет, потому что нет и самого переноса.", en: "There is no carryover period here because there is no carryover." }
    }
  },
  {
    ru: "Электрик работает у клиентов, а дома в отдельной комнате ведёт всю бухгалтерию, выписывает счета и заказывает материалы. Другого офиса нет. Полагается ли вычет по домашнему офису?",
    en: "An electrician works at clients’ premises and keeps all the books, invoicing and ordering in a separate room at home. There is no other office. Is a home office deduction available?",
    opts: [
      { k: "A", ru: "Нет: основная работа выполняется у клиентов", en: "No: the main work happens at clients’ premises" },
      { k: "B", ru: "Да: дом является основным местом деятельности", en: "Yes: the home is the principal place of business" },
      { k: "C", ru: "Нет: электрик не встречается дома с клиентами", en: "No: the electrician does not meet clients at home" },
      { k: "D", ru: "Да, но только при использовании упрощённого метода", en: "Yes, but only under the simplified method" }
    ],
    correct: "B",
    why: {
      A: { ru: "Именно для таких случаев и написано правило об административных действиях.", en: "The administrative activities rule was written for exactly this case." },
      B: { ru: "Верно. Дом считается основным местом деятельности, если в нём ведутся административные и управленческие действия и другого постоянного места для них нет. Оба общих условия — исключительность и регулярность — здесь тоже соблюдены.", en: "Correct. The home is the principal place of business if administrative and management activities are carried on there and there is no other fixed location for them. Both general conditions — exclusive and regular use — are met here too." },
      C: { ru: "Встречи с клиентами — лишь одно из трёх альтернативных условий, а не обязательное.", en: "Meeting clients is only one of three alternative conditions, not a requirement." },
      D: { ru: "Право на вычет от выбора метода расчёта не зависит.", en: "Entitlement to the deduction does not depend on which computation method is chosen." }
    }
  },
  {
    ru: "Продавец хранит товарные запасы в гараже, который использует также для личного автомобиля. Полагается ли вычет по этой площади?",
    en: "A retailer stores inventory in a garage also used for the family car. Is a deduction available for that space?",
    opts: [
      { k: "A", ru: "Нет: нарушено требование исключительного использования", en: "No: the exclusive use requirement is broken" },
      { k: "B", ru: "Да: хранение запасов — исключение из требования исключительности", en: "Yes: storing inventory is an exception to the exclusive use requirement" },
      { k: "C", ru: "Да, но только по упрощённому методу", en: "Yes, but only under the simplified method" },
      { k: "D", ru: "Нет: гараж не является частью жилья", en: "No: a garage is not part of the dwelling" }
    ],
    correct: "B",
    why: {
      A: { ru: "Требование исключительности здесь как раз не действует.", en: "The exclusivity requirement does not apply here." },
      B: { ru: "Верно. Хранение запасов или образцов товара — одно из двух исключений из требования исключительного использования. Второе — помещение детского сада.", en: "Correct. Storing inventory or product samples is one of the two exceptions to the exclusive use requirement. The other is a daycare facility." },
      C: { ru: "Исключение действует при обоих методах расчёта.", en: "The exception applies under either computation method." },
      D: { ru: "Гараж входит в состав жилого помещения вместе с прочими постройками.", en: "The garage is part of the dwelling unit along with its other structures." }
    }
  },
  {
    ru: "Одинокий владелец кафе: квалифицированный доход $120 000, налогооблагаемый доход $118 000, чистого прироста капитала нет, зарплата работникам $40 000. Какой вычет QBI?",
    en: "A single café owner: qualified business income $120,000, taxable income $118,000, no net capital gain, wages to employees $40,000. What is the QBI deduction?",
    opts: [
      { k: "A", ru: "$24 000", en: "$24,000" },
      { k: "B", ru: "$23 600", en: "$23,600" },
      { k: "C", ru: "$20 000", en: "$20,000" },
      { k: "D", ru: "$8 000", en: "$8,000" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это 20% квалифицированного дохода без учёта общего потолка.", en: "That is 20% of QBI, ignoring the overall cap." },
      B: { ru: "Верно. Меньшая из 20% от $120 000 = $24 000 и 20% налогооблагаемого дохода $118 000 = $23 600. Доход ниже порога, поэтому ограничение по зарплате не проверяется вовсе.", en: "Correct. The lesser of 20% of $120,000 = $24,000 and 20% of taxable income of $118,000 = $23,600. Income is below the threshold, so the wage limit is not examined at all." },
      C: { ru: "$20 000 — это 50% зарплаты, а ограничение по зарплате ниже порога не применяется.", en: "$20,000 is 50% of wages, and the wage limit does not apply below the threshold." },
      D: { ru: "Такой величине в расчёте ничего не соответствует.", en: "No step of the computation produces this figure." }
    }
  },
  {
    ru: "Врач подаёт декларацию как одинокий. Налогооблагаемый доход $310 000, квалифицированный доход $280 000. Какой вычет QBI?",
    en: "A doctor files as single. Taxable income is $310,000 and qualified business income $280,000. What is the QBI deduction?",
    opts: [
      { k: "A", ru: "$56 000", en: "$56,000" },
      { k: "B", ru: "$62 000", en: "$62,000" },
      { k: "C", ru: "Ноль", en: "Zero" },
      { k: "D", ru: "$28 000", en: "$28,000" }
    ],
    correct: "C",
    why: {
      A: { ru: "20% квалифицированного дохода считались бы, будь доход ниже порога.", en: "20% of QBI would apply had the income been below the threshold." },
      B: { ru: "20% налогооблагаемого дохода — тоже не тот расчёт при этих обстоятельствах.", en: "20% of taxable income is likewise the wrong computation on these facts." },
      C: { ru: "Верно. Налогооблагаемый доход $310 000 выше верхней границы диапазона $247 300, а медицина входит в перечень специальных услуг: выше диапазона такая деятельность вычета не даёт вовсе.", en: "Correct. Taxable income of $310,000 exceeds the $247,300 top of the range, and medicine is a specified service: above the range such a business gets no deduction at all." },
      D: { ru: "Половинных вычетов правило не знает; выше диапазона вычет равен нулю.", en: "The rule knows no half deductions; above the range it is zero." }
    }
  },
  {
    ru: "Что НЕ входит в квалифицированный доход бизнеса?",
    en: "Which of the following is NOT qualified business income?",
    opts: [
      { k: "A", ru: "Прибыль от Schedule C", en: "Schedule C profit" },
      { k: "B", ru: "Гарантированная выплата партнёру за услуги", en: "A guaranteed payment to a partner for services" },
      { k: "C", ru: "Доля прибыли партнёрства", en: "A distributive share of partnership income" },
      { k: "D", ru: "Прибыль от Schedule F", en: "Schedule F profit" }
    ],
    correct: "B",
    why: {
      A: { ru: "Обычная прибыль Schedule C — квалифицированный доход.", en: "Ordinary Schedule C profit is qualified business income." },
      B: { ru: "Верно. Гарантированные выплаты партнёру за услуги в квалифицированный доход не входят — как и разумная зарплата от собственной S-корпорации. Логика одна: это плата за труд, а не доход от бизнеса.", en: "Correct. Guaranteed payments to a partner for services are not qualified business income — nor is reasonable compensation from your own S corporation. The logic is the same: it is pay for labour, not business income." },
      C: { ru: "Распределяемая доля прибыли партнёрства входит.", en: "A distributive share of partnership income is included." },
      D: { ru: "Прибыль фермера по Schedule F входит.", en: "A farmer’s Schedule F profit is included." }
    }
  },
  {
    ru: "Владелец превысил верхнюю границу диапазона. Бизнес не относится к специальным услугам: зарплата по W-2 составила $90 000, первоначальная стоимость квалифицированного имущества $1 200 000. Каков предел вычета по этому бизнесу?",
    en: "An owner is above the top of the range. The business is not a specified service: W-2 wages are $90,000 and the unadjusted basis of qualified property is $1,200,000. What is the limit for this business?",
    opts: [
      { k: "A", ru: "$45 000", en: "$45,000" },
      { k: "B", ru: "$52 500", en: "$52,500" },
      { k: "C", ru: "$30 000", en: "$30,000" },
      { k: "D", ru: "$97 500", en: "$97,500" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это первая формула — 50% зарплаты. Но берётся большая из двух, а вторая здесь больше.", en: "That is the first formula, 50% of wages. But the greater of the two applies, and the second is larger here." },
      B: { ru: "Верно. Вторая формула: 25% от $90 000 = $22 500 плюс 2,5% от $1 200 000 = $30 000, итого $52 500. Это больше, чем $45 000 по первой формуле.", en: "Correct. The second formula: 25% of $90,000 = $22,500 plus 2.5% of $1,200,000 = $30,000, giving $52,500. That exceeds the $45,000 under the first." },
      C: { ru: "Это только имущественная часть второй формулы без зарплатной.", en: "That is the property half of the second formula without the wage half." },
      D: { ru: "Здесь сложены обе формулы; их не складывают, а выбирают большую.", en: "This adds both formulas; they are not added but compared." }
    }
  },
  {
    ru: "Уменьшает ли вычет QBI базу налога на самозанятость?",
    en: "Does the QBI deduction reduce the self-employment tax base?",
    opts: [
      { k: "A", ru: "Да: он уменьшает прибыль бизнеса", en: "Yes: it reduces business profit" },
      { k: "B", ru: "Нет: он вычитается из налогооблагаемого дохода, а не из прибыли Schedule C", en: "No: it comes off taxable income, not Schedule C profit" },
      { k: "C", ru: "Да, но только наполовину", en: "Yes, but only by half" },
      { k: "D", ru: "Только если налогоплательщик детализирует вычеты", en: "Only if the taxpayer itemizes" }
    ],
    correct: "B",
    why: {
      A: { ru: "Прибыль Schedule C вычет не трогает вовсе.", en: "The deduction does not touch Schedule C profit at all." },
      B: { ru: "Верно. Вычет стоит ниже строки скорректированного валового дохода, поэтому не уменьшает ни AGI, ни чистый заработок от самозанятости. Владелец платит налог на самозанятость со всей базы.", en: "Correct. The deduction sits below the adjusted gross income line, so it reduces neither AGI nor net earnings from self-employment. The owner pays self-employment tax on the whole base." },
      C: { ru: "Половинного эффекта у этого вычета нет.", en: "The deduction has no half effect." },
      D: { ru: "Вычет предоставляется независимо от детализации — но базы самозанятости это всё равно не касается.", en: "The deduction is available whether or not you itemize — but that has nothing to do with the self-employment base." }
    }
  },
  {
    ru: "Одинокий владелец мастерской: квалифицированный доход $210 000, налогооблагаемый доход $205 000. Зарплаты работникам нет, имущества почти нет. Как считается вычет?",
    en: "A single workshop owner: qualified business income $210,000, taxable income $205,000. There are no employee wages and almost no property. How is the deduction computed?",
    opts: [
      { k: "A", ru: "Ноль: зарплаты нет, значит ограничение обнуляет вычет", en: "Zero: with no wages the limit reduces it to nothing" },
      { k: "B", ru: "Полные 20%: доход ниже верхней границы диапазона", en: "The full 20%: income is below the top of the range" },
      { k: "C", ru: "Ограничение вводится частично, пропорционально пройденной части диапазона", en: "The limit phases in partially, in proportion to the distance into the range" },
      { k: "D", ru: "$41 000 без каких-либо ограничений", en: "$41,000 with no limitations at all" }
    ],
    correct: "C",
    why: {
      A: { ru: "Полное ограничение действует только выше верхней границы диапазона, а доход в него лишь вошёл.", en: "The limit applies in full only above the top of the range, and the income has only just entered it." },
      B: { ru: "Порог $197 300 уже пройден, значит беспрепятственного расчёта больше нет.", en: "The $197,300 threshold has been passed, so the unimpeded computation is no longer available." },
      C: { ru: "Верно. Налогооблагаемый доход $205 000 находится между порогом $197 300 и верхом диапазона $247 300. В этой зоне ограничение по зарплате и имуществу вводится постепенно, пропорционально пройденной части диапазона.", en: "Correct. Taxable income of $205,000 lies between the $197,300 threshold and the $247,300 top of the range. In that zone the wage and property limit phases in gradually, in proportion to how far into the range the taxpayer is." },
      D: { ru: "Расчёт без ограничений применялся бы ниже порога.", en: "The unlimited computation would apply below the threshold." }
    }
  },
  {
    ru: "Питание в командировке можно считать двумя способами. Какими?",
    en: "Meals on a business trip may be figured in two ways. Which?",
    opts: [
      { k: "A", ru: "По фактической стоимости либо по стандартной норме на питание", en: "Actual cost or the standard meal allowance" },
      { k: "B", ru: "По фактической стоимости либо по стандартной ставке за милю", en: "Actual cost or the standard mileage rate" },
      { k: "C", ru: "По фактической стоимости либо по половине счёта за гостиницу", en: "Actual cost or half the hotel bill" },
      { k: "D", ru: "Только по фактической стоимости", en: "Actual cost only" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Оба способа допустимы, и при любом из них вычитается лишь половина невозмещённой стоимости.", en: "Correct. Both methods are permitted, and under either only half the unreimbursed cost is deducted." },
      B: { ru: "Стандартная ставка за милю относится к автомобилю, а не к питанию.", en: "The standard mileage rate applies to the car, not to meals." },
      C: { ru: "Такого способа не существует.", en: "No such method exists." },
      D: { ru: "Стандартная норма на питание избавляет от хранения чеков по каждому приёму пищи.", en: "The standard meal allowance saves keeping a receipt for every meal." }
    }
  }
];
