const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
canvas.width= 300; canvas.height = 300;
let rect = myCanvas.getBoundingClientRect();
let currentPlayer = 'crossPlayer'

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

const gameAreas = [
    {
        x: 0,
        y: 0,
        width: canvas.width/3,
        heiht: canvas.height/3,
        state: undefined
    },
    {
        x: 101,
        y: 0,
        width: canvas.width/3,
        heiht: canvas.height/3,
        state: undefined
    },
    {
        x: 201,
        y: 0,
        width: canvas.width/3,
        heiht: canvas.height/3,
        state: undefined
    },
    {
        x: 0,
        y: 101,
        width: canvas.width/3,
        heiht: canvas.height/3,
        state: undefined
    },
    {
        x: 101,
        y: 101,
        width: canvas.width/3,
        heiht: canvas.height/3,
        state: undefined
    },
    {
        x: 201,
        y: 101,
        width: canvas.width/3,
        heiht: canvas.height/3,
        state: undefined
    },
    {
        x: 0,
        y: 201,
        width: canvas.width/3,
        heiht: canvas.height/3,
        state: undefined
    },
    {
        x: 101,
        y: 201,
        width: canvas.width/3,
        heiht: canvas.height/3,
        state: undefined
    },
    {
        x: 201,
        y: 201,
        width: canvas.width/3,
        heiht: canvas.height/3,
        state: undefined
    }
]

// gameAreas.map(gameArea => {
//     ctx.beginPath()
//     ctx.save();
//     ctx.rect(gameArea.x, gameArea.y, gameArea.width, gameArea.height);
//     ctx.fill();
//     ctx.restore();
//     ctx.closePath();
// })


    gameAreas.map(gameArea => {
        canvas.addEventListener('onclick', (e) => {
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            if (gamaArea.x > x && gameArea.x + 100 < x) {
                console.log(gameArea)
            }})
    })



// gameBoards.map(gameBoard => {
//     ctx.beginPath()
//     ctx.save();
//     ctx.rect(item.x, item.y, item.width, item.height)
//     // ctx.rect(101,0,100,100)
//     ctx.fill();
//     ctx.stroke();
//     ctx.restore();
//     ctx.closePath();
// });

const arrayOfAreas =[]

const squareArea ={
    x: 0,
    y: 0,
    width: 100,
    heiht: 100

}

// function initBoardPlaces(defaultValue) {
//     for (let x = 0; x < 3 ; x++) {
//         gameBoard.push([100 * x]);
//         for (let y = 0; y < 3; y++) {
//             gameBoard[x].push(100*y)  
//         }
//     }   
// }

// initBoardPlaces()

// gameBoard.forEach((index, array) =>{
//     gameBoard.push(squareArea.x = 0 + (index.array * 100))
//     console.log(index, array);
// })


clickbleArea = []
for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
        clickbleArea.push(0 + y * canvas.width / 3, 0 + x * canvas.width / 3, canvas.height / 3)
        // console.log(0 + y * canvas.width / 3, 0 + x * canvas.width / 3, canvas.height / 3);
     }
}


function drawCircle() {
    canvas.addEventListener('mousedown', (e) => {
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let radius = rect.width/12;
        ctx.save();
        ctx.lineWidth = 5;
        ctx.strokeStyle =  'rgb(52, 142, 165)';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'black';
        ctx.stroke()
        ctx.restore();
        console.log('Teste')
    });
}

function drawCross() {
    canvas.addEventListener('mousedown', (e) => {
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        ctx.beginPath();
        ctx.save();
        ctx.lineWidth = 5;
        ctx.strokeStyle =  'rgb(52, 142, 165)';
        ctx.moveTo(x-20, y-20);
        ctx.lineTo(x+20, y+20);
        ctx.stroke();
        ctx.moveTo(x+20, y-20);
        ctx.lineTo(x-20, y+20);
        ctx.stroke();
        ctx.restore();
        ctx.closePath();
    });
}

canvas.addEventListener('mousedown', (e) => {
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    console.log("x: " + x + " y: " + y); 
}, false);

if (currentPlayer ==='circlePlayer') {
    drawCircle
}


function printGameBoard() {
    ctx.beginPath();
    ctx.save();

    ctx.strokeStyle = "gray";
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';

    ctx.moveTo(canvas.width / 3, canvas.height * 0.05);
    ctx.lineTo(canvas.width / 3, canvas.height * 0.95);

    ctx.moveTo((canvas.width / 3) + canvas.width / 3, canvas.height * 0.05);
    ctx.lineTo((canvas.width / 3) + canvas.width / 3, canvas.height * 0.95);

    ctx.moveTo(canvas.width * 0.05, canvas.height / 3);
    ctx.lineTo(canvas.width * 0.95, canvas.height / 3);

    ctx.moveTo(canvas.width * 0.95, (canvas.height / 3) + canvas.height / 3);
    ctx.lineTo(canvas.width * 0.05, (canvas.height / 3) + canvas.height / 3);
    ctx.stroke();

    ctx.restore();
    ctx.closePath()
}
printGameBoard()
