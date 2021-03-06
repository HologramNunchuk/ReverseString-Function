//FUNCTION REVERSES A STRING with built in functions

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

console.log(backwardString("rettam edurc siht ton ,era ew sgieB suonimuL"));

//FUNCTION THAT REVERSES A STRING WITH A FOR LOOP

function reverseLoop(input) {
  let moonwalkString = "";

  for (let i = input.length - 1; i >= 0; i--) {
    moonwalkString += input[i];
  }
  return moonwalkString;
}

console.log(
  reverseLoop("uoy lortnoc lliw ecroF ruoy ro ,ecroF rouy lortnoc ot nraeL")
);

FUNCTION THAT CAPITALIZES THE FIRST LETTER OF EVERY WORD BY SEPARATING THE FIRST LETTER FROM THE REST OF THE WORD

function letterCapitalize(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
  }

  return words.join(" ");
}

console.log(letterCapitalize("hello from tokyo!!"));
