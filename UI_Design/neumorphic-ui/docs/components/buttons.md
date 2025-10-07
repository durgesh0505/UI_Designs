# 🔘 Button Components

Physics-based neumorphic buttons with natural interactions and spring animations.

## Base Button Class

```css
.neu-btn
```

The foundation class for all neumorphic buttons with physics-based interactions.

### Features
- **Spring Physics**: Natural object behavior with momentum and inertia
- **Tactile Feedback**: Visual responses mimicking physical button presses
- **Accessibility**: Focus states and keyboard navigation support
- **Performance**: GPU-accelerated animations at 60fps

## Button Variants

### Standard Button
```html
<button class="neu-btn">Standard Button</button>
```

### Icon Button
```html
<button class="neu-btn neu-btn--icon">🔍</button>
```
- Circular design optimized for icons
- Enhanced physics with rotation effects
- Perfect for floating action buttons

### Size Variants
```html
<button class="neu-btn neu-btn--small">Small</button>
<button class="neu-btn">Default</button>
<button class="neu-btn neu-btn--large">Large</button>
```

### Floating Action Button
```html
<button class="neu-btn neu-btn--icon neu-floating-btn">+</button>
```
- Fixed positioning (bottom-right by default)
- Enhanced elevation and physics
- Perfect for primary actions

## Button States

### Primary Button
```html
<button class="neu-btn neu-btn--primary">Primary Action</button>
```
- Gradient background with brand colors
- Enhanced visual prominence
- Ideal for call-to-action buttons

### Success Button
```html
<button class="neu-btn neu-btn--success">Success Action</button>
```

### Warning Button
```html
<button class="neu-btn neu-btn--warning">Warning Action</button>
```

### Disabled State
```html
<button class="neu-btn neu-btn--disabled" disabled>Disabled</button>
```
- Reduced opacity and grayscale filter
- Prevents interaction and animations
- Maintains accessibility standards

## Button Groups

### Horizontal Group
```html
<div class="neu-btn-group">
    <button class="neu-btn">First</button>
    <button class="neu-btn">Second</button>
    <button class="neu-btn">Third</button>
</div>
```

### Vertical Group
```html
<div class="neu-btn-group neu-btn-group--vertical">
    <button class="neu-btn">Top</button>
    <button class="neu-btn">Middle</button>
    <button class="neu-btn">Bottom</button>
</div>
```

## Physics Integration

### Spring Animations
```html
<button class="neu-btn spring-gentle">Gentle Spring</button>
<button class="neu-btn spring-bounce">Bouncy Spring</button>
<button class="neu-btn spring-snappy">Snappy Response</button>
```

### Interaction Effects
```html
<button class="neu-btn physics-lift">Lift on Hover</button>
<button class="neu-btn physics-ripple">Ripple Effect</button>
<button class="neu-btn physics-burst">Energy Burst</button>
```

## Mathematical Foundation

### Shadow Calculations
```css
/* Raised Effect (default state) */
box-shadow:
    calc(-1 * var(--neu-distance)) calc(-1 * var(--neu-distance)) var(--neu-blur) var(--neu-light),
    var(--neu-distance) var(--neu-distance) var(--neu-blur) var(--neu-dark);

/* Pressed Effect (active state) */
box-shadow:
    inset var(--neu-distance) var(--neu-distance) var(--neu-blur) var(--neu-dark),
    inset calc(-1 * var(--neu-distance)) calc(-1 * var(--neu-distance)) var(--neu-blur) var(--neu-light);
```

### Physics Parameters
```css
/* Multi-stage animation timing */
transition:
    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),  /* Spring bounce */
    box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),   /* Gentle ease */
    filter 0.2s ease;                                        /* Quick brightness */
```

## Customization

### Custom Colors
```css
.neu-btn--custom {
    background: linear-gradient(135deg, #your-color, #your-variant);
    color: white;
}
```

### Custom Physics
```css
.neu-btn--elastic {
    transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Size Customization
```css
.neu-btn--tiny {
    padding: var(--neu-space-xs) var(--neu-space-sm);
    font-size: 0.75rem;
    --neu-distance: 6px;
    --neu-blur: 12px;
}
```

## Accessibility

### Keyboard Navigation
- Tab order follows document flow
- Enter and Space activate buttons
- Focus indicators with accent color glow

### Screen Readers
```html
<button class="neu-btn" aria-label="Search products">
    🔍
</button>
```

### Reduced Motion
Animations automatically disable when `prefers-reduced-motion: reduce` is detected.

## Best Practices

1. **Use Primary sparingly**: Only for main call-to-action
2. **Group related actions**: Use button groups for related functions
3. **Provide feedback**: Include loading states for async actions
4. **Test physics**: Ensure animations feel natural across devices
5. **Maintain hierarchy**: Use size and color to establish importance

## Performance Notes

- Buttons use `will-change` for optimal GPU acceleration
- Transform and opacity changes are hardware accelerated
- Box-shadow animations are optimized for modern browsers
- Physics calculations are pre-computed in CSS variables