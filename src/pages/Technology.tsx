import React from 'react';
import { Rocket, Search, Link, ArrowRight } from 'lucide-react';
import { teamHeaderBg } from '@/assets/images/image';

const Technology = () => {
  return (
    <div className='min-h-screen pt-16'>
      {/* Hero section */}
      <section
        className='bg-space-dark py-20 md:py-28 relative'
        style={{
          backgroundImage: teamHeaderBg,
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

      {/* Technology Overview */}
      <section className='bg-space-secondary/30 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* Propulsion Systems */}
              <div className='tech-card'>
                <div className='mb-6 flex justify-center'>
                  <div className='w-16 h-16 rounded-full bg-space-accent/20 flex items-center justify-center'>
                    <Rocket className='h-8 w-8 text-space-accent' />
                  </div>
                </div>
                <h3 className='text-xl font-orbitron font-bold mb-4 text-center'>
                  推进系统
                </h3>
                <div className='space-y-4 text-space-light/80'>
                  <p>
                    我们的先进推进系统能实现更快的旅行时间和更高效的太阳系探索。
                  </p>
                  <div className='border-t border-space-accent/20 pt-4'>
                    <h4 className='font-orbitron text-space-accent mb-2 text-sm uppercase'>
                      技术
                    </h4>
                    <ul className='list-disc list-inside space-y-1'>
                      <li>离子推进引擎</li>
                      <li>核热火箭</li>
                      <li>等离子体推进器</li>
                      <li>反物质催化系统</li>
                    </ul>
                  </div>
                  <div className='border-t border-space-accent/20 pt-4'>
                    <h4 className='font-orbitron text-space-accent mb-2 text-sm uppercase'>
                      当前应用
                    </h4>
                    <p>
                      我们的恒星观测者任务使用下一代离子推进，实现了创纪录的90%燃料效率。
                    </p>
                  </div>
                </div>
                <div className='mt-6 text-center'>
                  <button className='inline-flex items-center text-space-accent hover:text-space-light'>
                    了解更多 <ArrowRight size={16} className='ml-1' />
                  </button>
                </div>
              </div>

              {/* Communication Systems */}
              <div className='tech-card'>
                <div className='mb-6 flex justify-center'>
                  <div className='w-16 h-16 rounded-full bg-space-accent/20 flex items-center justify-center'>
                    <Link className='h-8 w-8 text-space-accent' />
                  </div>
                </div>
                <h3 className='text-xl font-orbitron font-bold mb-4 text-center'>
                  通讯系统
                </h3>
                <div className='space-y-4 text-space-light/80'>
                  <p>我们的深空通信网络可实现数十亿公里外的可靠数据传输。</p>
                  <div className='border-t border-space-accent/20 pt-4'>
                    <h4 className='font-orbitron text-space-accent mb-2 text-sm uppercase'>
                      技术
                    </h4>
                    <ul className='list-disc list-inside space-y-1'>
                      <li>量子纠缠发射器</li>
                      <li>神经网络信号处理</li>
                      <li>激光通信阵列</li>
                      <li>低延迟网关网络</li>
                    </ul>
                  </div>
                  <div className='border-t border-space-accent/20 pt-4'>
                    <h4 className='font-orbitron text-space-accent mb-2 text-sm uppercase'>
                      当前应用
                    </h4>
                    <p>
                      我们的火星探路者探测器使用激光通信系统，实现近实时高清视频传输。
                    </p>
                  </div>
                </div>
                <div className='mt-6 text-center'>
                  <button className='inline-flex items-center text-space-accent hover:text-space-light'>
                    了解更多 <ArrowRight size={16} className='ml-1' />
                  </button>
                </div>
              </div>

              {/* Life Support Systems */}
              <div className='tech-card'>
                <div className='mb-6 flex justify-center'>
                  <div className='w-16 h-16 rounded-full bg-space-accent/20 flex items-center justify-center'>
                    <Search className='h-8 w-8 text-space-accent' />
                  </div>
                </div>
                <h3 className='text-xl font-orbitron font-bold mb-4 text-center'>
                  生命保障系统
                </h3>
                <div className='space-y-4 text-space-light/80'>
                  <p>
                    我们的生物再生生命支持系统使长期载人任务成为可能且可持续。
                  </p>
                  <div className='border-t border-space-accent/20 pt-4'>
                    <h4 className='font-orbitron text-space-accent mb-2 text-sm uppercase'>
                      技术
                    </h4>
                    <ul className='list-disc list-inside space-y-1'>
                      <li>闭环生态系统</li>
                      <li>辐射屏蔽</li>
                      <li>人工重力生成</li>
                      <li>3D生物打印紧急医疗</li>
                    </ul>
                  </div>
                  <div className='border-t border-space-accent/20 pt-4'>
                    <h4 className='font-orbitron text-space-accent mb-2 text-sm uppercase'>
                      当前应用
                    </h4>
                    <p>
                      我们的月球门户站配备原型生物再生系统，可回收99.7%的水。
                    </p>
                  </div>
                </div>
                <div className='mt-6 text-center'>
                  <button className='inline-flex items-center text-space-accent hover:text-space-light'>
                    了解更多 <ArrowRight size={16} className='ml-1' />
                  </button>
                </div>
              </div>
            </div>
          </div>
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
                  src='https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
                  alt='量子真空推进系统'
                  className='rounded-lg shadow-xl shadow-space-accent/10 border border-space-accent/30'
                />
              </div>
              <div>
                <h3 className='text-2xl font-orbitron font-bold mb-4 text-space-accent'>
                  量子真空推进
                </h3>
                <p className='text-space-light/80 mb-6'>
                  我们革命性的推进系统利用太空真空中的量子波动能量，实现前所未有的效率和加速能力，不受传统推进剂限制。
                </p>
                <div className='space-y-4'>
                  <div className='bg-space-secondary/40 rounded-lg p-4 border border-space-accent/20'>
                    <h4 className='font-orbitron text-space-light mb-2'>
                      关键优势
                    </h4>
                    <ul className='list-disc list-inside text-space-light/80 space-y-1'>
                      <li>持续加速无需消耗推进剂</li>
                      <li>理论最大速度接近光速的10%</li>
                      <li>最小化辐射特征，适合隐秘操作</li>
                      <li>从量子场相互作用中自给自足的能量生成</li>
                    </ul>
                  </div>

                  <div className='bg-space-secondary/40 rounded-lg p-4 border border-space-accent/20'>
                    <h4 className='font-orbitron text-space-light mb-2'>
                      开发状态
                    </h4>
                    <p className='text-space-light/80'>
                      目前处于先进测试阶段，小型原型在真空室条件下实现0.1g加速度。全尺寸实施计划用于欧罗巴探索者任务。
                    </p>
                  </div>
                </div>
                <button className='space-button mt-8'>技术规格</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className='bg-space-secondary/30 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-orbitron font-bold mb-12 text-center'>
            研究领域
          </h2>

          <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-space-dark/70 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20'>
              <h3 className='font-orbitron text-xl mb-4'>人工重力</h3>
              <p className='text-space-light/80 mb-4'>
                研究在长期太空任务中产生人工重力的实用方法，防止肌肉和骨骼退化。
              </p>
              <div className='h-1 w-1/3 bg-space-accent/70 rounded-full'></div>
            </div>

            <div className='bg-space-dark/70 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20'>
              <h3 className='font-orbitron text-xl mb-4'>辐射屏蔽</h3>
              <p className='text-space-light/80 mb-4'>
                开发先进材料和电磁场，保护宇航员免受有害宇宙和太阳辐射。
              </p>
              <div className='h-1 w-1/3 bg-space-accent/70 rounded-full'></div>
            </div>

            <div className='bg-space-dark/70 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20'>
              <h3 className='font-orbitron text-xl mb-4'>量子计算</h3>
              <p className='text-space-light/80 mb-4'>
                应用量子计算解决复杂轨道力学计算并实时优化任务轨迹。
              </p>
              <div className='h-1 w-1/3 bg-space-accent/70 rounded-full'></div>
            </div>

            <div className='bg-space-dark/70 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20'>
              <h3 className='font-orbitron text-xl mb-4'>地球改造</h3>
              <p className='text-space-light/80 mb-4'>
                使其他世界适合人类定居的行星工程理论和实践方法。
              </p>
              <div className='h-1 w-1/3 bg-space-accent/70 rounded-full'></div>
            </div>

            <div className='bg-space-dark/70 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20'>
              <h3 className='font-orbitron text-xl mb-4'>低温休眠</h3>
              <p className='text-space-light/80 mb-4'>
                研究安全地将人类置于长期行星际或潜在星际任务的休眠状态。
              </p>
              <div className='h-1 w-1/3 bg-space-accent/70 rounded-full'></div>
            </div>

            <div className='bg-space-dark/70 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20'>
              <h3 className='font-orbitron text-xl mb-4'>小行星采矿</h3>
              <p className='text-space-light/80 mb-4'>
                从近地小行星提取有价值的矿物和资源以支持太空制造和殖民的技术。
              </p>
              <div className='h-1 w-1/3 bg-space-accent/70 rounded-full'></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
