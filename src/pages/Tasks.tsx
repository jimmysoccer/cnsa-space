import React, { useState } from 'react';
import { AlignJustify, LayoutGrid, ListOrdered, LayoutDashboard } from 'lucide-react';
import { Task, ViewType } from '../types/task';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import TaskTimelineView from '../components/tasks/TaskTimelineView';
import TaskGridView from '../components/tasks/TaskGridView';
import TaskListView from '../components/tasks/TaskListView';
import TaskCardView from '../components/tasks/TaskCardView';

// Sample task data
const tasks: Task[] = [
  {
    id: 1,
    title: "月球采样任务",
    description: "收集月球表面样本以分析矿物质成分和潜在资源。",
    startDate: "2024-05-10",
    endDate: "2024-08-15",
    status: "in-progress",
    priority: "high",
    target: "月球南极",
    category: "采样",
    assignee: "张伟",
    progress: 35
  },
  {
    id: 2,
    title: "火星大气分析",
    description: "分析火星大气成分，寻找生命迹象和了解气候模式。",
    startDate: "2024-03-20",
    endDate: "2024-09-30",
    status: "in-progress",
    priority: "medium",
    target: "火星赤道区域",
    category: "科学研究",
    assignee: "李娜",
    progress: 50
  },
  {
    id: 3,
    title: "空间站维护",
    description: "对国际空间站太阳能板系统进行例行维护和升级。",
    startDate: "2024-04-05",
    endDate: "2024-04-20",
    status: "completed",
    priority: "high",
    target: "国际空间站",
    category: "维护",
    assignee: "王强",
    progress: 100
  },
  {
    id: 4,
    title: "小行星观测计划",
    description: "跟踪并观测近地小行星的轨道，评估潜在撞击风险。",
    startDate: "2024-06-01",
    endDate: "2025-01-15",
    status: "planned",
    priority: "medium",
    target: "近地小行星带",
    category: "观测",
    assignee: "刘芳",
    progress: 0
  },
  {
    id: 5,
    title: "水星探测器发射",
    description: "发射新的探测器前往水星，研究其地质特征和磁场。",
    startDate: "2024-09-15",
    endDate: "2024-09-16",
    status: "planned",
    priority: "high",
    target: "水星",
    category: "探索",
    assignee: "陈明",
    progress: 0
  },
  {
    id: 6,
    title: "深空通信网络测试",
    description: "测试新开发的深空通信协议，以提高远距离数据传输效率。",
    startDate: "2024-02-10",
    endDate: "2024-04-30",
    status: "completed",
    priority: "low",
    target: "深空网络",
    category: "通信",
    assignee: "赵敏",
    progress: 100
  },
  {
    id: 7,
    title: "太空垃圾清理试验",
    description: "测试使用激光技术清理地球轨道上的太空垃圾。",
    startDate: "2024-07-20",
    endDate: "2024-10-25",
    status: "planned",
    priority: "medium",
    target: "地球轨道",
    category: "环境保护",
    assignee: "杨光",
    progress: 0
  },
  {
    id: 8,
    title: "量子通信卫星升级",
    description: "为现有量子通信卫星进行软件升级，增强加密能力。",
    startDate: "2024-05-05",
    endDate: "2024-06-10",
    status: "delayed",
    priority: "high",
    target: "量子卫星",
    category: "通信",
    assignee: "周健",
    progress: 15
  },
  {
    id: 9,
    title: "太空种植实验",
    description: "在微重力环境下测试作物生长并研究植物适应性。",
    startDate: "2024-03-01",
    endDate: "2024-08-30",
    status: "in-progress",
    priority: "low",
    target: "国际空间站",
    category: "生物科学",
    assignee: "吴芳",
    progress: 60
  }
];

const Tasks = () => {
  const [activeView, setActiveView] = useState<ViewType>('timeline');

  return (
    <div className="min-h-screen pt-16">
      {/* Hero section */}
      <section className="bg-space-dark py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              太空任务执行计划
            </h1>
            <p className="text-lg text-space-light/80 mb-8">
              查看和管理我们的太空任务执行计划和进度跟踪
            </p>
          </div>
        </div>
      </section>

      {/* Task view section */}
      <section className="bg-space-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <Tabs 
            defaultValue="timeline" 
            value={activeView}
            onValueChange={(value) => setActiveView(value as ViewType)}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-space-dark/50 backdrop-blur-sm">
                <TabsTrigger value="timeline" className="flex items-center gap-2 data-[state=active]:bg-space-accent/20 data-[state=active]:text-space-accent">
                  <AlignJustify className="h-4 w-4" />
                  <span>时间线视图</span>
                </TabsTrigger>
                <TabsTrigger value="card" className="flex items-center gap-2 data-[state=active]:bg-space-accent/20 data-[state=active]:text-space-accent">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>卡片视图</span>
                </TabsTrigger>
                <TabsTrigger value="grid" className="flex items-center gap-2 data-[state=active]:bg-space-accent/20 data-[state=active]:text-space-accent">
                  <LayoutGrid className="h-4 w-4" />
                  <span>卡片网格</span>
                </TabsTrigger>
                <TabsTrigger value="list" className="flex items-center gap-2 data-[state=active]:bg-space-accent/20 data-[state=active]:text-space-accent">
                  <ListOrdered className="h-4 w-4" />
                  <span>详细列表</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="timeline" className="mt-0">
              <TaskTimelineView tasks={tasks} />
            </TabsContent>
            
            <TabsContent value="card" className="mt-0">
              <TaskCardView tasks={tasks} />
            </TabsContent>
            
            <TabsContent value="grid" className="mt-0">
              <TaskGridView tasks={tasks} />
            </TabsContent>
            
            <TabsContent value="list" className="mt-0">
              <TaskListView tasks={tasks} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Tasks;
