const storyData = {
    // Question 1 - Should go to Question 2, NOT directly to endings!
    q1: {
        question: "The cosmos asks: What energy calls to you?",
        choices: {
            top: { text: "Bold Lightning Energy", next: "q2_ending1" },  // FIXED
            left: { text: "Flowing Water Energy", next: "q2_ending2" },  // FIXED
            right: { text: "Mystical Star Energy", next: "q2_ending3" }  // FIXED
        }
    },

    // Question 2 for Ending 1 path
    q2_ending1: {
        question: "Your lightning path reveals: How will you channel this energy?",
        choices: {
            top: { text: "Through daring adventures", next: "q3_ending1_a" },  // FIXED
            left: { text: "Through bold creativity", next: "q3_ending1_b" },   // FIXED
            right: { text: "Go back and choose again", next: "q1" }
        }
    },

    // Question 2 for Ending 2 path
    q2_ending2: {
        question: "Your water path reveals: What will you nurture?",
        choices: {
            top: { text: "Deep connections", next: "q3_ending2_a" },      // FIXED
            left: { text: "Inner peace", next: "q3_ending2_b" },           // FIXED
            right: { text: "Go back and choose again", next: "q1" }
        }
    },

    // Question 2 for Ending 3 path
    q2_ending3: {
        question: "Your star path reveals: What will you create?",
        choices: {
            top: { text: "Artistic expression", next: "q3_ending3_a" },   // FIXED
            left: { text: "Magical moments", next: "q3_ending3_b" },       // FIXED
            right: { text: "Go back and choose again", next: "q1" }
        }
    },

    // Rest of your code stays the same...
    q3_ending1_a: {
        question: "Your adventure awaits: Which realm calls to you?",
        choices: {
            top: { text: "The unknown wilderness", next: "ending1_a_final" },
            left: { text: "The challenge mountain", next: "ending1_a_alt" },
            right: { text: "Go back and reconsider", next: "q2_ending1" }
        }
    },

    q3_ending1_b: {
        question: "Your creative fire burns: How will it manifest?",
        choices: {
            top: { text: "Through fearless expression", next: "ending1_b_final" },
            left: { text: "Through innovation", next: "ending1_b_alt" },
            right: { text: "Go back and reconsider", next: "q2_ending1" }
        }
    },

    q3_ending2_a: {
        question: "Your connections deepen: What matters most?",
        choices: {
            top: { text: "Quality time together", next: "ending2_a_final" },
            left: { text: "Vulnerable honesty", next: "ending2_a_alt" },
            right: { text: "Go back and reconsider", next: "q2_ending2" }
        }
    },

    q3_ending2_b: {
        question: "Your inner peace grows: How will you maintain it?",
        choices: {
            top: { text: "Daily mindful moments", next: "ending2_b_final" },
            left: { text: "Setting boundaries", next: "ending2_b_alt" },
            right: { text: "Go back and reconsider", next: "q2_ending2" }
        }
    },

    q3_ending3_a: {
        question: "Your art awaits: What medium speaks to your soul?",
        choices: {
            top: { text: "Visual creation", next: "ending3_a_final" },
            left: { text: "Written words", next: "ending3_a_alt" },
            right: { text: "Go back and reconsider", next: "q2_ending3" }
        }
    },

    q3_ending3_b: {
        question: "Your magic manifests: How will you share it?",
        choices: {
            top: { text: "Through spontaneous joy", next: "ending3_b_final" },
            left: { text: "Through thoughtful gestures", next: "ending3_b_alt" },
            right: { text: "Go back and reconsider", next: "q2_ending3" }
        }
    },

    // All your endings stay exactly the same
    ending1_a_final: {
        isEnding: true,
        title: "🌟 THE BOLD ADVENTURER 🌟",
        content: `
            <p><strong>Your cosmic destiny reveals:</strong> You're meant for wild, untamed adventures this year!</p>
            <p>The universe sees your fearless spirit and is preparing unexpected journeys for you. Every path you choose leads to growth, every challenge shapes you into someone even more incredible.</p>
            <p><strong>Your 2026 Promise:</strong> Take the leap when opportunities scare you. The best stories start with "I can't believe I did that."</p>
            <p><em>P.S. - [Your personalized message here] 💫</em></p>
        `
    },

    ending1_a_alt: {
        isEnding: true,
        title: "⚡ THE CHALLENGE SEEKER ⚡",
        content: `
            <p><strong>Your cosmic destiny reveals:</strong> You thrive when pushing your limits!</p>
            <p>This year brings growth through challenges you'll conquer. Each mountain you climb reveals a stronger version of you waiting at the summit.</p>
            <p><strong>Your 2026 Promise:</strong> Embrace the hard stuff. You're capable of so much more than you realize.</p>
            <p><em>P.S. - [Your personalized message here] 💪</em></p>
        `
    },

    ending1_b_final: {
        isEnding: true,
        title: "🎨 THE FEARLESS CREATOR 🎨",
        content: `
            <p><strong>Your cosmic destiny reveals:</strong> Your creativity is your superpower this year!</p>
            <p>The universe is giving you permission to create without fear. Every idea deserves to exist, every project adds color to the world.</p>
            <p><strong>Your 2026 Promise:</strong> Make that thing you keep thinking about. Don't wait for perfect timing.</p>
            <p><em>P.S. - [Your personalized message here] 🌈</em></p>
        `
    },

    ending1_b_alt: {
        isEnding: true,
        title: "💡 THE INNOVATOR 💡",
        content: `
            <p><strong>Your cosmic destiny reveals:</strong> You see solutions others miss!</p>
            <p>This year rewards your unique perspective. Your innovative thinking will open doors you didn't know existed.</p>
            <p><strong>Your 2026 Promise:</strong> Trust your ideas. They're weird for a reason—they're yours.</p>
            <p><em>P.S. - [Your personalized message here] ✨</em></p>
        `
    },

    ending2_a_final: {
        isEnding: true,
        title: "💝 THE CONNECTION KEEPER 💝",
        content: `
            <p><strong>Your cosmic destiny reveals:</strong> Your relationships are your treasure this year!</p>
            <p>The universe blesses quality time with those who matter. Every shared moment becomes a memory you'll cherish forever.</p>
            <p><strong>Your 2026 Promise:</strong> Be present. Put the phone down and be fully there.</p>
            <p><em>P.S. - [Your personalized message here] 💖</em></p>
        `
    },

    ending2_a_alt: {
        isEnding: true,
        title: "🤝 THE AUTHENTIC ONE 🤝",
        content: `
            <p><strong>Your cosmic destiny reveals:</strong> Vulnerability is your strength this year!</p>
            <p>Real connections form when we show up honestly. This year rewards your courage to be truly seen.</p>
            <p><strong>Your 2026 Promise:</strong> Say the scary true things. You'll be amazed at what happens.</p>
            <p><em>P.S. - [Your personalized message here] 💫</em></p>
        `
    },

    ending2_b_final: {
        isEnding: true,
        title: "🧘 THE PEACEFUL SOUL 🧘",
        content: `
            <p><strong>Your cosmic destiny reveals:</strong> Your inner peace radiates outward this year!</p>
            <p>The universe supports your journey to calm. Every mindful moment compounds into a life that feels right.</p>
            <p><strong>Your 2026 Promise:</strong> Protect your peace fiercely. It's not selfish, it's essential.</p>
            <p><em>P.S. - [Your personalized message here] 🌸</em></p>
        `
    },

    ending2_b_alt: {
        isEnding: true,
        title: "🛡️ THE BOUNDARY SETTER 🛡️",
        content: `
            <p><strong>Your cosmic destiny reveals:</strong> Saying no is saying yes to yourself this year!</p>
            <p>The universe applauds your self-respect. Every boundary you set is an act of self-love.</p>
            <p><strong>Your 2026 Promise:</strong> Your time and energy are sacred. Guard them well.</p>
            <p><em>P.S. - [Your personalized message here] 💪</em></p>
        `
    },

    ending3_a_final: {
        isEnding: true,
        title: "🎨 THE VISUAL DREAMER 🎨",
        content: `
            <p><strong>Your cosmic destiny reveals:</strong> Your visual creations inspire others this year!</p>
            <p>The universe flows through your artistic eye. Every piece you create adds beauty to the world.</p>
            <p><strong>Your 2026 Promise:</strong> Create for the joy of it. The world needs your perspective.</p>
            <p><em>P.S. - [Your personalized message here] 🌈</em></p>
        `
    },

    ending3_a_alt: {
        isEnding: true,
        title: "✍️ THE WORD WEAVER ✍️",
        content: `
            <p><strong>Your cosmic destiny reveals:</strong> Your words have power this year!</p>
            <p>The universe speaks through your writing. Every sentence you craft carries meaning someone needs to hear.</p>
            <p><strong>Your 2026 Promise:</strong> Write your truth. Someone out there needs to read it.</p>
            <p><em>P.S. - [Your personalized message here] 📖</em></p>
        `
    },

    ending3_b_final: {
        isEnding: true,
        title: "✨ THE JOY BRINGER ✨",
        content: `
            <p><strong>Your cosmic destiny reveals:</strong> Your spontaneous magic lights up rooms this year!</p>
            <p>The universe celebrates your ability to create joy from nothing. Every smile you spark matters more than you know.</p>
            <p><strong>Your 2026 Promise:</strong> Keep being the reason people smile unexpectedly.</p>
            <p><em>P.S. - [Your personalized message here] 🎉</em></p>
        `
    },

    ending3_b_alt: {
        isEnding: true,
        title: "💫 THE THOUGHTFUL MAGICIAN 💫",
        content: `
            <p><strong>Your cosmic destiny reveals:</strong> Your intentional gestures transform lives this year!</p>
            <p>The universe honors how you make others feel seen. Every thoughtful act ripples further than you imagine.</p>
            <p><strong>Your 2026 Promise:</strong> Keep noticing the small things. That's where magic lives.</p>
            <p><em>P.S. - [Your personalized message here] 💝</em></p>
        `
    }
};
