import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Youtube } from 'lucide-react';
import { NavBarItems } from '@/constants/navConstants';

const Footer = () => {
  return (
    <footer className='bg-space-dark border-t border-space-accent/20 relative overflow-hidden'>
      {/* Star background */}
      <div className='absolute inset-0 z-0'>
        <div className='space-stars h-full'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* AstroX section */}
          <div className='space-y-4'>
            <h3 className='text-space-accent font-orbitron text-xl'>问天阁</h3>
            <p className='text-space-gray max-w-xs'>
              问天阁 - 中国航天任务全记录与知识库
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://github.com/jimmysoccer'
                target='_blank'
                className='text-space-gray hover:text-space-accent transition-colors'
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className='space-y-4'>
            <h3 className='text-space-accent font-orbitron text-xl'>
              常用链接
            </h3>
            <ul className='space-y-2'>
              {NavBarItems.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className='text-space-gray hover:text-space-accent transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated */}
          <div className='space-y-4'>
            <h3 className='text-space-accent font-orbitron text-xl'>
              获取更新
            </h3>
            <p className='text-space-gray'>
              订阅我们的通讯，获取关于最新任务和突破性进展的更新。
            </p>
            <div className='flex flex-col sm:flex-row gap-2'>
              <input
                type='email'
                placeholder='您的邮箱'
                className='bg-space-secondary/50 border border-space-accent/30 rounded-md px-4 py-2 text-space-light focus:outline-none focus:border-space-accent'
              />
              <button className='bg-space-accent hover:bg-space-accent/80 text-white font-medium py-2 px-4 rounded-md transition-colors'>
                订阅
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='border-t border-space-accent/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center'>
          <p className='text-space-gray text-sm'>
            © {new Date().getFullYear()} 问天阁。保留所有权利。
          </p>
          <div className='flex space-x-6 mt-4 sm:mt-0'>
            <a
              href='#'
              className='text-space-gray hover:text-space-accent text-sm transition-colors'
            >
              隐私政策
            </a>
            <a
              href='#'
              className='text-space-gray hover:text-space-accent text-sm transition-colors'
            >
              服务条款
            </a>
          </div>
        </div>

        {/* Easter Egg: Floating asteroid animation at bottom */}
        <div className='asteroid absolute -bottom-6 left-1/4 w-12 h-12 opacity-30 animate-float'>
          <div className='w-full h-full rounded-full bg-gradient-to-br from-gray-500 to-gray-700'></div>
        </div>
        <div
          className='asteroid absolute -bottom-4 right-1/3 w-8 h-8 opacity-20 animate-float'
          style={{ animationDelay: '1.5s' }}
        >
          <div className='w-full h-full rounded-full bg-gradient-to-br from-gray-500 to-gray-700'></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
