import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-auto">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <p>&copy; {currentYear} Grace & Truth Fellowship. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link to="/privacy" className="hover:text-white transition duration-200">
                        Privacy Policy
                    </Link>
                    <Link to="/terms" className="hover:text-white transition duration-200">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;