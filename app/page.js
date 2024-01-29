'use client';

import Clock from 'react-live-clock';

export default function Home() {
  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
        <div className="w-auto mx-3 my-2 h-6 flex justify-between">
          <p className="flex justify-center text-red-600">AGIEFADILLAH</p>
          <div className="text-sm text-yellow-400">
            <Clock format={'h:mm:ss'} ticking={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
