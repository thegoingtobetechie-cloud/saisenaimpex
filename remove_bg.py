from PIL import Image
import sys

def remove_background(image_path, output_path, tolerance=30):
    print(f"Processing {image_path}...")
    img = Image.open(image_path).convert("RGBA")
    data = img.getdata()
    
    # We assume the top-left pixel is the background color
    bg_color = data[0]
    print(f"Detected background color: {bg_color}")
    
    new_data = []
    for item in data:
        # Check if pixel is within tolerance of bg_color
        if (abs(item[0] - bg_color[0]) <= tolerance and
            abs(item[1] - bg_color[1]) <= tolerance and
            abs(item[2] - bg_color[2]) <= tolerance):
            # Change to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Crop to bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        print(f"Cropped image to {bbox}")
        
    img.save(output_path, "PNG")
    print(f"Saved transparent logo to {output_path}")

if __name__ == "__main__":
    remove_background("assets/logo.png", "assets/logo_transparent.png")
