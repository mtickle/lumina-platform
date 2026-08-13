import React from 'react';

const FeaturedSermon = ({ sermon }) => {
    return (
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-teal-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-900">Latest Message</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition duration-300">
                {/* Video Placeholder */}
                <div className="w-full md:w-3/5 bg-slate-800 aspect-video relative flex items-center justify-center group cursor-pointer border-b md:border-b-0 md:border-r border-slate-200">
                    <div className="absolute inset-0 bg-slate-900 opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative z-10 w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded">
                        {sermon.duration}
                    </div>
                </div>

                {/* Featured Message Details */}
                <div className="w-full md:w-2/5 p-8 flex flex-col justify-center">
                    <div className="text-teal-600 font-semibold text-sm tracking-wider uppercase mb-2">
                        {sermon.date}
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">
                        {sermon.title}
                    </h3>
                    <p className="text-slate-500 font-medium mb-4">
                        {sermon.speaker} • {sermon.scripture}
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-8">
                        {sermon.summary}
                    </p>
                    <div className="flex gap-4 mt-auto">
                        <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-5 rounded-lg transition duration-200 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Watch
                        </button>
                        <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2.5 px-5 rounded-lg transition duration-200 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Notes
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSermon;