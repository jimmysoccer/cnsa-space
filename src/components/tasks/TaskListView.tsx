
import React, { useState } from 'react';
import { Task } from '../../types/task';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Calendar,
  Clock,
  ArrowUpCircle,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { format } from 'date-fns';

interface TaskListViewProps {
  tasks: Task[];
}

const TaskListView: React.FC<TaskListViewProps> = ({ tasks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(tasks.length / itemsPerPage);
  const paginatedTasks = [...tasks]
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

  const handleOpenTask = (task: Task) => {
    setSelectedTask(task);
    setDialogOpen(true);
  };

  const getStatusBadge = (status: Task['status']) => {
    switch (status) {
      case 'planned':
        return (
          <div className='flex items-center'>
            <Clock className='h-4 w-4 text-yellow-300 mr-1.5' />
            <span className='text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300'>
              计划中
            </span>
          </div>
        );
      case 'in-progress':
        return (
          <div className='flex items-center'>
            <ArrowUpCircle className='h-4 w-4 text-green-400 mr-1.5' />
            <span className='text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400'>
              进行中
            </span>
          </div>
        );
      case 'completed':
        return (
          <div className='flex items-center'>
            <CheckCircle className='h-4 w-4 text-blue-300 mr-1.5' />
            <span className='text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300'>
              已完成
            </span>
          </div>
        );
      case 'delayed':
        return (
          <div className='flex items-center'>
            <AlertCircle className='h-4 w-4 text-red-400 mr-1.5' />
            <span className='text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400'>
              已延期
            </span>
          </div>
        );
      default:
        return <span>未知状态</span>;
    }
  };

  const getPriorityBadge = (priority: Task['priority']) => {
    const getColor = () => {
      switch (priority) {
        case 'high':
          return 'bg-red-400/20 text-red-300';
        case 'medium':
          return 'bg-yellow-400/20 text-yellow-300';
        case 'low':
          return 'bg-green-400/20 text-green-300';
        default:
          return '';
      }
    };

    const getText = () => {
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
      <span className={`text-xs px-2 py-0.5 rounded-full ${getColor()}`}>
        {getText()}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  return (
    <div className='bg-space-dark/50 backdrop-blur-sm rounded-lg border border-space-accent/20'>
      <Table>
        <TableHeader className='bg-space-dark/70'>
          <TableRow className='hover:bg-transparent border-space-accent/30'>
            <TableHead className='text-space-accent'>任务名称</TableHead>
            <TableHead className='text-space-accent'>状态</TableHead>
            <TableHead className='text-space-accent'>优先级</TableHead>
            <TableHead className='text-space-accent'>开始日期</TableHead>
            <TableHead className='text-space-accent'>结束日期</TableHead>
            <TableHead className='text-space-accent'>目标</TableHead>
            <TableHead className='text-space-accent'>分类</TableHead>
            <TableHead className='text-space-accent'>指派给</TableHead>
            <TableHead className='text-space-accent text-right'>进度</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedTasks.map((task) => (
            <TableRow
              key={task.id}
              className='hover:bg-space-dark/30 border-space-accent/10 cursor-pointer'
              onClick={() => handleOpenTask(task)}
            >
              <TableCell className='font-orbitron'>
                {task.title}
                <p className='text-xs text-space-light/60 mt-1 line-clamp-2'>
                  {task.description}
                </p>
              </TableCell>
              <TableCell>{getStatusBadge(task.status)}</TableCell>
              <TableCell>{getPriorityBadge(task.priority)}</TableCell>
              <TableCell className='whitespace-nowrap'>
                <div className='flex items-center'>
                  <Calendar className='h-3 w-3 text-space-accent mr-1.5' />
                  <span>{formatDate(task.startDate)}</span>
                </div>
              </TableCell>
              <TableCell className='whitespace-nowrap'>
                <div className='flex items-center'>
                  <Calendar className='h-3 w-3 text-space-accent mr-1.5' />
                  <span>{formatDate(task.endDate)}</span>
                </div>
              </TableCell>
              <TableCell>{task.target}</TableCell>
              <TableCell>{task.category}</TableCell>
              <TableCell>{task.assignee}</TableCell>
              <TableCell className='text-right'>
                <div className='flex items-center justify-end'>
                  <span>{task.progress}%</span>
                  <div className='w-16 h-1.5 bg-space-dark rounded-full overflow-hidden ml-2'>
                    <div
                      className='h-full bg-space-accent'
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                </div>
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

      {/* Task details dialog */}
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
                    className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColorClass(
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

// Helper functions for dialog status display
const getStatusColorClass = (status: Task['status']) => {
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

export default TaskListView;
