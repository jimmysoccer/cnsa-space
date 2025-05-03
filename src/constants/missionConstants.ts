import { Mission } from '@/types/mission';

// Sample mission data
export const MISSIONS: Mission[] = [
  {
    id: 1,
    title: '东方红一号发射',
    description:
      '中国首颗人造地球卫星，使用长征一号火箭发射，使中国成为全球第五个独立发射卫星的国家。',
    startDate: '1970-04-24',
    endDate: '1970-04-24',
    status: 'completed',
    target: ['地球轨道'],
    category: '卫星',
    assignee: '钱学森团队',
    progress: 100,
    technology: ['长征一号火箭'],
    achievements: ['中国进入太空时代', '在轨播放《东方红》乐曲'],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746219582/7a899e510fb30f2442a76d20d2dfc643ad4bd113a5f4_gavygs.webp',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
    ],
  },
  {
    id: 2,
    title: '神舟五号载人任务',
    description:
      '杨利伟成为中国首位航天员，在轨飞行21小时，完成中国首次载人航天任务。',
    startDate: '2003-10-15',
    endDate: '2003-10-16',
    status: 'completed',
    target: ['近地轨道'],
    category: '载人航天',
    assignee: '杨利伟',
    progress: 100,
    technology: ['神舟飞船', '长征-2F火箭'],
    achievements: ['中国成为世界第三个独立载人航天的国家'],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746224678/d009b3de9c82d158ccbfce436d430ed8bc3eb035e4a5_vaghrw.webp',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
    ],
  },
  {
    id: 3,
    title: '嫦娥三号（月球软着陆）',
    description:
      '中国首个软着陆月球的探测器，携带"玉兔号"月球车，在虹湾地区开展科学探测。',
    startDate: '2013-12-01',
    endDate: '2013-12-14',
    status: 'completed',
    target: ['月球正面-虹湾'],
    category: '月球探测',
    assignee: '孙家栋团队',
    progress: 100,
    technology: ['变推力发动机', '月面巡视技术'],
    achievements: ['中国首次地外天体软着陆'],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746224677/8694a4c27d1ed21b0561dd93af6eddc451da3f1f_w3k8vy.webp',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
    ],
  },
  {
    id: 4,
    title: '天问一号火星任务',
    description:
      '中国首次火星探测，一次实现"绕、着、巡"，祝融号火星车在乌托邦平原开展探测。',
    startDate: '2020-07-23',
    endDate: '2021-05-15',
    status: 'completed',
    target: ['火星乌托邦平原'],
    category: '行星探测',
    assignee: '张荣桥团队',
    progress: 100,
    technology: ['火星车', '环绕器'],
    achievements: ['亚洲首次成功火星着陆'],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746224677/7e3e6709c93d70cf3bc7c56db496c600baa1cd11fd33_pni8yw.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746308570/1127553408_16233814662061n.jpg_pedunm.jpg',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746308570/1127553408_16233814254121n.jpg_uh06m5.jpg',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746308570/1127553408_16233814461111n.jpg_toxdi3.jpg',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746308556/1127553408_16233813965271n.jpg_ec8ks3.jpg',
    ],
  },
  {
    id: 5,
    title: '中国空间站（天宫）',
    description:
      '中国自主建造的常驻太空实验室，支持长期载人驻留、多领域空间科学实验与国际合作项目。',
    startDate: '2021-04-29',
    endDate: '2022-12-31',
    status: 'completed',
    target: ['近地轨道（340-450km）'],
    category: '空间站',
    assignee: '中国载人航天工程办公室',
    progress: 100, // 基本构型已完成
    technology: [
      '舱段自主快速对接',
      '再生式生命保障系统',
      '柔性太阳翼（单翼发电功率18kW）',
      '空间机械臂（10米级作业半径）',
    ],
    achievements: [
      '2022年完成T字基本构型（天和核心舱+问天/梦天实验舱）',
      '常态化驻留3人乘组（每6个月轮换）',
      '开展100+项空间科学实验',
      '首次实现航天员乘组在轨轮换（神舟15/16号）',
      '国际载荷合作项目（如中欧合作伽马暴探测）',
      '启动空间站二期扩展可行性研究',
    ],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746224676/1c950a7b02087bf40ad1d914bd86402c11dfa8ec618a_snqwcw.webp',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
    ],
  },
  {
    id: 6,
    title: '嫦娥六号（月球背面采样）',
    description:
      '世界首次月球背面采样返回任务，目标南极-艾特肯盆地，研究月球早期演化历史。',
    startDate: '2024-05-03',
    endDate: '2024-06-25',
    status: 'in-progress',
    target: ['月球背面'],
    category: '月球探测',
    assignee: '吴伟仁团队',
    progress: 40,
    technology: ['月壤钻取', '月球轨道交会'],
    achievements: ['突破月背中继通信'],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746219294/change6_j1veul.webp',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
    ],
  },
];

export const DefaultMissionImage =
  'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746223585/2460514_wuezew.jpg';
