function getComputerChoice(){

    let choiceNumber;
    let result;

    choiceNumber = Math.round(Math.random() * (3-1) + 1);

    switch(choiceNumber)
    {

        case 1: 
            return('rock');
            break;

        case 2:
            return('paper');
            break;

        case 3:
            return('scissors');
            break;

    }

}

function resetGame(){

    if(playerScore === 5)
    {
        gameInProgress = false;
        resultText.innerText = 'Congratulations, you won the game.'
        const resetBtn = document.createElement('button');
        resetBtn.classList.add('reset-button');
        resetBtn.addEventListener('click', () => {
            playerScore = 0;
            computerScore = 0;
            cScore.innerText = `${computerScore}`;
            pScore.innerText = `${playerScore}`;
            resultText.innerText = '';
            if (resultText.contains(resetBtn)) {
                resultText.removeChild(resetBtn);
            }
            gameInProgress = true;
            

        })
        resetBtn.innerText = 'Play Again.';
        resultText.appendChild(resetBtn);
        

    }
    else
    {
        if(computerScore === 5)
        {
            gameInProgress = false;
            resultText.innerText = 'You lose the game, try again!'
            const resetBtn = document.createElement('button');
            resetBtn.classList.add('reset-button');
            resetBtn.addEventListener('click', () => {
                playerScore = 0;
                computerScore = 0;
                cScore.innerText = `${computerScore}`;
                pScore.innerText = `${playerScore}`;
                resultText.innerText = '';
                if (resultText.contains(resetBtn)) {
                    resultText.removeChild(resetBtn);
                }
                gameInProgress = true;

            })
            resetBtn.innerText = 'Play Again.';
            resultText.appendChild(resetBtn);

        }
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultText = document.querySelector('.result');
let playerScore = 0;
let computerScore = 0;
let pScore = document.querySelector('#playerScore');
let cScore = document.querySelector('#computerScore');
let gameInProgress = true;


// old function

/*function playRound(playerSelection){

    let computerSelection = getComputerChoice();
    let playerAnswer = playerSelection;
    let playerScore = document.querySelector('#playerScore');
    let computerScore = document.querySelector('#computerScore');

    console.log(playerAnswer);
    console.log(computerSelection);

    if(playerAnswer == computerSelection)
    {
        console.log(`You both chose ${playerAnswer.replace(playerAnswer.charAt(0), (playerAnswer.charAt(0)).toUpperCase() )}, it's a draw!`);
        return 0;
    }
    else
    {
        switch(playerAnswer)
        {
            case 'rock':
                if(computerSelection == 'paper')
                {
                    resultText.innerText = 'Paper beat Rock, you lose!';

                    return 'computer';
                }
                else
                {
                    resultText.innerText = 'Rock beat Scissors, you win!';
                    return 'player';
                }
                break;
            
            case 'paper':
                if(computerSelection == 'scissors')
                {
                    resultText.innerText = 'Scissors beat Paper, you lose!';
                    return 'computer';
                }
                else
                {
                    resultText.innerText = 'Paper beat Rock, you win!';
                    return 'player';
                }
                break;

            case 'scissors':
                if(computerSelection == 'rock')
                {
                    resultText.innerText = 'Rock beat Scissors, you lose!';
                    return 'computer';
                }
                else
                {
                    resultText.innerText = 'Scissors beat Paper, you win!';
                    return 'player';
                }
                break;

            default:
                console.log('You entered an invalid choice, choose between Rock, Paper or Scissors.');
                return 0;
                break;   
        }
    }
} */

rock.addEventListener('click', () => {
    if (gameInProgress) {
        computerSelection = getComputerChoice();
        if (computerSelection == 'paper') {
            resultText.innerText = 'Paper beat Rock, you lose!';
            computerScore++;
        } else {
            resultText.innerText = 'Rock beat Scissors, you win!';
            playerScore++;
        }
        cScore.innerText = `${computerScore}`;
        pScore.innerText = `${playerScore}`;
        resetGame();
    }
});

paper.addEventListener('click', () => {
    if (gameInProgress) {
        const computerSelection = getComputerChoice();
        if (computerSelection == 'scissors') {
            resultText.innerText = 'Scissors beat Paper, you lose!';
            computerScore++;
        } else {
            resultText.innerText = 'Paper beat Rock, you win!';
            playerScore++;
        }
        cScore.innerText = `${computerScore}`;
        pScore.innerText = `${playerScore}`;
        resetGame();
    }
});

scissors.addEventListener('click', () => {
    if (gameInProgress) {
        computerSelection = getComputerChoice();
        if (computerSelection == 'rock') {
            resultText.innerText = 'Rock beat Scissors, you lose!';
            computerScore++;
        } else {
            resultText.innerText = 'Scissors beat Paper, you win!';
            playerScore++;
        }
        cScore.innerText = `${computerScore}`;
        pScore.innerText = `${playerScore}`;
        resetGame();
    }
});

 