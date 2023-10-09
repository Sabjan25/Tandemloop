function countMultiples(numbers) {
    const multiplesCount = {};
    
    for (let i = 1; i <= 9; i++) {
      const multipleCount = numbers.filter(num => num % i === 0).length;
      multiplesCount[i] = multipleCount;
    }
  
    return multiplesCount;
  }
  

  const inputArray = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
  const result = countMultiples(inputArray);
  console.log(result);
  