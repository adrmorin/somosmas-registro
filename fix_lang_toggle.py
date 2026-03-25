import os
import re

for file in [f for f in os.listdir('.') if f.endswith('.html') and f != 'old_index_temp.html']:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        if file.endswith('-en.html'):
            # The current file is English. The 'ES' link should point to the Spanish counterpart.
            base_name = file.replace('-en.html', '.html')
            # Fix ES link
            content = re.sub(r'<a href="\./index\.html" class="nav__link"([^>]*)>ES<\/a>', f'<a href="./{base_name}" class="nav__link"\\1>ES</a>', content)
            # Fix EN link just in case
            content = re.sub(r'<a href="\./index-en\.html" class="nav__link"([^>]*)>EN<\/a>', f'<a href="./{file}" class="nav__link"\\1>EN</a>', content)
        else:
            # The current file is Spanish. The 'EN' link should point to the English counterpart.
            en_name = file.replace('.html', '-en.html')
            content = re.sub(r'<a href="\./index-en\.html" class="nav__link"([^>]*)>EN<\/a>', f'<a href="./{en_name}" class="nav__link"\\1>EN</a>', content)
            content = re.sub(r'<a href="\./index\.html" class="nav__link"([^>]*)>ES<\/a>', f'<a href="./{file}" class="nav__link"\\1>ES</a>', content)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f"Failed {file}: {e}")
