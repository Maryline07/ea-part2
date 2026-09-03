/* ===================================================================
   Числовой справочник, налоговый период 2025.

   Единственный источник истины для всех страниц. В разметке числа не
   пишутся: используется <span data-fig="ключ"></span>, и app.js
   подставляет значение, отформатированное по текущему языку.

   ПРАВИЛО: ни одна запись не добавляется без поля src со ссылкой на
   irs.gov. Значение, которое не удалось подтвердить, в файл не попадает.

   unit: usd | pct | int | date | text
   =================================================================== */

window.FIGURES = {
  meta: {
    taxYear: 2025,
    verified: "2026-09-03",
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
    due_farm_estimated: {
      d: "2026-03-02", unit: "date",
      ru: "Фермеры и рыбаки: подать и уплатить без штрафа",
      en: "Farmers and fishermen: file and pay to avoid the estimated tax penalty",
      note_ru: "Правило: 1 марта. В 2026 году это воскресенье, срок переносится.",
      note_en: "Rule: March 1. In 2026 that is a Sunday, so the date moves.",
      src: { t: "Instructions for Schedule F (2025)", u: "https://www.irs.gov/instructions/i1040sf" }
    },
    due_1099_recipient: {
      d: "2026-02-02", unit: "date",
      ru: "Выдача 1099 и W-2 получателям",
      en: "Furnishing Forms 1099 and W-2 to recipients",
      note_ru: "Правило: 31 января. В 2026 году это суббота, срок переносится.",
      note_en: "Rule: January 31. In 2026 that is a Saturday, so the date moves.",
      src: { t: "Publication 1099, General Instructions for Certain Information Returns", u: "https://www.irs.gov/publications/p1099" }
    },

    /* --- Фермеры -------------------------------------------------------- */

    farm_income_share: {
      n: 66.7, unit: "pct",
      ru: "Доля дохода от фермерства или рыболовства",
      en: "Share of gross income from farming or fishing",
      note_ru: "Ровно две трети валового дохода за 2024 или 2025 год. Даёт право на особый порядок расчётного налога.",
      note_en: "Exactly two-thirds of gross income for 2024 or 2025. Qualifies the taxpayer for the special estimated tax rule.",
      src: { t: "Instructions for Schedule F (2025)", u: "https://www.irs.gov/instructions/i1040sf" }
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
      keys: ["due_1065", "due_1120s", "due_farm_estimated", "due_1099_recipient"] },
    { id: "farm", ru: "Фермеры", en: "Farmers",
      keys: ["farm_income_share"] }
  ]
};
