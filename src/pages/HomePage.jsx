import React from 'react';
import homeData from '@data/homeData.json';
import NewHereCard from '@/cards/NewHereCard';
import ChurchNews from '@components/ChurchNews';
import UpcomingEvents from '@components/UpcomingEvents';
import AboutCommunity from '@components/AboutCommunity';

const HomePage = () => {
    return (
        <div>
            {/* Page Hero Section */}
            <div className="bg-teal-700 text-white py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Welcome Home
                    </h1>
                    <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
                        Faith in action. Discover the many ways we are serving our community,
                        supporting one another, and sharing God's love.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12 w-full">
                {/* Top Grid: Left Side (New Here & News) & Right Side (Upcoming Events) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-stretch">
                    <div className="flex flex-col gap-8 h-full">
                        <NewHereCard data={homeData.newHere} />
                        <ChurchNews newsItems={homeData.news} />
                    </div>

                    <div>
                        <UpcomingEvents
                            recurringEvents={homeData.recurringEvents}
                            specialEvents={homeData.specialEvents}
                        />
                    </div>
                </div>

                {/* Bottom Block: About Community */}
                <AboutCommunity data={homeData.about} />
            </div>
        </div>
    );
};

export default HomePage;