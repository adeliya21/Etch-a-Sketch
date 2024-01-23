console.log('hey')

document.addEventListener('DOMContentLoaded', function(){
    createBoard(16);

    console.log('hi');
})

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