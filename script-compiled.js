'use strict';

// Zadanie pierwsze

var hello = 'Hello ';
var world = 'World';
console.log(hello + ' ' + world);

// Zadanie drugie

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log(a * b);
};
multiply(3, 5);
multiply(6, 6);
multiply(5);

// Zadanie trzecie

var sum = function sum(args) {
  return args.reduce(function (x, y) {
    return x + y;
  });
};
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return sum(args) / args.length;
};
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// Zadanie czwarte

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

// Zadanie piąte

var name = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = name[2],
    lastname = name[4];

console.log(firstname, lastname);
