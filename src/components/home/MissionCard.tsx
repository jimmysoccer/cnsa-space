import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavBarItemsObj } from '@/constants/navConstants';

interface MissionCardProps {
  title: string;
  date: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const MissionCard: React.FC<MissionCardProps> = ({
  title,
  date,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className='mission-card group'>
      <div className='relative h-56 overflow-hidden rounded-t-lg'>
        <img
          src={imageSrc}
          alt={imageAlt}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-space-dark to-transparent'></div>
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-orbitron font-bold mb-2'>{title}</h3>
        <div className='flex items-center text-space-accent mb-3'>
          <Calendar size={16} className='mr-2' />
          <span className='text-sm'>{date}</span>
        </div>
        <p className='text-space-light/80 mb-4'>{description}</p>
        <Link
          to={NavBarItemsObj.tasks.path}
          className='text-space-accent hover:text-space-light flex items-center text-sm font-medium'
        >
          了解更多 <ArrowRight size={16} className='ml-1' />
        </Link>
      </div>
    </div>
  );
};

export default MissionCard;
