// console.log('app.js is working')
// console.log($)

//Event Varibles

// Game Variables

const player = {
    points: 0,
    clicks: 0,
    selection: []
}

const computer = {
    points: 0
}

let gameCount = 0;

const cards = document.querySelectorAll(".card");
const cardImgs = [];
cards.forEach(card => {
    let cardImg = card.querySelector("img");
    cardImgs.push(cardImg.src);
}); 

function randomize(arr) {
    for (let i = 0; i < arr.length; i++) {
        let rdm = Math.floor(Math.random() * arr.length);
        let temp = arr[i];
        arr[i] = arr[rdm];
        arr[rdm] = temp;
    }
}

randomize(cardImgs);

cards.forEach((card, index) => {
    let cardImg = card.querySelector("img");
    cardImg.src = cardImgs[index]; 
}); 

cards.forEach(function(card){
    card.addEventListener("click", handleClickEvent);
});

function handleClickEvent(event) {
    if (event.target.src || player.clicks >= 2) {
        return;
    }
    let cardBack = event.target;
    cardBack.classList.add("hide");
    let card = event.target.parentNode;
    player.selection.push(card);
    let clickTracker = player.clicks++
    if (player.clicks === 2) {
        //compare the player's cards
        playerTurn();
        // computerFirstClick(cards)
        // computerSecondClick(cards)
    } else {
        //playerFirstClick()
        //playerSecondClick()
    }

}







const changeDisplayValue = (event, selector, displayValue) => {
    const $item = $(selector);
    $item.css('display', displayValue);
  }

// flipCard = $('.card-back').on('click', (event) => {
//     $(event.currentTarget).toggleClass('card')
// })

// $(() => {
//     const $card = $('.card').on('click', (event) => {
//         $(event.currentTarget).toggleClass('card-back')
//     })
// })

const $instructionsButton = $('#instructions')

const $modal = $('#modal')

const $closebutton = $('#close')

// Event Handlers

const openModal = (event) => {
    changeDisplayValue(event, $modal,'block')
}

const closeInstruction = (event) => {
    changeDisplayValue(event, $modal, 'none')
}

// Event Listeners

$instructionsButton.on('click', openModal)

$closebutton.on('click', closeInstruction)




const playerFirstClick = () => {
    const $card = $('.card').on('click', (event) => {
       $(event.currentTarget).toggleClass('card-back')
    })
}

const playerSecondClick = () => {
    const $card = $('.card').on('click', (event) => {
       $(event.currentTarget).toggleClass('card-back')
    })
}
                        //cardsArray = cards
 const computerFirstClick = () => {
     console.log(Math.floor(Math.random() * cards.length))
    }

 const computerSecondClick = () => {
     console.log(Math.floor(Math.random() * cards.length))
 }



// Game Functions
// const startRound = () => {

// }
const startGame = () => {
    alert(`Welcome to Flower Memory Game! Click on the instructions button to begin!`)
    //startRound()
}

// Game Methods

const clearPlayerSelection = () =>{
    player.selection = [];
    player.clicks = 0;
    computerTurn();
}


function isGameOver() {
    let cardAmount = cards.length;
    return gameCount >= cardAmount/2;
}

function handleGameOver() {
    let message = '';
    if (player.points > computer.points) {
        message = "You win!! ";
    } else if (player.points < computer.points) {
        message = "Sorry! You lose! ";
    } else {
        message = "It's a tie! "
    }
    message = message +  `Your score is ${player.points} and the computer's score is ${computer.points}`;
    alert(message);
}


const playerTurn = () => {
    let firstChoice = player.selection[0].querySelector("img");
    let secondChoice = player.selection[1].querySelector("img");
    if (firstChoice.src === secondChoice.src) {
        player.points++
        gameCount++;
        if (isGameOver()) {
            handleGameOver();
        } else {
            alert(`You have won this round! You have ${player.points} points now!`)
            clearPlayerSelection();
        }
    } else {
        let firstCardBack = player.selection[0].querySelector(".card-back");
        let secondCardBack = player.selection[1].querySelector(".card-back");
        alert(`You do not have a match! Now it is the computer\'s turn`);
        setTimeout(function(){
            firstCardBack.classList.remove("hide");
            secondCardBack.classList.remove("hide");
            clearPlayerSelection();
        }, 1000);
    }
}

const computerSelection = (cards) => {
    let selection = Math.floor(Math.random() * cards.length);
    return selection;
}


function filterCards() {
    const arr = [];
    cards.forEach(function(card){
        let cardBack = card.querySelector(".card-back");
        if (!cardBack.classList.contains("hide")) {
            arr.push(card);
        }
    });
    return arr;
}

const computerTurn = () => {
    //computerFirstClick()
    //computerSecondClick()
    let unselectedCards = filterCards();
    
    //Computer's First Card Choice
    let firstChoice = computerSelection(unselectedCards);
    let firstCardNode = unselectedCards[firstChoice];
    let firstCardBack = firstCardNode.querySelector(".card-back");
    firstCardBack.classList.add("hide");
    
    //Computer's Second Card Choice
    unselectedCards = filterCards();
    let secondChoice = computerSelection(unselectedCards);
    let secondCardNode = unselectedCards[secondChoice];
    let secondCardBack = secondCardNode.querySelector(".card-back");
    secondCardBack.classList.add("hide");
    let firstCardImg = firstCardNode.querySelector("img");
    let secondCardImg = secondCardNode.querySelector("img");
    
    if (firstCardImg.src === secondCardImg.src) {
        //alert(`The computer has won this round!`)
        computer.points++
        gameCount++;
        if (isGameOver()) {
            handleGameOver();
        } 
    } else {
        //alert(`The computer has lost this round!`);
        setTimeout(function(){
            firstCardBack.classList.remove("hide");
            secondCardBack.classList.remove("hide");
        }, 1000);
    }
}
const checkWin = () => {
    if (player.points > computer.points && player.points === 6) {
        alert(`You have won the Flower Memory Game! Your memory is sharp!`)
    } else if (player.points < computer.points && computer.points === 6) {
        alert(`You have lost the Flower Memory Game. Head on over to Sudoku to improve your memory!`)
    } else {
        playerTurn()
        computerTurn()
    }
}

// Functions Invoked

//startGame();
