const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 75;
let speed = 25;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

var btn = document.querySelector(".my-btn");

// Game Loop
function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    boundryCheck();
    drawBlueBlob();
}

// boundries
function boundryCheck(){
    //up
    if( y < radius) {
        y = radius;
    }
    //down
    if(y > canvas.height-radius) {
        y = canvas.height - radius;
    }
    //left
    if(x < radius) {
        x = radius;
    }
    //right
    if(x > canvas.width - radius){
        x = canvas.width - radius;
    }
}

// makes the blob move
function inputs(){
    if(upPressed){
        y -= speed;
    }
    if(downPressed){
        y = y + speed;
    }
    if(leftPressed){
        x = x - speed;
    }
    if(rightPressed) {
        x = x + speed;
    }
}


//requestAnimationFrame
//setInterval(drawGame, 1000)

function drawBlueBlob(){
    ctx.fillStyle = "blue";
    if (upPressed) {
        ctx.fillStyle = "red";
    } else if (downPressed) {
        ctx.fillStyle = "green";
    } else if (leftPressed) {
        ctx.fillStyle = "yellow";
    } else if (rightPressed) {
        ctx.fillStyle = "purple";
    }
    ctx.beginPath();
    ctx.arc(x,y, radius,0, Math.PI * 2);
    ctx.fill();
}
function clearScreen(){
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

// controls
function keyDown(event){
    //up
    if(event.keyCode == 38){
        upPressed = true;
    }
    //down
    if(event.keyCode == 40){
        downPressed = true;
    }
    //left
    if(event.keyCode == 37){
        leftPressed = true;
    }
    //right
    if(event.keyCode == 39){
        rightPressed = true;
    }
}

function keyUp(event){
    //up
    if(event.keyCode == 38){
        upPressed = false;
    }
    //down
    if(event.keyCode == 40){
        downPressed = false;
    }
    //left
    if(event.keyCode == 37){
        leftPressed = false;
    }
    //right
    if(event.keyCode == 39){
        rightPressed = false;
    }
}
drawGame();

// controls instructions button
btn.addEventListener("click", function(event){
    alert("Use arrow keys to move the blob");
})

