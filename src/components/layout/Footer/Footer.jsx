import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <p>&copy; 2024 Movimiento Somos+ - Por una Cuba libre y próspera.</p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <a href="https://www.facebook.com/somosmascuba" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://x.com/somosmascuba" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://plus.google.com/b/107272004533022617651/107272004533022617651" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="https://www.youtube.com/somosmascubaoficial" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
                    <a href="https://instagram.com/somosmascuba" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="mailto:info@somosmascuba.com"><i className="fa-solid fa-envelope"></i></a>
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
