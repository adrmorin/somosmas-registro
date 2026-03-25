import os
import re

footer_es = """<footer class="footer">
        <div class="footer__container container">
            <p>&copy; 2024 Movimiento Somos+ - Por una Cuba libre y próspera.</p>
            <div style="display: flex; gap: 1.5rem; justify-content: center;">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
        <nav class="footer__nav container">
            <a href="https://www.somosmascuba.com/ideas-y-principios/">IDEAS Y PRINCIPIOS</a>
            <a href="https://www.somosmascuba.com/reglamento/">REGLAMENTO</a>
            <a href="https://www.somosmascuba.com/">WEB OFICIAL</a>
        </nav>
    </footer>"""

footer_en = """<footer class="footer">
        <div class="footer__container container">
            <p>&copy; 2024 Somos+ Movement - For a prosperous and free Cuba.</p>
            <div style="display: flex; gap: 1.5rem; justify-content: center;">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
        <nav class="footer__nav container">
            <a href="https://www.somosmascuba.com/ideas-y-principios/">IDEAS & PRINCIPLES</a>
            <a href="https://www.somosmascuba.com/reglamento-para-las-elecciones-presidenciales-del-movimiento-politico-somos/">REGULATIONS</a>
            <a href="https://www.somosmascuba.com/">OFFICIAL WEB</a>
        </nav>
    </footer>"""

for file in [f for f in os.listdir('.') if f.endswith('.html') and f != 'old_index_temp.html']:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        replacement = footer_en if file.endswith('-en.html') else footer_es
        new_content = re.sub(r'<footer.*?<\/footer>', replacement, content, flags=re.DOTALL)
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
    except Exception as e:
        print(f"Failed {file}: {e}")
