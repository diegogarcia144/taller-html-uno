// Dibujo en canvas 
    const canvas = document.getElementById('miCanvas'); 
    const ctx = canvas.getContext('2d'); 
    ctx.fillStyle = "#009578"; 
    ctx.fillRect(10, 10, 100, 50); 
    ctx.strokeStyle = "#333"; 
    ctx.strokeRect(10, 10, 100, 50); 
    ctx.font = "16px Arial"; 
    ctx.fillStyle = "black"; 
    ctx.fillText("Hola Canvas", 20, 45);