function shiftString(offset, string) {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    let shiftedString = '';
  
    for (let i = 0; i < string.length; i++) {
      const currentChar = string[i];
  
      if (currentChar === ' ') {
        shiftedString += ' '; 
        continue;
      }
  
      const charCode = currentChar.charCodeAt(0);
      const isLowercaseLetter = lowercaseLetters.includes(currentChar);
  
      let shiftedCharCode;
      if (isLowercaseLetter) {
        shiftedCharCode = ((charCode - 97 + offset) % 26) + 97;
      } else {
        shiftedCharCode = charCode; 
      }
  
      const shiftedChar = String.fromCharCode(shiftedCharCode);
      shiftedString += shiftedChar;
    }
  
    return shiftedString;
  }
  

  console.log(shiftString(3, 'abc')); 
  console.log(shiftString(1, 'abcdefghijklmnopqrstuvwxyz')); 
  console.log(shiftString(1000, 'abcdefghijklmnopqrstuvwxyz')); 
  