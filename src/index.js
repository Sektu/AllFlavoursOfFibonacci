const fs = require('fs');
const fibos = require('./fibos');


function addResult(data, functionName, number, duration) {
    if(!data[functionName]) {
        data[functionName] = {};
    }

    if(!data[functionName][number]) {
        data[functionName][number] = [];
    }

    data[functionName][number].push(duration);
}

const filePath = 'src/data.json';

const res = fs.readFileSync(filePath);
const data = JSON.parse(res);

const functionName = 'fibo7';
const fibo = fibos[functionName];

const testValues = [
     0,
     1,
    // 19,
    // 19,
    // 36,
    //45,
    //55,
    //101,
    // 1000,
    // 3000,
    // 10000,
    // 20000,
    // 30000,
    // 50000,
    // 100000,
    // 200000,
    // 300000,
    // 500000,
    //1000000
];


const testValues2 = [2000000];

let duration = 0;
//for(let i = 0; i < testValues2.length; i++) {
    //const elem = testValues2[i];
    const start = new Date();
    fibo(2000000);
    //console.log(fibo(elem));
    duration = new Date() - start;
    
    //addResult(data, functionName, elem, duration);
//}

//console.log(data);
console.log('duration: ' + duration);
//fs.writeFileSync(filePath, JSON.stringify(data));

module.exports = fibos;