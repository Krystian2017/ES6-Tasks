// Zadanie pierwsze

const hello = 'Hello ';
const world = 'World';
console.log(`${hello} ${world}`);

// Zadanie drugie

const multiply = (a, b = 1) => console.log(a * b);
multiply(3, 5);
multiply(6, 6);
multiply(5);

// Zadanie trzecie

const sum = (args) => args.reduce((x, y) => x + y);
const average = (...args) => sum(args) / args.length;
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// Zadanie czwarte

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

// Zadanie piąte

const name = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = name;
console.log(firstname, lastname);