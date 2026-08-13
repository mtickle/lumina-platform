import React from 'react';

const AboutCommunity = ({ data }) => {
    return (
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 hover:shadow-lg transition duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Column: Graphic */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={data.imageSrc}
                        alt="Our Mission"
                        className="w-full max-w-sm h-auto object-contain"
                    />
                </div>

                {/* Right Column: Text */}
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center md:text-left">
                        {data.title}
                    </h2>
                    <div className="text-slate-600 space-y-5 text-center md:text-left text-lg leading-relaxed">
                        {data.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCommunity;