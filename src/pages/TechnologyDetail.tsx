import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronLeft,
  Star,
  AlertCircle,
  Check,
  X,
  Lightbulb,
  TrendingUp,
  History,
  Image,
} from 'lucide-react';
import {
  DefaultTechnologyImage,
  getTechnologyById,
} from '@/constants/technologyConstants';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NavBarItemsObj } from '@/constants/navConstants';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const TechnologyDetail = () => {
  const { techId } = useParams<{ techId: string }>();
  const technology = getTechnologyById(techId || '');

  if (!technology) {
    return (
      <div className='min-h-screen pt-16 flex items-center justify-center'>
        <div className='text-center'>
          <AlertCircle className='h-16 w-16 text-red-500 mx-auto mb-4' />
          <h1 className='text-2xl font-orbitron font-bold mb-4'>技术未找到</h1>
          <p className='text-space-light/80 mb-6'>
            无法找到ID为 "{techId}" 的技术
          </p>
          <Link to={NavBarItemsObj.technology.path}>
            <Button
              variant='outline'
              className='bg-space-accent/20 hover:bg-space-accent/30 border border-space-accent/30'
            >
              返回技术页面
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen pt-16 bg-space-secondary/30'>
      {/* Hero section */}
      <section
        className='bg-space-dark py-16 relative'
        style={{
          backgroundImage: `url(${technology.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='absolute inset-0 bg-space-dark/80 backdrop-blur-sm'></div>
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto'>
            <Link
              to={NavBarItemsObj.technology.path}
              className='inline-flex items-center text-space-light/80 hover:text-space-accent mb-6 transition-colors'
            >
              <ChevronLeft className='h-4 w-4 mr-1' />
              返回技术页面
            </Link>

            <div className='flex items-start'>
              <Badge className='bg-space-accent/20 hover:bg-space-accent/30 border border-space-accent/30 text-space-light mb-4'>
                {technology.category}
              </Badge>
            </div>

            <h1 className='text-4xl md:text-5xl font-orbitron font-bold mb-6'>
              {technology.name}
            </h1>
            <p className='text-xl text-space-light/80 leading-relaxed'>
              {technology.description}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className='py-12'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <Card className='overflow-hidden border border-space-accent/20 bg-space-dark/70 backdrop-blur-sm'>
              <CardContent className='p-0'>
                <AspectRatio ratio={16 / 9} className='bg-space-secondary/50'>
                  {technology.image ? (
                    <img
                      src={technology.image}
                      alt={technology.name}
                      className='object-contain w-full h-full rounded-lg'
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          DefaultTechnologyImage;
                      }}
                    />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center'>
                      <Image className='h-16 w-16 text-space-accent/50' />
                      <span className='sr-only'>No image available</span>
                    </div>
                  )}
                </AspectRatio>
                <div className='p-4'>
                  <p className='text-space-light/70 text-sm italic text-center'>
                    {technology.name} - 先进航天技术
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Details */}
      <section className='pb-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* History */}
            <Card className='bg-space-dark/70 backdrop-blur-sm border border-space-accent/20 col-span-full'>
              <CardContent className='p-6'>
                <div className='flex items-center mb-4'>
                  <History className='h-5 w-5 text-space-accent mr-2' />
                  <h2 className='text-xl font-orbitron font-semibold'>
                    发展历史
                  </h2>
                </div>
                <p className='text-space-light/80'>{technology.history}</p>
              </CardContent>
            </Card>

            {/* Current Progress */}
            <Card className='bg-space-dark/70 backdrop-blur-sm border border-space-accent/20 col-span-full'>
              <CardContent className='p-6'>
                <div className='flex items-center mb-4'>
                  <TrendingUp className='h-5 w-5 text-space-accent mr-2' />
                  <h2 className='text-xl font-orbitron font-semibold'>
                    当前进展
                  </h2>
                </div>
                <p className='text-space-light/80'>
                  {technology.currentProgress}
                </p>
              </CardContent>
            </Card>

            {/* Current Applications */}
            <Card className='bg-space-dark/70 backdrop-blur-sm border border-space-accent/20 col-span-full md:col-span-2'>
              <CardContent className='p-6'>
                <div className='flex items-center mb-4'>
                  <Star className='h-5 w-5 text-space-accent mr-2' />
                  <h2 className='text-xl font-orbitron font-semibold'>
                    当前应用
                  </h2>
                </div>
                <ul className='space-y-2'>
                  {technology.currentApplications.map((app, index) => (
                    <li key={index} className='flex items-start'>
                      <Check className='h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0' />
                      <span className='text-space-light/80'>{app}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Future Improvements */}
            <Card className='bg-space-dark/70 backdrop-blur-sm border border-space-accent/20 col-span-full md:col-span-1'>
              <CardContent className='p-6'>
                <div className='flex items-center mb-4'>
                  <Lightbulb className='h-5 w-5 text-space-accent mr-2' />
                  <h2 className='text-xl font-orbitron font-semibold'>
                    未来改进
                  </h2>
                </div>
                <ul className='space-y-2'>
                  {technology.futureImprovements.map((improvement, index) => (
                    <li key={index} className='flex items-start'>
                      <TrendingUp className='h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0' />
                      <span className='text-space-light/80'>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Pros & Cons */}
            <Card className='bg-space-dark/70 backdrop-blur-sm border border-space-accent/20 col-span-full'>
              <CardContent className='p-6'>
                <h2 className='text-xl font-orbitron font-semibold mb-4'>
                  优势与挑战
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* Pros */}
                  <div>
                    <h3 className='text-lg font-orbitron font-semibold text-green-400 mb-3 flex items-center'>
                      <Check className='h-5 w-5 mr-2' />
                      优势
                    </h3>
                    <ul className='space-y-2'>
                      {technology.pros.map((pro, index) => (
                        <li key={index} className='flex items-start'>
                          <Check className='h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0' />
                          <span className='text-space-light/80'>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <h3 className='text-lg font-orbitron font-semibold text-red-400 mb-3 flex items-center'>
                      <X className='h-5 w-5 mr-2' />
                      挑战
                    </h3>
                    <ul className='space-y-2'>
                      {technology.cons.map((con, index) => (
                        <li key={index} className='flex items-start'>
                          <X className='h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0' />
                          <span className='text-space-light/80'>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyDetail;
