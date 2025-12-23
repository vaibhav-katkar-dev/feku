
import os

def embed_push_script(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The Push Script from User
    push_code = '<script src="https://pl28318757.effectivegatecpm.com/bb/70/a4/bb70a4d84f951cf3190d767b9e8197f5.js"></script>'

    # Check if already present
    if "bb70a4d84f951cf3190d767b9e8197f5.js" in content:
        print(f"Skipping {filepath} - Push script already present.")
        return

    # Insert before closing body tag
    # This is the most reliable place
    if "</body>" in content:
        content = content.replace("</body>", f"{push_code}\n</body>")
        print(f"Added Push Script to {filepath}")
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    base_dir = r"h:\feku\tools"
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith(".html"):
                embed_push_script(os.path.join(root, file))

if __name__ == "__main__":
    main()
