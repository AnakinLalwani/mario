window.addEventListener("keydown", myKeyDown);
var canvaswidth = document.getElementById("game").offsetWidth;
var canvasheight = document.getElementById("game").offsetHeight;
var column = (canvaswidth)/10;
var rows = (canvasheight)/10;
console.log(column);
console.log(rows);
var mariox = 1;
var person;
var block = document.getElementById("block").src;
var mario = document.getElementById("mario").src;
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var gravity;
function columnline(num) {
    x = num * 10;
    return x;
}
function rowline(num) {
    y = num * 10;
    return y;
}
var image = new Image();
image.src = block;
image.onload = drawall();
function drawall() {
    drawBlocks();
    drawgrid();
    person = new Image();
    person.src = mario;
    person.onload = function() {
        ctx.drawImage(person, columnline(mariox), rowline(10));
    }
}
function myKeyDown(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed==38){
        console.log("up");
        up();
    }
    if(keypressed==40){
        console.log("down");
        down();
    }
    if(keypressed==39){
        console.log("left");
        left();
    }
    if(keypressed==37){
        console.log("right");
        right();
    }
}
function drawBlocks() {
    for (i=0; i < rows; i += 2) {
        if(i != 10) {
            ctx.drawImage(image, columnline(i), rowline(13));
        }
    }
}
function drawgrid() {
    for (j=0; j < column; j++){
        ctx.moveTo(columnline(j), rowline(0));
        ctx.lineTo(columnline(j), rowline(15));
        ctx.strokeStyle = "red";
        ctx.stroke();
    }
    for (k=0; k < column; k++){
        ctx.moveTo(columnline(0), rowline(k));
        ctx.lineTo(columnline(33), rowline(k));
        ctx.strokeStyle = "red";
        ctx.stroke();
    }
} 
function left() {
    ctx.clearRect(0, 0 , columnline(33), rowline(15));
    drawBlocks();
    drawgrid();
    mariox +=1;
    ctx.drawImage(person, columnline(mariox), rowline(10));
}
function right() {
    ctx.clearRect(0, 0 , columnline(33), rowline(15));
    drawBlocks();
    drawgrid();
    mariox -=1;
    ctx.drawImage(person, columnline(mariox), rowline(10));
}