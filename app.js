const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
canvas.width= 300; canvas.height = 300
let currentPlayer = 'crossPlayer'

const gameBoard = []
const arrayOfAreas =[]

const squareArea ={
    x: 0,
    y: 0,
    width: 100,
    heiht: 100

}
function initBoardPlaces(defaultValue) {
    for (let x = 0; x < 3 ; x++) {
        gameBoard.push([]);
        for (let y = 0; y < 3; y++) {
            gameBoard[x].push(defaultValue)  
        }
    }
    
}
initBoardPlaces()
gameBoard.forEach((index, array) =>{
    gameBoard.push(squareArea.x = 0 + (index.array * 100))
    console.log(index, array);
})


// function gameBoardArea() {
//     for (var x = 0; x < 3; x++) {
//         for (var y = 0; y < 3; y++) {
//             ctx.save();                
//             ctx.fillStyle = 'white'
//             ctx.translate(0 + y * canvas.width / 3, 0 + x * canvas.width / 3 - 1, canvas.height / 3 - 1);
//             ctx.restore();
//             b = 0
//             const widthEnd = ctx.canvas.getBoundingClientRect().width
//             const widthInit = ctx.canvas.getBoundingClientRect().width 
//             const heightEnd = ctx.canvas.getBoundingClientRect().height 
//             const heightInit = ctx.canvas.getBoundingClientRect().height
//             const h = ctx.height
//             gameBoard.push({
//                 y,
//                 x, 
//                 b, 
//                 widthInit, 
//                 widthEnd, 
//                 heightInit, 
//                 heightEnd
//             })
//             console.log(y, x)
//         }
//     }
// }


function circles() {
    this.x = x
    this.y = y
    this.radius = radius
    this.stroke = stroke
    this.startAngle = startAngle
    this.endAngle =  endAngle   
}

function crosses() {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
}


canvas.addEventListener('mousedown',(e) => {
    ctx.save();
    let rect = myCanvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'black';
    // ctx.fillStyle(transparent);
    ctx.strokeStyle = "gray";
    ctx.stroke()
    // ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.restore();
});


// canvas.onmousedown = () => {
//     marker.active = true
// }

// canvas.onmouseup = () => {
//     marker.active = false
// }

canvas.addEventListener('mousedown', (e) => {
    let rect = myCanvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    console.log("x: " + x + " y: " + y); 
}, false);





canvas.addEventListener('click', function(event) {
    if (currentPlayer == 'crossPlayer') {
        currentPlayer = 'circlePlayer'
    } else {
      currentPlayer = 'crossPlayer'  
    }
    console.log(currentPlayer); 
    document.getElementById('texto').innerHTML = `<br>Current Player!<br> <b> ${currentPlayer}`;

}, false);

document.getElementById('texto').innerHTML = `<br>Current Player! <br><b> ${currentPlayer}`;


gameBoard

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

