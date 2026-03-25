import React, { useEffect } from 'react';

export default function Portal() {
    useEffect(() => {
        window.location.href = 'https://erp.somosmascuba.com/accounts/login/';
    }, []);

    return (
        <main className="container" style={{ textAlign: 'center', paddingBlock: 'var(--spacing-xl)' }}>
            <h1 style={{ color: 'var(--primary-blue)' }}>Redirigiendo al Portal...</h1>
            <p style={{ color: 'var(--medium-text)', marginTop: '1rem' }}>
                Si no eres redirigido automáticamente, <a href="https://erp.somosmascuba.com/accounts/login/" style={{ color: 'var(--accent-orange)' }}>haz clic aquí</a>.
            </p>
        </main>
    );
}
