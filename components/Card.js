// components/Card.js
'use client'

export default function Card() {
    return (
        <div className="w-full mt-[5vw] h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 px-4 sm:px-6 md:px-8 flex items-center justify-center">
            <div className="backdrop-blur-md bg-white/10 border border-zinc-700 rounded-2xl sm:rounded-3xl shadow-2xl flex items-center justify-center p-4 sm:p-6 md:p-8 max-w-lg w-full mx-auto">
                <div className="text-center w-full">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-2">
                        You Are Truly Special, Dipti!
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-zinc-200 mt-3 sm:mt-4 leading-relaxed">
                        Just a little reminder: your presence brings so much light and happiness. Thank you for being you—unique, kind, and wonderful in every way!
                    </p>
                    <div className="flex justify-center items-center gap-4 mt-8 mb-6">
                        {/* Glowing round lights */}
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-500 shadow-[0_0_24px_8px_rgba(255,221,51,0.4)] border-2 border-yellow-300 animate-pulse"></div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 via-pink-300 to-pink-600 shadow-[0_0_24px_8px_rgba(255,99,132,0.4)] border-2 border-pink-400 animate-pulse"></div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 via-blue-200 to-blue-500 shadow-[0_0_24px_8px_rgba(51,153,255,0.4)] border-2 border-blue-300 animate-pulse"></div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 via-green-200 to-green-500 shadow-[0_0_24px_8px_rgba(51,255,153,0.4)] border-2 border-green-300 animate-pulse"></div>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-6 sm:mt-8">I hope you have feel special 💖 — DIVU</p>
                </div>
            </div>
        </div>
    );
}
  