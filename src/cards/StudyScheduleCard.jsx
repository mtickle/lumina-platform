import React from 'react';

const StudyScheduleCard = ({ title, schedule }) => {
    return (
        <section className="bg-white text-slate-800 rounded-2xl shadow-sm p-8 flex flex-col border border-slate-100">
            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-900">
                    <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {title}
                </h2>
            </div>

            <div className="flex-grow space-y-6">
                {schedule.map((item) => (
                    <div
                        key={item.id}
                        className={`relative pl-6 border-l-2 ${item.active ? 'border-teal-500' : 'border-slate-200'
                            }`}
                    >
                        <div
                            className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-4 border-white ${item.active ? 'bg-teal-500' : 'bg-slate-300'
                                }`}
                        ></div>
                        <h3
                            className={`font-semibold uppercase tracking-wider text-xs mb-1 ${item.active ? 'text-teal-600' : 'text-slate-500'
                                }`}
                        >
                            {item.date}
                        </h3>
                        <p
                            className={`text-lg font-medium ${item.active ? 'text-slate-900' : 'text-slate-600'
                                }`}
                        >
                            {item.title}
                        </p>
                        <p
                            className={`text-sm mt-1 ${item.active ? 'text-slate-500' : 'text-slate-400'
                                }`}
                        >
                            {item.scripture}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StudyScheduleCard;