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
  var password = validateAndGeneratePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Function to generate random number from range
function generateRandomNumFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function for getting a random element from an array
function getRandom(arr, num) {
  randString = '';
  for (let i=0; i<num; i++){
    var currentChoice = generateRandomNumFromRange(0,arr.length-1);
    randString+=arr[currentChoice];
  }
  //const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return randString; //shuffled.slice(0, num);
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

// function to generate password length based on user opt
function returnPasswordLength(indices){
  var len; 
  console.log(`chosen indices: ${indices} `)
  // automated random password length generators
  if (indices[0]==0){len = generateRandomNumFromRange(min=10,max=32);}
  else if (indices[0]==1){len = generateRandomNumFromRange(min=33,max=64);}
  else if (indices[0]==2){len = generateRandomNumFromRange(min=10,max=64);}
  // manually enter the password length
  else if (indices[0]==3){
    len = parseInt(prompt('Please enter the desired password length...'))
    while (true){
      if (len<10 || len>64 || isNaN(len)){
        len = parseInt(prompt('Incorrect value given! Please enter value between 10 - 64...'));
      }
      else{break;}
    }
  }
  else{console.log('Error!! Most likely no viable password length picked!');}
  console.log(`chosen length: ${len} `)
  return len;
}

// Function returns characters using length
function returnRandomCharacters(indices,len){
  var char;
  if (indices==0){char = getRandom(upperCasedCharacters,len);}
  else if (indices==1){char = getRandom(lowerCasedCharacters,len);}
  else if (indices==2){char = getRandom(numericCharacters,len);}
  else if (indices==3){char = getRandom(specialCharacters,len);}
  else{console.log('Error!! Most likely no viable character option picked!');}
  return char;
}

// Add validation and generation function
function validateAndGeneratePassword() {

  var checkcharChoices;
  var checkcharIndices;
  var checklengthChoices;
  var checklengthIndices;
  var values = getArrayValues();

  allThingsLength = checkTrueInArray(values.lengthChoice);
  allThingsChar = checkTrueInArray(values.charChoice);

  checklengthChoices = allThingsLength.isTruthWithin;
  checklengthIndices = allThingsLength.indicesOfTruth;
  checkcharChoices = allThingsChar.isTruthWithin
  checkcharIndices = allThingsChar.indicesOfTruth
  console.log(checkcharChoices, checkcharIndices)

  if (checklengthChoices===false && checkcharChoices===false){
    alert('Please select from options below.');
  }
  else if (checklengthChoices===false){
    alert('No viable password length selected! Please tick an option.');
  }
  else if (checkcharChoices===false){
    alert('No viable character option selected! Please tick an option.');
  }
  else{
    // when user selects more than one char option
    var len = returnPasswordLength(checklengthIndices);
      if (checkcharIndices.length>1){
        var lenPerCharChoice = [];
        // distribute lengths to each option from password length allotment
        for (let j=0; j<checkcharIndices.length; j++){
          if (j==checkcharIndices.length-1){
            if ((len%checkcharIndices.length)!=0){
              lenPerCharChoice.push(Math.floor
                (len/checkcharIndices.length) + (len%checkcharIndices.length));
            }
            else{lenPerCharChoice.push(Math.floor(len/checkcharIndices.length));}
          }
          else{lenPerCharChoice.push(Math.floor(len/checkcharIndices.length));}
        }
      }
      else{
        lenPerCharChoice = [len];
      }

      // generate random characters and final password
      var generatedPasswordRaw = [];
      for (let i=0; i<lenPerCharChoice.length; i++){
        generatedPasswordRaw.push(returnRandomCharacters(checkcharIndices[i], lenPerCharChoice[i]))
      }
    }
    console.log('raw password elements: ' + generatedPasswordRaw);

    // combine all password requirements into final password
    var password='';
    if (generatedPasswordRaw.length>1){
      for (let i=0; i<generatedPasswordRaw.length; i++){
        password += generatedPasswordRaw[i]; }
      password = password.split('').sort(function(){return 0.5-Math.random()}).join('');
    }
    else{password = generatedPasswordRaw[0]}
    
    console.log('final password: ' + password)
    return password;
}

// Add event listener to generate button
//generateBtn.addEventListener('click', validateAndGeneratePassword);
generateBtn.addEventListener('click', writePassword);