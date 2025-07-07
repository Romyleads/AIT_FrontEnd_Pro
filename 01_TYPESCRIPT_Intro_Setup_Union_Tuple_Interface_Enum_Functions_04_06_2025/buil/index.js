"use strict";
let x = 10;
console.log(x);
let y = 11;
// y = "12"; // error
let RomanName = "Roman";
let isInVillage = true;
const myGender = "male";
let eltonGender = "non-binary";
eltonGender = 'male';
// Массивы
const studentsNames = ["Anna", "Bob", "Charlie"];
studentsNames.push("Eve");
const myInfo = [1, "Roman", true];
const johnInfo = [2, "John", false];
const roman = {
    name: "Roman",
    age: 30
};
const blackbeard = {
    name: "Black Beard",
    age: 50,
    isDrunk: true,
    weapons: ["pistol", "saber"],
    parrot: { nickname: "Ra" },
};
const blackbeard_joung = {
    name: "Black Beard",
    age: 50,
    isDrunk: true,
    weapons: ["pistol", "saber", "saber"],
};
// Functions
function sum(a, b) {
    return a + b;
}
function repeatString(str, count) {
    return str.repeat(count);
}
repeatString("Bla", 3); // BlaBlaBla
// Arrow functions
const multiply = (x, y) => x + y; // строчная стрелочная функция 
const multiply2 = (x, y) => { return x + y; }; // блочная стрелочная функция
// Напишите функцию, которая принимает массив стрингов и слово и возвращает boolean, функция ищет есть ли указанное слово в массиве
const hasWord = (words, word) => words.includes(word);
// Пример
const words = ["apple", "banana", "cherry"];
const hasApple = hasWord(words, "apple");
// вариант 2
function hasWord2(arr, searhWord) {
    return arr.includes(searhWord);
}
function hasWord3(arr, searchWord) {
    //   return arr.some((el) => el === searchWord);
    return arr.includes(searchWord);
}
const fruits = ["apple", "orange", "banana"];
console.log(hasWord3(fruits, "orange")); // true
console.log(hasWord3(fruits, "mango")); // false
// void
function printMessage(message) {
    console.log(message);
}
let myName = "Roman";
myName = null;
myName = undefined;
// Сложные типы
// почти такой же как и any
// сами можем не использовать, но может попасть во время разработки
let b;
b = "apple";
// преобразование - указываем какой тип мы хотим получить
const res2 = b.length;
// вот это в стиле java
const res3 = b.length;
// Generics
function universalPrint(arg) {
    console.log(arg);
}
universalPrint("Roman"); // явным образом указываем тип
universalPrint(10); // явным образом указываем тип
universalPrint("Roman"); // не явным образом указываем тип
// Enum
var Days;
(function (Days) {
    Days["Monday"] = "monday";
    Days["Tuesday"] = "tuesday";
    Days["Wednesday"] = "wednesday";
    Days["Thursday"] = "thursday";
    Days["Friday"] = "friday";
    Days["Saturday"] = "saturday";
    Days["Sunday"] = "sunday";
})(Days || (Days = {}));
console.log(Days.Monday);
// переменная: Тип = Значение
const day = Days.Friday;
