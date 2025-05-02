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
    priority: 'high',
    target: ['地球轨道'],
    category: '卫星',
    assignee: '钱学森团队',
    progress: 100,
    technology: ['长征一号火箭'],
    achievements: ['中国进入太空时代', '在轨播放《东方红》乐曲'],
    image:
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746219582/7a899e510fb30f2442a76d20d2dfc643ad4bd113a5f4_gavygs.webp', // NASA 存档的中国卫星照片（示例）
  },
  {
    id: 2,
    title: '神舟五号载人任务',
    description:
      '杨利伟成为中国首位航天员，在轨飞行21小时，完成中国首次载人航天任务。',
    startDate: '2003-10-15',
    endDate: '2003-10-16',
    status: 'completed',
    priority: 'high',
    target: ['近地轨道'],
    category: '载人航天',
    assignee: '杨利伟',
    progress: 100,
    technology: ['神舟飞船', '长征-2F火箭'],
    achievements: ['中国成为世界第三个独立载人航天的国家'],
    image: 'https://img.cnsa.gov.cn/image/2021/06/16/20210616102935648.jpg', // 中国航天科技集团官方图库（示例）
  },
  {
    id: 3,
    title: '嫦娥三号（月球软着陆）',
    description:
      '中国首个软着陆月球的探测器，携带“玉兔号”月球车，在虹湾地区开展科学探测。',
    startDate: '2013-12-01',
    endDate: '2013-12-14',
    status: 'completed',
    priority: 'high',
    target: ['月球正面-虹湾'],
    category: '月球探测',
    assignee: '孙家栋团队',
    progress: 100,
    technology: ['变推力发动机', '月面巡视技术'],
    achievements: ['中国首次地外天体软着陆'],
    image: 'https://moon.bao.ac.cn/uploads/2021/12/20211203102612345.jpg', // 中国科学院月球与深空探测中心图库
  },
  {
    id: 4,
    title: '天问一号火星任务',
    description:
      '中国首次火星探测，一次实现“绕、着、巡”，祝融号火星车在乌托邦平原开展探测。',
    startDate: '2020-07-23',
    endDate: '2021-05-15',
    status: 'completed',
    priority: 'high',
    target: ['火星乌托邦平原'],
    category: '行星探测',
    assignee: '张荣桥团队',
    progress: 100,
    technology: ['火星车', '环绕器'],
    achievements: ['亚洲首次成功火星着陆'],
    image:
      'https://www.cnsa.gov.cn/n6759533/n6759543/202105/W020210515354345234567.jpg', // CNSA 官方火星任务照片
  },
  {
    id: 5,
    title: '天宫空间站（在轨建造）',
    description:
      '中国首个长期有人驻留的空间站，用于科学实验、技术验证和国际合作。',
    startDate: '2021-04-29',
    endDate: '2024-12-31',
    status: 'in-progress',
    priority: 'high',
    target: ['近地轨道'],
    category: '空间站',
    assignee: '周建平团队',
    progress: 90,
    technology: ['舱段对接', '再生生保系统'],
    achievements: ['完成T字基本构型建造'],
    image: 'https://cmse.gov.cn/gallery/img/2023/06/20230601123456789.jpg', // 中国载人航天工程办公室图库
  },
  {
    id: 6,
    title: '嫦娥六号（月球背面采样）',
    description:
      '世界首次月球背面采样返回任务，目标南极-艾特肯盆地，研究月球早期演化历史。',
    startDate: '2024-05-03',
    endDate: '2024-12-31',
    status: 'in-progress',
    priority: 'high',
    target: ['月球背面'],
    category: '月球探测',
    assignee: '吴伟仁团队',
    progress: 40,
    technology: ['月壤钻取', '月球轨道交会'],
    achievements: ['突破月背中继通信'],
    image:
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746219294/change6_j1veul.webp', // 探月工程官方图片（示例）
  },
];
