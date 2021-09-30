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
        console.log("Player Selection: rock --- Computer Selection: rock")
        console.log("Tie game!")
        tie++
    }
    else if(ps === "rock" && cs === "paper"){
        console.log("Player Selection: rock --- Computer Selection: paper")
        console.log("Computer Wins!");
        computerWins++;
    }
    else if(ps === "rock" && cs === "scissors"){
        console.log("Player Selection: rock --- Computer Selection: scissors")
        console.log("Player Wins!");
        playerWins++;
    }

    else if(ps === "paper" && cs === "rock"){
        console.log("Player Selection: paper --- Computer Selection: rock")
        console.log("Player Wins!");
        playerWins++;
    }
    else if(ps === "paper" && cs === "paper"){
        console.log("Player Selection: paper --- Computer Selection: paper")
        console.log("Tie game!");
        tie++
    }
    else if(ps === "paper" && cs === "scissors"){
        console.log("Player Selection: paper --- Computer Selection: scissors")
        console.log("Computer Wins!");
        computerWins++;
    }

    else if(ps === "scissors" && cs === "rock"){
        console.log("Player Selection: scissors --- Computer Selection: rock")
        console.log("Computer Wins!");
        computerWins++;
    }
    else if(ps === "scissors" && cs === "paper"){
        console.log("Player Selection: scissors --- Computer Selection: paper")
        console.log("Player Wins!");
        playerWins++;
    }
    else if(ps === "scissors" && cs === "scissors"){
        console.log("Player Selection: scissors --- Computer Selection: scissors")
        console.log("Tie game!");
        tie++
    }

    else if(ps !== "rock" || ps !== "paper" || ps !== "scissors"){
        alert("Enter a valid answer")
    }
    console.log("tie games: " + tie)
    console.log("player wins: " + playerWins)
    console.log("computer wins: " + computerWins)

}


function userPlay(){
  let selection = prompt("Enter: Rock, Paper or Scissors")
  return selection.toLowerCase();
}

function game(){
    let counter = 0; 

    while(counter < 5){
        playRound(userPlay(), computerPlay());
        counter++;
    }
    console.log();
    console.log("Computer wins: " + computerWins + "  |  Player wins: " + playerWins + "  |  tie games: " + tie);
    if(playerWins > computerWins){
        console.log("Congrats you win!")
    }else{
        console.log("You lost :(")
    }
   
}
game();
