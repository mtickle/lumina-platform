import React from 'react';

const NewHereCard = ({ data }) => {
    return (
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-lg transition duration-300 flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {data.title}
                </h2>
                {data.paragraphs.map((p, index) => (
                    <p key={index} className="text-slate-600 mb-6 leading-relaxed">
                        {p}
                    </p>
                ))}
            </div>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 w-full md:w-auto self-start mt-auto">
                {data.buttonText}
            </button>
        </section>
    );
};

export default NewHereCard;