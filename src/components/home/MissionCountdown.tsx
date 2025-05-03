/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
interface MissionCountdownProps {
  launchDate: Date;
}

const MissionCountdown: React.FC<MissionCountdownProps> = ({ launchDate }) => {
  // Countdown to next mission
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the launch date to 3 months from now
    const newLaunchDate = new Date(launchDate);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = newLaunchDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='md:w-1/2 flex justify-center md:justify-end'>
      <div className='bg-space-dark/60 backdrop-blur-md rounded-xl border border-space-accent/30 p-8 shadow-lg shadow-space-accent/5'>
        <div className='flex items-center mb-4'>
          <Calendar className='text-space-accent mr-2' />
          <h3 className='font-orbitron text-xl'>发射倒计时</h3>
        </div>
        <div className='grid grid-cols-4 gap-2 text-center'>
          <div className='bg-space-secondary/50 rounded-lg p-4'>
            <div className='text-3xl font-orbitron text-space-accent'>
              {timeLeft.days}
            </div>
            <div className='text-xs uppercase tracking-wide text-space-light/70'>
              天
            </div>
          </div>
          <div className='bg-space-secondary/50 rounded-lg p-4'>
            <div className='text-3xl font-orbitron text-space-accent'>
              {timeLeft.hours}
            </div>
            <div className='text-xs uppercase tracking-wide text-space-light/70'>
              时
            </div>
          </div>
          <div className='bg-space-secondary/50 rounded-lg p-4'>
            <div className='text-3xl font-orbitron text-space-accent'>
              {timeLeft.minutes}
            </div>
            <div className='text-xs uppercase tracking-wide text-space-light/70'>
              分
            </div>
          </div>
          <div className='bg-space-secondary/50 rounded-lg p-4'>
            <div className='text-3xl font-orbitron text-space-accent'>
              {timeLeft.seconds}
            </div>
            <div className='text-xs uppercase tracking-wide text-space-light/70'>
              秒
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionCountdown;
