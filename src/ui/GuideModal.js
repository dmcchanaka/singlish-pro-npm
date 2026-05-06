export function createGuideModal() {
    const modal = document.createElement('div');
    modal.id = 'singlish-guide-modal';
    modal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); backdrop-filter:blur(5px); z-index:10000; align-items:center; justify-content:center; font-family: sans-serif;';
    
    const guideCard = document.createElement('div');
    guideCard.style.cssText = 'background:#fff; color: #192132; width:90%; max-width:600px; max-height:80vh; overflow-y:auto; border-radius:20px; padding:30px; box-shadow:0 20px 50px rgba(0,0,0,0.3); position:relative;';
    
    guideCard.innerHTML = `
        <h3 style="margin-top:0; color:#192132; display:flex; justify-content:space-between; align-items:center; font-size: 24px;">
            Singlish Typing Guide
            <span id="close-singlish-guide" style="cursor:pointer; font-size:32px; line-height: 1;">&times;</span>
        </h3>
        <p style="color:#666; margin-bottom:20px; font-size: 14px;">Use English phonetics to type in Sinhala. Capitals letters often produce hard (Mahaprana) variants.</p>
        
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
            <div>
                <h5 style="color:#5c61f2; border-bottom:2px solid #f0f0f0; padding-bottom:5px; margin: 0 0 10px 0;">Vowels (ස්වර)</h5>
                <table style="width:100%; font-size:14px; border-collapse: collapse;">
                    <tr><td style="padding: 4px 0;">a, aa</td><td>අ, ආ</td></tr>
                    <tr><td style="padding: 4px 0;">ae, aae</td><td>ඇ, ඈ</td></tr>
                    <tr><td style="padding: 4px 0;">i, ii</td><td>ඉ, ඊ</td></tr>
                    <tr><td style="padding: 4px 0;">u, uu</td><td>උ, ඌ</td></tr>
                    <tr><td style="padding: 4px 0;">e, ee</td><td>එ, ඒ</td></tr>
                    <tr><td style="padding: 4px 0;">o, oo</td><td>ඔ, ඕ</td></tr>
                </table>
            </div>
            <div>
                <h5 style="color:#5c61f2; border-bottom:2px solid #f0f0f0; padding-bottom:5px; margin: 0 0 10px 0;">Consonants (ව්යංජන)</h5>
                <table style="width:100%; font-size:14px; border-collapse: collapse;">
                    <tr><td style="padding: 4px 0;">k, g</td><td>ක, ග</td></tr>
                    <tr><td style="padding: 4px 0;">c, j, ch</td><td>ච, ජ, ච</td></tr>
                    <tr><td style="padding: 4px 0;">t, d, T, D</td><td>ත, ද, ට, ඩ</td></tr>
                    <tr><td style="padding: 4px 0;">n, m, N</td><td>න, ම, ණ</td></tr>
                    <tr><td style="padding: 4px 0;">p, b, f</td><td>ප, බ, ෆ</td></tr>
                    <tr><td style="padding: 4px 0;">s, h, sh, Sh</td><td>ස, හ, ශ, ෂ</td></tr>
                </table>
            </div>
        </div>
        
        <div style="margin-top:20px;">
            <h5 style="color:#5c61f2; border-bottom:2px solid #f0f0f0; padding-bottom:5px; margin: 0 0 10px 0;">Special Combinations</h5>
            <table style="width:100%; font-size:14px; border-collapse: collapse;">
                <tr><td style="padding: 4px 0;">o (small)</td><td>Anusvaraya (ං) - e.g. aok -> අංක</td></tr>
                <tr><td style="padding: 4px 0;">th, dh</td><td>ත, ද (Soft sounds)</td></tr>
                <tr><td style="padding: 4px 0;">kr, ky</td><td>Rakaaransaya (ක්ර), Yansaya (ක්ය)</td></tr>
                <tr><td style="padding: 4px 0;">Space</td><td>Finalizes word and adds Hal (්) to last consonant</td></tr>
            </table>
        </div>
        
        <div style="margin-top:30px; padding:15px; background:#f8f9fa; border-radius:10px; font-size:12px; color:#888;">
            <b>Keyboard Shortcut:</b> Press <code>Ctrl + Shift + S</code> to toggle Singlish mode anywhere.
        </div>
    `;
    
    modal.appendChild(guideCard);
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#close-singlish-guide');
    closeBtn.onclick = () => { modal.style.display = 'none'; };
    modal.onclick = (e) => { if(e.target === modal) modal.style.display = 'none'; };

    return {
        show: () => { modal.style.display = 'flex'; },
        hide: () => { modal.style.display = 'none'; }
    };
}
