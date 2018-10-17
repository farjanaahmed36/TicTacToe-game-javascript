// RESTART Game Button
var restart = document.querySelector('#b');

// Grabing all the squares
var squares = document.querySelectorAll("td");

// Clear Squares Function
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }

}
restart.addEventListener('click', clearBoard)

// Function for check the square marker
function changeMarker(){
    if(this.textContent === ''){
      this.textContent = 'X';
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
}

// Adding event listeners to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}
