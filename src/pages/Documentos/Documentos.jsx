import React from 'react';

export default function Documentos() {
    return (
        <main className="container" style={{ paddingBlock: 'var(--spacing-xl)' }}>
            <h1 style={{ color: 'var(--primary-blue)', marginBottom: '2.5rem', borderBottom: '4px solid var(--accent-orange)', width: 'fit-content', paddingBottom: '0.5rem' }}>
                Documentos
            </h1>
            <p style={{ color: 'var(--medium-text)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                Aquí encontrarás los documentos oficiales del Movimiento Somos+, incluyendo el reglamento, el manifiesto y los principios del movimiento.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                <a href="https://www.somosmascuba.com/reglamento/" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'block', background: 'var(--white)', borderRadius: '1.5rem', padding: '2rem', boxShadow: 'var(--box-shadow)', textDecoration: 'none', transition: 'transform 0.3s ease' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📄</div>
                    <h3 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>Reglamento</h3>
                    <p style={{ color: 'var(--medium-text)', fontSize: '0.95rem' }}>Normativa interna del movimiento político Somos+.</p>
                </a>
                <a href="https://www.somosmascuba.com/ideas-y-principios/" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'block', background: 'var(--white)', borderRadius: '1.5rem', padding: '2rem', boxShadow: 'var(--box-shadow)', textDecoration: 'none', transition: 'transform 0.3s ease' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💡</div>
                    <h3 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>Ideas y Principios</h3>
                    <p style={{ color: 'var(--medium-text)', fontSize: '0.95rem' }}>Los valores y principios que guían a Somos+ en su lucha por Cuba.</p>
                </a>
            </div>
        </main>
    );
}
