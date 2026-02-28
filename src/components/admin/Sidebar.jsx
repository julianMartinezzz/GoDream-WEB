import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, LayoutDashboard, UserCircle, LogOut, TrendingUp } from 'lucide-react';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { path: '/admin', icon: <LayoutDashboard />, label: 'Leads (Prospectos)' },
        { path: '/admin/equipo', icon: <Users />, label: 'Mi Equipo' },
    ];

    return (
        <div className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white p-6 flex flex-col z-50">
            <div className="flex items-center gap-3 mb-12 px-2">
                <div className="w-10 h-10 bg-godream-orange rounded-xl flex items-center justify-center font-black">GD</div>
                <span className="text-xl font-black tracking-tight">GoDream <span className="text-godream-orange text-xs block">PRO PANEL</span></span>
            </div>

            <nav className="flex-1 space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold ${
                            location.pathname === item.path
                                ? 'bg-godream-orange text-white shadow-lg shadow-orange-900/20'
                                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                    >
                        {item.icon}
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="pt-6 border-t border-slate-800 space-y-4">
                <div className="flex items-center gap-3 px-2">
                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                        <UserCircle className="w-5 h-5 text-slate-300" />
                    </div>
                    <div className="text-xs">
                        <p className="font-bold text-slate-200">Administrador</p>
                        <p className="text-slate-500 italic">Jefe de Ventas</p>
                    </div>
                </div>
                <Link to="/" className="flex items-center gap-3 px-4 py-3 text-red-400 font-bold hover:bg-red-500/10 rounded-2xl transition-all">
                    <LogOut className="w-5 h-5" /> Salir
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;