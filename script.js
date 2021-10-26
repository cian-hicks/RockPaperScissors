//will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
//We’ll use this function in the game to make the computer’s play

// Planning
// - Randomly select a value for the computer
//      - store values in an array. randomyly select one and return it.
// - return computer choice in the function 
// - allow the user to select a value from rock paper scissor
// - return user choice in the function 
// - compare computer value to the user value
// - use switch statement to determine who the winner of the round is. Return winner
// - end game. 

//global vars
let computerWins = 0;
let playerWins = 0;
let tie = 0;
let rounds = 0;
let para = document.getElementById("playerSelection");
let compSel = document.getElementById("computerSelection");
let sb = document.getElementById("scoreBoard");
let rr = document.getElementById("result");
rr.setAttribute('style', 'white-space: pre;');
para.setAttribute('style', 'white-space: pre;');
compSel.setAttribute('style', 'white-space: pre;');
const container = document.querySelector('#container')
const buttons = document.querySelectorAll('button');


function computerPlay(){ 
 const arr = ["rock", "paper", "scissors"];
 let x = arr[Math.floor((Math.random() * arr.length))];
 return x;
}

//plays a single round of RPS  
function playRound(playerSelection, computerSelection){
    let ps = playerSelection;
    let cs = computerSelection;

    if(ps === "rock" && cs === "rock"){
        // console.log("Player Selection: rock --- Computer Selection: rock")
        // console.log("Tie game!")
        tie++;
        para.textContent = "Player Selection: ROCK";
        compSel.textContent = "Computer Selection: ROCK \r\n";
    }
    else if(ps === "rock" && cs === "paper"){
        // console.log("Player Selection: rock --- Computer Selection: paper")
        // console.log("Computer Wins!");
        computerWins++;
        para.textContent = "Player Selection: ROCK \r\n"
        compSel.textContent = "Computer Selection: PAPER \r\n";
 
    }
    else if(ps === "rock" && cs === "scissors"){
        // console.log("Player Selection: rock --- Computer Selection: scissors")
        // console.log("Player Wins!");
        playerWins++;
        para.textContent = "Player Selection: ROCK \r\n"
        compSel.textContent = "Computer Selection: SCISSORS \r\n";
    
    }

    else if(ps === "paper" && cs === "rock"){
        // console.log("Player Selection: paper --- Computer Selection: rock")
        // console.log("Player Wins!");
        playerWins++;
        para.textContent = "Player Selection: PAPER \r\n"
        compSel.textContent = "Computer Selection: ROCK \r\n";
    
    }
    else if(ps === "paper" && cs === "paper"){
        // console.log("Player Selection: paper --- Computer Selection: paper")
        // console.log("Tie game!");
        tie++
        para.textContent = "Player Selection: PAPER \r\n"
        compSel.textContent = "Computer Selection: PAPER \r\n";

    }
    else if(ps === "paper" && cs === "scissors"){
        // console.log("Player Selection: paper --- Computer Selection: scissors")
        // console.log("Computer Wins!");
        computerWins++;
        para.textContent = "Player Selection: PAPER \r\n"
        compSel.textContent = "Computer Selection: SCISSORS \r\n";

    }

    else if(ps === "scissors" && cs === "rock"){
        // console.log("Player Selection: scissors --- Computer Selection: rock")
        // console.log("Computer Wins!");
        computerWins++;
        para.textContent = "Player Selection: SCISSORS \r\n"
        compSel.textContent = "Computer Selection: ROCK \r\n";

    }
    else if(ps === "scissors" && cs === "paper"){
        // console.log("Player Selection: scissors --- Computer Selection: paper")
        // console.log("Player Wins!");
        playerWins++;
        para.textContent = "Player Selection: SCISSORS \r\n"
        compSel.textContent = "Computer Selection: PAPER \r\n";

    }
    else if(ps === "scissors" && cs === "scissors"){
        // console.log("Player Selection: scissors --- Computer Selection: scissors")
        // console.log("Tie game!");
        tie++;
        para.textContent = "Player Selection: SCISSORS \r\n"
        compSel.textContent = "Computer Selection: SCISSORS \r\n";

    }

    // else if(ps !== "rock" || ps !== "paper" || ps !== "scissors"){
    //     alert("Enter a valid answer")
    // }
    // console.log("tie games: " + tie)
    // console.log("player wins: " + playerWins)
    // console.log("computer wins: " + computerWins)
}


function game(str){
    if(rounds < 5){
     playRound(str, computerPlay());
     sb.textContent = ("Computer wins: " + computerWins + "  |  Player wins: " + playerWins + "  |  tie games: " + tie)
    //  console.log("Computer wins: " + computerWins + "  |  Player wins: " + playerWins + "  |  tie games: " + tie);
    }else{
     rr.textContent = ("Game Over")
         if(playerWins > computerWins){
               rr.textContent = ("Congrats you win!")
         }else{
             rr.textContent = ("You lost :(")
         }
    }
}


function buttonSelector(){

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    if(button.id === "1"){
       game("rock")
       rounds++; 
       console.log(rounds)
       return
    }else if(button.id === "2"){
        game("paper")
        rounds++; 
       console.log(rounds)
    }else{
        game("scissors")
        rounds++; 
       console.log(rounds)
    }
  });
});

}

buttonSelector();
