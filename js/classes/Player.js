// Define player
class Player {
    // Define player's position, dimensions, and sides. 
    constructor() {
        this.position = {
            x: 0,
            y: 0,
        }
        this.dimensions = {
            width: 100,
            height: 100,
        }
        this.sides = {
            bottom: this.position.y + this.dimensions.height,
        }
        this.speed = {
            x: 0,
            y: 0,
        }
        this.gravity = 1;
    }
    // Render player.
    draw() {
        c.fillStyle = "red";
        c.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
    }
    // Create gravity and bottom vertical collision.
    update() {
        // Set the player position to increase each frame by the value of speed. 
        this.position.y += this.speed.y;
        // Detect whether player will be above bottom of canvas next frame. If so, add gravity. If not, end falling. 
        // BUG: For some reason, need to apply a speed multiplier >= 1.37 for player to not clip floor. 
            // RESULT: Choppy landing visual. 
            // LOGIC: Distance between player and canvas should be equivalent to player model + position + 1 * speed.
        if (this.sides.bottom + 1.37 * this.speed.y < canvas.height) {
            this.speed.y += this.gravity;
            this.sides.bottom = this.position.y + this.dimensions.height;
        } else {
            this.speed.y = 0;
        }
        
    }
}