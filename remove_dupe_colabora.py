import os
import re

for file in [f for f in os.listdir('.') if f.endswith('.html')]:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Remove the generic "nav__link" for Colabora/Donate that is lingering in the middle of the navbar
        content = re.sub(r'<a href="\./colabora\.html"\s+class="nav__link"[^>]*>Colabora<\/a>', '', content)
        content = re.sub(r'<a href="\./colabora-en\.html"\s+class="nav__link"[^>]*>Donate<\/a>', '', content)
        
        # In case the title attribute was missing or ordered differently, we remove just the tag if it has 'nav__link' and text 'Colabora'
        content = re.sub(r'<a[^>]*class="nav__link"[^>]*>Colabora<\/a>', '', content)
        content = re.sub(r'<a[^>]*class="nav__link"[^>]*>Donate<\/a>', '', content)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f"Failed {file}: {e}")
