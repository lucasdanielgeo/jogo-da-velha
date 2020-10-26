const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
canvas.width= 300; canvas.height = 300
const gameBoardAreaInputs = []

function gameBoardArea() {
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            ctx.save();                
            ctx.fillStyle = 'white'
            ctx.translate(0 + y * canvas.width / 3, 0 + x * canvas.width / 3 - 1, canvas.height / 3 - 1);
            ctx.restore();
            b = 0
            const widthEnd = ctx.canvas.getBoundingClientRect().width
            const widthInit = ctx.canvas.getBoundingClientRect().width - 1
            const heightEnd = ctx.canvas.getBoundingClientRect().height
            const heightInit = ctx.canvas.getBoundingClientRect().height 
            const h = ctx.height
            gameBoardAreaInputs.push({y,x, b, widthInit, widthEnd, heightInit, heightEnd})
            console.log(y, x)
        }
    }
}

function changeButtonState(){

}


function circles() {
    this.x = x
    this.y = y
    this.radius = radius
    this.stroke = stroke
    this.startAngle = startAngle
    this.endAngle =  endAngle   
}

// circles.forEach(circle => {
//     ctx.beginPath();
//     /** @type {CanvasRenderingContext2D} */
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
//     ctx.fillStyle = circle.color;
//     ctx.fill();
// });


// canvas.onmousedown = () => {
//     marker.active = true
// }

// canvas.onmouseup = () => {
//     marker.active = false
// }

canvas.addEventListener('mousedown', function(event) {
    var rect = myCanvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y); 
}, false);


function crosses() {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
}

let currentTimePlay = 'crossPlayer'

canvas.addEventListener('click', function(event) {
    if (currentTimePlay == 'crossPlayer') {
        currentTimePlay = 'circlePlayer'
    } else {
      currentTimePlay = 'crossPlayer'  
    }
    console.log(currentTimePlay); 
    document.getElementById('texto').innerHTML = `<br>Current Player!<br> <b> ${currentTimePlay}`;

}, false);

document.getElementById('texto').innerHTML = `<br>Current Player! <br><b> ${currentTimePlay}`;


gameBoardArea()

function printGameBoard() {
    let gameBoardStroke = document.getElementById('myCanvas').getContext('2d');
    gameBoardStroke.strokeStyle = "gray";

    gameBoardStroke.moveTo(canvas.width / 3, canvas.height * 0.05);
    gameBoardStroke.lineTo(canvas.width / 3, canvas.height * 0.95);

    gameBoardStroke.moveTo((canvas.width / 3) + canvas.width / 3, canvas.height * 0.05);
    gameBoardStroke.lineTo((canvas.width / 3) + canvas.width / 3, canvas.height * 0.95);

    gameBoardStroke.moveTo(canvas.width * 0.05, canvas.height / 3);
    gameBoardStroke.lineTo(canvas.width * 0.95, canvas.height / 3);

    gameBoardStroke.moveTo(canvas.width * 0.95, (canvas.height / 3) + canvas.height / 3);
    gameBoardStroke.lineTo(canvas.width * 0.05, (canvas.height / 3) + canvas.height / 3);
    gameBoardStroke.stroke()
}
printGameBoard()

