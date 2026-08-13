import React from 'react';

const SermonCard = ({ sermon }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition duration-300 flex flex-col">
            <div className="w-full bg-slate-800 aspect-video relative flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-slate-900 opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative z-10 w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center text-teal-600 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <div className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-1">
                    {sermon.date}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {sermon.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4">{sermon.speaker}</p>
                <button className="mt-auto text-teal-600 font-medium text-sm hover:text-teal-700 transition flex items-center gap-1 w-max">
                    Watch Video
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SermonCard;