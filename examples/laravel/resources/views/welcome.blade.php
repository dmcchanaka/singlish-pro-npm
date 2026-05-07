<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Singlish Pro - Laravel Demo</title>
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        <style>
            body { font-family: 'Instrument Sans', sans-serif; background: #f4f7f9; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
            .card { background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); width: 100%; max-width: 600px; }
            h1 { margin-top: 0; color: #192132; font-size: 24px; }
            p { color: #666; margin-bottom: 20px; }
            textarea { width: 100%; height: 200px; padding: 20px; border: 1px solid #e3e3e0; border-radius: 12px; font-size: 18px; box-sizing: border-box; transition: border-color 0.3s; }
            textarea:focus { outline: none; border-color: #5c61f2; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Singlish Pro + Laravel</h1>
            <p>Type in Singlish below. Use <strong>Ctrl + Shift + S</strong> to toggle Sinhala mode.</p>
            <textarea placeholder="Type here... (e.g. oyaatade kohomada?)"></textarea>
            
            <div style="margin-top: 20px; font-size: 13px; color: #888;">
                Integrated via Vite and NPM
            </div>
        </div>
    </body>
</html>
