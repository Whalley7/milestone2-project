
const flipsTag = document.querySelector(".flips b");
const refreshBtn = document.querySelector(".details button");
let timerInterval = document.getElementById("timerInterval");
let stopGame = false;




//Card 
let flips = document.querySelectorAll(".card");
const totalPairs = 8; // Total number of card pairs to match


//Time and date
const date = new Date().toLocaleDateString(); // Add 
const timerElement =
  document.getElementById("timer");


let elapsedTime = 0; // Keep track of elapsed time
let time = 0; //the transaction date

//Difficulty levels
let levelText;
let silent = false;
let level;

//Cards
let matchedPairs = 0;
let matchedCard = 0;
let disableDeck = false;
let isGameActive;
let cardOne, cardTwo;
const modalHeader = document.getElementById("modalHeader");


//Game Board




// Get the modal




let btn = document.getElementById("btn");
let winModal = document.getElementById("winModal");

let resetBtn = document.getElementById("exampleModalLongTitle");
let username = localStorage.getItem("username");
let images = 'images-0';//default setting


function resetAudio() {
  // Check if the audio element is not null or undefined

  const audioElement = document.getElementById("audio");
  if (audioElement) {
    // Set the currentTime to 0 to go back to the beginning
    audioElement.currentTime = 0;
  }
}


//Date array
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];



$(`audio`)[0].pause();
const monthNow = new Date();
monthNames[monthNow.getMonth()];

// Set the innerHTML of the element to the current date and time
let year = new Date().getFullYear();
let day = new Date().getDate();
let wordMonth = monthNames[monthNow.getMonth()];


//Dislay current date
document.getElementById("date").innerHTML = day + " " + wordMonth + " " + year;



//submit user information from modal 
$('#user-info-submit-button').click(function() {
  userInfoSubmitButton();
});

$('#refresh-button').click(function() {
  shuffleDeck();
});

//reset local storage when reset button clicked
$('#reset-user-data').click(function() {
  resetGame();
});



document.addEventListener('DOMContentLoaded', function() {
  // Get the audio element
  // Function to stop audio
  function stopAudio() {
    audio.pause();
    // Reset the playback to the beginning
    audio.currentTime = 0;
  }
  // Stop audio when the document is ready
  stopAudio();
});


//Play applause at the end of a game
function playApplause() {
  let audio = new Audio('assets/music/applause7.mp3');
  if (!silent) {
    audio.play();
  }
}

function clickCard() {
  let audio = new Audio('assets/music/click-button-140881.mp3');
  if (!silent) {
    audio.play();
  }
}

//Play a sound when 2 cards match
function playDing() {
  let audio = new Audio('assets/music/mixkit-christmas-magic-bell-hit-939.wav');
  if (!silent) {
    audio.play();
  }
}
//Play/pause audio
$(document).ready(function() {
  $('.btn .fa-pause-circle-o').on('click', function() {
    $(this).hide();
    //goes wrong here
    $('.fa-play-circle-o').show();

    silent = true;
    $('audio')[0].pause();
  });
  $('.btn .fa-play-circle-o').on('click', function() {
    $(this).hide();
    //goes wrong here

    silent = false;
    $('.fa-pause-circle-o').show();
    $('audio')[0].play();
  });
});

function playMusic() {
  if (!silent) {
    audio.play();
  }
}


$(document).ready(function() {

  //var gameIsActive = false; // Set this variable based on your game's condition

  // Get the audio element
  var audio = $('audio')[0]; // Use [0] to access the native DOM element

  // Function to play audio
  function playAudio() {
    if (isGameActive) {
      audio.play();
    }
  }

});

//check if user exists before opening infoModal
function checkUser() {
  if ((username === null) || (username === "Player") || (username === "")) {
    localStorage.setItem("username", username);
    $('.player').text(username);
    //save the username to local storage 


    $("#userModal").modal({
      backdrop: 'static',
      keyboard: false
    })
  }
  else {
    localStorage.getItem("username", username);
    displayUserData();
    return;
  }
}


// Function to update or add a user's score
// Function to update user scores
function updateScores(username, level, newScore) {
  // Retrieve the existing JSON object from localStorage
  let userScores = JSON.parse(localStorage.getItem('userScores')) || {};

  let oldScore = 0;

  // Check if the username exists in the JSON object
  if (userScores.hasOwnProperty(username)) {
    // User exists, check and update the score for the specified level
    oldScore = userScores[username][level];
    if (newScore <= userScores[username][level]) {

      modalHeader.innerText = `Bad Luck!`
      scoreMessage.innerText =`Your ${newScore} score is not higher than your score: ${userScores[username][level]} at the ${level} level`

    } else if (newScore > userScores[username][level]) {
      userScores[username][level] = newScore;
      modalHeader.innerText = `New High Score!`
      scoreMessage.innerText = `Congratulations! You have a new high score! New Score:  ${newScore}, Previous Score: ${oldScore}`;
      playApplause();

    }
  } else {T
    // User doesn't exist, add a new entry with the specified level and score
    userScores[username] = {
      easy: 0,
      med: 0,
      hard: 0
    };
    userScores[username][level] = newScore;
    // newUserModal(username, level, score);
    modalHeader.innerText = `New Score Added!  Well Done!`
    scoreMessage.innerText =`First score: ${newScore} added for the ${level} level!`;
    playApplause();
  }

  // Store the updated JSON object back in localStorage
  localStorage.setItem('userScores', JSON.stringify(userScores));
  $("#winModal").modal(`show`);

  let levelText = document.getElementById("levelText");
  levelText.innerText = `Level: ${level}. Highest score: ${userScores[username][level]}`;


}

