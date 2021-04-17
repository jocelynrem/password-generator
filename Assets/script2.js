// Assignment Code
const generateBtn = document.querySelector("#generate");

var passwordCharacters = {}

function generatePassword() {
    var passwordLength = prompt('How many characters do you want your passwod to be? Enter a number 8-128');
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
       return alert('That is not a valid number')
        } else {
            var askLowerCase = confirm("Do you want to include lowercase letters in your password?");
            if (askLowerCase) {
                passwordCharacters.lowerCase = 'abcdefghijklmnopqrstuvwxyz'
            } 
            
            var askUpperCase = confirm("Do you want to include uppercase letters in your password?");
            if (askUpperCase) {
                passwordCharacters.upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
            } 

            var Asknumbers = confirm('Do you want to include numbers in your password?');
            if (Asknumbers) {
                passwordCharacters.numbers = 1234567890;
            } 

            let AskCharacters = confirm('Do you want to include special characters in your password?');
            if (AskCharacters) {
                passwordCharacters.specialCharacters = '!@#$%^&*()_-+=?/.,~`|}{][~ '
            } 
           
            console.log([Math.floor(Math.random()*passwordCharacters.specialCharacters.length)]);

            // console.log('passwordCharacters:', passwordCharacters)

        }
    }








// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);