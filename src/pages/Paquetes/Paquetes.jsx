import React, { useEffect } from 'react';

export default function Paquetes() {
    useEffect(() => {
        window.location.href = 'http://bajanda.live';
    }, []);

    return (
        <main className="container" style={{ textAlign: 'center', paddingBlock: 'var(--spacing-xl)' }}>
            <h1 style={{ color: 'var(--primary-blue)' }}>Redirigiendo a Paquetes...</h1>
            <p style={{ color: 'var(--medium-text)', marginTop: '1rem' }}>
                Si no eres redirigido automáticamente, <a href="http://bajanda.live" style={{ color: 'var(--accent-orange)' }}>haz clic aquí</a>.
            </p>
        </main>
    );
}
