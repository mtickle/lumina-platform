import React from 'react';
import sitemapData from '@data/siteMapData.json';
import SitemapSectionCard from '@cards/SitemapSectionCard';

const SitemapPage = () => {
    const { hero, sections } = sitemapData;

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section) => (
                        <SitemapSectionCard key={section.id} section={section} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SitemapPage;