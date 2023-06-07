console.log('JS Ok');

// Recupero elementi dal DOM

const grid = document.getElementById('grid');
const button = document.getElementById('play');


// Funzione creazione celle
const createCell = () => {
    const cell = document.createElement('div')
    cell.className = 'cell hidden';
    return cell;
}

// Dati tabella
const rows = 10;
const cols = 10;
const totalCells = rows * cols;


button.addEventListener('click', function(){

    const cells = grid.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('hidden');
    }
})


// Celle aggiunte nella tabella
for(let i = 0; i < totalCells; i++){

    const cell = createCell();
    cell.innerText = i + 1;

    cell.addEventListener('click', function(){
        cell.classList.add('clicked');
        console.log(cell.innerText)
    })
    grid.appendChild(cell);
}