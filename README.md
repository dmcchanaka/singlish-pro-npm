# Singlish Pro 🇱🇰

A high-performance, professional-grade Singlish-to-Sinhala transliteration engine. Perfect for any developer—from interns and beginners to senior pros. Add phonetic Sinhala typing to your web apps in minutes!

## 🚀 Features
- **Buffer-Based Accuracy**: Handles complex sounds like `ch`, `th`, `aa` and `sh` perfectly.
- **Custom Phonetic Layout**: Tailored for natural typing (e.g., `t` → **ට**, `th` → **ත**).
- **Smart Clusters**: Built-in logic for names like **"Chaminda"** (**න්ද**) and **"Lanka"** (**න්ක**).
- **Built-in UI**: Ready-to-use toggle button and a redesigned, stylish keyboard guide modal.
- **Framework Ready**: Native support for React, Next.js, Vue, Nuxt, Angular, and Laravel.
- **Lightweight**: Zero dependencies, keeping your bundle size small.

---

## ⌨️ Phonetic Mapping (v1.2.0)

Singlish Pro uses an intuitive hybrid mapping optimized for common usage:

| Key | Sinhala | Example |
| :--- | :--- | :--- |
| **t** | **ට** | ටිකක් (tikak) |
| **th** | **ත** | තනියම (thaniyama) |
| **d** | **ද** | දවසක් (dawasak) |
| **D** | **ඩ** | ඩොක්ටර් (Doktar) |
| **nd** | **න්ද** | චාමින්ද (chaminda) |
| **aa** | **ා** | කාර් (kaar) |

*For more combinations, click the **"?"** button in the built-in UI guide.*

---

---

## 📦 Installation

Install the package via NPM or Yarn:

```bash
# Using NPM
npm install singlish-pro

# Using Yarn
yarn add singlish-pro
```

---

## 🛠 Step-by-Step Implementation Guides

### 1. PHP / Laravel (Vite)
*Perfect for beginners!*

**Step 1:** Install the package in your Laravel project:
```bash
npm install singlish-pro
```

**Step 2:** Open `resources/js/app.js` and initialize Singlish:
```javascript
import Singlish from 'singlish-pro';

// This will automatically find all textareas and text inputs
window.addEventListener('DOMContentLoaded', () => {
    new Singlish({
        showUI: true, // Shows the floating toggle button
        enabled: false // Starts in English mode
    });
});
```

**Step 3:** Run your vite build:
```bash
npm run dev
```
*That's it! Any textarea in your Blade templates will now support Singlish.*

---

### 2. Vanilla JavaScript / Node.js
*Simple and direct.*

**Step 1:** Include the library in your JS file:
```javascript
import Singlish from 'singlish-pro';

const singlish = new Singlish({ showUI: true });
```

**Step 2:** (Pro Tip) If you just want to convert text without any UI:
```javascript
import { transliterate } from 'singlish-pro';

const result = transliterate('oyaata kohomada?'); 
console.log(result); // ඔයාට කොහොමද?
```

---

### 3. React / Next.js
*Step-by-step for modern React apps.*

**Step 1:** Add the package to your transpilation list (Required for Next.js 13+):
Open `next.config.mjs` (or `next.config.js`) and add:
```javascript
const nextConfig = {
  transpilePackages: ['singlish-pro'],
};
```

**Step 2:** Create a custom hook `hooks/useSinglish.js`:
```javascript
import { useEffect, useRef } from 'react';
import Singlish from 'singlish-pro';

export function useSinglish(options = {}) {
    const singlishRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && !singlishRef.current) {
            // Handle default export correctly for ESM/CJS environments
            const SinglishClass = Singlish.default || Singlish;
            singlishRef.current = new SinglishClass({
                showUI: true,
                enabled: false,
                ...options
            });
        }

        return () => {
            if (singlishRef.current) {
                singlishRef.current.destroy();
                singlishRef.current = null;
            }
        };
    }, []);
}
```

**Step 3:** Use the hook in your component (e.g., `app/page.js`):
```javascript
'use client';
import { useSinglish } from '../hooks/useSinglish';

export default function Home() {
    useSinglish(); // Activates Singlish for all inputs on this page

    return (
        <div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" />
        </div>
    );
}
```

---

### 4. Vue / Nuxt.js
*Clean integration for Vue developers.*

**Step 1:** Create a composable `composables/useSinglish.js`:
```javascript
import Singlish from 'singlish-pro';

export const useSinglish = (options = {}) => {
  const singlish = ref(null);

  onMounted(() => {
    // Use universal browser check
    if (typeof window !== 'undefined') {
      singlish.value = new Singlish({
        showUI: true,
        enabled: false,
        ...options
      });
    }
  });

  onUnmounted(() => {
    if (singlish.value) {
      singlish.value.destroy();
    }
  });

  return singlish;
};
```

**Step 2:** Use it in your component or `app.vue`:
```vue
<script setup>
// Nuxt automatically imports the composable if it's in the /composables folder
const singlish = useSinglish();
</script>

<template>
  <div>
    <input type="text" placeholder="Title" />
    <textarea placeholder="Description" />
  </div>
</template>
```

> [!TIP]
> If you are using Nuxt 3 with an `app/` directory (Nuxt 4 style), ensure you have `srcDir: 'app'` set in your `nuxt.config.ts`.

---

### 5. Angular
*Professional directive-based approach.*

**Step 1:** Generate or create a directive `singlish.directive.ts`:
```typescript
import { Directive, OnInit, OnDestroy } from '@angular/core';
import Singlish from 'singlish-pro';

@Directive({
  selector: '[appSinglish]',
  standalone: true
})
export class SinglishDirective implements OnInit, OnDestroy {
  private singlish: any;

  ngOnInit() {
    this.singlish = new Singlish({ showUI: true });
  }

  ngOnDestroy() {
    this.singlish?.destroy();
  }
}
```

**Step 2:** Apply the directive to your container or input in HTML:
```html
<div appSinglish>
  <textarea placeholder="Angular Singlish enabled!"></textarea>
</div>
```

---

## ⌨️ Keyboard Shortcuts
Stay productive with built-in shortcuts:
- **Ctrl + Shift + S**: Instantly toggle between Sinhala and English mode.

## 🔗 Live Demo
Want to see it in action?
[**Try the Live Demo**](https://dmcchanaka.github.io/singlish-pro-npm/)

## 📜 License
MIT © [dmcchanaka](https://github.com/dmcchanaka)
