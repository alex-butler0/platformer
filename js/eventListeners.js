// Listen for keydowns
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        // Create player jump effect.
        // Recall that top left of canvas is position 0, 0, so we want a jump to have a negative y value. 
        case "w": 
            // Add conditional to prevent infinite jumping when off the ground.
            // CON: This still allows infinite jumping if the player holds the key or times their inputs perfectly to the peak of each jump. 
            if (player.speed.y == 0) {player.speed.y = -20}
            break;
        // Initiate player left movement keydown. 
        case "a":
            keys.a.pressed = true;
            break;
        // Initiate player right movement keydown. 
        case "d":
            keys.d.pressed = true;
            break;
            
    };
});

// Listen for keyups
window.addEventListener("keyup", (event) => {
    // CON: Cannot strafe, because releasing either input completely removes speed value.
    switch (event.key) {
        // Terminate player left movement keydown. 
        case "a":
            keys.a.pressed = false;
            break;
        // Terminate player right movement keydown. 
        case "d":
            keys.d.pressed = false;
            break;
            
    };
});