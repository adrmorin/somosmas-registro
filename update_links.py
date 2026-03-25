import os

for file in [f for f in os.listdir('.') if f.endswith('.html')]:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if file.endswith('-en.html'):
            content = content.replace(
                '<a href="https://www.somosmascuba.com/give/" class="nav__link">Donate</a>',
                '<a href="./colabora-en.html" class="nav__cta--donate">DONATE NOW</a>'
            )
            content = content.replace(
                '<a href="https://www.somosmascuba.com/give/" class="nav__link" title="Donate">Donate</a>',
                '<a href="./colabora-en.html" class="nav__cta--donate">DONATE NOW</a>'
            )
        else:
            if file == 'colabora.html':
               # Also fix the links in colabora.html header directly
               content = content.replace(
                 '<a href="./colabora.html" class="nav__link">Colabora</a>',
                 '<a href="./colabora.html" class="nav__cta--donate">DONAR AHORA</a>'
               )
            else:
               content = content.replace(
                   '<a href="https://www.somosmascuba.com/give/" class="nav__link">Colabora</a>',
                   '<a href="./colabora.html" class="nav__cta--donate">DONAR AHORA</a>'
               )
               content = content.replace(
                   '<a href="https://www.somosmascuba.com/give/" class="nav__link" title="Colabora">Colabora</a>',
                   '<a href="./colabora.html" class="nav__cta--donate">DONAR AHORA</a>'
               )
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f"Failed {file}: {e}")
