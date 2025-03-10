import React from 'react'
import Accordian from '../components/accordian/Accordian';
import TabComponent from '../components/SettingComponents/TabComponent';

const Setting = () => {
  return (
    <>
    <div className="p-6 pt-22 bg-gray-100 lg:w-[100%] md:w-231">
    <h1 className="text-2xl font-semibold ">Setting</h1>
      <TabComponent/>
    </div>
    </>
  );
}

export default Setting