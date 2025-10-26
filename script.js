// Mouse parallax effect
document.addEventListener('mousemove', handleParallax);

function handleParallax(event) {
    const layers = document.querySelectorAll('[data-speed]');
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    layers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed'));
        const x = (centerX - mouseX) * speed / 50;
        const y = (centerY - mouseY) * speed / 50;
        
        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Shooting stars generator
function createShootingStar() {
    const shootingStarsContainer = document.getElementById('shooting-stars');
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    // Random starting position
    star.style.top = Math.random() * 50 + '%';
    star.style.left = Math.random() * 100 + '%';
    
    shootingStarsContainer.appendChild(star);
    
    // Remove after animation completes
    setTimeout(() => {
        star.remove();
    }, 1500);
}

// Generate shooting stars at intervals
setInterval(createShootingStar, 3000);

// Button click transition - Portal Expansion
document.getElementById('begin-button').addEventListener('click', function() {
    // Create expanding portal effect
    const portal = document.createElement('div');
    portal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: radial-gradient(circle, #667eea 0%, transparent 70%);
        z-index: 1000;
        pointer-events: none;
    `;
    
    // Add animation style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes portalExpand {
            0% { 
                width: 100px; 
                height: 100px; 
                opacity: 0.8;
            }
            100% { 
                width: 300vw; 
                height: 300vw; 
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    portal.style.animation = 'portalExpand 1.2s ease-out forwards';
    
    document.body.appendChild(portal);
    
    // Hide button
    this.style.opacity = '0';
    
    // Navigate after animation
    setTimeout(() => {
        window.location.href = 'journey.html';
    }, 1200);
});

// Fade in animation on load
window.addEventListener('load', () => {
    document.querySelector('.hero-content').style.opacity = '1';
});

// Optional: Disable parallax on mobile for performance
if (window.innerWidth <= 768) {
    document.removeEventListener('mousemove', handleParallax);
}
