import { transliterate } from '../core/Converter';

export class SinglishInstance {
    constructor(element, options = {}) {
        this.el = element;
        this.options = options;
        this.buffer = "";
        this.lastSinhalaLength = 0;
        this.setup();
    }

    setup() {
        this.el.addEventListener('keydown', (e) => {
            if (!this.options.enabled) return;
            
            if (e.key.length === 1 && /[a-zA-Z]/.test(e.key) && !e.ctrlKey && !e.altKey && !e.metaKey) {
                e.preventDefault();
                this.handleChar(e.key);
            } 
            else if (e.key === ' ' || /[\s\.,!\?;:()\[\]{}]/.test(e.key)) {
                if (this.buffer.length > 0) {
                    e.preventDefault();
                    this.commit(e.key === ' ' ? ' ' : e.key);
                }
            }
            else if (e.key === 'Backspace') {
                if (this.buffer.length > 0) {
                    e.preventDefault();
                    this.buffer = this.buffer.slice(0, -1);
                    this.updateDisplay();
                }
            }
            else {
                this.commit("");
            }
        });

        this.el.addEventListener('blur', () => this.commit(""));
    }

    handleChar(char) {
        this.buffer += char;
        this.updateDisplay();
    }

    updateDisplay() {
        const sinhala = transliterate(this.buffer);
        const val = this.el.value;
        const start = this.el.selectionStart;
        const newVal = val.slice(0, start - this.lastSinhalaLength) + sinhala + val.slice(start);
        
        this.el.value = newVal;
        this.lastSinhalaLength = sinhala.length;
        this.el.setSelectionRange(start - (val.length - newVal.length), start - (val.length - newVal.length));
    }

    commit(char) {
        if (this.buffer.length > 0) {
            let sinhala = transliterate(this.buffer, { finalize: true });
            const val = this.el.value;
            const start = this.el.selectionStart;
            const newVal = val.slice(0, start - this.lastSinhalaLength) + sinhala + char + val.slice(start);
            
            this.el.value = newVal;
            this.buffer = "";
            this.lastSinhalaLength = 0;
            this.el.setSelectionRange(newVal.length, newVal.length);
        }
    }
}
