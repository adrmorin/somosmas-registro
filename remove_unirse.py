import os

for file in [f for f in os.listdir('.') if f.endswith('.html')]:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        content = content.replace('<a href="./sumate.html" class="nav__cta">UNIRSE</a>', '')
        content = content.replace('<a href="./sumate-en.html" class="nav__cta">JOIN</a>', '')

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f"Failed {file}: {e}")
