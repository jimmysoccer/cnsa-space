import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Flag,
  CheckCircle2,
  Info,
  ArrowRight,
} from 'lucide-react';
import { Task } from '../../types/task';
import { format } from 'date-fns';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

interface TaskTimelineViewProps {
  tasks: Task[];
}

const TaskTimelineView: React.FC<TaskTimelineViewProps> = ({ tasks }) => {
  // Sort tasks by start date
  const sortedTasks = [...tasks].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );
  const [selectedMission, setSelectedMission] = useState<Task>(null);
  const [open, setOpen] = useState(false);

  const handleOpenMission = (mission) => {
    setSelectedMission(mission);
    setOpen(true);
  };

  const getStatusIcon = (status: Task['status']) => {
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
    <div className='max-w-6xl mx-auto relative'>
      {/* Timeline section */}
      <section className=''>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl md:text-3xl font-orbitron font-bold mb-10 text-center'>
            任务时间线
          </h2>

          <div className='max-w-6xl mx-auto relative'>
            {/* Timeline line */}
            <div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-space-accent/30 transform md:translate-x-[-50%] hidden md:block'></div>

            <div className='space-y-12'>
              {sortedTasks
                .sort((a, b) => {
                  if (a.status.includes('计划') && !b.status.includes('计划'))
                    return 1;
                  if (!a.status.includes('计划') && b.status.includes('计划'))
                    return -1;
                  return 0;
                })
                .map((mission, index) => (
                  <div
                    key={mission.id}
                    className={`md:flex ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className='md:w-1/2'></div>
                    <div className='flex items-center justify-center mx-4 relative'>
                      <div className='w-10 h-10 rounded-full bg-space-accent flex items-center justify-center z-10'>
                        <Clock className='h-5 w-5 text-space-light' />
                      </div>
                    </div>
                    <div className='md:w-1/2 bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20'>
                      <h3 className='text-xl font-orbitron font-bold mb-2'>
                        {mission.title}
                      </h3>
                      <div className='flex items-center mb-4'>
                        <Calendar
                          size={16}
                          className='text-space-accent mr-2'
                        />
                        <span className='text-space-light/70'>
                          {mission.endDate}
                        </span>
                        <span
                          className={`ml-3 text-xs px-2 py-1 rounded-full font-medium ${
                            mission.status === 'in-progress'
                              ? 'bg-green-500/20 text-green-400'
                              : mission.status === 'completed'
                              ? 'bg-blue-500/20 text-blue-300'
                              : 'bg-yellow-500/20 text-yellow-300'
                          }`}
                        >
                          {getStatusText(mission.status)}
                        </span>
                      </div>
                      <p className='text-space-light/80 mb-4'>
                        {mission.description}
                      </p>
                      <button
                        onClick={() => handleOpenMission(mission)}
                        className='inline-flex items-center text-space-accent hover:text-space-light text-sm'
                      >
                        任务详情 <ArrowRight size={16} className='ml-1' />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission details modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        {selectedMission && (
          <DialogContent className='sm:max-w-3xl bg-space-secondary border-space-accent/30'>
            <DialogTitle className='font-orbitron text-2xl text-space-accent'>
              {selectedMission.title}
            </DialogTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <img
                  src={selectedMission.image}
                  alt={selectedMission.title}
                  className='w-full h-64 object-cover rounded-lg'
                />
                <div className='mt-4 flex items-center'>
                  <Calendar size={16} className='text-space-accent mr-2' />
                  <span className='text-space-light/70 mr-4'>
                    {selectedMission.endDate}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      selectedMission.status === 'in-progress'
                        ? 'bg-green-500/20 text-green-400'
                        : selectedMission.status === 'completed'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-yellow-500/20 text-yellow-300'
                    }`}
                  >
                    {getStatusText(selectedMission.status)}
                  </span>
                </div>
              </div>

              <div>
                <DialogDescription className='text-space-light/90 mb-4'>
                  {selectedMission.description}
                </DialogDescription>

                <h4 className='font-orbitron text-space-accent mb-2'>
                  任务目标
                </h4>
                <ul className='list-disc list-inside mb-4 text-space-light/80'>
                  {selectedMission.target.map((objective, index) => (
                    <li key={index} className='mb-1'>
                      {objective}
                    </li>
                  ))}
                </ul>

                <h4 className='font-orbitron text-space-accent mb-2'>技术</h4>
                <p className='text-space-light/80 mb-4'>
                  {selectedMission.technology}
                </p>

                <h4 className='font-orbitron text-space-accent mb-2'>成就</h4>
                <p className='text-space-light/80'>
                  {selectedMission.achievements}
                </p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default TaskTimelineView;
