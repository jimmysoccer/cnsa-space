import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Mission } from '../../types/mission';
import { getStatusColor, getStatusText } from '@/utils/mission-status';
import MissionDetailModal from './MissionDetailModal';
import { DefaultMissionImage } from '@/constants/missionConstants';

interface MissionTimelineViewProps {
  missions: Mission[];
}

const MissionTimelineView: React.FC<MissionTimelineViewProps> = ({
  missions,
}) => {
  // Sort missions by start date
  const sortedMissions = [...missions].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );
  const [selectedMission, setSelectedMission] = useState<Mission>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenMission = (mission) => {
    setSelectedMission(mission);
    setDialogOpen(true);
  };

  return (
    <div className='max-w-6xl mx-auto relative'>
      {/* Timeline section */}
      <section className=''>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl md:text-3xl font-orbitron font-bold mb-10 text-center'>
            任务时间线
          </h2>

          <div className='max-w-6xl mx-auto relative'>
            {/* Timeline line */}
            <div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-space-accent/30 transform md:translate-x-[-50%] hidden md:block'></div>

            <div className='space-y-12'>
              {sortedMissions
                .sort((a, b) => {
                  if (a.status.includes('计划') && !b.status.includes('计划'))
                    return 1;
                  if (!a.status.includes('计划') && b.status.includes('计划'))
                    return -1;
                  return 0;
                })
                .map((mission, index) => (
                  <div
                    key={mission.id}
                    className={`md:flex ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className='md:w-1/2'></div>
                    <div className='flex items-center justify-center mx-4 relative'>
                      <div className='w-10 h-10 rounded-full bg-space-accent flex items-center justify-center z-10'>
                        <Clock className='h-5 w-5 text-space-light' />
                      </div>
                    </div>
                    <div className='md:w-1/2 bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20'>
                      <img
                        src={
                          mission.images
                            ? mission.images[0]
                            : DefaultMissionImage
                        }
                        alt={mission.title}
                        className='w-full h-auto max-h-[200px] rounded-lg mb-4'
                        loading='lazy'
                        style={{ objectFit: 'cover' }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            DefaultMissionImage;
                        }}
                      />
                      <h3 className='text-xl font-orbitron font-bold mb-2'>
                        {mission.title}
                      </h3>
                      <div className='flex items-center mb-4'>
                        <Calendar
                          size={16}
                          className='text-space-accent mr-2'
                        />
                        <span className='text-space-light/70'>
                          {mission.endDate}
                        </span>
                        <span
                          className={`ml-3 text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(
                            mission.status
                          )}`}
                        >
                          {getStatusText(mission.status)}
                        </span>
                      </div>
                      <p className='text-space-light/80 mb-4'>
                        {mission.description}
                      </p>
                      <button
                        onClick={() => handleOpenMission(mission)}
                        className='inline-flex items-center text-space-accent hover:text-space-light text-sm'
                      >
                        任务详情 <ArrowRight size={16} className='ml-1' />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission details modal */}
      <MissionDetailModal
        selectedMission={selectedMission}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
      />
    </div>
  );
};

export default MissionTimelineView;
