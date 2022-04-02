// Assignment code here
var passwordLength = 0;
var lowerCase = false;
var upperCase = false;
var numeric = false;
var specialCharacters = false;
var passwordCharacters = [];
var password ="";


function generatePassword() {
  choosePasswordLength();
  chooseCharacterTypes();
  passwordOptions();

  
  for(var i = 0; i < passwordLength; i++){
    x = Math.floor(Math.random() * passwordCharacters.length);
    console.log(x);
    password += passwordCharacters[x];
    

    
  }
  return password;


  

  
}

function randomLetter(){
  Math.floor(Math.random() * passwordCharacters.length + 1);
}

function choosePasswordLength(){
  // prompt to ask for desired password length
  passwordLength = prompt("Choose a password length between 8 - 128 characters.")
  passwordLength = parseInt(passwordLength);
  //Make sure password length is greater than 8 and shorter than 128
  if(passwordLength >= 8 && passwordLength <= 128){
    passwordLength = passwordLength;
    

  }
  else{
    choosePasswordLength();
    return false;
    
  }
}

function chooseCharacterTypes(){

lowerCase = confirm("Would you like lowercase letters?");
uppercase = confirm("would you like uppercase letters?");
numeric = confirm("Would you like numbers?");
specialCharacters = confirm("Would you like special characters?");


}

function passwordOptions(){
  var lowerCaseArray = ['a','b','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
  var numericArray = ['1','2','3','4','5','6','7','8','9'];
  var specialCharacterArray = ['!','@','$','%','^','&','*','(',')','-','+'];

  if(lowerCase){
     passwordCharacters = passwordCharacters.concat(lowerCaseArray);
     console.log(passwordCharacters);
  }

    if(upperCase){
      passwordCharacters = passwordCharacters.concat(upperCaseArray);
      console.log(passwordCharacters);

  }
    if(numeric){
      passwordCharacters = passwordCharacters.concat(numericArray);
      console.log(passwordCharacters);

  }
    if(specialCharacters){
      passwordCharacters = passwordCharacters.concat(specialCharacterArray);
      console.log(passwordCharacters);
  }
  else{
    alert("You have to choose at least one character type.")
    return chooseCharacterTypes();
  }

  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

