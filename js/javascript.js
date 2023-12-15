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

function playRound(playerSelection, computerSelection){

    let playerAnswer = playerSelection.toLowerCase(playerSelection);

    console.log(playerAnswer);
    console.log(computerSelection);

    if(playerAnswer == computerSelection)
    {
        return `You both chose ${playerAnswer.replace(playerAnswer.charAt(0), (playerAnswer.charAt(0)).toUpperCase() )}, it's a draw!`;
    }
    else
    {
        switch(playerAnswer)
        {
            case 'rock':
                if(computerSelection == 'paper')
                {
                    return 'Paper beat Rock, you lose!';
                }
                else
                {
                    return 'Rock beat Scissors, you win!';
                }
                break;
            
            case 'paper':
                if(computerSelection == 'scissors')
                {
                    return 'Scissors beat Paper, you lose!';
                }
                else
                {
                    return 'Paper beat Rock, you win!';
                }
                break;

            case 'scissors':
                if(computerSelection == 'rock')
                {
                    return 'Rock beat Scissors, you lose!';
                }
                else
                {
                    return 'Scissors beat Paper, you win!';
                }
                break;

            default:
                return 'You entered an invalid choice, choose rock, paper or scissors.'
                break;
            
        }
    }




}

const playerSelection = 'pApEr';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));