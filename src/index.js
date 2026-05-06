import { SinglishInstance } from './adapters/vanilla.js';
import { transliterate } from './core/Converter.js';
import { createToggleButton } from './ui/ToggleButton.js';
import { createGuideModal } from './ui/GuideModal.js';

export { transliterate, SinglishInstance };

export default class Singlish {
    constructor(options = {}) {
        this.enabled = options.enabled || false;
        this.showUI = options.showUI !== false;
        this.uiContainer = options.uiContainer ? document.querySelector(options.uiContainer) : null;
        this.instances = new Map();
        this.ui = null;
        this.modal = null;
        
        this.init();
    }

    init() {
        // Observe for new inputs (for modals or dynamic content)
        const observer = new MutationObserver(() => this.attachAll());
        observer.observe(document.body, { childList: true, subtree: true });
        this.attachAll();

        // Global shortcut
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.code === 'KeyS') {
                e.preventDefault();
                this.toggle();
            }
        });

        // Initialize UI if requested
        if (this.showUI) {
            this.modal = createGuideModal();
            this.ui = createToggleButton({
                container: this.uiContainer,
                onToggle: () => this.toggle(),
                onHelp: () => this.modal.show()
            });
            this.ui.update(this.enabled);
        }
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
        if (this.ui) this.ui.update(this.enabled);
        if (this.onToggle) this.onToggle(this.enabled);
    }

    destroy() {
        if (this.ui) this.ui.destroy();
        // Additional cleanup can be added here
    }
}
