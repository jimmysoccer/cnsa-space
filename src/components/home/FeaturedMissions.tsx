import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MissionCard from './MissionCard';
import { NavBarItemsObj } from '@/constants/navConstants';
import { MISSIONS } from '@/constants/missionConstants';

const FeaturedMissions = () => {
  return (
    <section className='py-20 bg-space-dark'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-orbitron font-bold mb-4'>
            特色任务
          </h2>
          <p className='text-lg text-space-light/80 max-w-3xl mx-auto'>
            探索我们最重要的太空探索项目，这些项目正在推动人类知识的边界。
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {MISSIONS.slice(-3).map((mission, index) => (
            <MissionCard
              key={index}
              missionId={mission.id}
              title={mission.title}
              date={mission.endDate}
              description={mission.description}
              imageSrc={mission.images[0]}
              imageAlt={mission.title}
            />
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link
            to={NavBarItemsObj.missions.path}
            className='space-button-outline inline-flex'
          >
            查看所有任务 <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMissions;
