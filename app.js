const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
canvas.width= 300; canvas.height = 300;
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


clickbleArea = []
for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
        clickbleArea.push(0 + y * canvas.width / 3, 0 + x * canvas.width / 3, canvas.height / 3)
        // console.log(0 + y * canvas.width / 3, 0 + x * canvas.width / 3, canvas.height / 3);
     }
}

 // Circles
let circle = canvas.addEventListener('mousedown', (e) => {
    let rect = myCanvas.getBoundingClientRect();
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

// X simbols
let cross = canvas.addEventListener('mousedown', (e) => {
    let rect = myCanvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
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


function printGameBoard() {
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
}
printGameBoard()
