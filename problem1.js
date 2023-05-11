function Triangle(height) {
  const totalWidth = height * 2 - 1; 

  for (let row = 1; row <= height; row++) {
    let line = '';
    const spaces = ' '.repeat((totalWidth - (row * 2 - 1)) / 2); 
    const asterisks = '*'.repeat(row * 2 - 1); 

    line = spaces + asterisks;
    console.log(line);
  }
}


const triangleHeight = 5;
Triangle(triangleHeight);
