// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//------------------------------------------------------------------------------

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// define check boxes mutuality for password lengths
function onlyOne (checkbox,name_='radio-1') {
  var lengthboxes = document.getElementsByName(name_)
  lengthboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false; 
  })
}

// save grouped checkboxes as list of boolean
function listCheckboxValues(name_) {
  var charboxes = document.getElementsByName(name_)
  res = [];
  charboxes.forEach((item) => {res.push(item.checked);})
  //console.log(res);
  return res;
}

// get values of checkbox(es) using input name
function getArrayValues() {
  var lengthChoice = listCheckboxValues(name_='radio-1');
  var charChoice = listCheckboxValues(name_='radio-2');
  console.log(lengthChoice,charChoice);
  var choices = {'lengthChoice':lengthChoice,
          'charChoice':charChoice};
  return choices;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);