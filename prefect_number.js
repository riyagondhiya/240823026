function pn(n) {
    if (!Number.isInteger(n) || n <= 0) {
        console.log("Please provide a valid positive integer.");
        return false;
    }
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) {
                sum += n / i;
            }
        }
    }
    const isPerfect = sum === n;
    if (isPerfect) {
        console.log(`${n} is a perfect number.`);
    } else {
        console.log(`${n} is not a perfect number.`);
    }

    return isPerfect;
}


pn(28);