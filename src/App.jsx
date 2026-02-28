import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features' // Esta sección ahora va primero
import Planes from './components/Planes'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-godream-bg font-sans selection:bg-orange-100">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 md:px-12">
                {/* 1. Bienvenida y llamada a la acción principal */}
                <Hero />

                {/* 2. Oferta: "Elige el plan perfecto" (Aparecerá después de los beneficios) */}
                <div className="py-20 bg-white/50 rounded-[50px] px-4 my-10 border border-orange-50/50">
                    <div className="text-center mb-16">
             <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold">
               ⭐ Nuestros Planes
             </span>
                        <h2 className="text-5xl font-black text-slate-900 mt-4">
                            Elige el plan perfecto para ti
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg">
                            Tecnología <span className="text-godream-orange font-bold">WI-FI 6</span> en todos nuestros planes
                        </p>
                    </div>
                    <Planes />
                </div>

                {/* 3. Beneficios: "¿Por qué GoDream?" (Aparecerá primero al bajar) */}
                <div className="py-12">
                    <Features />
                </div>



                {/* 4. Conversión: Formulario de contacto */}
                <Contacto />
            </main>

            {/* 5. Cierre profesional */}
            <Footer />
        </div>
    )
}

export default App