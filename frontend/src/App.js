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
                                                Soy Yois. Desarrollo SaaS, Apps con IA y despliego infraestructura escalable.
                                            </h1>
                                            <p className="lead text-white-50 mb-4">
                                                Desde sistemas para el Gobierno de Misiones hasta plataformas de gestión horizontal.
                                                Tu proyecto corre sobre mi infraestructura y mi experiencia.
                                            </p>
                                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                                <a href="#contacto"
                                                   className="btn btn-light btn-lg px-4 py-2 rounded-pill">
                                                    💼 Hablemos de tu idea
                                                </a>
                                                <a href="#contacto"
                                                   className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">
                                                    🤖 Cotizá conmigo
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
                                            Yo soy Yois, y esta es mi ingeniería de software.
                                        </h2>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-md-8 mx-auto">
                                            <p className="text-secondary fs-5 lh-lg text-center">
                                                Tengo más de <strong>{añosExperiencia} años de experiencia</strong> especializado
                                                en inteligencia artificial y soluciones de gestión. No solo escribo código: alojo, mantengo
                                                y escalo cada aplicación en <span className="text-primary fw-semibold">mi propia infraestructura dedicada en la nube
                                                y servicios de alta disponibilidad (microservicios)</span>, con experiencia en proyectos de gobierno y entornos críticos
                                                como hospitales y casas de gobierno. Mis proyectos siempre llevan el sello <strong>YOIS</strong> de cercanía técnica
                                                y responsabilidad extrema por el producto final.
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
                            Mis Servicios
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
                                    <h3 className="h5 fw-bold text-dark mb-3">Desarrollo de Apps a Medida</h3>
                                    <p className="text-secondary">
                                        Construyo software desde cero con arquitectura en microservicios.
                                        Me adapto a sistemas legacy y a las necesidades específicas de tu negocio.
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
                                    <h3 className="h5 fw-bold text-dark mb-3">Soluciones SaaS listas para usar</h3>
                                    <p className="text-secondary">
                                        Productos verticales que ya tengo desarrollados y que facturo por
                                        suscripción, con actualizaciones y soporte continuo.
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
                                        Integro IA para automatizar procesos tediosos, hacer análisis predictivos
                                        y optimizar los flujos de trabajo de mis clientes.
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
                            Mis Proyectos
                        </h2>
                        <p className="text-white-50 fs-5">Soy YOIS, tu aliado tecnológico: estos son mis casos de éxito y mi pipeline de innovación</p>
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
                                        Mi plataforma integral para comercios e inversionistas que combina catálogo vivo, programas de puntos,
                                        referidos, rifas propias y de terceros, delivery partners y más. Gestión centralizada de inventario,
                                        promociones y sorteos; actualmente con comercios activos, usuarios acumulando puntos y participantes
                                        en rifas reales.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-success rounded-pill">Activo / En Producción</span>
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
                                        Mi plataforma completa para la gestión de rifas y sorteos digitales, funcionando
                                        y facturando. Marketplace desarrollado en Next.js; pagos seguros, números automáticos
                                        y panel en tiempo real para organizadores. Canon inicial más 15 % sobre lo recaudado.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-success rounded-pill">Activo / En Producción</span>
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
                                        Mi sistema de gestión de distribución y logística, pensado para optimizar cadenas
                                        de suministro. Digitaliza la operación de distribuidores, eliminando pedidos
                                        manuales y optimizando ventas, logística y precios.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-success rounded-pill">Activo / En Producción</span>
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
                                            <h3 className="h4 fw-bold text-dark mb-0">Sistema CGM (Gobierno)</h3>
                                            <small className="text-dark opacity-75">Document Management Platform</small>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        Yo desarrollé mi sistema de gestión documental para la Casa de Gobierno de Misiones.
                                        Maneja la mesa de entrada, derivación y búsqueda de expedientes mediante microservicios,
                                        modernizando la administración y digitalización de documentos institucionales.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-danger rounded-pill">Activo / Misión Crítica</span>
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
                                        Mi propio e-commerce vertical especializado en la venta de snacks y productos gourmet,
                                        con red propia de revendedores, sistema de comisiones y gestión de distribución.
                                        En producción con ventas reales y operación activa.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-success rounded-pill">Activo / En Producción</span>
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

                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg project-card" style={{
                                background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
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
                                            <span className="fs-4">🏃</span>
                                        </div>
                                        <h3 className="h4 fw-bold text-dark mb-0">Planning Yoisar</h3>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        Mi SaaS para planificación de entrenadores deportivos. Actualmente en
                                        fase de construcción, pronto disponible.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-warning text-dark rounded-pill">🚀 En Desarrollo (Activo)</span>
                                        <span className="badge bg-light text-dark rounded-pill">SaaS</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg project-card" style={{
                                background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
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
                                            <span className="fs-4">🏢</span>
                                        </div>
                                        <h3 className="h4 fw-bold text-dark mb-0">PortalCheck</h3>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        Mi solución integral de gestión y comunicación para barrios cerrados,
                                        clubes, edificios y condominios. Estoy trabajando en su lanzamiento.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-warning text-dark rounded-pill">🚀 En Desarrollo (Activo)</span>
                                        <span className="badge bg-light text-dark rounded-pill">PropTech</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg project-card" style={{
                                background: 'linear-gradient(135deg, #cc2b5e 0%, #753a88 100%)',
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
                                            <span className="fs-4">🩺</span>
                                        </div>
                                        <h3 className="h4 fw-bold text-dark mb-0">App Patología (Gobierno)</h3>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        Mi desarrollo aplicativo para el área de patología del Hospital Madariaga,
                                        digitalizando procesos clave de salud.
                                    </p>
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-danger rounded-pill">Activo / Misión Crítica</span>
                                        <span className="badge bg-light text-dark rounded-pill">HealthTech</span>
                                    </div>
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

                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-9 text-center">
                            <p className="text-white-50 fs-5 lh-lg">
                                Así como ves, algunos de mis proyectos ya están en el mercado y otros los estoy construyendo
                                en este momento. Para mí, el desarrollo nunca se detiene. Cada uno de estos productos
                                —estén terminados o en marcha— representa una solución real a un problema concreto.
                                Si ves algo en desarrollo que encaja con lo que necesitas, hablemos: puedo acelerar su
                                llegada o adaptarlo a tu medida.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg" style={{
                                background: 'rgba(255,255,255,0.95)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '20px'
                            }}>
                                <div className="card-body p-5 text-center">
                                    <h2 className="h2 fw-bold text-dark mb-3">
                                        <span className="me-2">🔒</span>
                                        Mi infraestructura, tu tranquilidad.
                                    </h2>
                                    <p className="text-secondary fs-5 lh-lg">
                                        No alquilo servidores compartidos. Cuento con mi propia infraestructura dedicada
                                        y orquestación de microservicios que ya soportan la carga de gestión gubernamental.
                                        Esto me permite ofrecer alta disponibilidad y seguridad perimetral real.
                                    </p>
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
                                        ¿Empezamos tu proyecto?
                                    </h2>
                                    <p className="text-secondary fs-5 mb-4">
                                        Contame tu necesidad. Ya sea una app, un SaaS o un sistema con IA, yo me encargo
                                        de la arquitectura, el desarrollo y el despliegue.
                                    </p>
                                    <form
                                        className="text-start mx-auto mb-4"
                                        style={{ maxWidth: '480px' }}
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            const data = new FormData(e.target);
                                            const nombre = data.get('nombre') || '';
                                            const empresa = data.get('empresa') || '';
                                            const necesidad = data.get('necesidad') || '';
                                            const asunto = encodeURIComponent('Contacto desde yoisar.com');
                                            const cuerpo = encodeURIComponent(
                                                `Nombre: ${nombre}\nEmpresa/Entidad: ${empresa}\n¿Qué necesitas desarrollar?: ${necesidad}`
                                            );
                                            window.location.href = `mailto:me@yoisar.com?subject=${asunto}&body=${cuerpo}`;
                                        }}
                                    >
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold text-dark">Nombre</label>
                                            <input type="text" name="nombre" className="form-control" required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold text-dark">Empresa / Entidad</label>
                                            <input type="text" name="empresa" className="form-control" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-dark">
                                                ¿Qué necesitas desarrollar?
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
                            © 2026 - YOIS | Desarrollo, SaaS e IA
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
