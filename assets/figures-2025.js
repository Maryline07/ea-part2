/* ===================================================================
   Числовой справочник, налоговый период 2025.

   Единственный источник истины для всех страниц. В разметке числа не
   пишутся: используется <span data-fig="ключ"></span>, и app.js
   подставляет значение, отформатированное по текущему языку.

   ПРАВИЛО: ни одна запись не добавляется без поля src со ссылкой на
   irs.gov. Значение, которое не удалось подтвердить, в файл не попадает.

   unit: usd | pct | int | date | text
   =================================================================== */

var SRC_P225 = { t: "Publication 225 (2025), Farmer's Tax Guide", u: "https://www.irs.gov/publications/p225" };
var SRC_P527 = { t: "Publication 527 (2025), Residential Rental Property", u: "https://www.irs.gov/publications/p527" };
var SRC_P925 = { t: "Publication 925 (2025), Passive Activity and At-Risk Rules", u: "https://www.irs.gov/publications/p925" };
var SRC_I461 = { t: "Instructions for Form 461 (2025)", u: "https://www.irs.gov/instructions/i461" };
var SRC_P463 = { t: "Publication 463 (2025), Travel, Gift, and Car Expenses", u: "https://www.irs.gov/publications/p463" };
var SRC_P587 = { t: "Publication 587 (2025), Business Use of Your Home", u: "https://www.irs.gov/publications/p587" };
var SRC_RP2440 = { t: "Rev. Proc. 2024-40, §2.27", u: "https://www.irs.gov/pub/irs-drop/rp-24-40.pdf" };
var SRC_I4562 = { t: "Instructions for Form 4562 (2025)", u: "https://www.irs.gov/instructions/i4562" };

