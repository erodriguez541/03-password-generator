// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateBtn = confirm("Do you need a new Password?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
////Code will go here will create a function generatePassword()
  enter = parseInt (prompt("How many characters would you like your password? Choose between 8 and 128"))
  if (!enter){
    alert("This needs a value")
  }
  wordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//create a prompt for the password
//Password criteria: should be between 8 and 128 charcters
//Password criteria: Password can contain numeric, lowercase, uppercase, and/or Special Characters
//Need to account for scenario where none are selected
//When all prompts are complete should generate random password

//Argument 1: Do you want Uppercase Letters: T
//Argument 2: Do you want Lowercase Letters: T
//Argument 3: Do you want Special Characters: T
//Argument 4: Do you want numbers: T