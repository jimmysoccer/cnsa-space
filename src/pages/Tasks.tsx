
import React, { useState } from 'react';
import {
  AlignJustify,
  LayoutGrid,
  ListOrdered,
  LayoutDashboard,
} from 'lucide-react';
import { Task, ViewType } from '../types/task';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TaskTimelineView from '../components/tasks/TaskTimelineView';
import TaskGridView from '../components/tasks/TaskGridView';
import TaskListView from '../components/tasks/TaskListView';
import TaskCardView from '../components/tasks/TaskCardView';
import { TASKS } from '@/constants/taskConstants';
import { tasksHeaderBg } from '@/assets/images/image';

const Tasks = () => {
  const [activeView, setActiveView] = useState<ViewType>('timeline');

  return (
    <div className=' pt-16'>
      {/* Hero section */}
      <section 
        className='bg-space-dark py-20 md:py-28 relative' 
        style={{ 
          backgroundImage: tasksHeaderBg,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='absolute inset-0 bg-space-dark/70 backdrop-blur-sm'></div>
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-orbitron font-bold mb-6'>
              我们的太空任务
            </h1>
            <p className='text-lg text-space-light/80 mb-8'>
              探索正在进行和计划中的太空探索任务，这些任务正在推动人类知识和技术的边界。
            </p>
          </div>
        </div>
      </section>

      {/* Task view section */}
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
                  <LayoutDashboard className='h-4 w-4' />
                  <span>卡片视图</span>
                </TabsTrigger>
                <TabsTrigger
                  value='grid'
                  className='flex items-center gap-2 data-[state=active]:bg-space-accent/20 data-[state=active]:text-space-accent'
                >
                  <LayoutGrid className='h-4 w-4' />
                  <span>卡片网格</span>
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
              <TaskTimelineView tasks={TASKS} />
            </TabsContent>

            <TabsContent value='card' className='mt-0'>
              <TaskCardView tasks={TASKS} />
            </TabsContent>

            <TabsContent value='grid' className='mt-0'>
              <TaskGridView tasks={TASKS} />
            </TabsContent>

            <TabsContent value='list' className='mt-0'>
              <TaskListView tasks={TASKS} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Tasks;
