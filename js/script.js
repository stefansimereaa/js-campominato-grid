console.log('JS Ok');

// Recupero elementi dal DOM

const grid = document.getElementById('grid');
const button = document.getElementById('play');
const selectedDifficulty = document.getElementById('difficulty');

// Funzione Creazione celle
const createCell = () => {
    const cell = document.createElement('div');
    cell.className = 'cell hidden';

    //Aggiunge classe clicked e il numero dentro la cella in console
    cell.addEventListener('click', function(){
        cell.classList.add('clicked');
        console.log(cell.innerText);
    });
    return cell;
};

// Dati tabella
let rows = 10;
let cols = 10;
const totalCells = rows * cols;


// Click del bottone Play
button.addEventListener('click', function(){
    
    // Selezione Difficoltà
    const valueDifficulty = selectedDifficulty.value;
    
   if (valueDifficulty === `normal`) {
        rows = 10;
        cols = 10;
    } else if (valueDifficulty === `hard`) {
        rows = 9;
        cols = 9;
    } else if (valueDifficulty === `superhard`) {
        rows = 7;
        cols = 7;
    }

    const cells = grid.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('hidden');
    }
});

// Celle aggiunte nella tabella
for(let i = 0; i < totalCells; i++){

    const cell = createCell();
    cell.innerText = i + 1;
    grid.appendChild(cell);
}