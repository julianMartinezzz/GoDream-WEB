import React from 'react';

const Hero = () => {
    return (
        <section className="py-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
                <div className="inline-block px-4 py-1.5 bg-orange-50 border border-orange-100 rounded-full">
                    <span className="text-godream-orange font-bold text-sm uppercase tracking-wider">
                        ⚡ Conectividad Ultra Veloz
                    </span>
                </div>

                <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[1.1]">
                    Internet que <br />
                    <span className="text-godream-orange">vuela contigo</span>
                </h1>

                <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
                    Experimenta la fibra óptica más estable del mercado. Sin caídas, sin lag, solo velocidad pura para tu hogar.
                </p>

                <div className="flex flex-wrap gap-4">
                    {/* Botón Principal: Salta a Planes */}
                    <a href="#planes"
                       className="bg-godream-orange text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-1 transition-all active:scale-95">
                        Ver Planes Disponibles
                    </a>

                    {/* Botón Secundario: Salta a Contacto */}
                    <a href="#contacto"
                       className="bg-white text-slate-900 border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold text-lg hover:border-orange-200 transition-all active:scale-95">
                        Hablar con Ventas
                    </a>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-400 font-medium">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                        ))}
                    </div>
                    <span>+2,000 familias ya confían en nosotros</span>
                </div>
            </div>

            <div className="flex-1 relative">
                <div className="w-full aspect-square bg-gradient-to-br from-orange-100 to-orange-50 rounded-[60px] relative overflow-hidden">
                    {/* Aquí iría tu imagen principal */}
                    <div className="absolute inset-0 flex items-center justify-center text-orange-200 font-black text-9xl select-none">
                        WIFI 6
                    </div>
                </div>

                {/* Badge flotante decorativo */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-orange-50 animate-bounce-slow">
                    <p className="text-3xl font-black text-slate-900">100%</p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Fibra Óptica</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;