const rows = 5;
const cols = 7;

for (let i = 1; i <= rows; i++) {
  if (i === 1 || i === rows) {
    console.log('*'.repeat(cols));
  } else {
    console.log('*' + ' '.repeat(cols - 2) + '*');
  }
}
