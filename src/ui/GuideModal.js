export function createGuideModal() {
    const modal = document.createElement('div');
    modal.id = 'singlish-guide-modal';
    modal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); backdrop-filter:blur(6px); z-index:10000; align-items:center; justify-content:center; font-family: "Inter", system-ui, sans-serif;';
    
    const guideCard = document.createElement('div');
    guideCard.style.cssText = 'background:#fff; color: #1e293b; width:95%; max-width:800px; max-height:92vh; overflow-y:auto; border-radius:20px; padding:25px; box-shadow:0 25px 50px rgba(0,0,0,0.5); position:relative;';
    
    guideCard.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
            <div>
                <h2 style="margin:0; color:#1e293b; font-size: 24px; font-weight: 800;">Singlish Pro <span style="color:#5c61f2;">Guide</span></h2>
                <p style="margin:2px 0 0 0; color:#64748b; font-size:13px;">Customized Sinhala character mapping reference.</p>
            </div>
            <span id="close-singlish-guide" style="cursor:pointer; font-size:32px; line-height: 1; color: #cbd5e1;">&times;</span>
        </div>
        
        <div style="background:#f1f5f9; padding:12px 18px; border-radius:12px; margin-bottom:20px; border-left: 4px solid #5c61f2; font-size: 13.5px; line-height: 1.5; color: #475569;">
            <b>💡 Note:</b> We've updated the mapping based on your preference: <b>t=ට</b> and <b>th=ත</b>. <b>d</b> remains <b>ද</b>.
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1.3fr; gap:25px;">
            <!-- Left Column -->
            <div>
                <section style="margin-bottom:20px;">
                    <h3 style="color:#5c61f2; font-size:15px; font-weight:700; border-bottom:1px solid #f1f5f9; padding-bottom:6px; margin-bottom:12px;">Vowels (ස්වර)</h3>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                        <div style="background:#f8fafc; padding:8px; border-radius:8px; border:1px solid #f1f5f9; display:flex; justify-content:space-between; font-size:13px;">
                            <span style="font-weight:700; color:#64748b;">a / aa</span> <span>අ / ආ</span>
                        </div>
                        <div style="background:#f8fafc; padding:8px; border-radius:8px; border:1px solid #f1f5f9; display:flex; justify-content:space-between; font-size:13px;">
                            <span style="font-weight:700; color:#64748b;">ae / aae</span> <span>ඇ / ඈ</span>
                        </div>
                        <div style="background:#f8fafc; padding:8px; border-radius:8px; border:1px solid #f1f5f9; display:flex; justify-content:space-between; font-size:13px;">
                            <span style="font-weight:700; color:#64748b;">i / ii</span> <span>ඉ / ඊ</span>
                        </div>
                        <div style="background:#f8fafc; padding:8px; border-radius:8px; border:1px solid #f1f5f9; display:flex; justify-content:space-between; font-size:13px;">
                            <span style="font-weight:700; color:#64748b;">u / uu</span> <span>උ / ඌ</span>
                        </div>
                        <div style="background:#f8fafc; padding:8px; border-radius:8px; border:1px solid #f1f5f9; display:flex; justify-content:space-between; font-size:13px;">
                            <span style="font-weight:700; color:#64748b;">e / ee</span> <span>එ / ඒ</span>
                        </div>
                        <div style="background:#f8fafc; padding:8px; border-radius:8px; border:1px solid #f1f5f9; display:flex; justify-content:space-between; font-size:13px;">
                            <span style="font-weight:700; color:#64748b;">o / oo</span> <span>ඔ / ඕ</span>
                        </div>
                        <div style="background:#f8fafc; padding:8px; border-radius:8px; border:1px solid #f1f5f9; display:flex; justify-content:space-between; font-size:13px;">
                            <span style="font-weight:700; color:#64748b;">ai / au</span> <span>ඓ / ඖ</span>
                        </div>
                        <div style="background:#f8fafc; padding:8px; border-radius:8px; border:1px solid #f1f5f9; display:flex; justify-content:space-between; font-size:13px;">
                            <span style="font-weight:700; color:#64748b;">R / Ruu</span> <span>ඍ / ඎ</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 style="color:#5c61f2; font-size:15px; font-weight:700; border-bottom:1px solid #f1f5f9; padding-bottom:6px; margin-bottom:12px;">Special Marks</h3>
                    <div style="display:grid; grid-template-columns: 1fr; gap:6px;">
                        <div style="background:#fff7ed; padding:10px; border-radius:10px; border:1px solid #ffedd5; display:flex; justify-content:space-between; font-size:13px;">
                            <span style="font-weight:700; color:#c2410c;">M / o / H</span> <span>ං ං ඃ</span>
                        </div>
                        <div style="background:#fff7ed; padding:10px; border-radius:10px; border:1px solid #ffedd5; display:flex; justify-content:space-between; font-size:13px;">
                            <span style="font-weight:700; color:#c2410c;">kr / ky / lR / lRR</span> <span>ක්‍ර ක්‍ය කෟ කෳ</span>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Right Column -->
            <div>
                <section style="margin-bottom:20px;">
                    <h3 style="color:#5c61f2; font-size:15px; font-weight:700; border-bottom:1px solid #f1f5f9; padding-bottom:6px; margin-bottom:12px;">Consonants (ව්යංජන)</h3>
                    <table style="width:100%; border-collapse: collapse; font-size:13.5px;">
                        <tr style="border-bottom:1px solid #f8fafc;"><td style="padding:6px 0; color:#94a3b8;">Gutturals</td><td style="padding:6px 0; font-weight:700;">k g K G</td><td style="padding:6px 0; text-align:right;">ක ග ඛ ඝ</td></tr>
                        <tr style="border-bottom:1px solid #f8fafc;"><td style="padding:6px 0; color:#94a3b8;">Palatals</td><td style="padding:6px 0; font-weight:700;">c j C J ch</td><td style="padding:6px 0; text-align:right;">ච ජ ඡ ඣ ච</td></tr>
                        <tr style="border-bottom:1px solid #f8fafc;"><td style="padding:6px 0; color:#94a3b8;">Retroflex</td><td style="padding:6px 0; font-weight:700;">t T D N L</td><td style="padding:6px 0; text-align:right;">ට ඨ ඩ ණ ළ</td></tr>
                        <tr style="border-bottom:1px solid #f8fafc;"><td style="padding:6px 0; color:#94a3b8;">Dentals</td><td style="padding:6px 0; font-weight:700;">th d TH dh</td><td style="padding:6px 0; text-align:right;">ත ද ථ ධ</td></tr>
                        <tr style="border-bottom:1px solid #f8fafc;"><td style="padding:6px 0; color:#94a3b8;">Labials</td><td style="padding:6px 0; font-weight:700;">p b m f P B</td><td style="padding:6px 0; text-align:right;">ප බ ම ෆ ඵ භ</td></tr>
                        <tr style="border-bottom:1px solid #f8fafc;"><td style="padding:6px 0; color:#94a3b8;">Others</td><td style="padding:6px 0; font-weight:700;">y r l v w s h</td><td style="padding:6px 0; text-align:right;">ය ර ල ව ව ස හ</td></tr>
                        <tr style="border-bottom:1px solid #f8fafc;"><td style="padding:6px 0; color:#94a3b8;">Sibilants</td><td style="padding:6px 0; font-weight:700;">sh Sh S x z</td><td style="padding:6px 0; text-align:right;">ශ ෂ ශ ෂ ස</td></tr>
                    </table>
                </section>

                <section>
                    <h3 style="color:#5c61f2; font-size:15px; font-weight:700; border-bottom:1px solid #f1f5f9; padding-bottom:6px; margin-bottom:12px;">Clusters & Combinations</h3>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                        <div style="background:#f0fdf4; padding:10px; border-radius:10px; border:1px solid #dcfce7; font-size:12.5px;">
                            <div style="font-weight:700; color:#166534; margin-bottom:3px;">Common</div>
                            <div style="display:flex; justify-content:space-between;"><span>nd, nt, mb</span> <b>න්ද න්ත ම්බ</b></div>
                        </div>
                        <div style="background:#f0fdf4; padding:10px; border-radius:10px; border:1px solid #dcfce7; font-size:12.5px;">
                            <div style="font-weight:700; color:#166534; margin-bottom:3px;">Sanyaka / Special</div>
                            <div style="display:flex; justify-content:space-between;"><span>nng, nndh, ny, gn</span> <b>ඟ ඳ ඤ ඥ</b></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        
        <div style="margin-top:25px; padding:15px; background:#f8fafc; border-radius:15px; display:flex; justify-content:space-between; align-items:center; border:1px solid #e2e8f0;">
            <div style="font-size:13px; color:#64748b;">Shortcut: <code style="background:#fff; padding:3px 6px; border-radius:4px; border:1px solid #cbd5e1; font-weight:700; color:#5c61f2;">Ctrl + Shift + S</code></div>
            <button id="close-guide-btn" style="background:#5c61f2; color:#fff; border:none; padding:8px 24px; border-radius:10px; font-weight:700; cursor:pointer; font-size:13.5px;">Got it!</button>
        </div>
    `;
    
    modal.appendChild(guideCard);
    document.body.appendChild(modal);

    const closeSinglishGuide = () => { modal.style.display = 'none'; };
    modal.querySelector('#close-singlish-guide').onclick = closeSinglishGuide;
    modal.querySelector('#close-guide-btn').onclick = closeSinglishGuide;
    modal.onclick = (e) => { if(e.target === modal) closeSinglishGuide(); };

    return {
        show: () => { modal.style.display = 'flex'; },
        hide: closeSinglishGuide
    };
}
