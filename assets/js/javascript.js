//  Create variables to hold the character options for Special, lowercase, uppercase and numeric character
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCase = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", "'", '"'];
var numericalNumeral = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var finalPass= [];
var numChars;
var specialChose;
var numericalChose;
var lowerChose;
var upperChose;

// create an empty array that will hold the user selected characters
var OptionsArray = [];

// var possibleChars = [];
var possibleChars = [];

// on game start prompt for users numbers of character and hold in variable


function PasswordFinder() {
    // var numChars = prompt("How many character ")
    numChars = parseInt(prompt("How many characters would you like? Between 8 and 128"));

    // check the users input and confirm they put in a number between 8 and 128
    if (numChars < 8 || numChars > 128) {
        alert("Too many characters or not enough characters. please select a number between 8 and 128")
        PasswordFinder();
        return null;
    }
    else if (numChars >= 8 && numChars <= 128) {
        console.log(numChars);
        userParameters();
        return numChars;
    }
    // write function that validates users input
    else {
        alert("Wrong Syntax. Please enter a number.")
        PasswordFinder();
        return null;
    }
}


// after validation create variables for character selections
function userParameters() {
    specialChose = confirm("Would you like special characters?");
    numericalChose = confirm("Would you like numbers?");
    lowerChose = confirm("Would you like lowercase characters?");
    upperChose = confirm("Would you like uppercase characters?");
    // validate that at least one option was selected
    if (!specialChose && !numericalChose && !lowerChose && !upperChose) {
        alert("You need to select at least one type of character");
        userParameters();
        return null();
    }
    console.log(specialChose);
    console.log(numericalChose);
    console.log(upperChose);
    console.log(lowerChose);
    ChosenArray();
}


function ChosenArray() {
    possibleChars = [];
    if (specialChose) {
        possibleChars = possibleChars.concat(specialCase);
    }

    if (upperChose) {
        possibleChars = possibleChars.concat(upperCase);
    }
    if (lowerChose) {
        possibleChars = possibleChars.concat(lowerCase);
    }
    if (numericalChose) {
        possibleChars = possibleChars.concat(numericalNumeral);
    }
    console.log(possibleChars);
    var password = finalPassLoop();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function finalPassLoop() {
    finalPass = [];
    for (let i = 0; i < numChars; i++) {
     finalPass = finalPass.concat(possibleChars[Math.floor(Math.random() * possibleChars.length)]);
    }
    console.log(numChars);
    console.log(finalPass);
    return finalPass.join ("");
}


// Assignmenmt code
var generateBtn = document.querySelector("#generate");

// write password
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = finalPass;
}

    generateBtn.addEventListener("click", PasswordFinder) 