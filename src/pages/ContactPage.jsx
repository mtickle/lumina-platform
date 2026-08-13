import React from 'react';
import contactData from '@data/contactData.json';
import StaffCard from '@cards/StaffCard';

const ContactPage = () => {
    const { office, staff, hero } = contactData;

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
                {/* General Office Info Card */}
                <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10 flex flex-col md:flex-row gap-8 justify-between items-center hover:shadow-lg transition duration-300">
                    <div className="flex items-center gap-6">
                        <div className="bg-slate-100 p-4 rounded-full">
                            <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">{office.title}</h2>
                            <p className="text-slate-600 mt-1">{office.address}</p>
                            <div className="flex gap-4 mt-2 text-sm font-medium text-slate-700">
                                <a href={`tel:${office.phoneRaw}`} className="hover:text-teal-600 transition-colors">
                                    {office.phone}
                                </a>
                                <span className="text-slate-300">|</span>
                                <a href={`mailto:${office.email}`} className="hover:text-teal-600 transition-colors">
                                    {office.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Office Hours */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:min-w-[250px] text-center md:text-left">
                        <h3 className="font-bold text-slate-800 uppercase tracking-wide text-sm mb-2">
                            Office Hours
                        </h3>
                        <ul className="text-slate-600 space-y-1 text-sm">
                            {office.hours.map((item, idx) => (
                                <li
                                    key={idx}
                                    className={`flex justify-between ${item.highlight ? 'text-teal-700 font-medium pt-1' : ''
                                        }`}
                                >
                                    <span>{item.days}</span> <span>{item.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Staff Directory Grid */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-3">
                        Ministry Leaders & Staff
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {staff.map((member) => (
                            <StaffCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;