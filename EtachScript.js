const canvas = document.querySelector('#canvas')
const colorSelector = document.querySelector('#colorSelector')
const gridResolutionInput = document.querySelector('#resolution')
const strengthInput = document.querySelector('#strength')

canvas.style.width = '600px';

createCanvas(gridResolutionInput.value);

let colors = ['navy','blue','teal','cyan',"#0f1",'chartreuse','green','darkGreen','purple','fuchsia','pink','salmon','firebrick','red','Maroon','yellow','orange']
let color = 'rainbow'

var mouseDown = false;
document.body.onmousedown = function() {
  mouseDown = true;
}
document.body.onmouseup = function() {
  mouseDown = false;
}

for (var i = 0; i < colors.length; i++) {
  colors[i]
  colorChoice = document.createElement('div')
  colorChoice.classList.add('colorChoice')
  colorChoice.style.backgroundColor = colors[i];
  colorSelector.appendChild(colorChoice);
}

const colorChoices = document.querySelectorAll('div.colorChoice');
colorChoices.forEach((colorChoice) => {
  colorChoice.addEventListener('click', function(){
      if (colorChoice.id == 'rainbow') {
        color = 'rainbow';
      } else {
        color = colorChoice.style.backgroundColor;
      }
      colorChoices.forEach((colorChoice) => {
          colorChoice.classList.remove('selected')
        });
      colorChoice.classList.add('selected')

  });
});


function createCanvas( canvasResolution ){

  let canvasWidth = canvasResolution;
  let canvasHeight = canvasResolution;

  let squareWidth = (parseInt(canvas.style.width)/canvasWidth) + 'px'
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
        gridSquare.style.opacity = 0;

        // gridSquare.textContent = i + " : " + j;
        // gridSquare.style.borderStyle = 'solid';
        // i == 0 ? gridSquare.style.clear = 'left' : gridSquare.style.float = 'left'
        gridSquare.style.display = 'inline-block'
        // gridSquare.style.position = 'absolute'
        gridRow.appendChild(gridSquare);
    }

  }

  const squares = document.querySelectorAll('div.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', function(){
        if (mouseDown) {
          if (color == 'rainbow') {
            square.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
          } else {
            square.style.backgroundColor = color;
          }
          square.style.opacity = parseFloat(square.style.opacity)  + strengthInput.value/100;
          // square.classList.add('colored')
        }

    });
  });

}

function clearCanvas() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
  if (gridResolutionInput.value > parseInt(canvas.style.width)*.08) {
    gridResolutionInput.value = parseInt(canvas.style.width)*.08
  }
  createCanvas(gridResolutionInput.value);
}