//Submit user information from infoModal
function userInfoSubmitButton() {
  username = $('#username').val();
  localStorage.setItem("username", username);
  //Stop modal closing without any information
  if ((username != "") && (username != null) && (username != "Player")) {
    $('#userModal').modal('hide');
    displayUserData();
  }
  return;
}

//Dislpay data
function displayUserData() {
  $('.player').text(username);
}



//Reset user info
function resetGame() {
  // Get the stored array from local storage
  username = "Player";
  localStorage.clear();
  localStorage.setItem("username", username);
  displayUserData();
  checkUser();
}


$('.btn-level').click(function() {
  level = $(this).val();
  score = 0;
  newScore = 0;
  isSwitchingLevel(level);

  // Get the level ID from the button's data attribute 
});

function isSwitchingLevel(level) {

  let userScores = JSON.parse(localStorage.getItem('userScores')) || {};


  switch (level) {
    case "easy":
      images = "images-0";

      break;
    case "med":
      images = "images-1";

      break;
    case "hard":
      images = "images-2";

      break;

  }

  document.getElementById("game").style.display = 'block';
  let previousScore = 0
  localStorage.setItem('level', level);
  let levelText = document.getElementById("levelText");

  if (userScores.hasOwnProperty(username)) {
    previousScore = userScores[username][level];
  } else {
    previousScore = 0;
  }
  levelText.innerText = `Level: ${level}\nHighest score: ${previousScore}`;
  timerElement.innerText = '00:00';
  resetAudio();
  shuffleDeck();
}


//Function to start the time
function startTimer() {
  if (!isGameActive) {
    alert(isGameActive);
    isGameActive = true;
  }

  timerInterval = setInterval(updateTimer, 1000);


}

// Modal buttons
$('#win-modal-close-btn').click(function() {
  resetGame();
  $('#winModal').modal('hide');
});

//Function to update timer
function updateTimer() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  timerElement.textContent = `${minutes} minutes ${seconds} seconds`;
  totalSeconds++;
  console.log(totalSeconds);
}


// Function to format time as mm:ss
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

// Function to update the timer display
function updateTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = formatTime(elapsedTime);
  elapsedTime++;
}


//Function to stop timer
function stopTimer() {
  if (isGameActive) {
    isGameActive = false;
    clearInterval(timerInterval);
  }
  elapsedSeconds = timerInterval;
}


// Function to end the game
function endGame() {
  //  const infoDiv = document.getElementById('userInfo');

  // Calculate the final score
  newScore = 100 * matchedPairs - 2 * flips;

  //Update userScore for level
  //check for level

  updateScores(username, level, newScore);


}


//CARD CONTAINER
//Initiate the cards
let cards = [...document.getElementsByClassName("card")];
let pic = [1, 2, 3, 4, 5, 6, 7, 8];
arr = [...pic, ...pic];

function flipCard({ target: clickedCard }) {
  if (!isGameActive) {
    isGameActive = true;
    startTimer();
    playMusic();


  }
  if (clickedCard !== cardOne && !disableDeck) {
    flips++;
    clickCard();
    flipsTag.innerText = flips;
    clickedCard.classList.add("flip");

    if (!cardOne) {
      return cardOne = clickedCard;
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector(".back-view img").src,
      cardTwoImg = cardTwo.querySelector(".back-view img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}


//Check cards for a match
function matchCards(img1, img2) {
  if (img1 === img2) {
    playDing();
    matchedPairs++;

    if (matchedPairs === totalPairs) {
      endGame();

      //All cards matched
      disableDeck = true;
      return clearInterval(timerInterval);

    } else {
      cardOne.removeEventListener("click", flipCard);
      cardTwo.removeEventListener("click", flipCard);
      cardOne = cardTwo = "";
      return disableDeck = false;
    }
  }

  setTimeout(() => {
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 400);
}

function shuffleDeck() {
  flips = matchedCard = 0;
  flipsTag.innerText = flips;
  matchedPairs = 0;
  cardOne = cardTwo = "";
  time = 0;
  $("#audio")[0].pause();
  stopTimer();
  elapsedTime = 0;
  minutes = 0;
  clearInterval(timer);
  timerElement.innerHTML = flips;
  disableDeck = isGameActive = false;
  arr.sort(() => Math.random() > 0.5 ? 1 : -1);
  cards.forEach((card, index) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".back-view img");
    setTimeout(() => {
      imgTag.src = "assets/images/${images}/img-${arr[index]}.png";
      assets/images/${images-0/
    }, 500);
    card.addEventListener("click", flipCard);
  });
}
cards.forEach(card => {
  card.addEventListener("click", flipCard);
});
checkUser();
