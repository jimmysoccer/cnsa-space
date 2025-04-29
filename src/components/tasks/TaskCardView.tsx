
import React from 'react';
import { Task } from '../../types/task';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Target, Flag, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';

interface TaskCardViewProps {
  tasks: Task[];
}

const TaskCardView: React.FC<TaskCardViewProps> = ({ tasks }) => {
  // Sort tasks by status priority
  const sortedTasks = [...tasks].sort((a, b) => {
    const statusOrder = {
      'in-progress': 0,
      'planned': 1,
      'delayed': 2,
      'completed': 3
    };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'planned':
        return <Clock className="h-4 w-4 text-yellow-300" />;
      case 'in-progress':
        return <Flag className="h-4 w-4 text-green-400" />;
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-blue-300" />;
      case 'delayed':
        return <AlertCircle className="h-4 w-4 text-red-400" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'planned': return 'bg-yellow-500/20 text-yellow-300';
      case 'in-progress': return 'bg-green-500/20 text-green-400';
      case 'completed': return 'bg-blue-500/20 text-blue-300';
      case 'delayed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  const getStatusText = (status: Task['status']) => {
    switch (status) {
      case 'planned': return '计划中';
      case 'in-progress': return '进行中';
      case 'completed': return '已完成';
      case 'delayed': return '已延期';
      default: return '未知状态';
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'yyyy年MM月dd日');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedTasks.map((task) => (
        <Card key={task.id} className="bg-space-dark/50 backdrop-blur-sm border border-space-accent/20 hover:border-space-accent/50 transition-all duration-300">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg font-orbitron text-space-light">{task.title}</CardTitle>
              <div className="flex items-center">
                {getStatusIcon(task.status)}
                <span className={`ml-2 text-xs px-2 py-1 rounded-full ${getStatusColor(task.status)}`}>
                  {getStatusText(task.status)}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-space-light/80 text-sm mb-4 line-clamp-3">{task.description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-space-accent mr-2" />
                <span className="text-xs text-space-light/70">
                  {formatDate(task.startDate)} - {formatDate(task.endDate)}
                </span>
              </div>
              
              <div className="flex items-center">
                <Target className="h-4 w-4 text-space-accent mr-2" />
                <span className="text-xs text-space-light/70">{task.target}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="w-full h-1.5 bg-space-dark rounded-full overflow-hidden">
                <div 
                  className="h-full bg-space-accent"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-space-light/60">进度</span>
                <span className="text-xs text-space-light/60">{task.progress}%</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between pt-2 border-t border-space-accent/10">
            <span className="text-xs text-space-light/60">{task.category}</span>
            <span className="text-xs text-space-light/60">指派给: {task.assignee}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default TaskCardView;
