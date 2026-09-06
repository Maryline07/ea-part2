/* ===================================================================
   EA Part 2 — каркас курса.

   Единственный список модулей. Из него строятся выпадающий список в
   верхней панели, переход «предыдущий / следующий» внизу страницы
   модуля и выбор модулей в тренажёре.

   Поле open отмечает написанные модули. Ненаписанные остаются в списке
   видимыми, но не кликабельными: структура курса должна быть видна
   целиком, иначе непонятно, сколько ещё впереди.

   Названия здесь — короткие, без подзаголовка: они попадают в узкие
   места (строка перехода, чекбокс тренажёра). Развёрнутые описания
   живут на главной странице.
   =================================================================== */

window.MODULES = [
  { id: "su01", no: "01", open: true,
    ru: "Формы ведения бизнеса, методы и периоды учёта",
    en: "Business forms, accounting methods and periods" },
  { id: "su02", no: "02", open: true,
    ru: "Доход бизнеса, самозанятость и фермеры",
    en: "Business income, self-employment tax and farming" },
  { id: "su03", no: "03", open: true,
    ru: "Аренда недвижимости и лимиты убытков",
    en: "Rental property and loss limitations" },
  { id: "su04", no: "04", open: true,
    ru: "Расходы бизнеса: оплата труда, проценты, аренда, налоги",
    en: "Business expenses: pay, interest, rent and taxes" },
  { id: "su05", no: "05", open: true,
    ru: "Прочие вычеты, домашний офис и вычет QBI",
    en: "Other deductions, home office and the QBI deduction" },
  { id: "su06", no: "06", open: true,
    ru: "Базис и сделки с имуществом",
    en: "Basis and property transactions" },
  { id: "su07", no: "07", open: true,
    ru: "Возмещение стоимости: амортизация, §179, бонусная амортизация",
    en: "Cost recovery: depreciation, section 179, bonus depreciation" },
  { id: "su08", no: "08", open: true,
    ru: "Кредиты, убытки и дополнительные налоги",
    en: "Credits, losses and additional taxes" },
  { id: "su09", no: "09", open: false,
    ru: "Вклады в партнёрство",
    en: "Contributions to a partnership" },
  { id: "su10", no: "10", open: false,
    ru: "Операции партнёрства и распределения",
    en: "Partnership operations and distributions" },
  { id: "su11", no: "11", open: false,
    ru: "Выбытие доли партнёра",
    en: "Disposition of a partner’s interest" },
  { id: "su12", no: "12", open: false,
    ru: "Корпорации: классификация, декларации, платежи",
    en: "Corporations: classification, returns and payments" },
  { id: "su13", no: "13", open: false,
    ru: "Образование корпорации и §351",
    en: "Corporate formation and section 351" },
  { id: "su14", no: "14", open: false,
    ru: "Доходы, вычеты и убытки корпорации",
    en: "Corporate income, deductions and losses" },
  { id: "su15", no: "15", open: false,
    ru: "Распределения корпорации и накопленная прибыль",
    en: "Corporate distributions and earnings and profits" },
  { id: "su16", no: "16", open: false,
    ru: "Выкуп акций и ликвидация",
    en: "Stock redemptions and liquidations" },
  { id: "su17", no: "17", open: false,
    ru: "S-корпорации",
    en: "S corporations" },
  { id: "su18", no: "18", open: false,
    ru: "Наследственная масса и трасты",
    en: "Estates and trusts" },
  { id: "su19", no: "19", open: false,
    ru: "Пенсионные планы малого бизнеса",
    en: "Retirement plans for small businesses" },
  { id: "su20", no: "20", open: false,
    ru: "Освобождённые организации",
    en: "Exempt organizations" }
];
