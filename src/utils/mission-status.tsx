import { Mission } from '@/types/mission';
import { Clock, Flag, CheckCircle2 } from 'lucide-react';
import { ArrowUpCircle, CheckCircle, AlertCircle } from 'lucide-react';

export const getStatusIcon = (status: Mission['status']) => {
  switch (status) {
    case 'planned':
      return <Clock className='h-5 w-5 text-yellow-300' />;
    case 'in-progress':
      return <Flag className='h-5 w-5 text-green-400' />;
    case 'completed':
      return <CheckCircle2 className='h-5 w-5 text-blue-300' />;
    case 'delayed':
      return <Clock className='h-5 w-5 text-red-400' />;
    default:
      return <Clock className='h-5 w-5' />;
  }
};

export const getStatusColor = (status: Mission['status']) => {
  switch (status) {
    case 'planned':
      return 'bg-yellow-500/20 text-yellow-300';
    case 'in-progress':
      return 'bg-green-500/20 text-green-400';
    case 'completed':
      return 'bg-blue-500/20 text-blue-300';
    case 'delayed':
      return 'bg-red-500/20 text-red-400';
    default:
      return 'bg-gray-500/20 text-gray-300';
  }
};

export const getStatusText = (status: Mission['status']) => {
  switch (status) {
    case 'planned':
      return '计划中';
    case 'in-progress':
      return '进行中';
    case 'completed':
      return '已完成';
    case 'delayed':
      return '已延期';
    default:
      return '未知状态';
  }
};

export const getStatusBadge = (status: Mission['status']) => {
  switch (status) {
    case 'planned':
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
    case 'in-progress':
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
    case 'completed':
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
    case 'delayed':
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
    default:
      return <span>未知状态</span>;
  }
};

// Adding the missing getPriorityBadge function
export const getPriorityBadge = (priority: string) => {
  return (
    <div className='flex items-center'>
      <span
        className={`text-xs px-2 py-0.5 rounded-full bg-space-accent/20 text-space-accent`}
      >
        {priority}
      </span>
    </div>
  );
};
