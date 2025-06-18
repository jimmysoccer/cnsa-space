import { Technology } from '@/types/technology';

export const DefaultTechnologyImage =
  'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746474294/471ca7ac-e965-4d65-8644-c5067629d0d4_qxcwld.jpg';

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'lunar-ascent',
    name: '月面自动起飞系统',
    description:
      '嫦娥五号实现的月面无人自动点火起飞技术，突破月球无导航天气环境挑战。',
    history: '2020年嫦娥五号首次实现地外天体起飞，将样品送回地球。',
    currentProgress: '起飞初始定位精度达0.1°',
    currentApplications: [
      '月球采样返回',
      '未来月球基地物资运输',
      '火星起飞技术验证',
    ],
    futureImprovements: [
      '多目标轨道入轨',
      '重复使用技术',
      '载人月面起飞安全系统',
    ],
    pros: ['自主姿态建立', '高精度惯性导航', '极端环境适应性'],
    cons: ['无法地面测控支持', '羽流效应不可预测', '推进剂余量风险'],
    image:
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746219294/change6_j1veul.webp',
    category: '深空技术',
  },
  {
    id: 'udmh-n2o4-propellant',
    name: '偏二甲肼/四氧化二氮推进剂',
    description:
      '中国航天长期使用的经典液体火箭推进剂组合，具有自燃特性和可靠的燃烧性能。',
    history:
      '1960年代从苏联引进技术后自主发展，用于长征系列火箭早期型号，是中国航天事业的"功勋推进剂"。',
    currentProgress: '逐步被无毒环保推进剂替代，但在部分现役型号中仍在使用。',
    currentApplications: [
      '长征二号系列火箭',
      '长征三号甲系列火箭',
      '早期弹道导弹',
    ],
    futureImprovements: ['完全淘汰计划', '推进剂处理环保技术'],
    pros: ['技术成熟可靠', '常温储存', '自燃特性简化点火系统'],
    cons: ['剧毒和高腐蚀性', '环境污染风险', '操作安全要求高'],
    image:
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462354/79f0f736afc379310a557a78fc8ea04543a98226bb02_egvbfl.webp',
    category: '推进系统',
  },
  {
    id: 'yf-77-engine',
    name: 'YF-77氢氧发动机',
    description:
      '中国首型大推力液氢液氧火箭发动机，为长征五号运载火箭芯级提供动力。',
    history:
      '2001年立项研制，2016年随长征五号首飞成功，是中国首型50吨级氢氧发动机。',
    currentProgress: '已完成多次飞行验证，正在进行可靠性提升改进。',
    currentApplications: ['长征五号系列火箭芯一级'],
    futureImprovements: [
      '推力和比冲提升',
      '重复使用技术研究',
      '可靠性持续改进',
    ],
    pros: ['高比冲', '环保无毒', '大推力'],
    cons: ['液氢操作复杂', '发动机结构复杂', '研制难度大'],
    image:
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746471349/61c015f3512ce04ccdc418f6_1_wpuwh4.jpg',
    category: '推进系统',
  },
  {
    id: 'tianhe-hall-thruster',
    name: '天和霍尔推进器',
    description:
      '中国空间站使用的电推进系统，利用电场加速离子产生推力，用于轨道维持和姿态调整。',
    history:
      '2017年完成初样研制，2021年随天和核心舱首次在轨应用，是中国首个空间站电推进系统。',
    currentProgress: '已在轨稳定运行超过10000小时，完成多次轨道维持任务。',
    currentApplications: [
      '天宫空间站轨道维持',
      '核心舱姿态控制',
      '减少货运飞船燃料补给需求',
    ],
    futureImprovements: [
      '提升推力至100mN级',
      '延长使用寿命至5万小时',
      '发展多模式联合推进系统',
    ],
    pros: [
      '比冲高达3000s以上',
      '燃料消耗仅为化学推进的1/10',
      '无运动部件可靠性高',
    ],
    cons: ['推力较小（约80mN）', '依赖太阳能供电', '存在羽流污染风险'],
    image:
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1747258770/HallThruster_r0hx17.png',
    category: '推进系统',
  },
  {
    id: 'multi-satellite-launch',
    name: '一箭多星技术',
    description: '单次火箭发射将多颗卫星送入不同轨道的先进发射技术。',
    history: '1981年首次实现，2022年创造一箭22星的中国纪录。',
    currentProgress: '已实现商业发射常态化，技术达到国际先进水平。',
    currentApplications: [
      '商业卫星组网发射',
      '科学实验卫星部署',
      '军事卫星快速部署',
    ],
    futureImprovements: [
      '更大数量卫星部署',
      '更精确轨道分配',
      '自适应释放机构',
    ],
    pros: ['大幅降低单星发射成本', '提高发射效率', '灵活应对星座部署需求'],
    cons: ['轨道设计复杂', '卫星分离风险增加', '运载能力要求高'],
    image:
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1747967903/b17eca8065380cd791239360ed1dba345982b3b72bbf_vs0qqm.webp',
    category: '发射技术',
  },
  {
    id: 'cold-launch',
    name: '快速冷发射技术',
    description: '利用燃气发生器将导弹或火箭弹射出发射筒后再点火的技术。',
    history: '最初用于潜射导弹，后发展应用于陆基导弹系统。',
    currentProgress: '已成熟应用于多型战略战术导弹系统。',
    currentApplications: ['潜射弹道导弹', '陆基机动导弹', '快速响应发射系统'],
    futureImprovements: ['通用化发射平台', '多弹种兼容', '发射后快速再装填'],
    pros: ['减少发射平台热损伤', '提高发射隐蔽性', '简化发射装置设计'],
    cons: ['弹射机构复杂', '初始弹道控制难度大', '系统可靠性要求高'],
    image:
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1749093554/42a98226cffc1e176a67482b3e434a0d728de937_mcktp5.webp',
    category: '发射技术',
  },
  {
    id: 'manned-space-launch',
    name: '载人航天发射技术',
    description: '保障航天员安全进入太空的专用发射技术体系。',
    history: '1992年启动载人航天工程，2003年实现首次载人飞行。',
    currentProgress: '已形成常态化载人发射能力，进入空间站建设阶段。',
    currentApplications: [
      '神舟系列载人飞船',
      '天宫空间站人员轮换',
      '航天员训练与发射保障',
    ],
    futureImprovements: ['新一代载人飞船', '商业载人航天', '发射逃逸系统优化'],
    pros: ['高可靠性设计', '完善应急救生系统', '人性化发射流程'],
    cons: ['系统复杂度高', '发射成本高昂', '质量要求极其严格'],
    image:
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746224678/d009b3de9c82d158ccbfce436d430ed8bc3eb035e4a5_vaghrw.webp',
    category: '发射技术',
  },
  {
    id: 'cz-5b-fairing',
    name: '超大直径整流罩',
    description:
      '直径5.2米的超大型整流罩，采用分瓣抛罩技术，满足空间站舱段发射需求。',
    history: '2019年首飞验证，2021年成功发射天和核心舱，创中国整流罩尺寸纪录。',
    currentProgress: '已实现20.5米长整流罩的可靠分离',
    currentApplications: [
      '空间站舱段发射',
      '大型卫星部署',
      '新一代载人飞船测试',
    ],
    futureImprovements: [
      '智能分离控制系统',
      '复合材料轻量化',
      '可重复使用技术',
    ],
    pros: ['中国最大运载空间', '低冲击分离技术', '流线型气动设计'],
    cons: ['增加火箭死重', '空气动力学复杂', '制造成本高'],
    image:
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746468617/pQ11-fzqvvsa2606684_eswmrm.jpg',
    category: '箭体技术',
  },
  {
    id: 'space-rendezvous-docking',
    name: '空间交会对接技术',
    description: '两个航天器在轨道上实现精确会合并机械连接的关键技术。',
    history: '2011年神舟八号首次实现无人对接，2012年神舟九号完成首次载人对接。',
    currentProgress: '已掌握多种对接方式，支持空间站常态化运营。',
    currentApplications: ['空间站补给对接', '载人飞船对接', '在轨服务与维护'],
    futureImprovements: ['全自主智能对接', '非合作目标对接', '在轨燃料加注'],
    pros: ['支持长期空间设施运营', '实现航天器组合飞行', '提高任务灵活性'],
    cons: ['轨道控制精度要求极高', '对接机构复杂精密', '风险控制难度大'],
    image:
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462330/0df3d7ca7bcb0a46f21fbfcf4235e1246b600d3301b5_b9aela.webp',
    category: '在轨操作',
  },
  {
    id: 'tianhe-robotic-arm',
    name: '天和机械臂',
    description:
      '七自由度空间机械臂，可实现舱外设备搬运、航天员辅助和飞行器转位。',
    history: '2021年随天和核心舱入轨，2022年完成问天实验舱转位任务。',
    currentProgress: '已实现10吨级载荷操作精度±5mm',
    currentApplications: [
      '实验舱转位',
      '舱外设备维护',
      '航天员出舱辅助',
      '载荷精密操作',
    ],
    futureImprovements: ['AI自主决策能力', '力反馈精细操作', '多机械臂协同'],
    pros: ['最大伸展长度15米', '末端速度0.1m/s精准控制', '可自主爬行转移'],
    cons: ['能源消耗较大', '极端温度影响精度', '故障维修难度高'],
    image:
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1750268866/d86276db43354c32a121e5c43d62e2d7_oc58vi.jpg',
    category: '在轨操作',
  },
  {
    id: 'next-gen-capsule',
    name: '群伞+气囊缓冲着陆',
    description:
      '采用三伞降落伞群配合缓冲气囊的先进返回技术，实现10吨级飞船陆地软着陆。',
    history: '2020年新一代试验船首次验证，着陆精度达10.8环。',
    currentProgress: '正在开展7米直径主伞群测试',
    currentApplications: ['新一代载人飞船', '月球采样返回', '重型物资回收'],
    futureImprovements: ['自适应开伞控制', '多模式组合缓冲', '海上溅落适应性'],
    pros: ['着陆过载<4g', '支持重复使用', '适应多种地形'],
    cons: ['系统复杂度高', '伞绳缠绕风险', '受气象条件影响'],
    image: 'zxc',
    category: '返回技术',
  },
  {
    id: 'flexible-solar-array',
    name: '三结砷化镓柔性太阳翼',
    description: '光电转换效率超30%的柔性太阳电池阵，单翼展开面积达67平方米。',
    history: '2021年天和核心舱首次应用，2022年问天舱实现双翼对称部署。',
    currentProgress: '在轨发电功率超100kW',
    currentApplications: ['天宫空间站供电', '卫星能源系统', '深空探测器'],
    futureImprovements: [
      '效率提升至35%',
      '可展开面积增大至100㎡',
      '抗辐射涂层技术',
    ],
    pros: ['重量较传统太阳翼轻30%', '可重复收展', '耐原子氧腐蚀'],
    cons: ['微流星防护难度大', '长期折叠可能产生疲劳', '初期成本较高'],
    image: 'wqeasd',
    category: '能源系统',
  },
  {
    id: 'eclss',
    name: '环境控制与生命保障系统',
    description:
      '实现水氧循环利用的密闭生态系统，包括电解制氧、CO2去除和水处理子系统。',
    history: '2021年天和核心舱投入运行，水循环利用率达90%以上。',
    currentProgress: '正在测试尿处理子系统',
    currentApplications: ['航天员氧气供应', '废水回收利用', '舱内大气净化'],
    futureImprovements: [
      '引入植物栽培系统',
      '实现95%物质闭合循环',
      '小型化技术',
    ],
    pros: ['减少地面补给需求', '维持健康舱内环境', '支持长期驻留'],
    cons: ['系统能耗较高', '微生物控制挑战', '维护操作复杂'],
    image: 'dsad',
    category: '载人系统',
  },
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
export const TECHNOLOGY_CATEGORIES = Array.from([
  '全部',
  ...new Set(TECHNOLOGIES.map((tech) => tech.category)),
]);
