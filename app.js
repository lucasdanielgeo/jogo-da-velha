const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
canvas.width= 300; canvas.height = 300;
let rect = myCanvas.getBoundingClientRect();
const gameAreas = [
    {
        x: 0,
        y: 0,
        state: 0
    },
    {
        x: 101,
        y: 0,
        state: 0
    },
    {
        x: 201,
        y: 0,
        state: 0
    },
    {
        x: 0,
        y: 101,
        state: 0
    },
    {
        x: 101,
        y: 101,
        state: 0
    },
    {
        x: 201,
        y: 101,
        state: 0
    },
    {
        x: 0,
        y: 201,
        state: 0
    },
    {
        x: 101,
        y: 201,
        state: 0
    },
    {
        x: 201,
        y: 201,
        state: 0
    }
]

let currentPlayer = 'crossPlayer'

canvas.addEventListener('click', function() {
    // if (currentPlayer == 'crossPlayer') {
    //     currentPlayer = 'circlePlayer'
    // } else {
    //   currentPlayer = 'crossPlayer'  
    // }
    console.log(currentPlayer); 
    document.getElementById('texto').innerHTML = `<br>Current Player!<br> <b> ${currentPlayer}`;
}, false);

document.getElementById('texto').innerHTML = `
<br>Current Player! <br><b> ${currentPlayer}`;

canvas.addEventListener('mousedown', (e) => {
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    gameAreas.forEach((index) => {
        if (x> index.x && x< index.x + 100 && y > index.y && y< index.y + 100 ) {
            if (currentPlayer === 'crossPlayer' && index.state === 0) {
                index.state = +1
                drawCross(index.x + 50, index.y + 50)
                currentPlayer = 'circlePlayer'
                console.log(index.state)
            }
            if (currentPlayer === 'circlePlayer' && index.state === 0) {
                index.state = -1
                drawCircle(index.x + 50, index.y + 50)
                currentPlayer = 'crossPlayer'
                console.log(index.state)
            }
        } 
    });
}, false);

function drawCircle(x, y) {
        let radius = rect.width/12;
        ctx.save();
        ctx.lineWidth = 5;
        ctx.strokeStyle =  '#12B372';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'black';
        ctx.stroke()
        ctx.restore();
}

function drawCross(x, y) {
        ctx.beginPath();
        ctx.save();
        ctx.lineWidth = 5;
        ctx.strokeStyle =  '#FF7161';
        ctx.moveTo(x-20, y-20);
        ctx.lineTo(x+20, y+20);
        ctx.stroke();
        ctx.moveTo(x+20, y-20);
        ctx.lineTo(x-20, y+20);
        ctx.stroke();
        ctx.restore();
        ctx.closePath();
}

function printGameBoard() {
    ctx.beginPath();
    ctx.save();

    ctx.strokeStyle = "gray";
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';

    ctx.moveTo(canvas.width / 3, canvas.height * 0.04);
    ctx.lineTo(canvas.width / 3, canvas.height * 0.96);

    ctx.moveTo((canvas.width / 3) + canvas.width / 3, canvas.height * 0.04);
    ctx.lineTo((canvas.width / 3) + canvas.width / 3, canvas.height * 0.96);

    ctx.moveTo(canvas.width * 0.04, canvas.height / 3);
    ctx.lineTo(canvas.width * 0.96, canvas.height / 3);

    ctx.moveTo(canvas.width * 0.96, (canvas.height / 3) + canvas.height / 3);
    ctx.lineTo(canvas.width * 0.04, (canvas.height / 3) + canvas.height / 3);
    ctx.stroke();

    ctx.restore();
    ctx.closePath()
}
printGameBoard()

// para cada item se reduce === -3 então circle vence 
// para cada item se reduce === 3 então cross vence


