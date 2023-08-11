// Define player.
class Player {
    // Define player's position, dimensions, and sides. 
    constructor() {
        this.position = {
            x: 150,
            y: 150,
        }
        this.dimensions = {
            width: 64,
            height: 64,
        }
        this.sides = {
            bottom: this.position.y + this.dimensions.height
        }
    }
    // Render player.
    draw() {
        c.fillStyle = "red";
        c.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
    }
    // Create bottom vertical collision.
    update() {
        if (this.sides.bottom < canvas.height) {
            this.position.y++;
            this.sides.bottom = this.position.y + this.dimensions.height;
        }
    }
}