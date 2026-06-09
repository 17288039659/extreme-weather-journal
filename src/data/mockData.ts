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
    titleEn: 'Near-shore oceanic response to landfalling Typhoon Mujigae (2015) and its implications for oceanic substrate conditions during rapid intensification',
    authors: ['利洪煜', '肖启程'],
    affiliations: ['中国十三期大气海洋响应研究所'],
    abstract: '热带气旋（TC）强度变化预报中的海气相互作用过程长期存在不确定性。2015年台风"彩虹"在南海北部登陆前经历了快速增强（RI），已有研究主要从大气动力学角度揭示了其动能/势能转换、内核结构调整和边界层恢复等机制，但近岸海洋下垫面在该阶段所扮演的角色尚不明确。本文以"彩虹"为例，利用CMA-STI最佳路径、ERA5逐小时10 m风场、MUR高分辨率海表温度（SST）以及GLORYS12海洋再分析资料，围绕"风场配置—SST响应—次表层结构—Ekman输送"四维证据链，诊断其登陆前近岸海洋响应的性质。',
    keywords: ['台风彩虹', '沿海下涌', '海表温度维持', '快速增强', '南海北部'],
    doi: '10.12345/jew.2026.001',
    publishDate: '2026-06-09',
    volume: 1,
    issue: 1,
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
