import os

# 1. Update the button text to "COLABORA" universally.
for file in [f for f in os.listdir('.') if f.endswith('.html')]:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Fix button text and ensure it doesn't wrap
        content = content.replace('>DONAR AHORA</a>', ' style="white-space: nowrap;">COLABORA</a>')
        content = content.replace('>DONATE NOW</a>', ' style="white-space: nowrap;">COLABORA</a>')
        content = content.replace('nav__cta--donate" style="', 'nav__cta--donate" style="white-space: nowrap;')

        # Fix footer bug in .en.html files
        if file.endswith('-en.html'):
            if '<footer class="footer container">' in content:
                # Common bad footer pattern in english files
                bad_footer = """    <footer class="footer container">
        <div
            style="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap; gap: 2rem;">
            <p style="margin: 0;">&copy; 2024 Somos+ Movement - For a prosperous and free Cuba.</p>
            <div style="display: flex; gap: 1.5rem;">
                <a href="#" class="nav__link" style="padding: 0; color: var(--white); opacity: 1; font-size: 1.5rem;"><i
                        class="fa-brands fa-facebook"></i></a>
                <a href="#" class="nav__link" style="padding: 0; color: var(--white); opacity: 1; font-size: 1.5rem;"><i
                        class="fa-brands fa-x-twitter"></i></a>
                <a href="#" class="nav__link" style="padding: 0; color: var(--white); opacity: 1; font-size: 1.5rem;"><i
                        class="fa-brands fa-youtube"></i></a>
                <a href="#" class="nav__link" style="padding: 0; color: var(--white); opacity: 1; font-size: 1.5rem;"><i
                        class="fa-brands fa-instagram"></i></a>
            </div>
        </div>"""
                
                good_footer = """    <footer class="footer">
        <div class="footer__container container">
            <p>&copy; 2024 Somos+ Movement - For a prosperous and free Cuba.</p>
            <div style="display: flex; gap: 1.5rem; justify-content: center;">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>"""

                bad_footer2 = """    <footer class="footer container">
        <div
            style="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap; gap: 2rem;">
            <p style="margin: 0;">&copy; 2024 Somos+ Movement - For a prosperous and free Cuba.</p>
            <div style="display: flex; gap: 1.5rem;">
                <a href="#" class="nav__link" style="padding: 0; color: var(--white); opacity: 1; font-size: 1.5rem;"><i
                        class="fa-brands fa-facebook"></i></a>
                <a href="#" class="nav__link" style="padding: 0; color: var(--white); opacity: 1; font-size: 1.5rem;"><i
                        class="fa-brands fa-x-twitter"></i></a>
                <a href="#" class="nav__link" style="padding: 0; color: var(--white); opacity: 1; font-size: 1.5rem;"><i
                        class="fa-brands fa-youtube"></i></a>
            </div>
        </div>"""

                good_footer2 = """    <footer class="footer">
        <div class="footer__container container">
            <p>&copy; 2024 Somos+ Movement - For a prosperous and free Cuba.</p>
            <div style="display: flex; gap: 1.5rem; justify-content: center;">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>"""

                content = content.replace(bad_footer, good_footer).replace(bad_footer2, good_footer2)
        
        # 3. Add coordinators grid target to clubes
        if file in ['clubes.html', 'clubes-en.html']:
            content = content.replace('<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2.5rem;">', '<div class="coordinators-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2.5rem;">')

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f"Failed {file}: {e}")

# 4. Add the CSS for coordinators-grid
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

if '.coordinators-grid' not in css:
    append_css = '''
/* Coordinators Grid */
.coordinators-grid .feature-card {
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.coordinators-grid .feature-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('./assets/header_v2.png');
    background-size: cover;
    background-position: center bottom;
    opacity: 0.25;
    z-index: -1;
    pointer-events: none;
}

.coordinators-grid .feature-card > * {
    position: relative;
    z-index: 2;
}

/* Ensure CTA doesn't wrap */
.nav__cta--donate {
    white-space: nowrap;
}
'''
    with open('style.css', 'a', encoding='utf-8') as f:
        f.write(append_css)
