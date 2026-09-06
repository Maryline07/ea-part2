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
    sec: "s51",
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
    sec: "s51",
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
    sec: "s51",
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
    sec: "s51",
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
    sec: "s51",
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
    sec: "s51",
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
    sec: "s51",
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
    sec: "s51",
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
    sec: "s51",
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
    sec: "s52",
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
    sec: "s52",
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
    sec: "s52",
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
    sec: "s53",
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
    sec: "s53",
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
    sec: "s53",
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
    sec: "s53",
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
    sec: "s54",
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
    sec: "s54",
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
    sec: "s54",
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
    sec: "s54",
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
    sec: "s55",
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
    sec: "s55",
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
    sec: "s55",
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
    sec: "s55",
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
    sec: "s55",
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
    sec: "s56",
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
    sec: "s56",
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
    sec: "s56",
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
    sec: "s56",
    ru: "Розничный продавец регулярно хранит товарные запасы в обособленной части гаража, которую использует также для личного автомобиля. Другого постоянного места у этой торговли нет. Полагается ли вычет по этой площади?",
    en: "A retailer regularly stores inventory in a separately identifiable part of a garage that is also used for the family car. The business has no other fixed location. Is a deduction available for that space?",
    opts: [
      { k: "A", ru: "Нет: нарушено требование исключительного использования", en: "No: the exclusive use requirement is broken" },
      { k: "B", ru: "Да: хранение запасов — исключение из требования исключительности", en: "Yes: storing inventory is an exception to the exclusive use requirement" },
      { k: "C", ru: "Да, но только по упрощённому методу", en: "Yes, but only under the simplified method" },
      { k: "D", ru: "Нет: гараж не является частью жилья", en: "No: a garage is not part of the dwelling" }
    ],
    correct: "B",
    why: {
      A: { ru: "Требование исключительности здесь как раз не действует.", en: "The exclusivity requirement does not apply here." },
      B: { ru: "Верно. Хранение запасов или образцов товара — одно из двух исключений из требования исключительного использования; второе — помещение детского сада. Само по себе хранение исключения не даёт: нужны все пять условий, и решающее здесь — <strong>дом является единственным постоянным местом этой торговли</strong>. Прочие соблюдены: торговля розничная, хранение регулярное, часть гаража обособлена.", en: "Correct. Storing inventory or product samples is one of the two exceptions to the exclusive use requirement; the other is a daycare facility. Storage alone is not enough: all five conditions must hold, and the decisive one here is that <strong>the home is the only fixed location of that selling business</strong>. The rest are met — retail sales, regular storage, a separately identifiable part of the garage." },
      C: { ru: "Исключение действует при обоих методах расчёта.", en: "The exception applies under either computation method." },
      D: { ru: "Гараж входит в состав жилого помещения вместе с прочими постройками.", en: "The garage is part of the dwelling unit along with its other structures." }
    }
  },
  {
    sec: "s57",
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
    sec: "s57",
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
    sec: "s57",
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
    sec: "s57",
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
    sec: "s57",
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
    sec: "s57",
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
    sec: "s51",
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
  },
  {
    sec: "s51",
    ru: "Поездка длилась восемь дней: два дня заняли переговоры с заказчиком, шесть — отдых на побережье. Перелёт стоил $700. Что вычитается?",
    en: "A trip lasted eight days: two were spent negotiating with a client and six holidaying on the coast. The airfare was $700. What is deductible?",
    opts: [
      { k: "A", ru: "$700 целиком: деловая цель у поездки была", en: "The whole $700: the trip did have a business purpose" },
      { k: "B", ru: "$175 — четверть перелёта по доле деловых дней", en: "$175 — a quarter of the fare, by the share of business days" },
      { k: "C", ru: "Перелёт не вычитается; вычитаются только расходы на месте, прямо связанные с делом", en: "The fare is not deductible; only expenses at the destination directly related to the business are" },
      { k: "D", ru: "Не вычитается ничего", en: "Nothing is deductible" }
    ],
    correct: "C",
    why: {
      A: { ru: "Дорога вычитается целиком, только если поездка преимущественно деловая.", en: "The fare is deductible in full only where the trip is primarily for business." },
      B: { ru: "Дорогу по дням не делят: она либо вычитается целиком, либо не вычитается вовсе.", en: "The fare is not prorated by days: it is either deducted in full or not at all." },
      C: { ru: "Верно. Поездка преимущественно личная, и стоимость дороги — личный расход. Деловые расходы на месте при этом сохраняются.", en: "Correct. The trip was primarily personal and the fare is a personal expense. Business expenses at the destination survive." },
      D: { ru: "Расходы, прямо связанные с делом на месте, вычитаются и при личной поездке.", en: "Expenses directly related to business at the destination are deductible even on a personal trip." }
    }
  },
  {
    sec: "s51",
    ru: "Поездка на девять дней: шесть дней переговоры, потом три дня отдыха в том же городе. Перелёт $700, гостиница $180 в сутки. Что вычитается?",
    en: "A nine-day trip: six days of negotiations, then three days' holiday in the same city. Airfare $700, hotel $180 a night. What is deductible?",
    opts: [
      { k: "A", ru: "$700 перелёта и $1 080 гостиницы за шесть дней", en: "$700 of airfare and $1,080 of hotel for six nights" },
      { k: "B", ru: "$700 перелёта и $1 620 гостиницы за все девять дней", en: "$700 of airfare and $1,620 of hotel for all nine nights" },
      { k: "C", ru: "Две трети перелёта и $1 080 гостиницы", en: "Two-thirds of the airfare and $1,080 of hotel" },
      { k: "D", ru: "Не вычитается ничего: поездка смешанная", en: "Nothing: the trip was mixed" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Поездка преимущественно деловая, поэтому дорога вычитается целиком; на месте вычитаются расходы деловых дней, а продление ради отдыха — нет.", en: "Correct. The trip was primarily for business, so the fare is deducted in full; at the destination the business days' expenses are deducted and the holiday extension is not." },
      B: { ru: "Дни отдыха на месте не вычитаются, даже если поездка была деловой.", en: "Holiday days at the destination are not deducted, even on a business trip." },
      C: { ru: "Дорогу не делят пропорционально: при преимущественно деловой поездке она вычитается целиком.", en: "The fare is not prorated: on a primarily business trip it is deducted in full." },
      D: { ru: "Смешанная поездка вычет не отменяет; она его делит.", en: "A mixed trip does not cancel the deduction; it divides it." }
    }
  },
  {
    sec: "s51",
    ru: "Владелец взял в деловую поездку супругу. Та не работник бизнеса, но вела заметки на переговорах и присутствовала на деловых обедах. Вычитаются ли её расходы?",
    en: "An owner took his spouse on a business trip. She is not an employee of the business but took notes at the negotiations and attended the business lunches. Are her expenses deductible?",
    opts: [
      { k: "A", ru: "Да: она выполняла работу, полезную для бизнеса", en: "Yes: she performed work useful to the business" },
      { k: "B", ru: "Нет: подобные услуги деловой необходимости присутствия не доказывают, и работником она не является", en: "No: services of that kind do not establish that her presence was necessary, and she is not an employee" },
      { k: "C", ru: "Да, но только наполовину", en: "Yes, but only half of them" },
      { k: "D", ru: "Да, если супруги подают декларацию совместно", en: "Yes, if the spouses file jointly" }
    ],
    correct: "B",
    why: {
      A: { ru: "Печатать заметки и ходить на обеды — не та деловая цель, которая требуется.", en: "Typing notes and attending lunches is not the business purpose required." },
      B: { ru: "Верно. Нужны сразу два условия: подлинная деловая цель поездки этого человека и его статус работника бизнеса.", en: "Correct. Two conditions are needed together: a bona fide business purpose for that person's travel and their status as an employee of the business." },
      C: { ru: "Предел в половину относится к питанию, а не к вопросу о том, чьи расходы вычитаются.", en: "The 50% limit concerns meals, not the question of whose expenses are deductible." },
      D: { ru: "Способ подачи декларации на деловой характер расходов не влияет.", en: "The filing status has no bearing on whether the expense is a business one." }
    }
  },
  {
    sec: "s51",
    ru: "Компания потратила $12 000 на летний пикник для всех работников. Какая часть вычитается?",
    en: "A company spent $12,000 on a summer picnic for all its employees. How much is deductible?",
    opts: [
      { k: "A", ru: "$6 000", en: "$6,000" },
      { k: "B", ru: "$12 000", en: "$12,000" },
      { k: "C", ru: "Ничего: это развлечение", en: "Nothing: it is entertainment" },
      { k: "D", ru: "$9 600 — восемьдесят процентов", en: "$9,600 — eighty per cent" }
    ],
    correct: "B",
    why: {
      A: { ru: "Предел в половину сюда не применяется.", en: "The 50% limit does not apply here." },
      B: { ru: "Верно. Расходы на отдых и общие мероприятия для работников вычитаются целиком, если льгота предназначена в основном не высокооплачиваемым работникам.", en: "Correct. The cost of recreational and social activities for employees is deducted in full, provided the benefit is primarily for employees who are not highly compensated." },
      C: { ru: "Запрет на развлечения касается приёма клиентов, а не мероприятий для собственных работников.", en: "The bar on entertainment concerns hosting clients, not events for your own employees." },
      D: { ru: "Восемьдесят процентов — норма для тех, на кого распространяются ограничения рабочего времени министерства транспорта.", en: "Eighty per cent is the rate for those subject to the Department of Transportation's hours-of-service limits." }
    }
  },
  {
    sec: "s51",
    ru: "Водитель-дальнобойщик, подпадающий под ограничения рабочего времени министерства транспорта, потратил в рейсах $4 000 на питание. Какая часть вычитается?",
    en: "A long-haul driver subject to the Department of Transportation's hours-of-service limits spent $4,000 on meals on the road. How much is deductible?",
    opts: [
      { k: "A", ru: "$2 000", en: "$2,000" },
      { k: "B", ru: "$4 000", en: "$4,000" },
      { k: "C", ru: "$3 200", en: "$3,200" },
      { k: "D", ru: "Ничего: питание в рейсе личный расход", en: "Nothing: meals on the road are personal" }
    ],
    correct: "C",
    why: {
      A: { ru: "Половина — общее правило, но для этой категории установлена своя норма.", en: "Half is the general rule, but this category has its own rate." },
      B: { ru: "Целиком питание в отъезде не вычитается ни у кого.", en: "Nobody deducts meals away from home in full." },
      C: { ru: "Верно. Для лиц, подпадающих под ограничения рабочего времени министерства транспорта, вычитается 80% питания в отъезде.", en: "Correct. For persons subject to the Department of Transportation's hours-of-service limits, 80% of meals away from home is deducted." },
      D: { ru: "Питание в отъезде по делам — деловой расход, ограниченный процентом.", en: "Meals away from home on business are a business expense, limited by a percentage." }
    }
  },
  {
    sec: "s51",
    ru: "Фирма платит $9 000 в год членских взносов в охотничий клуб, где партнёры встречаются с заказчиками. Что вычитается?",
    en: "A firm pays $9,000 a year in membership fees to a hunting club where the partners meet clients. What is deductible?",
    opts: [
      { k: "A", ru: "$4 500", en: "$4,500" },
      { k: "B", ru: "Ничего: взнос за развлекательный объект вычету не подлежит и считается капитальным вложением", en: "Nothing: a fee for an entertainment facility is not deductible and counts as a capital expenditure" },
      { k: "C", ru: "$9 000, если деловые встречи документированы", en: "$9,000, if the business meetings are documented" },
      { k: "D", ru: "$9 000 списываются равномерно за срок членства", en: "$9,000 is written off ratably over the term of the membership" }
    ],
    correct: "B",
    why: {
      A: { ru: "Половина относится к деловому питанию, а не к взносам за объект.", en: "The half applies to business meals, not to facility fees." },
      B: { ru: "Верно. Расходы на развлекательные объекты — яхты, охотничьи домики, корты — не вычитаются вовсе, а вступительный и членский взнос считается капитальным вложением.", en: "Correct. Expenses for entertainment facilities — yachts, hunting lodges, courts — are not deductible at all, and the initiation or membership fee is a capital expenditure." },
      C: { ru: "Документирование не спасает: запрет здесь безусловный.", en: "Documentation does not save it: the bar here is absolute." },
      D: { ru: "Списания нет; сумма остаётся в капитале и учитывается при продаже участия.", en: "There is no amortization; the amount stays in capital and is taken into account on a sale of the interest." }
    }
  },
  {
    sec: "s52",
    ru: "Муж и жена — совладельцы фирмы. Каждый подарил одному и тому же заказчику по подарку за $20, всего $40. Какова сумма вычета?",
    en: "A husband and wife co-own a firm. Each gave the same customer a $20 gift, $40 in all. What is the deduction?",
    opts: [
      { k: "A", ru: "$40: у каждого свой предел", en: "$40: each has their own limit" },
      { k: "B", ru: "$25", en: "$25" },
      { k: "C", ru: "$50", en: "$50" },
      { k: "D", ru: "$20", en: "$20" }
    ],
    correct: "B",
    why: {
      A: { ru: "Супруги считаются одним налогоплательщиком, даже если подают декларации раздельно и у каждого свои деловые отношения с получателем.", en: "Spouses count as one taxpayer, even filing separately and each with their own business relationship with the recipient." },
      B: { ru: "Верно. Один получатель, один предел на двоих: из $40 вычитается $25.", en: "Correct. One recipient, one limit between them: of the $40, $25 is deducted." },
      C: { ru: "Удвоенного предела не бывает: он на получателя, а не на дарителя.", en: "There is no doubled limit: it is per recipient, not per giver." },
      D: { ru: "Вычитается больше: предел $25 не достигнут одним подарком, но общий подарок его превышает.", en: "More is deductible: one gift does not reach $25, but the combined gift exceeds it." }
    }
  },
  {
    sec: "s53",
    ru: "Владелец застраховал свою жизнь, чтобы банк выдал кредит на развитие бизнеса. Вычитаются ли премии?",
    en: "An owner insured his own life so that the bank would grant a business loan. Are the premiums deductible?",
    opts: [
      { k: "A", ru: "Да, как деловой расход", en: "Yes, as a business expense" },
      { k: "B", ru: "Да, как проценты по деловому займу", en: "Yes, as interest on the business loan" },
      { k: "C", ru: "Нет: премии по страховке, взятой ради получения или защиты займа, не вычитаются", en: "No: premiums on a policy taken to get or protect a loan are not deductible" },
      { k: "D", ru: "Да, если выгодоприобретателем назначен банк", en: "Yes, if the bank is named beneficiary" }
    ],
    correct: "C",
    why: {
      A: { ru: "Именно этот случай из деловых расходов и исключён.", en: "This is precisely the case excluded from business expenses." },
      B: { ru: "Премии не являются ни процентами, ни расходами на получение займа.", en: "Premiums are neither interest nor a cost of financing the loan." },
      C: { ru: "Верно. И отдельно: страховая выплата в случае смерти не облагается, даже если пойдёт на погашение долга.", en: "Correct. And separately: the death proceeds are not taxed even if used to pay off the debt." },
      D: { ru: "Личность выгодоприобретателя запрета не снимает.", en: "Who the beneficiary is does not lift the bar." }
    }
  },
  {
    sec: "s53",
    ru: "Какая из двух страховок вычитается: от простоя бизнеса из-за пожара или от потери заработка владельца из-за болезни?",
    en: "Which of the two is deductible: business interruption cover for a fire, or cover for the owner's lost earnings through illness?",
    opts: [
      { k: "A", ru: "Обе", en: "Both" },
      { k: "B", ru: "Только от простоя бизнеса", en: "Business interruption only" },
      { k: "C", ru: "Только от потери заработка", en: "Lost earnings only" },
      { k: "D", ru: "Ни одна", en: "Neither" }
    ],
    correct: "B",
    why: {
      A: { ru: "Полис, возмещающий утраченный заработок при болезни или нетрудоспособности, из вычета исключён.", en: "A policy paying for lost earnings through sickness or disability is excluded." },
      B: { ru: "Верно. Страхование от простоя возмещает упущенную прибыль бизнеса и вычитается; страхование заработка владельца — личная защита.", en: "Correct. Business interruption cover replaces the business's lost profits and is deductible; cover for the owner's earnings is personal protection." },
      C: { ru: "Всё наоборот: вычитается именно страхование бизнеса.", en: "It is the other way round: it is the business cover that is deductible." },
      D: { ru: "Страхование от простоя прямо названо вычитаемым.", en: "Business interruption insurance is expressly listed as deductible." }
    }
  },
  {
    sec: "s54",
    ru: "Акционер одолжил своей корпорации $40 000, чтобы защитить собственные вложения в неё. Заём стал безнадёжным. Как учитывается убыток?",
    en: "A shareholder lent his corporation $40,000 to protect his own investment in it. The loan became worthless. How is the loss treated?",
    opts: [
      { k: "A", ru: "Деловой безнадёжный долг: обычный убыток", en: "A business bad debt: an ordinary loss" },
      { k: "B", ru: "Неделовой безнадёжный долг: краткосрочный капитальный убыток", en: "A nonbusiness bad debt: a short-term capital loss" },
      { k: "C", ru: "Убыток не признаётся вовсе", en: "No loss is recognised" },
      { k: "D", ru: "Долгосрочный капитальный убыток", en: "A long-term capital loss" }
    ],
    correct: "B",
    why: {
      A: { ru: "Заём ради защиты вложений деловым не считается: инвестиции — не бизнес.", en: "A loan to protect an investment is not a business loan: investing is not a trade or business." },
      B: { ru: "Верно. Полностью безнадёжный неделовой долг вычитается в год, когда стал безнадёжным, как краткосрочный капитальный убыток — независимо от срока владения.", en: "Correct. A wholly worthless nonbusiness debt is deducted in the year it becomes worthless, as a short-term capital loss — whatever the holding period." },
      C: { ru: "Убыток признаётся, но иначе. Иное дело, если по обстоятельствам заём был вкладом в капитал.", en: "A loss is recognised, but differently. It would be otherwise if the facts showed the loan was a contribution to capital." },
      D: { ru: "Неделовой безнадёжный долг всегда краткосрочный, сколько бы его ни держали.", en: "A nonbusiness bad debt is always short-term, however long it was held." }
    }
  },
  {
    sec: "s54",
    ru: "В 2024 году компания списала безнадёжный долг $9 000 и получила по нему вычет. В 2025 году должник неожиданно заплатил $9 000. Как это отражается?",
    en: "In 2024 a company wrote off a $9,000 bad debt and took the deduction. In 2025 the debtor unexpectedly paid the $9,000. How is that reported?",
    opts: [
      { k: "A", ru: "Прочий доход 2025 года", en: "Other income for 2025" },
      { k: "B", ru: "Уточнённая декларация за 2024 год со снятием вычета", en: "An amended 2024 return removing the deduction" },
      { k: "C", ru: "Не отражается: деньги уже были обложены в 2024 году", en: "Not reported: the money was already taxed in 2024" },
      { k: "D", ru: "Краткосрочный прирост капитала", en: "Short-term capital gain" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Долг, списанный в прошлом году и взысканный в текущем, показывается прочим доходом — в той мере, в какой вычет дал выгоду.", en: "Correct. A debt written off in a prior year and recovered in the current one is reported as other income — to the extent the deduction produced a benefit." },
      B: { ru: "Прошлый год не пересматривается: в нём вычет был правомерен.", en: "The prior year is not reopened: the deduction was proper when taken." },
      C: { ru: "В 2024 году сумма как раз была вычтена, а не обложена.", en: "In 2024 the amount was deducted, not taxed." },
      D: { ru: "Взыскание списанного долга приростом капитала не является.", en: "Recovering a written-off debt is not a capital gain." }
    }
  },
  {
    sec: "s55",
    ru: "Партнёрство уплатило $28 000 комиссий и юридических гонораров за размещение долей среди инвесторов. Как это учитывается?",
    en: "A partnership paid $28,000 of commissions and legal fees for placing its interests with investors. How is that treated?",
    opts: [
      { k: "A", ru: "Организационные затраты: $5 000 сразу, остальное за 180 месяцев", en: "Organizational costs: $5,000 at once and the rest over 180 months" },
      { k: "B", ru: "Вычитается целиком в год уплаты", en: "Deducted in full in the year paid" },
      { k: "C", ru: "Капитализируется и не списывается никогда", en: "Capitalized and never written off" },
      { k: "D", ru: "Списывается за 15 лет как нематериальный актив §197", en: "Written off over 15 years as a section 197 intangible" }
    ],
    correct: "C",
    why: {
      A: { ru: "Организационные затраты создают само партнёрство; эти деньги продают в нём доли.", en: "Organizational costs create the partnership itself; this money sells shares in it." },
      B: { ru: "Синдикационные затраты текущим расходом не являются.", en: "Syndication costs are not a current expense." },
      C: { ru: "Верно. Синдикационные затраты капитализируются и не могут быть ни амортизированы, ни списаны — ни за 180 месяцев, ни при ликвидации.", en: "Correct. Syndication costs are capitalized and can be neither amortized nor deducted — not over 180 months, not on liquidation." },
      D: { ru: "К §197 они не относятся.", en: "They are not section 197 intangibles." }
    }
  },
  {
    sec: "s55",
    ru: "Корпорация начала деятельность в 2025 году, потратив $20 000 на исследование рынка и $12 000 на получение устава и организационные собрания. Какова сумма единовременных вычетов?",
    en: "A corporation began business in 2025, having spent $20,000 on market research and $12,000 on obtaining its charter and on organizational meetings. What is the total of the immediate deductions?",
    opts: [
      { k: "A", ru: "$5 000", en: "$5,000" },
      { k: "B", ru: "$10 000", en: "$10,000" },
      { k: "C", ru: "$32 000", en: "$32,000" },
      { k: "D", ru: "$0: оба вида затрат капитализируются", en: "$0: both kinds are capitalized" }
    ],
    correct: "B",
    why: {
      A: { ru: "Предел не один общий: у затрат на создание бизнеса и у организационных затрат он свой.", en: "There is not one shared limit: start-up costs and organizational costs each have their own." },
      B: { ru: "Верно. $5 000 по затратам на создание бизнеса и $5 000 по организационным; ни та ни другая сумма порога $50 000 не достигла. Остатки $15 000 и $7 000 списываются за 180 месяцев.", en: "Correct. $5,000 for the start-up costs and $5,000 for the organizational costs; neither amount reached the $50,000 threshold. The remainders of $15,000 and $7,000 are amortized over 180 months." },
      C: { ru: "Сразу вычитается не всё: остаток идёт в списание.", en: "Not everything is deducted at once: the remainder goes into amortization." },
      D: { ru: "Единовременный вычет существует по обоим видам затрат.", en: "An immediate deduction exists for both kinds of cost." }
    }
  },
  {
    sec: "s55",
    ru: "Предприниматель, никогда не работавший в этой отрасли, потратил $14 000 на изучение возможности купить автомойку и в итоге отказался от затеи. Что он вычитает?",
    en: "A proprietor who had never worked in the industry spent $14,000 investigating the purchase of a car wash and in the end dropped the idea. What does he deduct?",
    opts: [
      { k: "A", ru: "$5 000 сразу и остаток за 180 месяцев", en: "$5,000 at once and the rest over 180 months" },
      { k: "B", ru: "$14 000 как убыток", en: "$14,000 as a loss" },
      { k: "C", ru: "Ничего", en: "Nothing" },
      { k: "D", ru: "$14 000 как краткосрочный капитальный убыток", en: "$14,000 as a short-term capital loss" }
    ],
    correct: "C",
    why: {
      A: { ru: "Этот порядок отсчитывается от начала активной деятельности, а её не было.", en: "That treatment runs from the start of the active business, and there was none." },
      B: { ru: "Убытка нет: расход не относится ни к какому существующему делу налогоплательщика.", en: "There is no loss: the expense relates to no existing trade of the taxpayer." },
      C: { ru: "Верно. Не занимались этим делом раньше и не вошли в него — затраты на его создание не вычитаются и не списываются. Будь у него уже автомойка, $14 000 вычитались бы независимо от исхода.", en: "Correct. Not previously in that business and never entering it — the start-up costs are neither deducted nor amortized. Had he already owned a car wash, the $14,000 would be deductible whatever the outcome." },
      D: { ru: "Капитального актива налогоплательщик не приобретал и не отчуждал.", en: "The taxpayer neither acquired nor disposed of a capital asset." }
    }
  },
  {
    sec: "s55",
    ru: "Станок со скорректированным базисом $18 000 перестал использоваться, вывезен на свалку, возмещения не предвидится. Когда признаётся убыток?",
    en: "A machine with an adjusted basis of $18,000 went out of use and was scrapped, with no reimbursement expected. When is the loss recognised?",
    opts: [
      { k: "A", ru: "В году отказа от имущества, в размере скорректированного базиса", en: "In the year of abandonment, in the amount of the adjusted basis" },
      { k: "B", ru: "Только при продаже или ином отчуждении", en: "Only on a sale or other disposition" },
      { k: "C", ru: "Равномерно за оставшийся срок амортизации", en: "Ratably over the remaining depreciation period" },
      { k: "D", ru: "Убыток не признаётся", en: "No loss is recognised" }
    ],
    correct: "A",
    why: {
      A: { ru: "Верно. Отказ от имущества и есть событие: убыток равен скорректированному базису, по которому считался бы убыток при продаже.", en: "Correct. The abandonment is the event: the loss equals the adjusted basis that would be used to figure a loss on a sale." },
      B: { ru: "Ждать продажи не нужно — имущества уже нет.", en: "There is no need to wait for a sale — the property is gone." },
      C: { ru: "Амортизация на брошенное имущество не продолжается.", en: "Depreciation does not continue on abandoned property." },
      D: { ru: "Признаётся, и в год отказа.", en: "It is recognised, in the year of abandonment." }
    }
  },
  {
    sec: "s55",
    ru: "Диспансер, законный по праву своего штата, торгует веществом, запрещённым на федеральном уровне. Выручка $900 000, себестоимость проданного $500 000, зарплата и аренда $250 000. Что учитывается для федерального налога?",
    en: "A dispensary lawful under its state's law sells a substance banned federally. Receipts $900,000, cost of goods sold $500,000, wages and rent $250,000. What counts for federal tax?",
    opts: [
      { k: "A", ru: "Облагается $150 000: вычитается всё", en: "$150,000 is taxed: everything is deducted" },
      { k: "B", ru: "Облагается $400 000: себестоимость уменьшает выручку, а зарплата и аренда не вычитаются", en: "$400,000 is taxed: cost of goods sold reduces receipts, but wages and rent are not deducted" },
      { k: "C", ru: "Облагается $900 000: не учитывается ничего", en: "$900,000 is taxed: nothing is taken into account" },
      { k: "D", ru: "Не облагается ничего: деятельность незаконна", en: "Nothing is taxed: the activity is illegal" }
    ],
    correct: "B",
    why: {
      A: { ru: "Законность по праву штата федерального запрета не снимает.", en: "Lawfulness under state law does not lift the federal bar." },
      B: { ru: "Верно. Расходы такого дела не вычитаются, но себестоимость проданного вычетом и не является: она уменьшает выручку при расчёте валового дохода.", en: "Correct. The expenses of such a business are not deductible, but cost of goods sold is not a deduction: it reduces receipts in arriving at gross income." },
      C: { ru: "Себестоимость проданного учитывается всегда — это конституционное ограничение понятия дохода.", en: "Cost of goods sold is always taken into account — a constitutional limit on what income means." },
      D: { ru: "Доход облагается независимо от законности источника.", en: "Income is taxed whatever the legality of its source." }
    }
  },
  {
    sec: "s55",
    ru: "Компания взяла заём и на все средства купила освобождённые от налога муниципальные облигации. Вычитаются ли проценты по займу?",
    en: "A company borrowed and used all the proceeds to buy tax-exempt municipal bonds. Is the interest on the loan deductible?",
    opts: [
      { k: "A", ru: "Да, как инвестиционные проценты", en: "Yes, as investment interest" },
      { k: "B", ru: "Да, в пределах инвестиционного дохода", en: "Yes, up to investment income" },
      { k: "C", ru: "Нет", en: "No" },
      { k: "D", ru: "Да, если облигации приобретены для деловых целей", en: "Yes, if the bonds were bought for business purposes" }
    ],
    correct: "C",
    why: {
      A: { ru: "Инвестиционные проценты вычитаются только против облагаемого инвестиционного дохода.", en: "Investment interest is deductible only against taxable investment income." },
      B: { ru: "Доход по этим облигациям налогом не облагается и в расчёт предела не входит.", en: "The income from these bonds is not taxed and does not enter that limit." },
      C: { ru: "Верно. Расходы, произведённые ради дохода, освобождённого от налога, не вычитаются: иначе одна и та же сумма дала бы выгоду дважды.", en: "Correct. Costs incurred to produce tax-exempt income are not deductible: otherwise the same money would give a benefit twice." },
      D: { ru: "Цель приобретения запрета не снимает: решает необлагаемость дохода.", en: "The purpose of the purchase does not lift the bar: what decides is that the income is exempt." }
    }
  },
  {
    sec: "s55",
    ru: "Малый бизнес потратил $6 250 на устранение барьеров для инвалидов. Какой кредит по форме 8826 ему полагается?",
    en: "A small business spent $6,250 on removing barriers for the disabled. What credit is available on Form 8826?",
    opts: [
      { k: "A", ru: "$3 125", en: "$3,125" },
      { k: "B", ru: "$3 000", en: "$3,000" },
      { k: "C", ru: "$5 000", en: "$5,000" },
      { k: "D", ru: "$6 250", en: "$6,250" }
    ],
    correct: "B",
    why: {
      A: { ru: "Это половина всей суммы; первые $250 в расчёт не входят.", en: "That is half of the whole amount; the first $250 does not count." },
      B: { ru: "Верно. Считается половина затрат между $250 и $10 250: ($6 250 − $250) × 50%. На сумму кредита при этом уменьшается вычет.", en: "Correct. Half the expenditures between $250 and $10,250: ($6,250 − $250) × 50%. The deduction is reduced by the amount of the credit." },
      C: { ru: "$5 000 — потолок кредита, он достигается при затратах $10 250.", en: "$5,000 is the ceiling, reached at $10,250 of expenditures." },
      D: { ru: "Кредит равен половине учитываемых затрат, а не всей сумме.", en: "The credit is half the counted expenditures, not the whole amount." }
    }
  },
  {
    sec: "s55",
    ru: "Компания потратила $1 800 силами собственных сотрудников на переписку с законодателями и $7 000 на оплату стороннего лоббиста. Что вычитается?",
    en: "A company spent $1,800 of its own staff's time corresponding with legislators and $7,000 paying an outside lobbyist. What is deductible?",
    opts: [
      { k: "A", ru: "$8 800", en: "$8,800" },
      { k: "B", ru: "$1 800", en: "$1,800" },
      { k: "C", ru: "$2 000", en: "$2,000" },
      { k: "D", ru: "Ничего", en: "Nothing" }
    ],
    correct: "B",
    why: {
      A: { ru: "Оплата сторонних лоббистов не вычитается с первого доллара.", en: "Payments to outside lobbyists are not deductible from the first dollar." },
      B: { ru: "Верно. Собственные расходы на влияние на законодательство до $2 000 за год вычитаются; $1 800 в предел укладываются, а $7 000 стороннему лоббисту — нет.", en: "Correct. In-house expenses of influencing legislation up to $2,000 a year are deductible; the $1,800 fits within it, the $7,000 to the outside lobbyist does not." },
      C: { ru: "$2 000 — это предел, а не вычитаемая сумма: вычитается фактически потраченное.", en: "$2,000 is the limit, not the amount deducted: what is deducted is what was actually spent." },
      D: { ru: "Узкое исключение для собственных расходов существует.", en: "The narrow in-house exception does exist." }
    }
  },
  {
    sec: "s55",
    ru: "Владелец сдаёт склад собственной компании, в которой существенно участвует. Аренда дала $50 000 чистого дохода. Можно ли зачесть против него пассивные убытки от другой деятельности?",
    en: "An owner lets a warehouse to his own company, in which he materially participates. The letting produced $50,000 of net income. Can passive losses from another activity be offset against it?",
    opts: [
      { k: "A", ru: "Да: аренда всегда пассивная деятельность", en: "Yes: renting is always a passive activity" },
      { k: "B", ru: "Нет: при самоаренде чистый доход считается непассивным", en: "No: on self-rental the net income is nonpassive" },
      { k: "C", ru: "Да, в пределах половины дохода", en: "Yes, up to half the income" },
      { k: "D", ru: "Нет, потому что доход от аренды вообще не показывается в декларации", en: "No, because rental income is not reported at all" }
    ],
    correct: "B",
    why: {
      A: { ru: "Правило о самоаренде как раз выводит такой доход из пассивной категории.", en: "The self-rental rule is what takes such income out of the passive category." },
      B: { ru: "Верно. Доход показывается в Schedule E, но в пассивную колонку формы 8582 не попадает. При этом убыток от самоаренды остался бы пассивным — правило несимметрично.", en: "Correct. The income is reported on Schedule E but does not enter the passive column of Form 8582. A self-rental loss, by contrast, would stay passive — the rule is one-sided." },
      C: { ru: "Частичного зачёта здесь не предусмотрено.", en: "There is no partial offset here." },
      D: { ru: "Доход показывается в Schedule E как обычно.", en: "The income is reported on Schedule E as usual." }
    }
  }
];
