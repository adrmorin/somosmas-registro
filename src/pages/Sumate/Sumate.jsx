import React from 'react';

export default function Sumate() {
    return (
        <main className="container" style={{ paddingBlock: 'var(--spacing-xl)', maxWidth: '700px' }}>
            <h1 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>Únete al Movimiento</h1>
            <p style={{ color: 'var(--medium-text)', marginBottom: '2rem' }}>Completa el formulario para registrarte como miembro de Somos+.</p>
            <form className="form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="form__group">
                    <label className="form__label" htmlFor="nombre">Nombre completo *</label>
                    <input id="nombre" type="text" className="form__input" placeholder="Tu nombre completo" required />
                </div>
                <div className="form__group">
                    <label className="form__label" htmlFor="email">Correo electrónico *</label>
                    <input id="email" type="email" className="form__input" placeholder="tu@email.com" required />
                </div>
                <div className="form__group">
                    <label className="form__label" htmlFor="pais">País de residencia *</label>
                    <input id="pais" type="text" className="form__input" placeholder="País donde resides actualmente" required />
                </div>
                <div className="form__group">
                    <label className="form__label" htmlFor="profesion">Profesión / Ocupación</label>
                    <input id="profesion" type="text" className="form__input" placeholder="Tu profesión u ocupación" />
                </div>
                <div className="form__group">
                    <label className="form__label" htmlFor="idiomas">Idiomas que dominas</label>
                    <input id="idiomas" type="text" className="form__input" placeholder="Español, Inglés, etc." />
                </div>
                <div className="form__group">
                    <label className="form__label" htmlFor="mensaje">¿Por qué te unes? (Opcional)</label>
                    <textarea id="mensaje" className="form__input" rows="4" placeholder="Cuéntanos tu motivación..."></textarea>
                </div>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                    <input type="checkbox" required style={{ marginTop: '0.25rem' }} />
                    <span style={{ color: 'var(--medium-text)', fontSize: '0.9rem' }}>Acepto recibir información y actualizaciones del Movimiento Somos+.</span>
                </label>
                <button type="submit" className="form__button" style={{ width: '100%' }}>
                    ÚNETE AHORA
                </button>
            </form>
        </main>
    );
}
