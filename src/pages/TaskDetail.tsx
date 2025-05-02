
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Task } from '../types/task';
import { TASKS } from '@/constants/taskConstants';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { formatDateToYYYYMMDD } from '@/utils/date';
import { 
  getStatusColor, 
  getStatusText, 
  getPriorityBadge 
} from '@/utils/task-status';
import { Button } from '@/components/ui/button';

const TaskDetail = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (taskId) {
      // Find the task by ID in our data
      const foundTask = TASKS.find((t) => t.id === parseInt(taskId));
      setTask(foundTask || null);
    }
    setLoading(false);
  }, [taskId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-center items-center h-64">
          <Clock className="h-8 w-8 animate-spin text-space-accent" />
        </div>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-2xl font-orbitron mb-4">任务未找到</h1>
          <p className="mb-6">无法找到ID为 {taskId} 的任务</p>
          <Link to="/tasks">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> 
              返回任务列表
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header with hero image */}
      <div 
        className="w-full h-64 bg-cover bg-center relative"
        style={{ 
          backgroundImage: `url(${task.image})`,
        }}
      >
        <div className="absolute inset-0 bg-space-dark/70 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-6 relative z-10">
          <div>
            <Link to="/tasks">
              <Button variant="outline" size="sm" className="mb-4 flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> 
                返回任务列表
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-orbitron font-bold text-space-light">
              {task.title}
            </h1>
            <div className="flex items-center mt-4 space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(task.status)}`}>
                {getStatusText(task.status)}
              </span>
              {getPriorityBadge(task.priority)}
              <div className="flex items-center text-space-light/80">
                <Calendar className="h-4 w-4 mr-2 text-space-accent" />
                <span>{formatDateToYYYYMMDD(task.startDate)} - {formatDateToYYYYMMDD(task.endDate)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2">
            <div className="bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20">
              <h2 className="font-orbitron text-xl text-space-accent mb-4">任务描述</h2>
              <p className="text-space-light/80 mb-8">{task.description}</p>

              <h2 className="font-orbitron text-xl text-space-accent mb-4">技术</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {task.technology.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-space-accent/20 text-space-light">
                    {tech}
                  </Badge>
                ))}
              </div>

              <h2 className="font-orbitron text-xl text-space-accent mb-4">成就</h2>
              <ul className="list-disc list-inside text-space-light/80 mb-8 pl-2">
                {task.achievements.map((achievement, index) => (
                  <li key={index} className="mb-2">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar with additional info */}
          <div>
            <div className="bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20 mb-6">
              <h3 className="font-orbitron text-lg text-space-accent mb-3">任务详情</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-space-light/60 mb-1">指派给</h4>
                  <p className="text-space-light">{task.assignee}</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-space-light/60 mb-1">分类</h4>
                  <p className="text-space-light">{task.category}</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-space-light/60 mb-1">目标</h4>
                  <div className="flex flex-wrap gap-2">
                    {task.target.map((target, index) => (
                      <Badge key={index} variant="outline" className="border-space-accent/30 text-space-light">
                        {target}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm text-space-light/60 mb-1">进度</h4>
                  <div className="flex items-center">
                    <div className="w-full h-2 bg-space-dark rounded-full overflow-hidden mr-2">
                      <div 
                        className="h-full bg-space-accent" 
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-space-light/80 min-w-10 text-right">
                      {task.progress}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
