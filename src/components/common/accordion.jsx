import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
const FaqAccordion = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-zinc-800 w-full'>
      <button
        className='flex justify-between w-full py-4 text-left text-zinc-200 focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='font-thin text-2xl'>{faq.question}</span>
        <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </button>
      {isOpen && (
        <div className='py-2 font-thin text-zinc-200'>{faq.answer}</div>
      )}
    </div>
  );
};
export default FaqAccordion;
