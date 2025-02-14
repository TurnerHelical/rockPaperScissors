
// Create a variable called computerChoice
// let computerChoice = getComputerChoice();
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

// Create a function called getHumanChoice
// This funtion will prompt the user to enter their choice of Rock, Paper, or Scissors
// Send their response through a function to turn it all lowercase
// then have an if conditional check the response and return their answer to the variable
// function getHumanChoice() {
//     let choice = 
//         if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
//             return choice
//         } else {
//             alert('Please try again');
//             getHumanChoice()
//         }

// }

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const humanImg = document.querySelector('.humanImage');
const compImg = document.querySelector('.compImage');
let result = document.querySelector('.resultWords');
let hScore = document.querySelector('#hScore');
let cScore = document.querySelector('#cScore');
let roundSpot = document.querySelector('.round');
let roundNumber = 0;

rockBtn.addEventListener('click', function (e) {
    playRound('rock');
})

paperBtn.addEventListener('click', function (e) {
    playRound('paper');
})

scissorsBtn.addEventListener('click', function (e) {
    playRound('scissors');
})

// Create a variable named humanScore and assign the number of wins to it
// Create a variable named computerScore and assign the number of wins to it
let humanScore = 0;
let computerScore = 0;

// Create a function named playRound
// This function should simulate a round of Rock, Paper, Scissors using the user and computer choice's
// using the humanChoice and computerChoice variables output a string that says who wins
// incriment humanScore or computerScore depending on who wins
// log a string to the console that shows overall wins for each user

function imageSelectorHuman(hand) {
    if (hand === 'rock') {
        humanImg.src = './images/rock.png';
    } else if (hand === 'paper') {
        humanImg.src = './images/paper.png';
    } else {
        humanImg.src = './images/scissors.png';
    }
}

function imageSelectorComp(hand) {
    if (hand === 'rock') {
        compImg.src = './images/rock.png';
    } else if (hand === 'paper') {
        compImg.src = './images/paper.png';
    } else {
        compImg.src = './images/scissors.png';
    }
}

function playRound(humanChoice) {
    console.log(humanChoice);
    let computerChoice = getComputerChoice();

    imageSelectorHuman(humanChoice);
    imageSelectorComp(computerChoice);

    if (humanChoice === 'rock' && computerChoice === 'scissors'
        || humanChoice === 'paper' && computerChoice === 'rock'
        || humanChoice === 'scissors' && computerChoice === 'paper') {
        result.textContent = `${humanChoice} beats ${computerChoice}!!`;
        humanScore++;
        hScore.textContent = `Human Score: ${humanScore}`;
        cScore.textContent = `Computer Score: ${computerScore}`;
        roundNumber = roundNumber + 1;
        roundSpot.textContent = `Round: ${roundNumber}`;
        if (roundNumber >= 5) {
            if (computerScore > humanScore) {
                alert('Computer wins the game =(');
                location.reload();
            } else if (computerScore < humanScore) {
                alert('You win!!!!');
                location.reload();
            } else {
                alert('Tie!!!');
                location.reload();
            }
        }
    } else if (humanChoice === 'rock' && computerChoice === 'paper'
        || humanChoice === 'paper' && computerChoice === 'scissors'
        || humanChoice === 'scissors' && computerChoice === 'rock') {
        result.textContent = `${computerChoice} beats ${humanChoice}`;
        computerScore++;
        hScore.textContent = `Human Score: ${humanScore}`;
        cScore.textContent = `Computer Score: ${computerScore}`;
        roundNumber = roundNumber + 1;
        roundSpot.textContent = `Round: ${roundNumber}`;
        if (roundNumber >= 5) {
            if (computerScore > humanScore) {
                alert('Computer wins the game =(');
                location.reload();
            } else if (computerScore < humanScore) {
                alert('You win!!!!');
                location.reload();
            } else {
                alert('Tie!!!');
                location.reload();
            }
        }
    } else if (humanChoice === computerChoice) {
        result.textContent = 'Tie';
        roundNumber = roundNumber + 1;
        roundSpot.textContent = `Round: ${roundNumber}`;
        if (roundNumber >= 5) {
            if (computerScore > humanScore) {
                alert('Computer wins the game =(');
                location.reload();
            } else if (computerScore < humanScore) {
                alert('You win!!!!');
                location.reload();
            } else {
                alert('Tie!!!');
                location.reload();
            }

        }
    }
}

