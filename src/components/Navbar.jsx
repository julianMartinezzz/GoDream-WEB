import React from 'react';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-godream-orange rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-orange-200">
                        G
                    </div>
                    <span className="text-2xl font-black text-slate-900 tracking-tight">
                        GoDream
                    </span>
                </div>

                {/* Enlaces de Navegación */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#beneficios" className="text-slate-600 font-medium hover:text-godream-orange transition-colors">
                        Beneficios
                    </a>
                    <a href="#planes" className="text-slate-600 font-medium hover:text-godream-orange transition-colors">
                        Planes
                    </a>
                    <a href="#contacto" className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-godream-orange hover:scale-105 transition-all active:scale-95 shadow-md">
                        Contratar Ahora
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;