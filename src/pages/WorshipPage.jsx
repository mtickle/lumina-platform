import worshipData from "@data/worshipData.json";

const WorshipPage = () => {
  const { hero, experience, childrensChurch } = worshipData;

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
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-10 items-start">
          {/* Left Column: The Experience */}
          <div className="space-y-8">
            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10 hover:shadow-lg transition duration-300">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {experience.title}
              </h2>

              <div className="text-slate-600 space-y-5 text-lg leading-relaxed">
                {experience.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
                <div className="bg-teal-50 p-3 rounded-xl">
                  <svg
                    className="w-6 h-6 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    {experience.duration.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">
                    {experience.duration.text}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Children's Church Box */}
          <aside>
            <section className="bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-800 p-8 relative overflow-hidden">
              {/* Decorative Icon Background */}
              <svg
                className="absolute -right-4 -top-4 w-32 h-32 text-slate-800 opacity-50 pointer-events-none"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                  <div className="bg-teal-500 p-2 rounded-lg text-slate-900">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">
                    {childrensChurch.title}
                  </h2>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {childrensChurch.intro}
                </p>

                <div className="space-y-5">
                  {childrensChurch.steps.map((step, index) => (
                    <div key={step.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-slate-900 font-bold text-xs shrink-0">
                          {step.id}
                        </div>
                        {/* Only render the connecting line if it's not the last item */}
                        {index !== childrensChurch.steps.length - 1 && (
                          <div className="w-0.5 h-full bg-slate-700 my-1"></div>
                        )}
                      </div>
                      <div className="pb-2">
                        <h4 className="font-bold text-teal-400">
                          {step.title}
                        </h4>
                        <p className="text-sm text-slate-400 mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default WorshipPage;
