//$ The Math.random() function returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
//$ The Math.floor() function rounds down a number to the next smallest integer.

var max = 6;
var min = 1;
var randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;

var randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;

if (randomNumber1 == 1) {
  document.querySelector(".img1").setAttribute("src", "dice1.png");
} else if (randomNumber1 == 2) {
  document.querySelector(".img1").setAttribute("src", "dice2.png");
} else if (randomNumber1 == 3) {
  document.querySelector(".img1").setAttribute("src", "dice3.png");
} else if (randomNumber1 == 4) {
  document.querySelector(".img1").setAttribute("src", "dice4.png");
} else if (randomNumber1 == 5) {
  document.querySelector(".img1").setAttribute("src", "dice5.png");
}

if (randomNumber2 == 1) {
  document.querySelector(".img2").setAttribute("src", "dice1.png");
} else if (randomNumber2 == 2) {
  document.querySelector(".img2").setAttribute("src", "dice2.png");
} else if (randomNumber2 == 3) {
  document.querySelector(".img2").setAttribute("src", "dice3.png");
} else if (randomNumber2 == 4) {
  document.querySelector(".img2").setAttribute("src", "dice4.png");
} else if (randomNumber2 == 5) {
  document.querySelector(".img2").setAttribute("src", "dice5.png");
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Won";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Won 🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩 It's a tie :( 🚩";
}

//! Much better code implementation

// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
