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

function playRound(playerSelection, computerSelection,){

    let playerAnswer = playerSelection.toLowerCase(playerSelection);

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

                    console.log('Paper beat Rock, you lose!');
                    return 'computer';
                }
                else
                {
                    console.log('Rock beat Scissors, you win!');
                    return 'player';
                }
                break;
            
            case 'paper':
                if(computerSelection == 'scissors')
                {
                    console.log('Scissors beat Paper, you lose!');
                    return 'computer';
                }
                else
                {
                    console.log('Paper beat Rock, you win!');
                    return 'player';
                }
                break;

            case 'scissors':
                if(computerSelection == 'rock')
                {
                    console.log('Rock beat Scissors, you lose!');
                    return 'computer';
                }
                else
                {
                    console.log('Scissors beat Paper, you win!');
                    return 'player';
                }
                break;

            default:
                console.log('You entered an invalid choice, choose between Rock, Paper or Scissors.');
                return 0;
                break;   
        }
    }
}

function game(){

    let playerScore = 0;
    let computerScore = 0;


    do{

        let playerChoice = prompt('Choose Rock, Paper or Scissors.');
        let computerChoice = getComputerChoice();

        switch(playRound(playerChoice, computerChoice))
        {
            case 'player':
                playerScore++;
                break;

            case 'computer':
                computerScore++;
                break;
        }

        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);

    }while(playerScore < 3 && computerScore < 3)

    if(playerScore == 3)
    {
        return 'Congratulations, you won!';
    }
    else
    {
        return 'You lose, try again!';
    }
    




}

console.log(game());