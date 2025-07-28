import 'bootstrap/dist/css/bootstrap.min.css';

export default function PresentacionYassel() {
    return (
        <div className="min-vh-100" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-3">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-3" href="#" style={{ color: '#fff' }}>
                        YOIS
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <div className="mb-4">
                                <div className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" 
                                     style={{
                                         width: '120px', 
                                         height: '120px', 
                                         background: 'rgba(255,255,255,0.2)',
                                         backdropFilter: 'blur(10px)',
                                         border: '2px solid rgba(255,255,255,0.3)'
                                     }}>
                                    <span className="fs-1 text-white">👨‍💻</span>
                                </div>
                                <h1 className="display-4 fw-bold text-white mb-3">
                                    Hola, soy YOIS
                                </h1>
                                <p className="lead text-white-50 mb-4">
                                    Desarrollador Fullstack | Emprendedor IT
                                </p>
                                <p className="text-white-50 mb-4">
                                    Creando soluciones digitales que transforman ideas en realidad
                                </p>
                                <div className="d-flex gap-3 justify-content-center flex-wrap">
                                    <a href="mailto:me@yoisar.com" 
                                       className="btn btn-light btn-lg px-4 py-2 rounded-pill">
                                        📧 Contactar
                                    </a>
                                    <a href="#proyectos" 
                                       className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">
                                        🚀 Ver Proyectos
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg" style={{
                                background: 'rgba(255,255,255,0.95)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '20px'
                            }}>
                                <div className="card-body p-5">
                                    <div className="text-center mb-4">
                                        <h2 className="h2 fw-bold text-dark mb-3">
                                            <span className="me-2">🌟</span>
                                            Sobre mí
                                        </h2>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-md-8 mx-auto">
                                            <p className="text-secondary fs-5 lh-lg text-center">
                                                Soy desarrollador cubano radicado en Argentina, con más de <strong>20 años de experiencia</strong> en sistemas. 
                                                Actualmente me dedico al 100% a proyectos propios con visión de escalar en Latinoamérica. 
                                                Cada línea de código que escribo, cada feature que diseño, y cada estrategia que lanzo tiene una meta clara: 
                                                <span className="text-primary fw-semibold">construir soluciones reales que funcionen, generen impacto y dejen huella.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-5" id="proyectos">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="h2 fw-bold text-white mb-3">
                            <span className="me-2">🚀</span>
                            Proyectos Actuales
                        </h2>
                        <p className="text-white-50 fs-5">Innovando en cada línea de código</p>
                    </div>
                    
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="card border-0 h-100 shadow-lg" style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                borderRadius: '20px',
                                transform: 'translateY(0)',
                                transition: 'transform 0.3s ease'
                            }} 
                            onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center" 
                                             style={{
                                                 width: '50px', 
                                                 height: '50px', 
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <span className="fs-4">💳</span>
                                        </div>
                                        <h3 className="h4 fw-bold text-white mb-0">Cuotaplan</h3>
                                    </div>
                                    <p className="text-white-50 mb-3">
                                        Plataforma que conecta a clientes de comercios que pagan en cuotas con beneficios exclusivos 
                                        como saldo virtual, sorteos y descuentos.
                                    </p>
                                    <div className="d-flex gap-2">
                                        <span className="badge bg-light text-dark rounded-pill">FinTech</span>
                                        <span className="badge bg-light text-dark rounded-pill">React</span>
                                        <span className="badge bg-light text-dark rounded-pill">Laravel</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-5 col-md-6">
                            <div className="card border-0 h-100 shadow-lg" style={{
                                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                borderRadius: '20px',
                                transform: 'translateY(0)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center" 
                                             style={{
                                                 width: '50px', 
                                                 height: '50px', 
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <span className="fs-4">🎫</span>
                                        </div>
                                        <h3 className="h4 fw-bold text-white mb-0">Venta Rifas</h3>
                                    </div>
                                    <p className="text-white-50 mb-3">
                                        Plataforma para crear y gestionar rifas online con sistema de pago integrado 
                                        y comisiones para organizadores.
                                    </p>
                                    <div className="d-flex gap-2">
                                        <span className="badge bg-light text-dark rounded-pill">E-commerce</span>
                                        <span className="badge bg-light text-dark rounded-pill">Next.js</span>
                                        <span className="badge bg-light text-dark rounded-pill">Node.js</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card border-0 shadow-lg" style={{
                                background: 'rgba(255,255,255,0.95)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '20px'
                            }}>
                                <div className="card-body p-5 text-center">
                                    <h2 className="h2 fw-bold text-dark mb-3">
                                        <span className="me-2">💬</span>
                                        ¿Hablamos?
                                    </h2>
                                    <p className="text-secondary fs-5 mb-4">
                                        ¿Querés colaborar, invertir o sumar tu experiencia a alguno de los proyectos?
                                    </p>
                                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                                        <a href="mailto:me@yoisar.com" 
                                           className="btn btn-primary btn-lg px-5 py-3 rounded-pill">
                                            <span className="me-2">📧</span>
                                            me@yoisar.com
                                        </a>
                                        <a href="https://www.yoisar.com" 
                                           className="btn btn-outline-primary btn-lg px-5 py-3 rounded-pill"
                                           target="_blank" rel="noopener noreferrer">
                                            <span className="me-2">🌐</span>
                                            yoisar.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-4">
                <div className="container">
                    <div className="text-center">
                        <p className="text-white-50 mb-0">
                            © 2025 YOIS - Construyendo el futuro, una línea de código a la vez
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
