const fibos = {
    //probably the worst approach - recursive
    fibo1: (number) => {
        function fibo(number) {
            if (number === 0) {
                return 0;
            } else if (number === 1) {
                return 1;
            } else {
                return fibo(number - 1) + fibo(number - 2);
            }
        };
        return fibo(number);
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
    //the same as above, but with BigInt as results, because i've touched infinity :D
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
    //JavaScript heap out of memory
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
    },
    //no lists or maps, just BigInts
    fibo7: (number) => {
        let prev2 = BigInt(0);
        let prev1 = BigInt(1);
        let current;

        if(number === 0) {
            return prev2;
        }
        else if(number === 1) {
            return prev1;
        }
        else {
            for(let i = 2; i <= number; i++) {
                current = prev2 + prev1;
                prev2 = prev1;
                prev1 = current;
            }
            return prev1;
        }
    }
}

module.exports = fibos;