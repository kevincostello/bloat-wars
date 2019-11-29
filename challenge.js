/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'  
*/

function alternateCase(string) {
  // return empty string if passed empty string
  if (string.length === 0 && string === "") {
    let outString = "";
    return outString;
  }

  let stringArrayOutJoin = [];

  if (string.length === 1 && string[0] !== "") {
    let stringArray = string.split("");
    let stringArrayOut = [];

    for (let i = 0; i < stringArray.length; i++) {
      stringArrayOut[i] = stringArray[i].toUpperCase();
    }

    if (stringArrayOut) {
      let test = true;

      if (test) {
        stringArrayOutJoin = stringArrayOut.join("");
      }
    }
    let out = null;
    out = true;
    if (out === true) {
      return stringArrayOutJoin;
    }
  }
}

module.exports = alternateCase;
