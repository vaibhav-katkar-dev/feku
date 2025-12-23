
import os
import re

def add_instagram_footer(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Define the Instagram link HTML
    insta_link = '<a href="https://www.instagram.com/feku.me" target="_blank" style="color: #E1306C; font-weight:bold; margin: 0 10px;">Instagram</a>'

    # Check if Instagram link is already present
    if "instagram.com" in content:
        print(f"Skipping {filepath} - Instagram link already present.")
        return

    # Look for the footer links section
    # Most pages seem to have a footer structure similar to index.html or rely on a standard layout
    # We will look for <footer>...<div ...> ... <a href="privacy-policy.html"
    
    # We'll try to insert it before Privacy Policy link in the footer
    if 'href="privacy-policy.html"' in content:
        # Avoid double insertion if script runs multiple times but simple check failed
        # actually simple check covers it.
        
        # Regex to find the Privacy Policy link and insert before it
        # We look for the privacy policy link tag.
        
        # Pattern: <a href="...?privacy-policy.html".*?>
        
        # We can just replace the string for Privacy Policy with "Insta Link \n Privacy Policy Link"
        # However, we need to match the style of existing links.
        # In tool pages, they might use ../../privacy-policy.html or similar relative paths.
        
        # Let's find the Privacy Link
        match = re.search(r'(<a\s+href="[^"]*privacy-policy\.html"[^>]*>)', content)
        if match:
            privacy_link_tag = match.group(1)
            replacement = f'{insta_link}\n            {privacy_link_tag}'
            
            # Replace only the first occurrence in the footer usually
            # But the content might be large.
            # Let's do a string replace since the tag should be unique enough contextually if we include the href
            
            # Actually, to be safe, let's look for the container div if possible
            # But straightforward replacement of the link tag is robust enough for this task
            
            new_content = content.replace(privacy_link_tag, replacement, 1)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Added Instagram link to {filepath}")
        else:
             print(f"Could not find Privacy Policy link in {filepath}")
    else:
        print(f"No Privacy Policy link found in {filepath} (Might be missing footer)")

def main():
    base_dir = r"h:\feku"
    # We skip index.html as we already did it
    skip_files = ["index.html", "clean_ads.py", "update_ads.py", "update_logos.py", "add_insta.py"]
    
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith(".html") and file not in skip_files:
                add_instagram_footer(os.path.join(root, file))

if __name__ == "__main__":
    main()
