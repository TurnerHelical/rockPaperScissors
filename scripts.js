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
        else if (generatedNumber <=99 && generatedNumber >= 67) {
            return 'Scissors'
        }
        else {
            getComputerChoice()
        }
}
