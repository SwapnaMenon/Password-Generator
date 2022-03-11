// Assignment Code
var generateBtn = document.querySelector("#generate"); 
// generate password for required lenght and criteria //
function generatePassword(){
  var passwordlength=prompt("how many charecters do you want your desire password to be")
  console.log(passwordlength)
  while (passwordlength<8 || passwordlength>128) {
    alert("please enter a password length between 8 and 128 charecters")
    passwordlength=prompt("how many charecters do you want your desire password to be")
  }
var password = ""
var numbers= "1234567890"
var lowerCase= "abcdefghijklmnopqrstuvwxyz" 
var all="" //the all variable works as a combination variable to all of the user's requirements or responses to the query//
all = all + numbers
var yeslowerCase= prompt("Would you like to include lowercase charecters in your password yes/no")
if (yeslowerCase==="yes") //if the user enters the exact same value as the value in the string //
{
  all = all + lowerCase
  console.log (all)
}
var upperCase= lowerCase.toUpperCase() //the resposnse will change the string from lower case to upercase //
var yesupperCase = prompt("Would you like to include uppercase charecters in your password yes/no")
if (yesupperCase==="yes") {
  all =all + upperCase
  console.log (all)
}
var specialCharecters = "!@#$%^&*()" //include special charebters in the generated password//
var yesspecialCharecters = prompt("Would you like to include  special charecters in your password yes/no")
if (yesspecialCharecters==="yes") {
  all = all + specialCharecters
  console.log (all)
}
console.log (all)
// for loop will consider every charecter from i to the desired password length //
for (var i = 0; i <= passwordlength; i++) {
  password += all.charAt(Math.floor(Math.random() * all.length)) //math.floor will not result in a decimal value //
}
console.log (password)
return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  var criteria = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



