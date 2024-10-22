import { BsSoundwave, BsTablet } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa6';
import { CiMobile2 } from 'react-icons/ci';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
const Properties = () => {
  return (
    <div className='text-center gap-5 flex flex-col justify-center py-20'>
      <div className='text-5xl font-thin text-zinc-200'>
        Design to improve conversations
      </div>
      <div className='text-zinc-200 font-thin text-sm'>
        We take care of the details so that you can enjoy each and every one of
        your meetings.
      </div>
      <div className='grid grid-cols-3 gap-5 text-zinc-200'>
        {/* card 1 */}
        <div className='bg-zinc-900 border border-zinc-700 p-10 flex flex-col gap-5 items-center justify-center rounded-3xl'>
          <div className='bg-zinc-800 px-8 py-3 rounded-full'>
            Meetings without disturbing noise
          </div>
          <div className='flex gap-5 justify-center items-center'>
            <BsSoundwave className='text-blue-500 text-2xl' />
            <div className='flex flex-col justify-center items-center'>
              <div>Reduces interference</div>
              <div className='h-2 w-full bg-zinc-800 rounded-full'></div>
            </div>
            <div className='bg-blue-900 w-10 flex justify-end rounded-full'>
              <FaCheck className='bg-blue-600 shadow-md p-1 rounded-2xl' />
            </div>
          </div>
          <div className='flex gap-5 justify-center items-center'>
            <BsSoundwave className='text-blue-500 text-2xl' />
            <div className='flex flex-col justify-center items-center'>
              <div>Noise Cancellation</div>
              <div className='h-2 w-full bg-zinc-800 rounded-full'></div>
            </div>
            <div className='bg-blue-900 w-10 flex justify-end rounded-full'>
              <FaCheck className='bg-blue-600 shadow-md p-1 rounded-2xl' />
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className='bg-zinc-900 border border-zinc-700 p-10 flex flex-col col-span-1 row-span-2 gap-5 items-center justify-center rounded-3xl'>
          <div className='bg-zinc-800 px-8 py-3 rounded-full'>
            High quality video
          </div>
          <img
            src='/center.png'
            alt=''
            className='h-full w-full rounded-3xl object-cover'
          />
        </div>
        {/* card 3 */}
        <div className='bg-zinc-900 border border-zinc-700 p-10 flex flex-col col-span-1 gap-5 items-center justify-center rounded-3xl'>
          <div className='bg-zinc-800 px-8 py-3 rounded-full'>
            More than 100 users can join
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <img
              src='/1.jpg'
              alt=''
              className='aspect-square rounded-xl w-16 object-cover'
            />
            <img
              src='/2.jpg'
              alt=''
              className='aspect-square rounded-xl w-16 object-cover'
            />
            <img
              src='/3.jpg'
              alt=''
              className='aspect-square rounded-xl w-16 object-cover'
            />
          </div>
          <div className='bg-zinc-800 px-5 py-3 rounded-3xl w-full flex flex-col gap-4'>
            <div className='flex items-center justify-center'>
              <img
                src='/1.jpg'
                alt=''
                className='aspect-square rounded-full w-8 object-cover'
              />
              <img
                src='/2.jpg'
                alt=''
                className='aspect-square rounded-full w-8 object-cover'
              />
              <img
                src='/3.jpg'
                alt=''
                className='aspect-square rounded-full w-8 object-cover'
              />
            </div>
            +69 users connected
          </div>
        </div>
        {/* card 4 */}
        <div className='bg-zinc-900 border border-zinc-700 p-10 flex flex-col col-span-1 gap-5 items-center justify-center rounded-3xl'>
          <div className='bg-zinc-800 px-8 py-3 rounded-full'>
            Live subtitles
          </div>
          <div className='relative'>
            <img
              src='/cam.jpg'
              alt=''
              className='h-full w-full rounded-3xl object-cover aspect-video'
            />
            <div className='absolute bottom-2 -left-3 flex flex-col justify-start text-xs text-zinc-900 gap-2'>
              <div className='bg-gray-200 rounded-full px-5 py-2 w-fit'>
                👋 Hi Jason!
              </div>
              <div className='bg-gray-200 rounded-full px-5 py-2 w-fit'>
                Hope you are well
              </div>
            </div>
          </div>
        </div>
        {/* card 5 */}
        <div className='bg-zinc-900 border border-zinc-700 p-10 flex flex-col col-span-1 gap-5 items-center justify-center rounded-3xl'>
          <div className='bg-zinc-800 px-8 py-3 rounded-full'>
            Have meeting from any device
          </div>
          <div className='flex gap-4 justify-between px-16 items-center w-full text-3xl text-blue-500'>
            <CiMobile2 />
            <HiOutlineComputerDesktop />
            <BsTablet />
          </div>
          <div className='text-sm font-thin py-5'>
            Download app in the appstore
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
