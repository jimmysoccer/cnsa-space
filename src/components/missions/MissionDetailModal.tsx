import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Calendar, Rocket } from 'lucide-react';
import { formatDateToYYYYMMDD } from '@/utils/date';
import { getStatusColor, getStatusText } from '@/utils/mission-status';
import { NavBarItemsObj } from '@/constants/navConstants';
import { Link } from 'react-router-dom';
import { Mission } from '@/types/mission';
import { DefaultMissionImage } from '@/constants/missionConstants';
interface MissionDetailModalProps {
  selectedMission: Mission | null;
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
}

const MissionDetailModal: React.FC<MissionDetailModalProps> = ({
  selectedMission,
  dialogOpen,
  setDialogOpen,
}) => {
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      {selectedMission && (
        <DialogContent className='sm:max-w-4xl bg-space-secondary border-space-accent/30'>
          <DialogTitle className='font-orbitron text-2xl text-space-accent'>
            {selectedMission.title}
          </DialogTitle>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <img
                src={selectedMission.images[0] || DefaultMissionImage}
                alt={selectedMission.title}
                className='w-full h-64 object-cover rounded-lg'
              />
              <div className='mt-4 flex items-center'>
                <Calendar size={16} className='text-space-accent mr-2' />
                <span className='text-space-light/70 mr-4'>
                  {formatDateToYYYYMMDD(selectedMission.startDate)} -{' '}
                  {formatDateToYYYYMMDD(selectedMission.endDate)}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(
                    selectedMission.status
                  )}`}
                >
                  {getStatusText(selectedMission.status)}
                </span>
              </div>
            </div>

            <div>
              <DialogDescription className='text-space-light/90 mb-4'>
                {selectedMission.description}
              </DialogDescription>

              <h4 className='font-orbitron text-space-accent mb-2'>任务目标</h4>
              <ul className='list-disc list-inside mb-4 text-space-light/80'>
                {selectedMission.target.map((objective, index) => (
                  <li key={index} className='mb-1'>
                    {objective}
                  </li>
                ))}
              </ul>

              <h4 className='font-orbitron text-space-accent mb-2'>技术</h4>
              <p className='text-space-light/80 mb-4'>
                {selectedMission.technology.join(', ')}
              </p>

              <h4 className='font-orbitron text-space-accent mb-2'>成就</h4>
              <ul className='list-disc list-inside text-space-light/80'>
                {selectedMission.achievements.map((achievement, index) => (
                  <li key={index} className='mb-1'>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <DialogFooter>
            <Link
              to={`${NavBarItemsObj.missions.path}/${selectedMission.id}`}
              className='space-button inline-flex'
            >
              任务详情 <Rocket size={18} />
            </Link>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default MissionDetailModal;
