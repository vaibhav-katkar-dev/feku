
import os

def get_canonical_url(root_dir, filepath):
    rel_path = os.path.relpath(filepath, root_dir).replace('\\', '/')
    
    if rel_path == "index.html":
        return "https://feku.me/"
    
    return f"https://feku.me/{rel_path}"

def add_canonical_to_file(root_dir, filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '<link rel="canonical"' in content:
        print(f"Skipping {filepath} (already has canonical)")
        return

    canonical_url = get_canonical_url(root_dir, filepath)
    canonical_tag = f'    <link rel="canonical" href="{canonical_url}" />'

    if "</head>" in content:
        # Try to insert after <title> or near other meta tags
        if "<title>" in content:
            content = content.replace("</title>", f"</title>\n{canonical_tag}")
        else:
            content = content.replace("</head>", f"{canonical_tag}\n</head>")
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Added canonical to {filepath}: {canonical_url}")

def main():
    root_dir = r"h:\feku"
    
    # Process files in root
    for file in os.listdir(root_dir):
        if file.endswith(".html"):
            add_canonical_to_file(root_dir, os.path.join(root_dir, file))
            
    # Process blog dir
    blog_dir = os.path.join(root_dir, "blog")
    if os.path.exists(blog_dir):
        for root, dirs, files in os.walk(blog_dir):
            for file in files:
                if file.endswith(".html"):
                    add_canonical_to_file(root_dir, os.path.join(root, file))

    # Process tools dir
    tools_dir = os.path.join(root_dir, "tools")
    if os.path.exists(tools_dir):
        for root, dirs, files in os.walk(tools_dir):
            for file in files:
                if file.endswith(".html"):
                    add_canonical_to_file(root_dir, os.path.join(root, file))

if __name__ == "__main__":
    main()
