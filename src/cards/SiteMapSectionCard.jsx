import React from 'react';
import { Link } from 'react-router-dom';

const renderIcon = (type) => {
    switch (type) {
        case 'home':
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            );
        case 'play':
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        case 'users':
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            );
        case 'heart':
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            );
        case 'mail':
        default:
            return (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            );
    }
};

const SitemapSectionCard = ({ section }) => {
    return (
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="bg-slate-100 p-2.5 rounded-lg text-slate-700">
                    {renderIcon(section.iconType)}
                </div>
                <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
            </div>

            <ul className="space-y-3 text-slate-600 font-medium">
                {section.links.map((link, idx) => (
                    <li key={idx}>
                        <Link
                            to={link.path}
                            className="flex items-center gap-2 hover:text-teal-600 transition-colors"
                        >
                            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                            {link.title}
                        </Link>
                        {link.subItems && (
                            <ul className="ml-5 mt-2 space-y-2 text-sm text-slate-500 font-normal">
                                {link.subItems.map((sub, subIdx) => (
                                    <li key={subIdx}>- {sub}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SitemapSectionCard;