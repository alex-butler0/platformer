// Define sprite
class Sprite {
    // Create new image, add a "loaded" boolean.
    constructor({position, imageSrc}) {
        this.position = position;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
        }
        this.image.src = imageSrc;
        this.loaded = false;
    }
    // Render sprite.
    draw() {
        if (!this.loaded) return 
        c.drawImage(this.image, this.position.x, this.position.y);
    }
}