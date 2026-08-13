import NextGenCard from "@cards/NextGenCard";
import nextGenData from "@data/nextGenData.json";

const NextGenPage = () => {
  const { hero, youth, childrenPrograms } = nextGenData;

  const youthImagePath = youth.image
    ? `${import.meta.env.BASE_URL}${youth.image.replace(/^\//, "")}`
    : null;

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
        {/* Youth Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center hover:shadow-lg transition duration-300">
          <div className="md:w-1/2 space-y-5">
            <div className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              {youth.badge}
            </div>
            <h2 className="text-3xl font-bold text-slate-900">{youth.title}</h2>
            <p className="text-slate-600 leading-relaxed">
              {youth.description}
            </p>

            <div className="pt-2">
              <h3 className="font-semibold text-slate-800 mb-3">
                Weekly Schedule:
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                {youth.schedule.map((item) => (
                  <li key={item.id} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-teal-600 shrink-0"
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
                    <span>
                      <strong>{item.day}:</strong> {item.activity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Placeholder */}
          {/* Image Container */}
          <div className="md:w-1/2 w-full h-72">
            {youthImagePath ? (
              <img
                src={youthImagePath}
                alt="Youth Ministry"
                className="w-full h-full object-cover rounded-xl shadow-sm border border-slate-100"
              />
            ) : (
              <div className="w-full h-full bg-slate-100 rounded-xl flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200">
                <span className="font-medium">
                  {youth.imagePlaceholderText}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* RA / GA Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {childrenPrograms.map((program) => (
            <NextGenCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextGenPage;
