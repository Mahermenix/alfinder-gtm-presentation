# Brand Color Palette & Usage Guide

## Primary Colors

### Deep Blue (Primary)
- **Hex**: #065D7E
- **RGB**: rgb(6, 93, 126)
- **Usage**:
  - Main headings and titles
  - Category labels
  - Navigation active states
  - Primary buttons and actions
  - Icon backgrounds (at 10% opacity)

### Cyan (Accent)
- **Hex**: #11D4D8
- **RGB**: rgb(17, 212, 216)
- **Usage**:
  - Key metrics and numbers
  - Call-to-action elements
  - Highlight badges
  - Important icons
  - Accent backgrounds (at 10% opacity)

### Medium Blue (Secondary)
- **Hex**: #0a7aa0
- **RGB**: rgb(10, 122, 160)
- **Usage**:
  - Supporting elements
  - Secondary badges
  - Category labels
  - Accent backgrounds (at 10% opacity)

## Neutral Colors

### Light Background
- **Hex**: #F0FBFB
- **RGB**: rgb(240, 251, 251)
- **Usage**:
  - Page background
  - Subtle section backgrounds
  - Gradient endpoints

### White
- **Hex**: #FFFFFF
- **RGB**: rgb(255, 255, 255)
- **Usage**:
  - Card backgrounds
  - Main content areas
  - Clean sections

### Dark Gray (Headings)
- **Hex**: #1a202c
- **RGB**: rgb(26, 32, 44)
- **Usage**:
  - Primary headings
  - Important titles
  - High-emphasis text
  - Contrast ratio: 16.1:1 on white (AAA)

### Medium Gray (Secondary Headings)
- **Hex**: #374151
- **RGB**: rgb(55, 65, 81)
- **Usage**:
  - Secondary headings
  - Bold text
  - Medium-emphasis text
  - Contrast ratio: 11.4:1 on white (AAA)

### Body Gray (Body Text)
- **Hex**: #64748b
- **RGB**: rgb(100, 116, 139)
- **Usage**:
  - Body text
  - Descriptions
  - Paragraphs
  - Contrast ratio: 7.5:1 on white (AAA)

### Subtle Gray (Metadata)
- **Hex**: #9ca3af
- **RGB**: rgb(156, 163, 175)
- **Usage**:
  - Metadata
  - Descriptions
  - Low-emphasis text
  - Contrast ratio: 4.6:1 on white (AA)

## Color Combinations

### Primary Combination
```tsx
<div className="bg-[#065D7E]/10">
  <Icon className="text-[#065D7E]" />
</div>
<p className="text-[#065D7E]">Label</p>
```

### Accent Combination
```tsx
<p className="text-[#11D4D8] font-bold">$20K</p>
<div className="bg-[#11D4D8]/10">
  <Icon className="text-[#11D4D8]" />
</div>
```

### Neutral Combination
```tsx
<div className="bg-white">
  <h2 className="text-gray-900">Heading</h2>
  <p className="text-gray-600">Body text</p>
  <span className="text-gray-400">Metadata</span>
</div>
```

## Opacity Levels

### Brand Color Opacity
- **10%** (`bg-[#065D7E]/10`): Icon backgrounds, subtle highlights
- **20%** (`border-[#065D7E]/20`): Border accents
- **100%** (`text-[#065D7E]`): Text, icons

### Gray Opacity (for overlays)
- **5%** (`bg-gray-50`): Subtle backgrounds
- **10%** (`bg-white/10`): Light overlays (avoid in new design)
- **50%** (`bg-white/50`): Translucent backgrounds

## Text Colors by Hierarchy

### Headings
```tsx
<h1 className="text-gray-900">  // #1a202c
<h2 className="text-gray-900">  // #1a202c
<h3 className="text-gray-900">  // #1a202c
```

### Body Text
```tsx
<p className="text-gray-600">    // #64748b
<span className="text-gray-500">  // #9ca3af
<small className="text-gray-400"> // #9ca3af
```

### Accented Text
```tsx
<p className="text-[#065D7E]">   // Primary blue
<p className="text-[#11D4D8]">   // Cyan accent
<p className="text-[#0a7aa0]">   // Secondary blue
```

