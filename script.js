// Initialize Animate On Scroll
AOS.init({
    once: true, // whether animation should happen only once - while scrolling down
    offset: 100, // offset (in px) from the original trigger point
});

// Smooth scrolling for the down arrow
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Glowing Flower Particles
function createParticle() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    const particle = document.createElement('div');
    particle.classList.add('flower-particle');
    
    // Select a random flower emoji or glowing dot
    const flowers = ['🌸', '🌺', '💮', '✨', '💖'];
    particle.innerText = flowers[Math.floor(Math.random() * flowers.length)];
    
    // Random position across the width
    particle.style.left = Math.random() * 100 + 'vw';
    
    // Random size
    const size = Math.random() * 15 + 10;
    particle.style.fontSize = size + 'px';
    
    // Random animation duration between 10s and 25s
    const duration = Math.random() * 15 + 10;
    particle.style.animationDuration = duration + 's';
    
    // Random delay
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    container.appendChild(particle);
    
    // Remove particle after animation to prevent memory leaks
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Create particles periodically
setInterval(createParticle, 400);

// Initial burst so the screen isn't empty on load
for(let i=0; i<20; i++) {
    setTimeout(createParticle, Math.random() * 2000);
}
