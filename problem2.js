function encryptText(text) {
    const originalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Alphabet asli
    const encryptionAlphabet = 'KLMNOPQRSTUVWXYZABCDEFG'; // Alphabet hasil penggeseran
  
    // Mengubah teks menjadi huruf kapital
    text = text.toUpperCase();
  
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      const currentChar = text[i];
      let encryptedChar = currentChar;
  
      // Mencari indeks karakter saat ini dalam alphabet asli
      const originalIndex = originalAlphabet.indexOf(currentChar);
  
      if (originalIndex !== -1) {
        // Jika karakter ditemukan dalam alphabet asli, maka enkripsikan karakter tersebut
        encryptedChar = encryptionAlphabet[originalIndex];
      }
  
      encryptedText += encryptedChar;
    }
  
    return encryptedText;
  }
  
  // Contoh penggunaan
  const inputText = 'SEPULSA OKE';
  const encryptedText = encryptText(inputText);
  console.log(encryptedText);
  