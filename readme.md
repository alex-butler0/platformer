## Outline
### Project Description

### Steps
1. Create player
2. Create animation loop
3. Create bottom vertical collision
4. Create gravity
5. Create "move left" and "move right" (ensure player can idle)
6. Create "jump"
7. Import a static background sprite
8. Import a static player sprite

- Create sidescroller background effect
- Import player idle animations
- Create horizontal collision
- Create platforms
- Create top vertical collision

## Developer Notes
### Objective
- Become familiar with 2D platformer design and mechanics
- Expand JavaScript skillset
- Develop the skills necessary to create my own JavaScript platformer from scratch

### Future Plans
Potentially implement a 2D platformer into a web development project as a form of navigation. 

### Bugs
#### Ongoing


#### Resolved
1. Player.js - vertical clipping registration 
    // Add gravity.
    // BUG: For some reason, need to apply a speed multiplier >= 1.37 for player to not clip floor. 
            // RESULT: Choppy landing visual. 
            // LOGIC: Distance between player and canvas should be equivalent to player model + position + 1 * speed.
            // EDIT: Moved "this.sides.bottom =" outside of the conditional statement. Landing is still choppy, but no more floor clipping. 

## References
- Created alongside tutorial "Multi-room Platformer Game Tutorial with JavaScript and HTML Canvas" by Chris Courses
- Player (girl) asset pack courtesy of ANT_games (no license)
- Background asset pack courtesy of MonibTaha (CC0 License)
- Woods asset pack courtesy of brullov (no license)
