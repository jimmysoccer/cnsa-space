import React, { useEffect } from 'react';
import { ArrowRight, Rocket, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import UniverseAnimation from '../components/UniverseAnimation';

const Home = () => {
  // Countdown to next mission
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the launch date to 3 months from now
    const launchDate = new Date();
    launchDate.setMonth(launchDate.getMonth() + 3);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Universe Animation */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Universe Animation */}
        <UniverseAnimation />
        
        <div className="container mx-auto px-4 z-10 pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 space-gradient-text animate-fade-in">
              探索超越地平线的未知
            </h1>
            <p className="text-xl md:text-2xl text-space-light/80 mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
              为明天的太空任务创新
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Link to="/missions" className="space-button">
                探索任务 <ArrowRight size={18} />
              </Link>
              <Link to="/team" className="space-button-outline">
                加入我们 <Star size={18} />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-glow">
          <span className="text-space-light/70 text-sm mb-2">向下滚动探索</span>
          <div className="w-6 h-10 border-2 border-space-light/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-space-light/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Mission Countdown Section */}
      <section className="py-20 bg-space-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-10 md:mb-0 md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                  下一次任务发射
                </h2>
                <p className="text-lg text-space-light/80 mb-6">
                  我们的下一个任务"地平线探索者"即将启动。敬请期待对木星卫星的开创性探索。
                </p>
                <Link to="/missions" className="space-button inline-flex">
                  任务详情 <Rocket size={18} />
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="bg-space-dark/60 backdrop-blur-md rounded-xl border border-space-accent/30 p-8 shadow-lg shadow-space-accent/5">
                  <div className="flex items-center mb-4">
                    <Calendar className="text-space-accent mr-2" />
                    <h3 className="font-orbitron text-xl">发射倒计时</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-space-secondary/50 rounded-lg p-4">
                      <div className="text-3xl font-orbitron text-space-accent">{timeLeft.days}</div>
                      <div className="text-xs uppercase tracking-wide text-space-light/70">天</div>
                    </div>
                    <div className="bg-space-secondary/50 rounded-lg p-4">
                      <div className="text-3xl font-orbitron text-space-accent">{timeLeft.hours}</div>
                      <div className="text-xs uppercase tracking-wide text-space-light/70">时</div>
                    </div>
                    <div className="bg-space-secondary/50 rounded-lg p-4">
                      <div className="text-3xl font-orbitron text-space-accent">{timeLeft.minutes}</div>
                      <div className="text-xs uppercase tracking-wide text-space-light/70">分</div>
                    </div>
                    <div className="bg-space-secondary/50 rounded-lg p-4">
                      <div className="text-3xl font-orbitron text-space-accent">{timeLeft.seconds}</div>
                      <div className="text-xs uppercase tracking-wide text-space-light/70">秒</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Missions Section */}
      <section className="py-20 bg-space-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
              特色任务
            </h2>
            <p className="text-lg text-space-light/80 max-w-3xl mx-auto">
              探索我们最重要的太空探索项目，这些项目正在推动人类知识的边界。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission Card 1 */}
            <div className="mission-card group">
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="恒星观测者任务"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-orbitron font-bold mb-2">恒星观测者</h3>
                <div className="flex items-center text-space-accent mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">发射时间: 2024年3月</span>
                </div>
                <p className="text-space-light/80 mb-4">
                  我们的深空望远镜观测遥远星系中的恒星形成。
                </p>
                <Link to="/missions" className="text-space-accent hover:text-space-light flex items-center text-sm font-medium">
                  了解更多 <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Mission Card 2 */}
            <div className="mission-card group">
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="火星探路者任务"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-orbitron font-bold mb-2">火星探路者</h3>
                <div className="flex items-center text-space-accent mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">发射时间: 2023年1月</span>
                </div>
                <p className="text-space-light/80 mb-4">
                  探索火星表面，寻找古代微生物生命迹象的探测任务。
                </p>
                <Link to="/missions" className="text-space-accent hover:text-space-light flex items-center text-sm font-medium">
                  了解更多 <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Mission Card 3 */}
            <div className="mission-card group">
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="欧罗巴探索者"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-orbitron font-bold mb-2">欧罗巴探索者</h3>
                <div className="flex items-center text-space-accent mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">计划发射时间: 2025年</span>
                </div>
                <p className="text-space-light/80 mb-4">
                  探索木星卫星欧罗巴及其地下海洋的任务。
                </p>
                <Link to="/missions" className="text-space-accent hover:text-space-light flex items-center text-sm font-medium">
                  了解更多 <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/missions" className="space-button-outline inline-flex">
              查看所有任务 <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
