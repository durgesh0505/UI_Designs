/**
 * Neumorphic UI Interactive Showcase
 * Advanced demonstration with real-time customization
 */

class NeumorphicShowcase {
    constructor() {
        this.init();
        this.bindEvents();
        this.startPerformanceMonitoring();
    }

    init() {
        this.currentTheme = 'dark';
        this.physicsParams = {
            distance: 12,
            blur: 20,
            radius: 16,
            tension: 300,
            friction: 30,
            mass: 1
        };

        this.colorParams = {
            base: '#2c2c2c',
            light: '#3a3a3a',
            dark: '#1e1e1e',
            accent: '#4a9eff'
        };

        this.animationFrameId = null;
        this.performanceData = {
            fps: 0,
            frameCount: 0,
            lastTime: 0
        };
    }

    bindEvents() {
        // Theme switching
        document.getElementById('themeToggle')?.addEventListener('change', (e) => {
            this.switchTheme(e.target.checked ? 'light' : 'dark');
        });

        // Physics parameter controls
        this.bindPhysicsControls();

        // Color customization
        this.bindColorControls();

        // Component interactions
        this.bindComponentInteractions();

        // Navigation
        this.bindNavigation();

        // Code generation
        this.bindCodeGeneration();

        // Performance controls
        this.bindPerformanceControls();
    }

    bindPhysicsControls() {
        const controls = {
            'distanceSlider': 'distance',
            'blurSlider': 'blur',
            'radiusSlider': 'radius',
            'tensionSlider': 'tension',
            'frictionSlider': 'friction',
            'massSlider': 'mass'
        };

        Object.entries(controls).forEach(([sliderId, param]) => {
            const slider = document.getElementById(sliderId);
            if (slider) {
                slider.addEventListener('input', (e) => {
                    this.updatePhysicsParam(param, parseFloat(e.target.value));
                });
            }
        });
    }

