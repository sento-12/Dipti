// components/Card.js
'use client'

export default function Card() {
    return (
        <div className="w-full mt-[5vw] h-screen bg-zinc-900 px-4 sm:px-6 md:px-8">
            <div className="bg-[#fbc3bb] rounded-2xl sm:rounded-3xl flex items-center justify-center h-screen p-4 sm:p-6 md:p-8">
                <div className="text-center bg-white bg-opacity-90 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pink-500 leading-tight">
                        You Are Truly Special, Dipti!
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-3 sm:mt-4 leading-relaxed">
                        Just a little reminder: your presence brings so much light and happiness. Thank you for being you—unique, kind, and wonderful in every way!
                    </p>
                    <div className="flex justify-around mt-6 sm:mt-8 gap-2 sm:gap-4">
                        <div className="w-12 h-16 sm:w-14 sm:h-18 md:w-16 md:h-20 rounded-full relative bg-pink-400 animate-float balloon1"></div>
                        <div className="w-12 h-16 sm:w-14 sm:h-18 md:w-16 md:h-20 rounded-full relative bg-yellow-400 animate-float balloon2 delay-1000"></div>
                        <div className="w-12 h-16 sm:w-14 sm:h-18 md:w-16 md:h-20 rounded-full relative bg-blue-400 animate-float balloon3 delay-2000"></div>
                        <div className="w-12 h-16 sm:w-14 sm:h-18 md:w-16 md:h-20 rounded-full relative bg-green-400 animate-float balloon4 delay-3000"></div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-6 sm:mt-8">I hope you have a great day 💖 — DIVU</p>
                </div>
            </div>
        </div>
    );
}
  