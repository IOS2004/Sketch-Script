let board = document.querySelector('.board');
// create the grid

function getRandomColor()
{
  let a = Math.random() * 250;
  let b = Math.random() * 250;
  let c = Math.random() * 250;
  return "rgb(" + a + ", " + b + ", " + c + ")";
}
function createGrid(n)
{
  // first calculate the size of pixel according to board size
  let size = 960;
  let p = size / n + "px";
  for (let i = 0; i < n * n; i++)
  {
    let square = document.createElement('div');
    square.id = 'pixel';
    square.style.minWidth = p;
    square.style.minHeight = p;
    square.style.backgroundColor = 'white';
    square.style.opacity = 0;
    square.addEventListener('mouseover', (e) =>
    {
      e.target.style.backgroundColor = getRandomColor();
      let m = parseFloat(e.target.style.opacity);
      e.target.style.opacity = (0.4 + m);
    });
    board.appendChild(square);
  }
}

createGrid(16);
let btn = document.querySelector('button');
btn.minWidth = '50px';
btn.margin = '18px';
btn.addEventListener('click', () => {
  let n = prompt('Enter the number of squares per side');
  while (n > 100)
  {
    n = prompt('Limit is 100');
  }
  board.innerHTML = '';
  createGrid(n);
});

