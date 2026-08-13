import React from 'react';

const MenuCard = ({ menu }) => {
    return (
        <section className="bg-slate-900 text-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition duration-300 flex flex-col border border-slate-800">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h16zm-3-9h.01" />
                </svg>
                <h2 className="text-2xl font-bold">{menu.title}</h2>
            </div>

            <div className="flex-grow space-y-6">
                <div>
                    <h3 className="text-teal-400 font-semibold uppercase tracking-wider text-sm mb-2">
                        Main Course
                    </h3>
                    <p className="text-lg text-slate-200">{menu.mainCourse}</p>
                </div>

                <div>
                    <h3 className="text-teal-400 font-semibold uppercase tracking-wider text-sm mb-2">
                        Sides
                    </h3>
                    <ul className="text-lg text-slate-200 list-disc list-inside">
                        {menu.sides.map((side, idx) => (
                            <li key={idx}>{side}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-teal-400 font-semibold uppercase tracking-wider text-sm mb-2">
                        Dessert
                    </h3>
                    <p className="text-lg text-slate-200">{menu.dessert}</p>
                </div>

                <div>
                    <h3 className="text-teal-400 font-semibold uppercase tracking-wider text-sm mb-2">
                        Drinks
                    </h3>
                    <p className="text-lg text-slate-200">{menu.drinks}</p>
                </div>
            </div>
        </section>
    );
};

export default MenuCard;