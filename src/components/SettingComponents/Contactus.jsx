import React from 'react'
import editIcon from '../../assets/manage/editIcon.png'
import ContactUsCard from '../settingContactUsCard/ContactUsCard'

const Contactus = () => {
  return (
    <div>
      <div className='flex flex justify-between'>
      <h1>Contct Us</h1>
      <button onClick={()=>setEdit(true)} className='hover:bg-gray-200 text-gray-600 flex items-center border-gray-200 flex-row-reverse border px-1 rounded text-sm'>
          Edit 
          <img src={editIcon} alt="edit" className='mr-1 size-4'/>
      </button>
      </div>
      <div className='flex'>
      <div className='w-[60%]'>
        <ContactUsCard Sno={1} title={"Send us an email"} 
          details={"If you are facing any issue/ or for feedback, write to us at"} 
         data={"info@optacab.com"}
        />
        <ContactUsCard Sno={1} title={"Send us an email"} 
          details={"If you are facing any issue/ or for feedback, write to us at"} 
          data={"info@optacab.com"}
        />
      </div>
      <div>
        map
      </div>
      </div>
      <div className='flex justify-end mt-5 gap-10'>
        <button className="text-white bg-[#1C2059] hover:bg-[#1C2080] font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2">
            Update
          </button>
          <button className="text-white bg-[#1C2059] hover:bg-[#1C2080] font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2">
            Cancel
          </button>
      </div>
    </div>
  )
}

export default Contactus     