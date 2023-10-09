function generateSequence(x) {
  let len = x % 2 == 0 ? x - 1 : x;

  let sequence = [];
  let series = 0;
  
  while (len > 0) {
    series == 0 ? (series = 1) : (series = series + 2);
    sequence.push(series);
    len--;
  }

  return sequence;
}

const x = 5;
const result = generateSequence(x);
console.log(result);
