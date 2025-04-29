
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

// Mission data
const missions = [
  {
    id: 1,
    name: "恒星观测者",
    date: "2024年3月",
    status: "进行中",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "我们的深空望远镜观测遥远星系中的恒星形成，以更好地了解宇宙的演化。",
    objectives: [
      "绘制遥远星系中的恒星形成图",
      "研究暗物质对星系形成的影响",
      "实时观测超新星"
    ],
    technology: "先进的红外线和伽马射线传感器，配合基于神经网络的图像处理技术。",
    achievements: "已经捕获超过500,000张之前未观测到的星系高分辨率图像。"
  },
  {
    id: 2,
    name: "火星探路者",
    date: "2023年1月",
    status: "进行中",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "探索火星表面，寻找古代微生物生命迹象和未来人类探索可能利用的资源。",
    objectives: [
      "寻找过去微生物生命的证据",
      "绘制未来任务可能使用的资源分布图",
      "测试从火星大气中提取氧气的技术"
    ],
    technology: "自主导航探测车，具有光谱分析和样本采集能力。",
    achievements: "确认了地下冰的存在，并收集了超过30个岩石样本进行分析。"
  },
  {
    id: 3,
    name: "欧罗巴探索者",
    date: "2025年（计划中）",
    status: "开发中",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "探索木星的卫星欧罗巴及其地下海洋，寻找适合生命存在的条件。",
    objectives: [
      "测绘欧罗巴冰壳厚度",
      "采样并分析水汽喷流",
      "在海洋中寻找生物特征"
    ],
    technology: "冰层穿透雷达、质谱仪和自主着陆系统。",
    achievements: "目前处于最终开发阶段。发射窗口定于2025年中。"
  },
  {
    id: 4,
    name: "月球门户",
    date: "2023年9月",
    status: "进行中",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "环绕月球的空间站，作为科学实验室和月球表面机器人及人类探索的中转站。",
    objectives: [
      "在月球附近建立永久人类存在",
      "支持月球表面任务",
      "测试深空栖息系统"
    ],
    technology: "模块化空间站，配备辐射屏蔽和人工重力区域。",
    achievements: "已成功与4次补给任务对接并接待了3次乘员轮换。"
  },
  {
    id: 5,
    name: "TRAPPIST探索者",
    date: "2027年（计划中）",
    status: "规划中",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "新一代系外行星望远镜，旨在研究TRAPPIST-1系统中行星的大气层。",
    objectives: [
      "分析TRAPPIST-1行星的大气层成分",
      "寻找生物特征气体",
      "测量表面温度和条件"
    ],
    technology: "革命性的光谱仪，能够在40光年外的类地行星上检测大气气体。",
    achievements: "设计阶段已完成。正在进行组件测试。"
  },
  {
    id: 6,
    name: "小行星重定向",
    date: "2022年10月",
    status: "已完成",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "通过改变一个近地小行星的轨道来测试小行星偏转技术。",
    objectives: [
      "演示动能撞击技术",
      "精确测量轨道变化",
      "测试自主导航系统"
    ],
    technology: "动能撞击航天器，配备实时导航和撞击分析系统。",
    achievements: "成功改变了小行星的轨道10分钟 - 证明了行星防御能力。"
  }
];

const Missions = () => {
  const [selectedMission, setSelectedMission] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenMission = (mission) => {
    setSelectedMission(mission);
    setOpen(true);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero section */}
      <section className="bg-space-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              我们的太空任务
            </h1>
            <p className="text-lg text-space-light/80 mb-8">
              探索正在进行和计划中的太空探索任务，这些任务正在推动人类知识和技术的边界。
            </p>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="bg-space-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-10 text-center">
            任务时间线
          </h2>
          
          <div className="max-w-6xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-space-accent/30 transform md:translate-x-[-50%] hidden md:block"></div>
            
            <div className="space-y-12">
              {missions
                .sort((a, b) => {
                  if (a.date.includes('计划') && !b.date.includes('计划')) return 1;
                  if (!a.date.includes('计划') && b.date.includes('计划')) return -1;
                  return 0;
                })
                .map((mission, index) => (
                  <div key={mission.id} className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2"></div>
                    <div className="flex items-center justify-center mx-4 relative">
                      <div className="w-10 h-10 rounded-full bg-space-accent flex items-center justify-center z-10">
                        <Clock className="h-5 w-5 text-space-light" />
                      </div>
                    </div>
                    <div className="md:w-1/2 bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20">
                      <h3 className="text-xl font-orbitron font-bold mb-2">{mission.name}</h3>
                      <div className="flex items-center mb-4">
                        <Calendar size={16} className="text-space-accent mr-2" />
                        <span className="text-space-light/70">{mission.date}</span>
                        <span className={`ml-3 text-xs px-2 py-1 rounded-full font-medium ${
                          mission.status === '进行中' ? 'bg-green-500/20 text-green-400' : 
                          mission.status === '已完成' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {mission.status}
                        </span>
                      </div>
                      <p className="text-space-light/80 mb-4">{mission.description}</p>
                      <button 
                        onClick={() => handleOpenMission(mission)}
                        className="inline-flex items-center text-space-accent hover:text-space-light text-sm"
                      >
                        任务详情 <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      {/* Mission details modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        {selectedMission && (
          <DialogContent className="sm:max-w-3xl bg-space-secondary border-space-accent/30">
            <DialogTitle className="font-orbitron text-2xl text-space-accent">
              {selectedMission.name}
            </DialogTitle>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={selectedMission.image} 
                  alt={selectedMission.name} 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4 flex items-center">
                  <Calendar size={16} className="text-space-accent mr-2" />
                  <span className="text-space-light/70 mr-4">{selectedMission.date}</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    selectedMission.status === '进行中' ? 'bg-green-500/20 text-green-400' : 
                    selectedMission.status === '已完成' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {selectedMission.status}
                  </span>
                </div>
              </div>
              
              <div>
                <DialogDescription className="text-space-light/90 mb-4">
                  {selectedMission.description}
                </DialogDescription>
                
                <h4 className="font-orbitron text-space-accent mb-2">任务目标</h4>
                <ul className="list-disc list-inside mb-4 text-space-light/80">
                  {selectedMission.objectives.map((objective, index) => (
                    <li key={index} className="mb-1">{objective}</li>
                  ))}
                </ul>
                
                <h4 className="font-orbitron text-space-accent mb-2">技术</h4>
                <p className="text-space-light/80 mb-4">{selectedMission.technology}</p>
                
                <h4 className="font-orbitron text-space-accent mb-2">成就</h4>
                <p className="text-space-light/80">{selectedMission.achievements}</p>
              </div>
            </div>
            
            <DialogClose className="absolute right-4 top-4 text-space-light/70 hover:text-space-light">
              <span className="sr-only">关闭</span>
              <Info className="h-6 w-6" />
            </DialogClose>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default Missions;
