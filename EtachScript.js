const canvas = document.querySelector('#canvas')
const gridResolutionInput = document.querySelector('input')

canvas.style.width = '512px';

createCanvas(gridResolutionInput.value);

let colors = ['blue',"#0f1",'green','red','yellow']

function createCanvas( canvasResolution ){

  let canvasWidth = canvasResolution;
  let canvasHeight = canvasResolution;

  let squareWidth = (512/canvasWidth) + 'px'
  let squareHeight = squareWidth;

  let gridRow = document.createElement('div')
  let gridSquare = document.createElement('div')

  for (var i = 0; i < canvasWidth; i++) {
    gridRow = document.createElement('div')
    gridRow.style.height = squareHeight;
    canvas.appendChild(gridRow);
    for (var j = 0; j < canvasHeight; j++) {
        gridSquare = document.createElement('div')
        gridSquare.style.width = squareWidth
        gridSquare.style.height = gridRow.style.height
        gridSquare.classList.add('square')
        // gridSquare.textContent = i + " : " + j;
        // gridSquare.style.borderStyle = 'solid';
        // i == 0 ? gridSquare.style.clear = 'left' : gridSquare.style.float = 'left'
        gridSquare.style.display = 'inline-block'
        gridRow.appendChild(gridSquare);
    }

    const squares = document.querySelectorAll('div.square');
    squares.forEach((square) => {
      square.addEventListener('mouseover', function(){
      square.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
      square.classList.add('colored')
      });
    });

  }

}

function clearCanvas() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
  createCanvas(gridResolutionInput.value);
}
