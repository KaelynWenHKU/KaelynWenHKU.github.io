const translations = new Map([
  ["Skip to content", "跳至正文"],
  ["About", "关于我"],
  ["Work", "作品"],
  ["Field notes", "一线手记"],
  ["Experience", "经历"],
  ["Say hello", "联系我"],
  ["Biomedical science · AI · Investment", "生物医学 · 人工智能 · 投资"],
  ["I explore how scientific ideas move from", "我探索科学理念如何从"],
  ["discovery", "发现"],
  ["to", "走向"],
  ["decision", "决策"],
  ["—and ultimately, to impact.", "，并最终创造影响。"],
  ["Explore my work", "查看我的作品"],
  ["Email me", "给我写邮件"],
  ["Based in Hong Kong", "现居香港"],
  ["HKU · BBMS & Finance", "香港大学 · 生物医学与金融"],
  ["Hello—", "你好——"],
  ["I’m Kaelyn.", "我是 Kaelyn。"],
  ["Currently", "目前"],
  ["Healthcare & Technology", "医疗健康与科技"],
  ["Private Equity", "私募股权投资"],
  ["GF Xinde Investment Management", "广发信德投资管理"],
  ["01 / About", "01 / 关于我"],
  ["Curious across disciplines.", "跨越学科，保持好奇。"],
  ["Serious about translation.", "专注于成果转化。"],
  ["I’m a Biomedical Sciences and Finance student at The University of Hong Kong. My work spans CRISPR gene editing, single-cell machine learning, healthcare private equity, and company research.", "我就读于香港大学，主修生物医学科学与金融。我的工作横跨 CRISPR 基因编辑、单细胞机器学习、医疗健康私募股权投资与公司研究。"],
  ["I’m most energized where the vocabulary changes but the question stays the same:", "最令我着迷的，是在不同领域中追问同一个问题："],
  ["what makes an innovation scientifically sound, commercially viable, and useful to people?", "怎样的创新，既经得起科学验证，又具备商业可行性，并真正惠及人们？"],
  ["Studying", "学习"],
  ["Biomedical Sciences", "生物医学科学"],
  ["+ Finance", "+ 金融"],
  ["Researching", "研究"],
  ["Single-cell ML", "单细胞机器学习"],
  ["+ Gene editing", "+ 基因编辑"],
  ["Evaluating", "评估"],
  ["Healthcare", "医疗健康"],
  ["+ Technology", "+ 科技"],
  ["Speaking", "语言"],
  ["English · Cantonese", "英语 · 粤语"],
  ["· Mandarin", "· 普通话"],
  ["02 / Selected work", "02 / 精选作品"],
  ["Research that lives", "不止于简历的"],
  ["beyond the résumé.", "研究与实践。"],
  ["A selection of original scientific, investment, and market research. Open any project to read the complete work.", "这里收录了我的原创科学研究、投资分析与市场调研。点击任一项目即可阅读全文。"],
  ["View poster ↗", "查看海报 ↗"],
  ["Experimental research", "实验研究"],
  ["HKU Medicine · 2025", "港大医学院 · 2025"],
  ["Synthetic lethality in glioblastoma", "胶质母细胞瘤中的合成致死机制"],
  ["Investigated RPP25 and RPP25L gene redundancy using CRISPR-Cas9 knockout and GFP competition assays, identifying RPP25L as a potential therapeutic target in glioblastoma.", "通过 CRISPR-Cas9 基因敲除与 GFP 竞争实验研究 RPP25 和 RPP25L 的基因冗余关系，并发现 RPP25L 可能成为胶质母细胞瘤的治疗靶点。"],
  ["CRISPR-Cas9 · FACS · Cancer biology", "CRISPR-Cas9 · 流式细胞术 · 肿瘤生物学"],
  ["Full research poster ↗", "完整研究海报 ↗"],
  ["View 19-page deck ↗", "查看 19 页报告 ↗"],
  ["Investment research", "投资研究"],
  ["The next frontier in human-relevant drug discovery", "更贴近人体的药物研发新浪潮"],
  ["A global landscape of organoid and organ-on-chip platforms, covering technology maturity, regulation, market growth, competitive positioning, and investment opportunities.", "梳理全球类器官与器官芯片平台，覆盖技术成熟度、监管趋势、市场增长、竞争格局与投资机会。"],
  ["Market mapping · VC thesis", "市场图谱 · 风投逻辑"],
  ["Open deck ↗", "打开报告 ↗"],
  ["Download report ↓", "下载报告 ↓"],
  ["Equity research", "公司研究"],
  ["Valuing an AI-for-Science platform", "如何估值 AI for Science 平台"],
  ["A 32-page company analysis connecting XtalPi’s AI, quantum physics, and robotic laboratory platform with commercial validation, competition, financial performance, DCF valuation, and risk.", "一份 32 页的晶泰科技公司分析，串联其人工智能、量子物理与机器人实验室平台，并评估商业验证、竞争格局、财务表现、DCF 估值与风险。"],
  ["DCF · Comparables · AI4Science", "DCF · 可比公司 · AI4Science"],
  ["Download analysis ↓", "下载分析 ↓"],
  ["Also building", "也在创造"],
  ["Small products for", "为日常生活打造的"],
  ["everyday life.", "小产品。"],
  ["A time-zone companion for long-distance relationships.", "为异地关系设计的时区陪伴工具。"],
  ["An AI wardrobe assistant using weather and calendar context.", "结合天气与日程的 AI 衣橱助手。"],
  ["Visit ↗", "访问 ↗"],
  ["Research & features", "研究与报道"],
  ["More from the", "更多往期"],
  ["archive.", "作品。"],
  ["Earlier scientific work and a recent profile about the experiences that shaped my path.", "早期科研成果，以及一篇回顾成长经历与选择的近期人物报道。"],
  ["Research poster · 2024", "研究海报 · 2024"],
  ["HKU Medicine", "港大医学院"],
  ["Targeting Rac1 in hepatocellular carcinoma", "以 Rac1 为靶点探索肝细胞癌治疗"],
  ["Studied the binding and potential anticancer effects of N-acryloylindole compounds using protein expression, gel-based ABPP, and MTT assays.", "通过蛋白表达、凝胶 ABPP 与 MTT 实验，研究 N-丙烯酰吲哚类化合物的结合机制及潜在抗癌作用。"],
  ["Open full poster ↗", "打开完整海报 ↗"],
  ["Read feature ↗", "阅读报道 ↗"],
  ["Profile · July 2026", "人物报道 · 2026 年 7 月"],
  ["A Chinese-language alumni feature reflecting on twelve years at Donghua, studying biomedical sciences at HKU, and an exchange experience at UBC.", "一篇中文校友人物报道，回望在东华的十二年、港大生物医学求学经历，以及在 UBC 的交换生活。"],
  ["Read on WeChat ↗", "在微信阅读 ↗"],
  ["03 / Field note", "03 / 一线手记"],
  ["23–26 July 2026 · Shenzhen", "2026 年 7 月 23–26 日 · 深圳"],
  ["Medical Technology Innovation Bootcamp · Shenzhen InnoX Academy", "医疗科技创新训练营 · 深圳科创学院"],
  ["Listening before", "先倾听，"],
  ["building.", "再创造。"],
  ["Four days, seven patient conversations, one idea reframed—and a reminder that the sharpest product insight often begins at the bedside.", "四天、七次患者访谈、一次产品理念的重塑——也再次提醒我：最敏锐的产品洞察，往往始于病床边。"],
  ["Presenting CuraPatch", "展示 CuraPatch"],
  ["Final pitch · Shenzhen InnoX Academy", "最终路演 · 深圳科创学院"],
  ["From 23 to 26 July, I joined Shenzhen InnoX Academy’s 2026 Medical Technology Innovation Bootcamp. Our team, KLOVR Health, began with a difficult question: what happens to a diabetic-foot wound in the long, uncertain hours between dressing changes and hospital visits?", "7 月 23 日至 26 日，我参加了深圳科创学院 2026 医疗科技创新训练营。我们 KLOVR Health 团队从一个棘手的问题出发：在两次换药与复诊之间漫长而充满不确定性的时间里，糖尿病足创面究竟发生着什么？"],
  ["At the Department of Endocrinology at Shenzhen University Affiliated Huanan Hospital, we interviewed seven people living with diabetes. The conversations made the problem more precise. For older patients and family caregivers, a wound covered by a dressing can become a “care black box”: changes are hard to judge, warning signs may appear late, and every trip back to hospital carries time, mobility, and emotional costs.", "在深圳大学附属华南医院内分泌科，我们访谈了七位糖尿病患者。交谈让问题逐渐清晰：对年长患者和家庭照护者而言，被敷料覆盖的伤口很容易成为一个“护理黑箱”——变化难以判断，预警可能来得太迟，而每次返院都伴随着时间、行动与情绪成本。"],
  ["What we learned", "我们的发现"],
  ["Home wound care does not only need a better dressing. It needs continuous sensing, informed interpretation, and feedback at the moment it matters.", "居家创面护理需要的不只是一片更好的敷料，更需要持续感知、可靠判断，以及在关键时刻及时反馈。"],
  ["Patient discovery at Shenzhen University Affiliated Huanan Hospital. The patient’s identity is obscured.", "在深圳大学附属华南医院开展患者访谈；患者身份信息已作遮挡处理。"],
  ["Turning field observations into a product point of view.", "将一线观察转化为产品视角。"],
  ["Our concept · CuraPatch", "我们的构想 · CuraPatch"],
  ["From passive coverage to a connected care loop.", "从被动覆盖走向互联护理闭环。"],
  ["We proposed an AI-enabled smart dressing for chronic wounds: sensing wound biomarkers, interpreting risk, supporting targeted treatment, and sharing progress with patients, families, and clinicians.", "我们提出一款面向慢性创面的 AI 智能敷料：感知创面生物标志物、判断风险、支持精准治疗，并与患者、家属和临床医生共享恢复进展。"],
  ["Monitor", "监测"],
  ["Track changes in the wound environment.", "追踪创面环境变化。"],
  ["Interpret", "判断"],
  ["Flag stable, inflammatory, or infection-risk states.", "识别稳定、炎症或感染风险状态。"],
  ["Respond", "响应"],
  ["Support treatment and timely clinical follow-up.", "支持治疗与及时临床随访。"],
  ["Explaining how the monitoring interface could make wound progress legible to families and clinicians.", "介绍监测界面如何让家属与临床医生清晰了解创面进展。"],
  ["Recognition", "荣誉"],
  ["Best Insight Award", "最佳洞察奖"],
  ["2026 Medical Technology Innovation Bootcamp", "2026 医疗科技创新训练营"],
  ["Our team received the award for grounding the concept in first-principles research, clinical conversations, and the lived concerns of patients and caregivers.", "我们的方案以第一性原理研究、临床访谈，以及患者与照护者的真实关切为基础，因此获得最佳洞察奖。"],
  ["Read the 22-page project deck", "阅读 22 页项目报告"],
  ["Issued 26 July 2026", "颁发于 2026 年 7 月 26 日"],
  ["04 / Experience", "04 / 经历"],
  ["Across the lab,", "穿梭于实验室、"],
  ["model & market.", "模型与市场。"],
  ["Each chapter has added a new way to understand healthcare innovation.", "每段经历，都为我理解医疗创新增添了一个新视角。"],
  ["2026 — Present", "2026 — 至今"],
  ["Investment Analyst", "投资分析师"],
  ["GF Xinde · Healthcare & Technology Private Equity", "广发信德 · 医疗健康与科技私募股权投资"],
  ["Due diligence across biotechnology, innovative medicine, brain-computer interfaces, and AI-enabled healthcare.", "参与生物科技、创新药、脑机接口与 AI 医疗项目的尽职调查。"],
  ["Machine Learning Research Intern", "机器学习研究实习生"],
  ["School of Biomedical Sciences, HKU", "香港大学生物医学学院"],
  ["Predicting gamma-delta T-cell states from single-cell transcriptomic data under incomplete labels and class imbalance.", "在标签不完整、类别不平衡的条件下，利用单细胞转录组数据预测 γδ T 细胞状态。"],
  ["Honorary Research Associate", "名誉研究助理"],
  ["Centre for Oncology and Immunology", "肿瘤与免疫学研究中心"],
  ["Applied large language models and high-throughput screening to improve prime-editing efficiency.", "应用大语言模型与高通量筛选提升先导编辑效率。"],
  ["Summer Research Intern", "暑期研究实习生"],
  ["LKS Faculty of Medicine, HKU", "香港大学李嘉诚医学院"],
  ["Characterized synthetic lethality in glioblastoma using CRISPR-Cas9 knockout.", "利用 CRISPR-Cas9 基因敲除研究胶质母细胞瘤中的合成致死机制。"],
  ["Exchange Student", "交换生"],
  ["UBC Sauder School & Faculty of Medicine", "UBC 尚德商学院与医学院"],
  ["Studied corporate finance, immunology, neuroscience, and built Outfitle at StormHacks.", "学习公司金融、免疫学与神经科学，并在 StormHacks 黑客松中开发 Outfitle。"],
  ["05 / Recognition", "05 / 荣誉"],
  ["A few milestones", "成长路上的"],
  ["along the way.", "几个里程碑。"],
  ["Shenzhen InnoX Medical Technology Innovation Bootcamp", "深圳科创学院医疗科技创新训练营"],
  ["McKinsey Next Generation Women Leader", "麦肯锡新世代女性领袖"],
  ["Asia-Pacific program", "亚太地区项目"],
  ["C.V. Starr Scholarship", "C.V. Starr 奖学金"],
  ["The University of Hong Kong", "香港大学"],
  ["BBMS Research Scholarship", "生物医学科学研究奖学金"],
  ["Reaching Out Award", "外展体验奖"],
  ["Hong Kong Government", "香港特别行政区政府"],
  ["Ideas travel further in conversation", "让想法在交流中走得更远"],
  ["Let’s talk about", "一起聊聊"],
  ["what’s next.", "下一步。"],
  ["Email", "邮件"],
  ["AI4Science · Healthcare investing · Startups", "AI4Science · 医疗投资 · 创业"],
  ["Hong Kong", "香港"],
  ["Science · AI · Capital", "科学 · 人工智能 · 资本"]
]);

