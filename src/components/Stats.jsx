const STATS = [
    { label: 'Usuarios Activos', value: '10k+' },
    { label: 'Cobertura Nacional', value: '98%' },
    { label: 'Soporte 24/7', value: '100%' },
];

export default function Stats() {
    return (
        <div className="bg-white rounded-3xl p-10 shadow-xl shadow-orange-100/50 flex flex-wrap justify-around items-center -mt-10 relative z-10 border border-orange-50">
            {STATS.map((stat, index) => (
                <div key={index} className="text-center px-8">
                    <p className="text-4xl font-black text-godream-orange">{stat.value}</p>
                    <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                </div>
            ))}
        </div>
    );
}