const storyData = {
    // Question 1 - Should go to Question 2, NOT directly to endings!
    q1: {
        question: "What is the most important chapter of your life?",
        choices: {
            top: { text: "Love Life", next: "q2_ending1" },  // FIXED
            left: { text: "Glorious Success", next: "q2_ending2" },  // FIXED
            right: { text: "Dear Family", next: "q2_ending3" }  // FIXED
        }
    },

    // Question 2 for Ending 1 path
    q2_ending1: {
        question: "What kind of love life you want?",
        choices: {
            top: { text: "Lots of Attraction", next: "q3_ending1_a" },  // FIXED
            left: { text: "Unmatched Reassurance", next: "q3_ending1_b" },   // FIXED
            right: { text: "Go back and choose again", next: "q1" }
        }
    },

    // Question 2 for Ending 2 path
    q2_ending2: {
        question: "Iss year Success kaisse milni chahyie?",
        choices: {
            top: { text: "Bande ke saath", next: "q3_ending2_a" },      // FIXED
            left: { text: "Ya bande ke baad", next: "q3_ending2_b" },           // FIXED
            right: { text: "Go back and choose again", next: "q1" }
        }
    },

    // Question 2 for Ending 3 path
    q2_ending3: {
        question: "Family me kisko priority deti!!!",
        choices: {
            top: { text: "Ever beautiful and intelligent Aanchl", next: "q3_ending3_a" },   // FIXED
            left: { text: "Super Cool and Ever achieving Devesh", next: "q3_ending3_b" },       // FIXED
            right: { text: "Go back and choose again", next: "q1" }
        }
    },

    // Rest of your code stays the same...
    q3_ending1_a: {
        question: "Kaissi Attraction chahyie?",
        choices: {
            top: { text: "Kambalo ke andr waali", next: "ending1_a_final" },
            left: { text: "Novels waali", next: "ending1_a_alt" },
            right: { text: "Go back and reconsider", next: "q2_ending1" }
        }
    },

    q3_ending1_b: {
        question: "What matters most in reassurance?",
        choices: {
            top: { text: "Gftsssssssssssss", next: "ending1_b_final" },
            left: { text: "Promisessssssssssss", next: "ending1_b_alt" },
            right: { text: "Go back and reconsider", next: "q2_ending1" }
        }
    },

    q3_ending2_a: {
        question: "Bande ka relation uske boss ke saath kaissa hona chahyie?",
        choices: {
            top: { text: "Ek dum flirty boss ke saath ladka ho ya ladki paisso ke liye kuch bhi", next: "ending2_a_final" },
            left: { text: "Ek nazar bhi dekh li usne toh same day divorce", next: "ending2_a_alt" },
            right: { text: "Go back and reconsider", next: "q2_ending2" }
        }
    },

    q3_ending2_b: {
        question: "Success mil gyi but bande ki success beech me aa rahi?",
        choices: {
            top: { text: "Apni job chord degi", next: "ending2_b_final" },
            left: { text: "Uski job chordwa degi ghr jamai banayegi", next: "ending2_b_alt" },
            right: { text: "Go back and reconsider", next: "q2_ending2" }
        }
    },

    q3_ending3_a: {
        question: "Deeeep, I know tu mujhe hi chunegi, ab bata meri kya cheez psnd hai",
        choices: {
            top: { text: "Nature", next: "ending3_a_final" },
            left: { text: "Efforts", next: "ending3_a_final" },
            right: { text: "Go back and reconsider", next: "q2_ending3" }
        }
    },

    q3_ending3_b: {
        question: "Hehe deep mujhe pata tha, ab bata meri kya cheez psnd hai",
        choices: {
            top: { text: "Nature", next: "ending3_a_final" },
            left: { text: "Efforts", next: "ending3_a_final" },
            right: { text: "Go back and reconsider", next: "q2_ending3" }
        }
    },

    // All your endings stay exactly the same
    ending1_a_final: {
        isEnding: true,
        title: "Aayee Tharki",
        content: `
            <p><strong>Pata tha yahi chunegi tu ek dum!</p>
            <p>Paati tera thak jayega tera, sheelajeet khilate rahio warna maza nhi aane wala tujhe.</p>
            <p><strong>Bed tak toh pohochne s phole h jhande gaad degi"</p>
            <p><em>Sex se bhahr na aa skri</em></p>
        `
    },

    ending1_a_alt: {
        isEnding: true,
        title: "Delulu",
        content: `
            <p><strong>But tera patti indian hoga yeh novel waala angrezz nhi!</p>
            <p>Novel jaissa shareef banda rehne hi nhi degi tere se milte hi barbaad</p>
            <p><strong>Agr aissa banda patti ban gaya toh ameer toh hoga hum dono ko adopt kr lio fir</p>
            <p><em>Sapne dekhna achi baat hai but aukaat mai</em></p>
        `
    },

    ending1_b_final: {
        isEnding: true,
        title: "Kutti",
        content: `
            <p><strong>Ha ha gift lele bhar bhar ke</p>
            <p>Santa claus se shaadi kar lio har din gift</p>
            <p><strong>but really koi itna gift dene waala mille toh anchl aur mujhe dono ko bhi bhijwa dio gift.</p>
            <p><em>Gift mehnge hi lio</em></p>
        `
    },

    ending1_b_alt: {
        isEnding: true,
        title: "Chutiya hai tu",
        content: `
            <p><strong>Promises se kya hota deep relation banao deep leke jao</p>
            <p>Jabtk gehraio me nhi jata tb tk koi meaning nhi.</p>
            <p><strong>Promise leke kya karegi usme kuch rakha thodi hai</p>
            <p><em>Promise toh thod dete hai log hum dono ko chord kr we are different.</em></p>
        `
    },

    ending2_a_final: {
        isEnding: true,
        title: "Harami",
        content: `
            <p><strong>Jal gayi na success s uski</p>
            <p>Ghar m Chulha jlega flirt s krne de</p>
            <p><strong>Aa h gya paisa h toh sb h wala mindset</p>
            <p><em>Shi h beta paise k liye be h d pati ko</em></p>
        `
    },

    ending2_a_alt: {
        isEnding: true,
        title: "Sakht",
        content: `
            <p><strong>Katega phir bhji</p>
            <p>Kya ise duniya accept kregi yah toxicity manegi</p>
            <p><strong>Tu b kr kr lio apne wale s naa Itta kya hain</p>
            <p><em>Krega toh voh tb b bs tere peeth peeche</em></p>
        `
    },

    ending2_b_final: {
        isEnding: true,
        title: "Jhuti",
        content: `
            <p><strong>Hoga hi nhi aissa hum dono bhot acche se jante</p>
            <p>Ghr pr tere se saasu ma bhot kaam karwayegi mt kr aissa</p>
            <p><strong>Sassu ma itne taane degi na ki job pr boss ki gaaliya aasan hogi</p>
            <p><em>Kaam kr le kutti kitna aaram kregi</em></p>
        `
    },

    ending2_b_alt: {
        isEnding: true,
        title: "BKL",
        content: `
            <p><strong>Ek dum gaadaro waali baat ki hai</p>
            <p>Bechara vo banda ruka taaki teri success mil jae ab tu usse thukra rahi glt baat</p>
            <p><strong>Ladko ke dil ke saath khelna glt baat hai deeeeep</p>
            <p><em>Sudhar ja Sudhar ja</em></p>
        `
    },

    ending3_a_final: {
        isEnding: true,
        title: "Enchanting lioness",
        content: `
            <p><strong>You make everyone feel in awe of you </p>
            <p>You always make sure your each effort is 100 percent like a lions hunt</p>
            <p><strong>Hum Dono hi hai tere life me aur koi teesra aa nhi skta (this is threat)</p>
            <p><em>Happy Birthday once again deep, lots of love from Anchl & Devesh</em></p>
        `
    },

    ending3_a_alt: {
        isEnding: true,
        title: "True Ending",
        content: `
            <p><strong>Yahi sirf sahi jawab hai baaki sab toh frzi hai ab pata </p>
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
