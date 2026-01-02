import os
import re

root_dir = r"h:\feku\tools"

# 1. Update shareResult signature
# function shareResult() { -> function shareResult(platform) {
func_sig_pattern = re.compile(r"function\s+shareResult\s*\(\)\s*\{")

# 2. Update logic inside shareResult
# Match: utils.shareWhatsApp( ARG );
# ARG can be anything until the closing );
call_pattern = re.compile(r"utils\.shareWhatsApp\((.*?)\);", re.DOTALL)

# 3. Update Twitter button
# <button class="share-btn twitter" onclick="shareResult()">🐦 Twitter</button>
btn_pattern = re.compile(r'<button class="share-btn twitter" onclick="shareResult\(\)">.*?Twitter.*?</button>', re.DOTALL)

for subdir, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(subdir, file)
            
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            if "function shareResult()" not in content:
                continue
            
            print(f"Processing {filepath}...")
            
            # Step 1: Update Function Signature
            new_content = func_sig_pattern.sub("function shareResult(platform) {", content)
            
            # Step 2: Update Logic inside
            # We assume there's one utils.shareWhatsApp call inside shareResult.
            # We need to capture the argument `msg` and wrap it.
            
            # Helper to replace validly
            def logic_replacer(match):
                msg = match.group(1)
                return f"""
            if (platform === 'telegram') {{
                utils.shareTelegram({msg});
            }} else {{
                utils.shareWhatsApp({msg});
            }}"""
            
            # We limit the replacement to the script block if possible, but global replace in file might be safe 
            # if utils.shareWhatsApp is only used inside shareResult in these simple files.
            # To be safer, we should probably only replace it inside shareResult.
            # But complicating regex for that is error prone.
            # Let's assume utils.shareWhatsApp is the call we want to branch.
            
            new_content = call_pattern.sub(logic_replacer, new_content)
            
            # Step 3: Update Twitter Button
            def btn_replacer(match):
                return '<button class="share-btn telegram" onclick="shareResult(\'telegram\')">✈️ Telegram</button>'
                
            new_content = btn_pattern.sub(btn_replacer, new_content)
            
            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {filepath}")

print("Done.")
