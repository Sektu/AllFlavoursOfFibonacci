var fs = require('fs');

const filePath = 'data.json';

const res = fs.readFileSync(filePath);
const data = JSON.parse(res);

//

const functionName = 'fibo1';
const number = 44;

const start = new Date();
console.log("start: " + start);
const result1 = fibo1(number);
const end = new Date();
console.log("end: " + end);
const duration = end - start;

console.log("result1: " + result1);
console.log("duration: " + duration);



//

addResult(data, functionName, number, duration);
fs.writeFileSync(filePath, JSON.stringify(data));


function fibo1(number) {
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else {
    return fibo1(number - 1) + fibo1(number - 2);
  }
}

function fibo2(number) {
  const result = [0, 1];

  if(number === 0) {
    return result[0];
  }
  else if(number === 1) {
    return result[1];
  }
  else {
    //10
    for(let i = 2; i <= number; i++) {
      result.push(result[i-1] + result[i-2]);
    }
    return result[number];
  }
}

function addResult(data, functionName, number, duration) {

    if(!data[functionName]) {
        data[functionName] = {};
    }

    if(!data[functionName][number]) {
        data[functionName][number] = [];
    }

    data[functionName][number].push(duration);
    console.log(data);
}