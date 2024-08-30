// components/Card.js
'use client'

export default function Card() {
    return (
        <div  className="w-full mt-[5vw] h-screen bg-zinc-900">

      <div  className="bg-[#fbc3bb] rounded-3xl flex items-center justify-center h-screen">
        <div className="text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-pink-500">Happy Birthday, Tanu!</h1>
          <p className="text-lg text-gray-700 mt-4">Wishing you a day filled with love, laughter, and endless joy!</p>
          <div className="flex justify-around mt-8">
            <div className="w-16 h-20 rounded-full relative bg-pink-400 animate-float balloon1"></div>
            <div className="w-16 h-20 rounded-full relative bg-yellow-400 animate-float balloon2 delay-1000"></div>
            <div className="w-16 h-20 rounded-full relative bg-blue-400 animate-float balloon3 delay-2000"></div>
            <div className="w-16 h-20 rounded-full relative bg-green-400 animate-float balloon4 delay-3000"></div>
          </div>
          <p className="text-sm text-gray-600 mt-8">wished 💖 by DIVU</p>
        </div>
      </div>
      </div>
    );
  }
  