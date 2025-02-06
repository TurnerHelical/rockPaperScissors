// Create a variable called computerChoice
let computerChoice = getComputerChoice();
// Create a function called getComputerChoice and store it's return as computerChoice
    // This function needs to get a random choice between Rock, Paper, or Scissors
    // Run Math.random and take the response times one hundred 
        // Use the response and if its thirthy-three or lower assign it rock
        // If the response is thirty-four to sixty-six assign it Paper
        // If the response is sixty-seven to ninety-nine assign it Scissors
function getComputerChoice() {
    let generatedNumber = (Math.random() * 100)
    console.log(generatedNumber)
        if (generatedNumber <= 33 && generatedNumber >= 0) {
           return 'rock'
            }
        else if (generatedNumber <= 66 && generatedNumber >= 34) {
            return 'paper'
        }
        else if (generatedNumber <= 99 && generatedNumber >= 67) {
            return 'scissors'
        }
        else {
            getComputerChoice()
        }
}

// Create a variable called humanChoice and store the results of the getHumanChoice function
let humanChoice = getHumanChoice();
// Create a function called getHumanChoice
    // This funtion will prompt the user to enter their choice of Rock, Paper, or Scissors
        // Send their response through a function to turn it all lowercase
        // then have an if conditional check the response and return their answer to the variable
function getHumanChoice() {
    let choice = prompt('Rock, Paper, or Scissors').toLowerCase();
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            return choice
        } else {
            alert('Please try again');
            getHumanChoice()
        }
    
}

// Create a variable named humanScore and assign the number of wins to it
// Create a variable named computerScore and assign the number of wins to it
let humanScore = 0;
let computerScore = 0;

// Create a function named playRound
    // This function should simulate a round of Rock, Paper, Scissors using the user and computer choice's
    // using the humanChoice and computerChoice variables output a string that says who wins
    // incriment humanScore or computerScore depending on who wins
    // log a string to the console that shows overall wins for each user

function playRound() {
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === 'rock' && computerChoice === 'scissors'
        || humanChoice === 'paper' && computerChoice === 'rock' 
        || humanChoice === 'scissors' && computerChoice === 'paper' ){
        console.log(`${humanChoice} beats ${computerChoice}!! You win!!!!!`);
        humanScore++;
        console.log (`Human Score = ${humanScore} Computer Score = ${computerScore}`);
        let again = confirm('Play again?');
            if (again = true) {
                play();
            } else {
                console.log(`Final Score Human: ${humanScore} Computer: ${computerScore}`)
            }
    } else if (humanChoice === 'rock' && computerChoice === 'paper'
        || humanChoice === 'paper' && computerChoice === 'scissors' 
        || humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log(`${computerChoice} beats ${humanChoice}. You lose =(`);
        computerScore++;
        console.log(`Human Score = ${humanScore} Computer Score = ${computerScore}`);
        let again = confirm('Play again?');
        if (again = true) {
                play();
            } else {
                console.log(`Final Score Human: ${humanScore} Computer: ${computerScore}`)
            }
    } else if (humanChoice === computerChoice) {
        console.log('Tie!!!');
        let again = confirm('Play again?');
        if (again = true) {
                play();
            } else {
                console.log(`Final Score Human: ${humanScore} Computer: ${computerScore}`)
            };
    } else {
        console.log('something broke')
    }
}

function play() {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound();
}


