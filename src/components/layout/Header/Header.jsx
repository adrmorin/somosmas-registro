import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" className="header__logo">
          <img src="./assets/logo-icon.jpg" alt="Logo Somos+" width="32" height="32" />
          <span>Somos+</span>
        </Link>
        <nav className="header__nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', whiteSpace: 'nowrap' }}>
          <Link to="/blog" className="nav__link">Blog</Link>
          <Link to="https://www.somosmascuba.com/quienes-somos/" className="nav__link">Somos</Link>
          <Link to="/clubes" className="nav__link">Clubes</Link>
          <Link to="/paquetes" className="nav__link">Paquetes</Link>
          <Link to="/documentos" className="nav__link">Documentos</Link>
          <Link to="https://erp.somosmascuba.com/accounts/login/" className="nav__link">Portal</Link>
          <Link to="/colabora" className="nav__cta--donate" style={{ textDecoration: 'none' }}>COLABORA</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.05)', padding: '0.3rem 0.8rem', borderRadius: '2rem' }}>
            <Link to="/" className="nav__link" style={{ padding: 0, color: 'var(--accent-orange)', fontWeight: 700 }}>ES</Link>
            <span style={{ opacity: 0.3 }}>|</span>
            <Link to="/en" className="nav__link" style={{ padding: 0, color: 'var(--white)', opacity: 0.6 }}>EN</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
