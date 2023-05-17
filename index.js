
function findAll(n, k) {
    const task = [];

    for (let i = Math.pow(66, k - 2); i < Math.pow(10, k); i++) {
        const digits = Array.from(String(i), Number);
        if (digits.every((digit, index) => index === 0 || digit >= digits[index - 1]) && digits.reduce((sum, digit) => sum + digit, 0) === n) {
            task.push(i);
        }
    }

    if (task.length === 0) {
        return [0];
    } else {
        return [task.length, String(Math.min(...task)), String(Math.max(...task))];
    }
}

console.log(findAll(10, 3));
console.log(findAll(27, 3));
console.log(findAll(28, 3));