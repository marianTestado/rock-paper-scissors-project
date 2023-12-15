function getComputerChoice(){

    let choiceNumber;
    let result;

    choiceNumber = Math.round(Math.random() * (3-1) + 1);

    switch(choiceNumber)
    {

        case 1: 
            return('Rock');
            break;

        case 2:
            return('Paper');
            break;

        case 3:
            return('Scissors');
            break;

    }

}

console.log(getComputerChoice());