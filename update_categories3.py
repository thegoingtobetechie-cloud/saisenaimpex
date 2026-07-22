import re

file_path = 'S:/Sai_sena_website/products.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
new_lines = []

current_name = ""

for i, line in enumerate(lines):
    if "name: '" in line:
        current_name_match = re.search(r"name: '(.*?)',", line)
        if current_name_match:
            current_name = current_name_match.group(1).lower()
            
    if "factory: 'Men\\'s & Unisex Casuals'," in line:
        if current_name == 'shorts 2' or current_name == 'shorts 3':
            line = re.sub(r"factory: '.*?',", "factory: 'Women\\'s Wear',", line)

    new_lines.append(line)

new_content = '\n'.join(new_lines)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Categories updated successfully!")
