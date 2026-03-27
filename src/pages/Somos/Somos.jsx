import React from 'react';

const Somos = () => {
    return (
        <div style={{ background: 'var(--white)', minHeight: '100vh', paddingBottom: '4rem' }}>
            <div style={{
                background: 'var(--primary-blue)',
                paddingBlock: '6rem',
                color: 'var(--white)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '4rem'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url("./assets/header_v2.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15,
                    zIndex: 1
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>¿Quiénes somos?</h1>
                    <p style={{
                        maxWidth: '800px',
                        marginInline: 'auto',
                        fontSize: '1.25rem',
                        lineHeight: 1.6,
                        opacity: 0.9
                    }}>
                        CONOCIENDO EL MOVIMIENTO SOMOS+
                    </p>
                </div>
            </div>

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                    marginBottom: '6rem'
                }}>
                    <div>
                        <div style={{
                            fontSize: '1.5rem',
                            lineHeight: 1.8,
                            color: 'var(--medium-text)',
                            borderLeft: '4px solid var(--accent-orange)',
                            paddingLeft: '2rem',
                            marginBottom: '2rem'
                        }}>
                            Somos + se funda como un movimiento que convoca a todos los cubanos que deseen participar en la aventura hermosa y difícil de ayudar a construir un país moderno, próspero y libre.
                        </div>
                        <p style={{
                            fontSize: '1.15rem',
                            lineHeight: 1.8,
                            color: 'var(--dark-text)',
                            marginBottom: '2rem'
                        }}>
                            Los hombres y mujeres que integramos este movimiento, asumimos el reto y la responsabilidad que la historia nos impone: Demostrar que en el seno de nuestra maltrecha sociedad aún existen personas que pueden levantar la bandera de la esperanza y emprender, tanto en lo material como lo espiritual, la reconstrucción de la patria.
                        </p>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '-20px',
                            width: '100px',
                            height: '100px',
                            background: 'var(--accent-orange)',
                            opacity: 0.1,
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        <video 
                            controls 
                            poster="./assets/eliecer_real.png" 
                            style={{
                                width: '100%',
                                borderRadius: '2rem',
                                boxShadow: 'var(--box-shadow)',
                                border: '8px solid var(--white)',
                                position: 'relative',
                                zIndex: 2,
                                display: 'block',
                                objectFit: 'cover'
                            }} 
                        >
                            <source src="./assets/Eliécer Ávila presenta el movimiento SOMOS +_1920x1080.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                            <p style={{ color: 'var(--medium-text)', fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                                Fundador, Eliécer Ávila, presenta al movimiento.
                            </p>
                            <a 
                                href="https://www.youtube.com/@somosmasnet" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="form__button" 
                                style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    gap: '0.5rem', 
                                    padding: '0.5rem 1.5rem', 
                                    fontSize: '0.8rem', 
                                    borderRadius: '1rem',
                                    transform: 'scale(0.85)'
                                }}
                            >
                                <i className="fa-brands fa-youtube" style={{ fontSize: '1rem' }}></i> VER CANAL OFICIAL
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{ paddingBottom: '2rem' }}>
                    <h2 style={{ color: 'var(--primary-blue)', fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '3px solid var(--accent-orange)', width: 'fit-content', paddingBottom: '0.3rem' }}>
                        Documentos Oficiales
                    </h2>
                    <p style={{ color: 'var(--medium-text)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '800px', marginBottom: '1.5rem' }}>
                        Aquí encontrarás los documentos oficiales del Movimiento Somos+, incluyendo el reglamento, el manifiesto y los principios rectores.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                        <a href="/reglamento"
                            style={{ display: 'block', background: 'var(--white)', borderRadius: '1.5rem', padding: '1.5rem 1rem', boxShadow: 'var(--box-shadow)', textDecoration: 'none', transition: 'transform 0.3s ease', border: '1px solid rgba(0,0,0,0.05)' }}
                            onMouseOver={(e) => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform='translateY(0)'}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>📄</div>
                            <h3 style={{ color: 'var(--primary-blue)', fontSize: '1rem', marginBottom: '0.5rem' }}>Reglamento Electoral</h3>
                            <p style={{ color: 'var(--medium-text)', fontSize: '0.8rem', lineHeight: 1.5 }}>La normativa que rige las elecciones presidenciales y el funcionamiento democrático.</p>
                            <div style={{ marginTop: '1rem', color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.75rem' }}>LEER REGLAMENTO →</div>
                        </a>

                        <a href="/ideas-y-principios"
                            style={{ display: 'block', background: 'var(--white)', borderRadius: '1.5rem', padding: '1.5rem 1rem', boxShadow: 'var(--box-shadow)', textDecoration: 'none', transition: 'transform 0.3s ease', border: '1px solid rgba(0,0,0,0.05)' }}
                            onMouseOver={(e) => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform='translateY(0)'}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>💡</div>
                            <h3 style={{ color: 'var(--primary-blue)', fontSize: '1rem', marginBottom: '0.5rem' }}>Ideas y Principios</h3>
                            <p style={{ color: 'var(--medium-text)', fontSize: '0.8rem', lineHeight: 1.5 }}>Los valores éticos y pilares ideológicos básicos que definen nuestra identidad.</p>
                            <div style={{ marginTop: '1rem', color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.75rem' }}>VER PRINCIPIOS →</div>
                        </a>
                        
                        <a href="https://www.somosmascuba.com/preguntas-frecuentes/" target="_blank" rel="noopener noreferrer"
                            style={{ display: 'block', background: 'var(--white)', borderRadius: '1.5rem', padding: '1.5rem 1rem', boxShadow: 'var(--box-shadow)', textDecoration: 'none', transition: 'transform 0.3s ease', border: '1px solid rgba(0,0,0,0.05)' }}
                            onMouseOver={(e) => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform='translateY(0)'}>
                            <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>❓</div>
                            <h3 style={{ color: 'var(--primary-blue)', fontSize: '1rem', marginBottom: '0.5rem' }}>Preguntas Frecuentes</h3>
                            <p style={{ color: 'var(--medium-text)', fontSize: '0.8rem', lineHeight: 1.5 }}>Respuestas a las dudas más comunes sobre el movimiento y su estructura.</p>
                            <div style={{ marginTop: '1rem', color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.75rem' }}>VER FAQ →</div>
                        </a>
                    </div>
                </div>

                <div style={{
                    background: 'var(--primary-blue)',
                    borderRadius: '2.5rem',
                    padding: '4rem',
                    color: 'var(--white)',
                    textAlign: 'center',
                    boxShadow: 'var(--box-shadow)'
                }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¿Quieres sumarte al cambio?</h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '700px', marginInline: 'auto' }}>
                        Estamos construyendo el futuro de una Cuba libre y moderna. Tu participación es fundamental para lograrlo.
                    </p>
                    <a href="/sumate" className="form__button" style={{ background: 'var(--white)', color: 'var(--primary-blue)', paddingInline: '4rem' }}>
                        SÚMATE AQUÍ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Somos;
