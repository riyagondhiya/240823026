function countDigits(number) {
    const absNumber = Math.abs(number);
    return absNumber.toString().length;
  }
  
  console.log(countDigits(5023));
