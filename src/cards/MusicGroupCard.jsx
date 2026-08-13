import React from 'react';

const renderGroupIcon = (iconType) => {
    if (iconType === 'music') {
        return (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
        );
    }
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    );
};

const MusicGroupCard = ({ group }) => {
    return (
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-100 p-3 rounded-xl text-teal-700">
                    {renderGroupIcon(group.iconType)}
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{group.title}</h2>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {group.description}
            </p>

            <div className="bg-slate-50 border border-slate-100 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-2">
                    Rehearsal
                </h3>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <svg className="w-4 h-4 text-teal-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {group.rehearsal}
                </div>
            </div>
        </section>
    );
};

export default MusicGroupCard;