// Assignment Code
let generateBtn = document.querySelector("#generate");

let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let alphaUpcase = alpha.join('$$').toUpperCase().split('$$');
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '/', '?']

function generatePassword() {
  let totalCharacters = alpha;
  let passwordLength = prompt('How many characters do you want your passwod to be? Enter a number 8-120');

  let upperCase = confirm("Do you want to include uppercase letters?");
  if(upperCase) {
    totalCharacters = totalCharacters.concat(alphaUpcase)
  };

  let numbers = confirm('Do you want to include numbers?');
  if(numbers) {
    totalCharacters = totalCharacters.concat(number)
  };

  let sCharacters = confirm('Do you want to include special characters?');
  if(sCharacters) {
    totalCharacters = totalCharacters.concat(specialCharacters)
  };

  console.log(totalCharacters);
  // while (yourPassword <= passwordLength) {

  // }
  //   finalArray[Math.floor(Math.random()*answer.length)];



  // return 'yourpassword';
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
