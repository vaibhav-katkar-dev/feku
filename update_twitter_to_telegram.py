import os
import re

root_dir = r"h:\feku\tools"

# Regex to find the Twitter button
# Matches: <button class="share-btn twitter" onclick="utils.shareTwitter('some text')">🐦 Twitter</button>
# Captures the arguments inside shareTwitter(...) as group 1.
pattern = re.compile(
    r'<button class="share-btn twitter" onclick="utils\.shareTwitter\(([^)]+)\)">.*?Twitter.*?</button>',
    re.IGNORECASE | re.DOTALL
)

count = 0

for subdir, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(subdir, file)
            
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            if "share-btn twitter" not in content:
                continue
                
            # Replacement function to use the captured group
            def replacement(match):
                args = match.group(1)
                return f'<button class="share-btn telegram" onclick="utils.shareTelegram({args})">✈️ Telegram</button>'
            
            new_content = pattern.sub(replacement, content)
            
            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
                count += 1

print(f"Total files updated: {count}")
