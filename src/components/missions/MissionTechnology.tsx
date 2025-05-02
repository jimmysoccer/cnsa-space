
import React from 'react';
import { Rocket, Boxes } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';

interface MissionTechnologyProps {
  technologies: string[];
}

const MissionTechnology: React.FC<MissionTechnologyProps> = ({ technologies }) => {
  const [open, setOpen] = React.useState(true);

  return (
    <div className='bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20 mb-6'>
      <Collapsible open={open} onOpenChange={setOpen} className="w-full">
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h2 className='font-orbitron text-xl text-space-accent flex items-center'>
            <Rocket className='h-5 w-5 mr-2 text-space-accent' />
            技术细节
          </h2>
          <Boxes 
            className={`h-5 w-5 text-space-accent transition-transform ${open ? 'transform rotate-180' : ''}`} 
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <div className='space-y-4'>
            <p className='text-space-light/80 mb-2'>此任务使用的关键技术：</p>
            <div className='flex flex-wrap gap-3'>
              {technologies.map((tech, index) => (
                <Badge key={index} className='bg-space-accent/20 hover:bg-space-accent/30 border border-space-accent/30 text-space-light text-sm px-3 py-1'>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default MissionTechnology;
