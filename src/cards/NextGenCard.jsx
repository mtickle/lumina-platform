import React from 'react';

const NextGenCard = ({ program }) => {
    return (
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-lg transition duration-300 flex flex-col">
            <div className="inline-block bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase w-max mb-5">
                {program.badge}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{program.title}</h2>
            <p className="text-slate-600 leading-relaxed flex-grow">
                {program.description}
            </p>
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-3 text-slate-700 text-sm">
                <svg className="w-5 h-5 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                    <strong>{program.timeLocation.split(' in ')[0]}</strong> in {program.timeLocation.split(' in ')[1]}
                </span>
            </div>
        </section>
    );
};

export default NextGenCard;