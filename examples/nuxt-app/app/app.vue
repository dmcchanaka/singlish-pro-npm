<script setup>
const singlish = useSinglish();
</script>

<template>
  <div style="font-family: sans-serif; padding: 50px; background: #f9fafb; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
    <div style="background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); width: 100%; max-width: 600px;">
      <h1 style="color: #111827; margin-top: 0;">Singlish Pro + Nuxt</h1>
      <p style="color: #4b5563; margin-bottom: 24px;">
        This demo uses a custom Nuxt Composable to initialize the Singlish engine.
      </p>
      
      <div style="margin-bottom: 24px;">
        <label style="display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 8px;">Single line input:</label>
        <input 
          type="text"
          placeholder="Type here..."
          style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 12px; font-size: 16px; outline: none; transition: border-color 0.2s;"
          onfocus="this.style.borderColor='#5c61f2'"
          onblur="this.style.borderColor='#d1d5db'"
        />
      </div>

      <div style="margin-bottom: 16px;">
        <label style="display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 8px;">Try typing here:</label>
        <textarea 
          placeholder="kohomada sapasanipe?"
          style="width: 100%; height: 180px; padding: 16px; border: 1px solid #d1d5db; border-radius: 12px; font-size: 18px; outline: none; transition: border-color 0.2s;"
          onfocus="this.style.borderColor='#5c61f2'"
          onblur="this.style.borderColor='#d1d5db'"
        ></textarea>
      </div>
      
      <p style="font-size: 13px; color: #9ca3af; margin: 0;">
        Press <strong>Ctrl + Shift + S</strong> to toggle.
      </p>
    </div>
  </div>
</template>
