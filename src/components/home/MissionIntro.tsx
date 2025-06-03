import React from 'react';
import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import MissionCountdown from './MissionCountdown';
import { NavBarItemsObj } from '@/constants/navConstants';
import { MISSIONS } from '@/constants/missionConstants';
import MissionCard from './MissionCard';

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
      return nextMission;
    }
  }
  return NextMission[NextMission.length - 1];
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
                下一次重大任务发射
              </h2>
              <MissionCard
                key={'MissionIntroCounutdownCard'}
                mission={NextMission}
              />
            </div>
            <MissionCountdown launchDate={NextMission.startDate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionIntro;
