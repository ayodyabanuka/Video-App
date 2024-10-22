import { FaCirclePlay } from 'react-icons/fa6';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const BigCta = () => {
  const navigate = useNavigate();
  const handleCallNow = () => {
    navigate('/join-call');
  };

  return (
    <div className='flex text-zinc-200 gap-16 py-20'>
      <img src='/cta.jpg' alt='' className='w-2/5 object-cover rounded-3xl ' />
      <div className='flex flex-col gap-5'>
        <div className='text-5xl font-thin '>
          Revolutionizing the way you connect with others
        </div>
        <div className='flex flex-col gap-4 '>
          <div className='font-thin'>
            Designed to enhance your virtual meetings, making them more
            effective, engaging and productive than ever before
          </div>
          <div className='font-thin'>
            Whether you are working remotely, coordinating a global team or
            making client presentations, you can enjoy meetings with good video
            quality and options that help you interact with participants at all
            times.
          </div>
          <div className='flex gap-4 items-center'>
            <button
              className='bg-zinc-200 text-sm  px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-zinc-200 transition-colors duration-200 text-zinc-950'
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
      </div>
    </div>
  );
};

export default BigCta;
