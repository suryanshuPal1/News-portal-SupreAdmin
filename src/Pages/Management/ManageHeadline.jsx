import React from 'react'
import thumbnail from '../../assets/manage/thumbnail.png'
import editIcon from '../../assets/manage/editIcon.png'

const ManageHeadline = () => {
  return (
    <>
    <div className='p-6 pt-22 bg-gray-100'>
      <h1 className='text-2xl font-semibold '>Manage Headlines</h1>
      
      <div className='p-2 py-9'>
        <div>
          <div className='flex flex-row justify-between'>
            <input type="text" placeholder='Title'className='border border-gray-200 rounded px-3 py-1 w-[90%] shadow'/>
            <div className='flex flex-row items-center md:px-3'>
             <span className='w-5'><img src={editIcon} alt="" /></span>
             <button className='font-bold'>Edit</button>
            </div>
          </div>
          <p className='lg:w-[39%] text-[#282828] text-sm my-2 md:w-[60%] w-[90%]'>
            Budget 2025 Live: Fm Nirmala Sitaraman Announces Huge Tax Relief | New
            Tax Slab Explained
          </p>
        </div>


        <div className='py-8'>
          <div className='flex flex-row justify-between'>
            <input type="text" placeholder='Video' className='border border-gray-200 rounded px-3 py-1 w-[90%] shadow'/>
            <div className='flex flex-row  items-center md:px-3'>
             <span className='w-5'><img src={editIcon} alt="" /></span>
             <button className='font-bold'>Edit</button>
            </div>
          </div>
          <img src={thumbnail} alt="thumbnail" className='w-[90%] py-5 ' />
        </div>


        <div>
          <div className='flex flex-row justify-between'>
            <input type="text" placeholder='Description' className='border border-gray-200 rounded px-3 py-1 w-[90%] shadow'/>
            <div className='flex flex-row items-center md:px-3'>
             <span className='w-5'><img src={editIcon} alt="" /></span>
             <button className='font-bold'>Edit</button>
            </div>
          </div>
          <p className='py-5 w-[95%] text-sm text-[#282828]'>
            A court in West Bengal has directed the production of individuals
            linked to a Bangladesh-based terror outfit who are currently lodged in
            an Assam jail. The order comes as part of an ongoing investigation
            into cross-border terrorism and illegal activities. Authorities are
            expected to transport the suspects for further legal proceedings,
            shedding light on the regional security concerns and coordinated
            efforts between Indian states to tackle extremist networks. A court in
            West Bengal has directed the production of individuals linked to a
            Bangladesh-based terror outfit who are currently lodged in an Assam
            jail. The order comes as part of an ongoing investigation into
            cross-border terrorism and illegal activities. Authorities are
            expected to transport the suspects for further legal proceedings,
            shedding light on the regional security concerns and coordinated
            efforts between Indian states to tackle extremist networks. A court in
            West Bengal has directed the production of individuals linked to a
            Bangladesh-based terror outfit who are currently lodged in an Assam
            jail. The order comes as part of an ongoing investigation into
            cross-border terrorism and illegal activities. Authorities are
            expected to transport the suspects for further legal proceedings,
            shedding light on the regional security concerns and coordinated
            efforts between Indian states to tackle extremist networks. A court in
            West Bengal has directed the production of individuals linked to a
            Bangladesh-based terror outfit who are currently lodged in an Assam
            jail...
          </p>
          </div>
        </div>  


      </div>
    </>
  );
}

export default ManageHeadline