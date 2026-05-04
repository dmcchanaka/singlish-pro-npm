import { SinglishInstance } from './adapters/vanilla';
import { transliterate } from './core/Converter';

export { transliterate, SinglishInstance };

export default class Singlish {
    constructor() {
        this.enabled = false;
        this.instances = new Map();
        this.init();
    }

    init() {
        const observer = new MutationObserver(() => this.attachAll());
        observer.observe(document.body, { childList: true, subtree: true });
        this.attachAll();

        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.code === 'KeyS') {
                e.preventDefault();
                this.toggle();
            }
        });
    }

    attachAll() {
        const inputs = document.querySelectorAll('input[type="text"], textarea');
        inputs.forEach(el => {
            if (!this.instances.has(el)) {
                this.instances.set(el, new SinglishInstance(el, this));
            }
        });
    }

    toggle() {
        this.enabled = !this.enabled;
        if (this.onToggle) this.onToggle(this.enabled);
    }
}
