// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log('write passowrd')
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  let validationFailed = true;
  let validateNum;
  let numerics;
  let lowercases;
  let uppercases;
  let specials;
  do{
    var prompt = window.prompt('Enter the length of password (8-128)');
    validateNum = Number.parseInt(prompt);
    if(isNaN(validateNum)){
      window.alert("please enter a number")
    }
    else{
      console.log(validateNum);
      if(validateNum >  7 && validateNum < 129){
        console.log(validateNum);
        validationFailed = false;
      }
      else{
        window.alert("please enter a  within the numbers specified")
      }
    }
    
  }while(validationFailed)
  validationFailed = true;

  do{
    numerics = window.confirm('Do you want numeric characters?')
    lowercases = window.confirm('Do you want lowercase characters ?')
    uppercases = window.confirm('Do you want upppercase characters?')
    specials = window.confirm('Do you want special characters?')
    if(numerics || lowercases || uppercases || specials){
      validationFailed = false;
    }
    else{
      validationFailed = true;
      window.alert("please select at least 1 character set")
    }
  } while(validationFailed);
  console.log("why")
  return createPassword(validateNum, specials, numerics, lowercases, uppercases);


}
function createPassword(length, useSpecials, useNumerics, useLowercases, useUppercases){
  let password = "";
  const charArray = []
  if(useSpecials){
    charArray.push(...['!','@','#','$','%','^','&','*','(',')','_','-','+','=','}','{','[',']','|','<','>','?',"/",',','.'])
  }
  if(useUppercases){
    charArray.push(...['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'])
  }
  if(useLowercases){
    charArray.push(...['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'])
  }
  if(useNumerics){
    charArray.push(...['1','2','3','4','5','6','7','8','9','0'])
  }
  for(let i = 0; i < length; i++){
    password = password + charArray[getRandomInt(charArray.length)];
  }
  return password;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
