import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [leadsReales, setLeadsReales] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [actualizando, setActualizando] = useState(false);
    const navigate = useNavigate();

    // Función para obtener leads del Backend de Java
    const obtenerLeads = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/leads");
            if (!response.ok) throw new Error("Error en el servidor");
            const data = await response.json();
            setLeadsReales(data.sort((a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion)));
        } catch (error) {
            console.error("Error cargando leads:", error);
        } finally {
            setCargando(false);
            setActualizando(false);
        }
    };

    useEffect(() => {
        obtenerLeads();
    }, []);

    const handleRefresh = () => {
        setActualizando(true);
        obtenerLeads();
    };

    const handleLogout = () => navigate('/login');

    // Datos para gráficas
    const dataPlanes = [
        { name: '500 Mbps', value: leadsReales.filter(l => l.plan === '500 Mbps').length || 1 },
        { name: '1 Gbps', value: leadsReales.filter(l => l.plan === '1 Gbps').length || 1 }
    ];
    const COLORS = ['#FDBA74', '#EA580C'];

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans pb-12 text-slate-900">
            {/* HEADER */}
            <header className="bg-white border-b border-slate-100 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="bg-orange-600 p-2 rounded-xl text-white shadow-lg shadow-orange-100">📶</div>
                    <div>
                        <span className="font-black text-slate-900 text-lg">GoDream</span>
                        <span className="text-slate-400 text-sm ml-2 font-medium">Admin</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-slate-800 leading-tight">Carlos Mendoza</p>
                            <p className="text-[11px] text-slate-400 font-medium">Admin</p>
                        </div>
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-sm">C</div>
                    </div>
                    <button onClick={handleLogout} className="text-slate-400 hover:text-orange-600 p-2 hover:bg-orange-50 rounded-xl transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-8 py-8 space-y-8">
                {/* NAVEGACIÓN */}
                <div className="flex gap-2 bg-slate-200/50 p-1.5 rounded-2xl w-fit">
                    {['Dashboard', 'Leads', 'Ventas', 'Comisiones'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* VISTA PRINCIPAL: DASHBOARD */}
                {activeTab === 'Dashboard' && (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <StatCard label="Leads totales" val={leadsReales.length} icon="👥" color="text-green-500" trend="+100%" />
                            <StatCard label="Ventas mes" val="0" icon="📈" color="text-slate-300" trend="0%" />
                            <StatCard label="Ingresos" val="$0" icon="💰" color="text-slate-300" trend="0%" />
                            <StatCard label="Comisiones" val="$0" icon="🔸" color="text-slate-300" trend="0%" />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
                                <h3 className="font-black text-slate-800 mb-8 text-xl">Actividad de Leads</h3>
                                <div className="h-72">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={[{name: 'Leads', v: leadsReales.length}]}>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                            <YAxis axisLine={false} tickLine={false} />
                                            <Bar dataKey="v" fill="#EA580C" radius={[8, 8, 0, 0]} barSize={60} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
                                <h3 className="font-black text-slate-800 mb-8 text-xl">Planes de Interés</h3>
                                <div className="h-64">
                                    <ResponsiveContainer>
                                        <PieChart>
                                            <Pie data={dataPlanes} innerRadius={70} outerRadius={90} dataKey="value" stroke="none">
                                                {dataPlanes.map((e, i) => <Cell key={i} fill={COLORS[i]} />)}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* VISTA LEADS */}
                {activeTab === 'Leads' && (
                    <div className="space-y-6 animate-in slide-in-from-bottom-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-black">Potenciales Clientes</h2>
                            <button
                                onClick={handleRefresh}
                                disabled={actualizando}
                                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm disabled:opacity-50"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-4 h-4 ${actualizando ? 'animate-spin' : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                {actualizando ? 'Actualizando...' : 'Actualizar'}
                            </button>
                        </div>

                        <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50/50 text-slate-400 text-[10px] uppercase font-black border-b border-slate-50">
                                <tr>
                                    <th className="px-8 py-5">Contacto</th>
                                    <th className="px-8 py-5">Teléfono</th>
                                    <th className="px-8 py-5">Plan</th>
                                    <th className="px-8 py-5">Estado</th>
                                    <th className="px-8 py-5 text-right">Acción</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                {cargando ? (
                                    <tr><td colSpan="5" className="px-8 py-10 text-center text-slate-400 font-bold">Cargando datos...</td></tr>
                                ) : leadsReales.length === 0 ? (
                                    <tr><td colSpan="5" className="px-8 py-10 text-center text-slate-400 font-bold">No hay registros aún.</td></tr>
                                ) : (
                                    leadsReales.map((lead) => (
                                        <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-8 py-5">
                                                <p className="font-bold text-slate-800">{lead.nombre}</p>
                                                <p className="text-xs text-slate-400">{lead.email}</p>
                                            </td>
                                            <td className="px-8 py-5 text-slate-500 font-medium">{lead.telefono}</td>
                                            <td className="px-8 py-5 font-bold text-slate-600">{lead.plan}</td>
                                            <td className="px-8 py-5">
                          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase">
                            {lead.estado || 'Nuevo'}
                          </span>
                                            </td>
                                            <td className="px-8 py-5 text-right text-lg">📞 ✉️</td>
                                        </tr>
                                    ))
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* VISTAS VACÍAS (VENTAS/COMISIONES) */}
                {(activeTab === 'Ventas' || activeTab === 'Comisiones') && (
                    <div className="bg-white p-20 rounded-[40px] text-center border border-dashed border-slate-200">
                        <p className="text-slate-400 font-bold italic">Módulo de {activeTab} en desarrollo...</p>
                    </div>
                )}
            </main>
        </div>
    );
}

const StatCard = ({ label, val, icon, color, trend }) => (
    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <span className="text-2xl p-2 bg-slate-50 rounded-xl">{icon}</span>
            <span className={`text-[10px] font-black ${color}`}>{trend}</span>
        </div>
        <p className="text-3xl font-black">{val}</p>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{label}</p>
    </div>
);