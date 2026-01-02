/* 
   Shared Logic for Viral Tools
*/

// Common Utils
const utils = {
    // Generate random number between min and max
    random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,

    // Select random item from array
    sample: (arr) => arr[Math.floor(Math.random() * arr.length)],

    // Fake loading animation
    simulateLoading: (progressBarId, duration = 1200, callback) => {
        const bar = document.getElementById(progressBarId);
        const container = bar.parentElement; // Assuming container is the parent
        container.style.display = 'block';

        let width = 0;
        const interval = 20; // ms
        const step = 100 / (duration / interval);

        const timer = setInterval(() => {
            width += step;
            if (width >= 100) {
                width = 100;
                clearInterval(timer);
                setTimeout(() => {
                    container.style.display = 'none';
                    if (callback) callback();
                }, 300);
            }
            if (bar) bar.style.width = width + '%';
        }, interval);
    },

    // Share on WhatsApp (Viral Optimized)
    shareWhatsApp: (text) => {
        // Add viral psychology triggers
        const viralText = `🤯 *OMG! This is CRAZY!* 🤯\n\n${text}\n\n⚠️ WARNING: Once you try this, you CAN'T stop! 😱\n\n👇 Click NOW before it's gone 👇`;
        const encodedText = encodeURIComponent(viralText);
        const url = `https://wa.me/?text=${encodedText}%0A${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank');
    },

    // Copy Link with viral alert
    copyLink: () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert("🔗 Link Copied!\n\n🔥 Pro Tip: Paste this EVERYWHERE!\n\nYour friends will THANK you! �💯");
        });
    },

    // Share on Facebook (Viral text)
    shareFacebook: (text) => {
        const url = encodeURIComponent(window.location.href);
        // Viral psychology: Curiosity + FOMO
        const viralText = `🚨 YOU WON'T BELIEVE THIS! 🚨\n\n${text}\n\n😱 97% of people got this WRONG!\n\n👉 Click to find out if YOU'RE in the top 3%!`;
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodeURIComponent(viralText)}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
    },

    // Share on Twitter (Viral tweet)
    shareTwitter: (text) => {
        const url = encodeURIComponent(window.location.href);
        // Twitter-optimized: Short + Curiosity + Hashtags
        const viralText = `🤯 MIND = BLOWN!\n\n${text}\n\n⚠️ This is TOO accurate!\n\n#Viral #MustTry #OMG`;
        const tweet = encodeURIComponent(viralText);
        const shareUrl = `https://twitter.com/intent/tweet?text=${tweet}&url=${url}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
    },

    // Share on Telegram
    shareTelegram: (text) => {
        const url = encodeURIComponent(window.location.href);
        const viralText = `🤯 *OMG! Look at this!* \n\n${text}\n\n👇 Check it out here:`;
        const shareUrl = `https://t.me/share/url?url=${url}&text=${encodeURIComponent(viralText)}`;
        window.open(shareUrl, '_blank');
    },

    // Share on Instagram (Direct Message Priority)
    shareInstagram: () => {
        const text = `🤯 Bro, maine yeh try kiya aur MIND BLOWN! 🔥\n\n😱 Results itne accurate hain ki dar lag gaya! \n\n⚠️ WARNING: Ek baar shuru kiya toh band nahi hota! \n\nTry kar aur mujhe bata tera kya result aaya! 👇`;
        const url = window.location.href;

        // 1. Try Native Web Share (Works best on Mobile for IG Direct)
        if (navigator.share) {
            navigator.share({
                title: 'Feku.me - Viral Fun!',
                text: text,
                url: url
            }).catch((err) => {
                console.error("Share failed:", err);
                // Fallback if user cancels or error, just copy
                // Optional: We could call the fallback logic here too, but usually cancel is intentional.
            });
        } else {
            // 2. Fallback: Copy to Clipboard & Open Instagram Direct
            navigator.clipboard.writeText(`${text}\n\n${url}`).then(() => {
                alert("📋 Text & Link COPIED!\n\n📨 Opening Instagram...\n\n👉 Go to DMs (Messages)\n👉 Select a Friend\n👉 PASTE & Send! 🚀");

                setTimeout(() => {
                    // Try to open Instagram Direct (Inbox)
                    // Using window.location.href usually works better for deep links to apps
                    window.location.href = "instagram://direct";
                }, 500);
            });
        }
    },

    // SAFE AD MANAGER
    triggerAds: () => {
        console.log("Initializing Ad Strategy: Start, Primary Top, Secondary Native, Push Bottom");

        // 0. START AD (Immediate Load)
        // This appears above the tool input form on load
        const startContainer = document.getElementById('ad-start');
        if (startContainer && !startContainer.hasChildNodes()) {
            console.log("Injecting Start Banner...");
            const bannerDiv = document.createElement('div');
            bannerDiv.className = 'ad-banner';
            bannerDiv.style.margin = '0 auto';
            bannerDiv.style.textAlign = 'center';

            const configScript = document.createElement('script');
            configScript.textContent = `
                atOptions = {
                    'key' : 'de6d50d40bf5b4c651a3687dddad8b5f',
                    'format' : 'iframe',
                    'height' : 250,
                    'width' : 300,
                    'params' : {}
                };
            `;
            bannerDiv.appendChild(configScript);

            const invokeScript = document.createElement('script');
            invokeScript.src = "https://www.highperformanceformat.com/de6d50d40bf5b4c651a3687dddad8b5f/invoke.js";
            bannerDiv.appendChild(invokeScript);

            startContainer.appendChild(bannerDiv);
        }

        // 1. PRIMARY BANNER (Above Result / Top of Result Box)
        // This triggers when result is shown
        const primaryContainer = document.getElementById('ad-primary');
        if (primaryContainer && !primaryContainer.hasChildNodes()) {
            console.log("Injecting Primary Banner (Result)...");
            const bannerDiv = document.createElement('div');
            bannerDiv.className = 'ad-banner';
            bannerDiv.style.margin = '0 auto 20px auto';
            bannerDiv.style.textAlign = 'center';

            const configScript = document.createElement('script');
            configScript.textContent = `
                atOptions = {
                    'key' : 'de6d50d40bf5b4c651a3687dddad8b5f',
                    'format' : 'iframe',
                    'height' : 250,
                    'width' : 300,
                    'params' : {}
                };
            `;
            bannerDiv.appendChild(configScript);

            const invokeScript = document.createElement('script');
            invokeScript.src = "https://www.highperformanceformat.com/de6d50d40bf5b4c651a3687dddad8b5f/invoke.js";
            bannerDiv.appendChild(invokeScript);

            primaryContainer.appendChild(bannerDiv);
        }

        // 2. SECONDARY NATIVE BANNER (Below Result)
        const secondaryContainer = document.getElementById('ad-secondary');
        if (secondaryContainer && !secondaryContainer.hasChildNodes()) {
            console.log("Injecting Secondary Native...");
            const nativeDiv = document.createElement('div');
            nativeDiv.className = 'ad-native';
            nativeDiv.style.margin = '20px auto 0 auto';
            nativeDiv.style.textAlign = 'center';

            const nativeScript = document.createElement('script');
            nativeScript.async = true;
            nativeScript.dataset.cfasync = "false";
            nativeScript.src = "https://pl28318610.effectivegatecpm.com/aaa3b3f707f38259e681465605bffd86/invoke.js";

            const nativeContainer = document.createElement('div');
            nativeContainer.id = "container-aaa3b3f707f38259e681465605bffd86";

            nativeDiv.appendChild(nativeScript);
            nativeDiv.appendChild(nativeContainer);
            secondaryContainer.appendChild(nativeDiv);
        }

        // 3. PUSH NOTIFICATION
        // Now hardcoded in HTML for better reliability.
        // Script: bb70a4d84f951cf3190d767b9e8197f5.js

        // SAFE AUTO-SCROLL (To Primary Ad)
        const resultBox = document.getElementById('result');
        // Only scroll if result is clearly visible and not just hidden in DOM
        // Our CSS uses 'show' class to display result
        // We check if it has 'show' OR if we just injected primary container which means user just completed action
        if (resultBox && (resultBox.classList.contains('show') || resultBox.style.display === 'block')) {
            setTimeout(() => {
                resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 800);
        }
    },

    // Floating Share Bar Control
    initShareBar: () => {
        const shareBar = document.querySelector('.fixed-share-bar');
        if (shareBar) {
            // Ensure it's hidden initially
            shareBar.style.display = 'none';
            shareBar.style.opacity = '0';
            shareBar.style.transition = 'opacity 0.5s ease-in-out';

            // Show after 3 seconds
            setTimeout(() => {
                shareBar.style.display = 'flex';
                // Trigger reflow for transition
                shareBar.offsetHeight;
                shareBar.style.opacity = '1';

                // Hide after another 10 seconds (total 13s)
                setTimeout(() => {
                    shareBar.style.opacity = '0';
                    setTimeout(() => {
                        shareBar.style.display = 'none';
                    }, 500);
                }, 10000);
            }, 3000);
        }
    },

    // Inject Blog Ads (Small Native Banners)
    injectBlogAds: () => {
        const articleBody = document.querySelector('.article-body');
        if (articleBody) {
            console.log("Injecting Native Ads into Blog...");

            // Create Ad Container
            const adContainer = document.createElement('div');
            adContainer.className = 'blog-native-ad';
            adContainer.style.margin = '20px 0';
            adContainer.style.textAlign = 'center';
            adContainer.style.minHeight = '100px';

            // Adsterra Native Code
            const script = document.createElement('script');
            script.async = true;
            script.dataset.cfasync = "false";
            script.src = "https://pl28318610.effectivegatecpm.com/aaa3b3f707f38259e681465605bffd86/invoke.js";

            const div = document.createElement('div');
            div.id = "container-aaa3b3f707f38259e681465605bffd86";

            adContainer.appendChild(script);
            adContainer.appendChild(div);

            // Insert after the second paragraph for better visibility and SEO safety
            const paragraphs = articleBody.querySelectorAll('p');
            if (paragraphs.length >= 2) {
                paragraphs[1].insertAdjacentElement('afterend', adContainer);
            } else {
                articleBody.appendChild(adContainer);
            }
        }
    },

    // SMART POP-UNDER (Single Trigger per 24h)
    injectPopUnder: () => {
        // 1. Condition: Only on Tool Pages
        if (!window.location.href.includes('/tools/')) return;

        // 2. Condition: Frequency Cap (24 hours)
        const lastShown = localStorage.getItem('popunder_shown_ts');
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;

        if (lastShown && (now - parseInt(lastShown) < oneDay)) {
            console.log("Pop-under capped for user (24h rule).");
            return;
        }

        console.log("Initializing Smart Pop-under Listeners...");

        // 3. Trigger Logic: First Genuine Interaction
        const loadPopUnder = () => {
            // Remove listeners immediately so it runs ONLY ONCE
            document.removeEventListener('click', loadPopUnder);
            document.removeEventListener('focusin', loadPopUnder);

            console.log("User interaction detected -> Injecting Pop-under Script");

            // Inject the script
            const script = document.createElement('script');
            script.src = "https://pl28373457.effectivegatecpm.com/4a/4f/8c/4a4f8c94f4b222cfa9414d68637c2791.js";
            // script.async = true; // Usually pop-unders need valid execution flow, but async is safer for perf
            document.body.appendChild(script);

            // Mark as shown
            localStorage.setItem('popunder_shown_ts', now.toString());
        };

        // Attach to body for broad capture of any first interaction
        // 'focusin' catches input field taps before full clicks
        document.addEventListener('click', loadPopUnder, { once: true });
        document.addEventListener('focusin', loadPopUnder, { once: true });
    }
};

// AUTO-TRIGGER
document.addEventListener('DOMContentLoaded', () => {
    utils.triggerAds();
    utils.initShareBar();
    utils.injectBlogAds();
    utils.injectPopUnder();
});

// Seeded Random (for consistent results based on name)
// Simple string hash function
String.prototype.hashCode = function () {
    let hash = 0;
    if (this.length == 0) return hash;
    for (let i = 0; i < this.length; i++) {
        const char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