window.FIGURES = {
  meta: {
    taxYear: 2025,
    verified: "2026-09-04",
    lawAsOf: "2025-12-31",
    window: { from: "2026-07-01", to: "2027-02-28" }
  },

  items: {

    /* --- Методы учёта ------------------------------------------------ */

    gross_receipts_448c: {
      n: 31000000, unit: "usd",
      ru: "Тест валовой выручки §448(c)",
      en: "Section 448(c) gross receipts test",
      note_ru: "Средняя годовая валовая выручка за 3 предшествующих года. Ниже порога — можно кассовый метод, не применяется §263A, не действует лимит §163(j).",
      note_en: "Average annual gross receipts for the 3 prior tax years. At or below the threshold: cash method allowed, section 263A does not apply, section 163(j) limitation does not apply.",
      src: { t: "Instructions for Form 1120 (2025)", u: "https://www.irs.gov/instructions/i1120" }
    },

    sec444_deferral: {
      n: 3, unit: "int",
      ru: "Максимальная отсрочка по §444, месяцев",
      en: "Maximum deferral period under section 444, months",
      note_ru: "Выбор нестандартного налогового года по форме 8716. Требует депозитных платежей по форме 8752.",
      note_en: "Election of a non-required tax year on Form 8716. Requires required payments on Form 8752.",
      src: { t: "Instructions for Form 8716", u: "https://www.irs.gov/forms-pubs/about-form-8716" }
    },

    /* --- Налог на самозанятость -------------------------------------- */

    se_wage_base: {
      n: 176100, unit: "usd",
      ru: "База для социальной части налога на самозанятость",
      en: "Maximum self-employment income subject to social security tax",
      src: { t: "Instructions for Schedule SE (2025)", u: "https://www.irs.gov/instructions/i1040sse" }
    },
    se_rate_total: {
      n: 15.3, unit: "pct",
      ru: "Ставка налога на самозанятость",
      en: "Self-employment tax rate",
      src: { t: "Instructions for Schedule SE (2025)", u: "https://www.irs.gov/instructions/i1040sse" }
    },
    se_rate_ss: {
      n: 12.4, unit: "pct",
      ru: "Социальная часть",
      en: "Social security portion",
      src: { t: "Instructions for Schedule SE (2025)", u: "https://www.irs.gov/instructions/i1040sse" }
    },
    se_rate_medicare: {
      n: 2.9, unit: "pct",
      ru: "Медицинская часть",
      en: "Medicare portion",
      note_ru: "Потолка нет — применяется ко всему чистому заработку.",
      note_en: "No ceiling — applies to all net earnings.",
      src: { t: "Instructions for Schedule SE (2025)", u: "https://www.irs.gov/instructions/i1040sse" }
    },
    se_net_factor: {
      n: 92.35, unit: "pct",
      ru: "Множитель чистого заработка",
      en: "Net earnings multiplier",
      note_ru: "Чистая прибыль умножается на этот процент перед начислением налога.",
      note_en: "Net profit is multiplied by this percentage before the tax is computed.",
      src: { t: "Instructions for Schedule SE (2025)", u: "https://www.irs.gov/instructions/i1040sse" }
    },
    se_threshold: {
      n: 400, unit: "usd",
      ru: "Порог подачи Schedule SE",
      en: "Schedule SE filing threshold",
      note_ru: "Чистый заработок от самозанятости от этой суммы обязывает подать Schedule SE.",
      note_en: "Net earnings from self-employment of this amount or more require Schedule SE.",
      src: { t: "Instructions for Schedule SE (2025)", u: "https://www.irs.gov/instructions/i1040sse" }
    },
    se_church: {
      n: 108.28, unit: "usd",
      ru: "Порог для дохода церковного работника",
      en: "Church employee income threshold",
      src: { t: "Instructions for Schedule SE (2025)", u: "https://www.irs.gov/instructions/i1040sse" }
    },

    addl_medicare_rate: {
      n: 0.9, unit: "pct",
      ru: "Дополнительный налог Medicare",
      en: "Additional Medicare Tax",
      note_ru: "Начисляется сверх обычной ставки на сумму превышения порога. Работодатель не софинансирует.",
      note_en: "Imposed on the excess over the threshold. There is no employer match.",
      src: { t: "Topic no. 560, Additional Medicare Tax", u: "https://www.irs.gov/taxtopics/tc560" }
    },
    addl_medicare_mfj: {
      n: 250000, unit: "usd",
      ru: "Порог: совместная декларация супругов",
      en: "Threshold: married filing jointly",
      src: { t: "Topic no. 560, Additional Medicare Tax", u: "https://www.irs.gov/taxtopics/tc560" }
    },
    addl_medicare_mfs: {
      n: 125000, unit: "usd",
      ru: "Порог: раздельная декларация супругов",
      en: "Threshold: married filing separately",
      src: { t: "Topic no. 560, Additional Medicare Tax", u: "https://www.irs.gov/taxtopics/tc560" }
    },
    addl_medicare_single: {
      n: 200000, unit: "usd",
      ru: "Порог: остальные статусы",
      en: "Threshold: all other filing statuses",
      src: { t: "Topic no. 560, Additional Medicare Tax", u: "https://www.irs.gov/taxtopics/tc560" }
    },

    /* --- Дополнительные методы расчёта (фермерский и нефермерский) ---- */

    farm_opt_gross: {
      n: 10860, unit: "usd",
      ru: "Фермерский метод: валовой доход не выше",
      en: "Farm optional method: gross farm income at or below",
      src: { t: "Instructions for Schedule SE (2025)", u: "https://www.irs.gov/instructions/i1040sse" }
    },
    farm_opt_profit: {
      n: 7840, unit: "usd",
      ru: "Порог чистой прибыли для дополнительных методов",
      en: "Net profit threshold for the optional methods",
      src: { t: "Instructions for Schedule SE (2025)", u: "https://www.irs.gov/instructions/i1040sse" }
    },
    farm_opt_max: {
      n: 7240, unit: "usd",
      ru: "Максимум, показываемый по дополнительному методу",
      en: "Maximum amount reportable under an optional method",
      src: { t: "Instructions for Schedule SE (2025)", u: "https://www.irs.gov/instructions/i1040sse" }
    },

    /* --- FUTA --------------------------------------------------------- */

    futa_rate: {
      n: 6.0, unit: "pct",
      ru: "Ставка FUTA до кредита",
      en: "Gross FUTA tax rate",
      src: { t: "Instructions for Form 940 (2025)", u: "https://www.irs.gov/instructions/i940" }
    },
    futa_base: {
      n: 7000, unit: "usd",
      ru: "База FUTA на работника за год",
      en: "FUTA wage base per employee per year",
      src: { t: "Instructions for Form 940 (2025)", u: "https://www.irs.gov/instructions/i940" }
    },
    futa_credit: {
      n: 5.4, unit: "pct",
      ru: "Максимальный кредит за взносы в штат",
      en: "Maximum credit for state unemployment contributions",
      src: { t: "Instructions for Form 940 (2025)", u: "https://www.irs.gov/instructions/i940" }
    },
    futa_net: {
      n: 0.6, unit: "pct",
      ru: "Эффективная ставка FUTA с полным кредитом",
      en: "Net FUTA rate with the full credit",
      src: { t: "Instructions for Form 940 (2025)", u: "https://www.irs.gov/instructions/i940" }
    },
    futa_deposit: {
      n: 500, unit: "usd",
      ru: "Порог обязательного квартального депозита FUTA",
      en: "FUTA quarterly deposit threshold",
      note_ru: "Накопленная задолженность свыше этой суммы депонируется по итогам квартала.",
      note_en: "Accumulated liability over this amount must be deposited by the end of the quarter.",
      src: { t: "Instructions for Form 940 (2025)", u: "https://www.irs.gov/instructions/i940" }
    },
    futa_test_wages: {
      n: 1500, unit: "usd",
      ru: "Тест обязанности по FUTA: выплаты за квартал",
      en: "FUTA filing test: wages paid in any calendar quarter",
      src: { t: "Instructions for Form 940 (2025)", u: "https://www.irs.gov/instructions/i940" }
    },
    futa_test_weeks: {
      n: 20, unit: "int",
      ru: "Тест обязанности по FUTA: число недель с работником",
      en: "FUTA filing test: number of weeks with an employee",
      src: { t: "Instructions for Form 940 (2025)", u: "https://www.irs.gov/instructions/i940" }
    },

    /* --- Информационные декларации ------------------------------------ */

    nec_threshold_2025: {
      n: 600, unit: "usd",
      ru: "Порог формы 1099-NEC за 2025 год",
      en: "Form 1099-NEC threshold for 2025",
      note_ru: "Для платежей после 31 декабря 2025 года порог повышен до $2 000. На экзамене по периоду 2025 действует $600.",
      note_en: "For payments made after December 31, 2025, the threshold rises to $2,000. For the 2025 tax year the threshold is $600.",
      src: { t: "Instructions for Forms 1099-MISC and 1099-NEC (Rev. April 2025)", u: "https://www.irs.gov/pub/irs-prior/i1099mec--2025.pdf" }
    },
    k1099_amount: {
      n: 20000, unit: "usd",
      ru: "Форма 1099-K: сумма платежей",
      en: "Form 1099-K: gross payments",
      note_ru: "Обязанность возникает только при одновременном превышении суммы и числа операций.",
      note_en: "Both the dollar amount and the transaction count must be exceeded.",
      src: { t: "IRS FAQs on the Form 1099-K threshold under the OBBB", u: "https://www.irs.gov/newsroom/irs-issues-faqs-on-form-1099-k-threshold-under-the-one-big-beautiful-bill-dollar-limit-reverts-to-20000" }
    },
    k1099_count: {
      n: 200, unit: "int",
      ru: "Форма 1099-K: число операций",
      en: "Form 1099-K: number of transactions",
      src: { t: "IRS FAQs on the Form 1099-K threshold under the OBBB", u: "https://www.irs.gov/newsroom/irs-issues-faqs-on-form-1099-k-threshold-under-the-one-big-beautiful-bill-dollar-limit-reverts-to-20000" }
    },
    efile_threshold: {
      n: 10, unit: "int",
      ru: "Порог обязательного электронного представления",
      en: "Electronic filing requirement threshold",
      note_ru: "Считаются все виды деклараций за календарный год в совокупности.",
      note_en: "All return types filed during the calendar year are aggregated.",
      src: { t: "Instructions for Form 1120-S (2025)", u: "https://www.irs.gov/instructions/i1120s" }
    },

    /* --- Штрафы -------------------------------------------------------- */

    pen_6698: {
      n: 255, unit: "usd",
      ru: "§6698: штраф за месяц за каждого партнёра",
      en: "Section 6698: penalty per month per partner",
      note_ru: "Не более 12 месяцев. Умножается на число лиц, бывших партнёрами в любой части года.",
      note_en: "Up to 12 months, multiplied by the number of persons who were partners during any part of the year.",
      src: { t: "Instructions for Form 1065 (2025)", u: "https://www.irs.gov/instructions/i1065" }
    },
    pen_6699: {
      n: 255, unit: "usd",
      ru: "§6699: штраф за месяц за каждого акционера",
      en: "Section 6699: penalty per month per shareholder",
      note_ru: "Не более 12 месяцев.",
      note_en: "Up to 12 months.",
      src: { t: "Instructions for Form 1120-S (2025)", u: "https://www.irs.gov/instructions/i1120s" }
    },
    pen_k1: {
      n: 340, unit: "usd",
      ru: "Штраф за непредставление K-1",
      en: "Penalty for each failure to furnish Schedule K-1",
      src: { t: "Instructions for Form 1065 (2025)", u: "https://www.irs.gov/instructions/i1065" }
    },
    pen_k1_max_small: {
      n: 1366000, unit: "usd",
      ru: "Годовой максимум при выручке до $5 млн",
      en: "Annual maximum, gross receipts at or below $5 million",
      src: { t: "Instructions for Form 1065 (2025)", u: "https://www.irs.gov/instructions/i1065" }
    },
    pen_k1_max_large: {
      n: 4098500, unit: "usd",
      ru: "Годовой максимум при выручке свыше $5 млн",
      en: "Annual maximum, gross receipts over $5 million",
      src: { t: "Instructions for Form 1065 (2025)", u: "https://www.irs.gov/instructions/i1065" }
    },
    pen_k1_intentional: {
      n: 680, unit: "usd",
      ru: "Умышленное нарушение: штраф за K-1",
      en: "Intentional disregard: penalty per Schedule K-1",
      note_ru: "Или 10% от суммы, которую следовало показать, если это больше. Годового максимума нет.",
      note_en: "Or 10% of the aggregate amount required to be reported, if greater. No annual maximum applies.",
      src: { t: "Instructions for Form 1065 (2025)", u: "https://www.irs.gov/instructions/i1065" }
    },
    pen_6651_min: {
      n: 525, unit: "usd",
      ru: "Минимальный штраф при просрочке свыше 60 дней",
      en: "Minimum penalty when a return is over 60 days late",
      note_ru: "Меньшая из двух величин: сумма налога к уплате или эта сумма.",
      note_en: "The smaller of the tax due or this amount.",
      src: { t: "Instructions for Form 1120-S (2025)", u: "https://www.irs.gov/instructions/i1120s" }
    },

    /* --- Сроки подачи за период 2025 ----------------------------------- */

    due_1065: {
      d: "2026-03-16", unit: "date",
      ru: "Форма 1065 за 2025 год",
      en: "Form 1065 for 2025",
      note_ru: "Правило: 15-й день 3-го месяца после конца года. 15 марта 2026 — воскресенье, срок переносится.",
      note_en: "Rule: the 15th day of the 3rd month after year end. March 15, 2026 falls on a Sunday, so the date moves.",
      src: { t: "Instructions for Form 1065 (2025)", u: "https://www.irs.gov/instructions/i1065" }
    },
    due_1120s: {
      d: "2026-03-16", unit: "date",
      ru: "Форма 1120-S за 2025 год",
      en: "Form 1120-S for 2025",
      note_ru: "Правило: 15-й день 3-го месяца. Перенос с воскресенья 15 марта 2026.",
      note_en: "Rule: the 15th day of the 3rd month. Moved from Sunday, March 15, 2026.",
      src: { t: "Instructions for Form 1120-S (2025)", u: "https://www.irs.gov/instructions/i1120s" }
    },
    due_1120: {
      d: "2026-04-15", unit: "date",
      ru: "Форма 1120 за 2025 год",
      en: "Form 1120 for 2025",
      note_ru: "Правило: 15-й день 4-го месяца после конца года. Исключение — фискальный год, заканчивающийся 30 июня: 15-й день 3-го месяца.",
      note_en: "Rule: the 15th day of the 4th month after year end. Exception for a fiscal year ending June 30: the 15th day of the 3rd month.",
      src: { t: "Instructions for Form 1120 (2025)", u: "https://www.irs.gov/instructions/i1120" }
    },
    due_farm_estimated: {
      d: "2026-03-02", unit: "date",
      ru: "Фермеры и рыбаки: подать и уплатить без штрафа",
      en: "Farmers and fishermen: file and pay to avoid the estimated tax penalty",
      note_ru: "Правило: 1 марта. В 2026 году это воскресенье, срок переносится.",
      note_en: "Rule: March 1. In 2026 that is a Sunday, so the date moves.",
      src: SRC_P225
    },
    due_farm_payment: {
      d: "2026-01-15", unit: "date",
      ru: "Фермеры и рыбаки: единственный платёж расчётного налога",
      en: "Farmers and fishermen: the single estimated tax payment",
      note_ru: "Обязательный годовой платёж — меньшая из двух величин: 66⅔% налога за 2025 год или 100% налога за 2024 год.",
      note_en: "The required annual payment is the smaller of 66 2/3% of the 2025 tax or 100% of the tax shown on the 2024 return.",
      src: SRC_P225
    },
    due_1099_recipient: {
      d: "2026-02-02", unit: "date",
      ru: "Выдача 1099 и W-2 получателям",
      en: "Furnishing Forms 1099 and W-2 to recipients",
      note_ru: "Правило: 31 января. В 2026 году это суббота, срок переносится.",
      note_en: "Rule: January 31. In 2026 that is a Saturday, so the date moves.",
      src: { t: "Publication 1099, General Instructions for Certain Information Returns", u: "https://www.irs.gov/publications/p1099" }
    },



    /* --- Поездки, подарки, домашний офис, QBI -------------------------- */

    mileage_2025: {
      n: 0.70, unit: "usd",
      ru: "Стандартная ставка за милю, деловое использование",
      en: "Standard mileage rate, business use",
      note_ru: "Альтернатива фактическим расходам. Выбрав фактические расходы в первый год эксплуатации автомобиля, перейти на стандартную ставку по нему уже нельзя.",
      note_en: "An alternative to actual expenses. If actual expenses are used in the first year a car is in service, the standard rate may not be used for that car later.",
      src: SRC_P463
    },

    meals_limit: {
      n: 50, unit: "pct",
      ru: "Предел вычета расходов на деловое питание",
      en: "Limit on the business meals deduction",
      note_ru: "Расходы на развлечения не вычитаются вовсе. Питание, выделенное в счёте отдельно от развлечения, сохраняет право на 50%.",
      note_en: "Entertainment is not deductible at all. Meals stated separately from entertainment on the bill keep the 50% deduction.",
      src: SRC_P463
    },

    gift_limit: {
      n: 25, unit: "usd",
      ru: "Предел вычета делового подарка одному лицу за год",
      en: "Limit on business gifts to any one person per year",
      note_ru: "Считается прямой и косвенный подарок вместе. Подарок компании, предназначенный конкретному человеку, считается подарком этому человеку.",
      note_en: "Direct and indirect gifts count together. A gift to a company intended for a particular person is a gift to that person.",
      src: SRC_P463
    },

    gift_incidental: {
      n: 4, unit: "usd",
      ru: "Порог рекламного предмета, не считающегося подарком",
      en: "Threshold for a promotional item that is not a gift",
      note_ru: "Предмет дешевле этой суммы, с несмываемым названием фирмы, распространяемый широко и одинаково, под предел подарка не подпадает.",
      note_en: "An item costing less than this, permanently imprinted with your name and widely distributed as one of many identical items, is outside the gift limit.",
      src: SRC_P463
    },

    temp_assignment_months: {
      n: 12, unit: "int",
      ru: "Граница временного и бессрочного назначения, месяцев",
      en: "Boundary between a temporary and an indefinite assignment, months",
      note_ru: "Временным считается назначение, которое реально ожидается не дольше года И фактически столько и длится. Ожидание дольше года делает назначение бессрочным сразу, независимо от фактического срока.",
      note_en: "Temporary means realistically expected to last one year or less AND in fact lasting that long. An expectation of more than a year makes it indefinite at once, whatever actually happens.",
      src: SRC_P463
    },

    home_office_rate: {
      n: 5, unit: "usd",
      ru: "Упрощённый метод: ставка за квадратный фут",
      en: "Simplified method: rate per square foot",
      note_ru: "Выбрав упрощённый метод, фактические расходы по домашнему офису вычесть уже нельзя, и амортизация за этот год равна нулю.",
      note_en: "If the simplified method is elected, actual home office expenses cannot be deducted and depreciation for that year is zero.",
      src: SRC_P587
    },

    home_office_max_sqft: {
      n: 300, unit: "int",
      ru: "Упрощённый метод: предел площади, кв. футов",
      en: "Simplified method: maximum area, square feet",
      note_ru: "Площадь сверх этого предела в расчёт не берётся.",
      note_en: "Area above this limit is disregarded.",
      src: SRC_P587
    },

    home_office_max: {
      n: 1500, unit: "usd",
      ru: "Упрощённый метод: максимальный вычет за год",
      en: "Simplified method: maximum deduction for the year",
      note_ru: "$5 × 300 кв. футов. Вычет не может превысить валовой доход от деятельности за вычетом прочих деловых расходов.",
      note_en: "$5 × 300 square feet. The deduction cannot exceed gross income from the activity less other business expenses.",
      src: SRC_P587
    },

    startup_deduction: {
      n: 5000, unit: "usd",
      ru: "Единовременный вычет затрат на создание бизнеса",
      en: "Immediate deduction of business start-up costs",
      note_ru: "Меньшая из фактических затрат и этой суммы, уменьшенной на превышение затрат над порогом. Остаток амортизируется.",
      note_en: "The lesser of actual costs and this amount, reduced by the excess of the costs over the threshold. The remainder is amortized.",
      src: SRC_I4562
    },

    startup_phaseout: {
      n: 50000, unit: "usd",
      ru: "Порог, выше которого единовременный вычет сокращается",
      en: "Threshold above which the immediate deduction is reduced",
      note_ru: "Сокращение доллар за доллар, но не ниже нуля. При затратах $55 000 и выше единовременного вычета не остаётся.",
      note_en: "Dollar for dollar, but not below zero. At $55,000 of costs and above nothing is deductible immediately.",
      src: SRC_I4562
    },

    startup_amort_months: {
      n: 180, unit: "int",
      ru: "Срок амортизации остатка затрат на создание бизнеса, месяцев",
      en: "Amortization period for the remaining start-up costs, months",
      note_ru: "Отсчёт начинается с месяца, в котором началась активная деятельность.",
      note_en: "The period starts with the month the active trade or business begins.",
      src: SRC_I4562
    },

    qbi_rate: {
      n: 20, unit: "pct",
      ru: "Ставка вычета квалифицированного дохода бизнеса",
      en: "Rate of the qualified business income deduction",
      note_ru: "Вычет применяется к доходу сквозных субъектов и не уменьшает базу налога на самозанятость.",
      note_en: "The deduction applies to pass-through income and does not reduce the self-employment tax base.",
      src: SRC_RP2440
    },

    qbi_threshold_single: {
      n: 197300, unit: "usd",
      ru: "Порог вычета QBI, кроме совместной подачи",
      en: "QBI threshold amount, other than joint returns",
      note_ru: "Ниже порога ограничения по зарплате, по стоимости имущества и по виду деятельности не применяются вовсе.",
      note_en: "Below the threshold the wage, property and specified-service limitations do not apply at all.",
      src: SRC_RP2440
    },

    qbi_threshold_mfj: {
      n: 394600, unit: "usd",
      ru: "Порог вычета QBI при совместной подаче супругов",
      en: "QBI threshold amount, married filing jointly",
      note_ru: "Ровно вдвое больше порога для остальных.",
      note_en: "Exactly twice the threshold for other filers.",
      src: SRC_RP2440
    },

    qbi_phasein_single: {
      n: 247300, unit: "usd",
      ru: "Верх диапазона ввода ограничений QBI, кроме совместной подачи",
      en: "Top of the QBI phase-in range, other than joint returns",
      note_ru: "Диапазон в $50 000. Выше него ограничения действуют полностью, а деятельность из перечня специальных услуг вычета не даёт вовсе.",
      note_en: "A $50,000 range. Above it the limitations apply in full, and a specified service trade or business gets no deduction at all.",
      src: SRC_RP2440
    },

    qbi_phasein_mfj: {
      n: 494600, unit: "usd",
      ru: "Верх диапазона ввода ограничений QBI при совместной подаче",
      en: "Top of the QBI phase-in range, married filing jointly",
      note_ru: "Диапазон в $100 000 — вдвое шире, чем у остальных.",
      note_en: "A $100,000 range — twice as wide as for other filers.",
      src: SRC_RP2440
    },

    /* --- Аренда и лимиты убытков ------------------------------------- */

    dwelling_personal_days: {
      n: 14, unit: "int",
      ru: "Личное пользование жильём: порог в днях",
      en: "Dwelling unit personal use: day threshold",
      note_ru: "Жильё считается использованным как дом, если личное пользование превысило БОЛЬШУЮ из двух величин: 14 дней либо 10% дней сдачи по рыночной цене.",
      note_en: "A dwelling unit is used as a home if personal use exceeds the GREATER of 14 days or 10% of the days rented at a fair rental price.",
      src: SRC_P527
    },

    dwelling_personal_pct: {
      n: 10, unit: "pct",
      ru: "Личное пользование жильём: доля дней сдачи",
      en: "Dwelling unit personal use: share of rental days",
      note_ru: "Вторая из двух величин порога. Берётся большая, а не меньшая и не сумма.",
      note_en: "The second of the two threshold figures. The greater one applies — not the lesser, and not the sum.",
      src: SRC_P527
    },

    rental_min_days: {
      n: 15, unit: "int",
      ru: "Сдача жилья менее 15 дней в году",
      en: "Renting a dwelling for fewer than 15 days",
      note_ru: "Жильё, которое вы используете как дом и сдали менее 15 дней за год: доход не включается, расходы по аренде не вычитаются.",
      note_en: "A dwelling you use as a home and rent for fewer than 15 days: the rent is excluded from income and the rental expenses are not deductible.",
      src: SRC_P527
    },

    depr_residential: {
      n: 27.5, unit: "int",
      ru: "Срок амортизации жилой недвижимости, лет",
      en: "Recovery period for residential rental property, years",
      note_ru: "Прямолинейный метод, соглашение середины месяца. Земля не амортизируется.",
      note_en: "Straight line, mid-month convention. Land is not depreciable.",
      src: SRC_P527
    },

    depr_nonresidential: {
      n: 39, unit: "int",
      ru: "Срок амортизации нежилой недвижимости, лет",
      en: "Recovery period for nonresidential real property, years",
      note_ru: "Прямолинейный метод, соглашение середины месяца.",
      note_en: "Straight line, mid-month convention.",
      src: SRC_P527
    },

    matpart_hours: {
      n: 500, unit: "int",
      ru: "Существенное участие: основной порог часов",
      en: "Material participation: the primary hours test",
      note_ru: "Первый из семи тестов. Достаточно выполнить ЛЮБОЙ один из семи.",
      note_en: "The first of seven tests. Meeting ANY one of the seven is enough.",
      src: SRC_P925
    },

    matpart_hours_sig: {
      n: 100, unit: "int",
      ru: "Существенное участие: порог значимого участия",
      en: "Material participation: the significant participation threshold",
      note_ru: "Более 100 часов при участии не меньшем, чем у любого другого лица (тест 3); и потолок, выше которого работает тест 7 по совокупности обстоятельств.",
      note_en: "More than 100 hours with participation at least equal to any other individual (test 3); also the floor below which test 7 cannot be met.",
      src: SRC_P925
    },

    rep_hours: {
      n: 750, unit: "int",
      ru: "Профессионал рынка недвижимости: часов за год",
      en: "Real estate professional: hours for the year",
      note_ru: "Более 750 часов в сферах недвижимости, где было существенное участие, И более половины всех оказанных за год личных услуг. Часы супруга к порогу не складываются.",
      note_en: "More than 750 hours in real property trades or businesses with material participation AND more than half of all personal services for the year. A spouse's hours are not added to meet the test.",
      src: SRC_P925
    },

    pal_allowance: {
      n: 25000, unit: "usd",
      ru: "Особый вычет по аренде недвижимости",
      en: "Special allowance for rental real estate",
      note_ru: "Требует активного участия — стандарта более мягкого, чем существенное участие.",
      note_en: "Requires active participation, a less stringent standard than material participation.",
      src: SRC_P925
    },

    pal_allowance_mfs: {
      n: 12500, unit: "usd",
      ru: "Особый вычет при раздельной подаче супругов",
      en: "Special allowance, married filing separately",
      note_ru: "Только если супруги жили раздельно весь год. Жили вместе — вычет равен нулю.",
      note_en: "Only if the spouses lived apart at all times during the year. If they lived together, the allowance is zero.",
      src: SRC_P925
    },

    pal_phaseout_start: {
      n: 100000, unit: "usd",
      ru: "Начало сокращения особого вычета (MAGI)",
      en: "Special allowance phaseout begins (MAGI)",
      note_ru: "Вычет уменьшается на 50% суммы превышения модифицированного скорректированного валового дохода над этим порогом.",
      note_en: "The allowance is reduced by 50% of the modified adjusted gross income above this amount.",
      src: SRC_P925
    },

    pal_phaseout_end: {
      n: 150000, unit: "usd",
      ru: "Полное исчезновение особого вычета (MAGI)",
      en: "Special allowance fully phased out (MAGI)",
      note_ru: "При таком MAGI и выше особый вычет недоступен.",
      note_en: "At this modified adjusted gross income and above the special allowance is unavailable.",
      src: SRC_P925
    },

    ebl_single: {
      n: 313000, unit: "usd",
      ru: "Порог избыточного убытка бизнеса",
      en: "Excess business loss threshold",
      note_ru: "Четвёртый и последний лимит, после базиса, риска и пассивных убытков. Превышение переносится вперёд как чистый операционный убыток.",
      note_en: "The fourth and final limitation, after basis, at-risk and passive losses. The excess carries forward as a net operating loss.",
      src: SRC_I461
    },

    ebl_mfj: {
      n: 626000, unit: "usd",
      ru: "Порог избыточного убытка при совместной подаче",
      en: "Excess business loss threshold, joint return",
      note_ru: "Ровно вдвое больше одиночного порога.",
      note_en: "Exactly twice the single threshold.",
      src: SRC_I461
    },

    /* --- Фермеры -------------------------------------------------------- */

    farm_income_share: {
      n: 66.7, unit: "pct",
      ru: "Доля дохода от фермерства или рыболовства",
      en: "Share of gross income from farming or fishing",
      note_ru: "Ровно две трети валового дохода за 2024 или 2025 год. Даёт право на особый порядок расчётного налога.",
      note_en: "Exactly two-thirds of gross income for 2024 or 2025. Qualifies the taxpayer for the special estimated tax rule.",
      src: SRC_P225
    },
    livestock_hold_cattle: {
      n: 24, unit: "int",
      ru: "Срок владения для лошадей и КРС, месяцев",
      en: "Holding period for horses and cattle, months",
      note_ru: "Продажа скота, использовавшегося для тягла, разведения, спорта или молочного производства, подпадает под §1231 при владении не менее этого срока.",
      note_en: "A sale of livestock held for draft, breeding, sport or dairy purposes is a section 1231 transaction if held at least this long.",
      src: SRC_P225
    },
    livestock_hold_other: {
      n: 12, unit: "int",
      ru: "Срок владения для прочего скота, месяцев",
      en: "Holding period for other livestock, months",
      note_ru: "Свиньи, овцы, козы, мулы, ослы, пушные и прочие млекопитающие. Птица к скоту для целей §1231 не относится.",
      note_en: "Hogs, sheep, goats, mules, donkeys, fur-bearing and other mammals. Poultry is not livestock for section 1231.",
      src: SRC_P225
    },
    farm_prepaid_limit: {
      n: 50, unit: "pct",
      ru: "Предел вычета предоплаченных фермерских припасов",
      en: "Limit on deducting prepaid farm supplies",
      note_ru: "При кассовом методе вычет в году оплаты ограничен этой долей прочих вычитаемых фермерских расходов года.",
      note_en: "On the cash method the deduction in the year of payment is limited to this share of the year's other deductible farm expenses.",
      src: SRC_P225
    },
    farm_replace_1033e: {
      n: 4, unit: "int",
      ru: "Срок замены скота по §1033(e) в зоне бедствия, лет",
      en: "Section 1033(e) replacement period in a disaster area, years",
      note_ru: "Общий срок — два года с конца налогового года продажи; четыре года, если местность признана имеющей право на федеральную помощь.",
      note_en: "The general period is two years from the end of the tax year of sale; four years if the area is eligible for federal assistance.",
      src: SRC_P225
    }
  },

  /* Группировка для страницы справочника */
  groups: [
    { id: "methods", ru: "Методы и периоды учёта", en: "Accounting methods and periods",
      keys: ["gross_receipts_448c", "sec444_deferral"] },
    { id: "se", ru: "Налог на самозанятость", en: "Self-employment tax",
      keys: ["se_rate_total", "se_rate_ss", "se_rate_medicare", "se_net_factor", "se_wage_base",
             "se_threshold", "se_church", "addl_medicare_rate", "addl_medicare_single",
             "addl_medicare_mfj", "addl_medicare_mfs", "farm_opt_gross", "farm_opt_profit", "farm_opt_max"] },
    { id: "futa", ru: "Налог по безработице (FUTA)", en: "Federal unemployment tax (FUTA)",
      keys: ["futa_rate", "futa_base", "futa_credit", "futa_net", "futa_deposit",
             "futa_test_wages", "futa_test_weeks"] },
    { id: "info", ru: "Информационные декларации", en: "Information returns",
      keys: ["nec_threshold_2025", "k1099_amount", "k1099_count", "efile_threshold"] },
    { id: "penalties", ru: "Штрафы", en: "Penalties",
      keys: ["pen_6698", "pen_6699", "pen_k1", "pen_k1_max_small", "pen_k1_max_large",
             "pen_k1_intentional", "pen_6651_min"] },
    { id: "dates", ru: "Сроки за период 2025", en: "Due dates for the 2025 tax year",
      keys: ["due_1065", "due_1120s", "due_1120", "due_farm_estimated", "due_farm_payment", "due_1099_recipient"] },
    { id: "rental", ru: "Аренда и лимиты убытков", en: "Rental property and loss limitations",
      keys: ["dwelling_personal_days", "dwelling_personal_pct", "rental_min_days",
             "depr_residential", "depr_nonresidential", "matpart_hours", "matpart_hours_sig",
             "rep_hours", "pal_allowance", "pal_allowance_mfs", "pal_phaseout_start",
             "pal_phaseout_end", "ebl_single", "ebl_mfj"] },
    { id: "deductions", ru: "Поездки, подарки, домашний офис", en: "Travel, gifts and the home office",
      keys: ["mileage_2025", "meals_limit", "gift_limit", "gift_incidental",
             "temp_assignment_months", "home_office_rate", "home_office_max_sqft",
             "home_office_max", "startup_deduction", "startup_phaseout", "startup_amort_months"] },
    { id: "qbi", ru: "Вычет квалифицированного дохода бизнеса", en: "Qualified business income deduction",
      keys: ["qbi_rate", "qbi_threshold_single", "qbi_threshold_mfj",
             "qbi_phasein_single", "qbi_phasein_mfj"] },
    { id: "farm", ru: "Фермеры", en: "Farmers",
      keys: ["farm_income_share", "farm_prepaid_limit", "livestock_hold_cattle", "livestock_hold_other", "farm_replace_1033e"] }
  ]
};
