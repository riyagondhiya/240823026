function fibonacciSeries(n) {
    const fib = [0, 1];
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    }
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  console.log(fibonacciSeries(5));  
