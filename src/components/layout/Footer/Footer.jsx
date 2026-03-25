import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <p>&copy; 2024 Movimiento Somos+ - Por una Cuba libre y próspera.</p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <nav className="footer__nav container">
                <a href="https://www.somosmascuba.com/ideas-y-principios/">IDEAS Y PRINCIPIOS</a>
                <a href="https://www.somosmascuba.com/reglamento/">REGLAMENTO</a>
                <a href="https://www.somosmascuba.com/">WEB OFICIAL</a>
            </nav>
        </footer>
    );
}
