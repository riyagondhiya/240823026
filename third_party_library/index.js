// const add=require("./add.js");
// console.log(add(11,22));
// console.log(add(19,12));

numbers = [64, 34, 25, 12, 22, 11, 90]
n = len(numbers)

print("Original list:", numbers)

for i in range(n):
    for j in range(0, n - i - 1):
        if numbers[j] > numbers[j + 1]:
            # Swap elements
            numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]

print("Sorted list:", numbers)
