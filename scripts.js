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
           return 'Rock'
            }
        else if (generatedNumber <= 66 && generatedNumber >= 34) {
            return 'Paper'
        }
        else if (generatedNumber <= 99 && generatedNumber >= 67) {
            return 'Scissors'
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
        }
    
}
