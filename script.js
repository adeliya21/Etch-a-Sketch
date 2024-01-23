// Main fucntion
document.addEventListener('DOMContentLoaded', function(){
    createBoard(16); // Default board of size 16 is created

    // Custom board is created if user presses select button
    let btn_select = document.querySelector('#pop-up'); // get the select button
    btn_select.addEventListener('click', function(){ // onclick function for select button
        let size = getSize(); // call getSize fucntion
        createBoard(size);  // call createBoard fucntion
    })
})

// Create board fucntion
function createBoard(size){
    let board = document.querySelector('.board'); // get the board element from document
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // change style of the board to make it 'grid'
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement('div'); // create div elements
        board.insertAdjacentElement('beforeend', div); // insert created div to board
    }
}

// Get board size fucntion
function getSize(){
    let input = prompt('Board size?'); // create a holder for user input size
    let message = document.querySelector('#message'); // get message element
    if (input == '') {
        message.innerHTML = 'Please provide a number';  // populate message based on user input size
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = 'Plase provide a number between 1 and 100'; // populate message based on user input size  
    }
    else {
        message.innerHTML = 'Now you can play'; // populate message based on user input size  
        return input; // return board size
    }
}