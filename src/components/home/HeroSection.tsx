import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import UniverseAnimation from '../UniverseAnimation';
import { NavBarItemsObj } from '@/constants/navConstants';

const HeroSection = () => {
  return (
    <section className='relative h-screen flex items-center overflow-hidden'>
      {/* Universe Animation */}
      <UniverseAnimation />

      <div className='container mx-auto px-4 z-10 pt-16'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 space-gradient-text animate-fade-in'>
            星河入梦·华夏问天
          </h1>
          <p
            className='text-xl md:text-2xl text-space-light/80 mb-8 animate-fade-in whitespace-pre-line'
            style={{ animationDelay: '0.3s' }}
          >
            从敦煌飞天的古老绮梦，到长征火箭的寰宇征程，中国航天正书写属于自己的星辰史诗。
          </p>
          <div
            className='flex flex-col sm:flex-row gap-4 justify-center animate-fade-in'
            style={{ animationDelay: '0.6s' }}
          >
            <Link to={NavBarItemsObj.missions.path} className='space-button'>
              天工开物·巡宇录 <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-glow'>
        <span className='text-space-light/70 text-sm mb-2'>向下滚动探索</span>
        <div className='w-6 h-10 border-2 border-space-light/30 rounded-full flex justify-center'>
          <div className='w-1.5 h-3 bg-space-light/50 rounded-full mt-2 animate-bounce'></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
