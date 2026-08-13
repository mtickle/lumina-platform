import React from 'react';
import bibleStudyData from '@data/bibleStudyData.json';
import StudyScheduleCard from '@cards/StudyScheduleCard';

const renderDetailIcon = (icon) => {
    switch (icon) {
        case 'clock':
            return (
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        case 'location':
            return (
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            );
        case 'book':
        default:
            return (
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            );
    }
};

const BibleStudyPage = () => {
    const { badge, title, description, details, about, scheduleTitle, schedule } = bibleStudyData;

    return (
        <div>
            {/* Page Hero Section */}
            <div className="bg-teal-700 text-white py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className="inline-block bg-teal-800 text-teal-100 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
                        {badge}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12 w-full space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-[1fr,1.2fr] gap-10 items-stretch">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Study Details</h2>
                            <ul className="space-y-5 text-slate-700">
                                {details.map((item) => (
                                    <li key={item.id} className="flex items-center gap-4">
                                        <div className="bg-teal-50 p-2.5 rounded-lg border border-teal-100">
                                            {renderDetailIcon(item.icon)}
                                        </div>
                                        <div>
                                            <strong className="block text-slate-900 font-semibold">{item.label}</strong>
                                            <span className="text-slate-600">{item.value}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="px-2 text-slate-600 leading-relaxed space-y-4">
                            {about.map((p, idx) => (
                                <p key={idx}>{p}</p>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <StudyScheduleCard title={scheduleTitle} schedule={schedule} />
                </div>
            </div>
        </div>
    );
};

export default BibleStudyPage;