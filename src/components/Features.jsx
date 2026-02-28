export default function Features() {
    const items = [
        { title: "Velocidad Garantizada", desc: "Fibra óptica simétrica siempre.", icon: "⚡" },
        { title: "Conexión Estable", desc: "99.9% de uptime garantizado.", icon: "🛡️" },
        { title: "Instalación Rápida", desc: "En menos de 72 horas hábiles.", icon: "⏱️" },
        { title: "Soporte 24/7", desc: "Equipo técnico siempre disponible.", icon: "🎧" },
    ];

    return (
        <section className="py-20 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">¿Por qué GoDream?</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">La mejor experiencia en conectividad</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="bg-orange-50 w-12 h-12 flex items-center justify-center rounded-xl text-xl">{item.icon}</div>
                            <div>
                                <h4 className="font-bold text-slate-800">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1 relative">
                <img
                    src="/foto-experiencia.png"
                    alt="Experiencia GoDream"
                    className="rounded-3xl shadow-2xl w-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-godream-orange text-white p-4 rounded-2xl text-center font-bold shadow-lg">
                    <span className="block text-2xl">1</span> Gbps
                </div>
            </div>
        </section>
    );
}