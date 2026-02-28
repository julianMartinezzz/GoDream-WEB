import React, { useState } from 'react';
import { UserPlus, Award, Trash2 } from 'lucide-react';
import Sidebar from './Sidebar';

const Equipo = () => {
    const [empleados, setEmpleados] = useState([
        { id: 1, nombre: "Carlos Ruiz", ventas: 12, meta: 20, cargo: "Asesor Senior" },
        { id: 2, nombre: "Ana Beltrán", ventas: 18, meta: 20, cargo: "Asesor Premium" },
        { id: 3, nombre: "Luis Pérez", ventas: 5, meta: 20, cargo: "Junior" },
    ]);

    const [nuevoNombre, setNuevoNombre] = useState('');

    const agregarEmpleado = () => {
        if (!nuevoNombre) return;
        const nuevo = {
            id: Date.now(),
            nombre: nuevoNombre,
            ventas: 0,
            meta: 20,
            cargo: "Asesor"
        };
        setEmpleados([...empleados, nuevo]);
        setNuevoNombre('');
    };

    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            <Sidebar />

            <main className="flex-1 ml-64 p-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Mi Equipo GoDream</h1>
                            <p className="text-slate-500 font-medium">Monitoreo de rendimiento comercial</p>
                        </div>

                        <div className="flex gap-2 bg-white p-2 rounded-3xl shadow-sm border border-slate-100">
                            <input
                                type="text"
                                placeholder="Nuevo asesor..."
                                className="bg-transparent pl-4 outline-none text-slate-700 w-48 md:w-64"
                                value={nuevoNombre}
                                onChange={(e) => setNuevoNombre(e.target.value)}
                            />
                            <button
                                onClick={agregarEmpleado}
                                className="bg-godream-orange text-white p-3 rounded-2xl hover:scale-105 transition-all shadow-lg"
                            >
                                <UserPlus className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {empleados.map((emp) => {
                            const porcentaje = (emp.ventas / emp.meta) * 100;
                            return (
                                <div key={emp.id} className="bg-white rounded-[40px] p-8 shadow-xl border border-slate-50 relative overflow-hidden group hover:-translate-y-2 transition-all">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-2xl font-black">
                                                {emp.nombre.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-black text-slate-900">{emp.nombre}</h3>
                                                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-lg uppercase">
                                                    {emp.cargo}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="text-slate-400 text-xs font-bold uppercase mb-1">Ventas Mes</p>
                                                    <p className="text-4xl font-black text-slate-900">{emp.ventas} <span className="text-lg text-slate-300">/ {emp.meta}</span></p>
                                                </div>
                                                <div className={`p-3 rounded-2xl ${porcentaje >= 80 ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                                                    <Award className="w-6 h-6" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs font-black text-slate-400">
                                                    <span>PROGRESO META</span>
                                                    <span>{Math.round(porcentaje)}%</span>
                                                </div>
                                                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-godream-orange transition-all duration-1000"
                                                        style={{ width: `${porcentaje}%` }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="pt-4 border-t border-slate-50 flex gap-2">
                                                <button className="flex-1 bg-slate-50 text-slate-600 py-3 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all text-sm">
                                                    Ver Detalle
                                                </button>
                                                <button onClick={() => setEmpleados(empleados.filter(e => e.id !== emp.id))} className="p-3 text-red-400 hover:bg-red-50 rounded-xl transition-all">
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Equipo;