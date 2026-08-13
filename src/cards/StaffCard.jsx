const StaffCard = ({ member }) => {
  // Strip any leading slash from the JSON image path so we don't end up with double slashes
  const imagePath = member.image
    ? `${import.meta.env.BASE_URL}${member.image.replace(/^\//, "")}`
    : null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition duration-300 flex items-center gap-5">
      {/* Left Column: Avatar */}
      <div className="shrink-0">
        {imagePath ? (
          <img
            src={imagePath}
            alt={`${member.name} headshot`}
            className="w-24 h-24 rounded-full object-cover border-2 border-slate-200 shadow-sm"
          />
        ) : (
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 border-2 border-slate-200">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Right Column: Details */}
      <div className="min-w-0 flex-1">
        <h4 className="text-xl font-bold text-slate-900 truncate">
          {member.name}
        </h4>
        <p className="text-teal-600 font-medium text-sm mb-3 truncate">
          {member.role}
        </p>

        <div className="space-y-1.5 text-sm text-slate-600">
          <a
            href={`mailto:${member.email}`}
            className="flex items-center gap-2 hover:text-teal-600 transition-colors"
          >
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="truncate">{member.email}</span>
          </a>
          <a
            href={`tel:${member.phoneRaw}`}
            className="flex items-center gap-2 hover:text-teal-600 transition-colors"
          >
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="truncate">{member.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
