import React, { useState, useEffect } from 'react';

const Contacto = ({ planPredefinido }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        plan: '',
        estrato: '', // Nuevo campo
        origen: 'Web Principal',
        estado: 'NUEVO'
    });

    // Sincronizar con la elección de la sección Planes
    useEffect(() => {
        if (planPredefinido) {
            // Extraemos el nombre del plan (antes del paréntesis) y el estrato
            const nombrePlan = planPredefinido.split(' (')[0];
            const estratoDetectado = planPredefinido.includes('1-3') ? '1-3' : '4-6';

            setFormData(prev => ({
                ...prev,
                plan: nombrePlan,
                estrato: estratoDetectado
            }));
        }
    }, [planPredefinido]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("🚀 ¡Solicitud enviada con éxito! Revisa tu correo.");
                setFormData({ nombre: '', email: '', telefono: '', plan: '', estrato: '', origen: 'Web Principal', estado: 'NUEVO' });
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un problema al conectar con el servidor.");
        }
    };

    return (
        <div className="bg-slate-900 rounded-[50px] p-8 md:p-16 text-white shadow-2xl border border-white/5">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">¡Pide tu instalación!</h2>
                    <p className="text-slate-400">Completa tus datos y vuela con la mejor fibra óptica.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                        <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre completo" className="bg-white/5 border border-white/10 p-4 rounded-2xl w-full focus:border-godream-orange outline-none transition-all" required />
                        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" className="bg-white/5 border border-white/10 p-4 rounded-2xl w-full focus:border-godream-orange outline-none transition-all" required />
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        <input name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono / WhatsApp" className="bg-white/5 border border-white/10 p-4 rounded-2xl w-full focus:border-godream-orange outline-none transition-all" required />

                        <select name="plan" value={formData.plan} onChange={handleChange} className="bg-white/5 border border-white/10 p-4 rounded-2xl w-full focus:border-godream-orange outline-none transition-all appearance-none" required>
                            <option value="" disabled className="text-slate-900">Elegir Plan</option>
                            <option value="Plan Esencial - 500 Mbps" className="text-slate-900">500 Mbps</option>
                            <option value="Plan Pro - 1 Gbps" className="text-slate-900">1 Gbps</option>
                        </select>

                        <select name="estrato" value={formData.estrato} onChange={handleChange} className="bg-white/5 border border-white/10 p-4 rounded-2xl w-full focus:border-godream-orange outline-none transition-all appearance-none" required>
                            <option value="" disabled className="text-slate-900">Estrato</option>
                            <option value="1-3" className="text-slate-900">Estrato 1, 2 o 3</option>
                            <option value="4-6" className="text-slate-900">Estrato 4, 5 o 6</option>
                        </select>
                    </div>

                    <button type="submit" className="w-full bg-godream-orange hover:bg-orange-600 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-orange-500/20 hover:scale-[1.01] active:scale-95">
                        ENVIAR SOLICITUD AHORA 🚀
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacto;