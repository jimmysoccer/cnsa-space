import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Calendar } from 'lucide-react';
import { formatDateToYYYYMMDD } from '@/utils/date';
import { getStatusColor, getStatusText } from '@/utils/task-status';

const TaskDetailModal = ({ selectedTask, dialogOpen, setDialogOpen }) => {
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      {selectedTask && (
        <DialogContent className='sm:max-w-4xl bg-space-secondary border-space-accent/30'>
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
                  {formatDateToYYYYMMDD(selectedTask.startDate)} -{' '}
                  {formatDateToYYYYMMDD(selectedTask.endDate)}
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

              <h4 className='font-orbitron text-space-accent mb-2'>任务目标</h4>
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
  );
};

export default TaskDetailModal;
