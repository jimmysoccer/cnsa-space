
import React, { useState } from 'react';
import { Github, Mail, Star } from 'lucide-react';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "陈博士",
    role: "任务主管",
    specialty: "天体物理学",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "陈博士拥有15年以上的天体物理学和太空任务协调经验，领导着我们的任务规划团队。",
    email: "s.chen@astrox.example",
    github: "schen-astro"
  },
  {
    id: 2,
    name: "威尔逊教授",
    role: "首席工程师",
    specialty: "推进系统",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "威尔逊教授专注于先进推进系统，为我们的行星际任务开发了专利技术。",
    email: "j.wilson@astrox.example",
    github: "jwilson-rockets"
  },
  {
    id: 3,
    name: "彼得洛夫博士",
    role: "系外行星研究员",
    specialty: "行星科学",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "彼得洛夫博士领导我们的系外行星研究部门，专注于识别太阳系外的潜在宜居世界。",
    email: "e.petrov@astrox.example",
    github: "elenap-exoplanets"
  },
  {
    id: 4,
    name: "罗德里格兹",
    role: "通信工程师",
    specialty: "深空网络",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    bio: "罗德里格兹设计了我们的革命性深空通信阵列，能与我们最远的探测器保持联系。",
    email: "a.rodriguez@astrox.example",
    github: "alex-deepspace"
  },
  {
    id: 5,
    name: "林博士",
    role: "人工智能系统架构师",
    specialty: "机器学习",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    bio: "林博士开发自主系统和机器学习算法，使我们的飞船能在距离地球数百万公里的地方做出决策。",
    email: "m.lin@astrox.example",
    github: "meilin-ai"
  },
  {
    id: 6,
    name: "哈桑博士",
    role: "生命保障系统",
    specialty: "生物工程",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "哈桑博士专注于长期太空任务和未来火星栖息地的闭环生命保障系统。",
    email: "o.hassan@astrox.example",
    github: "ohassan-biolife"
  },
  {
    id: 7,
    name: "中村小姐",
    role: "导航专家",
    specialty: "轨道力学",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "中村计算飞船到达远距离目标所需的精确轨迹，同时最大限度地减少燃料消耗。",
    email: "s.nakamura@astrox.example",
    github: "snakamura-orbits"
  },
  {
    id: 8,
    name: "约翰逊博士",
    role: "材料科学家",
    specialty: "极端环境",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    bio: "约翰逊博士开发能够承受太空极端条件的先进材料，从温度变化到辐射。",
    email: "m.johnson@astrox.example",
    github: "mjohnson-materials"
  }
];

const Team = () => {
  const [filter, setFilter] = useState('全部');
  
  const specialties = ['全部', ...new Set(teamMembers.map(member => member.specialty))];
  
  const filteredMembers = filter === '全部' 
    ? teamMembers 
    : teamMembers.filter(member => member.specialty === filter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero section */}
      <section className="bg-space-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              我们的研究团队
            </h1>
            <p className="text-lg text-space-light/80 mb-8">
              认识我们开创性太空任务和技术创新背后的杰出人才。
            </p>
          </div>
        </div>
      </section>

      {/* Team filters */}
      <section className="bg-space-secondary/30 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {specialties.map(specialty => (
                <button
                  key={specialty}
                  onClick={() => setFilter(specialty)}
                  className={`px-4 py-2 rounded-full font-orbitron text-sm transition-all ${
                    filter === specialty 
                      ? 'bg-space-accent text-white' 
                      : 'bg-space-dark/60 text-space-light/70 hover:text-space-light'
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredMembers.map(member => (
                <div key={member.id} className="team-member-card group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-orbitron font-bold text-xl">{member.name}</h3>
                      <p className="text-space-accent">{member.role}</p>
                      <div className="flex items-center mt-1.5 text-space-light/70 text-sm">
                        <Star size={14} className="mr-1.5 text-space-accent/70" />
                        <span>{member.specialty}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bio and links */}
                  <div className="p-4">
                    <p className="text-sm text-space-light/80 mb-4">
                      {member.bio}
                    </p>
                    <div className="flex space-x-2">
                      <a 
                        href={`mailto:${member.email}`} 
                        className="p-2 rounded-full bg-space-secondary/80 text-space-light/70 hover:text-space-accent transition-colors"
                        aria-label={`邮件联系 ${member.name}`}
                      >
                        <Mail size={16} />
                      </a>
                      <a 
                        href={`https://github.com/${member.github}`} 
                        className="p-2 rounded-full bg-space-secondary/80 text-space-light/70 hover:text-space-accent transition-colors"
                        aria-label={`${member.name}的GitHub`}
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <div className="text-center py-10">
                <p className="text-space-light/70 text-lg">没有找到具有该专业的团队成员。</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Join our team CTA */}
      <section className="bg-space-dark py-20 relative overflow-hidden space-stars">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
              加入我们的研究团队
            </h2>
            <p className="text-lg text-space-light/80 mb-8">
              我们一直在寻找对太空探索充满热情、致力于推进人类在宇宙中足迹的杰出人才。
            </p>
            <a href="/contact" className="space-button inline-flex">
              了解职业机会
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
