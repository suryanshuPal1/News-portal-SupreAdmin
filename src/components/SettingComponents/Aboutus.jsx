import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import editIcon from '../../assets/manage/editIcon.png'
import img from '../../assets/setting/aboutIcon/img.png'
import axios from 'axios';

const Aboutus = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [edit,setEdit] = useState(false)
  const [value,setValue] = useState('')

  // api call
  useEffect(() => {
    const fetch = async()=>{
      const response = await axios.get("https://newsportalbackend-crdw.onrender.com/api/v1/aboutus/getaboutus")
      // console.log(response.data.data[0].aboutUs)
      console.log(response.data.data)
      setValue(response.data?.data[0]?.aboutUs)
    }
    fetch();
  }, [])
  
  

  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const text = value;
  // console.log('this is-----',value);
  
  return (
    <>
    <div className='mb-6 flex justify-between'>
      <h1 className='font-bold text-xl'>About <span>{edit && '> edit'}</span></h1>
      <button onClick={()=>setEdit(true)} className='hover:bg-gray-200 text-gray-600 flex items-center border-gray-200 flex-row-reverse border px-1 rounded text-sm'>
        Edit 
        <img src={editIcon} alt="edit" className='mr-1 size-4'/>
      </button>
    </div>


    {/* edit disabled */}
    {edit === false && 
    <div className='flex flex-row'>
      <div className='w-[70%]'>
        <p>
          {showFullText ? text : `${text.slice(0, 1000)}...`}
        </p>
        <div className='flex justify-end mt-4'>
          <button onClick={toggleText} className="text-white bg-[#1C2059] hover:bg-[#1C2080] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            {showFullText ? "See Less" : "Learn More"}
          </button>
        </div>
      </div>
      <div className='flex justify-center items-center w-[30%]'>
      <img src={img} alt="Image" className='size-60'/>
      </div>
    </div>
    }
    

    {/* edit enbled */}
    {edit && 
    <div className=''>
      <div className='flex'>
        <div className='w-[70%]'>
          <textarea type="text" value={value} className='w-full p-2 border border-gray-300 rounded'/>
        </div>
        <div className='flex justify-center items-center w-[30%] flex-col'>
          <img src={img} alt="Image" className='size-60'/>
          <input type="file" placeholder='input' className='relative bottom-10 text-white border border-white rounded text-center px-2 w-[60%]'/>
        </div>
      </div>
      <div className='flex justify-end mt-5 gap-10 '>
         <button className="text-white bg-[#1C2059] hover:bg-[#1C2080] font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2">
            Update
          </button>
          <button onClick={()=>setEdit(false)} className="text-white bg-[#1C2059] hover:bg-[#1C2080] font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2">
            Cancel
          </button>
        </div>
    </div>
    }
    
    </>
  )
}

export default Aboutus