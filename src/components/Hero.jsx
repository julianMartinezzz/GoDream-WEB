export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between py-16 gap-12">
            {/* Texto de la izquierda */}
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                    <span>⚡</span> Fibra óptica de alta velocidad
                </div>

                <h1 className="text-6xl font-black text-slate-900 leading-tight">
                    Internet que <span className="text-godream-orange italic">vuela</span> <br />
                    para tu hogar
                </h1>

                <p className="text-gray-500 text-lg max-w-md">
                    Con la red de <span className="font-bold text-slate-700">GigaFibra</span>, disfruta de conexión ultra rápida, estable y sin interrupciones. GoDream te conecta al futuro.
                </p>

                <div className="flex gap-4 pt-4">
                    <button className="bg-godream-orange text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-200 hover:scale-105 transition-transform">
                        Ver Planes →
                    </button>
                    <button className="bg-white border-2 border-orange-100 text-godream-orange px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors">
                        Contáctanos
                    </button>
                </div>
            </div>

            {/* Imagen de la derecha */}
            <div className="flex-1 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                    <img
                        src="/fibra.png"
                        alt="Fibra Óptica GoDream"
                        className="w-full object-cover"
                    />
                </div>

                {/* Card flotante "Velocidad verificada" */}
                <div className="absolute -bottom-6 -left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100">
                    <div className="bg-green-100 p-3 rounded-xl text-green-600 text-2xl">⚡</div>
                    <div>
                        <p className="font-bold text-slate-800">Velocidad verificada</p>
                        <p className="text-sm text-gray-400">Hasta 1 Gbps simétrico</p>
                    </div>
                </div>
            </div>
        </section>
    )
}