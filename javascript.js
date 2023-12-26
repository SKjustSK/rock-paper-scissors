/*
1. Function to randomly return rock paper scissors
2. Function to return who won by taking in player input and computer's choice
3. game() function to play a best of five games and return who won
*/

const ROUNDS = 5;

console.log("ROCK, PAPER, SCISSORS, GO!");
let gameResult = game();
console.log(gameResult);

function game()
{
    let playerCounter = 0;
    let computerCounter = 0;

    for (let i = 0 ; i < ROUNDS ; i++)
    {
        console.log(`Round ${i+1}.`);
        
        // User Input
        let playerChoice;
        do
        {
            playerChoice = prompt(`Round ${i+1}. Rock, Paper, or Scissors?`);
            playerChoice = playerChoice.toUpperCase();
        }
        while (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS");

        // Computer's choice
        let computerChoice = getComputerChoice();

        // Result of round
        let result = versus(playerChoice, computerChoice)
        
        if (result === "TIE")
        {
            console.log(`Tie! Replaying round!`);
            i--;
        }
        else if (result === "PLAYER")
        {
            console.log(`Player wins! ${playerChoice} beats ${computerChoice}`);
            playerCounter++;        
        }
        else if (result === "COMPUTER")
        {
            console.log(`Computer wins! ${computerChoice} beats ${playerChoice}`);
            computerCounter++;
        }

        // Win condition
        if (playerCounter === 3)
        {
            return "Player wins the game!";
        }
        // Lose condition
        else if (computerCounter === 3)
        {
            return "Computer wins the game!";
        }
    }
}


function versus(playerChoice, computerChoice)
{
    let playerWins = "PLAYER";
    let computerWins = "COMPUTER";
    if (playerChoice === computerChoice)
    {
        return "TIE";
    }

    if (playerChoice === "ROCK")
    {
        if (computerChoice === "PAPER")
        {
            return computerWins;
        }
        else if (computerChoice === "SCISSORS")
        {
            return playerWins;
        }
    }
    else if (playerChoice === "PAPER")
    {
        if (computerChoice === "SCISSORS")
        {
            return computerWins;
        }
        else if (computerChoice === "ROCK")
        {
            return playerWins;
        }
    }
    else if (playerChoice === "SCISSORS")
    {
        if (computerChoice === "ROCK")
        {
            return computerWins;
        }
        else if (computerChoice === "PAPER")
        {
            return playerWins;
        }
    }
}

function getComputerChoice()
{
    const options = ["ROCK" , "PAPER" , "SCISSORS"];

    let choiceNum = Math.floor(Math.random() * 3);
    let choice = options[choiceNum];
    return choice;
}

