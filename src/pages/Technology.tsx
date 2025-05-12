import { Rocket, Search, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { technologyHeaderBg } from '@/assets/images/image';
import { Link } from 'react-router-dom';
import { NavBarItemsObj } from '@/constants/navConstants';
import { TECHNOLOGIES } from '@/constants/technologyConstants';
import TechnologyCarousel from '@/components/technology/TechnologyCarousel';

const Technology = () => {
  return (
    <div className='min-h-screen pt-16'>
      {/* Hero section */}
      <section
        className='bg-space-dark py-20 md:py-28 relative'
        style={{
          backgroundImage: technologyHeaderBg,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='absolute inset-0 bg-space-dark/70 backdrop-blur-sm'></div>
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-orbitron font-bold mb-6'>
              天工开物 · 星矩
            </h1>
            <p className='text-lg text-space-light/80 mb-8'>
              天工铸器，星矩定轨。此间详录中国航天重器之精微：从火箭凌云之姿到卫星巡天之术，每一处精妙设计，都是华夏匠人与星辰的对话。
            </p>
          </div>
        </div>
      </section>

      {/* Technology Overview with Carousel */}
      <section className='bg-space-secondary/30 py-16'>
        <div className='container mx-auto px-4'>
          <TechnologyCarousel technologies={TECHNOLOGIES} />
        </div>
      </section>

      {/* Featured Technology */}
      <section className='bg-space-dark py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-orbitron font-bold mb-12 text-center'>
            特色技术
          </h2>

          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
              <div>
                <img
                  src={TECHNOLOGIES[0].image}
                  alt={TECHNOLOGIES[0].name}
                  className='rounded-lg shadow-xl shadow-space-accent/10 border border-space-accent/30'
                />
              </div>
              <div>
                <h3 className='text-2xl font-orbitron font-bold mb-4 text-space-accent'>
                  {TECHNOLOGIES[0].name}
                </h3>
                <p className='text-space-light/80 mb-6'>
                  {TECHNOLOGIES[0].description}
                </p>
                <div className='space-y-4'>
                  <div className='bg-space-secondary/40 rounded-lg p-4 border border-space-accent/20'>
                    <h4 className='font-orbitron text-space-light mb-2'>
                      关键优势
                    </h4>
                    <ul className='list-disc list-inside text-space-light/80 space-y-1'>
                      {TECHNOLOGIES[0].pros.slice(0, 4).map((pro, index) => (
                        <li key={index}>{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className='bg-space-secondary/40 rounded-lg p-4 border border-space-accent/20'>
                    <h4 className='font-orbitron text-space-light mb-2'>
                      开发状态
                    </h4>
                    <p className='text-space-light/80'>
                      {TECHNOLOGIES[0].currentProgress}
                    </p>
                  </div>
                </div>
                <Link
                  to={`${NavBarItemsObj.technology.path}/${TECHNOLOGIES[0].id}`}
                >
                  <button className='space-button mt-8'>技术规格</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
