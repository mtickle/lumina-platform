import React from 'react';

const ChurchNews = ({ newsItems }) => {
    return (
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-lg transition duration-300 flex flex-col flex-grow">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Church News
            </h2>

            <div className="space-y-6 flex-grow">
                {newsItems.map((item) => (
                    <article key={item.id} className="group">
                        <time className="text-xs font-bold text-teal-600 uppercase tracking-wider block mb-1">
                            {item.date}
                        </time>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2 cursor-pointer">
                            {item.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {item.summary}
                        </p>
                    </article>
                ))}
            </div>

            <button className="mt-6 text-teal-600 font-medium text-sm hover:text-teal-700 transition flex items-center gap-1 w-max">
                Read All News
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </section>
    );
};

export default ChurchNews;