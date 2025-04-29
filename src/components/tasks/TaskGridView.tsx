import React, { useState } from 'react';
import { Task } from '../../types/task';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar, Target, Flag } from 'lucide-react';

interface TaskGridViewProps {
  tasks: Task[];
}

const TaskGridView: React.FC<TaskGridViewProps> = ({ tasks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 3 rows * 3 columns

  const totalPages = Math.ceil(tasks.length / itemsPerPage);
  const paginatedTasks = [...tasks].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Sort tasks by status priority (in-progress first, then planned, then delayed, then completed)
  const sortedTasks = [...tasks].sort((a, b) => {
    const statusOrder = {
      'in-progress': 0,
      planned: 1,
      delayed: 2,
      completed: 3,
    };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  const getStatusColor = (status: Task['status']) => {
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

  const getStatusText = (status: Task['status']) => {
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

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-400/20 text-red-300';
      case 'medium':
        return 'bg-yellow-400/20 text-yellow-300';
      case 'low':
        return 'bg-green-400/20 text-green-300';
      default:
        return 'bg-gray-400/20 text-gray-300';
    }
  };

  const getPriorityText = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return '高';
      case 'medium':
        return '中';
      case 'low':
        return '低';
      default:
        return '未知';
    }
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {paginatedTasks.map((task) => (
          <Card
            key={task.id}
            className='bg-space-dark/50 backdrop-blur-sm border border-space-accent/20 hover:border-space-accent/50 transition-all duration-300'
          >
            <CardHeader className='pb-2'>
              <div className='flex justify-between items-start'>
                <CardTitle className='text-lg font-orbitron text-space-light'>
                  {task.title}
                </CardTitle>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(
                    task.status
                  )}`}
                >
                  {getStatusText(task.status)}
                </span>
              </div>
            </CardHeader>
            <CardContent className='pb-2'>
              <p className='text-space-light/70 text-sm mb-4 line-clamp-2'>
                {task.description}
              </p>

              <div className='space-y-2'>
                <div className='flex items-center'>
                  <Calendar className='h-4 w-4 text-space-accent mr-2' />
                  <span className='text-xs text-space-light/70'>
                    {new Date(task.startDate).toLocaleDateString('zh-CN')} -{' '}
                    {new Date(task.endDate).toLocaleDateString('zh-CN')}
                  </span>
                </div>

                <div className='flex items-center'>
                  <Target className='h-4 w-4 text-space-accent mr-2' />
                  <span className='text-xs text-space-light/70'>
                    {task.target}
                  </span>
                </div>

                <div className='flex items-center'>
                  <Flag className='h-4 w-4 text-space-accent mr-2' />
                  <span className='text-xs text-space-light/70'>
                    {task.category}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex justify-between pt-2'>
              <span className='text-xs text-space-light/60'>
                指派给: {task.assignee}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(
                  task.priority
                )}`}
              >
                优先级: {getPriorityText(task.priority)}
              </span>
            </CardFooter>

            {/* Progress bar */}
            <div className='px-6 pb-4'>
              <div className='w-full h-1 bg-space-dark rounded-full overflow-hidden'>
                <div
                  className='h-full bg-space-accent'
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
              <div className='flex justify-end mt-1'>
                <span className='text-xs text-space-light/60'>
                  {task.progress}%
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className='flex justify-center items-center mt-4'>
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
    </div>
  );
};

export default TaskGridView;
