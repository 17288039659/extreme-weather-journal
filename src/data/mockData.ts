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

// 最新文章 - 后续由用户提供
export const latestArticles: Article[] = [];

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
