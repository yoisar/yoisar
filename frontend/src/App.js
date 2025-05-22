import 'bootstrap/dist/css/bootstrap.min.css';

export default function PresentacionYassel() {
    return (
        <div className="min-vh-100 bg-light py-4 px-3">
            <div className="container bg-white rounded-3 shadow p-4">
                <header className="text-center">
                    <h1 className="display-4 fw-bold text-dark">YOIS</h1> {/* Actualizado con el nombre completo */}
                    <p className="lead text-secondary">
                        Desarrollador Fullstack | Emprendedor IT
                    </p>
                    <p className="text-muted">
                        Sitio personal: <a href="https://www.yoisar.com" className="text-primary text-decoration-underline">yoisar.com</a>
                    </p>
                </header>

                <section>
                    <h2 className="h3 fw-bold mb-3 text-dark">Sobre mí</h2>
                    <p className="text-secondary">
                        Soy desarrollador cubano radicado en Argentina, con más de 20 años de experiencia en sistemas. Actualmente me dedico al 100% a proyectos propios con visión de escalar en Latinoamérica. Cada línea de código que escribo, cada feature que diseño, y cada estrategia que lanzo tiene una meta clara: construir soluciones reales que funcionen, generen impacto y dejen huella.
                    </p>
                </section>

                <section>
                    <h2 className="h3 fw-bold mb-3 text-dark">Proyectos Actuales</h2>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="bg-light rounded-3 p-3">
                                <h3 className="h5 fw-semibold text-primary">Cuotaplan</h3>
                                <p className="text-secondary">
                                    Plataforma de financiación de bienes en cuotas con beneficios como saldo virtual, referidos y sorteos. En expansión regional.
                                </p>
                            </div>
                        </div>
                        {/* 
                        <div className="col-md-6">
                            <div className="bg-light rounded-3 p-3">
                                <h3 className="h5 fw-semibold text-success">Admin Barrios</h3>
                                <p className="text-secondary">
                                    Gestión integral de barrios privados, con módulos de comunicación, administración y servicios comunes.
                                </p>
                            </div>
                        </div>
                        */}
                        <div className="col-md-6">
                            <div className="bg-light rounded-3 p-3">
                                <h3 className="h5 fw-semibold text-danger">Venta Rifas</h3>
                                <p className="text-secondary">
                                    Plataforma para crear y gestionar rifas online con sistema de pago integrado y comisiones para organizadores.
                                </p>
                            </div>
                        </div>
                        {/*
                        <div className="col-md-6">
                            <div className="bg-light rounded-3 p-3">
                                <h3 className="h5 fw-semibold text-warning">Taller OK</h3>
                                <p className="text-secondary">
                                    Solución para digitalizar la gestión de talleres mecánicos, presupuestos, turnos y control de stock.
                                </p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bg-light rounded-3 p-3">
                                <h3 className="h5 fw-semibold text-purple">Proyecto Maderero</h3>
                                <p className="text-secondary">
                                    Plataforma en desarrollo para la gestión de productores y distribuidores de madera en la región. (nombre en proceso)
                                </p>
                            </div>
                        </div>
                        */}
                    </div>
                </section>

                <section>
                    <h2 className="h3 fw-bold mb-3 text-dark">Contacto</h2>
                    <p className="text-secondary mb-3">
                        ¿Querés colaborar, invertir o sumar tu experiencia a alguno de los proyectos?
                    </p>
                    <a
                        href="mailto:me@yoisar.com"
                        className="btn btn-primary btn-lg"
                    >
                        Escribime
                    </a>
                </section>

                <section>
                    <h2 className="h3 fw-bold mb-3 text-dark">Colaboraciones</h2>
                    <p className="text-secondary">
                        Si querés apoyar mis proyectos, podés hacerlo a través de Mercado Pago:
                    </p>
                    <ul className="list-unstyled">
                        <li><strong>CVU:</strong> 0000003100091368985618</li>
                        <li><strong>Alias:</strong> yois.mp</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
