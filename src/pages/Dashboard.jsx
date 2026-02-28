export default function Dashboard() {
    const stats = [
        { label: 'Leads totales', value: '47', trend: '+12%', color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Ventas del mes', value: '14', trend: '+8%', color: 'text-orange-600', bg: 'bg-orange-50' },
        { label: 'Ingresos', value: '$567', trend: '+15%', color: 'text-green-600', bg: 'bg-green-50' },
        { label: 'Comisiones', value: '$106', trend: '-3%', color: 'text-red-600', bg: 'bg-red-50' },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header del Dashboard */}
            <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="bg-orange-600 p-1.5 rounded-lg text-white">📶</div>
                    <span className="font-bold text-slate-800">GoDream <span className="text-slate-400 font-normal">Admin</span></span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <p className="text-sm font-bold text-slate-800">Carlos Mendoza</p>
                        <p className="text-xs text-slate-400">Admin</p>
                    </div>
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">C</div>
                </div>
            </header>

            <main className="p-8 max-w-7xl mx-auto space-y-8">
                {/* Navegación interna */}
                <div className="flex gap-4 bg-slate-100 p-1 rounded-xl w-fit">
                    <button className="bg-white px-6 py-2 rounded-lg shadow-sm font-bold text-slate-800">Dashboard</button>
                    <button className="px-6 py-2 text-slate-500 font-medium hover:text-slate-800">Leads</button>
                    <button className="px-6 py-2 text-slate-500 font-medium hover:text-slate-800">Ventas</button>
                </div>

                {/* Tarjetas de estadísticas */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`${stat.bg} p-3 rounded-2xl`}>📊</div>
                                <span className={`text-xs font-bold ${stat.color}`}>{stat.trend}</span>
                            </div>
                            <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                            <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Sección de Leads Recientes */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                        <h3 className="font-bold text-slate-800 text-lg">Leads recientes</h3>
                        <button className="text-orange-600 text-sm font-bold">Ver todos</button>
                    </div>
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-400 uppercase text-[10px] tracking-widest">
                        <tr>
                            <th className="px-6 py-4">Nombre</th>
                            <th className="px-6 py-4">Plan</th>
                            <th className="px-6 py-4">Estado</th>
                            <th className="px-6 py-4">Fecha</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                        <tr className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                                <p className="font-bold text-slate-800">María López</p>
                                <p className="text-xs text-slate-400">maria@email.com</p>
                            </td>
                            <td className="px-6 py-4 font-medium text-slate-600">1 Gbps</td>
                            <td className="px-6 py-4"><span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">Nuevo</span></td>
                            <td className="px-6 py-4 text-slate-400">2026-02-28</td>
                        </tr>
                        {/* Aquí podrías mapear más filas siguiendo tu diseño */}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}