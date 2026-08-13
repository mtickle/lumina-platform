import React from 'react';
import lifeGroupsData from '@data/lifeGroupsData.json';
import LifeGroupCard from '@cards/LifeGroupCard';

const LifeGroupsPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-teal-700 text-white py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        {lifeGroupsData.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
                        {lifeGroupsData.hero.description}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12 w-full space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {lifeGroupsData.groups.map((group) => (
                        <LifeGroupCard key={group.id} group={group} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LifeGroupsPage;