# Singlish Pro 🇱🇰

A high-performance, professional-grade Singlish-to-Sinhala transliteration engine. Designed for developers who need "perfect" phonetic typing in their web applications.

## Features

- **Buffer-Based Accuracy**: Unlike simple mapping libraries, Singlish Pro tracks typing history to handle multi-character sounds (like `ch`, `th`, `aa`) perfectly.
- **Framework Agnostic**: Works with React, Vue, Angular, or Vanilla JS.
- **Natural Phonetic Mapping**: Matches popular standards like Helakuru and UCSC.
- **Zero Dependencies**: Lightweight and fast.
- **Intelligent Hal Handling**: Automatically decides when to add the "hal" (්) mark.

## Installation

```bash
npm install singlish-pro
```

## Usage

### Vanilla JavaScript

```javascript
import Singlish from 'singlish-pro';

const singlish = new Singlish();
singlish.enabled = true; // Enable transliteration
```

### Pure Converter (No DOM)

```javascript
import { transliterate } from 'singlish-pro';

const sinhala = transliterate('chaminda'); 
console.log(sinhala); // චමින්ද
```

### React Hook Example

```javascript
import { useEffect, useRef } from 'react';
import { SinglishInstance } from 'singlish-pro';

export function useSinglish(inputRef, enabled) {
    useEffect(() => {
        if (inputRef.current) {
            new SinglishInstance(inputRef.current, { enabled });
        }
    }, [enabled]);
}
```

## Keyboard Shortcuts

- `Ctrl + Shift + S`: Toggle Singlish mode globally.

## License

MIT
