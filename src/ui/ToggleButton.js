export function createToggleButton(options = {}) {
    const { container, onToggle, onHelp } = options;
    
    let wrapper = container;
    const isFloating = !container;

    if (isFloating) {
        wrapper = document.createElement('div');
        wrapper.id = 'singlish-floating-container';
        wrapper.style.cssText = 'position:fixed; bottom:20px; right:20px; z-index:9999; display:flex; align-items:center; gap:10px; font-family: sans-serif;';
        document.body.appendChild(wrapper);
    } else {
        wrapper.style.display = 'flex';
        wrapper.style.alignItems = 'center';
        wrapper.style.gap = '10px';
        wrapper.style.fontFamily = 'sans-serif';
    }

    const helpBtn = document.createElement('button');
    helpBtn.innerHTML = '?';
    helpBtn.type = 'button';
    helpBtn.style.cssText = 'width:35px; height:35px; border-radius:50%; background:#fff; color:#5c61f2; border:1px solid #5c61f2; font-weight:bold; cursor:pointer; box-shadow:0 4px 10px rgba(0,0,0,0.1); transition:all 0.3s ease; display: flex; align-items: center; justify-content: center;';
    
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'singlish-toggle-btn';
    toggleBtn.type = 'button';
    toggleBtn.innerHTML = 'සිංහල: OFF';
    toggleBtn.style.cssText = 'border-radius:30px; padding:8px 16px; background: #6c757d; color: #fff; border: none; font-weight:bold; cursor: pointer; transition:all 0.3s ease; min-width:120px; box-shadow:0 4px 10px rgba(0,0,0,0.1);';

    wrapper.appendChild(helpBtn);
    wrapper.appendChild(toggleBtn);

    // Hover effects
    helpBtn.onmouseover = () => { helpBtn.style.transform = 'scale(1.1)'; helpBtn.style.background = '#5c61f2'; helpBtn.style.color = '#fff'; };
    helpBtn.onmouseout = () => { helpBtn.style.transform = 'scale(1.0)'; helpBtn.style.background = '#fff'; helpBtn.style.color = '#5c61f2'; };
    
    toggleBtn.onclick = () => onToggle();
    helpBtn.onclick = () => onHelp();

    return {
        update: (enabled) => {
            toggleBtn.innerHTML = enabled ? 'සිංහල: ON' : 'සිංහල: OFF';
            toggleBtn.style.background = enabled ? '#28a745' : '#6c757d';
        },
        destroy: () => {
            if (isFloating && wrapper.parentNode) {
                wrapper.parentNode.removeChild(wrapper);
            } else {
                wrapper.innerHTML = '';
            }
        }
    };
}
