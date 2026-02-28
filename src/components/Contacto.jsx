import { useState } from 'react';
import { sendLead } from '../main/java/com/godream/api/services/api'; // Asegúrate de que la ruta a api.js sea correcta

export default function Contacto() {
    const [enviando, setEnviando] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("¡El botón funciona!");
        setEnviando(true);

        // Capturamos los datos del formulario usando el atributo 'name' de los inputs
        const formData = new FormData(e.target);
        const data = {
            nombre: formData.get('nombre'),
            email: formData.get('email'),
            telefono: formData.get('telefono'),
            plan: formData.get('plan')
        };

        try {
            await sendLead(data);
            alert("¡Solicitud enviada con éxito! Revisa tu correo.");
            e.target.reset(); // Limpia el formulario tras el éxito
        } catch (error) {
            alert("Hubo un error al enviar la solicitud. Intenta de nuevo.");
            console.error(error);
        } finally {
            setEnviando(false);
        }
    };

    return (
        <section className="py-20 flex flex-col md:flex-row gap-16" id="contacto">
            {/* Información de contacto (Izquierda) */}
            <div className="flex-1 space-y-8">
                <div>
                    <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold">✉️ Contáctanos</span>
                    <h2 className="text-5xl font-black text-slate-900 mt-4 leading-tight">¿Listo para<br />conectarte?</h2>
                    <p className="text-gray-500 mt-4">Déjanos tus datos y un asesor de GoDream se comunicará contigo para activar tu servicio de GigaFibra.</p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-orange-50 p-4 rounded-2xl text-orange-600">📞</div>
                        <div>
                            <p className="font-bold text-slate-800 text-lg">Teléfono</p>
                            <p className="text-gray-500">+57 (323) 3849-765</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-orange-50 p-4 rounded-2xl text-orange-600">📧</div>
                        <div>
                            <p className="font-bold text-slate-800 text-lg">Email</p>
                            <p className="text-gray-500">ventas@godream.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Formulario (Derecha) */}
            <div className="flex-1 bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100">
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Nombre completo</label>
                        <input name="nombre" type="text" placeholder="Tu nombre" required className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-godream-orange outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                            <input name="email" type="email" placeholder="tu@email.com" required className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-godream-orange outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Teléfono</label>
                            <input name="telefono" type="text" placeholder="+57 (323) ..." required className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-godream-orange outline-none" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Plan de interés</label>
                        <select name="plan" className="w-full p-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-godream-orange outline-none appearance-none">
                            <option value="Plan Esencial — 500 Mbps">Plan Esencial — 500 Mbps</option>
                            <option value="Plan Ultra — 1 Gbps">Plan Ultra — 1 Gbps</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        disabled={enviando}
                        className="w-full bg-godream-orange text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 disabled:bg-gray-400"
                    >
                        {enviando ? "Enviando..." : "Enviar solicitud"} <span>🚀</span>
                    </button>
                </form>
            </div>
        </section>
    );
}