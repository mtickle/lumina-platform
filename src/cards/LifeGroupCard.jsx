import React from 'react';

const renderIcon = (type) => {
    switch (type) {
        case 'book':
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m-2-1l2 1M14 4v2.5M12 18.253v1.616c1.083.396 2.185.812 3 1.253l2.25-1.253c.414-.23.75-.62.75-1.253v-5m0-13C19.832 5.477 18.247 5 16.5 5c-1.746 0-3.332.477-4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            );
        case 'users':
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            );
        case 'globe':
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        case 'community':
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            );
        case 'sparkles':
        default:
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            );
    }
};

const LifeGroupCard = ({ group }) => {
    return (
        <div
            className={`bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-lg transition duration-300 flex flex-col ${group.colSpan}`}
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-100 p-2.5 rounded-lg text-teal-700">
                    {renderIcon(group.iconType)}
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{group.name}</h2>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {group.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <p className="text-slate-600 leading-relaxed flex-grow mb-6">
                {group.description}
            </p>

            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                <span className="font-bold text-slate-800">Room:</span>
                <span className="text-teal-700 font-medium bg-teal-50 px-3 py-1 rounded-md">
                    {group.room}
                </span>
            </div>
        </div>
    );
};

export default LifeGroupCard;