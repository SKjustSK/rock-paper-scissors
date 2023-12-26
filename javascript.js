/*
1. Function to randomly return rock paper scissors
2. Function to return who won by taking in player input and computer's choice
3. game() function to play a best of five games and return who won
*/

// TEST AREA

let computerChoice = getComputerChoice();
console.log(computerChoice);

//

function getComputerChoice()
{
    const options = ["Rock" , "Paper" , "Scissors"];

    let choiceNum = Math.floor(Math.random() * 3);
    let choice = options[choiceNum];
    return choice;
}
