// Assignment Code
var generateBtn = document.querySelector("#generate");

//Criteria variables for user input
var userPasswordLength;
var userLowercase;
var userUppercase;
var userNumeric;
var userSpecialCharacter;
var userInput;
var trueInput;

//Define possible input for password criteria
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = uppercase.map(element => {
  return element.toLowerCase();
});
var number = [0,1,2,3,4,5,6,7,8,9];
var specialCharacter = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[", "\\" ,"]","^","_","`","{","|","}","~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate password function
function generatePassword(){

//Input password length
userPasswordLength = prompt("Please use a numeric value to choose a password length between 8 and 128 characters.");

//Alert if input is false, not numeric, or not between 8-128 and reopen prompt for user input
  if(!userPasswordLength || userPasswordLength <8 || userPasswordLength >128 || isNaN(userPasswordLength)){
    alert("Please input a numeric value between 8 and 128."); 
    generatePassword();
  } 

else { 
  //Only log password length in console if value is true and numeric input between 8-128
  console.log(`Password Length: ${userPasswordLength}`);

  //Confirm lowercase
  if (confirm("Will the password contain a lowercase letter?") == true) {
    userLowercase = lowercase;
    console.log(`Contains lowercase: ${userLowercase}`);
  }  if (confirm("Will the password contain an uppercase letter?") == true) {
    userUppercase = uppercase;
    console.log(`Contains Uppercase: ${userUppercase}`);
  } if (confirm("Will the password contain a number?") == true) {
    userNumeric = number;
    console.log(`Contains Number: ${userNumeric}`);
  } if (confirm("Will the password contain a special character?") == true) {
    userSpecialCharacter = specialCharacter;
    console.log(`Contains Special Character: ${userSpecialCharacter}`);
  }
};

//Result if no character criteria selected, alert and return user to first prompt
if (!userLowercase && !userUppercase && !userNumeric && !userSpecialCharacter){
  alert("Please choose a criteria.");
  generatePassword();
 }

userInput = userLowercase.concat(userUppercase,userNumeric,userSpecialCharacter);
trueInput = userInput.filter(function(element){
  return element !== undefined;
});
console.log(trueInput);
  //Confirm uppercase
 //userUppercase = confirm("Will the password contain an uppercase letter?");
  //console.log(`Contains Uppercase:${userUppercase}`);

  //Confirm numeric
  //userNumeric = confirm("Will the password contain a number?");
  //console.log(`Contains Number:${userNumeric}`);
  
  //Confirm special character
  //userSpecialCharacter = confirm("Will the password contain a special character?");
  //console.log(`Contains Special Character:${userSpecialCharacter}`);
  //};



//Empty variable for password
 var passwordEmpty = [];

 //For loop for random selection
 for (var i=0; i<userPasswordLength;i++){
  var result = trueInput[Math.floor(Math.random() * trueInput.length)];
  passwordEmpty.push(result);
  console.log(result);
 };

 //Join password and return
 var password = passwordEmpty.join("");
 console.log("Your Password Is: " + password);
 return password;
 
};





