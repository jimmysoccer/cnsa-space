import { Mission, MissionStatusType } from '@/types/mission';

export const DefaultMissionImage =
  'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746474294/471ca7ac-e965-4d65-8644-c5067629d0d4_qxcwld.jpg';

export const MISSIONS: Mission[] = [
  {
    id: 1,
    title: '东方红一号发射',
    description:
      '中国首颗人造地球卫星，使用长征一号火箭发射，使中国成为全球第五个独立发射卫星的国家。',
    startDate: '1970-04-24',
    endDate: '1970-04-24',
    status: MissionStatusType.completed,
    target: ['地球轨道'],
    category: ['卫星'],
    assignee: '钱学森团队',
    progress: 100,
    technology: ['长征一号火箭'],
    achievements: ['中国进入太空时代', '在轨播放《东方红》乐曲'],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746219582/7a899e510fb30f2442a76d20d2dfc643ad4bd113a5f4_gavygs.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746460799/caef76094b36acaf2edd714ef78a9a1001e93901367f_dcx5md.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746460798/5882b2b7d0a20cf431ad066ffd5a5c36acaf2edd337d_tvbuq9.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746460798/7af40ad162d9f2d3572c93a222bf9d13632762d06678_bnl7ap.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746460797/3c2c4bfba1cc4d5c6d22eba6_ynnbub.webp',
    ],
  },
  {
    id: 2,
    title: '神舟五号载人任务',
    description:
      '杨利伟成为中国首位航天员，在轨飞行21小时，完成中国首次载人航天任务。',
    startDate: '2003-10-15',
    endDate: '2003-10-16',
    status: MissionStatusType.completed,
    target: ['近地轨道'],
    category: ['载人航天'],
    assignee: '杨利伟',
    progress: 100,
    technology: ['神舟飞船', '长征-2F火箭'],
    achievements: ['中国成为世界第三个独立载人航天的国家'],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746224678/d009b3de9c82d158ccbfce436d430ed8bc3eb035e4a5_vaghrw.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462374/29381f30e924b899a9015ab1834f0a950a7b030858aa_d504xr.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462374/faedab64034f78f0f736509ea7661d55b319ebc4b61c_hwr0e9.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462372/4bed2e738bd4b31c8701ad4e6a9f307f9e2f060852a6_gdmqam.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746222815/838ba61ea8d3fd1f413438bedb1b321f95cad0c8f1a3_uwqlbo.webp',
    ],
  },
  {
    id: 3,
    title: '嫦娥三号（月球软着陆）',
    description:
      '中国首个软着陆月球的探测器，携带"玉兔号"月球车，在虹湾地区开展科学探测。',
    startDate: '2013-12-01',
    endDate: '2013-12-14',
    status: MissionStatusType.completed,
    target: ['月球正面-虹湾'],
    category: ['月球探测'],
    assignee: '孙家栋团队',
    progress: 100,
    technology: ['变推力发动机', '月面巡视技术'],
    achievements: ['中国首次地外天体软着陆'],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746224677/8694a4c27d1ed21b0561dd93af6eddc451da3f1f_w3k8vy.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462353/0ff41bd5ad6eddc45ee2478d3bdbb6fd526633ba_yp1amg.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462353/8cb1cb1349540923bef56a499058d109b3de496c_kzmabo.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462354/79f0f736afc379310a557a78fc8ea04543a98226bb02_egvbfl.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462355/242dd42a2834349becb038facbea15ce36d3be1f_nf8hhu.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462356/0824ab18972bd4074943858279899e510eb309cc_xylljf.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462357/5882b2b7d0a20cf43d07a8a074094b36acaf993d_hu9meb.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462360/b2de9c82d158ccbf59e7f24c1bd8bc3eb1354168_excqww.webp',
    ],
  },
  {
    id: 4,
    title: '天问一号火星任务',
    description:
      '中国首次火星探测，一次实现"绕、着、巡"，祝融号火星车在乌托邦平原开展探测。',
    startDate: '2020-07-23',
    endDate: '2021-05-15',
    status: MissionStatusType.completed,
    target: ['火星乌托邦平原'],
    category: ['行星探测', '火星探测', '科学探测'],
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
    status: MissionStatusType.completed,
    target: ['近地轨道（340-450km）'],
    category: ['空间站', '载人航天', '国际合作'],
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
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462329/0b55b319ebc4b74543a9584bc5a409178a82b901bf6c_v7whqi.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462330/3c6d55fbb2fb43166d22333a82f4512309f790527568_fvia0u.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746462331/4d086e061d950a7b02087d2d088675d9f2d3562c6399_cr6jfa.webp',
    ],
  },
  {
    id: 6,
    title: '嫦娥六号（月球背面采样）',
    description:
      '世界首次月球背面采样返回任务，目标南极-艾特肯盆地，研究月球早期演化历史。',
    startDate: '2024-05-03',
    endDate: '2024-06-25',
    status: MissionStatusType.completed,
    target: ['月球背面'],
    category: ['月球探测'],
    assignee: '吴伟仁团队',
    progress: 100,
    technology: ['月壤钻取', '月球轨道交会'],
    achievements: ['突破月背中继通信'],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746219294/change6_j1veul.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746460570/1ad5ad6eddc451da81cb7179c1a54566d01609249453_za61hp.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746460570/3801213fb80e7bec54e70ff80276ae389b504fc23d28_njnrlt.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746460570/63d9f2d3572c11dfa9ec683b4e7f75d0f703918f6428_amf7bl.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746460570/b03533fa828ba61ea8d3961b6c6c800a304e251ff3f5_cdppni.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746460570/c8177f3e6709c93d70cf684acd64efdcd100baa1fe4f_mofneq.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746460570/7af40ad162d9f2d3572c42d413b49d13632762d066cd_zrv5y3.webp',
    ],
  },
  {
    id: 7,
    title: '悟空号暗物质探测卫星',
    description:
      '中国首颗暗物质粒子探测卫星，具有世界最高能量分辨率和空间分辨率。',
    startDate: '2015-12-17',
    endDate: '2025-12-31', // 预计服役期
    status: MissionStatusType.inProgress,
    target: ['太阳同步轨道'],
    category: ['科学探测'],
    assignee: '中科院紫金山天文台',
    progress: 85,
    technology: ['高能粒子探测器', 'BGO量能器'],
    achievements: [
      '首次直接观测到电子宇宙射线能谱在1TeV处的拐折',
      '获得迄今最精确的GeV-TeV电子宇宙射线能谱',
    ],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746730072/cc11728b4710b912c8fcd13c5ea5eb039245d78884e3_m50qiq.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746730072/a5c27d1ed21b0ef41bd5bb62789346da81cb39db90ca_l6opad.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746730071/83025aafa40f4bfbfbed97949e176ff0f736aec3b2e1_jyrkrk.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746730071/622762d0f703918fa0ec700ecc65319759ee3c6d6ee4_uiwcll.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746730072/dcc451da81cb39dbb6fd76964d4e1e24ab18962b9ae1_kn1rrv.webp',
    ],
  },
  {
    id: 8,
    title: '墨子号量子科学实验卫星',
    description:
      '世界首颗量子通信卫星，实现千公里级量子纠缠分发和量子密钥分发。',
    startDate: '2016-08-16',
    endDate: '2024-12-31', // 预计服役期
    status: MissionStatusType.inProgress,
    target: ['太阳同步轨道'],
    category: ['通信技术'],
    assignee: '潘建伟团队',
    progress: 95,
    technology: ['量子纠缠源', '量子通信终端'],
    achievements: [
      '实现1200公里量子纠缠分发（创世界纪录）',
      '完成洲际量子密钥分发',
      '构建天地一体化量子通信网络雏形',
    ],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731232/bba1cd11728b4710b912e355409bd4fdfc0392458557_qlskgy.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731232/7acb0a46f21fbe096b63471610351b338744ebf80721_zfgya9.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731232/35a85edf8db1cb134954020ba601414e9258d109ddd4_eoia8p.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731232/37d12f2eb9389b504fc2254dfe60f2dde71190efc02c_jxyyyl.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731232/18d8bc3eb13533fa828bbd30d386ea1f4134970aed2a_e2c4nu.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731232/2fdda3cc7cd98d1001e9df005a6aaf0e7bec54e73afe_wulhtm.webp',
    ],
  },
  {
    id: 9,
    title: '北斗三号全球组网',
    description:
      '建成独立自主的全球卫星导航系统，提供全球定位、导航和授时服务。',
    startDate: '2017-11-05',
    endDate: '2020-06-23',
    status: MissionStatusType.completed,
    target: ['中圆地球轨道', '地球静止轨道', '倾斜地球同步轨道'],
    category: ['导航系统'],
    assignee: '北斗卫星导航系统工程',
    progress: 100,
    technology: ['星间链路技术', '高精度原子钟', '全球短报文通信'],
    achievements: [
      '建成由35颗卫星组成的全球系统',
      '定位精度优于10米（全球）',
      '授时精度优于20纳秒',
      '短报文通信能力提升10倍',
    ],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746730061/2f738bd4b31c8701a18bdd178734892f0708293851a4_drgwwu.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746730062/d0526df04da65193a50f5245_bxxl8b.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746730063/8435e5dde71190ef76c6fa1dda428a16fdfaae51cae2_kxnoul.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746730062/3c6d55fbb2fb43166d22ff934eea512309f791527581_x5u1gh.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746730063/d62a6059252dd42a2834366234694cb5c9ea14ce12e2_wspnkf.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746730063/359b033b5bb5c9ea15ce312ae26ba1003af33b8715e2_dzlyqt.webp',
    ],
  },
  {
    id: 10,
    title: '长征五号首飞',
    description:
      '中国现役运载能力最大的火箭，近地轨道运载能力25吨，奠定重型火箭基础。',
    startDate: '2016-11-03',
    endDate: '2016-11-03',
    status: MissionStatusType.completed,
    target: ['地球转移轨道'],
    category: ['运载火箭'],
    assignee: '中国运载火箭技术研究院',
    progress: 100,
    technology: ['YF-77氢氧发动机', '5米直径箭体', '模块化设计'],
    achievements: ['中国进入大火箭时代', '为后续空间站建设奠定基础'],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746471349/61c015f3512ce04ccdc418f6_1_wpuwh4.jpg',
    ],
  },
  {
    id: 11,
    title: '嫦娥四号（月背着陆）',
    description: '人类首个在月球背面软着陆的探测器，携带"玉兔二号"月球车。',
    startDate: '2018-12-08',
    endDate: '2019-01-03',
    status: MissionStatusType.completed,
    target: ['月球背面-冯·卡门撞击坑'],
    category: ['月球探测'],
    assignee: '吴伟仁团队',
    progress: 100,
    technology: ['鹊桥中继卫星', '低频射电天文观测'],
    achievements: [
      '首次实现月背软着陆',
      '发现月球深部物质新证据',
      '玉兔二号成为月面工作时间最长月球车',
    ],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731237/5243fbf2b2119313b07e7d33f0721bd7912397dd2757_c9wqcy.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731244/4ec2d5628535e5dde7119fd81695b0efce1b9d16c423_fcsyvo.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731237/2fdda3cc7cd98d1001e9f5b8b475af0e7bec55e73aad_q8thjc.webp',
    ],
  },
  {
    id: 12,
    title: '嫦娥五号（月球采样返回）',
    description: '中国首次地外天体采样返回任务，带回1731克月壤样本。',
    startDate: '2020-11-24',
    endDate: '2020-12-17',
    status: MissionStatusType.completed,
    target: ['月球正面-风暴洋'],
    category: ['月球探测'],
    assignee: '孙家栋团队',
    progress: 100,
    technology: ['月面自动采样', '月球轨道无人交会对接', '月壤密封封装'],
    achievements: [
      '中国首次实现地外天体采样返回',
      '带回最年轻的月球火山岩样本（约20亿年）',
      '发现月球新矿物"嫦娥石"',
    ],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746475583/a08b87d6277f9e2f07084d43867afe24b899a901556f_l89bt0.webp',
    ],
  },
  {
    id: 13,
    title: '天舟货运飞船',
    description: '中国空间站货物运输系统，最大上行运载能力6.9吨。',
    startDate: '2017-04-20',
    endDate: '2023-05-10', // 最新一次任务时间
    status: MissionStatusType.inProgress,
    target: ['中国空间站'],
    category: ['货运飞船'],
    assignee: '中国载人航天工程办公室',
    progress: 100,
    technology: ['全密封/半密封货舱设计', '快速自主交会对接（6.5小时）'],
    achievements: ['完成空间站建造阶段全部物资运输任务', '实现推进剂在轨补加'],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731235/d62a6059252dd42a2834c02246624cb5c9ea14ce12ba_g5hsrh.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731234/0823dd54564e9258d109b0df14c8c658ccbf6c81e0e2_fu2p5b.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731234/0e2442a7d933c895d1430968fc4b64f082025aafaad2_fuok48.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731236/e850352ac65c10385343e01a9f498413b07ecb8023e9_uv2kie.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731235/f9dcd100baa1cd11728b38fd944adffcc3cec2fd87ec_ujj1a6.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746731235/7a899e510fb30f2442a778dde5cdc643ad4bd013a5ef_pujspy.webp',
    ],
  },
  {
    id: 14,
    title: '高分系列卫星',
    description:
      '中国高分辨率对地观测系统，形成全天候、全天时、全球覆盖的对地观测能力。',
    startDate: '2013-04-26', // 高分一号发射
    endDate: '2022-12-15', // 最新发射
    status: MissionStatusType.inProgress,
    target: ['地球观测'],
    category: ['遥感卫星'],
    assignee: '国家航天局',
    progress: 100,
    technology: ['亚米级光学成像', '合成孔径雷达', '高光谱成像'],
    achievements: [
      '建成包含10余颗卫星的观测系统',
      '分辨率最高达0.5米',
      '服务农业、减灾、环保等领域',
    ],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746729787/b90e7bec54e736d12f2e361f420758c2d5628535c3d6_wntaa5.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746729787/HK_WCN_%E7%81%A3%E4%BB%94%E5%8C%97_Wan_Chai_North_%E9%A6%99%E6%B8%AF%E6%9C%83%E5%B1%95_HKCEC_%E5%89%B5%E7%A7%91%E5%8D%9A%E8%A6%BD_InnoTech_Expo_HKSAR_%E8%88%AA%E5%A4%A9%E5%99%A8_outer_spacecraft_%E9%AB%98%E5%88%86%E4%B8%83%E8%99%9F_%E8%A1%9B%E6%98%9F_Gaofen_Six_December_2022_Px3_03_uox0hq.jpg',
    ],
  },
  {
    id: 15,
    title: '天问二号（小行星采样返回）',
    description:
      '中国首次小行星采样返回任务，目标为近地小行星2016 HO3（Kamoʻoalewa）',
    startDate: '2025-05-30', // 计划发射时间（待官方确认）
    endDate: '2030-12-31', // 返回时间预计2030年
    status: MissionStatusType.planned, // 或 "active" 视任务阶段调整
    target: ['小行星2016 HO3（Kamoʻoalewa）', '主带彗星311P'],
    category: ['小行星探测', '彗星探测'],
    assignee: '张荣桥团队', // 天问系列总设计师
    progress: 5, // 发射前为0，升空后按阶段更新
    technology: [
      '小行星智能附着采样',
      '多天体引力借力飞行',
      '微重力环境下密封封装',
      '彗星近距离观测',
    ],
    achievements: [
      // 预期成果（待实际任务更新）
      '中国首次小行星样本返回',
      '探索地球共轨天体的起源',
      '实现"一箭双探"（小行星+彗星）',
    ],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746654172/4b90f603738da9773912f0ea1b08ef198618377a45e2_s2vzen.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746654172/42166d224f4a20a446237cc33c0b8f22720e0cf37a27_ioxk5n.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746654172/21a4462309f7905298220a3aa0aac0ca7bcb0a467f27_oar7bk.webp',
    ],
    // 可选扩展字段
    note: '任务分两阶段：2025年采样小行星，2030年探访彗星311P后返回地球',
  },
  {
    id: 16,
    title: '嫦娥七号（月球南极综合探测）',
    description:
      '中国首个月球南极综合探测任务，配备轨道器、着陆器、巡视器和飞跃探测器，重点探测水冰分布与月夜生存技术。',
    startDate: '2026-11-30', // 计划发射窗口
    endDate: '2027-12-31', // 预计主任务期结束
    status: MissionStatusType.planned,
    target: ['月球南极-沙克尔顿撞击坑'],
    category: ['月球探测', '水冰勘查'],
    assignee: '吴伟仁团队',
    progress: 15, // 当前处于初样研制阶段
    technology: [
      '月面水冰雷达（探测深度≥100m）',
      '月球飞跃探测器（可重复起降）',
      '-190℃极低温电池技术',
      '中子能谱分析仪',
    ],
    achievements: [
      '绘制首张月球南极水冰分布图',
      '验证月夜生存能源方案',
      '发现永久阴影坑挥发物成分',
    ],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746460570/b03533fa828ba61ea8d3961b6c6c800a304e251ff3f5_cdppni.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1746219294/change6_j1veul.webp',
    ],
  },
  {
    id: 17,
    title: '天宫空间站扩展舱段（巡天光学舱）',
    description:
      '新增直径2米的巡天空间望远镜，与空间站共轨飞行，具备哈勃望远镜300倍的视场覆盖能力。',
    startDate: '2027-03-15',
    endDate: '2032-12-31', // 预计10年运营期
    status: MissionStatusType.planned,
    target: ['近地轨道（393km）'],
    category: ['空间天文', '空间站扩展'],
    assignee: '中国载人航天工程办公室',
    progress: 20,
    technology: [
      '超精密稳像平台（指向精度0.01角秒）',
      '2.5亿像素大视场相机',
      '在轨服务接口（可航天员维护）',
    ],
    achievements: [
      '完成40%宇宙深场巡天',
      '发现系外行星候选体≥5000颗',
      '实现暗物质分布三维测绘',
    ],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1748916468/9345d688d43f8794a4c2ae22364219f41bd5ad6e8c3f_bms6jl.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1748916469/7aec54e736d12f2eb9381e6dab9bc2628535e5ddc23e_e12oka.webp',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1748916468/3ac79f3df8dcd100baa10b3c96d25010b912c8fc812e_wj5kin.webp',
    ],
    note: '每半年与空间站对接进行补给和维护',
  },
  {
    id: 18,
    title: '载人登月任务（嫦娥工程）',
    description:
      '使用新一代载人飞船与月面着陆器组合，实现2名航天员48小时月面驻留，开展月球科学考察。',
    startDate: '2032-09-15', // 计划窗口
    endDate: '2032-10-30', // 含地月往返时间
    status: MissionStatusType.planned,
    target: ['月球南极-艾特肯盆地'],
    category: ['载人航天', '月球开发'],
    assignee: '载人航天工程中心',
    progress: 5,
    technology: [
      '长征十号重型火箭（LEO 70t）',
      '月面着陆器（10吨级）',
      '月面舱外航天服（8小时续航）',
      '月球轨道交会对接',
    ],
    achievements: [
      '中国首次载人地外天体登陆',
      '采集月球深部物质样本',
      '验证月面原位资源利用技术',
    ],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1749000788/Chinese_next-generation_crewed_spacecraft_mockup_-_NMC_l8ggzn.jpg',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1749000788/Chinese_crewed_lunar_lander_mockup_01_-_NMC_phslvc.jpg',
    ],
  },
  {
    id: 19,
    title: '小行星防御验证任务',
    description:
      '对近地小行星实施动能撞击与轨道偏转测量，构建行星防御能力的技术验证。',
    startDate: '2035-05-20',
    endDate: '2036-11-30',
    status: MissionStatusType.planned,
    target: ['小行星2020PN1'],
    category: ['行星防御', '深空探测'],
    assignee: '国家航天局深空探测实验室',
    progress: 0,
    technology: [
      '高速撞击器（速度≥10km/s）',
      '深空自主导航系统',
      '轨道偏转精确测量',
    ],
    achievements: [
      '实现小行星轨道速度改变≥1cm/s',
      '建立撞击效果评估模型',
      '验证地球威胁天体处置流程',
    ],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1749000646/983a809392394536bfc3c42062505b9d_lernfj.gif',
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1749000645/320_cl1dfl.png',
    ],
    note: '与欧空局Hera任务共享监测数据',
  },
  {
    id: 20,
    title: '天问三号(火星采样返回)',
    description:
      '通过"轨道器-着陆器-上升器"组合，实现中国首次火星土壤样本回收，单程样本量≥500克。',
    startDate: '2038-07-01',
    endDate: '2042-12-31',
    status: MissionStatusType.planned,
    target: ['火星乌托邦平原'],
    category: ['行星探测', '样本返回', '火星探测'],
    assignee: '天问系列团队',
    progress: 0,
    technology: [
      '火星起飞技术（第一宇宙速度逃逸）',
      '气动密封容器（防地球生物污染）',
      '深空低温样本保存',
    ],
    achievements: [
      '获取火星次表层土壤样本',
      '分析火星古气候证据',
      '验证地火往返运输系统',
    ],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1748007464/Ehe90pNStsFCd8EXrTn8XRKDwyUevo8RB8cwU4sUnC8Dt1587931450392compressflag_jvlaxp.webp',
    ],
  },
  {
    id: 21,
    title: '长征九号首飞',
    description:
      '中国首款可重复使用重型运载火箭，近地轨道运载能力150吨（一次性使用）/80吨（可回收），地月转移轨道运载能力50吨，将支撑载人登月、火星采样返回等国家重大航天工程',
    startDate: '2033-12-01',
    endDate: '2033-12-31',
    status: MissionStatusType.planned,
    target: ['近地轨道', '地月转移轨道'],
    category: ['运载火箭', '重型火箭'],
    assignee: '中国运载火箭技术研究院（CALT）',
    progress: 18, // 当前处于关键技术攻关阶段
    technology: [
      '10米直径箭体（铝合金-复合材料混合结构）',
      '480吨级液氧煤油发动机（YF-130，海平面推力4800kN）',
      '200吨级液氢液氧发动机（YF-90，真空比冲452s）',
      '可重复使用一级（着陆精度±30米）',
      '智能故障诊断系统（自主应急能力≥90%）',
    ],
    achievements: [
      '中国运载能力最大火箭（超越长征五号5倍）',
      '单次发射可运送2个月球着陆器舱段',
      '支撑2035年前载人登月目标',
      '推动不锈钢燃料贮箱等20项新材料突破',
    ],
    images: [
      'https://res.cloudinary.com/ds4h9nepa/image/upload/v1751581067/Long_March_9_mockup_at_ZHAL_aq8pay.jpg',
    ],
    note: '采用"模块化设计+部分复用"技术路线，后续将发展完全可重复使用型号（预计2040年）',
  },
];
