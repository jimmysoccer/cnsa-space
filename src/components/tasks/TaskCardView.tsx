
import React, { useState } from 'react';
import { Task } from '../../types/task';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar, Target } from 'lucide-react';
import {
  getStatusColor,
  getStatusIcon,
  getStatusText,
} from '@/utils/task-status';
import { formatDateToYYYYMMDD } from '@/utils/date';
import TaskDetailModal from './TaskDetailModal';
import { Link } from 'react-router-dom';

interface TaskCardViewProps {
  tasks: Task[];
}

const TaskCardView: React.FC<TaskCardViewProps> = ({ tasks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
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

  const handleOpenTask = (task: Task) => {
    setSelectedTask(task);
    setDialogOpen(true);
  };

  // Sort tasks by status priority
  const sortedTasks = [...tasks].sort((a, b) => {
    const statusOrder = {
      'in-progress': 0,
      planned: 1,
      delayed: 2,
      completed: 3,
    };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {paginatedTasks.map((task) => (
          <Card
            key={task.id}
            className='bg-space-dark/50 backdrop-blur-sm border border-space-accent/20 hover:border-space-accent/50 transition-all duration-300 cursor-pointer relative group'
            onClick={() => handleOpenTask(task)}
          >
            <CardHeader>
              <div className='flex justify-between items-start'>
                <CardTitle className='text-lg font-orbitron text-space-light'>
                  {task.title}
                </CardTitle>
                <div className='flex items-center'>
                  {getStatusIcon(task.status)}
                  <span
                    className={`ml-2 text-xs px-2 py-1 rounded-full ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {getStatusText(task.status)}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className='text-space-light/80 text-sm mb-4 line-clamp-3'>
                {task.description}
              </p>

              <div className='space-y-3'>
                <div className='flex items-center'>
                  <Calendar className='h-4 w-4 text-space-accent mr-2' />
                  <span className='text-xs text-space-light/70'>
                    {formatDateToYYYYMMDD(task.startDate)} -{' '}
                    {formatDateToYYYYMMDD(task.endDate)}
                  </span>
                </div>

                <div className='flex items-center'>
                  <Target className='h-4 w-4 text-space-accent mr-2' />
                  <span className='text-xs text-space-light/70'>
                    {task.target.join(', ')}
                  </span>
                </div>
              </div>

              <div className='mt-4'>
                <div className='w-full h-1.5 bg-space-dark rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-space-accent'
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
                <div className='flex justify-between mt-1'>
                  <span className='text-xs text-space-light/60'>进度</span>
                  <span className='text-xs text-space-light/60'>
                    {task.progress}%
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex justify-between pt-2 border-t border-space-accent/10'>
              <span className='text-xs text-space-light/60'>
                {task.category}
              </span>
              <span className='text-xs text-space-light/60'>
                指派给: {task.assignee}
              </span>
            </CardFooter>
            
            {/* Add link to detailed page - appears on hover */}
            <div className="absolute inset-0 bg-space-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Link 
                to={`/tasks/${task.id}`} 
                className="px-4 py-2 bg-space-accent text-white rounded-md hover:bg-space-accent/80 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                查看详情
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination controls */}
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

      {/* Task details modal */}
      <TaskDetailModal
        selectedTask={selectedTask}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
      />
    </div>
  );
};

export default TaskCardView;