## Background Colors

### Main Backgrounds
```tsx
<div className="bg-white">       // #FFFFFF - Cards, content
<div className="bg-[#F0FBFB]">   // #F0FBFB - Page background
<div className="bg-gray-50">     // #F9FAFB - Subtle variation
```

### Accent Backgrounds
```tsx
<div className="bg-[#065D7E]/10">  // Primary blue highlight
<div className="bg-[#11D4D8]/10">  // Cyan highlight
<div className="bg-[#0a7aa0]/10">  // Secondary blue highlight
```

### Gradient Backgrounds
```tsx
<div className="bg-gradient-to-br from-[#F0FBFB] to-white">
  // Subtle gradient for hero sections
</div>

<div className="bg-gradient-to-br from-[#065D7E] to-[#0a7aa0]">
  // Strong gradient for CTAs (white text)
</div>
```

## Shadow System

```tsx
shadow-sm      // Subtle shadow for cards
shadow-md      // Medium shadow for elevated elements
shadow-lg      // Large shadow for modals/popovers
shadow-2xl     // Extra large shadow for hero elements
```

## Border System

```tsx
border-gray-200     // #E5E7EB - Subtle borders
border-gray-300     // #D1D5DB - Medium borders
border-[#065D7E]/20 // Brand color border (20% opacity)
border-[#11D4D8]/20 // Accent color border (20% opacity)
```

## Usage Examples

### Feature Card
```tsx
<Card className="border-0 shadow-sm bg-white">
  <CardContent className="p-6">
    <div className="flex items-start gap-4">
      <div className="p-2.5 rounded-lg bg-[#065D7E]/10">
        <Icon className="w-5 h-5 text-[#065D7E]" />
      </div>
      <div className="flex-1">
        <p className="text-[#065D7E] text-xs font-semibold mb-1 tracking-wider uppercase">
          Category
        </p>
        <p className="text-gray-900 font-bold text-lg mb-1">Title</p>
        <p className="text-gray-500 text-sm">Description</p>
      </div>
    </div>
  </CardContent>
</Card>
```

### Metric Display
```tsx
<Card className="border-0 shadow-sm bg-white">
  <CardContent className="p-5 text-center">
    <p className="text-3xl font-bold text-[#11D4D8] mb-1">$20K</p>
    <p className="text-gray-500 text-sm font-medium">Label</p>
  </CardContent>
</Card>
```

### Badge
```tsx
<Badge className="bg-[#065D7E]/10 text-[#065D7E] border-[#065D7E]/20 font-medium">
  Label
</Badge>
```

### Navigation Active State
```tsx
<button className="bg-[#065D7E] text-white shadow-sm px-4 py-2 rounded-lg">
  Active
</button>
```

### Navigation Inactive State
```tsx
<button className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg">
  Inactive
</button>
```

## Accessibility Compliance

All color combinations meet WCAG AA standards:

- **Level AAA**: Contrast ratio ≥ 7:1
  - #1a202c on white: 16.1:1
  - #374151 on white: 11.4:1
  - #64748b on white: 7.5:1

- **Level AA**: Contrast ratio ≥ 4.5:1
  - #9ca3af on white: 4.6:1
  - #065D7E on white: 6.9:1
  - #11D4D8 on white: 1.8:1 (use with dark background or large text)

## Best Practices

1. **Use white backgrounds** for main content areas
2. **Use brand colors sparingly** as accents only
3. **Maintain high contrast** for all text (minimum 4.5:1)
4. **Use subtle shadows** instead of borders for depth
5. **Consistent opacity levels** (10%, 20%, 100%)
6. **Avoid gradients** on content backgrounds
7. **Use uppercase + tracking** for category labels
8. **Test with color blindness simulators**

## Testing Checklist

- [ ] Color contrast ratios meet WCAG AA
- [ ] Text is readable on all backgrounds
- [ ] Brand colors used as accents only
- [ ] Consistent opacity levels
- [ ] No dark gradients on content
- [ ] Hover states provide clear feedback
- [ ] Focus states are visible
- [ ] Works in grayscale mode
- [ ] Passes color blindness tests
