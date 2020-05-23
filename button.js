const options = ["ROCK", "PAPER", "SCISSORS"]
    
const choseRock = document.querySelector('#choseRock');
choseRock.addEventListener('click', () =>{
    playRound("ROCK", computerPlay());
});

const chosePaper = document.querySelector('#chosePaper');
chosePaper.addEventListener('click', () =>{
    playRound("PAPER", computerPlay());
});

const choseScissors = document.querySelector('#choseScissors');
choseScissors.addEventListener('click', () =>{
    playRound("SCISSORS", computerPlay());
});

function computerPlay(){
    // Returns ROCK PAPER or SCISSORS at random to go aginst player
    let temp = Math.random() * 3;

    if(temp < 1){
        return "ROCK"
    }
    else if(temp < 2){
        return "PAPER"
    }
    else{
        return "SCISSORS"
    }
}

function playRound(playerSelection, computerSelection){
    // compares the selection of the player and computer, updates the html with whoever won/ties
    // returns set to 0, 1, 2 used for previous iteration of code

    const content = document = document.querySelector('#container');
    if(playerSelection == computerSelection){

        content.textContent = "You tie! You both chose " + playerSelection + "!";
        return 0
    }
    else if((playerSelection == "PAPER" && computerSelection == "ROCK")
        || (playerSelection == "SCISSORS" && computerSelection == "PAPER")
        || (playerSelection == "ROCK" && computerSelection == "SCISSORS")){

            content.textContent = "You win this round! " + playerSelection + " beats " + computerSelection + "!";
            return 1
    }
    else{

        content.textContent = "You lose this round! " + computerSelection + " beats " + playerSelection + "!";
        return 2
    }
}

/*
function takeChoice(){
    // Take the players choice (now obsolete)
    
    let iter = 0
    while(true){

        if(!iter){
            var temp = prompt("Enter a choice").toUpperCase()
        }
        else{
            var temp = prompt("Invalid input, try again").toUpperCase()
        }

        if(options.includes(temp)){
            return temp;
        }
        iter = 1;
    }
}

function game(){
    // Play the game (now obsolete)

    let playerWin = 0;
    let compWin = 0;

    while((playerWin != 3) && (compWin != 3)){
        let choice = takeChoice()
        let compChoice = computerPlay()
        let result = playRound(choice, compChoice)

        if(result == 1){
            playerWin++
        }
        else if(result == 2){
            compWin++
        }
    }

    if(playerWin == 3){
        console.log("You Win!")
    }
    else{
        console.log("You Lose")
    }
}

game()*/