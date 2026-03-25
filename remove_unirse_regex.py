import os
import re

for file in [f for f in os.listdir('.') if f.endswith('.html')]:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Remove UNIRSE and JOIN completely 
        content = re.sub(r'<a[^>]*>UNIRSE<\/a>', '', content)
        content = re.sub(r'<a[^>]*>JOIN<\/a>', '', content)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f"Failed {file}: {e}")
