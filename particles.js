// ============================================
// WOLF PACK FITNESS - PARTICLE EFFECT ENGINE
// ============================================

class ParticleSystem {
    constructor(containerId = 'particles-bg', particleCount = 50) {
        this.container = document.getElementById(containerId);
        this.particleCount = particleCount;
        this.particles = [];
        this.init();
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 4 + 2; // 2-6px
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 15 + 15; // 15-30s
        const opacity = Math.random() * 0.5 + 0.3; // 0.3-0.8

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.background = Math.random() > 0.5 ? '#00d9ff' : '#0ea5e9';
        particle.style.opacity = opacity;
        particle.style.animationDuration = duration + 's';
        particle.style.boxShadow = `0 0 ${size * 2}px currentColor`;

        this.container.appendChild(particle);

        // Remove particle after animation completes
        setTimeout(() => {
            particle.remove();
            this.createParticle(); // Recreate for infinite effect
        }, duration * 1000);
    }
}

// ============================================
// WOLF EYE TRACKING (Mouse Follower)
// ============================================

class WolfEyeTracker {
    constructor() {
        this.leftEye = document.querySelector('.wolf-eye.left-eye .pupil');
        this.rightEye = document.querySelector('.wolf-eye.right-eye .pupil');

        if (this.leftEye && this.rightEye) {
            document.addEventListener('mousemove', (e) => this.trackMouse(e));
        }
    }

    trackMouse(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        [this.leftEye, this.rightEye].forEach(pupil => {
            const eye = pupil.parentElement;
            const eyeRect = eye.getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;

            const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
            const distance = 15; // Max distance from center

            const pupilX = Math.cos(angle) * distance;
            const pupilY = Math.sin(angle) * distance;

            pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        });
    }
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Start particle system
    new ParticleSystem('particles-bg', 60);

    // Start wolf eye tracking
    new WolfEyeTracker();

    console.log('🐺 Wolf Pack Fitness Engine Initialized - Ready to Hunt!');
});
