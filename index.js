// Dice Game
// This is a simple dice game where two players roll a dice and the player with the higher number wins.
const diceRollSound = new Audio('diceRolling.wav');
function celebrate(winner) {
    const originX = winner === 'user1' ? 0.2 : 0.8; // Left or right side
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: originX, y: 0.6 },
            colors: winner === 'user1' ? ['#ff0000', '#00ff00', '#0000ff'] : ['#ffff00', '#ff00ff', '#00ffff'],
            shapes: ['circle', 'square', 'triangle'],
            gravity: 2,
  
    });
}


function rollDice(){
     diceRollSound.play();
    var randomnumber1 = Math.random();
    randomnumber1 = randomnumber1 * 6;
    randomnumber1 = Math.floor(randomnumber1) + 1;

    var randomnumber2 = Math.random();
    randomnumber2 = randomnumber2 * 6;
    randomnumber2 = Math.floor(randomnumber2) + 1;



    document.querySelector(".img1").setAttribute("src", "images/dice" + randomnumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomnumber2 + ".png");    

    if (randomnumber1 > randomnumber2) {

        document.querySelector("h1").innerHTML = "Player 1 Wins!";
        document.querySelectorAll('.dice p')[0].innerHTML = "Player 1 💪🏻"
        document.querySelectorAll('.dice p')[1].innerHTML = "Player 2 😢"
        celebrate('user1');

   }
   else if (randomnumber1 < randomnumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
        document.querySelectorAll(".dice p")[1].innerHTML = "Player 2 💪🏻"
        document.querySelectorAll('.dice p')[0].innerHTML = "Player 1 😢 "
        celebrate('user2');
   }
   else{
         document.querySelector("h1").innerHTML = "Draw!";
         document.querySelectorAll('.dice p')[0].innerHTML = "Draw! 🤝"
         document.querySelectorAll('.dice p')[1].innerHTML = "Draw! 🤝"
   }

}