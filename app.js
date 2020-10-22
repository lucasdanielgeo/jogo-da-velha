const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
canvas.width= 300; canvas.height = 300
const gameBoardAreaInputs = []
const marker = {
    active: false,
    pos: {
        x: 0,
        y: 0
    }
}

function gameBoardArea() {
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            ctx.save();                
            ctx.fillStyle = 'white'
            ctx.translate(0 + y * canvas.width / 3, 0 + x * canvas.width / 3 - 1, canvas.height / 3 - 1);
            ctx.restore();
            gameBoardAreaInputs.push({y,x})
            console.log(y, x)
        }
    }
    
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


canvas.onmousedown = () => {
    marker.active = true
}

canvas.onmouseup = () => {
    marker.active = false
}

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



// canvas.addEventListener('click', () => {
//     console.log('canvas click', )
    
// })


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

