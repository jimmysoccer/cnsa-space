import React from 'react';
import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import MissionCountdown from './MissionCountdown';
import { NavBarItemsObj } from '@/constants/navConstants';
import { MISSIONS } from '@/constants/missionConstants';

const getNextMission = () => {
  if (MISSIONS && MISSIONS.length > 0) {
    const upcomingMissions = MISSIONS.filter(
      (mission) => new Date(mission.startDate) > new Date()
    );
    if (upcomingMissions.length > 0) {
      const nextMission = upcomingMissions.sort(
        (a, b) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      )[0];

      return {
        title: nextMission.title,
        description: nextMission.description,
        startDate: new Date(nextMission.startDate),
      };
    }
  }
  return {
    title: '地平线探索者',
    description: '即将发射，探索木星的卫星。',
    startDate: new Date('2025-05-15T10:00:00Z'),
  };
};

const NextMission = getNextMission();

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
                我们的下一个任务"{NextMission.title}"即将启动
              </p>
              <p className='text-lg text-space-light/80 mb-6'>
                {NextMission.description}
              </p>
              <Link
                to={NavBarItemsObj.missions.path}
                className='space-button inline-flex'
              >
                任务详情 <Rocket size={18} />
              </Link>
            </div>
            <MissionCountdown launchDate={NextMission.startDate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionIntro;
