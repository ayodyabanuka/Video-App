import { FaCirclePlay } from 'react-icons/fa6';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  const handleCallNow = () => {
    navigate('/join-call');
  };

  return (
    <div className='pb-10 pt-44 flex flex-col gap-5 items-center justify-center text-zinc-200 '>
      <div className='font-thin text-8xl text-center'>
        Meetings more efficient, engaging, and effortless.
      </div>
      <div className='font-thin'>
        whether you're connecting with team members across the globe or
        presenting to clients, your visuals will be top-notch.
      </div>
      <div className='flex gap-4 items-center'>
        <button
          className='bg-zinc-200 text-sm text-zinc-950 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-zinc-200 transition-colors duration-200'
          type='button'
          onClick={handleCallNow}
        >
          Try for free
        </button>
        <button
          className='text-sm text-zinc-200 px-5 py-2 rounded-lg hover:bg-zinc-800  transition-colors duration-200'
          type='button'
          disabled
        >
          <div className='flex gap-2 text-zinc-200 items-center'>
            <FaCirclePlay className='text-zinc-200' />
            <div>Watch a demo</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
