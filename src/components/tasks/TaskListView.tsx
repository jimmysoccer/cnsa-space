
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
import { Calendar } from 'lucide-react';
import { getPriorityBadge, getStatusBadge } from '@/utils/task-status';
import { formatDateToYYYYMMDD } from '@/utils/date';
import TaskDetailModal from './TaskDetailModal';
import { Link } from 'react-router-dom';

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
            <TableHead className='text-space-accent text-center'>操作</TableHead>
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
                  <span>{formatDateToYYYYMMDD(task.startDate)}</span>
                </div>
              </TableCell>
              <TableCell className='whitespace-nowrap'>
                <div className='flex items-center'>
                  <Calendar className='h-3 w-3 text-space-accent mr-1.5' />
                  <span>{formatDateToYYYYMMDD(task.endDate)}</span>
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
              <TableCell className='text-center'>
                <Link
                  to={`/tasks/${task.id}`}
                  className='px-3 py-1 text-xs bg-space-accent/20 text-space-accent rounded hover:bg-space-accent/30 transition-colors'
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

      {/* Task details dialog */}
      <TaskDetailModal
        selectedTask={selectedTask}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
      />
    </div>
  );
};

export default TaskListView;
