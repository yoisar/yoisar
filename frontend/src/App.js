import 'bootstrap/dist/css/bootstrap.min.css';

export default function PresentacionYassel() {
    // Calcular años de experiencia dinámicamente desde 2001
    const añosExperiencia = new Date().getFullYear() - 2001;
    
    return (
        <div className="min-vh-100" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-3">
                <div className="container">
                    {/* <a className="navbar-brand fw-bold fs-3" href="#" style={{ color: '#fff' }}>
                        YOIS
                    </a> */}
                </div>
            </nav>

            {/* Hero Section */}
                        <section className="py-5">
                            <div className="container">
                                <div className="row justify-content-center text-center">
                                    <div className="col-lg-9">
                                        <div className="mb-4">
                                            <h1 className="display-4 fw-bold text-white mb-3">
                                                Soluciones SaaS y Desarrollo Ágil con Inteligencia Artificial Integrada
                                            </h1>
                                            <p className="lead text-white-50 mb-4">
                                                Transformamos ideas en productos digitales escalables. Infraestructura propia y seguridad de nivel empresarial.
                                            </p>
                                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                                <a href="#contacto"
                                                   className="btn btn-light btn-lg px-4 py-2 rounded-pill">
                                                    💼 Cotiza tu Proyecto
                                                </a>
                                                <a href="#contacto"
                                                   className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">
                                                    🤖 Hablemos de IA
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* About Section - Infraestructura */}
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
                                            <span className="me-2">🏗️</span>
                                            ¿Quiénes Somos?
                                        </h2>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-md-8 mx-auto">
                                            <p className="text-secondary fs-5 lh-lg text-center">
                                                Somos una <strong>Software Factory</strong> con más de <strong>{añosExperiencia} años de experiencia</strong> especializada
                                                en inteligencia artificial y soluciones de gestión. No solo escribimos código: alojamos, mantenemos
                                                y escalamos las aplicaciones sobre <span className="text-primary fw-semibold">infraestructura dedicada en la nube
                                                y servicios de alta disponibilidad (microservicios)</span>, con soporte para proyectos de gobierno y alta concurrencia.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Líneas de Servicio */}
            <section className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="h2 fw-bold text-white mb-3">
                            <span className="me-2">⚙️</span>
                            Líneas de Servicio
                        </h2>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg" style={{
                                background: 'rgba(255,255,255,0.95)',
                                borderRadius: '20px'
                            }}>
                                <div className="card-body p-4 text-center">
                                    <div className="fs-1 mb-3">💻</div>
                                    <h3 className="h5 fw-bold text-dark mb-3">Desarrollo de Aplicaciones a Medida</h3>
                                    <p className="text-secondary">
                                        Construcción de software desde cero, enfocado en microservicios con
                                        arquitectura escalable e integración con sistemas legacy.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg" style={{
                                background: 'rgba(255,255,255,0.95)',
                                borderRadius: '20px'
                            }}>
                                <div className="card-body p-4 text-center">
                                    <div className="fs-1 mb-3">☁️</div>
                                    <h3 className="h5 fw-bold text-dark mb-3">Soluciones SaaS</h3>
                                    <p className="text-secondary">
                                        Productos listos para usar, facturación recurrente y actualizaciones automáticas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg" style={{
                                background: 'rgba(255,255,255,0.95)',
                                borderRadius: '20px'
                            }}>
                                <div className="card-body p-4 text-center">
                                    <div className="fs-1 mb-3">🤖</div>
                                    <h3 className="h5 fw-bold text-dark mb-3">Inteligencia Artificial Aplicada</h3>
                                    <p className="text-secondary">
                                        Automatización de procesos, análisis predictivo y optimización de
                                        flujos de trabajo mediante IA.
                                    </p>
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
                            Casos de Éxito
                        </h2>
                        <p className="text-white-50 fs-5">Verticales de negocio que demuestran la versatilidad de la plataforma</p>
                    </div>
                    
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-5 col-md-6" style={{ display: 'none' }}>
                            <div className="card border-0 h-100 shadow-lg project-card" style={{
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
                                        <h3 className="h4 fw-bold text-dark mb-0">Cuotaplan</h3>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        CuotaPlan es una plataforma que conecta a personas y comercios adheridos, ofreciendo un ecosistema 
                                        de beneficios exclusivos como saldo virtual, sorteos, puntos y descuentos. Brinda a los comercios 
                                        herramientas de fidelización, gestión de referidos y campañas promocionales desde un panel centralizado.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-light text-dark rounded-pill">FinTech</span>
                                        <span className="badge bg-light text-dark rounded-pill">React</span>
                                        <span className="badge bg-light text-dark rounded-pill">Laravel</span>
                                    </div>
                                    <a href="https://cuotaplan.com/index" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <span className="me-1">🔗</span>
                                        Ver Proyecto
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" style={{ display: 'none' }}>
                            <div className="card border-0 h-100 shadow-lg project-card" style={{
                                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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
                                            <span className="fs-4">🏘️</span>
                                        </div>
                                        <h3 className="h4 fw-bold text-dark mb-0">AdminBarrios</h3>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        Gestión Integral de Barrios. Plataforma para administrar eficientemente servicios, 
                                        mejorar la comunicación entre vecinos y facilitar decisiones comunitarias.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-light text-dark rounded-pill">PropTech</span>
                                        <span className="badge bg-light text-dark rounded-pill">React</span>
                                        <span className="badge bg-light text-dark rounded-pill">Laravel</span>
                                    </div>
                                    <a href="https://adminbarrio.com" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <span className="me-1">🔗</span>
                                        Ver Proyecto
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-10">
                            <div className="card border-0 h-100 shadow-lg project-card" style={{
                                background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
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
                                            <span className="fs-4">🎯</span>
                                        </div>
                                        <h3 className="h4 fw-bold text-dark mb-0">Fideliza</h3>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        Plataforma integral para comercios e inversionistas que combina catálogo vivo, programas de puntos,
                                        referidos, rifas propias y de terceros, delivery partners y más. Gestión centralizada de inventario,
                                        promociones y sorteos; actualmente con comercios activos, usuarios acumulando puntos y participantes
                                        en rifas reales.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-light text-dark rounded-pill">CRM</span>
                                        <span className="badge bg-light text-dark rounded-pill">React Native</span>
                                        <span className="badge bg-light text-dark rounded-pill">Laravel</span>
                                    </div>
                                    <a href="https://fideliza.yoisar.com/fideliza" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <span className="me-1">🔗</span>
                                        Ver Proyecto
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg project-card" style={{
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
                                        <div>
                                            <h3 className="h4 fw-bold text-dark mb-0">VentaRifas</h3>
                                            <small className="text-dark opacity-75">Raffles Marketplace Platform</small>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        Crea y vende rifas online en minutos. Plataforma desarrollada en Next.js como
                                        marketplace de rifas; pagos seguros, números automáticos y panel en tiempo real
                                        para organizadores. Canon inicial más 15 % sobre lo recaudado.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-light text-dark rounded-pill">Marketplace</span>
                                        <span className="badge bg-light text-dark rounded-pill">Next.js</span>
                                        <span className="badge bg-light text-dark rounded-pill">Laravel</span>
                                    </div>
                                    <a href="https://ventarifas.com" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <span className="me-1">🔗</span>
                                        Ver Proyecto
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg project-card" style={{
                                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
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
                                            <span className="fs-4">📦</span>
                                        </div>
                                        <div>
                                            <h3 className="h4 fw-bold text-dark mb-0">Distriboo</h3>
                                            <small className="text-dark opacity-75">B2B Distribution SaaS</small>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        Plataforma SaaS B2B para digitalizar la operación de distribuidores, eliminando
                                        pedidos manuales y optimizando ventas, logística y precios. MVP funcional en
                                        pruebas con clientes reales.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-light text-dark rounded-pill">SaaS B2B</span>
                                        <span className="badge bg-light text-dark rounded-pill">React</span>
                                        <span className="badge bg-light text-dark rounded-pill">Laravel</span>
                                    </div>
                                    <a href="https://distriboo.yoisar.com/" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <span className="me-1">🔗</span>
                                        Ver Proyecto
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg project-card" style={{
                                background: 'linear-gradient(135deg, #4776e6 0%, #8e54e9 100%)',
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
                                            <span className="fs-4">🏛</span>
                                        </div>
                                        <div>
                                            <h3 className="h4 fw-bold text-dark mb-0">Archivo Misiones Digital</h3>
                                            <small className="text-dark opacity-75">Document Management Platform</small>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        Sistema de gestión documental para la Gobernación de Misiones. Moderniza la
                                        administración, consulta y digitalización de documentos institucionales con
                                        arquitectura escalable.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-light text-dark rounded-pill">GovTech</span>
                                        <span className="badge bg-light text-dark rounded-pill">Next.js</span>
                                        <span className="badge bg-light text-dark rounded-pill">PostgreSQL</span>
                                    </div>
                                    <a href="https://test.archivo.yoisar.com/" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <span className="me-1">🔗</span>
                                        Ver Proyecto
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg project-card" style={{
                                background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
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
                                            <span className="fs-4">🛍</span>
                                        </div>
                                        <div>
                                            <h3 className="h4 fw-bold text-dark mb-0">YOIS Snacks</h3>
                                            <small className="text-dark opacity-75">Smart Snack Commerce Platform</small>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        E-commerce de snacks saludables con red propia de revendedores, sistema de
                                        comisiones y gestión de distribución. En producción con ventas reales y
                                        operación activa.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-light text-dark rounded-pill">E-commerce</span>
                                        <span className="badge bg-light text-dark rounded-pill">React Native</span>
                                        <span className="badge bg-light text-dark rounded-pill">Laravel</span>
                                    </div>
                                    <a href="https://yoissnacks.com/" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <span className="me-1">🔗</span>
                                        Ver Proyecto
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Investor card */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg project-card" style={{
                                background: 'linear-gradient(135deg, #facc15 0%, #f59e0b 100%)',
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
                                            <span className="fs-4">💼</span>
                                        </div>
                                        <h3 className="h4 fw-bold text-dark mb-0">Inversores</h3>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        Ronda de inversión en un ecosistema tecnológico con múltiples líneas de negocio.
                                        Pool mensual 30 % del ingreso distribuible hasta cap 2.5× el capital. Meta de
                                        recaudar $10 000 000 pesos. Invertí desde $50 000 y seguí tu aporte en tiempo real.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-light text-dark rounded-pill">FinTech</span>
                                        <span className="badge bg-light text-dark rounded-pill">Investment</span>
                                    </div>
                                    <a href="https://fideliza.yoisar.com/crowdfunding/registro-inversor-dinamico" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <span className="me-1">🔗</span>
                                        Ver Proyecto
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-5" id="contacto">
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
                                        Contanos sobre tu rubro y tu necesidad para orientarte mejor.
                                    </p>
                                    <form
                                        className="text-start mx-auto mb-4"
                                        style={{ maxWidth: '480px' }}
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            const data = new FormData(e.target);
                                            const nombre = data.get('nombre') || '';
                                            const rubro = data.get('rubro') || '';
                                            const necesidad = data.get('necesidad') || '';
                                            const asunto = encodeURIComponent('Contacto desde yoisar.com');
                                            const cuerpo = encodeURIComponent(
                                                `Nombre/Empresa: ${nombre}\nRubro: ${rubro}\nNecesidad: ${necesidad}`
                                            );
                                            window.location.href = `mailto:me@yoisar.com?subject=${asunto}&body=${cuerpo}`;
                                        }}
                                    >
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold text-dark">Nombre / Empresa</label>
                                            <input type="text" name="nombre" className="form-control" required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold text-dark">Rubro</label>
                                            <select name="rubro" className="form-select" required>
                                                <option value="">Seleccioná una opción</option>
                                                <option value="Gobierno">Gobierno</option>
                                                <option value="Privado">Privado</option>
                                                <option value="Startup">Startup</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-dark">
                                                ¿Necesitas una App, un SaaS o un sistema con IA?
                                            </label>
                                            <textarea name="necesidad" className="form-control" rows="3" required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill">
                                            <span className="me-2">📧</span>
                                            Enviar Consulta
                                        </button>
                                    </form>
                                    <div className="d-flex gap-3 justify-content-center flex-wrap">
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
