const n = 5; 

for (let i = 1; i <= n; i++) {
  if (i === 1 || i === n) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
  } else {
    console.log(' '.repeat(n - i) + '*' + ' '.repeat(2 * i - 3) + '*');
  }
}
