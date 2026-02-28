export default function Footer() {
    return (
        <footer className="bg-[#0B1222] text-gray-400 py-16 px-12 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="bg-godream-orange p-1.5 rounded-lg text-white">GD</div>
                        <span className="text-white font-bold text-xl">GoDream</span>
                    </div>
                    <p className="text-sm">Distribuidor autorizado de GigaFibra. Conectando hogares con la mejor fibra.</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Planes</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Plan Esencial — 500 Mbps</li>
                        <li>Plan Ultra — 1 Gbps</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Empresa</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Ventajas</li>
                        <li>Contacto</li>
                        <li>Términos y condiciones</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Contacto</h4>
                    <ul className="space-y-2 text-sm">
                        <li>+57 (323) 384-9765</li>
                        <li>ventas@godream.com</li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 flex justify-between text-xs">
                <p>© 2026 GoDream. Todos los derechos reservados.</p>
                <p>Powered by GigaFibra</p>
            </div>
        </footer>
    );
}