const attributeTranslations = new Map([
  ["Main navigation", "主导航"],
  ["Language selection", "语言选择"],
  ["Kaelyn Wen, home", "Kaelyn Wen，返回首页"],
  ["Current focus", "当前方向"],
  ["Portrait of Kaelyn Wen", "Kaelyn Wen 的肖像"],
  ["Open CRISPR glioblastoma research poster", "打开 CRISPR 胶质母细胞瘤研究海报"],
  ["Preview of Kaelyn's CRISPR glioblastoma research poster", "Kaelyn 的 CRISPR 胶质母细胞瘤研究海报预览"],
  ["Open organoid and organ-on-chip industry research deck", "打开类器官与器官芯片行业研究报告"],
  ["Cover of Kaelyn's organoid and organ-on-chip industry research deck", "Kaelyn 的类器官与器官芯片行业研究报告封面"],
  ["Download XtalPi company analysis", "下载晶泰科技公司分析"],
  ["Preview of Kaelyn's XtalPi company analysis", "Kaelyn 的晶泰科技公司分析预览"],
  ["Open Rac1 liver cancer research poster", "打开 Rac1 肝癌研究海报"],
  ["Preview of Kaelyn's Rac1 liver cancer research poster", "Kaelyn 的 Rac1 肝癌研究海报预览"],
  ["Read Donghua student growth story featuring Kaelyn Wen", "阅读关于 Kaelyn Wen 的东华成长故事"],
  ["Screenshot of a Donghua High School feature about Kaelyn Wen", "东华高级中学 Kaelyn Wen 人物报道截图"],
  ["Kaelyn presenting the CuraPatch concept at Shenzhen InnoX Academy", "Kaelyn 在深圳科创学院展示 CuraPatch 构想"],
  ["Kaelyn and her team conducting a patient interview at Shenzhen University Affiliated Huanan Hospital", "Kaelyn 与团队在深圳大学附属华南医院开展患者访谈"],
  ["KLOVR Health team developing their medical technology concept", "KLOVR Health 团队打磨医疗科技构想"],
  ["Kaelyn explaining the CuraPatch monitoring interface during the final presentation", "Kaelyn 在最终展示中介绍 CuraPatch 监测界面"],
  ["Best Insight Award certificate from the 2026 Medical Technology Innovation Bootcamp", "2026 医疗科技创新训练营最佳洞察奖证书"]
]);

