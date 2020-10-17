/** @type {CanvasRenderingContext2D} */
const canvas = document.getElementById("myCanvas");
var canvasWidth = canvas.width
var canvasHeight = canvas.height 
const ctx = document.getElementById('myCanvas').getContext('2d');
const gameBoardAreaInputs = []

function gameBoardArea() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            /** @type {CanvasRenderingContext2D} */
            ctx.save();                
            //ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255, .1 )';
            ctx.fillStyle = 'white'
            ctx.translate(0 + j * canvasWidth / 3, 0 + i * canvasHeight / 3);
            ctx.fillRect(0, 0, canvasWidth / 3 - 1, canvasHeight / 3 - 1);
            ctx.restore();
            gameBoardAreaInputs.push({j,i})
            array_area = [j, i]
            console.log(j, i)
        }
    }
}

const circles = [
    {
      x: 180,
      y: 180,
      radius: 50,
      color: 'rgb(255,0,0)'
    },
    {
      x: 90,
      y: 90,
      radius: 50,
      color: 'rgb(0,0,0)'
    }
];

circles.forEach(circle => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = circle.color;
    ctx.fill();
  });

canvas.addEventListener('click', () => {
    console.log('canvas click')
})
gameBoardArea()

function printGameBoard() {
    let gameBoardStroke = document.getElementById('myCanvas').getContext('2d');
    gameBoardStroke.strokeStyle = "gray";

    gameBoardStroke.moveTo(canvasWidth / 3, canvasHeight * 0.05);
    gameBoardStroke.lineTo(canvasWidth / 3, canvasHeight * 0.95);

    gameBoardStroke.moveTo((canvasWidth / 3) + canvasWidth / 3, canvasHeight * 0.05);
    gameBoardStroke.lineTo((canvasWidth / 3) + canvasWidth / 3, canvasHeight * 0.95);

    gameBoardStroke.moveTo(canvasWidth * 0.05, canvasHeight / 3);
    gameBoardStroke.lineTo(canvasWidth * 0.95, canvasHeight / 3);

    gameBoardStroke.moveTo(canvasWidth * 0.95, (canvasHeight / 3) + canvasHeight / 3);
    gameBoardStroke.lineTo(canvasWidth * 0.05, (canvasHeight / 3) + canvasHeight / 3);
    gameBoardStroke.stroke()
}
printGameBoard()