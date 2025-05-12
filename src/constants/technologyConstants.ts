
import { Technology } from '@/types/technology';
import { ADDITIONAL_TECHNOLOGIES } from './additionalTechnologies';

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'quantum-vacuum-propulsion',
    name: '量子真空推进',
    description:
      '我们革命性的推进系统利用太空真空中的量子波动能量，实现前所未有的效率和加速能力，不受传统推进剂限制。',
    history:
      '量子真空推进技术起源于20世纪末对量子场理论和卡西米尔效应的研究。早期理论工作由卡迈克尔·库拉教授于2022年开始，首个实验原型在2028年由问天阁研究团队成功研发。',
    currentProgress:
      '目前处于先进测试阶段，小型原型在真空室条件下实现0.1g加速度。全尺寸实施计划用于欧罗巴探索者任务。',
    currentApplications: [
      '小型卫星轨道调整系统',
      '深空探测器辅助推进',
      '长距离行星际探测任务',
    ],
    futureImprovements: [
      '提高量子场耦合效率',
      '减小系统尺寸和重量',
      '扩展加速度范围至0.5g',
      '开发可变推力控制系统',
    ],
    pros: [
      '无需推进剂，大幅减轻飞行器重量',
      '理论无限续航能力',
      '低热特征，适合隐秘任务',
      '维护需求极低',
    ],
    cons: [
      '研发成本极高',
      '在强引力场环境下效率降低',
      '技术成熟度仍有待提高',
      '系统启动需要大量能量输入',
    ],
    image:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: '推进系统',
  },
  {
    id: 'ion-propulsion',
    name: '离子推进引擎',
    description:
      '利用电场加速带电粒子产生推力的高效率推进系统，适合长期太空任务。',
    history:
      '离子推进技术概念早在20世纪初就被提出，但直到1964年才有首个实用系统在卫星上测试。中国航天在2020年开始大规模投入离子推进系统研发。',
    currentProgress:
      '当前已实现5N推力系统的常规化部署，燃料效率达到90%，使用氙气或氪气作为推进剂。',
    currentApplications: [
      '深空探测任务主要推进系统',
      '地球轨道卫星姿态控制',
      '小行星采矿设备推进系统',
    ],
    futureImprovements: [
      '开发可变输出离子推进系统',
      '提高离子加速电压',
      '减少系统磨损率',
      '开发新型推进剂选择',
    ],
    pros: ['极高的燃料效率', '长寿命设计', '精确推力控制', '低污染排放'],
    cons: ['推力小，加速慢', '需要大量电能', '系统复杂度高', '初始成本高'],
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: '推进系统',
  },
  {
    id: 'quantum-entanglement-comms',
    name: '量子纠缠通信',
    description:
      '利用量子纠缠现象实现即时通信的革命性技术，不受传统电磁波传播延迟限制。',
    history:
      '量子纠缠现象早在20世纪初被爱因斯坦称为"幽灵般的超距作用"，2030年中国科学家首次实现了稳定的量子纠缠信息传输。',
    currentProgress:
      '已在近地轨道实现稳定的量子密钥分发系统，正在开展月球-地球量子通信实验。',
    currentApplications: [
      '近地空间绝对安全通信',
      '军事战略指挥系统',
      '极度安全的金融交易网络',
    ],
    futureImprovements: [
      '增加信息传输密度',
      '扩大纠缠粒子距离',
      '开发太阳系级别量子中继系统',
      '降低系统能耗',
    ],
    pros: [
      '理论上无延迟通信',
      '不可破解的绝对安全性',
      '不受传统干扰影响',
      '无需物理传输介质',
    ],
    cons: [
      '设备极度精密，维护困难',
      '受量子退相干影响',
      '数据传输率目前有限',
      '系统体积较大',
    ],
    image:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: '通讯系统',
  },
  ...ADDITIONAL_TECHNOLOGIES,
];

// Function to get technology by ID
export const getTechnologyById = (id: string): Technology | undefined => {
  return TECHNOLOGIES.find((tech) => tech.id === id);
};

// Function to get technologies by category
export const getTechnologiesByCategory = (category: string): Technology[] => {
  if (category === 'all') return TECHNOLOGIES;
  return TECHNOLOGIES.filter((tech) => tech.category === category);
};

// All technology categories
export const TECHNOLOGY_CATEGORIES = Array.from(
  new Set(TECHNOLOGIES.map((tech) => tech.category))
);