const englishText = new WeakMap();
const englishAttributes = new WeakMap();

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    return node.parentElement?.closest("script, style") || !node.textContent.trim()
      ? NodeFilter.FILTER_REJECT
      : NodeFilter.FILTER_ACCEPT;
  },
});

while (walker.nextNode()) {
  const node = walker.currentNode;
  englishText.set(node, node.textContent);
  textNodes.push(node);
}

const translatableElements = [...document.querySelectorAll("[aria-label], [alt]")];
translatableElements.forEach((element) => {
  englishAttributes.set(element, {
    ariaLabel: element.getAttribute("aria-label"),
    alt: element.getAttribute("alt"),
  });
});

function translatedText(original, language) {
  if (language === "en") return original;
  const trimmed = original.trim();
  const translated = translations.get(trimmed);
  return translated ? original.replace(trimmed, translated) : original;
}

function setLanguage(language) {
  const activeLanguage = language === "zh" ? "zh" : "en";
  document.documentElement.lang = activeLanguage === "zh" ? "zh-Hans" : "en";

  textNodes.forEach((node) => {
    node.textContent = translatedText(englishText.get(node), activeLanguage);
  });

  translatableElements.forEach((element) => {
    const originals = englishAttributes.get(element);
    for (const attribute of ["ariaLabel", "alt"]) {
      const name = attribute === "ariaLabel" ? "aria-label" : "alt";
      const original = originals[attribute];
      if (!original) continue;
      element.setAttribute(name, activeLanguage === "zh" ? attributeTranslations.get(original) || original : original);
    }
  });

  document.title = activeLanguage === "zh"
    ? "Kaelyn Wen — 科学、人工智能与医疗健康"
    : "Kaelyn Wen — Science, AI & Healthcare";
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.content = activeLanguage === "zh"
      ? "Kaelyn Wen 是一位常驻香港的生物医学研究者、机器学习研究者与医疗健康投资人。"
      : "Kaelyn Wen is a biomedical scientist, machine-learning researcher, and healthcare investor based in Hong Kong.";
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === activeLanguage));
  });

  localStorage.setItem("kaelyn-language", activeLanguage);
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const preferredLanguage = localStorage.getItem("kaelyn-language")
  || (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");
setLanguage(preferredLanguage);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
}

const marquee = document.querySelector(".interest-marquee div");
if (marquee) marquee.innerHTML += marquee.innerHTML;

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
