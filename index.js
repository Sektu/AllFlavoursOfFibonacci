var fs = require('fs');


const fibos = {
    //probably the worst approach - recursive
    fibo1: (number) => {
        if (number === 0) {
            return 0;
        } else if (number === 1) {
            return 1;
        } else {
            return fibo1(number - 1) + fibo1(number - 2);
        }
    },
    //much better, arrays reading is pretty fast
    fibo2: (number) => {
        const result = [0, 1];
        if(number === 0) {
            return result[0];
        }
        else if(number === 1) {
            return result[1];
        }
        else {
            for(let i = 2; i <= number; i++) {
            result.push(result[i-1] + result[i-2]);
            }
            return result[number];
        }
    },
    //plain js object, similar to map, reading faster that arrays
    fibo3: (number) => {
        let result = {
            "0": 0,
            "1": 1
        };
    
        if(number === 0) {
            return result[0];
          }
        else if(number === 1) {
            return result[1];
        }
        else {
            for(let i = 2; i <= number; i++) {
                result = {...result, [i]: result[i-1] + result[i-2]};
              }
            return result[number];
        }
    },
    //even faster approach, build-in Map
    fibo4: (number) => {
        const result = new Map([[0, 0], [1, 1]]);

        if(number === 0 || number === 1) {
            return result.get(number);
        }
        else {
            for(let i = 2; i <= number; i++) {
                result.set(i, result.get(i-1) + result.get(i-2));
            }
            return result.get(number);
        }
    },
    //the same as above, but with BigInt as results, because i've touched infinity :D, BigInts seems faster than numbers
    fibo5: (number) => {
        const result = new Map([[0, BigInt(0)], [1, BigInt(1)]]);
        if(number === 0 || number === 1) {
            return result.get(number);
        }
        else {
            for(let i = 2; i <= number; i++) {
                result.set(i, result.get(i-1) + result.get(i-2));
            }
            return result.get(number);
        }
    },
    //now i reached end of memory, so previous version with another fix, clearing memory
    fibo6: (number) => {
        const result = new Map([[0, BigInt(0)], [1, BigInt(1)]]);
        if(number === 0 || number === 1) {
            return result.get(number);
        }
        else {
            for(let i = 2; i <= number; i++) {
                const prev1 = result.get(i-1);
                const prev2 = result.get(i-2);
                result.clear();
                result.set(i-1, prev1);
                result.set(i, prev1 + prev2);
            }
            return result.get(number);
        }
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
}

const filePath = 'data.json';

const res = fs.readFileSync(filePath);
const data = JSON.parse(res);

//

const functionName = 'fibo6';
const fibo = fibos[functionName];

const testValues = [
    0,
    1,
    19,
    45,
    100,
    1000,
    3000,
    10000,
    20000,
    30000,
    50000,
    100000,
    200000,
    300000,
    500000,
    1000000
]


for(let i = 0; i < testValues.length; i++) {
    const start = new Date();
    fibo(testValues[i]);
    const duration = new Date() - start;
    
    addResult(data, functionName, testValues[i], duration);
}

console.log(data);
fs.writeFileSync(filePath, JSON.stringify(data));
