// console.log('app.js is working')
// console.log($)

// Card Array

const cardsArray = [
    {
        number: 1,
        color: 'pink',
    },
    {
        number: 2,
        color: 'yellow',
    },
    {
        number: 3,
        color: 'blue',
    },
    {
        number: 4,
        color: 'red',
    },
    {
        number: 5,
        color: 'aqua',
    },
    {
        number: 6,
        color: 'purple',
    },
    {
        number: 7,
        color: 'purple',
    },
    {
        number: 8,
        color: 'pink',
    },
    {
        number: 9,
        color: 'blue',
    },
    {
        number: 10,
        color: 'red',
    },
    {
        number: 11,
        color: 'yellow',
    },
    {
        number: 12,
        color: 'aqua',
    }
]

const $cardsArray = $('<div id="cards">')

$('body').append($cardsArray)

//Event Varibles

const changeDisplayValue = (event, selector, displayValue) => {
    const $item = $(selector);
    $item.css('display', displayValue);
  }

// const $flipCard = $('.card-back').on('click', (event) => {
//     $(event.currentTarget).toggleClass('card')
// })

$(() => {
    const $card = $('.card').on('click', (event) => {
        $(event.currentTarget).toggleClass('card-back')
    })
})

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


// Game Variables

const player = {
    points: 0,
    clicks: 0
}

const computer = {
    points: 0
}

let clickTracker = player.clicks++
if (player.clicks === 2) {
    computerFirstClick()
    computerSecondClick()
} else {
    playerFirstClick()
    playerSecondClick()
}

const playerFirstClick = () => {
    const $card = $('.card').on('click', (event) => {
       $(event.currentTarget).toggleClass('card-back')
    })
}

const playerSecondClick = () => {
    const $card = $('.card').on('click', (event) => {
       $(event.currentTarget).toggleClass('card-back')
    })

 const computerFirstClick = (cardsArray) => {
     console.log(Math.floor(Math.random() * cardsArray.length))
    }

 const computerSecondClick = (cardsArray) => {
     console.log(Math.floor(Math.random() * cardsArray.length))
 }

// Game Functions
// const startRound = () => {

// }
const startGame = () => {
    alert(`Welcome to Flower Memory Game! Click on the instructions button to begin!`)
    startRound()
}

// Game Methods

const playerTurn = () => {
    if (playerFirstClick === playerSecondClick) {
        player.points++
        alert(`You have won this round! You have ${player.points} points now!`)
        computerTurn()
    } else {
        alert(`You do not have a match! Now it is the computer\'s turn`)
        computerTurn()
    }
}

const computerTurn = () => {
    computerFirstClick()
    computerSecondClick()
    if (computerFirstClick === computerSecondClick) {
        alert(`The computer has won this round!`)
        computer.points++
        playerTurn()
    } else {
        alert(`The computer has lost this round!`)
        playerTurn()
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

startGame()
}
