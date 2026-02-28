import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 md:px-12 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-orange-50">
            {/* Logo y Nombre */}
            <Link to="/" className="flex items-center gap-2 group">
                <div className="bg-godream-orange p-2 rounded-xl text-white font-bold transition-transform group-hover:scale-110">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                    </svg>
                </div>
                <span className="text-2xl font-black text-slate-900 tracking-tight">
          GoDream
        </span>
            </Link>

            {/* Menú de Navegación (Escritorio) */}
            <div className="hidden md:flex gap-10 font-bold text-slate-600">
                <a href="#planes" className="hover:text-godream-orange transition-colors">
                    Planes
                </a>
                <a href="#ventajas" className="hover:text-godream-orange transition-colors">
                    Ventajas
                </a>
                <a href="#contacto" className="hover:text-godream-orange transition-colors">
                    Contacto
                </a>
            </div>

            {/* Botón de Acceso al Portal */}
            <div className="flex items-center gap-4">
                <Link
                    to="/login"
                    className="bg-godream-orange text-white px-6 py-2.5 rounded-xl font-bold hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200 transition-all active:scale-95"
                >
                    Portal Admin
                </Link>
            </div>
        </nav>
    );
}