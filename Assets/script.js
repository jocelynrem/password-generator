// Assignment Code
var generateBtn = document.querySelector("#generate");

var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var alphaUpcase = alpha.toUppercase()
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '/', '?']

function generatePassword() {
  var finalArray = alpha
  var length = prompt('How many characters do you want your passwod to be? Enter a number 8-120')

  var upperCase = confirm("Do you want to include uppercase letters?")
  if(upperCase) {
    finalArray = finalArray.concat(alphaUpcase)
  }

  var numbers = confirm('Do you want to include numbers?')
  if(numbers) {
    finalArray = finalArray.concat(number)
  }

  var sCharacters = confirm('Do you want to include special characters?')
  if(sCharacters) {
    finalArray = finalArray.concat(specialCharacters)
  }

  


  return 'yourpassword';
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
