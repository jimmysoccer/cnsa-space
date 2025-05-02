
import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface MissionAchievementsProps {
  achievements: string[];
}

const MissionAchievements: React.FC<MissionAchievementsProps> = ({ achievements }) => {
  return (
    <div className='bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20 mb-6'>
      <h2 className='font-orbitron text-xl text-space-accent mb-4 flex items-center'>
        <Award className='h-5 w-5 mr-2 text-space-accent' />
        重要成就
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {achievements.map((achievement, index) => (
          <Card key={index} className='border-space-accent/20 bg-space-dark/70'>
            <CardContent className='p-4 flex items-start'>
              <CheckCircle className='h-5 w-5 text-space-accent mr-3 mt-0.5 flex-shrink-0' />
              <p className='text-space-light/90'>{achievement}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MissionAchievements;
