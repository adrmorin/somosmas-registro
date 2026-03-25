import os

for file in [f for f in os.listdir('.') if f.endswith('.html')]:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        if file == 'colabora.html':
            pass
        elif file.endswith('-en.html'):
            content = content.replace('<a href="./colabora-en.html" class="nav__cta--donate">DONATE NOW</a>', '<a href="./colabora-en.html" class="nav__link">Donate</a>')
            content = content.replace('<a href="./colabora-en.html" class="nav__cta--donate" title="Donate">DONATE NOW</a>', '<a href="./colabora-en.html" class="nav__link" title="Donate">Donate</a>')
            content = content.replace('<a href="./sumate-en.html" class="nav__cta">UNIRSE</a>', '<a href="./sumate-en.html" class="nav__cta">JOIN</a>')
            if '<a href="./sumate-en.html" class="nav__cta">JOIN</a>' in content and 'nav__cta--donate' not in content:
                content = content.replace('<a href="./sumate-en.html" class="nav__cta">JOIN</a>', '<div style="display: flex; gap: 0.8rem; align-items: center;"><a href="./colabora-en.html" class="nav__cta--donate">DONATE NOW</a><a href="./sumate-en.html" class="nav__cta">JOIN</a></div>')
        else:
            content = content.replace('<a href="./colabora.html" class="nav__cta--donate">DONAR AHORA</a>', '<a href="./colabora.html" class="nav__link">Colabora</a>')
            content = content.replace('<a href="./colabora.html" class="nav__cta--donate" title="Colabora">DONAR AHORA</a>', '<a href="./colabora.html" class="nav__link" title="Colabora">Colabora</a>')
            if '<a href="./sumate.html" class="nav__cta">UNIRSE</a>' in content and 'nav__cta--donate' not in content:
                content = content.replace('<a href="./sumate.html" class="nav__cta">UNIRSE</a>', '<div style="display: flex; gap: 0.8rem; align-items: center;"><a href="./colabora.html" class="nav__cta--donate">DONAR AHORA</a><a href="./sumate.html" class="nav__cta">UNIRSE</a></div>')

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f"Failed {file}: {e}")
