import React from 'react'
import { useState } from 'react';
import editIcon from '../../assets/manage/editIcon.png'

const Aboutus = () => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi unde provident, ratione laboriosam 
        eum deleniti explicabo aliquid eos hic placeat repellendus commodi dolor sint ad tempore nostrum corrupti 
        ipsam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi unde provident, ratione laboriosam 
        eum deleniti explicabo aliquid eos hic placeat repellendus commodi dolor sint ad tempore nostrum corrupti 
        ipsam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi unde provident, ratione laboriosam 
        eum deleniti explicabo aliquid eos hic placeat repellendus commodi dolor sint ad tempore nostrum corrupti 
        ipsam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi unde provident, ratione laboriosam 
        eum deleniti explicabo aliquid eos hic placeat repellendus commodi dolor sint ad tempore nostrum corrupti 
        ipsam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi unde provident, ratione laboriosam 
        eum deleniti explicabo aliquid eos hic placeat repellendus commodi dolor sint ad tempore nostrum corrupti 
        ipsam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi unde provident, ratione laboriosam 
        eum deleniti explicabo aliquid eos hic placeat repellendus commodi dolor sint ad tempore nostrum corrupti 
        ipsam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi unde provident, ratione laboriosam 
        eum deleniti explicabo aliquid eos hic placeat repellendus commodi dolor sint ad tempore nostrum corrupti 
        ipsam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi unde provident, ratione laboriosam 
        eum deleniti explicabo aliquid eos hic placeat repellendus commodi dolor sint ad tempore nostrum corrupti 
        ipsam?`
  return (
    <>
    <div className='mb-6 flex justify-between'>
      <h1 className='font-bold text-xl'>About Us</h1>
      <button className='hover:bg-gray-200 text-gray-600 flex items-center border-gray-200 flex-row-reverse border px-1 rounded text-sm'>
        Edit 
        <img src={editIcon} alt="edit" className='mr-1 size-4'/>
      </button>
    </div>
    <div className='flex'>
      <div className='w-[60%]'>
      <p>
      {showFullText ? text : `${text.slice(0, 1000)}...`}
      </p>
      <div className='flex justify-end mt-4'>
      <button onClick={toggleText} className="text-white bg-[#1C2059] hover:bg-[#1C2080] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        {showFullText ? "See Less" : "Learn More"}
      </button>
      </div>
      </div>
      <img src="image" alt="Image" />
    </div>
    </>
  )
}

export default Aboutus