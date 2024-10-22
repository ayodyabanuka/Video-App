import React from 'react';
import { useNavigate } from 'react-router-dom';

const FirstMeeting = () => {
  const navigate = useNavigate();
  const handleCallNow = () => {
    navigate('/join-call');
  };

  return (
    <div className='flex flex-col items-center justify-center bg-blue-950 rounded-3xl mt-20 p-10 gap-4 text-zinc-200'>
      <div className='text-5xl font-thin'>
        Organize your first meeting today
      </div>
      <div className='font-thin text-lg'>
        Get started today and test all available features at your meeting for
        free for 12 days.
      </div>
      <button
        className='bg-zinc-200 text-sm  px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-zinc-200 transition-colors duration-200 text-zinc-950'
        type='button'
        onClick={handleCallNow}
      >
        Try for free
      </button>
    </div>
  );
};

export default FirstMeeting;
