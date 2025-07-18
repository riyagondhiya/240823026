function isArmstrongNumber(number) {
    const numberString = number.toString();
    const numberOfDigits = numberString.length;
    let sum = 0;
    for (let i = 0; i < numberOfDigits; i++) {
      const digit = parseInt(numberString[i]);
      sum += Math.pow(digit, numberOfDigits);
    }
    return sum === number;
  }
  console.log(`Is 153 an Armstrong number? ${isArmstrongNumber(153)}`);