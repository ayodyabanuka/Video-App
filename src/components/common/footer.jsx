const Footer = () => {
  return (
    <div className='grid grid-cols-4 text-zinc-200 py-20 px-10'>
      <div className='py-10 flex flex-col gap-3 font-thin'>
        <div className='font-bold'>Product</div>
        <div className='hover:text-blue-500 cursor-pointer text-sm'>
          Plans and Pricing
        </div>
        <div className='hover:text-blue-500 cursor-pointer text-sm'>Blog</div>
      </div>
      <div className='py-10 flex flex-col gap-3 font-thin'>
        <div className='font-bold'>Support</div>
        <div className='hover:text-blue-500 cursor-pointer text-sm'>
          Help Center
        </div>
        <div className='hover:text-blue-500 cursor-pointer text-sm'>FAQ</div>
        <div className='hover:text-blue-500 cursor-pointer text-sm'>
          Contact
        </div>
      </div>
      <div className='py-10 flex flex-col gap-3 font-thin'>
        <div className='font-bold'>Socials</div>
        <div className='hover:text-blue-500 cursor-pointer text-sm'>
          Instagram
        </div>
        <div className='hover:text-blue-500 cursor-pointer text-sm'>
          Facebook
        </div>
        <div className='hover:text-blue-500 cursor-pointer text-sm'>
          Twitter
        </div>
        <div className='hover:text-blue-500 cursor-pointer text-sm'>
          LinkedIn
        </div>
      </div>
      <div className='py-10 flex flex-col gap-3 font-thin'>
        <div className='font-bold'>Legal</div>
        <div className='hover:text-blue-500 cursor-pointer text-sm'>
          Legal Notice
        </div>
        <div className='hover:text-blue-500 cursor-pointer text-sm'>
          Privacy Policy
        </div>
        <div className='hover:text-blue-500 cursor-pointer text-sm'>
          Terms of Use
        </div>
      </div>
      <div className='col-span-4'>
        {' '}
        <div className='border-b border-zinc-800 ' />
      </div>
      <div className='text-center w-full col-span-4 py-5 font-thin text-xs text-zinc-500'>
        Copyright &copy;AB. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
