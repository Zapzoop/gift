let currentState = 'q1';
let questionNumber = 1;
const maxQuestions = 4;

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('🚀 Initializing journey...');
    createProgressDots();
    loadQuestion(currentState);
    setupChoiceListeners();
    setupMouseParallax();
}

// Create progress dots
function createProgressDots() {
    const dotsContainer = document.getElementById('progress-dots');
    if (!dotsContainer) {
        console.error('❌ Progress dots container not found!');
        return;
    }
    for (let i = 0; i < maxQuestions; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    }
    console.log('✅ Progress dots created');
}

// Update progress
function updateProgress() {
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach((dot, index) => {
        if (index < questionNumber) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    document.getElementById('current-question').textContent = questionNumber;
    console.log(`📊 Progress updated: Question ${questionNumber}/${maxQuestions}`);
}

// Load question
function loadQuestion(stateKey) {
    console.log(`📖 Loading question: ${stateKey}`);
    
    const state = storyData[stateKey];
    
    if (!state) {
        console.error(`❌ State "${stateKey}" not found in storyData!`);
        return;
    }
    
    if (state.isEnding) {
        console.log('🎉 Reached ending!');
        showEnding(state);
        return;
    }
    
    // Update question text
    const questionTitle = document.getElementById('question-title');
    if (questionTitle) {
        questionTitle.textContent = state.question;
        console.log('✅ Question title updated');
    } else {
        console.error('❌ question-title element not found!');
    }
    
    // Update answer texts
    const answerTop = document.getElementById('answer-top');
    const answerLeft = document.getElementById('answer-left');
    const answerRight = document.getElementById('answer-right');
    
    if (answerTop) answerTop.textContent = state.choices.top.text;
    if (answerLeft) answerLeft.textContent = state.choices.left.text;
    if (answerRight) answerRight.textContent = state.choices.right.text;
    console.log('✅ Answer texts updated');
    
    // Update progress
    document.getElementById('total-questions').textContent = maxQuestions;
    updateProgress();
    
    // **KEY FIX: Re-attach listeners after loading new question**
    setupChoiceListeners();
    
    // Animate in
    const questionCard = document.getElementById('question-card');
    const choicesTriangle = document.querySelector('.choices-triangle');
    
    if (questionCard && choicesTriangle) {
        questionCard.classList.remove('fade-out');
        choicesTriangle.classList.remove('fade-out');
        questionCard.classList.add('floatIn');
        choicesTriangle.classList.add('fadeIn');
        console.log('✅ Animations applied');
    }
}

// Setup choice listeners
function setupChoiceListeners() {
    console.log('🎯 Setting up choice listeners...');
    
    const choices = document.querySelectorAll('.choice-item');
    console.log(`Found ${choices.length} choice items`);
    
    if (choices.length === 0) {
        console.error('❌ No choice items found! Check your HTML structure.');
        return;
    }
    
    choices.forEach((choice, index) => {
        // Remove old listeners by cloning
        const newChoice = choice.cloneNode(true);
        choice.parentNode.replaceChild(newChoice, choice);
        
        const choiceType = newChoice.getAttribute('data-choice');
        console.log(`  Setting up listener for: ${choiceType} (index ${index})`);
        
        newChoice.addEventListener('click', function(e) {
            console.log(`🖱️ CLICKED: ${choiceType}`);
            handleChoice(choiceType);
        });
    });
    
    console.log('✅ All listeners attached');
}

// Handle choice selection
function handleChoice(choiceType) {
    console.log(`⚡ handleChoice called with: ${choiceType}`);
    console.log(`Current state: ${currentState}`);
    
    const state = storyData[currentState];
    
    if (!state) {
        console.error(`❌ Current state "${currentState}" not found!`);
        return;
    }
    
    console.log('State data:', state);
    
    const nextState = state.choices[choiceType].next;
    console.log(`Next state: ${nextState}`);
    
    // Animate out
    const questionCard = document.getElementById('question-card');
    const choicesTriangle = document.querySelector('.choices-triangle');
    
    questionCard.classList.add('fade-out');
    choicesTriangle.classList.add('fade-out');
    
    // Wait for animation then load next
    setTimeout(() => {
        // Check if going back
        if (nextState === 'q1') {
            questionNumber = 1;
        } else if (!nextState.includes('ending') || nextState.includes('q2')) {
            // Moving forward through questions
            if (!currentState.includes('q3') && nextState.includes('q2')) {
                questionNumber = 2;
            } else if (currentState.includes('q2') && nextState.includes('q3')) {
                questionNumber = 3;
            } else if (currentState.includes('q3') && nextState.includes('ending')) {
                questionNumber = 4;
            }
        }
        
        currentState = nextState;
        console.log(`🔄 Transitioning to: ${currentState}`);
        loadQuestion(currentState);
    }, 600);
}

// Show ending
function showEnding(ending) {
    console.log('🎊 Showing ending screen');
    
    const questionContainer = document.getElementById('question-container');
    const endingContainer = document.getElementById('ending-container');
    const progressBar = document.querySelector('.progress-bar');
    
    // Hide question UI
    if (questionContainer) questionContainer.style.display = 'none';
    if (progressBar) progressBar.style.display = 'none';
    
    // Show ending
    const endingTitle = document.getElementById('ending-title');
    const endingContent = document.getElementById('ending-content');
    
    if (endingTitle) endingTitle.textContent = ending.title;
    if (endingContent) endingContent.innerHTML = ending.content;
    if (endingContainer) endingContainer.style.display = 'flex';
    
    console.log('✅ Ending displayed');
    
    // Trigger confetti
    createConfetti();
    
    // Setup restart button
    const restartButton = document.getElementById('restart-button');
    if (restartButton) {
        restartButton.onclick = restart;
        console.log('✅ Restart button configured');
    }
}

// Restart journey
function restart() {
    console.log('🔄 Restarting journey...');
    
    currentState = 'q1';
    questionNumber = 1;
    
    const questionContainer = document.getElementById('question-container');
    const endingContainer = document.getElementById('ending-container');
    const progressBar = document.querySelector('.progress-bar');
    
    if (endingContainer) endingContainer.style.display = 'none';
    if (questionContainer) questionContainer.style.display = 'flex';
    if (progressBar) progressBar.style.display = 'block';
    
    loadQuestion(currentState);
}

// Confetti effect
function createConfetti() {
    console.log('🎉 Creating confetti...');
    
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b'];
    const container = document.getElementById('confetti-container');
    
    if (!container) {
        console.error('❌ Confetti container not found!');
        return;
    }
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            
            container.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// Mouse parallax
function setupMouseParallax() {
    if (window.innerWidth > 768) {
        console.log('✅ Mouse parallax enabled');
        document.addEventListener('mousemove', function(e) {
            const layers = document.querySelectorAll('[data-speed]');
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            layers.forEach(layer => {
                const speed = parseFloat(layer.getAttribute('data-speed'));
                const x = (centerX - mouseX) * speed / 50;
                const y = (centerY - mouseY) * speed / 50;
                
                layer.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    } else {
        console.log('ℹ️ Mouse parallax disabled (mobile)');
    }
}
