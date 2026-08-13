import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Sermons", path: "/sermons" },
  { title: "Life Groups", path: "/lifegroups" },
  { title: "Ministries", path: "/ministries" },
  { title: "Contact", path: "/contact" },
  { title: "Sitemap", path: "/sitemap" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white shadow-md relative">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tight">
          Grace & Truth Fellowship
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-sm md:text-base">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              className={({ isActive }) =>
                `transition duration-200 ${
                  isActive ? "text-teal-400" : "hover:text-teal-400"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}

          {/* The Distinct "Give" Button */}
          <Link
            to="/give"
            className="bg-teal-700 hover:bg-teal-600 text-white px-5 py-2 rounded-lg font-bold transition duration-200 shadow-sm"
          >
            Give
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none hover:text-teal-400 transition-colors"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 absolute w-full z-50 shadow-xl">
          <nav className="flex flex-col px-6 py-5 space-y-4 font-medium text-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-teal-400"
                    : "hover:text-teal-400 transition duration-200"
                }
              >
                {link.title}
              </NavLink>
            ))}

            {/* Mobile "Give" Button */}
            <Link
              to="/give"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-teal-700 hover:bg-teal-600 text-white text-center px-4 py-3 rounded-lg font-bold transition duration-200 mt-2"
            >
              Give
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
