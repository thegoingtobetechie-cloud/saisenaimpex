import re

file_path = 'S:/Sai_sena_website/products.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Update FACTORIES array
content = content.replace(
    "const FACTORIES = ['All', 'Apparels', 'Woven Garments', 'Work Wear'];",
    "const FACTORIES = ['All', 'Kids & Baby Wear', 'Men\\'s & Unisex Casuals', 'Women\\'s Wear', 'Woven Garments', 'Work Wear'];"
)

# A function to determine the new factory
def get_new_factory(name, tags):
    name_lower = name.lower()
    tags_lower = [t.lower() for t in tags]
    
    kids_keywords = ['kids', 'romper', 'bodysuit', 'girls dress', 'infant', 'baby', 'pyjama-kids']
    womens_keywords = ['women', 'jumpsuit', 'sleeveless']
    
    # Check Kids
    if any(k in name_lower for k in kids_keywords) or any(k in t for t in tags_lower for k in kids_keywords):
        return "Kids & Baby Wear"
    
    # Check Women
    if any(k in name_lower for k in womens_keywords) or any(k in t for t in tags_lower for k in womens_keywords):
        return "Women\\'s Wear"
        
    # Default for the rest of Apparels (Tee, joggers, sweatpants, shorts, hoodie, sweatshirt)
    return "Men\\'s & Unisex Casuals"

# We need to find all objects in PRODUCTS and modify the factory if it is 'Apparels'
# A regex to find factory: 'Apparels' and replace based on the product context
# Since regex for parsing JS objects is messy, let's just do line by line processing

lines = content.split('\n')
new_lines = []

current_name = ""
current_tags = []
in_product = False

for i, line in enumerate(lines):
    if "name: '" in line:
        current_name = re.search(r"name: '(.*?)',", line)
        if current_name:
            current_name = current_name.group(1)
            
    if "tags: [" in line:
        tags_match = re.search(r"tags: \[(.*?)\]", line)
        if tags_match:
            tags_str = tags_match.group(1)
            current_tags = [t.strip().strip("'") for t in tags_str.split(',')]
            
    if "factory: 'Apparels'," in line:
        # We need to look ahead to find tags if they are below, or use name if tags were above.
        # In the file, order is usually: id, sku, name, factory, price, image, tags, description
        # So name is available, tags are below. Let's look ahead for tags.
        temp_tags = []
        for j in range(i, min(i+10, len(lines))):
            if "tags: [" in lines[j]:
                tags_match = re.search(r"tags: \[(.*?)\]", lines[j])
                if tags_match:
                    tags_str = tags_match.group(1)
                    temp_tags = [t.strip().strip("'") for t in tags_str.split(',')]
                break
        
        new_factory = get_new_factory(current_name, temp_tags)
        line = line.replace("'Apparels'", f"'{new_factory}'")
        
    new_lines.append(line)

new_content = '\n'.join(new_lines)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Categories updated successfully!")
