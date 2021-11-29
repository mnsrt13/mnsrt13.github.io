const cells = document.querySelectorAll('#board .cell');
const msg = document.getElementById("msg");
const restart = document.getElementById("restart");
const hint = document.getElementById("hint");
const show = document.getElementById("show");


const combinations = [
    [2, 4, 11, 13],
    [1, 7, 8, 14]
]

const success = "Success";
const failure = "Failure";
let won = false;
let turns = 0;

hint.addEventListener('click', showHint)
restart.addEventListener('click', start);
start();

function start(){
    cells.forEach(cell => {
        cell.classList.remove('queen');
        cell.classList.remove('stop');
        cell.addEventListener('click', fillCell, {once: true});
    })
    msg.classList.remove('display');
    turns = 0;
}

function showHint(){
    document.getElementsById("showHint").innerHTML = "hint: one queen per column in the N leftmost columns";
    show.classList.add('display');
}

function fillCell(elem){
    turns += 1;
    const cell = elem.target
    cell.classList.add("queen");
    checkWin()
    if (checkWin()){
        document.getElementById("text").innerHTML = "Success!";
        msg.classList.add('display');

        cells.forEach(c =>{
            if (!c.classList.contains('queen'))
            c.classList.add('stop');
        })
        won == true;
    } else if (!won && turns > 3){
        document.getElementById("text").innerHTML = "Failure!";
        msg.classList.add('display');
        cells.forEach(c =>{
            if (!c.classList.contains('queen'))
            c.classList.add('stop');
        })
    }
}

function checkWin(){
    // loop through array of combinations
    return combinations.some(combination => {
        // loop through elements of current combination
        return combination.every(elem =>{
            // check if all cells match
            return cells[elem].classList.contains('queen')
        });
    });
}
