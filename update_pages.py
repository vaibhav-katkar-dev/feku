
import os

def update_html_files(filepath, is_blog=False):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    js_path = "../js/main.js" if is_blog else "../../js/main.js"
    if "index.html" in filepath:
        js_path = "js/main.js"
    elif "blog.html" in filepath:
        js_path = "js/main.js"

    # 1. Add main.js if missing
    if "main.js" not in content:
        if "</head>" in content:
            content = content.replace("</head>", f'<script src="{js_path}" defer></script>\n</head>')
            print(f"Added main.js to {filepath}")

    # 2. Ensure fixed-share-bar is present
    if "fixed-share-bar" not in content:
        share_html = f'''
    <!-- Floating Share Button -->
    <a href="javascript:void(0)" onclick="utils.shareWhatsApp(\'Check this viral tool on Feku.me! 🤯\')" class="fixed-share-bar">
        <span>📤 Share on WhatsApp</span>
    </a>
'''
        if "</body>" in content:
            content = content.replace("</body>", f"{share_html}\n</body>")
            print(f"Added fixed-share-bar to {filepath}")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    # Blog posts
    blog_dir = r"h:\feku\blog"
    for root, dirs, files in os.walk(blog_dir):
        for file in files:
            if file.endswith(".html"):
                update_html_files(os.path.join(root, file), is_blog=True)
    
    # Tool posts
    tools_dir = r"h:\feku\tools"
    for root, dirs, files in os.walk(tools_dir):
        for file in files:
            if file.endswith(".html"):
                update_html_files(os.path.join(root, file), is_blog=False)

if __name__ == "__main__":
    main()
