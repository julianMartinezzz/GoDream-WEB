import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Planes from './components/Planes';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
    // Estado para compartir el plan entre Planes y Contacto
    const [planSeleccionado, setPlanSeleccionado] = useState("");

    return (
        <div className="min-h-screen bg-godream-bg font-sans selection:bg-orange-100">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 md:px-12">
                <Hero />

                {/* Sección Planes: Pasamos la función para setear el plan */}
                <section id="planes" className="py-20 bg-white/50 rounded-[50px] px-4 my-10 border border-orange-50/50">
                    <div className="text-center mb-16">
                        <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold">
                          ⭐ Nuestros Planes
                        </span>
                        <h2 className="text-5xl font-black text-slate-900 mt-4">
                            Elige el plan perfecto para ti
                        </h2>
                    </div>
                    <Planes alSeleccionarPlan={setPlanSeleccionado} />
                </section>

                <section id="beneficios" className="py-12">
                    <Features />
                </section>

                {/* Sección Contacto: Recibe el plan para pre-cargarlo */}
                <section id="contacto" className="py-12">
                    <Contacto planPredefinido={planSeleccionado} />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;