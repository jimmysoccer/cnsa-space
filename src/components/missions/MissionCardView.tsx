import React, { useState, useMemo } from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar, Target } from 'lucide-react';
import {
  getCurrentStatus,
  getStatusColor,
  getStatusIcon,
  getStatusText,
} from '@/utils/mission-status';
import { formatDateToYYYYMMDD } from '@/utils/date';

import { Link } from 'react-router-dom';
import { Mission } from '@/types/mission';
import MissionDetailModal from './MissionDetailModal';
import { NavBarItemsObj } from '@/constants/navConstants';
import { useAtomValue } from 'jotai';
import { missionsAtom } from '@/atoms/atoms';
import { Badge } from '../ui/badge';

const MissionCardView = () => {
  const missions = useAtomValue(missionsAtom);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const itemsPerPage = 9; // 3 rows * 3 columns

  const totalPages = Math.ceil(missions.length / itemsPerPage);
  // Reset to page 1 if filters change and current page is out of bounds
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(1);
  }

  const paginatedMissions = useMemo(() => {
    return missions.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [missions, currentPage, itemsPerPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleOpenMission = (mission: Mission) => {
    setSelectedMission(mission);
    setDialogOpen(true);
  };

  return (
    <div>
      {missions.length === 0 ? (
        <div className='text-center py-12 bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20'>
          <p className='text-space-light/80'>没有符合筛选条件的任务</p>
        </div>
      ) : (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {paginatedMissions.map((mission) => (
              <Card
                key={mission.id}
                className='bg-space-dark/50 backdrop-blur-sm border border-space-accent/20 hover:border-space-accent/50 transition-all duration-300 cursor-pointer relative group'
                onClick={() => handleOpenMission(mission)}
              >
                <CardHeader>
                  <img
                    src={mission.images[0]}
                    alt={mission.title}
                    className='w-full h-48 object-cover rounded-md border border-space-accent/20 mr-4'
                  />
                  <div className='flex justify-between items-start'>
                    <CardTitle className='text-lg font-orbitron text-space-light'>
                      {mission.title}
                    </CardTitle>
                    <div className='flex items-center'>
                      {getStatusIcon(getCurrentStatus(mission))}
                      <span
                        className={`ml-2 text-xs px-2 py-1 rounded-full ${getStatusColor(
                          getCurrentStatus(mission)
                        )}`}
                      >
                        {getStatusText(getCurrentStatus(mission))}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-space-light/80 text-sm mb-4 line-clamp-3'>
                    {mission.description}
                  </p>

                  <div className='space-y-3'>
                    <div className='flex items-center'>
                      <Calendar className='h-4 w-4 text-space-accent mr-2' />
                      <span className='text-xs text-space-light/70'>
                        {`${formatDateToYYYYMMDD(
                          mission.startDate
                        )} - ${formatDateToYYYYMMDD(mission.endDate)}`}
                      </span>
                    </div>

                    <div className='flex items-center'>
                      <Target className='h-4 w-4 text-space-accent mr-2' />
                      <span className='text-xs text-space-light/70'>
                        {mission.target.join(', ')}
                      </span>
                    </div>
                  </div>

                  <div className='mt-4'>
                    <div className='w-full h-1.5 bg-space-dark rounded-full overflow-hidden'>
                      <div
                        className='h-full bg-space-accent'
                        style={{ width: `${mission.progress}%` }}
                      ></div>
                    </div>
                    <div className='flex justify-between mt-1'>
                      <span className='text-xs text-space-light/60'>进度</span>
                      <span className='text-xs text-space-light/60'>
                        {mission.progress}%
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className='flex justify-between pt-2 border-t border-space-accent/10'>
                  <span className='text-space-light font-medium'>
                    {mission.category.map((cat, index) => (
                      <Badge
                        key={index}
                        variant='outline'
                        className='border-space-accent/30 text-space-light'
                      >
                        {cat.trim()}
                      </Badge>
                    ))}
                  </span>
                  <span className='text-xs text-space-light/60'>
                    指派给: {mission.assignee}
                  </span>
                </CardFooter>

                {/* Add link to detailed page - appears on hover */}
                <div className='absolute inset-0 bg-space-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                  <Link
                    to={`${NavBarItemsObj.missions.path}/${mission.id}`}
                    className='px-4 py-2 bg-space-accent text-white rounded-md hover:bg-space-accent/80 transition-colors'
                    onClick={(e) => e.stopPropagation()}
                  >
                    查看详情
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination controls */}
          <div className='flex justify-center items-center mt-8'>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className='px-3 py-1 text-sm text-space-light/70 bg-space-dark/50 rounded-l disabled:opacity-50'
            >
              &lt;
            </button>
            <span className='px-4 py-1 text-sm text-space-light/70 bg-space-dark/50'>
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className='px-3 py-1 text-sm text-space-light/70 bg-space-dark/50 rounded-r disabled:opacity-50'
            >
              &gt;
            </button>
          </div>
        </>
      )}

      {/* mission details modal */}
      <MissionDetailModal
        selectedMission={selectedMission}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
      />
    </div>
  );
};

export default MissionCardView;
