# Singlish Pro 🇱🇰

A high-performance, professional-grade Singlish-to-Sinhala transliteration engine. Perfect for any developer—from interns and beginners to senior pros. Add phonetic Sinhala typing to your web apps in minutes!

## 🚀 Features
- **Buffer-Based Accuracy**: Handles complex sounds like `ch`, `th`, `aa` and `sh` perfectly.
- **Built-in UI**: Ready-to-use toggle button and a stylish keyboard guide modal.
- **Framework Ready**: Native support for React, Next.js, Vue, Nuxt, Angular, and Laravel.
- **Lightweight**: Zero dependencies, keeping your bundle size small.
- **Intelligent Hal (්)**: Automatically handles vowel-consonant combinations correctly.

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

**Step 1:** Create a custom hook `hooks/useSinglish.js`:
```javascript
import { useEffect, useRef } from 'react';
import Singlish from 'singlish-pro';

export function useSinglish() {
    const singlishRef = useRef(null);

    useEffect(() => {
        // Ensure it only runs in the browser
        if (typeof window !== 'undefined' && !singlishRef.current) {
            singlishRef.current = new Singlish({ showUI: true });
        }
        return () => singlishRef.current?.destroy();
    }, []);
}
```

**Step 2:** Use the hook in your component (e.g., `app/page.js`):
```javascript
'use client';
import { useSinglish } from './hooks/useSinglish';

export default function Home() {
    useSinglish(); // This activates Singlish for all inputs on this page

    return (
        <textarea placeholder="Type here..." />
    );
}
```

---

### 4. Vue / Nuxt.js
*Clean integration for Vue developers.*

**Step 1:** Create a composable `composables/useSinglish.js`:
```javascript
import Singlish from 'singlish-pro';

export const useSinglish = () => {
  const singlish = ref(null);

  onMounted(() => {
    if (process.client) {
      singlish.value = new Singlish({ showUI: true });
    }
  });

  onUnmounted(() => singlish.value?.destroy());
};
```

**Step 2:** Use it in your component or `app.vue`:
```vue
<script setup>
useSinglish();
</script>

<template>
  <textarea placeholder="Type in Singlish..." />
</template>
```

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
[**Try the Live Demo**](https://dmcchanaka.github.io/singlish-pro/)

## 📜 License
MIT © [dmcchanaka](https://github.com/dmcchanaka)
