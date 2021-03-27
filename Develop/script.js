// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
////Code will go here will create a function generatePassword()
  passwordText.value = password;

}

function getupperCaseLetters(){
  var upperCaseLetters = [];
  for (var i = 65; i < 91; i ++){
    upperCaseLetters.push(string.fromcharcode(i))
  }
  return upperCaseLetters
}
function generatePassword () {
  var upperCaseLetters = getupperCaseLetters();
  console.log("upper case letters")
  var password =" ",
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

