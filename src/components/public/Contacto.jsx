import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, Wifi, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contacto = ({ planPredefinido }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({}); // Estado para manejar errores

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        plan: '',
        estrato: '',
        origen: 'Web Principal',
        estado: 'NUEVO'
    });

    useEffect(() => {
        if (planPredefinido) {
            const nombrePlan = planPredefinido.split(' (')[0];
            const estratoDetectado = planPredefinido.includes('1-3') ? '1-3' : '4-6';
            setFormData(prev => ({ ...prev, plan: nombrePlan, estrato: estratoDetectado }));
        }
    }, [planPredefinido]);

    // Función de validación
    const validarFormulario = () => {
        let newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefonoRegex = /^\d{10}$/; // Valida exactamente 10 dígitos numéricos

        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";

        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Ingresa un correo electrónico válido";
        }

        if (!telefonoRegex.test(formData.telefono)) {
            newErrors.telefono = "El celular debe tener exactamente 10 dígitos";
        }

        if (!formData.plan) newErrors.plan = "Selecciona un plan";
        if (!formData.estrato) newErrors.estrato = "Selecciona tu estrato";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Limpiamos el error del campo cuando el usuario empieza a escribir
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validarFormulario()) return; // Si no es válido, no enviamos

        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:8080/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ nombre: '', email: '', telefono: '', plan: '', estrato: '', origen: 'Web Principal', estado: 'NUEVO' });
                setTimeout(() => setSubmitted(false), 5000);
            }
        } catch (error) {
            alert("Error de conexión. Verifica que el Backend esté corriendo.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-godream-orange/10 rounded-full blur-3xl"></div>

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        ¡Inicia tu experiencia!
                    </h2>
                    <p className="text-slate-400 text-lg">Déjanos tus datos y un asesor te contactará en breve.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Campo Nombre */}
                        <div className="space-y-2">
                            <div className="relative group">
                                <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.nombre ? 'text-red-400' : 'text-slate-500 group-focus-within:text-godream-orange'}`} />
                                <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre completo"
                                       className={`w-full bg-white/5 border p-4 pl-12 rounded-2xl outline-none transition-all ${errors.nombre ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-white/10 focus:border-godream-orange focus:ring-1 focus:ring-godream-orange'}`} />
                            </div>
                            {errors.nombre && <p className="text-red-400 text-xs font-bold flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.nombre}</p>}
                        </div>

                        {/* Campo Email */}
                        <div className="space-y-2">
                            <div className="relative group">
                                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.email ? 'text-red-400' : 'text-slate-500 group-focus-within:text-godream-orange'}`} />
                                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico"
                                       className={`w-full bg-white/5 border p-4 pl-12 rounded-2xl outline-none transition-all ${errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-white/10 focus:border-godream-orange focus:ring-1 focus:ring-godream-orange'}`} />
                            </div>
                            {errors.email && <p className="text-red-400 text-xs font-bold flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.email}</p>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Campo Teléfono */}
                        <div className="space-y-2">
                            <div className="relative group">
                                <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.telefono ? 'text-red-400' : 'text-slate-500 group-focus-within:text-godream-orange'}`} />
                                <input name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Celular (10 dígitos)"
                                       className={`w-full bg-white/5 border p-4 pl-12 rounded-2xl outline-none transition-all ${errors.telefono ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-white/10 focus:border-godream-orange focus:ring-1 focus:ring-godream-orange'}`} />
                            </div>
                            {errors.telefono && <p className="text-red-400 text-xs font-bold flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.telefono}</p>}
                        </div>

                        {/* Campo Plan */}
                        <div className="relative group">
                            <Wifi className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-godream-orange transition-colors" />
                            <select name="plan" value={formData.plan} onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl focus:border-godream-orange outline-none transition-all appearance-none" required>
                                <option value="" disabled className="text-slate-900">Plan</option>
                                <option value="Plan Esencial - 500 Mbps" className="text-slate-900">500 Mbps</option>
                                <option value="Plan Pro - 1 Gbps" className="text-slate-900">1 Gbps</option>
                            </select>
                        </div>

                        {/* Campo Estrato */}
                        <div className="relative group">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-godream-orange transition-colors" />
                            <select name="estrato" value={formData.estrato} onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl focus:border-godream-orange outline-none transition-all appearance-none" required>
                                <option value="" disabled className="text-slate-900">Estrato</option>
                                <option value="1-3" className="text-slate-900">Estrato 1-3</option>
                                <option value="4-6" className="text-slate-900">Estrato 4-6</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 shadow-xl 
                        ${isSubmitting ? 'bg-slate-700 cursor-not-allowed' : 'bg-godream-orange hover:bg-orange-600 hover:scale-[1.01] active:scale-95 shadow-orange-500/20'}`}
                    >
                        {isSubmitting ? (
                            <> <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div> Procesando... </>
                        ) : submitted ? (
                            <> <CheckCircle className="w-6 h-6" /> ¡SOLICITUD ENVIADA! </>
                        ) : (
                            <> <Send className="w-6 h-6" /> QUIERO MI INTERNET AHORA </>
                        )}
                    </button>

                    {submitted && (
                        <p className="text-center text-green-400 font-bold animate-pulse">
                            ¡Gracias! Revisa tu correo electrónico para la confirmación.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contacto;