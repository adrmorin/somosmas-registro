import os
import re

nav_es = """<nav class="header__nav" style="display: flex; align-items: center; gap: 1.5rem; white-space: nowrap;">
        <a href="./blog.html" class="nav__link">Blog</a>
        <a href="https://www.somosmascuba.com/quienes-somos/" class="nav__link">Somos</a>
        <a href="./clubes.html" class="nav__link">Clubes</a>
        <a href="http://bajanda.live" class="nav__link">Paquetes</a>
        <a href="#" class="nav__link">Documentos</a>
        <a href="https://erp.somosmascuba.com/accounts/login/" class="nav__link">Portal</a>
        <a href="./colabora.html" class="nav__cta--donate" style="text-decoration: none;">COLABORA</a>
        <div style="display: flex; align-items: center; gap: 0.5rem; background: rgba(0,0,0,0.05); padding: 0.3rem 0.8rem; border-radius: 2rem;">
            <a href="./index.html" class="nav__link" style="padding: 0; color: var(--accent-orange); font-weight: 700;">ES</a>
            <span style="opacity: 0.3;">|</span>
            <a href="./index-en.html" class="nav__link" style="padding: 0; color: var(--white); opacity: 0.6;">EN</a>
        </div>
      </nav>"""

nav_en = """<nav class="header__nav" style="display: flex; align-items: center; gap: 1.5rem; white-space: nowrap;">
        <a href="./blog-en.html" class="nav__link">Blog</a>
        <a href="https://www.somosmascuba.com/quienes-somos/" class="nav__link">About Us</a>
        <a href="./clubes-en.html" class="nav__link">Clubs</a>
        <a href="http://bajanda.live" class="nav__link">Packages</a>
        <a href="#" class="nav__link">Documents</a>
        <a href="https://erp.somosmascuba.com/accounts/login/" class="nav__link">Portal</a>
        <a href="./colabora-en.html" class="nav__cta--donate" style="text-decoration: none;">DONATE NOW</a>
        <div style="display: flex; align-items: center; gap: 0.5rem; background: rgba(0,0,0,0.05); padding: 0.3rem 0.8rem; border-radius: 2rem;">
            <a href="./index.html" class="nav__link" style="padding: 0; color: var(--white); opacity: 0.6;">ES</a>
            <span style="opacity: 0.3;">|</span>
            <a href="./index-en.html" class="nav__link" style="padding: 0; color: var(--accent-orange); font-weight: 700;">EN</a>
        </div>
      </nav>"""

for file in [f for f in os.listdir('.') if f.endswith('.html') and f != 'old_index_temp.html']:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        replacement = nav_en if file.endswith('-en.html') else nav_es
        new_content = re.sub(r'<nav class="header__nav">.*?<\/nav>', replacement, content, flags=re.DOTALL)
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
    except Exception as e:
        print(f"Failed {file}: {e}")

# Also update the React prototype file
try:
    with open('src/components/layout/Header/Header.jsx', 'r', encoding='utf-8') as f:
        content = f.read()
        
    jsx_nav_es = """<nav className="header__nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', whiteSpace: 'nowrap' }}>
          <a href="./blog.html" className="nav__link">Blog</a>
          <a href="https://www.somosmascuba.com/quienes-somos/" className="nav__link">Somos</a>
          <a href="./clubes.html" className="nav__link">Clubes</a>
          <a href="http://bajanda.live" className="nav__link">Paquetes</a>
          <a href="#" className="nav__link">Documentos</a>
          <a href="https://erp.somosmascuba.com/accounts/login/" className="nav__link">Portal</a>
          <a href="./colabora.html" className="nav__cta--donate" style={{ textDecoration: 'none' }}>COLABORA</a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.05)', padding: '0.3rem 0.8rem', borderRadius: '2rem' }}>
            <a href="./index.html" className="nav__link" style={{ padding: 0, color: 'var(--accent-orange)', fontWeight: 700 }}>ES</a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="./index-en.html" className="nav__link" style={{ padding: 0, color: 'var(--white)', opacity: 0.6 }}>EN</a>
          </div>
        </nav>"""
        
    new_content = re.sub(r'<nav className="header__nav">.*?<\/nav>', jsx_nav_es, content, flags=re.DOTALL)
    with open('src/components/layout/Header/Header.jsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
except Exception as e:
    pass

