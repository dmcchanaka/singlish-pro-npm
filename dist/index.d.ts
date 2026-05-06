export default class Singlish {
    constructor(options?: {});
    enabled: any;
    showUI: boolean;
    uiContainer: any;
    instances: Map<any, any>;
    ui: {
        update: (enabled: any) => void;
        destroy: () => void;
    };
    modal: {
        show: () => void;
        hide: () => void;
    };
    init(): void;
    attachAll(): void;
    toggle(): void;
    destroy(): void;
}
import { transliterate } from "./core/Converter.js";
import { SinglishInstance } from "./adapters/vanilla.js";
export { transliterate, SinglishInstance };
