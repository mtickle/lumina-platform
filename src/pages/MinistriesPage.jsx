import React from 'react';
import ministriesData from '@data/ministriesData.json';
import MinistryCard from '@cards/MinistryCard';

const MinistriesPage = () => {
    return (
        <div>
            {/* Page Hero Section */}
            <div className="bg-teal-700 text-white py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        {ministriesData.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
                        {ministriesData.hero.description}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12 w-full space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ministriesData.ministries.map((ministry) => (
                        <MinistryCard key={ministry.id} ministry={ministry} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MinistriesPage;