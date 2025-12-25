
import os

def embed_social_bar(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Adsterra Social Bar Code
    social_bar_code = "<!-- Adsterra Social Bar -->\n<script type='text/javascript' src='//pl28320498.effectivegatecpm.com/18/6b/40/186b40209df38259e681465605bffd86.js'></script>"

    # Check if already present
    if "186b40209df38259e681465605bffd86.js" in content:
        print(f"Skipping {filepath} - Social Bar already present.")
        return

    # Insert before closing head tag
    if "</head>" in content:
        content = content.replace("</head>", f"{social_bar_code}\n</head>")
        print(f"Added Social Bar to {filepath}")
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    # Tools directory
    tools_dir = r"h:\feku\tools"
    for root, dirs, files in os.walk(tools_dir):
        for file in files:
            if file.endswith(".html"):
                embed_social_bar(os.path.join(root, file))
    
    # Blog directory
    blog_dir = r"h:\feku\blog"
    for root, dirs, files in os.walk(blog_dir):
        for file in files:
            if file.endswith(".html"):
                embed_social_bar(os.path.join(root, file))
                
    # Index and Blog listing
    embed_social_bar(r"h:\feku\index.html")
    embed_social_bar(r"h:\feku\blog.html")

if __name__ == "__main__":
    main()
