
import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext 
} from '@/components/ui/carousel';
import { Technology } from '@/types/technology';
import { Link } from 'react-router-dom';
import { NavBarItemsObj } from '@/constants/navConstants';
import { Rocket, ArrowRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TECHNOLOGY_CATEGORIES } from '@/constants/technologyConstants';

interface TechnologyCarouselProps {
  technologies: Technology[];
}

const TechnologyCarousel: React.FC<TechnologyCarouselProps> = ({ technologies }) => {
  const [category, setCategory] = useState<string>('all');
  
  const filteredTechnologies = category === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === category);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className='text-3xl font-orbitron font-bold'>技术概览</h2>
        <div className="flex items-center">
          <Select value={category} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-[180px] bg-space-dark/70 border-space-accent/30">
              <SelectValue placeholder="选择类别" />
            </SelectTrigger>
            <SelectContent className="bg-space-dark border-space-accent/30">
              <SelectItem value="all">全部类别</SelectItem>
              {TECHNOLOGY_CATEGORIES.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {filteredTechnologies.length > 0 ? (
        <Carousel className="w-full">
          <CarouselContent>
            {filteredTechnologies.map((tech) => (
              <CarouselItem key={tech.id} className="md:basis-1/3 p-2">
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
                      <h4 className='font-orbitron text-space-accent mb-2 text-sm uppercase'>
                        技术
                      </h4>
                      <ul className='list-disc list-inside space-y-1'>
                        <li>
                          <Link
                            to={`${NavBarItemsObj.technology.path}/ion-propulsion`}
                            className='hover:text-space-accent transition-colors'
                          >
                            离子推进引擎
                          </Link>
                        </li>
                        <li>核热火箭</li>
                        <li>等离子体推进器</li>
                        <li>
                          <Link
                            to={`${NavBarItemsObj.technology.path}/quantum-vacuum-propulsion`}
                            className='hover:text-space-accent transition-colors'
                          >
                            量子真空推进系统
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className='border-t border-space-accent/20 pt-4'>
                      <h4 className='font-orbitron text-space-accent mb-2 text-sm uppercase'>
                        当前应用
                      </h4>
                      <p>{Array.isArray(tech.currentApplications) ? tech.currentApplications.join(', ') : tech.currentApplications}</p>
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
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
            <CarouselNext className="relative static right-0 translate-y-0 ml-2" />
          </div>
        </Carousel>
      ) : (
        <div className="bg-space-dark/70 p-8 rounded-lg text-center">
          <p className="text-space-light/80">该类别下暂无技术数据</p>
        </div>
      )}
    </div>
  );
};

export default TechnologyCarousel;
