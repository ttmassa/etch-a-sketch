const defaultSize = 16;

const grid = document.querySelector('#container');

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('gridElement');
    grid.appendChild(square);

    square.addEventListener('mouseover', () => {
      square.classList.add('square-hover');
    });

    square.addEventListener('mouseout', () => {
      square.classList.remove('square-hover');
    });
  }
}

window.onload = () => {
  createGrid(defaultSize);
};
