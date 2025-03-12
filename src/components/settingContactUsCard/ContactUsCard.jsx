import React from 'react'

const ContactUsCard = ({Sno,title,details,data}) => {
  return (
    <div className='border rounded-lg my-4'>
        <div className='flex bg-zinc-200 rounded-t-lg border-b p-2'>
            <span>{Sno}.</span>
            <h1 className='font-semibold'>{title}</h1>
        </div>
        <div className='p-2 py-4'>
            <p>{details}</p>
            <p className='text-zinc-400'>{data}</p>
        </div>
    </div>
  )
}

export default ContactUsCard