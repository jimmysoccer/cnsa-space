
import React, { useState } from 'react';
import { Task } from '../../types/task';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Calendar,
  Target,
  Flag,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { format } from 'date-fns';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

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

  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'planned':
        return <Clock className='h-4 w-4 text-yellow-300' />;
      case 'in-progress':
        return <Flag className='h-4 w-4 text-green-400' />;
      case 'completed':
        return <CheckCircle2 className='h-4 w-4 text-blue-300' />;
      case 'delayed':
        return <AlertCircle className='h-4 w-4 text-red-400' />;
      default:
        return <Clock className='h-4 w-4' />;
    }
  };

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

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'yyyy年MM月dd日');
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {paginatedTasks.map((task) => (
          <Card
            key={task.id}
            className='bg-space-dark/50 backdrop-blur-sm border border-space-accent/20 hover:border-space-accent/50 transition-all duration-300 cursor-pointer'
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
                    {formatDate(task.startDate)} - {formatDate(task.endDate)}
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
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        {selectedTask && (
          <DialogContent className='sm:max-w-3xl bg-space-secondary border-space-accent/30'>
            <DialogTitle className='font-orbitron text-2xl text-space-accent'>
              {selectedTask.title}
            </DialogTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <img
                  src={selectedTask.image}
                  alt={selectedTask.title}
                  className='w-full h-64 object-cover rounded-lg'
                />
                <div className='mt-4 flex items-center'>
                  <Calendar size={16} className='text-space-accent mr-2' />
                  <span className='text-space-light/70 mr-4'>
                    {formatDate(selectedTask.startDate)} - {formatDate(selectedTask.endDate)}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(
                      selectedTask.status
                    )}`}
                  >
                    {getStatusText(selectedTask.status)}
                  </span>
                </div>
              </div>

              <div>
                <DialogDescription className='text-space-light/90 mb-4'>
                  {selectedTask.description}
                </DialogDescription>

                <h4 className='font-orbitron text-space-accent mb-2'>
                  任务目标
                </h4>
                <ul className='list-disc list-inside mb-4 text-space-light/80'>
                  {selectedTask.target.map((objective, index) => (
                    <li key={index} className='mb-1'>
                      {objective}
                    </li>
                  ))}
                </ul>

                <h4 className='font-orbitron text-space-accent mb-2'>技术</h4>
                <p className='text-space-light/80 mb-4'>
                  {selectedTask.technology.join(', ')}
                </p>

                <h4 className='font-orbitron text-space-accent mb-2'>成就</h4>
                <ul className='list-disc list-inside text-space-light/80'>
                  {selectedTask.achievements.map((achievement, index) => (
                    <li key={index} className='mb-1'>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default TaskCardView;
