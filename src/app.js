/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

function restartPage(){
  location.reload();
}

window.onload = function() {
  cardGenerator();
};

function cardGenerator(){

  setTimeout(() => {
    location.reload();
  }, 10000);

  const suits = ['♠', '♥', '♦', '♣'];
  const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const cardTopLeftElement = document.querySelector('.card-top-left');
  const cardNumberElement = document.querySelector('.card-number');
  const cardBottomRightElement = document.querySelector('.card-bottom-right');
  const cardTitleElement = document.querySelector('.title');

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  
  cardTopLeftElement.innerHTML = randomSuit;
  cardNumberElement.innerHTML = randomNumber;
  cardBottomRightElement.innerHTML = randomSuit;
  cardTitleElement.innerHTML = randomSuit;
  
  if (randomSuit === '♥' || randomSuit === '♦') {
    cardTopLeftElement.classList.add('red');
    cardNumberElement.classList.add('red');
    cardBottomRightElement.classList.add('red');
  }
  
};