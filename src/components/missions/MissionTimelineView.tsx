
import React, { useState, useMemo } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Mission, MissionStatusType } from '../../types/mission';
import { getStatusColor, getStatusText } from '@/utils/mission-status';
import MissionDetailModal from './MissionDetailModal';
import { DefaultMissionImage } from '@/constants/missionConstants';
import MissionFilters from './MissionFilters';

interface MissionTimelineViewProps {
  missions: Mission[];
}

const MissionTimelineView: React.FC<MissionTimelineViewProps> = ({
  missions,
}) => {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filters, setFilters] = useState({
    endDate: null as Date | null,
    status: '' as MissionStatusType | '',
    category: '' as string,
  });

  // Get unique categories for filter options
  const availableCategories = useMemo(() => {
    const categories = new Set<string>();
    missions.forEach(mission => categories.add(mission.category));
    return Array.from(categories);
  }, [missions]);
  
  // Apply filters to missions
  const filteredMissions = useMemo(() => {
    return missions.filter(mission => {
      // Filter by end date (exact match of the date)
      if (filters.endDate) {
        const missionDate = new Date(mission.endDate);
        const filterDate = new Date(filters.endDate);
        
        if (
          missionDate.getFullYear() !== filterDate.getFullYear() ||
          missionDate.getMonth() !== filterDate.getMonth() ||
          missionDate.getDate() !== filterDate.getDate()
        ) {
          return false;
        }
      }
      
      // Filter by status
      if (filters.status && mission.status !== filters.status) {
        return false;
      }
      
      // Filter by category
      if (filters.category && mission.category !== filters.category) {
        return false;
      }
      
      return true;
    });
  }, [missions, filters]);
  
  // Sort missions by end date
  const sortedMissions = useMemo(() => {
    return [...filteredMissions].sort(
      (a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
    );
  }, [filteredMissions]);

  const handleOpenMission = (mission: Mission) => {
    setSelectedMission(mission);
    setDialogOpen(true);
  };
  
  const clearFilters = () => {
    setFilters({
      endDate: null,
      status: '',
      category: '',
    });
  };

  return (
    <div className='max-w-6xl mx-auto relative'>
      {/* Add filters */}
      <MissionFilters 
        onFilterChange={setFilters}
        availableCategories={availableCategories}
        activeFilters={filters}
        clearFilters={clearFilters}
      />

      {/* Timeline section */}
      <section className=''>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl md:text-3xl font-orbitron font-bold mb-10 text-center'>
            任务时间线
          </h2>

          <div className='max-w-6xl mx-auto relative'>
            {/* Timeline line */}
            <div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-space-accent/30 transform md:translate-x-[-50%] hidden md:block'></div>

            {sortedMissions.length === 0 ? (
              <div className='text-center py-12 bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20'>
                <p className='text-space-light/80'>没有符合筛选条件的任务</p>
              </div>
            ) : (
              <div className='space-y-12'>
                {sortedMissions.map((mission, index) => (
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
                          mission.images ? mission.images[0] : DefaultMissionImage
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
                        <Calendar size={16} className='text-space-accent mr-2' />
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
            )}
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
