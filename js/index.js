// Define context
const c = document.getElementById("canvas").getContext("2d");

const player = new Player()

// Set constant to detect whether movement keys are pressed. 
// We implement this to allow detection of a key being held down while another key is pressed, enabling side to side movement without abrupt stops.
const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}

// Render canvas
function createCanvas() {
    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);
}

// Create animation loop
function main() {
    window.requestAnimationFrame(main);
    createCanvas();
    // Set player to stand idle by default and move horizontally upon keydown.
    player.speed.x = 0;
    if (keys.d.pressed) {player.speed.x = 6}
    else if (keys.a.pressed) {player.speed.x = -6}
    // Render in the player and update their position, gravity, and bottom collision.
    player.draw();
    player.update();
}

// Initiate animation loop 
window.onload = function() {
    main();
}