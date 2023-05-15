function fibonacci(n: number): number {
    if (n <= 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function sum(num: number): number {
    let result: number = 0;
    for (let i = 0; i < num; i++) {
        result += fibonacci(i)
    }
    return result;
}

console.log(sum(3));
