import re

file_path = 'S:/Sai_sena_website/products.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Update FACTORIES array
content = content.replace(
    "const FACTORIES = ['All', 'Kids & Baby Wear', 'Men\\'s & Unisex Casuals', 'Women\\'s Wear', 'Woven Garments', 'Work Wear'];",
    "const FACTORIES = ['All', 'Kids & Baby Wear', 'Men\\'s & Unisex Casuals', 'Women\\'s Wear', 'Hoodies & Sweatshirts', 'Woven Garments', 'Work Wear'];"
)

# Process line by line
lines = content.split('\n')
new_lines = []

current_name = ""

for i, line in enumerate(lines):
    if "name: '" in line:
        current_name_match = re.search(r"name: '(.*?)',", line)
        if current_name_match:
            current_name = current_name_match.group(1).lower()
            
    if "factory: 'Men\\'s & Unisex Casuals'," in line or "factory: 'Women\\'s Wear'," in line:
        # Check if it should be Hoodie/Sweatshirt
        if 'hoodie' in current_name or 'sweatshirt' in current_name:
            line = re.sub(r"factory: '.*?',", "factory: 'Hoodies & Sweatshirts',", line)
        # Check if it should be Sleeveless -> Men's & Unisex Casuals
        elif 'sleeveless' in current_name:
            line = re.sub(r"factory: '.*?',", "factory: 'Men\\'s & Unisex Casuals',", line)

    new_lines.append(line)

new_content = '\n'.join(new_lines)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Categories updated successfully!")
