import React, { useState } from 'react';
import { AlignJustify, LayoutGrid, ListOrdered } from 'lucide-react';
import { ViewType } from '../types/mission';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MissionTimelineView from '@/components/missions/MissionTimelineView';
import { MISSIONS } from '@/constants/missionConstants';
import MissionCardView from '../components/missions/MissionCardView';
import MissionListView from '../components/missions/MissionListView';
import { missionsHeaderBg } from '@/assets/images/image';

const Missions = () => {
  const [activeView, setActiveView] = useState<ViewType>('timeline');

  return (
    <div className=' pt-16'>
      {/* Hero section */}
      <section
        className='bg-space-dark py-20 md:py-28 relative'
        style={{
          backgroundImage: missionsHeaderBg,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='absolute inset-0 bg-space-dark/70 backdrop-blur-sm'></div>
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-orbitron font-bold mb-6'>
              天工开物 · 巡宇录
            </h1>
            <p className='text-lg text-space-light/80 mb-8'>
              如古观星台续写新篇，问天阁实时追踪中国航天的天路足迹。从嫦娥揽月到天宫巡天，正在进行的每一次太空叩问，都在为炎黄子孙打开新的星图。
            </p>
          </div>
        </div>
      </section>

      {/* Mission view section */}
      <section className='bg-space-secondary/30 py-12'>
        <div className='container mx-auto px-4'>
          <Tabs
            defaultValue='timeline'
            value={activeView}
            onValueChange={(value) => setActiveView(value as ViewType)}
            className='w-full'
          >
            <div className='flex justify-center mb-8'>
              <TabsList className='bg-space-dark/50 backdrop-blur-sm'>
                <TabsTrigger
                  value='timeline'
                  className='flex items-center gap-2 data-[state=active]:bg-space-accent/20 data-[state=active]:text-space-accent'
                >
                  <AlignJustify className='h-4 w-4' />
                  <span>时间线视图</span>
                </TabsTrigger>
                <TabsTrigger
                  value='card'
                  className='flex items-center gap-2 data-[state=active]:bg-space-accent/20 data-[state=active]:text-space-accent'
                >
                  <LayoutGrid className='h-4 w-4' />
                  <span>卡片视图</span>
                </TabsTrigger>
                <TabsTrigger
                  value='list'
                  className='flex items-center gap-2 data-[state=active]:bg-space-accent/20 data-[state=active]:text-space-accent'
                >
                  <ListOrdered className='h-4 w-4' />
                  <span>详细列表</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value='timeline' className='mt-0'>
              <MissionTimelineView missions={MISSIONS}></MissionTimelineView>
            </TabsContent>

            <TabsContent value='card' className='mt-0'>
              <MissionCardView missions={MISSIONS}></MissionCardView>
            </TabsContent>

            <TabsContent value='list' className='mt-0'>
              <MissionListView missions={MISSIONS}></MissionListView>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Missions;
