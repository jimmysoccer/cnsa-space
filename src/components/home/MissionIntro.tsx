import React from 'react';
import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import MissionCountdown from './MissionCountdown';
import { NavBarItemsObj } from '@/constants/navConstants';

const MissionIntro = () => {
  return (
    <section className='py-20 bg-space-secondary/30'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='mb-10 md:mb-0 md:w-1/2'>
              <h2 className='text-3xl md:text-4xl font-orbitron font-bold mb-4'>
                下一次任务发射
              </h2>
              <p className='text-lg text-space-light/80 mb-6'>
                我们的下一个任务"地平线探索者"即将启动。敬请期待对木星卫星的开创性探索。
              </p>
              <Link
                to={NavBarItemsObj.missions.path}
                className='space-button inline-flex'
              >
                任务详情 <Rocket size={18} />
              </Link>
            </div>
            <MissionCountdown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionIntro;
