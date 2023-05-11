function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    let minIndex = 0;
    let maxIndex = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
      if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
      }
    }
  
    return { min, minIndex, max, maxIndex };
  }
  

  const inputArr = [5, 7, 4, -2, -1, 8];
  const result = findMinMax(inputArr);
  console.log(`min: ${result.min} index: ${result.minIndex} max: ${result.max} index: ${result.maxIndex}`);
  