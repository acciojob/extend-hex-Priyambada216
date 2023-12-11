const extendHex = (shortHex) => {
  // Check the length of the short hex string
  if (shortHex.length === 1) {
    // If the length is 1, repeat the character 6 times
    return shortHex.repeat(6);
  } else if (shortHex.length === 3) {
    // If the length is 3, repeat the string 2 times
    return shortHex.repeat(2);
  } else {
    // If the length is not 1 or 3, return the original string
    return shortHex;
  }
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
