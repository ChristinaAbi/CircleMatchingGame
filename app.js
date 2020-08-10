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

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){
    card.addEventListener("click", handleClickEvent);
});

function handleClickEvent(event) {
    console.log(event.target.parent);
    player.selection.push(event.target.src);
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

const computerSelection = () => {
    let selection = Math.floor(Math.random() * cards.length);
    return selection;
}

// Game Functions
// const startRound = () => {

// }
const startGame = () => {
    alert(`Welcome to Flower Memory Game! Click on the instructions button to begin!`)
    //startRound()
}

// Game Methods

const playerTurn = () => {
    let firstChoice = player.selection[0];
    let secondChoice = player.selection[1];
    if (firstChoice === secondChoice) {
        player.points++
        alert(`You have won this round! You have ${player.points} points now!`)
    } else {
        alert(`You do not have a match! Now it is the computer\'s turn`)
    }
    player.selection = [];
    player.clicks = 0;
    computerTurn();
}

const computerTurn = () => {
    //computerFirstClick()
    //computerSecondClick()
    let firstChoice = computerSelection();
    let secondChoice = computerSelection();
    let firstCardNode = cards[firstChoice];
    let secondCardNode = cards[secondChoice];
    let firstCardImg = firstCardNode.querySelector("img");
    let secondCardImg = secondCardNode.querySelector("img");
    console.log(firstCardImg, secondCardImg);
    if (firstCardImg.src === secondCardImg.src) {
        alert(`The computer has won this round!`)
        computer.points++
    } else {
        alert(`The computer has lost this round!`)
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
