// Assignment Code
const generateBtn = document.querySelector("#generate");


// Declares Possible password characters
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const alphaUpcase = alpha.join('$$').toUpperCase().split('$$');
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '/', '?', ']', ' ', '{', '}', '|', '`', '~', '=', '+', ';', ':'];

//Function that genenerates the password
function generatePassword() {
  let yourPassword = [];
  let finalArray = [];
  let separator = "";
  
  let passwordLength = prompt('How many characters do you want your passwod to be? Enter a number 8-128');

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert('That is not a valid number')
  } else {
      let totalCharacters;

      let lowerCase = confirm("Do you want to include lowercase letters in your password?");
      if(lowerCase) {
        finalArray.push(alpha[Math.floor(Math.random()*alpha.length)]);
        totalCharacters = alpha
      };

      let upperCase = confirm("Do you want to include uppercase letters in your password?");
      if(upperCase) {
        finalArray.push(alphaUpcase[Math.floor(Math.random()*alphaUpcase.length)]);
        totalCharacters = totalCharacters.concat(alphaUpcase)
      };

      let numbers = confirm('Do you want to include numbers in your password?');
      if(numbers) {
        finalArray.push(number[Math.floor(Math.random()*number.length)]);
        totalCharacters = totalCharacters.concat(number)
      };

      let sCharacters = confirm('Do you want to include special characters in your password?');
      if(sCharacters) {
        finalArray.push(specialCharacters[Math.floor(Math.random()*specialCharacters.length)]);
        totalCharacters = totalCharacters.concat(specialCharacters)
      };

      if (totalCharacters === undefined) {
        return alert('You must choose at least one password criteria. Press Generate Password to try again.');
      }
        
      while (passwordLength >= finalArray.length) {
        finalArray.push(totalCharacters[Math.floor(Math.random()*totalCharacters.length)]);
      }
      
      yourPassword = finalArray.join(separator);
      return yourPassword
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
