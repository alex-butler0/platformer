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
    // Create movement and bottom collision.
    update() {
        // Enable movement on both axes by adding speed to current position with each update.
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        this.sides.bottom = this.position.y + this.dimensions.height;
        // Add gravity.
        // Detect whether player will be above bottom of canvas next frame. If so, add gravity. If not, end falling. 
        if (this.sides.bottom + this.speed.y < canvas.height) {
            this.speed.y += this.gravity;
        } else {this.speed.y = 0;}
    }
}