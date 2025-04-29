
import React from 'react';
import { Calendar, Clock, Flag, CheckCircle2 } from 'lucide-react';
import { Task } from '../../types/task';
import { format } from 'date-fns';

interface TaskTimelineViewProps {
  tasks: Task[];
}

const TaskTimelineView: React.FC<TaskTimelineViewProps> = ({ tasks }) => {
  // Sort tasks by start date
  const sortedTasks = [...tasks].sort((a, b) => 
    new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'planned':
        return <Clock className="h-5 w-5 text-yellow-300" />;
      case 'in-progress':
        return <Flag className="h-5 w-5 text-green-400" />;
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-blue-300" />;
      case 'delayed':
        return <Clock className="h-5 w-5 text-red-400" />;
      default:
        return <Clock className="h-5 w-5" />;
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
    <div className="max-w-6xl mx-auto relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-space-accent/30 transform md:translate-x-[-50%] hidden md:block"></div>
      
      <div className="space-y-12">
        {sortedTasks.map((task, index) => (
          <div key={task.id} className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2"></div>
            <div className="flex items-center justify-center mx-4 relative">
              <div className="w-10 h-10 rounded-full bg-space-accent flex items-center justify-center z-10">
                {getStatusIcon(task.status)}
              </div>
            </div>
            <div className="md:w-1/2 bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20 hover:border-space-accent/50 transition-all duration-300">
              <h3 className="text-xl font-orbitron font-bold mb-2">{task.title}</h3>
              <div className="flex items-center mb-4 flex-wrap gap-2">
                <Calendar size={16} className="text-space-accent mr-2" />
                <span className="text-space-light/70 mr-4">{formatDate(task.startDate)} - {formatDate(task.endDate)}</span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(task.status)}`}>
                  {getStatusText(task.status)}
                </span>
              </div>
              <p className="text-space-light/80 mb-4">{task.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-space-light/60 text-sm">指派给: {task.assignee}</span>
                <div className="w-32 h-2 bg-space-dark rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${task.priority === 'high' ? 'bg-red-400' : task.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'}`}
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTimelineView;
