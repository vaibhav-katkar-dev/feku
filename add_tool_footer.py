
import os

def append_footer_to_tools(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if "instagram.com" in content:
        print(f"Skipping {filepath} - Instagram link already present.")
        return

    # Tool pages often don't have a footer. We should add one before the script tag or closing body.
    # The clean_ads.py replaced ads with <div id="ad-container"></div>
    # We can append the footer after that div's parent container closes, or just before </body>
    
    # HTML for the footer to be consistent with main page but adapted relative paths if needed
    # Since these are tool pages, links need to go up two levels ../../
    
    footer_html = """
    <footer style="text-align: center; color: #aaa; padding: 40px 20px; border-top: 1px solid #eee; margin-top: 50px;">
        <div style="margin-top: 10px;">
            <a href="../../blog.html" style="color: #6c5ce7; font-weight:bold; margin: 0 10px;">Blog</a>
            <a href="https://www.instagram.com/feku.me" target="_blank" style="color: #E1306C; font-weight:bold; margin: 0 10px;">Instagram</a>
            <a href="../../privacy-policy.html" style="color: #666; margin: 0 10px;">Privacy Policy</a>
            <a href="../../terms.html" style="color: #666; margin: 0 10px;">Terms</a>
        </div>
        <p style="margin-top: 20px; font-size: 0.8rem;">&copy; 2025 Feku.me</p>
    </footer>
    """

    # Insert before <script> or </body>
    if "</body>" in content:
        # Use split/join to find the last </body>
        parts = content.rsplit("</body>", 1)
        # Check if there is a script tag near the end usually.
        # Ideally we want it inside the body.
        
        # Actually most tool pages have a structure like:
        # ...
        # </div> <!-- tool-container -->
        # </div> <!-- container -->
        # <script>
        
        # If we stick it at the end of the container, it's safer.
        # But looking for </div> is risky.
        
        # Let's put it just before the <script> block if it exists
        if "<script>" in content:
             # Find the script tag that has the main logic (usually near end)
             # But simply appending to body is safe for footer.
             new_content = parts[0] + footer_html + "</body>" + parts[1]
        else:
             new_content = parts[0] + footer_html + "</body>" + parts[1]
             
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Added footer to {filepath}")

def main():
    base_dir = r"h:\feku\tools"
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith(".html"):
                append_footer_to_tools(os.path.join(root, file))

if __name__ == "__main__":
    main()
