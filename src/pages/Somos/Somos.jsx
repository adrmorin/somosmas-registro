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
                        <div style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Presentación Oficial</h3>
                            <p style={{ color: 'var(--medium-text)', marginBottom: '1.5rem' }}>Fundador, Eliécer Ávila, presenta al movimiento.</p>
                            <a href="https://www.youtube.com/@somosmascubaoficial" target="_blank" rel="noopener noreferrer" className="form__button" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                                <i className="fa-brands fa-youtube"></i> VER CANAL OFICIAL
                            </a>
                        </div>
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
                        <img 
                            src="./assets/eliecer_real.png" 
                            alt="Eliécer Ávila" 
                            style={{
                                width: '100%',
                                borderRadius: '2rem',
                                boxShadow: 'var(--box-shadow)',
                                border: '8px solid var(--white)',
                                position: 'relative',
                                zIndex: 2
                            }} 
                        />
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
