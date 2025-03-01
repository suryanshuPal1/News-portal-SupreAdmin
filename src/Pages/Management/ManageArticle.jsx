import React from 'react'
import thumbnail from '../../assets/manage/articleImage.png'
import editIcon from '../../assets/manage/editIcon.png'

const ManageArticle = () => {
  return (
    <>
      <div className="p-6 pt-22 bg-gray-100">
        <h1 className="text-2xl font-semibold ">Manage Article/Post</h1>

        <div className="p-2 py-9">
          <div>
            <div className="flex flex-row justify-between">
              <input
                type="text"
                placeholder="Title"
                className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
              />
              <div className="flex flex-row items-center px-3">
                <span className="w-5">
                  <img src={editIcon} alt="" />
                </span>
                <button className="font-bold">Edit</button>
              </div>
            </div>
            <p className="md:w-[60%] text-[#282828] text-sm my-2">
              IND-W vs SA-W U-19 T20 World Cup Final: India Women vs South
              Africa Women U-19 Match Date, Time, Live Cricket Score Streaming,
              Telecast Channels, other details
            </p>
          </div>

          <div className="py-8">
            <div className="flex flex-row justify-between">
              <input
                type="text"
                placeholder="Cover photo"
                className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
              />
              <div className="flex flex-row  items-center px-3">
                <span className="w-5">
                  <img src={editIcon} alt="" />
                </span>
                <button className="font-bold">Edit</button>
              </div>
            </div>
            <img src={thumbnail} alt="thumbnail" className="w-[90%] py-5 " />
          </div>

          <div>
            <div className="flex flex-row justify-between">
              <input
                type="text"
                placeholder="Description"
                className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
              />
              <div className="flex flex-row items-center px-3">
                <span className="w-5">
                  <img src={editIcon} alt="" />
                </span>
                <button className="font-bold">Edit</button>
              </div>
            </div>
            <p className="py-5 w-[90%] text-sm text-[#282828]">
            The ICC Women's U-19 T20 World Cup final between India and South
            Africa is scheduled for Sunday, February 2, 2025, at the Bayamos
            Oval in Kuala Lumpur, starting at 12:00 PM IST. The ICC Women's
            U-19 T20 World Cup final between India and South Africa is
              scheduled for Sunday, February 2, 2025, at the Bayamos Oval in
              Kuala Lumpur, starting at 12:00 PM IST.The ICC Women's U-19 T20
              World Cup final between India and South Africa is scheduled for
              Sunday, February 2, 2025, at the Bayamos Oval in Kuala Lumpur,
              starting at 12:00 PM IST.The ICC Women's U-19 T20 World Cup final
              between India and South Africa is scheduled for Sunday, February
              2, 2025, at the B ayamos Oval in Kuala Lumpur, starting at 12:00
              PM IST. The ICC Women's U-19 T20 World Cup final between India and
              South Africa is scheduled for Sunday, February 2, 2025, at the
              Bayamos Oval in Kuala Lumpur, starting at 12:00 PM IST.The ICC
              Women's U-19 T20 World Cup final between India and South Africa is
              scheduled for Sunday, February 2, 2025, at the Bayamos Oval in
              Kuala Lumpur, starting at 12:00 PM IST.The ICC Women's U-19 T20
              World Cup final between India and South Africa is scheduled for
              Sunday, February 2, 2025, at the Bayamos Oval in Kuala Lumpur,
              starting at 12:00 PM IST.The ICC Women's U-19 T20 World Cup final
              between India and South Africa is scheduled for Sunday, February
              2, 2025, at the Bayamos Oval in Kuala Lumpur, starting at 12:00 PM
              IST. The ICC Women's U-19 T20 World Cup final between India and
              South Africa is scheduled for Sunday, February 2, 2025, at the
              Bayamos Oval in Kuala Lumpur, starting at 12:00 PM IST.The ICC
              Women's U-19 T20 World Cup final between India and South Africa is
              scheduled for Sunday, February 2, 2025, at the Bayamos Oval in
              Kuala Lumpur, starting at 12:00 PM IST.The ICC Women's U-19 T20
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageArticle