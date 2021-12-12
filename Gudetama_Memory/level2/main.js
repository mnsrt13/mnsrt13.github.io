// Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Swapping: https://www.w3schools.com/jsref/prop_style_order.asp

const cells = document.querySelectorAll('.board .cell');
const restart = document.getElementById("restart")
const msg = document.getElementById("msg");

let won = false;
let plays = 0;
var first = null
var second = null;
let cont = true; // continue

let flipped = [];
let cards = Array.from(document.getElementsByClassName('cell'))


start();

function start(){
    shuffle();
    cards.forEach(cell => {
        cell.addEventListener('click', flipCard);
    })
}

function shuffle(){
    for (let i = 0; i < cards.length; i++){
        (cards[(Math.floor(Math.random() * (cards.length)))]).style.order = i;
        cards[i].style.order = (Math.floor(Math.random() * (cards.length)))
    }
}


function flipCard(){
    console.log(flipped)
    console.log(this.id)
    
    curr = this.id
    flipped.forEach(alreadyFlipped)

    function alreadyFlipped(item, index, arr){
        if (curr == item){
            cont = false;
        }

    }
    if (cont == true){
        if (first == null || second == null){
            plays += 1
        }
        if (plays == 1 || plays == 2){
            if (first == null){
                this.classList.toggle('flip');
                first = this;
            } else if (this != first){
                second = this;
                this.classList.toggle('flip');
            } else if (this == first){
                plays -= 1;
                return;
            }
        }
        if (second != null && first != null){
            if (first.id == second.id){
                flipped.push(this.id)    
                plays = 0;
                first = null;
                second = null;
            } else {
                first.classList.toggle('flip');
                second.classList.toggle('flip');
                plays = 0;
                first = null;
                second = null;
            }
        }
    }

    cont = true;

    if (flipped.length == 8){
        won = true;
    }

    if (won){
        document.getElementById("text").innerHTML = "You win!";
        msg.classList.add('display');
    }
    // console.log(won)
}

