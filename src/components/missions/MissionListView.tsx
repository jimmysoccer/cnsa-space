import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Calendar } from 'lucide-react';
import { getPriorityBadge, getStatusBadge } from '@/utils/mission-status';
import { formatDateToYYYYMMDD } from '@/utils/date';

import { Link } from 'react-router-dom';
import { Mission } from '@/types/mission';
import MissionDetailModal from './MissionDetailModal';
import { NavBarItemsObj } from '@/constants/navConstants';

interface MissionListViewProps {
  missions: Mission[];
}

const MissionListView: React.FC<MissionListViewProps> = ({ missions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(missions.length / itemsPerPage);
  const paginatedMissions = [...missions]
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    )
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
    <div className='bg-space-dark/50 backdrop-blur-sm rounded-lg border border-space-accent/20'>
      <Table>
        <TableHeader className='bg-space-dark/70'>
          <TableRow className='hover:bg-transparent border-space-accent/30'>
            <TableHead className='text-space-accent'>任务名称</TableHead>
            <TableHead className='text-space-accent'>状态</TableHead>
            <TableHead className='text-space-accent'>开始日期</TableHead>
            <TableHead className='text-space-accent'>结束日期</TableHead>
            <TableHead className='text-space-accent'>目标</TableHead>
            <TableHead className='text-space-accent'>分类</TableHead>
            <TableHead className='text-space-accent'>指派给</TableHead>
            <TableHead className='text-space-accent text-right'>进度</TableHead>
            <TableHead className='text-space-accent text-center'>
              操作
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedMissions.map((mission) => (
            <TableRow
              key={mission.id}
              className='hover:bg-space-dark/30 border-space-accent/10 cursor-pointer'
              onClick={() => handleOpenMission(mission)}
            >
              <TableCell className='font-orbitron'>
                {mission.title}
                <p className='text-xs text-space-light/60 mt-1 line-clamp-2'>
                  {mission.description}
                </p>
              </TableCell>
              <TableCell>{getStatusBadge(mission.status)}</TableCell>
              <TableCell className='whitespace-nowrap'>
                <div className='flex items-center'>
                  <Calendar className='h-3 w-3 text-space-accent mr-1.5' />
                  <span>{formatDateToYYYYMMDD(mission.startDate)}</span>
                </div>
              </TableCell>
              <TableCell className='whitespace-nowrap'>
                <div className='flex items-center'>
                  <Calendar className='h-3 w-3 text-space-accent mr-1.5' />
                  <span>{formatDateToYYYYMMDD(mission.endDate)}</span>
                </div>
              </TableCell>
              <TableCell>{mission.target}</TableCell>
              <TableCell>{mission.category}</TableCell>
              <TableCell>{mission.assignee}</TableCell>
              <TableCell className='text-right'>
                <div className='flex items-center justify-end'>
                  <span>{mission.progress}%</span>
                  <div className='w-16 h-1.5 bg-space-dark rounded-full overflow-hidden ml-2'>
                    <div
                      className='h-full bg-space-accent'
                      style={{ width: `${mission.progress}%` }}
                    ></div>
                  </div>
                </div>
              </TableCell>
              <TableCell className='text-center'>
                <Link
                  to={`${NavBarItemsObj.missions.path}/${mission.id}`}
                  className='whitespace-nowrap px-3 py-1 text-xs bg-space-accent/20 text-space-accent rounded hover:bg-space-accent/30 transition-colors'
                  onClick={(e) => e.stopPropagation()}
                >
                  查看详情
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='flex justify-between items-center my-4 px-4'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className='text-space-accent disabled:opacity-50'
        >
          &larr; 上一页
        </button>
        <span className='text-space-accent'>
          第 {currentPage} 页，共 {totalPages} 页
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className='text-space-accent disabled:opacity-50'
        >
          下一页 &rarr;
        </button>
      </div>

      {/* mission details dialog */}
      <MissionDetailModal
        selectedMission={selectedMission}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
      />
    </div>
  );
};

export default MissionListView;
