
import os

# Configuration
LOGO_FILENAME = "logo.svg"
ROOT_DIR = r"h:\feku"

def get_rel_path(depth):
    if depth == 0: return f"images/{LOGO_FILENAME}"
    if depth == 1: return f"../images/{LOGO_FILENAME}"
    if depth == 2: return f"../../images/{LOGO_FILENAME}"
    return f"images/{LOGO_FILENAME}"

def process_file(filepath, depth):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    rel_logo_path = get_rel_path(depth)
    
    # 1. Add Favicon if missing
    if '<link rel="icon"' not in content:
        head_end_idx = content.find('</head>')
        if head_end_idx != -1:
            favicon_tag = f'    <link rel="icon" type="image/svg+xml" href="{rel_logo_path}">\n'
            # Insert before </head>, but preferably after <title> or meta
            # Simple replace:
            content = content.replace('</head>', f'{favicon_tag}</head>')
    
    # 2. Add Logo to Header if missing (Specific for blog.html and tools)
    # Target: <div class="header"> -> inside, before <h1> or inside <h1>?
    # For Tools and Blog, we want a small logo above the title.
    
    if '<div class="header">' in content and 'alt="Feku Logo"' not in content:
        # Check if it's not the index page (index has special header structure changed manually)
        if "index.html" not in filepath: 
             # We want to inject the logo img
             logo_img_tag = f'<a href="{get_home_link(depth)}" style="display:block; margin-bottom:10px;"><img src="{rel_logo_path}" alt="Feku Logo" style="height: 50px;"></a>'
             # We put it at the start of .header div
             content = content.replace('<div class="header">', f'<div class="header">\n            {logo_img_tag}')

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {filepath}")

def get_home_link(depth):
    if depth == 0: return "index.html"
    if depth == 1: return "../index.html"
    if depth == 2: return "../../index.html"
    return "index.html"

# 1. Root files (blog.html, privacy, terms) - Depth 0
for file in ["blog.html", "privacy-policy.html", "terms.html"]:
    path = os.path.join(ROOT_DIR, file)
    if os.path.exists(path):
        process_file(path, 0)

# 2. Blog Posts - Depth 1
blog_dir = os.path.join(ROOT_DIR, "blog")
if os.path.exists(blog_dir):
    for file in os.listdir(blog_dir):
        if file.endswith(".html"):
            process_file(os.path.join(blog_dir, file), 1)

# 3. Tools - Depth 2
tools_dir = os.path.join(ROOT_DIR, "tools")
if os.path.exists(tools_dir):
    for category in ["global", "indian"]:
        cat_dir = os.path.join(tools_dir, category)
        if os.path.exists(cat_dir):
            for file in os.listdir(cat_dir):
                if file.endswith(".html"):
                    process_file(os.path.join(cat_dir, file), 2)
