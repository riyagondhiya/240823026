function sum(number) {
    const numStr = String(number);
    const digits = numStr.split('');
    const sum = digits.reduce((accumulator, currentDigit) => {
      return accumulator + parseInt(currentDigit);
    }, 0); 
    return sum;
  }
  
  console.log(sum(123)); 