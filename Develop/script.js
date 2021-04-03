// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateBtn = confirm("Do you need a new Password?")
//var lengthPrompt = parseInt(prompt("How many characters would you like your password to contain?"))

function questions(){
var lengthPrompt = parseInt (prompt("How many characters would you like your password to contain"));
if(lengthPrompt <8){
  alert('Password must be at least 8 characters.');
  return;
}
if (lengthPrompt>128){
  alert('Password must be less than 128 characters.');
  return;
}
if(!lengthPrompt){
  alert('Please enter in a number.');
  return;
}
//Argument 1: Do you want Uppercase Letters: T
var uppercaseletters = confirm("Do you want Capital Letters?");
//Argument 2: Do you want Lowercase Letters: T
var lowercaseletters = confirm("Do you want Lower Case Letters?");
//Argument 3: Do you want Special Characters: T
var specialchar = confirm("Do you want Special Characters?");
//Argument 4: Do you want numbers: T
var numericchar = confirm("Do you want Numeric Characters?");
if(!uppercaseletters && !lowercaseletters && !specialchar && !numericchar){
  alert('Password needs at least one of these characters.');
  return;
}
 
}
questions();
  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //var lengthprompt = parseInt (prompt("How many characters would you like your password to contain?"));
  var uppercase = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`];
  var lowercase = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
  var numbers = [1,2,3,4,5,6,7,8,9,0];
  var special = ['','!','"','#','$','%','&','(',')','*','+',',','-','/',':',';','<','=','>','?','@','[',']','^','_','`','{','}','|','~'];
  ////Code will go here will create a function generatePassword()
if(questions.uppercaseletters){
  for(i=0; i<uppercase.length; ++i){
    passwordText.push(uppercase[i]);
  }
}
if(questions.lowercaseletters){
  for(i=0; i<lowercase.length; ++i){
    passwordText.push(lowercase[i]);
  }
}
if(questions.specialchar){
  for(i=0; i<special.length; ++i){
    passwordText.push(special[i]);
  }
}
if(questions.numericchar){
  for(i=0; i<numbers.length; ++i){
  passwordText.push(numbers[i]);
}}
for(let i =0; i<questions.length; ++i){
  var randompass = Math.floor(Math.random()*Math.floor(passwordText.length));
    password.push(questions[randompass])
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


