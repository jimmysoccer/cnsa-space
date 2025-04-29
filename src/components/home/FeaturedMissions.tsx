
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MissionCard from './MissionCard';

const FeaturedMissions = () => {
  const missions = [
    {
      title: "恒星观测者",
      date: "发射时间: 2024年3月",
      description: "我们的深空望远镜观测遥远星系中的恒星形成。",
      imageSrc: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageAlt: "恒星观测者任务"
    },
    {
      title: "火星探路者",
      date: "发射时间: 2023年1月",
      description: "探索火星表面，寻找古代微生物生命迹象的探测任务。",
      imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageAlt: "火星探路者任务"
    },
    {
      title: "欧罗巴探索者",
      date: "计划发射时间: 2025年",
      description: "探索木星卫星欧罗巴及其地下海洋的任务。",
      imageSrc: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      imageAlt: "欧罗巴探索者"
    }
  ];

  return (
    <section className="py-20 bg-space-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            特色任务
          </h2>
          <p className="text-lg text-space-light/80 max-w-3xl mx-auto">
            探索我们最重要的太空探索项目，这些项目正在推动人类知识的边界。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <MissionCard
              key={index}
              title={mission.title}
              date={mission.date}
              description={mission.description}
              imageSrc={mission.imageSrc}
              imageAlt={mission.imageAlt}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/missions" className="space-button-outline inline-flex">
            查看所有任务 <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMissions;
