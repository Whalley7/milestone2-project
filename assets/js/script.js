



/* audio feedback on completing the game*/
function play() {
    let audio = new Audio('assets/sounds/clapping.wav');
    audio.play();
  }

 
const cardArray = [

    {
        name: 'running',
        img: 'assets/images/running.png'
    },
    {
        name: 'running',
        img: 'assets/images/running.png'
    },
    
    {
        name: 'cycling',
        img: 'assets/images/cycling.png'
    },
    {
        name: 'cycling',
        img: 'assets/images/cycling.png'
    },
    {
        name: 'fencing',
        img: 'assets/images/fencing.png'
    },
    {
        name: 'fencing',
        img: 'assets/images/fencing.png'
    },
   
    {
        name: 'golfing',
        img: 'assets/images/golfing.png'
    },
    {
        name: 'golfing',
        img: 'assets/images/golfing.png'
    },

    {
        name: 'rowing',
        img: 'assets/images/rowing.png'
    },
    {
        name: 'rowing',
        img: 'assets/images/rowing.png'
    },
    {
        name: 'skiing',
        img: 'assets/images/skiing.png'
    },
    {
        name: 'skiing',
        img: 'assets/images/skiing.png'
    },
    {
        name: 'weight-lifing',
        img: 'assets/images/weight-lifting.png'
    },
    {
        name: 'weight-lifting',
        img: 'assets/images/weight-lifting.png'
    },
    {
        name: 'swiming',
        img: 'assets/images/swiming.png'
    },

    {
        name: 'swiming',
        img: 'assets/images/swiming.png'
    },
    
   
];


const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const alertDisplay = document.querySelector('#alert');
let movesCount = 0;
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

moves.innerHTML = movesCount;

/*settings to flip the card when clicked*/
 function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
/*dispaying how many moves user has taken*/
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = movesCount;
   
  };

/*creation of the initial board using the card array*/
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'assets/images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    }
    gridDisplay.style.gridTemplateColumns = `repeat(${size},auto)`;
}
//For timer
const timeGenerator = () => {
    seconds += 1;
    //minutes logic
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
    //format the time before displaying it to the user
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timeValue.innerHTML = `${minutesValue}:${secondsValue}`;
  };

/*check if cards chosen are a match*/
function checkMatch() {
    console.log('check for match')
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    if (optionOneId == optionTwoId) {
       // alert('You clicked the same card!');
       alert.innerHTML= 'You clicked the same card!';
        movesCounter();
        cards[optionOneId].setAttribute('src', 'assets/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/blank.png')
       
    } else if (cardsChosen[0] == cardsChosen[1]) {
        movesCounter();
        cards[optionOneId].setAttribute('src', 'assets/images/white.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        alert.innerHTML= 'Welldone!';
       
        
        
        
       // alert("Welldone!");
    } else {
        cards[optionOneId].setAttribute('src', 'assets/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/blank.png')
        movesCounter();
        alert.innerHTML = "Sorry, try again!";
        //alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.innerHTML = cardsWon.length;
 
  

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations! You have found them all!';
        play()
    }
}


/**
 * Main code
 */

cardArray.sort(() => 0.5 - Math.random())
createBoard()

