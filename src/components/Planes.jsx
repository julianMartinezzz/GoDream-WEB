const PLANES_DATA = [
    {
        nombre: 'Plan Esencial',
        velocidad: '500 Mbps',
        caracteristicas: ['WI-FI 6 Incluido', 'Fibra Óptica Simétrica', 'Soporte 24/7'],
        precios: { e13: '$59.900', e46: '$69.900' },
        destacado: false
    },
    {
        nombre: 'Plan Ultra Giga',
        velocidad: '1 Giga',
        caracteristicas: ['WI-FI 6 Premium', 'Máxima Velocidad', 'Prioridad de Red'],
        precios: { e13: '$79.900', e46: '$99.900' },
        destacado: true
    }
];

export default function Planes() {
    return (
        <section className="py-12 px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {PLANES_DATA.map((plan) => (
                    <div
                        key={plan.nombre}
                        className={`relative bg-white p-8 rounded-[32px] border-2 transition-all hover:shadow-2xl ${
                            plan.destacado ? 'border-godream-orange scale-105 z-10' : 'border-slate-100'
                        }`}
                    >
                        {plan.destacado && (
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-godream-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                Más Popular
              </span>
                        )}

                        <h3 className="text-2xl font-bold text-slate-800">{plan.nombre}</h3>
                        <p className="text-5xl font-black text-slate-900 my-4">{plan.velocidad}</p>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                <span className="text-sm font-medium text-slate-500">Estratos 1 al 3</span>
                                <span className="text-xl font-bold text-godream-orange">{plan.precios.e13}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                <span className="text-sm font-medium text-slate-500">Estratos 4 al 6</span>
                                <span className="text-xl font-bold text-slate-700">{plan.precios.e46}</span>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {plan.caracteristicas.map(item => (
                                <li key={item} className="flex items-center gap-2 text-slate-600">
                                    <span className="text-green-500">✓</span> {item}
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-colors ${
                            plan.destacado
                                ? 'bg-godream-orange text-white hover:bg-orange-600'
                                : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}>
                            Contratar ahora
                        </button>
                    </div>
                ))}
            </div>
            <p className="text-center text-gray-400 mt-8 text-sm italic">
                * Sujeto a cobertura y disponibilidad técnica.
            </p>
        </section>
    );
}