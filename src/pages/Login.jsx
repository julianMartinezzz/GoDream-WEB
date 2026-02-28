import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Por ahora, simulamos el éxito del login y navegamos al dashboard
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-[#FFFBF5] flex flex-col items-center justify-center p-6 font-sans">
            {/* Botón Volver al inicio */}
            <Link
                to="/"
                className="absolute top-10 left-10 text-slate-500 flex items-center gap-2 hover:text-slate-800 font-medium transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Volver al inicio
            </Link>

            <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-orange-100 w-full max-w-md border border-slate-50">
                {/* Logo y Encabezado */}
                <div className="flex flex-col items-center mb-8 text-center">
                    <div className="bg-orange-600 p-4 rounded-2xl mb-4 shadow-lg shadow-orange-200 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-black text-slate-900">GoDream</h1>
                    <p className="text-slate-400 font-medium mt-1">Panel Administrativo</p>
                </div>

                {/* Formulario */}
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email</label>
                        <input
                            type="email"
                            placeholder="admin@godream.com"
                            className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-orange-500 transition-all text-slate-600"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Contraseña</label>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-orange-500 transition-all text-slate-600"
                                required
                            />
                            <button type="button" className="absolute right-4 top-4 text-slate-300 hover:text-slate-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12.a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-100 transition-all active:scale-[0.98]"
                    >
                        Iniciar sesión
                    </button>
                </form>

                {/* Credenciales de Prueba */}
                <div className="mt-8 p-5 bg-orange-50/50 rounded-3xl border border-orange-100/50">
                    <p className="text-xs font-bold text-orange-800 mb-2 uppercase tracking-wider">Credenciales de prueba:</p>
                    <div className="space-y-1">
                        <p className="text-xs text-orange-700/80"><span className="font-bold">Admin:</span> admin@godream.com / admin123</p>
                        <p className="text-xs text-orange-700/80"><span className="font-bold">Ventas:</span> ventas@godream.com / ventas123</p>
                    </div>
                </div>
            </div>
        </div>
    );
}