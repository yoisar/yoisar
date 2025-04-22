import React from "react";

export default function PresentacionYassel() {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10">
                <header className="text-center">
                    <h1 className="text-5xl font-extrabold text-gray-800">Yassel Omar Izquierdo Souchay</h1>
                    <p className="text-xl mt-3 text-gray-600">
                        Desarrollador Fullstack | Emprendedor | Fundador de Cuotaplan | También conocido como YOIS
                    </p>
                    <p className="text-md mt-1 text-gray-500">Sitio personal: <a href="https://yoisar.com" className="text-blue-600 underline">yoisar.com</a></p>
                </header>

                <section>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Sobre mí</h2>
                    <p className="text-gray-700 text-lg">
                        Soy desarrollador cubano radicado en Argentina, con más de 20 años de experiencia en sistemas. Actualmente me dedico al 100% a proyectos propios con visión de escalar en Latinoamérica. Cada línea de código que escribo, cada feature que diseño, y cada estrategia que lanzo tiene una meta clara: construir soluciones reales que funcionen, generen impacto y dejen huella.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Proyectos Actuales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-100 rounded-xl p-6">
                            <h3 className="text-2xl font-semibold text-blue-800">Cuotaplan</h3>
                            <p className="text-gray-700 mt-2">
                                Plataforma de financiación de bienes en cuotas con beneficios como saldo virtual, referidos y sorteos. En expansión regional.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-6">
                            <h3 className="text-2xl font-semibold text-green-800">Admin Barrios</h3>
                            <p className="text-gray-700 mt-2">
                                Gestión integral de barrios privados, con módulos de comunicación, administración y servicios comunes.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-6">
                            <h3 className="text-2xl font-semibold text-pink-800">Venta Rifas</h3>
                            <p className="text-gray-700 mt-2">
                                Plataforma para crear y gestionar rifas online con sistema de pago integrado y comisiones para organizadores.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-6">
                            <h3 className="text-2xl font-semibold text-yellow-800">Taller OK</h3>
                            <p className="text-gray-700 mt-2">
                                Solución para digitalizar la gestión de talleres mecánicos, presupuestos, turnos y control de stock.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-6 md:col-span-2">
                            <h3 className="text-2xl font-semibold text-purple-800">Proyecto Maderero</h3>
                            <p className="text-gray-700 mt-2">
                                Plataforma en desarrollo para la gestión de productores y distribuidores de madera en la región. (nombre en proceso)
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Contacto</h2>
                    <p className="text-gray-700 text-lg mb-2">
                        ¿Querés colaborar, invertir o sumar tu experiencia a alguno de los proyectos?
                    </p>
                    <a
                        href="mailto:sioy23@gmail.com"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700"
                    >
                        Escribime
                    </a>
                </section>
            </div>
        </div>
    );
}
