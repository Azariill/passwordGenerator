// Assignment code here
var passwordLength = 0;
var passwordCharacters = [];
var password ="";


function generatePassword() {
  
  password = "";
  passwordCharacters =[];
  choosePasswordLength();
  passwordOptions();
  for(var i = 0; i < passwordLength; i++){
    x = Math.floor(Math.random() * passwordCharacters.length);
    y = Math.floor(Math.random() * passwordCharacters[x].length);
    password += passwordCharacters[x][y];
  }
  return password;
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
    console.log(passwordLength);
    alert("Please choose between 8 and 128 characters");
    choosePasswordLength();
    return false;
  }
}
function passwordOptions(){
  var lowerCaseArray = ['a','b','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numericArray = ['1','2','3','4','5','6','7','8','9']; 
  var specialCharacterArray = ['!','@','$','%','^','&','*','(',')','-','+','"',' ','#',"'",',','<','>','=','?','[',']','{','}','|','~'];

  
  //Ask user if they would like lower case letters
  if(confirm("Would you like lowercase letters?")){
     passwordCharacters.push(lowerCaseArray);
  }

  // Ask if user wants upper case letters
  if(confirm("would you like uppercase letters?")){
      passwordCharacters.push(upperCaseArray);
  }

  if(confirm("Would you like numbers?")){
      passwordCharacters.push(numericArray); 
      console.log(passwordCharacters);
  }

  // ask if user would like special characters
  if(confirm("Would you like special characters?")){
    passwordCharacters.push(specialCharacterArray);
    console.log(passwordCharacters);
  }
  else if(passwordCharacters.length >= 1){
        return passwordCharacters;
  }
  else{
      alert("You have to choose at least one character type.")
      return passwordOptions();
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

