function prime(n) {
    let result = [1,n];
    for (let i = 2; i < Math.pow(n, 0.5); i++) {
        if (n % i == 0) {
            result.push(i);
            result.push(n / i);
        }
    }
    return result.sort((a, b) => a - b);
}

const num = 10;
console.log("Prime factors of " + 
    num + ": " + prime(num));