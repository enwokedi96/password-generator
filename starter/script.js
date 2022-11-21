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

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Function to generate random number from range
function generateRandomNumFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// define check boxes mutuality for password lengths
function onlyOne (checkbox,name_='radio-1') {
  var lengthboxes = document.getElementsByName(name_)
  lengthboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false; 
  })
}

// save grouped checkboxes as array of boolean
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

// truth value and truth indices inside boolean array
function checkTrueInArray(array){
  var bool = false;
  for(var k=0; k<array.length; k++){
      if(array[k]){
          bool = true;
          break;
      }
  }

  if (bool === true){
    var trueIndices = [...array.entries()].filter(([, v]) => v).map(([i]) => i);
  }
  else{
    var trueIndices = [];
  }
  console.log('checkTrueInArray: ',bool, trueIndices);
  return {'isTruthWithin': bool, 
          'indicesOfTruth': trueIndices};
  }

// display init
//var choices = getArrayValues();
//console.log('init choices are: ',choices);

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);