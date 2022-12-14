/* Creating two variables, color and click. The color variable is set to black and the click variable
is set to true. */
let color = 'black';
let click = true;

/**
 * It creates a board of divs that are the size of the number that is passed into the function.
 * @param size - This is the size of the board.
 */
const createBoard = (size) => {
    /* Selecting the board and the squares. */
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');

    /* Removing all the divs from the board. */
    squares.forEach((div) => div.remove());

   /* Setting the grid template columns and rows to the size of the board. */
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.styleTemplateRow = `repeat(${size}, 1fr)`;
    
    /* Creating a variable that is the size of the board. */
    let amount = size * size;

 /* This is creating a for loop that is creating a div element and adding an event listener to it. */
 for(let i = 0; i < amount; i++){
    let square = document.createElement('div');
    square.addEventListener('mouseover', squareColor);
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', square);
 };
 
};
createBoard(16);


/**
 * It takes a value, checks if it's between 2 and 100, and if it is, it creates a board of that size
 * @param val - the value of the input field
 */
const changeSize = (val) => {
    if(val >= 2 && val <= 100){
        createBoard(val);
    }
    else{
        console.log('Error')
    }; 
};


/**
 * If the click variable is true, and the color variable is set to 'random', then the background color
 * of the square will be set to a random color. Otherwise, the background color of the square will be
 * set to the color variable
 */
function squareColor() {
    if(click){
        if(color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
           }
            else {
            this.style.backgroundColor = color;
        } 
    }
};


/**
 * ChangeColor is a function that takes in a choice and sets the color variable to that choice.
 * @param choice - The color that the user has chosen.
 */
const changeColor = (choice) => {
    color = choice;
};


/**
 * It removes all the divs from the board
 */
const reset = () => {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
};


/* Adding an event listener to the body of the page. When the user clicks on the body, it checks if the
target of the click is a button. If it is not a button, it changes the value of the click variable
to the opposite of what it was. If it is true, it changes the text content of the mode class to
'Status: Drawing'. If it is false, it changes the text content of the mode class to 'Status: Not
Drawing'. */
document.querySelector('body').addEventListener('click', (e) =>{
  if(e.target.tagName != 'BUTTON'){
    click = !click;
    if(click){
        document.querySelector('.mode').textContent = 'Status: Drawing'
    }
    else {
        document.querySelector('.mode').textContent = 'Status: Not Drawing'
    }
  }
});