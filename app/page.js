'use client';

import Clock from 'react-live-clock';

import { useState } from 'react';
import { FaSignal, FaWifi, FaBatteryFull } from 'react-icons/fa';

export default function Home() {
  const [sum, setSum] = useState('12,545');

  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-black rounded-2xl shadow-xl border-4 border-gray-100">
        <div className="w-auto mx-3 my-2 h-6 flex justify-between">
          <div className="flex items-center text-sm text-white">
            <Clock format={'h:mm'} ticking={true} />
          </div>

          <div className="flex items-center text-sm space-x-1 text-white">
            <FaSignal />
            <FaWifi />
            <FaBatteryFull />
          </div>
        </div>

        <div className="w-auto m-3 h-28 text-right space-y-2 py-2 relative">
          <div className="absolute bottom-0 right-0 text-white font-bold text-3xl">{sum}</div>
        </div>

        <div className="w-auto m-1 h-auto mb-2">
          <div className="m-2 flex justify-between">
            <div className=" bg-[#A5A5A5] shadow-md rounded-full w-12 h-12 text-lg text-black font-medium flex justify-center items-center">C</div>
            <div className="bg-[#A5A5A5] shadow-md rounded-full w-12 h-12 text-lg text-black font-medium flex justify-center items-center">(</div>
            <div className="bg-[#A5A5A5] shadow-md rounded-full w-12 h-12 text-lg text-black font-medium flex justify-center items-center">)</div>
            <div className="bg-[#FF9E0B] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">/</div>
          </div>
          <div className="m-2 flex justify-between">
            <div className=" bg-[#333333] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">7</div>
            <div className=" bg-[#333333] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">8</div>
            <div className=" bg-[#333333] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">9</div>
            <div className="bg-[#FF9E0B] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">x</div>
          </div>
          <div className="m-2 flex justify-between">
            <div className=" bg-[#333333] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">4</div>
            <div className=" bg-[#333333] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">5</div>
            <div className=" bg-[#333333] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">6</div>
            <div className="bg-[#FF9E0B] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">-</div>
          </div>
          <div className="m-2 flex justify-between">
            <div className=" bg-[#333333] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">1</div>
            <div className=" bg-[#333333] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">2</div>
            <div className=" bg-[#333333] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">3</div>
            <div className="bg-[#FF9E0B] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">+</div>
          </div>
          <div className="m-2 flex justify-between">
            <div className="bg-[#333333] shadow-md rounded-full w-full h-12 text-lg text-white font-medium flex justify-start items-center">
              <p className="ml-5">0</p>
            </div>
            <div className="flex w-full ml-3 justify-between">
              <div className="bg-[#333333] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">,</div>
              <div className="bg-[#FF9E0B] shadow-md rounded-full w-12 h-12 text-lg text-white font-medium flex justify-center items-center">=</div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
