//FUNCTION THAT CAPITALIZES THE FIRST LETTER OF EVERY WORD BY SEPARATING THE FIRST LETTER FROM THE REST OF THE WORD

function letterCapitalize(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
  }

  return words.join(" ");
}

console.log(letterCapitalize("hello from tokyo!!"));
