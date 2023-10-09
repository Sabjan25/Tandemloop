// a=1, 1
//a=2, 1,3
//a=3 1,3,5
//a=4 1,3,5,7
function generateOddSeries(x) {
  if (x < 1) {
    return [];
  }

  const series = [];
  let currentNumber = 1;

  for (let i = 0; i < x; i++) {
    series.push(currentNumber);
    currentNumber += 2;
  }

  return series;
}
const x = 4; 
const series = generateOddSeries(x);
console.log(series);

