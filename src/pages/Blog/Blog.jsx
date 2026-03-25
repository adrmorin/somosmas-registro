import React from 'react';

export default function Blog() {
    return (
        <main className="container" style={{ marginBlock: 'var(--spacing-xl)', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '4rem' }}>
            <div className="blog-main">
                <h1 style={{ color: 'var(--primary-blue)', marginBottom: '2.5rem', borderBottom: '4px solid var(--accent-orange)', width: 'fit-content', paddingBottom: '0.5rem' }}>
                    Últimas publicaciones
                </h1>

                <article className="featured-article" style={{ marginBottom: '4rem' }}>
                    <img src="./assets/hero_v3.png" alt="Transición en Cuba" style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: '2rem', boxShadow: 'var(--box-shadow)', marginBottom: '2rem' }} />
                    <span className="card__category" style={{ background: 'var(--accent-orange)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 700 }}>DESTACADO / IA</span>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-blue)', marginTop: '1.5rem', lineHeight: 1.2 }}>¿Cómo sería la transición en Cuba según la Inteligencia Artificial?</h2>
                    <p style={{ color: 'var(--medium-text)', fontSize: '1.15rem', marginTop: '1rem', lineHeight: 1.6 }}>Analizamos los escenarios propuestos por diversos modelos de IA sobre el futuro democrático de la isla, la reconstrucción económica y el papel fundamental de la sociedad civil y el exilio en este proceso histórico.</p>
                    <a href="#" style={{ color: 'var(--accent-orange)', textDecoration: 'none', fontWeight: 800, display: 'inline-block', marginTop: '1.5rem', borderBottom: '2px solid var(--accent-orange)' }}>SEGUIR LEYENDO →</a>
                </article>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                    <article className="blog-card">
                        <img src="./assets/blog_proyecto_cuba.png" style={{ width: '100%', height: '240px', borderRadius: '1.5rem', objectFit: 'cover', marginBottom: '1.5rem' }} alt="Proyecto Cuba" />
                        <span className="card__category">POLÍTICA</span>
                        <h3 style={{ marginTop: '1rem', color: 'var(--primary-blue)' }}>Firma del 'Proyecto Cuba' en Europa</h3>
                        <p style={{ fontSize: '0.95rem', marginTop: '0.75rem', color: 'var(--medium-text)' }}>Organizaciones en el exilio convocan a la firma masiva para promover la participación ciudadana.</p>
                    </article>
                    <article className="blog-card">
                        <img src="./assets/blog_libertad.png" style={{ width: '100%', height: '240px', borderRadius: '1.5rem', objectFit: 'cover', marginBottom: '1.5rem' }} alt="Libertad" />
                        <span className="card__category">SOCIEDAD</span>
                        <h3 style={{ marginTop: '1rem', color: 'var(--primary-blue)' }}>El camino a la libertad</h3>
                        <p style={{ fontSize: '0.95rem', marginTop: '0.75rem', color: 'var(--medium-text)' }}>El exilio cubano mantiene viva la llama de la resistencia y la esperanza de una Cuba libre.</p>
                    </article>
                </div>
            </div>

            <aside>
                <div style={{ background: 'var(--white)', borderRadius: '1.5rem', padding: '2rem', boxShadow: 'var(--box-shadow)', marginBottom: '2rem' }}>
                    <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Síguenos</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <a href="https://www.facebook.com/SomosMasCuba" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--medium-text)', fontWeight: 600, fontSize: '0.9rem' }}>
                            <div style={{ width: '40px', height: '40px', background: '#1877F2', borderRadius: '50%', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                                <i className="fa-brands fa-facebook"></i>
                            </div>
                            /SomosMasCuba
                        </a>
                        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--medium-text)', fontWeight: 600, fontSize: '0.9rem' }}>
                            <div style={{ width: '40px', height: '40px', background: 'var(--primary-blue)', borderRadius: '50%', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                            Somos+ Canal Oficial
                        </a>
                    </div>
                </div>
            </aside>
        </main>
    );
}
