let colorBtn = document.querySelector('.colorBtn');
let body = document.querySelector('body');

let colors = ['green', 'red', 'orange', 'brown']
colorBtn.addEventListener('click', changeColor);

function changeColor(){
      // body.style.backgroundColor = 'blue'
      let random = Math.floor(Math.random()*colors.length);
      body.style.backgroundColor = colors[random]
}