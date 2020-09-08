// Assignment Code
var generateBtn = document.querySelector("#generate");
lowerCase = [];
upperCase = [];
symbols = [];
numbers = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var Chars;
  var includeLower;
  var includeUpper;
  var includeNumbers;
  var includeSymbols;
  passwordArray = [];
  superarray = [];

  // Number of charaters prompt
  Chars = prompt("How long would you like your password to be? (Between 8-128 character)");
  console.log(Chars);
    if (Chars >= 8 && Chars <= 128) {
      console.log("sakoo");
    } else {
      alert(
        "You have entered an invalid number of characters. Please try again"
      );
      return "Please click the 'Generate Password' button again";
    }

//inputs
    includeUpper = confirm("Would you like your password to include uppercase letters?");
    console.log(includeUpper);
    includeLower = confirm("Would you like your password to include lowercase letters?");
    console.log(includeLower);
    includeSymbols = confirm("Would you like your password to include symbols?");
    console.log(includeSymbols);
    includeNumbers = confirm("Would you like your password to include numbers?");
    console.log(includeNumbers);
// validation
      if (
        includeLower === false &&
        includeNumbers === false &&
        includeSymbols === false &&
        includeUpper === false
      ) {
        alert("You need to select at least one character type for your password. Cick the Generate Password Button to try again.");
        return;
      } 

//concatenating arrays
  function arrayCreation(start, finish) {
    const array = [];
    for (let i = start; i <= finish; i++) {
      array.push(i);
        }
        return array;
      }
      lowerCase = arrayCreation(97, 122);
      console.log(lowerCase);
      upperCase = arrayCreation(65, 90);
      console.log(upperCase);
      numbers = arrayCreation(48, 57);
      console.log(numbers);
      symbols = arrayCreation(33, 47).concat(arrayCreation(58, 64)).concat(arrayCreation(91, 96)).concat(arrayCreation(123, 126));
      console.log(symbols);

      if (includeLower) {
        superarray = superarray.concat(lowerCase);
      } else {
        console.log("lowerCase not included");
      }
      if (includeUpper) {
        superarray = superarray.concat(upperCase);
      } else {
        console.log("UpperCase not included");
      }
      if (includeNumbers) {
        superarray = superarray.concat(numbers);
      } else {
        console.log("Numbers not included");
      }
      if (includeSymbols) {
        superarray = superarray.concat(symbols);
      } else {
        console.log("Symbols not included");
      }

   
  for (let i = superarray.length - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * i);
    var temp = superarray[i];
    superarray[i] = superarray[r];
    superarray[r] = temp;
  }


  
  for (i = 1; i <= Chars; i++) {
    var y = Math.floor(Math.random() * superarray.length);
    console.log(y);
    passwordArray.push(String.fromCharCode(superarray[y]));
  }


// returning the password as a String
  return passwordArray.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);