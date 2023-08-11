const c = document.getElementById("canvas").getContext("2d");

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const player = {
    x: 512,
    y: 288,
    width: 64,
    height: 64
}

function draw(){
    c.fillStyle = "red";
    c.fillRect(player.x, player.y, player.width, player.height);
}


function main() {
    draw();
    requestAnimationFrame(main);
}

window.onload = function(){
    main();
}
