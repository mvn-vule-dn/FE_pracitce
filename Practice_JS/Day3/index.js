//exercise 1
function exercise1() {
    const MAX_SIZE = 25 * 1024 * 1024;
    let title = "Hello World";
    title = "Hello ES6";
}

//exercise 2
function exercise2() {
    let user = { name: "David" };
    let card = { amount: 7, product: "Bar", unitprice: 42 };
    let message = `Hello ${user.name}
                   want to buy ${card.amount} ${card.product} for
                   a total of ${card.amount * card.unitprice} buck?`;
}

//exercise 3
function foo(x, y, ...params) {
    return (x + y) * params.length;
}
foo(1, 2, 'hello', true, 7) === 9;

//exercise 4
function sum(x, y = 7, z = 42) {
    return x + y + z;
}
console.log(sum(2)); //51
console.log(sum()); //x is undefined

//exercise 5
function exercise5() {
    let evens = [1, 2, 3, 4, 5, 6];
    let odds = evens.map(v => { return v + 1; });
    let pairs = evens.map(v => { return { even: v, odd: v + 1 }; });
    let nums = evens.map((v, i) => { return v + i; });
    let fives = [];
    nums.forEach(v => {
        if (v % 5 === 0) {
            fives.push(v);
        }
    });
}

//exercise 6
let Shape = class {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

//exercise 8
function showMessAfterTimeout(who, timeout) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            return resolve(`Hi ${who}!`);
        }, timeout);
    });
}
showMessAfterTimeout('Foo', 100)
    .then((msg1) => {
        return showMessAfterTimeout('Bar', 200).then((msg) => {
            return msg1 + ' ' + msg;
        });
    })
    .then((msg) => console.log(`Finish after 300ms: ${msg}`));

//exercise 9
function exercise9() {
    const array = [1, 2, 3, 4, 5];
    for (let i in array) {
        console.log(i);
    }

    const array1 = ['a', 'b', 'c'];
    for (let element of array1) {
        console.log(element);
    }

    const array2 = [5, 12, 8, 130, 44];
    const isLargeNumber = (element) => element > 13;
    console.log(array2.findIndex(isLargeNumber));
}