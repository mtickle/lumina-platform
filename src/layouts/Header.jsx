import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/sermons', label: 'Sermons' },
        { path: '/lifegroups', label: 'Life Groups' },
        { path: '/ministries', label: 'Ministries' },
        { path: '/contact', label: 'Contact' },
    ];

    const getLinkClass = ({ isActive }) =>
        `transition duration-200 ${isActive ? 'text-teal-400 font-bold' : 'hover:text-teal-400'
        }`;

    return (
        <header className="bg-slate-900 text-white shadow-md relative">
            <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
                <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tight hover:text-slate-100">
                    Grace & Truth Fellowship
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 font-medium text-sm md:text-base">
                    {navItems.map((item) => (
                        <NavLink key={item.path} to={item.path} className={getLinkClass}>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="md:hidden focus:outline-none hover:text-teal-400 transition-colors"
                >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileOpen && (
                <div className="md:hidden bg-slate-800 border-t border-slate-700 absolute w-full z-50 shadow-xl">
                    <nav className="flex flex-col px-6 py-5 space-y-4 font-medium text-lg">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMobileOpen(false)}
                                className={getLinkClass}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;