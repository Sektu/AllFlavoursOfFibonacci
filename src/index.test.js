const fibos = require('./fibos');

const fiboResults = {
    "0": 0,
    "1": 1,
    "2": 1,
    "14": 377,
    "19": 4181,
    "36": 14930352,
};

const fiboResultsAdvanced = {
    "45": 1134903170n,
    "55": 139583862445n,
    "101": 573147844013817084101n,
    "1000": 43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875n
}

test('tests of fibo1', () => {
    Object.keys(fiboResults).forEach((key) => {
        expect(fibos.fibo1(parseInt(key))).toBe(fiboResults[key]);
    });
});

test('tests of fibo2', () => {
    Object.keys(fiboResults).forEach((key) => {
        expect(fibos.fibo2(parseInt(key))).toBe(fiboResults[key]);
    });
});

test('tests of fibo3', () => {
    Object.keys(fiboResults).forEach((key) => {
        expect(fibos.fibo3(parseInt(key))).toBe(fiboResults[key]);
    });
});

test('tests of fibo4', () => {
    Object.keys(fiboResults).forEach((key) => {
        expect(fibos.fibo4(parseInt(key))).toBe(fiboResults[key]);
    });
});

test('tests of fibo5', () => {
    Object.keys(fiboResults).forEach((key) => {
        expect(fibos.fibo5(parseInt(key))).toBe(BigInt(fiboResults[key]));
    });
    Object.keys(fiboResultsAdvanced).forEach((key) => {
        expect(fibos.fibo5(parseInt(key))).toBe((fiboResultsAdvanced[key]));
    });
});

test('tests of fibo6', () => {
    Object.keys(fiboResults).forEach((key) => {
        expect(fibos.fibo6(parseInt(key))).toBe(BigInt(fiboResults[key]));
    });
    Object.keys(fiboResultsAdvanced).forEach((key) => {
        expect(fibos.fibo6(parseInt(key))).toBe((fiboResultsAdvanced[key]));
    });
});

test('tests of fibo7', () => {
    Object.keys(fiboResults).forEach((key) => {
        expect(fibos.fibo7(parseInt(key))).toBe(BigInt(fiboResults[key]));
    });
    Object.keys(fiboResultsAdvanced).forEach((key) => {
        expect(fibos.fibo7(parseInt(key))).toBe((fiboResultsAdvanced[key]));
    });
});