// ============================================
// WOLF PACK FITNESS - MAIN APPLICATION
// ============================================

let deferredPrompt;
let pwaInstalled = false;

// ============================================
// PWA INSTALL HANDLING
// ============================================

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    deferredPrompt = e;

    // Show install prompt after 3 seconds
    setTimeout(showInstallPrompt, 3000);

    console.log('🐺 PWA Install Prompt Ready');
});

function showInstallPrompt() {
    const installPrompt = document.getElementById('install-prompt');
    if (installPrompt && deferredPrompt) {
        installPrompt.classList.remove('hidden');
    }
}

function dismissInstall() {
    const installPrompt = document.getElementById('install-prompt');
    installPrompt.classList.add('hidden');
}

async function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            console.log('🐺 App Installed! Welcome to the Pack!');
            pwaInstalled = true;
            dismissInstall();
        }

        deferredPrompt = null;
    }
}

// Handle app installed event
window.addEventListener('appinstalled', () => {
    console.log('✓ Wolf Pack Fitness installed successfully!');
    pwaInstalled = true;
    dismissInstall();
});

// ============================================
// SERVICE WORKER REGISTRATION
// ============================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('✓ Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('✗ Service Worker registration failed:', error);
            });
    });
}

// ============================================
// AUDIO MANAGER - WOLF SOUNDS
// ============================================

class AudioManager {
    constructor() {
        this.sounds = {
            howl: this.createHowlSound(),
            click: this.createClickSound(),
        };
    }

    createHowlSound() {
        // Web Audio API - Generate howl-like sound
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        return { context: audioContext, playing: false };
    }

    playHowl() {
        if (this.sounds.howl.playing) return;

        try {
            const { context } = this.sounds.howl;
            this.sounds.howl.playing = true;

            // Create oscillator for wolf howl effect
            const oscillator = context.createOscillator();
            const gainNode = context.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(context.destination);

            // Howl pattern: lower -> higher -> lower
            oscillator.frequency.setValueAtTime(150, context.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, context.currentTime + 0.3);
            oscillator.frequency.exponentialRampToValueAtTime(250, context.currentTime + 0.6);
            oscillator.frequency.exponentialRampToValueAtTime(100, context.currentTime + 1);

            gainNode.gain.setValueAtTime(0.3, context.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.02, context.currentTime + 1);

            oscillator.type = 'sine';
            oscillator.start(context.currentTime);
            oscillator.stop(context.currentTime + 1);

            setTimeout(() => {
                this.sounds.howl.playing = false;
            }, 1000);

            console.log('🐺 Howwwwl!');
        } catch (e) {
            console.log('🔊 Howl effect not available:', e.message);
        }
    }

    playClick() {
        try {
            const { context } = this.sounds.howl;
            const osc = context.createOscillator();
            const gain = context.createGain();

            osc.connect(gain);
            gain.connect(context.destination);

            osc.frequency.value = 800;
            gain.gain.setValueAtTime(0.1, context.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.1);

            osc.start(context.currentTime);
            osc.stop(context.currentTime + 0.1);
        } catch (e) {
            // Silent fail for audio
        }
    }
}

// Initialize audio manager
const audioManager = new AudioManager();

// Add howl on button hover
document.addEventListener('DOMContentLoaded', () => {
    const howlButton = document.querySelector('.btn-howl');
    if (howlButton) {
        howlButton.addEventListener('mouseenter', () => {
            audioManager.playHowl();
        });
    }
});

// ============================================
// OTP LOGIN FLOW
// ============================================

let loginState = {
    email: null,
    otp: null,
    isVerifying: false,
};

function requestOTP() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();

    if (!email) {
        showMessage('Enter your email or phone, pack member!', 'error');
        return;
    }

    // Validate email or phone
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email) && !phoneRegex.test(email.replace(/\D/g, ''))) {
        showMessage('Valid email or 10-digit phone required', 'error');
        return;
    }

    audioManager.playClick();
    loginState.email = email;

    // Simulate OTP sent (in real app: connect to Supabase)
    showMessage('🐺 OTP sent! Check your inbox (simulated)', 'success');

    // Show OTP input
    document.getElementById('emailInput').style.display = 'none';
    document.querySelector('.input-group').classList.add('otp-active');
    document.getElementById('otp-section').classList.remove('hidden');

    // Auto-focus OTP input
    setTimeout(() => {
        document.getElementById('otpInput').focus();
    }, 100);

    console.log('📧 OTP requested for:', email);
}

function verifyOTP() {
    const otpInput = document.getElementById('otpInput');
    const otp = otpInput.value.trim();

    if (!otp || otp.length !== 6) {
        showMessage('Enter 6-digit code', 'error');
        return;
    }

    audioManager.playClick();
    loginState.otp = otp;
    loginState.isVerifying = true;

    // Simulate OTP verification (in real app: call Supabase auth)
    setTimeout(() => {
        // Mock verification success
        showMessage('🐺 Welcome to the Pack, Alpha!', 'success');
        console.log('✓ OTP Verified:', otp);

        // Redirect to dashboard after 1 second
        setTimeout(() => {
            redirectToDashboard();
        }, 1000);
    }, 1500);

    showMessage('🔐 Verifying...', 'info');
}

function backToEmail() {
    // Reset OTP form
    document.getElementById('emailInput').style.display = 'block';
    document.getElementById('otp-section').classList.add('hidden');
    document.getElementById('otpInput').value = '';
    loginState.otp = null;
}

// ============================================
// UI HELPERS
// ============================================

function showMessage(text, type = 'info') {
    // Create temporary message element
    const message = document.createElement('div');
    message.textContent = text;
    message.style.cssText = `
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 2rem;
    background: ${type === 'error' ? 'rgba(239, 68, 68, 0.2)' : type === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(59, 130, 246, 0.2)'};
    border: 1px solid ${type === 'error' ? '#ef4444' : type === 'success' ? '#22c55e' : '#3b82f6'};
    border-radius: 8px;
    color: ${type === 'error' ? '#ef4444' : type === 'success' ? '#22c55e' : '#3b82f6'};
    font-weight: 600;
    z-index: 1000;
    animation: slideDown 0.3s ease-out;
  `;

    document.body.appendChild(message);

    setTimeout(() => {
        message.style.animation = 'slideUp 0.3s ease-in';
        setTimeout(() => message.remove(), 300);
    }, 2500);
}

function redirectToDashboard() {
    console.log('→ Redirecting to dashboard...');
    // In real app: window.location.href = '/dashboard';
    alert('✓ Mock authenticated! Dashboard would load here.\n\nNext: Implement mood analysis UI');
}

// ============================================
// PAGE LOAD & INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🐺 Wolf Pack Fitness App Ready!');
    console.log('📱 PWA Detection:', 'serviceWorker' in navigator ? 'Ready' : 'Not supported');
    console.log('🔊 Audio System:', audioManager ? 'Active' : 'Disabled');

    // Add keyboard support for OTP
    const otpInput = document.getElementById('otpInput');
    if (otpInput) {
        otpInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') verifyOTP();
        });
    }

    // Add keyboard support for email
    const emailInput = document.getElementById('emailInput');
    if (emailInput) {
        emailInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') requestOTP();
        });
    }
});

// Hide CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
  @keyframes slideUp {
    from { opacity: 1; transform: translateX(-50%) translateY(0); }
    to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
  }
`;
document.head.appendChild(style);