    bindColorControls() {
        const colorInputs = ['baseColor', 'lightColor', 'darkColor', 'accentColor'];

        colorInputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            if (input) {
                input.addEventListener('input', (e) => {
                    const param = inputId.replace('Color', '');
                    this.updateColorParam(param, e.target.value);
                });
            }
        });
    }

    bindComponentInteractions() {
        // Button interactions with feedback
        document.querySelectorAll('.demo-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.createClickFeedback(e.target, e.clientX, e.clientY);
            });
        });

        // Form element state changes
        document.querySelectorAll('.neu-input').forEach(input => {
            input.addEventListener('focus', (e) => this.showFocusIndicator(e.target));
            input.addEventListener('blur', (e) => this.hideFocusIndicator(e.target));
        });

        // Card hover effects
        document.querySelectorAll('.interactive-card').forEach(card => {
            card.addEventListener('mouseenter', (e) => this.enhanceCardHover(e.target));
            card.addEventListener('mouseleave', (e) => this.resetCardHover(e.target));
        });

        // Toggle switches
        document.querySelectorAll('.neu-toggle-input').forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                this.animateToggleSwitch(e.target);
            });
        });
    }

    bindNavigation() {
        // Smooth scroll navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.smoothScrollTo(targetId);
            });
        });

        // Intersection observer for active nav states
        this.observeSections();
    }

    bindCodeGeneration() {
        document.querySelectorAll('.copy-code-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const codeBlock = e.target.closest('.demo-section').querySelector('.code-snippet');
                if (codeBlock) {
                    this.copyToClipboard(codeBlock.textContent);
                    this.showCopyFeedback(e.target);
                }
            });
        });

        // Generate custom component code
        document.getElementById('generateCode')?.addEventListener('click', () => {
            this.generateCustomCode();
        });
    }

    bindPerformanceControls() {
        document.getElementById('fpsCounter')?.addEventListener('change', (e) => {
            if (e.target.checked) {
                this.showFPSCounter();
            } else {
                this.hideFPSCounter();
            }
        });

        document.getElementById('gpuAcceleration')?.addEventListener('change', (e) => {
            this.toggleGPUAcceleration(e.target.checked);
        });

        document.getElementById('reducedMotion')?.addEventListener('change', (e) => {
            this.toggleReducedMotion(e.target.checked);
        });
    }

    // Theme Management
    switchTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-base-theme', theme);

        // Update theme-dependent colors
        if (theme === 'light') {
            this.updateColorParam('base', '#e8e8e8');
            this.updateColorParam('light', '#ffffff');
            this.updateColorParam('dark', '#a0a0a0');
        } else {
            this.updateColorParam('base', '#2c2c2c');
            this.updateColorParam('light', '#3a3a3a');
            this.updateColorParam('dark', '#1e1e1e');
        }

        this.updateColorInputs();
        this.animateThemeTransition();
    }

    updateColorInputs() {
        Object.entries(this.colorParams).forEach(([param, color]) => {
            const input = document.getElementById(`${param}Color`);
            if (input) input.value = color;
        });
    }

    animateThemeTransition() {
        document.body.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 500);
    }

    // Physics Parameter Updates
    updatePhysicsParam(param, value) {
        this.physicsParams[param] = value;

        const cssVar = this.physicsParamToCSSVar(param);
        if (cssVar) {
            document.documentElement.style.setProperty(cssVar, this.formatParamValue(param, value));
        }

        this.updateParamDisplay(param, value);
        this.generatePhysicsPreview();
    }

    physicsParamToCSSVar(param) {
        const mapping = {
            distance: '--neu-distance',
            blur: '--neu-blur',
            radius: '--neu-radius',
            tension: '--physics-tension',
            friction: '--physics-friction',
            mass: '--physics-mass'
        };
        return mapping[param];
    }

    formatParamValue(param, value) {
        if (['distance', 'blur', 'radius'].includes(param)) {
            return `${value}px`;
        }
        return value.toString();
    }

    updateParamDisplay(param, value) {
        const display = document.getElementById(`${param}Value`);
        if (display) {
            display.textContent = this.formatParamValue(param, value);
        }
    }

    // Color Parameter Updates
    updateColorParam(param, color) {
        this.colorParams[param] = color;

        const cssVar = `--neu-${param}`;
        document.documentElement.style.setProperty(cssVar, color);

        this.generateColorPreview();
    }

    // Interactive Feedback Effects
    createClickFeedback(element, x, y) {
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.left = `${x - element.offsetLeft}px`;
        ripple.style.top = `${y - element.offsetTop}px`;

        element.style.position = 'relative';
        element.appendChild(ripple);

        // Animate ripple
        requestAnimationFrame(() => {
            ripple.style.transform = 'scale(4)';
            ripple.style.opacity = '0';
        });

        setTimeout(() => ripple.remove(), 600);
    }

    showFocusIndicator(element) {
        const indicator = document.createElement('div');
        indicator.className = 'focus-indicator';
        element.parentElement.appendChild(indicator);

        const rect = element.getBoundingClientRect();
        const parentRect = element.parentElement.getBoundingClientRect();

        indicator.style.left = `${rect.left - parentRect.left - 3}px`;
        indicator.style.top = `${rect.top - parentRect.top - 3}px`;
        indicator.style.width = `${rect.width + 6}px`;
        indicator.style.height = `${rect.height + 6}px`;
    }

    hideFocusIndicator(element) {
        const indicator = element.parentElement.querySelector('.focus-indicator');
        if (indicator) {
            indicator.style.opacity = '0';
            setTimeout(() => indicator.remove(), 300);
        }
    }

    enhanceCardHover(card) {
        card.style.transform = 'translateY(-8px) scale(1.02)';
        card.style.filter = 'brightness(1.05)';

        // Add subtle glow effect
        const glow = document.createElement('div');
        glow.className = 'card-glow';
        card.appendChild(glow);
    }

    resetCardHover(card) {
        card.style.transform = '';
        card.style.filter = '';

        const glow = card.querySelector('.card-glow');
        if (glow) glow.remove();
    }

    animateToggleSwitch(toggle) {
        const label = toggle.nextElementSibling;
        if (label) {
            label.style.transform = 'scale(1.05)';
            setTimeout(() => {
                label.style.transform = '';
            }, 150);
        }
    }

    // Navigation and Scrolling
    smoothScrollTo(targetId) {
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    observeSections() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${entry.target.id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => observer.observe(section));
    }

    // Code Generation and Utilities
    copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        } else {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
    }

    showCopyFeedback(button) {
        const originalText = button.textContent;
        button.textContent = '✓ Copied!';
        button.style.backgroundColor = 'var(--neu-success)';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
    }

    generateCustomCode() {
        const code = this.buildComponentCode();
        this.showCodeModal(code);
    }

    buildComponentCode() {
        const { distance, blur, radius } = this.physicsParams;
        const { base, light, dark, accent } = this.colorParams;

        return `
/* Custom Neumorphic Button */
.custom-neu-btn {
    background: ${base};
    border-radius: ${radius}px;
    padding: 16px 24px;
    border: none;
    color: var(--neu-text-primary);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    box-shadow:
        -${distance}px -${distance}px ${blur}px ${light},
        ${distance}px ${distance}px ${blur}px ${dark};
}

.custom-neu-btn:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow:
        -${distance + 3}px -${distance + 3}px ${blur + 6}px ${light},
        ${distance + 3}px ${distance + 3}px ${blur + 6}px ${dark};
}

.custom-neu-btn:active {
    transform: translateY(1px) scale(0.98);
    box-shadow:
        inset ${distance}px ${distance}px ${blur}px ${dark},
        inset -${distance}px -${distance}px ${blur}px ${light};
}`;
    }

    showCodeModal(code) {
        const modal = document.getElementById('codeModal');
        const codeContent = document.getElementById('modalCode');

        if (modal && codeContent) {
            codeContent.textContent = code;
            modal.style.display = 'flex';
            modal.style.opacity = '0';

            requestAnimationFrame(() => {
                modal.style.opacity = '1';
            });
        }
    }

    // Performance Monitoring
    startPerformanceMonitoring() {
        const monitor = () => {
            const now = performance.now();
            this.performanceData.frameCount++;

            if (now >= this.performanceData.lastTime + 1000) {
                this.performanceData.fps = Math.round(
                    (this.performanceData.frameCount * 1000) / (now - this.performanceData.lastTime)
                );
                this.performanceData.frameCount = 0;
                this.performanceData.lastTime = now;

                this.updateFPSDisplay();
            }

            this.animationFrameId = requestAnimationFrame(monitor);
        };

        monitor();
    }

    updateFPSDisplay() {
        const fpsDisplay = document.getElementById('fpsDisplay');
        if (fpsDisplay) {
            fpsDisplay.textContent = `${this.performanceData.fps} FPS`;

            // Color code based on performance
            if (this.performanceData.fps >= 55) {
                fpsDisplay.style.color = 'var(--neu-success)';
            } else if (this.performanceData.fps >= 30) {
                fpsDisplay.style.color = 'var(--neu-warning)';
            } else {
                fpsDisplay.style.color = 'var(--error-color)';
            }
        }
    }

    showFPSCounter() {
        document.getElementById('fpsDisplay').style.display = 'block';
    }

    hideFPSCounter() {
        document.getElementById('fpsDisplay').style.display = 'none';
    }

    toggleGPUAcceleration(enabled) {
        const elements = document.querySelectorAll('.neu-btn, .neu-card, .neu-input');
        elements.forEach(el => {
            if (enabled) {
                el.style.willChange = 'transform, box-shadow';
                el.style.transform = 'translateZ(0)';
            } else {
                el.style.willChange = 'auto';
                el.style.transform = '';
            }
        });
    }

    toggleReducedMotion(enabled) {
        if (enabled) {
            document.documentElement.style.setProperty('--anim-fast', '0.01s');
            document.documentElement.style.setProperty('--anim-normal', '0.01s');
            document.documentElement.style.setProperty('--anim-slow', '0.01s');
        } else {
            document.documentElement.style.removeProperty('--anim-fast');
            document.documentElement.style.removeProperty('--anim-normal');
            document.documentElement.style.removeProperty('--anim-slow');
        }
    }

    // Preview Generators
    generatePhysicsPreview() {
        const preview = document.getElementById('physicsPreview');
        if (preview) {
            const { distance, blur } = this.physicsParams;
            const { base, light, dark } = this.colorParams;

            preview.style.background = base;
            preview.style.boxShadow = `
                -${distance}px -${distance}px ${blur}px ${light},
                ${distance}px ${distance}px ${blur}px ${dark}
            `;
        }
    }

    generateColorPreview() {
        const preview = document.getElementById('colorPreview');
        if (preview) {
            const { base, light, dark } = this.colorParams;
            preview.style.background = `linear-gradient(135deg, ${light}, ${base}, ${dark})`;
        }
    }
}

