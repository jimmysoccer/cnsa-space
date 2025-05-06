import { Mission, MissionStatusType } from '@/types/mission';
import { Clock, Flag, CheckCircle2 } from 'lucide-react';
import { ArrowUpCircle, CheckCircle, AlertCircle } from 'lucide-react';

export const getCurrentStatus = (mission: Mission) => {
  const currentDate = new Date();
  const startDate = new Date(mission.startDate);
  const endDate = new Date(mission.endDate);

  if (currentDate < startDate) {
    return MissionStatusType.planned;
  } else if (currentDate >= startDate && currentDate <= endDate) {
    return MissionStatusType.inProgress;
  } else if (currentDate > endDate) {
    return MissionStatusType.completed;
  } else return MissionStatusType.delayed;
};

export const getStatusIcon = (status: Mission['status']) => {
  switch (status) {
    case MissionStatusType.planned:
      return <Clock className='h-5 w-5 text-yellow-300' />;
    case MissionStatusType.inProgress:
      return <Flag className='h-5 w-5 text-green-400' />;
    case MissionStatusType.completed:
      return <CheckCircle2 className='h-5 w-5 text-blue-300' />;
    case MissionStatusType.delayed:
      return <Clock className='h-5 w-5 text-red-400' />;
    case MissionStatusType.all:
      return <Clock className='h-5 w-5 text-purple-400' />;
    default:
      return <Clock className='h-5 w-5' />;
  }
};

export const getStatusColor = (status: Mission['status']) => {
  switch (status) {
    case MissionStatusType.planned:
      return 'bg-yellow-500/20 text-yellow-300';
    case MissionStatusType.inProgress:
      return 'bg-green-500/20 text-green-400';
    case MissionStatusType.completed:
      return 'bg-blue-500/20 text-blue-300';
    case MissionStatusType.delayed:
      return 'bg-red-500/20 text-red-400';
    case MissionStatusType.all:
      return 'bg-gray-500/20 text-purple-400';
    default:
      return 'bg-gray-500/20 text-gray-300';
  }
};

export const getStatusText = (status: Mission['status']) => {
  switch (status) {
    case MissionStatusType.planned:
      return '计划中';
    case MissionStatusType.inProgress:
      return '进行中';
    case MissionStatusType.completed:
      return '已完成';
    case MissionStatusType.delayed:
      return '已延期';
    case MissionStatusType.all:
      return '所有任务';
    default:
      return '未知状态';
  }
};

export const getStatusBadge = (status: Mission['status']) => {
  switch (status) {
    case MissionStatusType.planned:
      return (
        <div className='flex items-center whitespace-nowrap'>
          <Clock className='h-4 w-4 text-yellow-300 mr-1.5' />
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(
              status
            )}`}
          >
            计划中
          </span>
        </div>
      );
    case MissionStatusType.inProgress:
      return (
        <div className='flex items-center whitespace-nowrap'>
          <ArrowUpCircle className='h-4 w-4 text-green-400 mr-1.5' />
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(
              status
            )}`}
          >
            进行中
          </span>
        </div>
      );
    case MissionStatusType.completed:
      return (
        <div className='flex items-center whitespace-nowrap'>
          <CheckCircle className='h-4 w-4 text-blue-300 mr-1.5' />
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(
              status
            )}`}
          >
            已完成
          </span>
        </div>
      );
    case MissionStatusType.delayed:
      return (
        <div className='flex items-center whitespace-nowrap'>
          <AlertCircle className='h-4 w-4 text-red-400 mr-1.5' />
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(
              status
            )}`}
          >
            已延期
          </span>
        </div>
      );
    case MissionStatusType.all:
      return (
        <div className='flex items-center whitespace-nowrap'>
          <Clock className='h-4 w-4 text-purple-400 mr-1.5' />
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(
              status
            )}`}
          >
            所有任务
          </span>
        </div>
      );
    default:
      return <span>未知状态</span>;
  }
};
