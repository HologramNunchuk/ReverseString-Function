//FUNCTION REVERSES A STRING

function reverseString(input) {
  let splitString = input.split("");
  let reverseArray = splitString.reverse();
  let glueArray = reverseArray.join("");
  return glueArray;
}

console.log(reverseString("syawla...uoy htiw eb lliw ecroF ehT"));

//SHORTER VERSION OF THE REVERSE STRING FUNCTION ABOVE

function backwardString(input) {
  return input
    .split("")
    .reverse()
    .join("");
}

console.log(backwardString("rettam edurc siht ton ,era ew suonimuL"));
