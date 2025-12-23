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
        console.log("Checking Ad Trigger for path:", window.location.pathname);

        // STRICT SAFETY CHECK: Only allow on tool pages
        // Also allow local testing paths if they contain 'tools'
        if (!window.location.href.includes('/tools/')) {
            console.log("Ads blocked: URL does not contain '/tools/'");
            return;
        }

        // Prevent double loading
        if (window.adsLoaded) {
            console.log("Ads already loaded.");
            return;
        }
        window.adsLoaded = true;

        console.log("Injecting Ad Scripts now...");

        // 1. IN-PAGE PUSH (Zone: 10364384)
        (function (s) {
            s.dataset.zone = '10364384';
            s.src = 'https://nap5k.com/tag.min.js';
        })(document.body.appendChild(document.createElement('script')));

        // 2. VIGNETTE BANNER (Zone: 10364375)
        // if (!sessionStorage.getItem('vignetteShown')) {
        (function (s) {
            s.dataset.zone = '10364375';
            s.src = 'https://gizokraijaw.net/vignette.min.js';
        })(document.body.appendChild(document.createElement('script')));
        // sessionStorage.setItem('vignetteShown', 'true');
        // }
    }
};

// AUTO-TRIGGER ADS ON TOOL PAGES (Fast Loading)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => utils.triggerAds());
} else {
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
