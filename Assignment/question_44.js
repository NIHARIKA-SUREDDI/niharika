 //Using a loop, generate the Fibonacci sequence up to the 10th term (0, 1, 1, 2, 3, 5, ...)
 let fib = [0, 1]
for (let i = 2; i < 10; i++)
 {
    fib[i] = fib[i - 1] + fib[i - 2];
 }
console.log("Fibonacci sequence up to the 10th term:", fib);
 