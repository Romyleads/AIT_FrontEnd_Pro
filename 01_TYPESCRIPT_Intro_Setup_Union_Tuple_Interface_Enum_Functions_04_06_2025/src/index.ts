let x = 10;
console.log(x);

let y: number = 11;
// y = "12"; // error
let RomanName: string = "Roman";
let isInVillage: boolean = true;

// Можем создавать более сложные типы

// union type
type Gender = "male" | "female";
const myGender: Gender = "male";

// Можем расширять типы
type ExtendedGender = Gender | "non-binary";

let eltonGender: ExtendedGender = "non-binary";

eltonGender = 'male';

type CarType = "sedan" | "cupe" | "van" | "truck";

// Массивы

const studentsNames: string[] = ["Anna", "Bob", "Charlie"];
studentsNames.push("Eve");

//studentsNames.push(11); // error - number is not a string

// Кортежи
// число, строка, boolean

type UserInfo = [number, string, boolean];
const myInfo: UserInfo = [1, "Roman", true]; 

const johnInfo: [number, string, boolean] = [2, "John", false];

// any
// any - указывает, что тип может быть любым, по возможности - any - не использовать

// Как типизировать объекты

interface User {
  name: string;
  age: number;
}

const roman: User = {
  name: "Roman",
  age: 30
}

// Создайте тип пират у которого есть следующие поля:
// isDrunk: boolean
// age: number
// weapons массив стрингов, например ["pistol", "saber"]

// parrot типа Попугай, где Попугай должен быть объектом с полями nickname {nickname: "Ra"}

// создайте типизированные переменные, используя эти типы

/*
type WeaponList = string[];

// Интерфейс попугая
interface Parrot {
  nickname: string;
}

interface Pirate {
  isDrunk: boolean;
  age: number;
  weapons: WeaponList;
  parrot: Parrot;
}

const jack: Pirate = {
  isDrunk: true,
  age: 33,
  weapons: ["pistol", "saber"],
  parrot: {
    nickname: "Ra"
  }
};

*/

interface Parrot {
  nickname: string;
} 

type Weapon = "pistol" | "saber";

interface Pirate {
name: string;
age: number;
isDrunk: boolean;
weapons: Weapon[];
parrot?: Parrot; // ? - опциональный, может быть undefined
}

const blackbeard: Pirate = {
  name: "Black Beard",
  age: 50,
  isDrunk: true,
  weapons: ["pistol", "saber"],
  parrot: {nickname: "Ra"},
};

const blackbeard_joung: Pirate = {
  name: "Black Beard",
  age: 50,
  isDrunk: true,
  weapons: ["pistol", "saber", "saber"],
};

// Functions

function sum(a: number, b: number): number {
  return a + b;
}

function repeatString(str: string, count: number): string {
  return str.repeat(count);
}

repeatString("Bla", 3); // BlaBlaBla

// Arrow functions

const multiply = (x: number, y: number): number => x + y; // строчная стрелочная функция 
const multiply2 = (x: number, y: number): number => { return x + y; } // блочная стрелочная функция

// Напишите функцию, которая принимает массив стрингов и слово и возвращает boolean, функция ищет есть ли указанное слово в массиве

const hasWord = (words: string[], word: string): boolean => words.includes(word);

// Пример

const words = ["apple", "banana", "cherry"];
const hasApple = hasWord(words, "apple"); 


// вариант 2

function hasWord2(arr: string[], searhWord: string): boolean {
  return arr.includes(searhWord);
}

function hasWord3(arr: string[], searchWord: string): boolean {
//   return arr.some((el) => el === searchWord);
    return arr.includes(searchWord);
}

const fruits = ["apple", "orange", "banana"];
console.log(hasWord3(fruits, "orange")); // true
console.log(hasWord3(fruits, "mango")); // false

// void
function printMessage(message: string): void {
  console.log(message);
}

// undefined null

type Name = string | undefined | null;
let myName: Name = "Roman";
myName = null;
myName = undefined;

// Сложные типы

// почти такой же как и any
// сами можем не использовать, но может попасть во время разработки

let b: unknown;
b="apple";

// преобразование - указываем какой тип мы хотим получить

const res2 =(b as string).length;

// вот это в стиле java

const res3 = (<string>b).length;

// Generics

function universalPrint<T>(arg: T) {
  console.log(arg);

}

universalPrint<string>("Roman"); // явным образом указываем тип
universalPrint<number>(10); // явным образом указываем тип
universalPrint("Roman"); // не явным образом указываем тип

// Enum

enum Days {
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
  Sunday = "sunday"
}

console.log(Days.Monday);
// переменная: Тип = Значение
const day: Days = Days.Friday;