//  Create variables to hold the character options for Special, lowercase, uppercase and numeric character
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var SpecialCase = ["+", "-", "&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", "'", '"'];
var numericalNumeral = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

// create an empty array that will hold the user selected characters
var OptionsArray = [];

// var possibleChars = [];
var possibleChars = [];


// on game start prompt for users numbers of character and hold in variable

function PasswordFinder() {
    // var numChars = prompt("How many character ")
    var numChars = prompt("How many characters would you like? Between 8 and 128")

    // check the users input and confirm they put in a number between 8 and 128
    if (numChars < 8 || numChars > 128) {
        alert("Too many characters or not enough characters. please select a number between 8 and 128")
        return null;
    }
    // write function that validates users input
    else {
        return null;
    }



    // functions validateUserInput(chars) {
    // if (chars < 8 || chars > 128) {
    //      return null  
    // }
    // }


    // after validation create variables for character selections
    function userParameters() {
        var specialChars = confirm("Would you like special characters?");
        var numericalNums = confirm("Would you like numbers?");
        var lowerChars = confirm("Would you like lowercase characters?");
        var upperChars = confirm("Would you like uppercase characters?");
    

    // validate that at least one option was selected

    if (!specialChars && !numericalNums && !lowerChars && !upperChars) {
         alert ("You need to select at least one type of character");
    return null();
    }
}

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