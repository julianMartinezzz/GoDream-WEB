import React, { useState } from 'react';

const Planes = ({ alSeleccionarPlan }) => {
    // Estado para controlar el grupo de estratos (true = 1 a 3, false = 4 a 6)
    const [esEstratoBajo, setEsEstratoBajo] = useState(true);

    const planes = [
        {
            id: 1,
            nombre: "Plan Esencial - 500 Mbps",
            precioBajo: "59.900",
            precioAlto: "69.900",
            caracteristicas: ["Fibra Óptica Simétrica", "Wi-Fi 6", "Instalación Incluida"]
        },
        {
            id: 2,
            nombre: "Plan Pro - 1 Gbps", // He ajustado este a 1 Gbps para diferenciarlo
            precioBajo: "79.900",
            precioAlto: "89.900",
            caracteristicas: ["Fibra Óptica Simétrica", "Wi-Fi 6 Plus", "Soporte Premium 24/7"]
        }
    ];

    return (
        <div className="space-y-12">
            {/* Selector de Estrato */}
            <div className="flex justify-center items-center gap-4 bg-orange-50 p-2 rounded-2xl w-fit mx-auto border border-orange-100">
                <button
                    onClick={() => setEsEstratoBajo(true)}
                    className={`px-6 py-2 rounded-xl font-bold transition-all ${esEstratoBajo ? 'bg-godream-orange text-white shadow-md' : 'text-slate-500 hover:text-orange-600'}`}
                >
                    Estratos 1 - 3
                </button>
                <button
                    onClick={() => setEsEstratoBajo(false)}
                    className={`px-6 py-2 rounded-xl font-bold transition-all ${!esEstratoBajo ? 'bg-godream-orange text-white shadow-md' : 'text-slate-500 hover:text-orange-600'}`}
                >
                    Estratos 4 - 6
                </button>
            </div>

            {/* Tarjetas de Planes */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {planes.map((plan) => (
                    <div key={plan.id} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-2xl hover:border-orange-200 transition-all group">
                        <h3 className="text-2xl font-black text-slate-900 mb-4">{plan.nombre}</h3>
                        <div className="mb-6">
                            <span className="text-5xl font-black text-slate-900">
                                ${esEstratoBajo ? plan.precioBajo : plan.precioAlto}
                            </span>
                            <span className="text-slate-400 font-medium"> /mes</span>
                        </div>
                        <ul className="space-y-4 mb-10">
                            {plan.caracteristicas.map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-slate-600">
                                    <span className="text-green-500 text-xl">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#contacto"
                            onClick={() => alSeleccionarPlan(`${plan.nombre} (Estrato ${esEstratoBajo ? '1-3' : '4-6'})`)}
                            className="block text-center bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg group-hover:bg-godream-orange transition-colors"
                        >
                            Elegir este plan
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Planes;