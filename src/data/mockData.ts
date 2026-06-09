// Mock数据 - 极端天气学报
// 后续数据由用户在对话窗口提供，实时更新

export interface Article {
  id: string;
  title: string;
  titleEn: string;
  authors: string[];
  affiliations: string[];
  abstract: string;
  keywords: string[];
  doi: string;
  publishDate: string;
  volume: number;
  issue: number;
  pages: string;
  category: string;
}

export interface EditorialBoard {
  name: string;
  nameEn: string;
  title: string;
  affiliation: string;
  researchArea: string;
  role: '主编' | '副主编' | '编委';
}

// 期刊信息
export const journalInfo = {
  name: '极端天气学报',
  nameEn: 'Journal of Extreme Weather',
  abbreviation: 'J. Extreme Weather',
  issn: '6666-6666',
  eISSN: '6666-6666',
  publisher: '十三期极端天气研究所',
  foundedYear: 2026,
  frequency: '不固定',
  impactFactor: '66.6',
  description: '《极端天气学报》是由十三期极端天气研究所主办的学术期刊，主要关注台风、暴雨、气候变化等极端天气现象的基础研究与应用研究。期刊发表大气科学领域的原创性研究论文、综述文章和研究简报，致力于推动极端天气预报预测理论和技术的发展。',
  scope: '本刊刊载内容包括但不限于：台风动力学与预报、暴雨形成机理与监测、气候变化与极端事件、强对流天气、暴雪与冰冻灾害、干旱与热浪、大气边界层与城市气象、数值天气预报与资料同化、卫星与雷达遥感应用等。',
  email: '3083542722@qq.com',
  phone: '15521681296',
  address: '第十三期大气物理研究所',
};

// 最新文章
export const latestArticles: Article[] = [
  {
    id: 'mujigae-2015',
    title: '登陆台风"彩虹"（2015）近岸海洋响应及其对快速增强海洋下垫面条件的指示',
    titleEn: 'Near-shore Ocean Response to Landfalling Typhoon Mujigae (2015) and Its Indications for Ocean Substrate Conditions of Rapid Intensification',
    authors: ['利洪煜', '小脐橙'],
    affiliations: ['中国十三期大气海洋响应研究所'],
    abstract: '热带气旋（TC）强度预报中的海气相互作用过程长期存在不确定性。台风"彩虹"（2015）在南海北部登陆前经历快速增强（RI）。本研究利用CMA-STI最佳路径数据、ERA5逐小时10 m风场、MUR高分辨率海表温度（SST）和GLORYS12海洋再分析数据，诊断登陆前近岸海洋响应的本质。结果表明，持续的下涌有利沿岸风、显著的Ekman输送、近岸SST维持和次表层等温线加深共同构成了诊断信号。综合证据表明，近岸下涌型响应阻止了SST经历显著降温，为"彩虹"登陆前强度维持提供了边际有利的海洋下垫面条件。',
    keywords: ['台风彩虹', '沿海下涌', '海表温度维持', '快速增强', '南海北部'],
    doi: '10.XXXXXX/jew.2026.0001',
    publishDate: '2026-06-01',
    volume: 12,
    issue: 3,
    pages: '1-25',
    category: '研究论文',
  },
];

// 编委会成员
export const editorialBoard: EditorialBoard[] = [
  {
    name: '小脐橙',
    nameEn: 'Qicheng Xiao',
    title: '教授',
    affiliation: '十三期大气物理研究所',
    researchArea: '台风快速增强、海气相互作用',
    role: '主编',
  },
  {
    name: '利洪煜',
    nameEn: 'Hongyu Li',
    title: '副教授',
    affiliation: '十三期大气物理研究所',
    researchArea: '陆面过程与水文气象学',
    role: '副主编',
  },
];
