// Define context
const c = document.getElementById("canvas").getContext("2d");

const player = new Player()

// Render canvas
function createCanvas() {
    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);
}

// Create animation loop
function main() {
    window.requestAnimationFrame(main);
    createCanvas();
    player.draw();
    player.update();
}

// Initiate animation loop 
window.onload = function() {
    main();
}

// Listen for keydowns
window.addEventListener("keydown", (event) => {

});
