import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Technology } from '@/types/technology';
import { Link } from 'react-router-dom';
import { NavBarItemsObj } from '@/constants/navConstants';
import { Rocket, ArrowRight, Check, X } from 'lucide-react';
import { TECHNOLOGY_CATEGORIES } from '@/constants/technologyConstants';

interface TechnologyCarouselProps {
  technologies: Technology[];
}

const TechnologyCarousel: React.FC<TechnologyCarouselProps> = ({
  technologies,
}) => {
  const [category, setCategory] = useState<string>('全部');

  const filteredTechnologies =
    category === '全部'
      ? technologies
      : technologies.filter((tech) => tech.category === category);

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='mb-8 flex flex-wrap justify-center gap-2'>
        {TECHNOLOGY_CATEGORIES.map((tech) => (
          <button
            key={tech}
            onClick={() => setCategory(tech)}
            className={`px-4 py-2 rounded-full font-orbitron text-sm transition-all ${
              category === tech
                ? 'bg-space-accent text-white'
                : 'bg-space-dark/60 text-space-light/70 hover:text-space-light'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {filteredTechnologies.length > 0 ? (
        <Carousel className='w-full'>
          <CarouselContent>
            {filteredTechnologies.map((tech) => (
              <CarouselItem key={tech.id} className='md:basis-1/3 p-5'>
                <div className='tech-card bg-space-dark/70 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20 h-full flex flex-col'>
                  <div className='mb-6 flex justify-center'>
                    <div className='w-16 h-16 rounded-full bg-space-accent/20 flex items-center justify-center'>
                      <Rocket className='h-8 w-8 text-space-accent' />
                    </div>
                  </div>
                  <h3 className='text-xl font-orbitron font-bold mb-4 text-center'>
                    {tech.name}
                  </h3>
                  <div className='space-y-4 text-space-light/80 flex-grow'>
                    <p>{tech.description}</p>
                    <div className='border-t border-space-accent/20 pt-4'>
                      <h4 className='font-orbitron text-green-400 mb-2 text-sm uppercase'>
                        优势
                      </h4>
                      <ul className='list-disc list-inside space-y-1'>
                        {tech.pros.map((pro, index) => (
                          <li key={index} className='flex items-start'>
                            <Check className='h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0'></Check>
                            <span className='text-space-light/80'>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='border-t border-space-accent/20 pt-4'>
                      <h4 className='font-orbitron text-red-400 mb-2 text-sm uppercase'>
                        挑战
                      </h4>
                      <ul className='list-disc list-inside space-y-1'>
                        {tech.cons.map((con, index) => (
                          <li key={index} className='flex items-start'>
                            <X className='h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0'></X>
                            <span className='text-space-light/80'>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='border-t border-space-accent/20 pt-4'>
                      <h4 className='font-orbitron text-space-accent mb-2 text-sm uppercase'>
                        当前应用
                      </h4>
                      <ul className='list-disc list-inside space-y-1'>
                        {tech.currentApplications.map((pro, index) => (
                          <li key={index} className='flex items-start'>
                            <Rocket className='h-5 w-5 text-space-accent mr-2 mt-0.5 flex-shrink-0'></Rocket>
                            <span className='text-space-light/80'>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className='mt-6 text-center'>
                    <Link
                      to={`${NavBarItemsObj.technology.path}/${tech.id}`}
                      className='inline-flex items-center text-space-accent hover:text-space-light'
                    >
                      了解更多 <ArrowRight size={16} className='ml-1' />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='flex justify-center mt-4'>
            <CarouselPrevious className='relative static left-0 translate-y-0 mr-2' />
            <CarouselNext className='relative static right-0 translate-y-0 ml-2' />
          </div>
        </Carousel>
      ) : (
        <div className='bg-space-dark/70 p-8 rounded-lg text-center'>
          <p className='text-space-light/80'>该类别下暂无技术数据</p>
        </div>
      )}
    </div>
  );
};

export default TechnologyCarousel;
