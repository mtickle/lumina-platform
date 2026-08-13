import React from 'react';
import { useNavigate } from 'react-router-dom';
import mealData from '@data/mealData.json';
import MenuCard from '@cards/MenuCard';

const renderDetailIcon = (icon) => {
    switch (icon) {
        case 'clock':
            return (
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        case 'location':
            return (
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            );
        case 'currency':
        default:
            return (
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
    }
};

const MealPage = () => {
    const navigate = useNavigate();
    const { hero, intro, details, menu, volunteer } = mealData;

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
                {/* Info and Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-8 items-stretch">
                    {/* Details Section */}
                    <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-lg transition duration-300 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            {intro.title}
                        </h2>
                        {intro.paragraphs.map((p, idx) => (
                            <p key={idx} className="text-slate-600 leading-relaxed mb-6 text-lg">
                                {p}
                            </p>
                        ))}

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <ul className="space-y-4 text-slate-700">
                                {details.map((item) => (
                                    <li key={item.id} className="flex items-center gap-4">
                                        <div className="bg-teal-100 p-2 rounded-lg">
                                            {renderDetailIcon(item.icon)}
                                        </div>
                                        <div>
                                            <strong className="block text-slate-900">{item.label}</strong>
                                            <span>{item.value}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Menu Card */}
                    <MenuCard menu={menu} />
                </div>

                {/* Volunteer CTA */}
                <section className="bg-teal-50 rounded-2xl shadow-sm border border-teal-100 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-bold text-teal-900 mb-3">
                            {volunteer.title}
                        </h3>
                        <p className="text-teal-800 max-w-2xl text-lg">
                            {volunteer.description}
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('/contact')}
                        className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shrink-0 whitespace-nowrap"
                    >
                        {volunteer.buttonText}
                    </button>
                </section>
            </div>
        </div>
    );
};

export default MealPage;