import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleCallNow = () => {
    navigate('/join-call');
  };
  return (
    <div className='text-zinc-100 py-5 flex justify-between items-center'>
      <div className=''>
        <a href='/'>
          <img src='/logo.png' alt='' width={60} />
        </a>
      </div>
      <div className='flex gap-16 text-sm'>
        <div className='text-zinc-300 hover:text-blue-500 cursor-pointer hover:underline underline-offset-4'>
          Pricing
        </div>
        <div className='text-zinc-300 hover:text-blue-500 cursor-pointer hover:underline underline-offset-4'>
          Blog
        </div>
      </div>
      <div>
        <button
          className='bg-zinc-200 text-sm text-zinc-950 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-zinc-200 transition-colors duration-200'
          type='button'
          onClick={handleCallNow}
        >
          Try for free
        </button>
      </div>
    </div>
  );
};
export default Header;
