import React, { useEffect, useState } from 'react';
import { Users, RefreshCw, Search, CheckCircle2, Clock, Trash2, X, Save, FileDown } from 'lucide-react';
import * as XLSX from 'xlsx';
import Sidebar from '../components/admin/Sidebar';
import Stats from '../components/admin/Stats';

const Admin = () => {
    const [leads, setLeads] = useState([]);
    const [filteredLeads, setFilteredLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filtroPlan, setFiltroPlan] = useState('Todos');

    const [leadSeleccionado, setLeadSeleccionado] = useState(null);
    const [notaTemporal, setNotaTemporal] = useState('');

    const fetchLeads = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8080/api/leads');
            const data = await response.json();
            const sortedData = [...data].reverse();
            setLeads(sortedData);
        } catch (error) {
            console.error("Error cargando leads:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchLeads(); }, []);

    useEffect(() => {
        let results = leads.filter(lead =>
            lead.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.telefono.includes(searchTerm)
        );
        if (filtroPlan !== 'Todos') {
            results = results.filter(lead => lead.plan.includes(filtroPlan));
        }
        setFilteredLeads(results);
    }, [searchTerm, leads, filtroPlan]);

    const eliminarLead = async (id) => {
        if (!window.confirm("¿Estás seguro de eliminar este lead?")) return;
        try {
            const response = await fetch(`http://localhost:8080/api/leads/${id}`, { method: 'DELETE' });
            if (response.ok) {
                setLeads(leads.filter(lead => lead.id !== id));
                if (leadSeleccionado?.id === id) setLeadSeleccionado(null);
            }
        } catch (error) {
            alert("Error al eliminar.");
        }
    };

    const guardarNotas = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/leads/${leadSeleccionado.id}/notas`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ notas: notaTemporal })
            });
            if (response.ok) {
                setLeads(leads.map(l => l.id === leadSeleccionado.id ? { ...l, notas: notaTemporal } : l));
                alert("Nota guardada correctamente");
            }
        } catch (error) {
            alert("Error al guardar nota.");
        }
    };

    const exportarExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(filteredLeads);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");
        XLSX.writeFile(workbook, "Leads_GoDream.xlsx");
    };

    const toggleEstado = async (id, estadoActual) => {
        const nuevoEstado = estadoActual === 'CONTESTADO' ? 'NUEVO' : 'CONTESTADO';
        try {
            const response = await fetch(`http://localhost:8080/api/leads/${id}/estado`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ estado: nuevoEstado })
            });
            if (response.ok) {
                setLeads(leads.map(lead => lead.id === id ? { ...lead, estado: nuevoEstado } : lead));
            }
        } catch (error) {
            alert("Error al cambiar estado.");
        }
    };

    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            <Sidebar />

            <main className={`flex-1 ml-64 p-10 transition-all duration-500 ${leadSeleccionado ? 'pr-[420px] opacity-50 pointer-events-none' : ''}`}>
                <div className="max-w-7xl mx-auto">
                    <Stats />

                    <div className="flex flex-col md:flex-row justify-between items-center my-10 gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-godream-orange rounded-3xl shadow-lg shadow-orange-200">
                                <Users className="text-white w-8 h-8" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-black text-slate-900">Panel de Leads</h1>
                                <p className="text-slate-500 font-medium">Gestión de prospectos entrantes</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto">
                            <button onClick={exportarExcel} className="p-4 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-all shadow-md">
                                <FileDown className="w-5 h-5" />
                            </button>
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Buscar cliente..."
                                    className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl outline-none shadow-sm"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100">
                        <table className="w-full text-left">
                            <thead className="bg-slate-900 text-slate-400 text-[11px] uppercase tracking-widest font-black">
                            <tr>
                                <th className="p-8">Estado</th>
                                <th className="p-8">Cliente</th>
                                <th className="p-8">Plan</th>
                                <th className="p-8 text-center">Acciones</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                            {filteredLeads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => { setLeadSeleccionado(lead); setNotaTemporal(lead.notas || ''); }}>
                                    <td className="p-8">
                                        <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-black text-[10px] w-fit ${lead.estado === 'CONTESTADO' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                            {lead.estado === 'CONTESTADO' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                                            {lead.estado}
                                        </div>
                                    </td>
                                    <td className="p-8">
                                        <div className="font-black text-slate-900">{lead.nombre}</div>
                                        <div className="text-slate-400 text-sm">{lead.telefono}</div>
                                    </td>
                                    <td className="p-8">
                                        <div className="font-bold text-slate-700">{lead.plan}</div>
                                        <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-black text-slate-500">ESTRATO {lead.estrato}</span>
                                    </td>
                                    <td className="p-8 flex justify-center gap-3" onClick={(e) => e.stopPropagation()}>
                                        <button onClick={() => toggleEstado(lead.id, lead.estado)} className="p-3 bg-white border rounded-xl hover:border-orange-500 transition-all text-slate-400 hover:text-orange-500">
                                            <RefreshCw className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => eliminarLead(lead.id)} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* PANEL DE NOTAS */}
            <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-500 ${leadSeleccionado ? 'translate-x-0' : 'translate-x-full'}`}>
                {leadSeleccionado && (
                    <div className="p-8 h-full flex flex-col">
                        <div className="flex justify-between mb-8">
                            <h2 className="text-2xl font-black">{leadSeleccionado.nombre}</h2>
                            <button onClick={() => setLeadSeleccionado(null)} className="p-2 bg-slate-100 rounded-full"><X /></button>
                        </div>
                        <div className="flex-1 space-y-6">
                            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 text-sm space-y-2">
                                <p><strong>Email:</strong> {leadSeleccionado.email}</p>
                                <p><strong>Plan:</strong> {leadSeleccionado.plan}</p>
                            </div>
                            <textarea
                                className="w-full h-64 p-4 bg-slate-50 rounded-3xl outline-none focus:ring-2 focus:ring-orange-200 resize-none"
                                placeholder="Notas de seguimiento..."
                                value={notaTemporal}
                                onChange={(e) => setNotaTemporal(e.target.value)}
                            />
                        </div>
                        <button onClick={guardarNotas} className="mt-6 w-full bg-godream-orange text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2">
                            <Save /> GUARDAR NOTAS
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;