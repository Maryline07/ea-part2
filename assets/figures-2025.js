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
var SRC_F8809 = { t: "Form 8809, Application for Extension of Time To File Information Returns", u: "https://www.irs.gov/forms-pubs/about-form-8809" };
var SRC_I1099GI = { t: "General Instructions for Certain Information Returns (2025)", u: "https://www.irs.gov/instructions/i1099gi" };
var SRC_P15 = { t: "Publication 15 (2025), Circular E", u: "https://www.irs.gov/publications/p15" };
var SRC_FTF = { t: "IRS, Failure to File Penalty", u: "https://www.irs.gov/payments/failure-to-file-penalty" };
var SRC_I1065 = { t: "Instructions for Form 1065 (2025)", u: "https://www.irs.gov/instructions/i1065" };
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

    addl_medicare_withhold: {
      n: 200000, unit: "usd",
      ru: "Порог, с которого удерживает работодатель",
      en: "Wage level at which the employer must withhold",
      note_ru: "Работодатель смотрит только на выплаченную им заработную плату и не учитывает ни статус подачи, ни доход супруга, ни самозанятость. Поэтому удержания может не быть там, где налог возникает, и наоборот.",
      note_en: "The employer looks only at the wages it paid, disregarding filing status, a spouse's wages and self-employment income. So withholding may be absent where the tax is due, and present where it is not.",
      src: { t: "Instructions for Form 8959 (2025)", u: "https://www.irs.gov/instructions/i8959" }
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
    farm_syndicate_losses: {
      n: 35, unit: "pct",
      ru: "Фермерский синдикат: доля убытков у ограниченных участников",
      en: "Farming syndicate: share of losses allocable to limited partners",
      note_ru: "Превышение этой доли делает хозяйство налоговым убежищем: кассовый метод недоступен при любой выручке.",
      note_en: "Exceeding this share makes the operation a tax shelter: the cash method is unavailable at any level of receipts.",
      src: SRC_P225
    },
    nonfarm_opt_pct: {
      n: 72.189, unit: "pct",
      ru: "Нефермерский метод: доля валового нефермерского дохода",
      en: "Nonfarm optional method: share of gross nonfarm income",
      note_ru: "Метод доступен, только если чистая нефермерская прибыль меньше и этой доли, и порога чистой прибыли. Оба условия сразу.",
      note_en: "The method is available only if net nonfarm profits are below both this share and the net profit threshold. Both conditions at once.",
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
    futa_test_household: {
      n: 1000, unit: "usd",
      ru: "Тест по домашним работникам: выплаты за квартал",
      en: "Household employee test: cash wages in any calendar quarter",
      src: { t: "Instructions for Form 940 (2025)", u: "https://www.irs.gov/instructions/i940" }
    },
    futa_test_farm_wages: {
      n: 20000, unit: "usd",
      ru: "Тест по сельхозработникам: выплаты за квартал",
      en: "Farmworker test: cash wages in any calendar quarter",
      src: { t: "Instructions for Form 940 (2025)", u: "https://www.irs.gov/instructions/i940" }
    },
    futa_test_farm_workers: {
      n: 10, unit: "int",
      ru: "Тест по сельхозработникам: число работников",
      en: "Farmworker test: number of farmworkers",
      src: { t: "Instructions for Form 940 (2025)", u: "https://www.irs.gov/instructions/i940" }
    },
    futa_late_credit: {
      n: 90, unit: "pct",
      ru: "Доля кредита при просроченных взносах в фонд штата",
      en: "Portion of the credit allowed for state contributions paid late",
      note_ru: "Взносы, уплаченные после срока подачи формы 940, дают кредит только в этой доле.",
      note_en: "Contributions paid after the Form 940 due date earn the credit only at this rate.",
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
    pen_infret: {
      n: 340, unit: "usd",
      ru: "Штраф за непредставление K-1",
      en: "Penalty for each failure to furnish Schedule K-1",
      src: { t: "Instructions for Form 1065 (2025)", u: "https://www.irs.gov/instructions/i1065" }
    },
    pen_infret_30: {
      n: 60, unit: "usd",
      ru: "Штраф за информационную декларацию: исправлено в течение 30 дней",
      en: "Information return penalty: corrected within 30 days",
      src: SRC_RP2440
    },
    pen_infret_aug: {
      n: 130, unit: "usd",
      ru: "Штраф за информационную декларацию: исправлено до 1 августа",
      en: "Information return penalty: corrected by August 1",
      src: SRC_RP2440
    },
    pen_infret_max30_large: {
      n: 683000, unit: "usd",
      ru: "Годовой максимум при исправлении за 30 дней: выручка выше границы",
      en: "Annual cap when corrected within 30 days: receipts above the line",
      src: SRC_RP2440
    },
    pen_infret_max30_small: {
      n: 239000, unit: "usd",
      ru: "Годовой максимум при исправлении за 30 дней: выручка не выше границы",
      en: "Annual cap when corrected within 30 days: receipts at or below the line",
      src: SRC_RP2440
    },
    pen_infret_maxaug_large: {
      n: 2049000, unit: "usd",
      ru: "Годовой максимум при исправлении до 1 августа: выручка выше границы",
      en: "Annual cap when corrected by August 1: receipts above the line",
      src: SRC_RP2440
    },
    pen_infret_maxaug_small: {
      n: 683000, unit: "usd",
      ru: "Годовой максимум при исправлении до 1 августа: выручка не выше границы",
      en: "Annual cap when corrected by August 1: receipts at or below the line",
      src: SRC_RP2440
    },
    pen_infret_max_small: {
      n: 1366000, unit: "usd",
      ru: "Годовой максимум при выручке до $5 млн",
      en: "Annual maximum, gross receipts at or below $5 million",
      src: { t: "Instructions for Form 1065 (2025)", u: "https://www.irs.gov/instructions/i1065" }
    },
    pen_infret_max_large: {
      n: 4098500, unit: "usd",
      ru: "Годовой максимум при выручке свыше $5 млн",
      en: "Annual maximum, gross receipts over $5 million",
      src: { t: "Instructions for Form 1065 (2025)", u: "https://www.irs.gov/instructions/i1065" }
    },
    pen_infret_intentional: {
      n: 680, unit: "usd",
      ru: "Умышленное нарушение: штраф за K-1",
      en: "Intentional disregard: penalty per Schedule K-1",
      note_ru: "Или 10% от суммы, которую следовало показать, если это больше. Годового максимума нет.",
      note_en: "Or 10% of the aggregate amount required to be reported, if greater. No annual maximum applies.",
      src: { t: "Instructions for Form 1065 (2025)", u: "https://www.irs.gov/instructions/i1065" }
    },
    dep_lookback: {
      n: 50000, unit: "usd",
      ru: "Граница графика депозитов по итогам контрольного периода",
      en: "Lookback period total that fixes the deposit schedule",
      note_ru: "Не выше — ежемесячный график, выше — полунедельный.",
      note_en: "At or below: monthly schedule. Above: semiweekly schedule.",
      src: SRC_P15
    },
    dep_nextday: {
      n: 100000, unit: "usd",
      ru: "Накопление налога, требующее депозита на следующий рабочий день",
      en: "Accumulated tax requiring a next-business-day deposit",
      note_ru: "Правило действует при обоих графиках.",
      note_en: "The rule applies under either schedule.",
      src: SRC_P15
    },
    dep_pen_5: {
      n: 2, unit: "pct",
      ru: "Депозит с опозданием от 1 до 5 дней",
      en: "Deposit 1 to 5 days late",
      src: SRC_P15
    },
    dep_pen_15: {
      n: 5, unit: "pct",
      ru: "Депозит с опозданием от 6 до 15 дней",
      en: "Deposit 6 to 15 days late",
      src: SRC_P15
    },
    dep_pen_16: {
      n: 10, unit: "pct",
      ru: "Депозит с опозданием 16 дней и более",
      en: "Deposit 16 or more days late",
      note_ru: "Столько же — если сумма уплачена напрямую или вместе с декларацией вместо депозита.",
      note_en: "The same rate applies to amounts paid directly or with the return instead of deposited.",
      src: SRC_P15
    },
    dep_pen_notice: {
      n: 15, unit: "pct",
      ru: "Не уплачено спустя 10 дней после первого требования",
      en: "Still unpaid more than 10 days after the first IRS notice",
      src: SRC_P15
    },
    tfrp_rate: {
      n: 100, unit: "pct",
      ru: "Штраф за взыскание доверительного фонда",
      en: "Trust fund recovery penalty",
      note_ru: "Взимается от неуплаченного налога доверительного фонда — то есть удержанного у работников. Доля работодателя в эту сумму не входит.",
      note_en: "Computed on the unpaid trust fund tax, that is, the amounts withheld from employees. The employer’s own share is not part of it.",
      src: SRC_P15
    },
    pen_6651_rate: {
      n: 5, unit: "pct",
      ru: "Штраф за непредставление: за месяц просрочки",
      en: "Failure to file: per month or part of a month",
      note_ru: "Считается от суммы налога к уплате за вычетом уплаченного в срок и доступных зачётов.",
      note_en: "Computed on the tax due less amounts paid on time and available credits.",
      src: SRC_FTF
    },
    pen_6651_max: {
      n: 25, unit: "pct",
      ru: "Штраф за непредставление: потолок",
      en: "Failure to file: maximum",
      note_ru: "Достигается за пять месяцев просрочки.",
      note_en: "Reached after five months.",
      src: SRC_FTF
    },
    pen_6651_pay: {
      n: 0.5, unit: "pct",
      ru: "Штраф за неуплату: за месяц просрочки",
      en: "Failure to pay: per month or part of a month",
      note_ru: "В месяцы, когда действуют оба штрафа, штраф за непредставление уменьшается на эту величину.",
      note_en: "In months when both penalties run, the failure-to-file penalty is reduced by this amount.",
      src: SRC_FTF
    },
    pen_6651_days: {
      n: 60, unit: "int",
      ru: "Просрочка, после которой включается минимальный штраф, дней",
      en: "Days late after which the minimum penalty applies",
      src: SRC_FTF
    },
    pen_6698_months: {
      n: 12, unit: "int",
      ru: "§6698 и §6699: предельное число месяцев",
      en: "Sections 6698 and 6699: maximum number of months",
      src: SRC_I1065
    },
    pen_infret_receipts: {
      n: 5000000, unit: "usd",
      ru: "Граница выручки для годового максимума штрафов за K-1",
      en: "Gross receipts dividing line for the annual K-1 penalty caps",
      src: SRC_I1065
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
    due_pass_ext: {
      d: "2026-09-15", unit: "date",
      ru: "Продлённый срок форм 1065 и 1120-S за 2025 год",
      en: "Extended due date for Forms 1065 and 1120-S for 2025",
      note_ru: "Форма 7004 даёт автоматические шесть месяцев. Срок выдачи K-1 участникам следует за этим днём.",
      note_en: "Form 7004 grants an automatic six months. The date for furnishing Schedules K-1 follows it.",
      src: { t: "Instructions for Form 1065 (2025)", u: "https://www.irs.gov/instructions/i1065" }
    },
    ext_8809_days: {
      n: 30, unit: "int",
      ru: "Продление подачи информационных деклараций по форме 8809, дней",
      en: "Extension of time to file information returns on Form 8809, days",
      note_ru: "Автоматическое для большинства форм. Для W-2 и 1099-NEC даётся только по одному из перечисленных оснований.",
      note_en: "Automatic for most forms. For Forms W-2 and 1099-NEC it is granted only on one of the listed grounds.",
      src: SRC_F8809
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
      src: SRC_I1099GI
    },
    due_1099_recipient_late: {
      d: "2026-02-17", unit: "date",
      ru: "Выдача отдельных форм 1099 получателям",
      en: "Furnishing certain Forms 1099 to recipients",
      note_ru: "Формы 1099-B, 1099-DA, 1099-S и 1099-MISC с суммами в боксах 8 или 10. Правило: 15 февраля. В 2026 году это воскресенье, а 16 февраля — федеральный праздник.",
      note_en: "Forms 1099-B, 1099-DA, 1099-S and 1099-MISC reporting amounts in boxes 8 or 10. Rule: February 15. In 2026 that is a Sunday and February 16 is a federal holiday.",
      src: SRC_I1099GI
    },
    due_1099_irs_paper: {
      d: "2026-03-02", unit: "date",
      ru: "Подача форм 1099 в налоговую службу на бумаге",
      en: "Filing Forms 1099 with the IRS on paper",
      note_ru: "Правило: 28 февраля. В 2026 году это суббота, срок переносится. Для 1099-NEC срок другой — 2 февраля.",
      note_en: "Rule: February 28. In 2026 that is a Saturday, so the date moves. Form 1099-NEC has a different date: February 2.",
      src: SRC_I1099GI
    },
    due_1099_irs_efile: {
      d: "2026-03-31", unit: "date",
      ru: "Подача форм 1099 в налоговую службу электронно",
      en: "Filing Forms 1099 with the IRS electronically",
      note_ru: "Электронная подача даёт лишний месяц против бумаги — но не для 1099-NEC.",
      note_en: "Filing electronically buys a further month over paper — but not for Form 1099-NEC.",
      src: SRC_I1099GI
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

    rental_avg_use_7: {
      n: 7, unit: "int",
      ru: "Средний срок пользования: деятельность не считается арендой",
      en: "Average period of customer use at or below which the activity is not a rental",
      note_ru: "Средний срок пользования объектом не выше семи дней выводит деятельность из определения аренды для §469.",
      note_en: "An average period of customer use of seven days or less takes the activity out of the section 469 definition of a rental.",
      src: SRC_P925
    },
    rental_avg_use_30: {
      n: 30, unit: "int",
      ru: "Средний срок пользования при значимых личных услугах",
      en: "Average period of customer use where significant personal services are provided",
      src: SRC_P925
    },
    rental_incidental_pct: {
      n: 2, unit: "pct",
      ru: "Порог сопутствующей аренды: доля валового дохода от аренды",
      en: "Incidental rental threshold: gross rental income as a share of basis or value",
      note_ru: "Доля от меньшей из нескорректированного базиса и рыночной стоимости объекта.",
      note_en: "Measured against the smaller of the property's unadjusted basis and its fair market value.",
      src: SRC_P925
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
    soil_water_limit: {
      n: 25, unit: "pct",
      ru: "Предел вычета расходов на охрану почв и вод",
      en: "Limit on deducting soil and water conservation expenses",
      note_ru: "Считается от валового дохода от фермерства за год. Излишек переносится на следующие годы без ограничения срока.",
      note_en: "Computed on gross income from farming for the year. The excess carries forward to later years with no time limit.",
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
             "addl_medicare_mfj", "addl_medicare_mfs", "addl_medicare_withhold", "farm_opt_gross", "farm_opt_profit",
             "farm_opt_max", "nonfarm_opt_pct"] },
    { id: "futa", ru: "Налог по безработице (FUTA)", en: "Federal unemployment tax (FUTA)",
      keys: ["futa_rate", "futa_base", "futa_credit", "futa_net", "futa_late_credit",
             "futa_deposit", "futa_test_wages", "futa_test_weeks", "futa_test_household",
             "futa_test_farm_wages", "futa_test_farm_workers"] },
    { id: "info", ru: "Информационные декларации", en: "Information returns",
      keys: ["nec_threshold_2025", "k1099_amount", "k1099_count", "efile_threshold"] },
    { id: "penalties", ru: "Штрафы", en: "Penalties",
      keys: ["pen_6698", "pen_6699", "pen_6698_months", "pen_infret", "pen_infret_30", "pen_infret_aug",
             "pen_infret_max30_large", "pen_infret_max30_small",
             "pen_infret_maxaug_large", "pen_infret_maxaug_small", "pen_infret_max_small",
             "pen_infret_max_large", "pen_infret_intentional", "pen_infret_receipts",
             "pen_6651_rate", "pen_6651_max", "pen_6651_pay", "pen_6651_days",
             "pen_6651_min", "dep_lookback", "dep_nextday", "dep_pen_5",
             "dep_pen_15", "dep_pen_16", "dep_pen_notice", "tfrp_rate"] },
    { id: "dates", ru: "Сроки за период 2025", en: "Due dates for the 2025 tax year",
      keys: ["due_1065", "due_1120s", "due_pass_ext", "due_1120", "ext_8809_days", "due_farm_estimated", "due_farm_payment",
             "due_1099_recipient", "due_1099_recipient_late", "due_1099_irs_paper",
             "due_1099_irs_efile"] },
    { id: "rental", ru: "Аренда и лимиты убытков", en: "Rental property and loss limitations",
      keys: ["dwelling_personal_days", "dwelling_personal_pct", "rental_min_days", "rental_avg_use_7", "rental_avg_use_30",
             "rental_incidental_pct",
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
      keys: ["farm_income_share", "farm_prepaid_limit", "soil_water_limit",
             "farm_syndicate_losses",
             "livestock_hold_cattle", "livestock_hold_other", "farm_replace_1033e"] }
  ]
};
