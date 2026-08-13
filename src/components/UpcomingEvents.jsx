import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingEvents = ({ recurringEvents, specialEvents }) => {
    return (
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-800 p-8 hover:shadow-lg transition duration-300 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 shrink-0 text-slate-900">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upcoming Events
            </h2>

            <div className="space-y-8 overflow-y-auto custom-scrollbar pr-2 flex-grow">
                {/* Recurring Weekly Schedule */}
                {recurringEvents.map((group, groupIdx) => (
                    <div key={groupIdx}>
                        <h3 className="font-bold text-teal-700 text-lg border-b-2 border-teal-100 pb-2 mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                            {group.dayHeading}
                        </h3>
                        <ul className="space-y-4">
                            {group.events.map((event, eventIdx) => (
                                <li key={eventIdx} className="flex items-start gap-4">
                                    <span className="font-bold text-slate-400 w-12 shrink-0 text-right mt-0.5">
                                        {event.time}
                                    </span>
                                    <div>
                                        <Link
                                            to={event.link}
                                            className="block font-medium text-teal-600 hover:text-teal-800 underline decoration-teal-300 transition-colors"
                                        >
                                            {event.title}
                                        </Link>
                                        <span className="flex items-center gap-1 text-sm text-slate-500 mt-1">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {event.location}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Special Events Section */}
                <div>
                    <h3 className="font-bold text-teal-700 text-lg border-b-2 border-teal-100 pb-2 mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                        Special Events
                    </h3>
                    <ul className="space-y-4">
                        {specialEvents.map((item) => (
                            <li key={item.id} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                                <div className="font-bold text-slate-800 mb-1">{item.title}</div>
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {item.datetime}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;