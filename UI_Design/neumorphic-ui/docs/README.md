# 🌚 Neumorphic UI Design System

A comprehensive, modular neumorphic design system with physics-based interactions and mathematical precision.

## ✨ Features

- **Mathematical Precision**: Scientifically calculated neumorphic effects
- **Physics-Based Interactions**: Spring animations and natural movement
- **Modular Architecture**: Component-based system for maximum flexibility
- **Dark Mode Optimized**: Professionally designed for dark themes
- **Performance Optimized**: GPU-accelerated animations with 60fps targeting
- **Accessibility Ready**: High contrast and reduced motion support

## 📁 System Architecture

```
neumorphic-ui/
├── core/                    # Foundation & theme system
│   ├── theme-config.css     # Color palettes & design tokens
│   └── neumorphic-base.css  # Core neumorphic effects
├── components/              # UI components
│   ├── buttons/            # Button variations
│   ├── forms/              # Form elements & inputs
│   ├── cards/              # Cards & content containers
│   ├── controls/           # Sliders, toggles, progress
│   ├── navigation/         # Nav bars, tabs, breadcrumbs
│   ├── feedback/           # Alerts, toasts, modals
│   └── layout/             # Grid, containers, spacing
├── themes/                 # Theme variations
│   ├── dark/               # Dark theme (default)
│   ├── light/              # Light theme
│   └── custom/             # Custom theme templates
├── animations/             # Animation systems
│   ├── spring/             # Spring physics
│   ├── physics/            # Real-world physics
│   └── transitions/        # State transitions
├── utils/                  # Utility classes
├── docs/                   # Documentation
└── examples/               # Usage examples
```

## 🚀 Quick Start

### 1. Import Core System
```css
@import 'neumorphic-ui/core/theme-config.css';
@import 'neumorphic-ui/core/neumorphic-base.css';
```

### 2. Add Components
```css
@import 'neumorphic-ui/components/buttons/buttons.css';
@import 'neumorphic-ui/components/forms/forms.css';
@import 'neumorphic-ui/components/cards/cards.css';
```

### 3. Enable Physics
```css
@import 'neumorphic-ui/animations/physics/physics.css';
```

### 4. Use Components
```html
<button class="neu-btn neu-raised spring-gentle">Click Me</button>
<div class="neu-card physics-lift">
    <div class="neu-card-header">
        <div class="neu-avatar">👤</div>
        <h3 class="neu-card-title">Profile Card</h3>
    </div>
    <div class="neu-card-body">
        Beautiful neumorphic design with physics interactions.
    </div>
</div>
```

## 🎨 Core Concepts

### Neumorphic Effects
- **Raised**: Elements appear to rise from the surface
- **Inset**: Elements appear carved into the surface
- **Flat**: Neutral background without depth

### Physics Classes
- **spring-gentle**: Smooth, natural movement
- **spring-bounce**: Playful overshoot effect
- **physics-lift**: Hover lift effect
- **physics-ripple**: Water-like feedback

### Size Variants
- **neu-sm**: Small components
- **neu-lg**: Large components
- **neu-xl**: Extra large components

## 🔬 Mathematical Foundation

The system uses precise mathematical calculations for realistic neumorphic effects:

```css
/* Core color mathematics */
--neu-base: #2c2c2c;    /* RGB(44, 44, 44) */
--neu-light: #3a3a3a;   /* base + 14 */
--neu-dark: #1e1e1e;    /* base - 14 */

/* Shadow calculations */
box-shadow:
    -12px -12px 20px var(--neu-light),
    12px 12px 20px var(--neu-dark);
```

## 📱 Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **CSS Features**: CSS Variables, Grid, Flexbox, Animation
- **Performance**: Hardware acceleration, 60fps animations
- **Accessibility**: Reduced motion support, high contrast ratios

## 🛠️ Customization

### Theme Configuration
Modify CSS variables in `core/theme-config.css`:

```css
:root {
    --primary-500: hsl(220, 100%, 50%);
    --neu-base: #2c2c2c;
    --neu-radius: 16px;
    --neu-distance: 12px;
}
```

### Physics Parameters
Adjust animation behavior in `animations/physics/physics.css`:

```css
:root {
    --spring-bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --physics-tension: 300;
    --physics-friction: 30;
}
```

## 📚 Component Documentation

- [Buttons](./components/buttons.md) - Interactive button components
- [Forms](./components/forms.md) - Input elements and form controls
- [Cards](./components/cards.md) - Content containers and layouts
- [Physics](./animations/physics.md) - Animation system guide

## 🔄 Migration Guide

Migrating from the monolithic CSS file:

1. Replace single import with modular imports
2. Update class names if using legacy naming
3. Test physics animations in your environment
4. Customize theme variables as needed

## 🤝 Contributing

1. Follow the modular architecture
2. Maintain mathematical precision in calculations
3. Test across supported browsers
4. Document new components thoroughly
5. Include physics interactions where appropriate

## 📄 License

This design system is available under the MIT license.