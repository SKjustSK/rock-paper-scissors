let playerChoice = null;
let computerChoice = null;

const userOptions = document.querySelectorAll('.image.input');

userOptions.forEach((userOption) => {

    userOption.addEventListener('click' , () => {

        // To set all borders to original color, then the selected option to green border
        userOptions.forEach((userOption) => {
            userOption.setAttribute('style', 'border-color: #323437;');
        });
        userOption.setAttribute('style', 'border-color: #32CD32;');

        playerChoice = userOption.alt;
        console.log(`Player: ${playerChoice}`);

        let outcome = playRound(playerChoice);
        console.log(`Computer: ${computerChoice}`);

        console.log(outcome);
        displayResult(outcome);
    });
}); 

// Displays Winner by changing DOM
function displayResult(result)
{
    const div = document.querySelector('.result');

    if (result === "WON")
    {
        div.textContent = `You ${result}! ${playerChoice} beats ${computerChoice}!`;
    }
    else if (result === "LOST")
    {
        div.textContent = `You ${result}! ${ computerChoice} beats ${playerChoice}!`;
    }
    else if (result === "TIE")
    {
        div.textContent = `TIE!`;
    }
    // If something goes wrong
    else
    {
        div.textContent = "";
    }  
} 

// Updates UI whenever a round is played to show computer's selection
function computerDisplayChange()
{
    // Text change
    const computerText = document.querySelector('.text.computer');
    computerText.textContent = computerChoice + '!';

    // Image change
    const optionImage = ["rock", "paper", "scissors"];
    let image = document.querySelector('.image.computer');
    for (let i = 0 ; i < optionImage.length ; i++)
    {
        if (computerChoice === optionImage[i].toUpperCase())
        {
            image.src = `images/${optionImage[i]}Joke.jpg`;
        }
    }
}

// Returns 'WON', 'LOST', 'TIE'
function playRound(playerChoice)
{
    computerChoice = getComputerChoice();
    computerDisplayChange();

    let playerWins = "WON";
    let computerWins = "LOST";
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

// Returns "ROCK", "PAPER", or "SCISSORS"
function getComputerChoice()
{
    const options = ["ROCK" , "PAPER" , "SCISSORS"];
    let choiceNum = Math.floor(Math.random() * 3);
    let choice = options[choiceNum];
    return choice;
}

