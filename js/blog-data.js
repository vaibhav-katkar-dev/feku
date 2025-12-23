/* 
   Feku Blog Data Store 
   SEO-Optimized Content for Viral Tools
*/

const blogPosts = [
    // --- Tool Focused ---
    {
        id: "how-college-crush-calculators-work",
        title: "How College Crush Name Generators Work (Just for Fun 😄)",
        excerpt: "Ever wondered how these love calculators predict your crush? Is it magic or math? Read to find out!",
        category: "Behind the Scenes",
        author: "Team Feku",
        date: "October 16, 2024",
        readTime: "3 min read",
        image: "images/blog/love_calculator_hero.png",
        content: `
            <p>We've all tried them. You enter your name, your crush's name, and <i>boom</i>—a percentage pops up. But how does the <strong>College Crush Name Generator</strong> actually work?</p>
            <h2>The "Magic" Algorithm</h2>
            <p>While we'd love to say we use advanced satellites to track heartbeats, the truth is a bit simpler (and funnier).</p>
            <ul>
                <li><strong>Name Value:</strong> Each letter in your name has a hidden numerical value.</li>
                <li><strong>Vibration Match:</strong> We compare the length and vowels of both names.</li>
                <li><strong>The Random Factor:</strong> Okay, we sprinkle a little bit of random magic to keep things interesting!</li>
            </ul>
            <h3>Why do we do it?</h3>
            <p>It's all about the <strong>dopamine rush</strong>. Seeing a "98% Match" gives you a boost of confidence to actually go talk to them!</p>
            <div class="internal-link-box">
                <p>Want to try it yourself?</p>
                <a href="tools/indian/college-crush.html" class="btn">Try Crush Calculator ❤️</a>
            </div>
        `,
        faq: [
            { q: "Is the result real?", a: "It is 100% just for fun! Don't take it too seriously." },
            { q: "Does it save my data?", a: "No! We do not store any names you enter." }
        ]
    },
    {
        id: "why-people-love-fun-prediction-websites",
        title: "Why People Love Fun Prediction Websites",
        excerpt: "From tarot to AI generators, why are we obsessed with predicting the future?",
        category: "Psychology",
        author: "Team Feku",
        date: "October 15, 2024",
        readTime: "4 min read",
        image: "images/blog/future_crystal_ball.png",
        content: `
            <p>Humans have always been obsessed with the future. Whether it's reading tea leaves or using our <strong>Future Message Generator</strong>, we crave certainty in an uncertain world.</p>
            <h2>The Barnum Effect</h2>
            <p>Have you ever read a horoscope that felt <i>exactly</i> like you? That's the Barnum Effect. General statements that apply to everyone but feel personal.</p>
            <p>Our tools use positive reinforcement to make you smile. That's why you share them!</p>
            <div class="internal-link-box">
                <p>See what your future holds:</p>
                <a href="tools/global/future-message.html" class="btn">Get Future Message ✉️</a>
            </div>
        `,
        faq: []
    },
    {
        id: "top-10-viral-fun-tools-whatsapp",
        title: "Top 10 Viral Fun Tools People Share on WhatsApp",
        excerpt: "The most shared challenges and prank links of 2024.",
        category: "Lists (Viral)",
        author: "Team Feku",
        date: "October 14, 2024",
        readTime: "5 min read",
        image: "images/blog/viral_social_media.png",
        content: `
            <p>WhatsApp groups are boring without some drama. Here are the top tools lighting up family groups and college squads.</p>
            <ol>
                <li><strong>Loyalty Test:</strong> The ultimate friendship breaker (or maker).</li>
                <li><strong>Red Flag Detector:</strong> Exposing your toxic traits hilariously.</li>
                <li><strong>Shaadi Prediction:</strong> The favorite of every Indian Aunty.</li>
            </ol>
            <p>These tools work because they are highly shareable. They invite others to react, laugh, and compare results.</p>
            <div class="internal-link-box">
                <p>Test your bestie now:</p>
                <a href="tools/indian/friendship-test.html" class="btn">Friendship Loyalty Test 🤝</a>
            </div>
        `,
        faq: []
    },
    // --- SEO & Psychology ---
    {
        id: "why-fake-calculators-feel-real",
        title: "Why Fake Calculators Feel So Real to Our Brain",
        excerpt: "The psychology behind 'Kitna Paisa Banega' and other logic-defying tools.",
        category: "Psychology",
        author: "Team Feku",
        date: "October 13, 2024",
        readTime: "4 min read",
        image: "images/blog/brain_psychology.png",
        content: "<p>Our brains love patterns. When you enter input and get an output, your brain treats it as a logical transaction, even if the logic is pure RNG (Random Number Generation)...</p>",
        faq: []
    },
    {
        id: "curiosity-triggers-dopamine",
        title: "How Curiosity Triggers Dopamine in Your Brain",
        excerpt: "Why you can't resist clicking 'View Result'.",
        category: "Psychology",
        author: "Team Feku",
        date: "October 12, 2024",
        readTime: "3 min read",
        image: "images/blog/brain_psychology.png",
        content: "<p>The 'Curiosity Gap' is a powerful psychological trigger. When you see a closed box or a hidden result, your brain itches to know what's inside...</p>",
        faq: []
    },
    {
        id: "are-fun-prediction-tools-dangerous",
        title: "Are Fun Prediction Tools Dangerous or Just Entertainment?",
        excerpt: "Debunking myths about data privacy on fun sites.",
        category: "Safety",
        author: "Team Feku",
        date: "October 10, 2024",
        readTime: "3 min read",
        image: "images/blog/security_privacy.png",
        content: "<p>Rest assured, Feku tools are client-side only. This means the math happens on your phone, and no secret server is stealing your crush's name...</p>",
        faq: []
    },
    // --- Brand ---
    {
        id: "what-is-feku",
        title: "What is Feku? The Internet's Favorite Fun Tool Website",
        excerpt: "Our story, our mission, and why we love harmless pranks.",
        category: "Brand",
        author: "Team Feku",
        date: "October 01, 2024",
        readTime: "2 min read",
        image: "images/blog/viral_social_media.png",
        content: "<p>Feku started with a simple idea: The internet is too serious. We wanted to bring back the era of harmless, funny, shareable web toys...</p>",
        faq: []
    },
    {
        id: "is-feku-safe",
        title: "Is Feku Safe? Privacy, Fun & Transparency",
        excerpt: "We prioritize your privacy above all else.",
        category: "Safety",
        author: "Team Feku",
        date: "September 28, 2024",
        readTime: "2 min read",
        image: "images/blog/security_privacy.png",
        content: "<p>Yes. We use zero tracking cookies for personal data. All calculations are local. We are here for the laughs, not your data.</p>",
        faq: []
    }
];

// Helper to find post by ID
function getPostById(id) {
    return blogPosts.find(post => post.id === id);
}

// Helper to get recent posts
function getRecentPosts(count = 3) {
    return blogPosts.slice(0, count);
}
