// Define canvas as 2d.
const c = document.getElementById("canvas").getContext("2d");

const player = new Player()

// Render canvas
function createCanvas() {
    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);
}

// Create animation loop
function main() {
    requestAnimationFrame(main);
    createCanvas();
    player.draw();
    player.update();
}

// Initiate animation loop 
window.onload = function() {
    main();
}
