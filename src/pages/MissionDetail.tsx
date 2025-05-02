
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowLeft, Clock, Target, Users, Folder } from 'lucide-react';
import { formatDateToYYYYMMDD } from '@/utils/date';

import { Button } from '@/components/ui/button';
import { Mission } from '@/types/mission';
import { NavBarItemsObj } from '@/constants/navConstants';
import { MISSIONS } from '@/constants/missionConstants';
import {
  getPriorityBadge,
  getStatusColor,
  getStatusText,
} from '@/utils/mission-status';
import MissionGallery from '@/components/missions/MissionGallery';
import MissionAchievements from '@/components/missions/MissionAchievements';
import MissionTechnology from '@/components/missions/MissionTechnology';

const MissionDetail = () => {
  const { missionId } = useParams();
  const [mission, setMission] = useState<Mission | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (missionId) {
      // Find the mission by ID in our data
      const foundMission = MISSIONS.find((t) => t.id === parseInt(missionId));
      setMission(foundMission || null);
    }
    setLoading(false);
  }, [missionId]);

  if (loading) {
    return (
      <div className='container mx-auto px-4 py-20'>
        <div className='flex justify-center items-center h-64'>
          <Clock className='h-8 w-8 animate-spin text-space-accent' />
        </div>
      </div>
    );
  }

  if (!mission) {
    return (
      <div className='container mx-auto px-4 py-20'>
        <div className='text-center'>
          <h1 className='text-2xl font-orbitron mb-4'>任务未找到</h1>
          <p className='mb-6'>无法找到ID为 {missionId} 的任务</p>
          <Link to={NavBarItemsObj.missions.path}>
            <Button variant='outline' className='flex items-center gap-2'>
              <ArrowLeft className='h-4 w-4' />
              返回任务列表
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen pt-16'>
      {/* Header with hero image */}
      <div
        className='w-full h-64 bg-cover bg-center relative'
        style={{
          backgroundImage: `url(${mission.image})`,
        }}
      >
        <div className='absolute inset-0 bg-space-dark/70 backdrop-blur-sm'></div>
        <div className='container mx-auto px-4 h-full flex items-end pb-6 relative z-10'>
          <div>
            <Link to={NavBarItemsObj.missions.path} className='block w-fit'>
              <Button
                variant='outline'
                size='sm'
                className='mb-4 flex items-center gap-2 w-full'
              >
                <ArrowLeft className='h-4 w-4' />
                返回任务列表
              </Button>
            </Link>
            <h1 className='text-3xl md:text-4xl font-orbitron font-bold text-space-light'>
              {mission.title}
            </h1>
            <div className='flex flex-wrap items-center mt-4 space-x-4'>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  mission.status
                )}`}
              >
                {getStatusText(mission.status)}
              </span>
              {getPriorityBadge(mission.priority)}
              <div className='flex items-center text-space-light/80 mt-2 sm:mt-0'>
                <Calendar className='h-4 w-4 mr-2 text-space-accent' />
                <span>
                  {formatDateToYYYYMMDD(mission.startDate)} -{' '}
                  {formatDateToYYYYMMDD(mission.endDate)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main content area */}
          <div className='lg:col-span-2'>
            {/* Gallery Section */}
            {mission.gallery && mission.gallery.length > 0 && (
              <MissionGallery images={mission.gallery} title={mission.title} />
            )}

            <div className='bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20 mb-6'>
              <h2 className='font-orbitron text-xl text-space-accent mb-4'>
                任务描述
              </h2>
              <p className='text-space-light/80 mb-8'>{mission.description}</p>
            </div>

            {/* Technology Section */}
            <MissionTechnology technologies={mission.technology} />

            {/* Achievements Section */}
            <MissionAchievements achievements={mission.achievements} />

            {/* Target Objectives */}
            <div className='bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20'>
              <h2 className='font-orbitron text-xl text-space-accent mb-4 flex items-center'>
                <Target className='h-5 w-5 mr-2 text-space-accent' />
                任务目标
              </h2>
              <div className='space-y-2'>
                {mission.target.map((target, index) => (
                  <div key={index} className='flex items-center bg-space-dark/40 rounded-md p-3'>
                    <div className='w-2 h-2 rounded-full bg-space-accent mr-3'></div>
                    <span className='text-space-light'>{target}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar with additional info */}
          <div>
            <div className='bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20 mb-6 sticky top-20'>
              <h3 className='font-orbitron text-lg text-space-accent mb-3'>
                任务详情
              </h3>

              <div className='space-y-4'>
                <div>
                  <h4 className='text-sm text-space-light/60 mb-1 flex items-center'>
                    <Users className='h-4 w-4 mr-1 text-space-accent/70' />
                    指派给
                  </h4>
                  <p className='text-space-light'>{mission.assignee}</p>
                </div>

                <div>
                  <h4 className='text-sm text-space-light/60 mb-1 flex items-center'>
                    <Folder className='h-4 w-4 mr-1 text-space-accent/70' />
                    分类
                  </h4>
                  <p className='text-space-light'>{mission.category}</p>
                </div>

                <div>
                  <h4 className='text-sm text-space-light/60 mb-1'>目标</h4>
                  <div className='flex flex-wrap gap-2'>
                    {mission.target.map((target, index) => (
                      <Badge
                        key={index}
                        variant='outline'
                        className='border-space-accent/30 text-space-light'
                      >
                        {target}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className='text-sm text-space-light/60 mb-1'>进度</h4>
                  <div className='flex items-center'>
                    <div className='w-full h-2 bg-space-dark rounded-full overflow-hidden mr-2'>
                      <div
                        className='h-full bg-space-accent'
                        style={{ width: `${mission.progress}%` }}
                      ></div>
                    </div>
                    <span className='text-space-light/80 min-w-10 text-right'>
                      {mission.progress}%
                    </span>
                  </div>
                </div>

                {/* Additional mission metrics/info */}
                <div className='pt-4 border-t border-space-accent/20'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='text-center p-3 bg-space-dark/40 rounded-md'>
                      <p className='text-space-light/60 text-xs mb-1'>优先级</p>
                      <p className='text-space-light font-medium'>
                        {mission.priority === 'high' ? '高' : mission.priority === 'medium' ? '中' : '低'}
                      </p>
                    </div>
                    <div className='text-center p-3 bg-space-dark/40 rounded-md'>
                      <p className='text-space-light/60 text-xs mb-1'>技术数量</p>
                      <p className='text-space-light font-medium'>{mission.technology.length}</p>
                    </div>
                    <div className='text-center p-3 bg-space-dark/40 rounded-md'>
                      <p className='text-space-light/60 text-xs mb-1'>成就数量</p>
                      <p className='text-space-light font-medium'>{mission.achievements.length}</p>
                    </div>
                    <div className='text-center p-3 bg-space-dark/40 rounded-md'>
                      <p className='text-space-light/60 text-xs mb-1'>当前状态</p>
                      <p className='text-space-light font-medium'>{getStatusText(mission.status)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionDetail;
