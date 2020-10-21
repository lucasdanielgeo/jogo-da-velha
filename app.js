/** @type {CanvasRenderingContext2D} */
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
canvas.width= 300; canvas.height = 300
const gameBoardAreaInputs = []

function gameBoardArea() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            /** @type {CanvasRenderingContext2D} */
            ctx.save();                
            //ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255, .1 )';
            ctx.fillStyle = 'white'
            ctx.translate(0 + j * canvas.width / 3, 0 + i * canvas.width / 3 - 1, canvas.height / 3 - 1);
            ctx.restore();
            gameBoardAreaInputs.push({j,i})
            array_area = [j, i]
            console.log(j, i)
        }
    }
}

const circles = [
    {
      x: canvas.width/3-canvas.width/6,
      y: canvas.height/3-canvas.height/6,
      radius: 20,
      color: 'rgb(255,0,0)'
    },
    {
      x: 90,
      y: 90,
      radius: 20,
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

