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
        // Add new viral text formatting and ensure URL is directly appended for better previews
        const encodedText = encodeURIComponent(`*${text}* 🤯\n\nCheck out your results here 👇`);
        const url = `https://wa.me/?text=${encodedText}%0A${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank');
    },

    // Copy Link
    copyLink: () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert("Link Copied! Share it with friends. 📋");
        });
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
    }
};

// AUTO-TRIGGER ADS (Will load Start Ad immediately)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => utils.triggerAds());
} else {
    // If not on a result page (just loaded), this will just load Start Ad
    utils.triggerAds();
}

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
