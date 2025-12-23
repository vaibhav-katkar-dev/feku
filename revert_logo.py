
import os
import re

def revert_logo_references(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Track if any changes were made
    original_content = content

    # Replace logo.png back to logo.svg
    content = content.replace('images/logo.png', 'images/logo.svg')
    content = content.replace('../../images/logo.png', '../../images/logo.svg')
    content = content.replace('../images/logo.png', '../images/logo.svg')
    
    # Also update favicon reference back to SVG
    content = re.sub(
        r'<link rel="icon" type="image/png" href="([^"]*)/logo\.png">',
        r'<link rel="icon" type="image/svg+xml" href="\1/logo.svg">',
        content
    )

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Reverted logo to SVG in {filepath}")

def main():
    base_dir = r"h:\feku"
    
    # Update all HTML files
    for root, dirs, files in os.walk(base_dir):
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                revert_logo_references(filepath)

if __name__ == "__main__":
    main()
