// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateBtn = confirm("Do you need a new Password?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lengthprompt = parseInt (prompt("How many characters would you like your password to contain?"));
  var uppercase = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
  var lowercase = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
  var numbers = [1,2,3,4,5,6,7,8,9,10]
  ////Code will go here will create a function generatePassword()
  enter = parseInt (prompt("How many characters would you like your password? Choose between 8 and 128"))
  if (!enter){
    alert("This needs a value");
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
