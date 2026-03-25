import React from 'react';

export default function Colabora() {
    return (
        <main>
            <section style={{ position: 'relative', background: 'linear-gradient(135deg, var(--primary-blue) 0%, #0d1645 100%)', color: 'var(--white)', padding: 'clamp(4rem, 10vw, 8rem) var(--spacing-md)', textAlign: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('./assets/header_v2.png')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, mixBlendMode: 'overlay', zIndex: 0 }}></div>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Apoya Nuestra Causa</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6 }}>Tu contribución es fundamental para seguir trabajando por una transición democrática, la libertad y la prosperidad de todos los cubanos.</p>
                </div>
            </section>

            <div className="container" style={{ maxWidth: '1200px', marginInline: 'auto', marginBottom: '6rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '-3rem', position: 'relative', zIndex: 2 }}>

                    {/* PayPal */}
                    <article style={{ background: 'var(--white)', borderRadius: '1.5rem', padding: '3rem 2rem', boxShadow: '0 16px 40px rgba(0,0,0,0.08)', textAlign: 'center', border: '2px solid var(--accent-orange)', position: 'relative' }}>
                        <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,109,0,0.1)', color: 'var(--accent-orange)', fontSize: '0.8rem', fontWeight: 700, padding: '0.4rem 1rem', borderRadius: '2rem' }}>Mejor Método</span>
                        <div style={{ fontSize: '4rem', marginBottom: '1.5rem', color: '#003087' }}><i className="fa-brands fa-paypal"></i></div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>PayPal</h3>
                        <p style={{ color: 'var(--medium-text)', lineHeight: 1.6, marginBottom: '1rem' }}>La forma más sencilla y segura de enviar fondos. Puedes realizar donaciones con tarjeta de crédito, débito o tu balance de PayPal.</p>
                        <div style={{ display: 'inline-block', background: 'rgba(26,35,126,0.05)', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: 700, color: 'var(--primary-blue)', margin: '1rem 0', wordBreak: 'break-all' }}>info@somosmascuba.com</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                            <a href="https://paypal.me/somosmas" target="_blank" rel="noopener noreferrer" className="form__button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', animation: 'pulse-orange 2s infinite ease-in-out' }}>
                                <i className="fa-solid fa-heart"></i> DONAR AHORA
                            </a>
                            <a href="https://paypal.me/somosmas" target="_blank" rel="noopener noreferrer" className="form__button btn-outline" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                                <i className="fa-solid fa-calendar-check"></i> DONACIÓN MENSUAL
                            </a>
                        </div>
                    </article>

                    {/* Zelle */}
                    <article style={{ background: 'var(--white)', borderRadius: '1.5rem', padding: '3rem 2rem', boxShadow: '0 16px 40px rgba(0,0,0,0.08)', textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1.5rem', color: '#741bdf', fontWeight: 800, fontFamily: 'Arial Black, sans-serif', fontStyle: 'italic' }}>Zelle</div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>Zelle</h3>
                        <p style={{ color: 'var(--medium-text)', lineHeight: 1.6 }}>Disponible para residentes en Estados Unidos. Realiza tu aporte de forma rápida y sin comisiones directamente desde tu banco.</p>
                        <div style={{ display: 'inline-block', background: 'rgba(26,35,126,0.05)', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: 700, color: 'var(--primary-blue)', margin: '1rem 0' }}>info@somosmascuba.com</div>
                        <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--success-green)' }}>
                            <i className="fa-solid fa-check-circle"></i> Transferencia directa y sin cargo
                        </p>
                    </article>

                    {/* Facebook */}
                    <article style={{ background: 'var(--white)', borderRadius: '1.5rem', padding: '3rem 2rem', boxShadow: '0 16px 40px rgba(0,0,0,0.08)', textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1.5rem', color: '#1877F2' }}><i className="fa-brands fa-facebook"></i></div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>Facebook</h3>
                        <p style={{ color: 'var(--medium-text)', lineHeight: 1.6 }}>Puedes donar desde tu propio perfil usando tu tarjeta de crédito. Dirígete a nuestra página oficial y haz clic en «Donar».</p>
                        <div style={{ marginTop: '2rem' }}>
                            <a href="https://www.facebook.com/SomosMasCuba" target="_blank" rel="noopener noreferrer" className="form__button" style={{ background: '#1877F2', borderColor: '#1877F2', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                                <i className="fa-brands fa-facebook-f"></i> IR AL PERFIL
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    );
}
