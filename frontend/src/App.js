import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' }
];

const PROJECT_MENU = {
    commercial: [
        { key: 'ventarifas', href: 'https://ventarifas.com', status: 'active' },
        { key: 'distriboo', href: 'https://distriboo.yoisar.com/', status: 'active' },
        { key: 'snacks', href: 'https://yoissnacks.com/', status: 'active' },
        { key: 'planning', href: null, status: 'development' },
        { key: 'portalcheck', href: null, status: 'development' }
    ],
    government: [
        { key: 'cgm', href: 'https://test.archivo.yoisar.com/', status: 'critical' },
        { key: 'patologia', href: null, status: 'critical' }
    ],
    thirdParty: [
        { key: 'guajira', href: 'https://front.guajira.dev.yoisar.com/', status: 'development' }
    ]
};

const STATUS_BADGE = {
    active: { className: 'bg-success', i18nKey: 'projects.status.activeProduction' },
    development: { className: 'bg-warning text-dark', i18nKey: 'projects.status.activeDevelopment' },
    critical: { className: 'bg-danger', i18nKey: 'projects.status.missionCritical' }
};

export default function PresentacionYassel() {
    const { t, i18n } = useTranslation();
    // Calcular años de experiencia dinámicamente desde 2001
    const añosExperiencia = new Date().getFullYear() - 2001;
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const goToSection = (sectionId) => {
        setMenuOpen(false);
        requestAnimationFrame(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        });
    };

    const handleProjectClick = (project) => {
        if (project.href) {
            window.open(project.href, '_blank', 'noopener,noreferrer');
            setMenuOpen(false);
            return;
        }
        goToSection('proyectos');
    };

    const renderProjectItem = (project) => {
        const badge = STATUS_BADGE[project.status];
        return (
            <li key={project.key} className="mb-2">
                <button
                    type="button"
                    onClick={() => handleProjectClick(project)}
                    className="btn w-100 d-flex align-items-center justify-content-between text-start px-3 py-2 rounded-3 border-0"
                    style={{ background: 'rgba(15,23,42,0.04)', transition: 'background 0.15s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15,23,42,0.09)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(15,23,42,0.04)'}
                >
                    <span className="fw-semibold text-dark">{t(`projects.${project.key}.name`)}</span>
                    <span className={`badge rounded-pill ${badge.className}`} style={{ fontSize: '0.7rem' }}>
                        {t(badge.i18nKey)}
                    </span>
                </button>
            </li>
        );
    };

    return (
        <div className="min-vh-100" style={{
            background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 55%, #334155 100%)',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            letterSpacing: '0.01em'
        }}>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-3" style={{ position: 'sticky', top: 0, zIndex: 1030, background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(8px)' }}>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                        <button
                            type="button"
                            onClick={() => setMenuOpen(true)}
                            aria-label={t('menu.open')}
                            className="btn d-flex align-items-center justify-content-center border-0"
                            style={{ width: '44px', height: '44px', color: '#fff', fontSize: '1.5rem' }}
                        >
                            <i className="bi bi-list"></i>
                        </button>
                        <a className="navbar-brand fw-bold fs-4 d-flex align-items-center mb-0" href="#inicio" style={{ color: '#fff', letterSpacing: '0.05em' }}>
                            <span className="rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                                  style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.15)' }}>
                                Y
                            </span>
                            {t('nav.brandFull')}
                        </a>
                    </div>
                    <div className="d-flex gap-1" role="group" aria-label="Language selector">
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang.code}
                                type="button"
                                onClick={() => i18n.changeLanguage(lang.code)}
                                className={`btn btn-sm rounded-pill px-3 ${i18n.resolvedLanguage === lang.code ? 'btn-light' : 'btn-outline-light'}`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Off-canvas Drawer Menu */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(15,23,42,0.6)',
                        zIndex: 1040
                    }}
                />
            )}
            <aside
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    maxWidth: '420px',
                    background: '#f8fafc',
                    zIndex: 1050,
                    transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s ease',
                    overflowY: 'auto',
                    boxShadow: '4px 0 24px rgba(0,0,0,0.2)'
                }}
                className="w-100 w-md-auto"
                aria-hidden={!menuOpen}
            >
                <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
                    <span className="fw-bold text-dark fs-5">{t('nav.brandFull')}</span>
                    <button
                        type="button"
                        onClick={() => setMenuOpen(false)}
                        aria-label={t('menu.close')}
                        className="btn d-flex align-items-center justify-content-center border-0"
                        style={{ width: '44px', height: '44px', fontSize: '1.5rem' }}
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <div className="px-4 py-3">
                    <p className="text-uppercase text-secondary fw-semibold mb-3" style={{ fontSize: '0.75rem', letterSpacing: '0.06em' }}>
                        {t('menu.sections')}
                    </p>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                            <button type="button" onClick={() => goToSection('inicio')} className="btn w-100 text-start px-3 py-2 rounded-3 border-0">
                                {t('menu.home')}
                            </button>
                        </li>
                        <li className="mb-2">
                            <button type="button" onClick={() => goToSection('servicios')} className="btn w-100 text-start px-3 py-2 rounded-3 border-0">
                                {t('menu.services')}
                            </button>
                        </li>
                        <li className="mb-2">
                            <button type="button" onClick={() => goToSection('infraestructura')} className="btn w-100 text-start px-3 py-2 rounded-3 border-0">
                                {t('menu.infrastructure')}
                            </button>
                        </li>
                        <li className="mb-2">
                            <button type="button" onClick={() => goToSection('contacto')} className="btn w-100 text-start px-3 py-2 rounded-3 border-0">
                                {t('menu.contact')}
                            </button>
                        </li>
                    </ul>
                </div>

                <hr className="mx-4" />

                <div className="px-4 py-3">
                    <p className="text-uppercase text-secondary fw-semibold mb-3" style={{ fontSize: '0.75rem', letterSpacing: '0.06em' }}>
                        {t('menu.projectsTitle')}
                    </p>

                    <p className="fw-bold text-dark mb-2" style={{ fontSize: '0.85rem' }}>📌 {t('menu.groupCommercial')}</p>
                    <ul className="list-unstyled mb-3">
                        {PROJECT_MENU.commercial.map(renderProjectItem)}
                    </ul>

                    <p className="fw-bold text-dark mb-2" style={{ fontSize: '0.85rem' }}>📌 {t('menu.groupGovernment')}</p>
                    <ul className="list-unstyled mb-3">
                        {PROJECT_MENU.government.map(renderProjectItem)}
                    </ul>

                    <p className="fw-bold text-dark mb-2" style={{ fontSize: '0.85rem' }}>📌 {t('menu.groupThirdParty')}</p>
                    <ul className="list-unstyled mb-0">
                        {PROJECT_MENU.thirdParty.map(renderProjectItem)}
                    </ul>
                </div>
            </aside>

            {/* Hero Section */}
            <section className="py-5 py-md-6" id="inicio">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-9">
                            <div className="mb-4">
                                <span className="badge rounded-pill px-3 py-2 mb-4 fw-semibold"
                                      style={{ background: 'rgba(255,255,255,0.12)', color: '#e0e7ff', letterSpacing: '0.08em', fontSize: '0.8rem' }}>
                                    {t('hero.badge')}
                                </span>
                                <h1 className="display-4 fw-bold text-white mb-3" style={{ lineHeight: 1.15 }}>
                                    {t('hero.title')}
                                </h1>
                                <p className="lead text-white-50 mb-4 mx-auto" style={{ maxWidth: '640px' }}>
                                    {t('hero.subtitle')}
                                </p>
                                <div className="d-flex gap-3 justify-content-center flex-wrap">
                                    <a href="#contacto"
                                       className="btn btn-primary btn-lg px-4 py-2 rounded-pill fw-semibold shadow">
                                        <i className="bi bi-briefcase me-2"></i>{t('hero.ctaPrimary')}
                                    </a>
                                    <a href="#contacto"
                                       className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill fw-semibold">
                                        <i className="bi bi-robot me-2"></i>{t('hero.ctaSecondary')}
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
                                background: 'rgba(255,255,255,0.97)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: '24px'
                            }}>
                                <div className="card-body p-5">
                                    <div className="text-center mb-4">
                                        <h2 className="h2 fw-bold text-dark mb-3">
                                            <i className="bi bi-building-gear me-2 text-primary"></i>
                                            {t('about.title')}
                                        </h2>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-md-8 mx-auto">
                                            <p className="text-secondary fs-5 lh-lg text-center">
                                                {t('about.description', { years: añosExperiencia })}
                                            </p>
                                            <p className="text-secondary fs-5 lh-lg text-center mt-3">
                                                {t('about.guajiraMessage')}
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
            <section className="py-5" id="servicios">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="h2 fw-bold text-white mb-3">
                            <i className="bi bi-gear-fill me-2"></i>
                            {t('services.title')}
                        </h2>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg service-card" style={{
                                background: 'rgba(255,255,255,0.97)',
                                borderRadius: '20px',
                                transition: 'transform 0.25s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4 text-center">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                         style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)', fontSize: '1.75rem' }}>
                                        <i className="bi bi-code-slash text-primary"></i>
                                    </div>
                                    <h3 className="h5 fw-bold text-dark mb-3">{t('services.dev.title')}</h3>
                                    <p className="text-secondary mb-0">
                                        {t('services.dev.description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg service-card" style={{
                                background: 'rgba(255,255,255,0.97)',
                                borderRadius: '20px',
                                transition: 'transform 0.25s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4 text-center">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                         style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)', fontSize: '1.75rem' }}>
                                        <i className="bi bi-cloud-fill text-primary"></i>
                                    </div>
                                    <h3 className="h5 fw-bold text-dark mb-3">{t('services.saas.title')}</h3>
                                    <p className="text-secondary mb-0">
                                        {t('services.saas.description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg service-card" style={{
                                background: 'rgba(255,255,255,0.97)',
                                borderRadius: '20px',
                                transition: 'transform 0.25s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4 text-center">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                         style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)', fontSize: '1.75rem' }}>
                                        <i className="bi bi-robot text-primary"></i>
                                    </div>
                                    <h3 className="h5 fw-bold text-dark mb-3">{t('services.ai.title')}</h3>
                                    <p className="text-secondary mb-0">
                                        {t('services.ai.description')}
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
                            <i className="bi bi-rocket-takeoff-fill me-2"></i>
                            {t('projects.title')}
                        </h2>
                        <p className="text-white-50 fs-5">{t('projects.subtitle')}</p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-5 col-md-6" style={{ display: 'none' }}>
                            <div className="card border-0 h-100 shadow-lg project-card" style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                borderRadius: '20px',
                                transform: 'translateY(0)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                                             style={{
                                                 width: '50px',
                                                 height: '50px',
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <i className="bi bi-credit-card-2-front-fill fs-4"></i>
                                        </div>
                                        <h3 className="h4 fw-bold text-dark mb-0">Cuotaplan</h3>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        CuotaPlan es una plataforma que conecta a personas y comercios adheridos, ofreciendo un ecosistema
                                        de beneficios exclusivos como saldo virtual, sorteos, puntos y descuentos. Brinda a los comercios
                                        herramientas de fidelización, gestión de referidos y campañas promocionales desde un panel centralizado.
                                    </p>
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        <span className="badge bg-light text-dark rounded-pill">FinTech</span>
                                        <span className="badge bg-light text-dark rounded-pill">React</span>
                                        <span className="badge bg-light text-dark rounded-pill">Laravel</span>
                                    </div>
                                    <a href="https://cuotaplan.com/index"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <i className="bi bi-box-arrow-up-right me-1"></i>
                                        {t('projects.viewProject')}
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
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                                             style={{
                                                 width: '50px',
                                                 height: '50px',
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <i className="bi bi-houses-fill fs-4"></i>
                                        </div>
                                        <h3 className="h4 fw-bold text-dark mb-0">AdminBarrios</h3>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        Gestión Integral de Barrios. Plataforma para administrar eficientemente servicios,
                                        mejorar la comunicación entre vecinos y facilitar decisiones comunitarias.
                                    </p>
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        <span className="badge bg-light text-dark rounded-pill">PropTech</span>
                                        <span className="badge bg-light text-dark rounded-pill">React</span>
                                        <span className="badge bg-light text-dark rounded-pill">Laravel</span>
                                    </div>
                                    <a href="https://adminbarrio.com"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <i className="bi bi-box-arrow-up-right me-1"></i>
                                        {t('projects.viewProject')}
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
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                                             style={{
                                                 width: '50px',
                                                 height: '50px',
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <i className="bi bi-bullseye fs-4"></i>
                                        </div>
                                        <h3 className="h4 fw-bold text-dark mb-0">{t('projects.fideliza.name')}</h3>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        {t('projects.fideliza.description')}
                                    </p>
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        <span className="badge bg-success rounded-pill">{t('projects.status.activeProduction')}</span>
                                        <span className="badge bg-light text-dark rounded-pill">CRM</span>
                                        <span className="badge bg-light text-dark rounded-pill">React Native</span>
                                        <span className="badge bg-light text-dark rounded-pill">Laravel</span>
                                    </div>
                                    <a href="https://fideliza.yoisar.com/fideliza"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <i className="bi bi-box-arrow-up-right me-1"></i>
                                        {t('projects.viewProject')}
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
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                                             style={{
                                                 width: '50px',
                                                 height: '50px',
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <i className="bi bi-ticket-perforated-fill fs-4"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 fw-bold text-dark mb-0">{t('projects.ventarifas.name')}</h3>
                                            <small className="text-dark opacity-75">{t('projects.ventarifas.tagline')}</small>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        {t('projects.ventarifas.description')}
                                    </p>
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        <span className="badge bg-success rounded-pill">{t('projects.status.activeProduction')}</span>
                                        <span className="badge bg-light text-dark rounded-pill">Marketplace</span>
                                        <span className="badge bg-light text-dark rounded-pill">Next.js</span>
                                        <span className="badge bg-light text-dark rounded-pill">Laravel</span>
                                    </div>
                                    <a href="https://ventarifas.com"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <i className="bi bi-box-arrow-up-right me-1"></i>
                                        {t('projects.viewProject')}
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
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                                             style={{
                                                 width: '50px',
                                                 height: '50px',
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <i className="bi bi-box-seam-fill fs-4"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 fw-bold text-dark mb-0">{t('projects.distriboo.name')}</h3>
                                            <small className="text-dark opacity-75">{t('projects.distriboo.tagline')}</small>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        {t('projects.distriboo.description')}
                                    </p>
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        <span className="badge bg-success rounded-pill">{t('projects.status.activeProduction')}</span>
                                        <span className="badge bg-light text-dark rounded-pill">SaaS B2B</span>
                                        <span className="badge bg-light text-dark rounded-pill">React</span>
                                        <span className="badge bg-light text-dark rounded-pill">Laravel</span>
                                    </div>
                                    <a href="https://distriboo.yoisar.com/"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <i className="bi bi-box-arrow-up-right me-1"></i>
                                        {t('projects.viewProject')}
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
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                                             style={{
                                                 width: '50px',
                                                 height: '50px',
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <i className="bi bi-bank2 fs-4"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 fw-bold text-dark mb-0">{t('projects.cgm.name')}</h3>
                                            <small className="text-dark opacity-75">{t('projects.cgm.tagline')}</small>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        {t('projects.cgm.description')}
                                    </p>
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        <span className="badge bg-danger rounded-pill">{t('projects.status.missionCritical')}</span>
                                        <span className="badge bg-light text-dark rounded-pill">GovTech</span>
                                        <span className="badge bg-light text-dark rounded-pill">Next.js</span>
                                        <span className="badge bg-light text-dark rounded-pill">PostgreSQL</span>
                                    </div>
                                    <a href="https://test.archivo.yoisar.com/"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <i className="bi bi-box-arrow-up-right me-1"></i>
                                        {t('projects.viewProject')}
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
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                                             style={{
                                                 width: '50px',
                                                 height: '50px',
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <i className="bi bi-bag-fill fs-4"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 fw-bold text-dark mb-0">{t('projects.snacks.name')}</h3>
                                            <small className="text-dark opacity-75">{t('projects.snacks.tagline')}</small>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        {t('projects.snacks.description')}
                                    </p>
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        <span className="badge bg-success rounded-pill">{t('projects.status.activeProduction')}</span>
                                        <span className="badge bg-light text-dark rounded-pill">E-commerce</span>
                                        <span className="badge bg-light text-dark rounded-pill">React Native</span>
                                        <span className="badge bg-light text-dark rounded-pill">Laravel</span>
                                    </div>
                                    <a href="https://yoissnacks.com/"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <i className="bi bi-box-arrow-up-right me-1"></i>
                                        {t('projects.viewProject')}
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
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                                             style={{
                                                 width: '50px',
                                                 height: '50px',
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <i className="bi bi-stopwatch-fill fs-4"></i>
                                        </div>
                                        <h3 className="h4 fw-bold text-dark mb-0">{t('projects.planning.name')}</h3>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        {t('projects.planning.description')}
                                    </p>
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        <span className="badge bg-warning text-dark rounded-pill"><i className="bi bi-rocket-takeoff-fill me-1"></i>{t('projects.status.activeDevelopment')}</span>
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
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                                             style={{
                                                 width: '50px',
                                                 height: '50px',
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <i className="bi bi-building-fill fs-4"></i>
                                        </div>
                                        <h3 className="h4 fw-bold text-dark mb-0">{t('projects.portalcheck.name')}</h3>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        {t('projects.portalcheck.description')}
                                    </p>
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        <span className="badge bg-warning text-dark rounded-pill"><i className="bi bi-rocket-takeoff-fill me-1"></i>{t('projects.status.activeDevelopment')}</span>
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
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                                             style={{
                                                 width: '50px',
                                                 height: '50px',
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <i className="bi bi-heart-pulse-fill fs-4"></i>
                                        </div>
                                        <h3 className="h4 fw-bold text-dark mb-0">{t('projects.patologia.name')}</h3>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        {t('projects.patologia.description')}
                                    </p>
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        <span className="badge bg-danger rounded-pill">{t('projects.status.missionCritical')}</span>
                                        <span className="badge bg-light text-dark rounded-pill">HealthTech</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg project-card" style={{
                                background: 'linear-gradient(135deg, #0f4c75 0%, #3282b8 100%)',
                                borderRadius: '20px',
                                transform: 'translateY(0)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                                             style={{
                                                 width: '50px',
                                                 height: '50px',
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <i className="bi bi-arrow-repeat fs-4"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 fw-bold text-dark mb-0">{t('projects.guajira.name')}</h3>
                                            <small className="text-dark opacity-75">{t('projects.guajira.tagline')}</small>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        {t('projects.guajira.description')}
                                    </p>
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        <span className="badge bg-warning text-dark rounded-pill"><i className="bi bi-rocket-takeoff-fill me-1"></i>{t('projects.status.activeDevelopment')}</span>
                                        <span className="badge bg-light text-dark rounded-pill">Modernización</span>
                                        <span className="badge bg-light text-dark rounded-pill">Tercerizado</span>
                                    </div>
                                    <a href="https://front.guajira.dev.yoisar.com/"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <i className="bi bi-box-arrow-up-right me-1"></i>
                                        {t('projects.viewProject')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 h-100 shadow-lg project-card" style={{
                                background: 'linear-gradient(135deg, #16a085 0%, #2980b9 100%)',
                                borderRadius: '20px',
                                transform: 'translateY(0)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                                             style={{
                                                 width: '50px',
                                                 height: '50px',
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <i className="bi bi-sun-fill fs-4"></i>
                                        </div>
                                        <div>
                                            <h3 className="h4 fw-bold text-dark mb-0">{t('projects.porelcaribe.name')}</h3>
                                            <small className="text-dark opacity-75">{t('projects.porelcaribe.tagline')}</small>
                                        </div>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        {t('projects.porelcaribe.description')}
                                    </p>
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        <span className="badge bg-warning text-dark rounded-pill"><i className="bi bi-rocket-takeoff-fill me-1"></i>{t('projects.status.activeDevelopment')}</span>
                                        <span className="badge bg-light text-dark rounded-pill">Modernización</span>
                                        <span className="badge bg-light text-dark rounded-pill">Tercerizado</span>
                                    </div>
                                    <a href="https://porelcaribe.dev.yoisar.com/"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <i className="bi bi-box-arrow-up-right me-1"></i>
                                        {t('projects.viewProject')}
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
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                                             style={{
                                                 width: '50px',
                                                 height: '50px',
                                                 background: 'rgba(255,255,255,0.2)'
                                             }}>
                                            <i className="bi bi-graph-up-arrow fs-4"></i>
                                        </div>
                                        <h3 className="h4 fw-bold text-dark mb-0">{t('projects.investors.name')}</h3>
                                    </div>
                                    <p className="text-dark mb-3 lh-lg">
                                        {t('projects.investors.description')}
                                    </p>
                                    <div className="d-flex gap-2 mb-3 flex-wrap">
                                        <span className="badge bg-light text-dark rounded-pill">FinTech</span>
                                        <span className="badge bg-light text-dark rounded-pill">Investment</span>
                                    </div>
                                    <a href="https://fideliza.yoisar.com/crowdfunding/registro-inversor-dinamico"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="btn btn-light btn-sm rounded-pill px-3">
                                        <i className="bi bi-box-arrow-up-right me-1"></i>
                                        {t('projects.viewProject')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-9 text-center">
                            <p className="text-white-50 fs-5 lh-lg">
                                {t('projects.footerNote')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Section */}
            <section className="py-5" id="infraestructura">
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
                                        <i className="bi bi-shield-lock-fill me-2"></i>
                                        {t('infrastructure.title')}
                                    </h2>
                                    <p className="text-secondary fs-5 lh-lg">
                                        {t('infrastructure.description')}
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
                                        <i className="bi bi-chat-dots-fill me-2"></i>
                                        {t('contact.title')}
                                    </h2>
                                    <p className="text-secondary fs-5 mb-4">
                                        {t('contact.description')}
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
                                            <label className="form-label fw-semibold text-dark">{t('contact.nameLabel')}</label>
                                            <input type="text" name="nombre" className="form-control" required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold text-dark">{t('contact.companyLabel')}</label>
                                            <input type="text" name="empresa" className="form-control" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-dark">
                                                {t('contact.needLabel')}
                                            </label>
                                            <textarea name="necesidad" className="form-control" rows="3" required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill">
                                            <i className="bi bi-envelope-fill me-2"></i>
                                            {t('contact.submit')}
                                        </button>
                                    </form>
                                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                                        <a href="https://www.yoisar.com"
                                           className="btn btn-outline-primary btn-lg px-5 py-3 rounded-pill"
                                           target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-globe me-2"></i>
                                            {t('contact.websiteLink')}
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
                            {t('footer.text')}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
