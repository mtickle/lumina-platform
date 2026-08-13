import React from 'react';
import sermonsData from '@data/sermonsData.json';
import FeaturedSermon from '@components/FeaturedSermon';
import SermonCard from '@/cards/SermonCard';

const SermonsPage = () => {
    return (
        <div>
            {/* Hero Banner */}
            <div className="bg-teal-700 text-white py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        {sermonsData.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
                        {sermonsData.hero.description}
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-6xl mx-auto px-6 py-12 w-full space-y-16">
                <FeaturedSermon sermon={sermonsData.featuredSermon} />

                {/* Sermon Archive Section */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-8 bg-slate-300 rounded-full"></div>
                        <h2 className="text-2xl font-bold text-slate-900">Recent Messages</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sermonsData.recentSermons.map((sermon) => (
                            <SermonCard key={sermon.id} sermon={sermon} />
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <button className="bg-white border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold py-3 px-8 rounded-lg transition duration-200">
                            Load More Sermons
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SermonsPage;