// Component State Simulator
class ComponentStateSimulator {
    constructor() {
        this.states = ['normal', 'hover', 'active', 'focus', 'disabled'];
        this.currentState = 'normal';
    }

    simulateState(element, state) {
        // Remove all state classes
        this.states.forEach(s => element.classList.remove(`simulate-${s}`));

        // Add new state class
        element.classList.add(`simulate-${state}`);
        this.currentState = state;
    }

    cycleStates(element) {
        const currentIndex = this.states.indexOf(this.currentState);
        const nextIndex = (currentIndex + 1) % this.states.length;
        const nextState = this.states[nextIndex];

        this.simulateState(element, nextState);
        return nextState;
    }
}

// Initialize showcase when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.showcase = new NeumorphicShowcase();
    window.stateSimulator = new ComponentStateSimulator();

    // Add global keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl+Shift+T: Toggle theme
        if (e.ctrlKey && e.shiftKey && e.key === 'T') {
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.checked = !themeToggle.checked;
                themeToggle.dispatchEvent(new Event('change'));
            }
        }

        // Ctrl+Shift+P: Toggle performance monitor
        if (e.ctrlKey && e.shiftKey && e.key === 'P') {
            const fpsCounter = document.getElementById('fpsCounter');
            if (fpsCounter) {
                fpsCounter.checked = !fpsCounter.checked;
                fpsCounter.dispatchEvent(new Event('change'));
            }
        }
    });
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NeumorphicShowcase, ComponentStateSimulator };
}