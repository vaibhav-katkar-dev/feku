import os
import re

index_path = r"h:\feku\index.html"

with open(index_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add Preconnects before CSS link
preconnects = """<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>"""

if "fonts.gstatic.com" not in content:
    content = content.replace('<link rel="stylesheet" href="css/style.css">', 
                              f'{preconnects}\n    <link rel="stylesheet" href="css/style.css">')

# 2. Add dimensions to logo
# <img src="images/logo.svg" alt="Feku Logo" style="height: 60px; margin-bottom: 15px;">
# SVG might not need width/height if styled by CSS, but good for CLS if aspect ratio known.
# Let's assume square or close to it.
content = content.replace('src="images/logo.svg" alt="Feku Logo" style="height: 60px;',
                          'src="images/logo.svg" alt="Feku Logo" width="60" height="60" style="height: 60px;')

# 3. Replace card-img-bg divs with wrapper + img
# Regex to capture: <div class="card-img-bg" style="background-image: url('URL'); ..."></div>
# Replaces with: <div class="card-img-wrapper"><img src="URL" alt="Tool Image" loading="lazy" width="300" height="200"></div>

def replacer(match):
    style_content = match.group(1)
    # Extract url
    url_match = re.search(r"url\('([^']+)'\)", style_content)
    if not url_match:
        return match.group(0) # Fail safe
    
    url = url_match.group(1)
    
    # Try to determine better alt text if possible, but generic is okay for now as these are mostly decorative thumbnails
    # or we can try to guess from the previous line? No, regex is local.
    # We will use "Viral Tool Icon" or similar.
    
    return f'<div class="card-img-wrapper"><img src="{url}" alt="Viral Fun Tool" loading="lazy" width="300" height="200"></div>'

pattern = re.compile(r'<div class="card-img-bg"\s+style="([^"]+)">\s*</div>', re.DOTALL)

new_content = pattern.sub(replacer, content)

# 4. Handle mini-blog-img as well? 
# .mini-blog-img { width: 120px; ... background-image: ... }
# Let's convert them to img too for consistency and speed.
# We need to update CSS for them first?
# The CSS: .mini-blog-img { width: 120px; background-size: cover; ... }
# If we change to img, same logic.

with open(index_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Optimized {index_path}")
