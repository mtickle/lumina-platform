import React from 'react';
import musicData from '@data/musicData.json';
import MusicGroupCard from '@cards/MusicGroupCard';

const MusicPage = () => {
    const { hero, groups, cta } = musicData;

    return (
        <div>
            {/* Page Hero Section */}
            <div className="bg-teal-700 text-white py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        {hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
                        {hero.description}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12 w-full space-y-12">
                {/* Two-Column Grid for Praise Team and Choir */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {groups.map((group) => (
                        <MusicGroupCard key={group.id} group={group} />
                    ))}
                </div>

                {/* Call-to-Action Box */}
                <section className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden relative">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-teal-800 opacity-20 blur-3xl pointer-events-none"></div>

                    <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                        <div className="text-center md:text-left md:max-w-2xl">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                {cta.title}
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                {cta.description}{' '}
                                <strong className="text-white">{cta.emphasis}</strong>{' '}
                                {cta.details}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {cta.schedules.map((sched, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-slate-800 bg-opacity-50 rounded-lg p-4 border border-slate-700 text-left"
                                    >
                                        <h3 className="text-teal-400 font-bold uppercase text-xs tracking-wider mb-1">
                                            {sched.title}
                                        </h3>
                                        <p className="text-slate-300 text-sm whitespace-pre-line">
                                            {sched.info}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="shrink-0 w-full md:w-auto">
                            <a
                                href={`mailto:${cta.contactEmail}`}
                                className="block w-full md:w-auto bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 text-center"
                            >
                                {cta.buttonText}
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MusicPage;