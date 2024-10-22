const Counts = () => {
  return (
    <div className='text-zinc-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20'>
      <div className='flex flex-col items-center'>
        <div className='text-5xl font-bold'>100M+</div>
        <div className='text-base font-thin'>Users worldwide</div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='text-5xl font-bold'>120+</div>
        <div className='text-base font-thin'>Countries held meetings</div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='text-5xl font-bold'>8+</div>
        <div className='text-base font-thin'>Years in the market</div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='text-5xl font-bold'>15K</div>
        <div className='text-base font-thin'>Meetings around the world</div>
      </div>
    </div>
  );
};

export default Counts;
