import React, { useState } from 'react';
import { University, ExternalLink, Calendar, MapPin, Star } from 'lucide-react';
import { teamHeaderBg } from '@/assets/images/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { aerospaceInstitutions } from '@/constants/aerospaceConstants';

const Team = () => {
  const [filter, setFilter] = useState('全部');
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const specialties = [
    '全部',
    ...new Set(
      aerospaceInstitutions.map((institution) => institution.specialty)
    ),
  ];

  const filteredInstitutions =
    filter === '全部'
      ? aerospaceInstitutions
      : aerospaceInstitutions.filter(
          (institution) => institution.specialty === filter
        );

  const openInstitutionDialog = (institution) => {
    setSelectedInstitution(institution);
    setIsDialogOpen(true);
  };

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
              天工开物 · 星枢志
            </h1>
            <p className='text-lg text-space-light/80 mb-8'>
              从基础科研的深耕到工程突破的飞跃，这里汇聚中国航天的智慧之光；
              以实验室为起点，以星辰大海为征途，我们正在书写问鼎苍穹的新篇章。
            </p>
          </div>
        </div>
      </section>

      {/* Institution filters */}
      <section className='bg-space-secondary/30 py-10'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='mb-8 flex flex-wrap justify-center gap-2'>
              {specialties.map((specialty) => (
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

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredInstitutions.map((institution) => (
                <Card
                  key={institution.id}
                  className='bg-space-dark/60 border-space-secondary/30 overflow-hidden hover:border-space-accent/50 transition-all cursor-pointer'
                  onClick={() => openInstitutionDialog(institution)}
                >
                  <div className='h-48 overflow-hidden'>
                    <img
                      src={institution.image}
                      alt={institution.name}
                      className='w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500'
                    />
                  </div>
                  <CardHeader className='pb-2'>
                    <div className='flex items-center gap-2 text-space-accent mb-1'>
                      <University size={16} />
                      <CardDescription className='text-space-accent/80 font-medium'>
                        {institution.shortName}
                      </CardDescription>
                    </div>
                    <CardTitle className='text-xl font-orbitron line-clamp-2'>
                      {institution.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='pb-2'>
                    <div className='flex items-center text-space-light/70 text-sm mb-2'>
                      <MapPin size={14} className='mr-1.5' />
                      <span>{institution.location}</span>
                    </div>
                    <div className='flex items-center text-space-light/70 text-sm'>
                      <Star size={14} className='mr-1.5 text-space-accent/70' />
                      <span>{institution.specialty}</span>
                    </div>
                  </CardContent>
                  <CardFooter className='pt-0'>
                    <p className='text-sm text-space-light/60 line-clamp-2'>
                      {institution.description.substring(0, 75)}...
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredInstitutions.length === 0 && (
              <div className='text-center py-10'>
                <p className='text-space-light/70 text-lg'>
                  没有找到该类别的学术机构。
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Institution detail dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedInstitution && (
          <DialogContent className='bg-space-dark/95 border-space-secondary/50 max-w-3xl max-h-[80vh] overflow-y-auto'>
            <DialogHeader>
              <DialogTitle className='text-2xl font-orbitron text-space-light'>
                {selectedInstitution.name}
              </DialogTitle>
              <DialogDescription className='text-space-accent'>
                {selectedInstitution.specialty} 研究机构
              </DialogDescription>
            </DialogHeader>

            <div className='mt-4'>
              <div className='aspect-video overflow-hidden rounded-md mb-6'>
                <img
                  src={selectedInstitution.image}
                  alt={selectedInstitution.name}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
                <div className='flex items-center text-space-light/80'>
                  <MapPin className='mr-2 h-4 w-4 text-space-accent' />
                  <span>{selectedInstitution.location}</span>
                </div>
                <div className='flex items-center text-space-light/80'>
                  <Calendar className='mr-2 h-4 w-4 text-space-accent' />
                  <span>成立于 {selectedInstitution.established}</span>
                </div>
                <div className='flex items-center text-space-light/80'>
                  <ExternalLink className='mr-2 h-4 w-4 text-space-accent' />
                  <a
                    href={selectedInstitution.website}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-space-accent'
                  >
                    访问官网
                  </a>
                </div>
              </div>

              <div className='mb-6'>
                <h3 className='text-lg font-semibold text-space-light mb-2'>
                  机构简介
                </h3>
                <p className='text-space-light/80'>
                  {selectedInstitution.description}
                </p>
              </div>

              <div className='mb-6'>
                <h3 className='text-lg font-semibold text-space-light mb-2'>
                  主要成就
                </h3>
                <ul className='list-disc pl-5 text-space-light/80'>
                  {selectedInstitution.keyAchievements.map(
                    (achievement, index) => (
                      <li key={index} className='mb-1'>
                        {achievement}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-space-light mb-2'>
                  合作关系
                </h3>
                <p className='text-space-light/80'>
                  {selectedInstitution.collaboration}
                </p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Join our institutions CTA */}
      <section className='bg-space-dark py-20 relative overflow-hidden space-stars'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-orbitron font-bold mb-6'>
              加入学术合作网络
            </h2>
            <p className='text-lg text-space-light/80 mb-8'>
              我们诚邀全国各大高校及研究机构加入中国航天科研合作网络，共同探索宇宙奥秘，推动航天科技发展。
            </p>
            <a href='/contact' className='space-button inline-flex'>
              了解合作机会
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
