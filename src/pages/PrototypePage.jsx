import React from 'react';
import prototypeData from '@data/prototypeData.json';

const PrototypePage = () => {
    const { hero, sections } = prototypeData;

    return (
        <div>
            {/* Page Hero Section */}
            <div className="bg-teal-700 text-white py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        {hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {hero.description}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 w-full space-y-12">
                {sections.map((section, idx) => (
                    <div key={idx}>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">
                            {section.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {section.items.map((item, itemIdx) => (
                                <div
                                    key={itemIdx}
                                    className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition duration-300"
                                >
                                    <h3 className="text-lg font-bold text-teal-700 mb-2">
                                        {item.name}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="bg-teal-50 rounded-xl p-8 border border-teal-100 text-center mt-12">
                    <h3 className="text-xl font-bold text-teal-900 mb-3">Future Roadmap</h3>
                    <p className="text-teal-800 leading-relaxed max-w-2xl mx-auto">
                        While structural content remains static for optimal performance, future phases will introduce Supabase to handle dynamic, user-driven data like secure event registration and backend administrative tools.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrototypePage;