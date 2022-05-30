//  Create variables to hold the character options for Special, lowercase, uppercas and numeric character

// create an empty array that will hold the user selected characters

// var possibleChars = [];

// on game start prompt for users numbers of character and hold in variable
// var numChars = prompt("How many character ")

// check the users input and confirm they put in a number between 8 and 128

// write function that validates users input

// functions validateUserInput(chars) {
// if (chars < 8 || chars > 128) {
//      return null  
// }
// }


// after validation create variables for character selections

// var specialChars= confirm("Would you link special characters")
// var numericalNums= confirm("Would you link special characters")
// var lowerChars= confirm("Would you link special characters")
// var upperChars= confirm("Would you link special characters")

// validate that at least one option was selected

// if (!specialChars && !numericalNums && !lowerChars && !upperChars) {
//      alert ("You need to select at least one type of character");
// return gerneratePassword()
// }

// after validation is complete start pushiong the selected characters into possible chars array

// if (specialChars)  {
// possibleChars.concat(specialCharsArray)
// }

// if (numericalChars)  {
// possibleChars.concat(numericalNumsArray)
// }

// Assignmenmt code
var generateBtn = document.querySelector("#generate")

// write password
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);