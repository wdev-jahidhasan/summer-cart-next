import React from 'react';
import { FaThinkPeaks } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { GiWaveSurfer } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";

const Brands = () => {
  return (
    <div className='my-12'>
      <h1 className="text-center font-bold text-4xl md:text-5xl text-purple-500 mb-10">Top Brands</h1>
      <div className='w-80 mx-auto grid grid-cols-2 gap-5 text-center my-5'>
        <a className='border border-purple-400 rounded-lg p-5'><span className='text-green-500 font-bold text-xl md:text-3xl'>H</span><span className=' text-pink-500 font-bold text-xl md:text-3xl' >Peak <FaThinkPeaks /></span></a>
        <a className='border border-purple-400 rounded-lg p-5'><span className='text-yellow-500 font-bold text-xl md:text-3xl'><FaSun />Sun</span><span className=' text-orange-500 font-bold text-xl md:text-3xl' >G</span></a>
        <a className='border border-purple-400 rounded-lg p-5'><span className='text-blue-500 font-bold text-xl md:text-3xl'><GiWaveSurfer /> Wave</span><span className=' text-teal-500 font-bold text-xl md:text-3xl' >B</span></a>
        <a className='border border-purple-400 rounded-lg p-5'><span className='text-purple-500 font-bold text-xl md:text-3xl'><FaBoxOpen /> Ch</span><span className=' text-gray-500 font-bold text-xl md:text-3xl' >Box</span></a>
      </div>
    </div>
  );
};

export default Brands;