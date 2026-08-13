const GivePage = () => {
  return (
    <div>
      {/* Page Hero Section */}
      <div className="bg-teal-700 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Give
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Partner with us in our mission to serve our community and share the
            Gospel.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-20 w-full text-center">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 md:p-16">
          <svg
            className="w-16 h-16 mx-auto text-teal-600 mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Online Giving Coming Soon
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We are currently setting up our secure online giving platform. Thank
            you for your generosity and patience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GivePage;
