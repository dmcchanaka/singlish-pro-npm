import './bootstrap';
import Singlish from 'singlish-pro';

window.addEventListener('DOMContentLoaded', () => {
    new Singlish({
        showUI: true,
        enabled: false
    });
});
