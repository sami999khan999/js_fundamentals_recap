// "use strict";

// //console.log()//
// console.log("Hello World");
// // variables//
// let age = 20;
// let fullName = "Coder Boy Amzad";
// let herName = "TikTok Queen Ayesha";
// console.log(age, fullName, herName);

// //variable naming covention//
// let carBrand = "Porscha";
// let bikeBrand = "Kawasaki";
// let ram_price = 4500;
// let API_TOKEN = "ushfjiSGFASFygesDFhjsgfy";
// let $primary_os = "Windows";
// let PI = 3.1416;
// let JUMP_SPEED = 3.2;

// //varible nameong restriction//
// // let 10cars =10
// // let me&you = 'love';
// // let function = 10;
// // let false = 10;
// // let player-number = 11;
// // let Classroom = "A3";
// // let age1 = 21;
// // let age2 = 22;

// // data types: primitive and non-primitive (object)
// // primitive data types:
// // 1. number
// // 2. string
// // 3. boolean
// // 4. null
// // 5. undefined
// // 6. symbol
// // 7. bigInt

// let myNumber = 100;
// let songName = "Oniket Prantor";
// let isRaining = false;
// let pocketMoney = null;
// let carPrice;

// // typeof operator
// console.log(typeof myNumber);
// console.log(typeof songName);
// console.log(typeof isRaining);
// console.log(typeof pocketMoney);
// console.log(typeof carPrice);

// // let, const or var
// //let
// let testNumber; // declaring a variable using let keyword
// testNumber = 100; // re-assign or mutate
// console.log(testNumber);

// //const
// const carSpeed = null;

// // var
// console.log(onionPrice);
// var onionPrice = 40;
// onionPrice = 30;

// // let and const - blocked scope
// // var - function scope

// // no keyword - can not create a scope
// //likes = 150;

// // mathemetical operators (+,-,*,/,%,**)
// console.log(10 + 10);
// console.log(10 - 10);
// console.log(10 * 10);
// console.log(10 / 10);
// console.log(10 % 10);
// console.log(10 ** 10);

// //assignment operators
// let x = 10;
// x += 5;
// x -= 5;
// x *= 5;
// x /= 5;
// x **= 5;
// x++;
// x--;
// console.log(x);

// // comparison operators (>,<,>=,<=)
// console.log(10 > 20);
// console.log(10 < 20);
// console.log(20 >= 20);
// console.log(20 <= 20);

// // operator precedence
// const birthYear = 1990;
// console.log(20 > 2022 - 1990 * (10 - 30));

// // template literals
// console.log(`${herName} is fashion designer and her age is ${age + 5}`);

// // conditionals
// const mangoPrice = 160;
// const applePrice = 180;

// if (mangoPrice >= 100) {
//   console.log("Mango khabo!");
// }
// if (applePrice >= 100) {
//   console.log("apple khabo");
// } else {
//   console.log("kisui khabo na");
// }

// // type convertion and coercion
// const a = "30";
// const b = 300;

// console.log(typeof Number(a));
// console.log(typeof String(b));

// // coercion
// console.log(10 + 30 + "10");
// console.log(10 - 30 - "10");
// console.log(10 * 30 * "10");
// console.log(10 / 30 / "10");
// console.log("Ahmed" + " " + "Saif");

// // falsy values: 0, '', undefined, null, NaN

// // equality operators (==, !=, ===, !==)
// console.log(10 === "10");

// // combined boolean (&&, ||)
// const m = 20;
// const n = 20;

// // nested conditions
// if (m >= 10 && n >= 10) {
//   if (m >= 20) {
//     console.log("m is greater than 20");
//     if (n >= 25 || n % 2 === 0) {
//       console.log("n is greater than 20");
//     } else {
//       console.log("n is not greater than 20");
//     }
//   } else {
//     console.log("m is not greater than 20");
//   }
// }

// // switch case
// const color = "pink";

// switch (color) {
//   case "white":
//     console.log("amar mon sada");
//     break;
//   case "black":
//     console.log("tar mon kalo");
//     break;
//   case "blue":
//     console.log("she is my nil pori");
//     break;
//   case "red":
//     console.log("she is my lal pori");
//     break;
//   default:
//     console.log("Kono kisui na");
// }

// // expressions and statements

// // ternary operators
// const num1 = 100;
// const num2 = 200;

// const whoIsBig =
//   num1 > num2 ? console.log("num1 is big") : console.log("num2 is big");

// //function declarations
// // function ageCalculator(birthYear) {
// //   const age = 2022 - birthYear;
// //   return age;
// // }

// // console.log(ageCalculator(1995));

// // function expressions
// // const ageCalculator = function (birthYear) {
// //   const age = 2022 - birthYear;
// //   return age;
// // };

// // console.log(ageCalculator(1995));

// // arrow functions
// // const ageCalculator = (birthYear) => {
// //   const age = 2022 - birthYear;
// //   return age;
// // };

// const ageCalculator = (birthYear) => 2022 - birthYear;
// console.log(ageCalculator(1995));

// // callback
// function breadCutter(breads) {
//   return breads * 2;
// }

// function burgerMaker(breads, chickens, vegetables) {
//   const breadPieces = breadCutter(breads);
//   return `Burger is ready using ${breadPieces} bread pieces, ${chickens} chickens and ${vegetables} gram vegetables. 🍔`;
// }

// console.log(burgerMaker(10, 2, 0.35));

// // curry function
// function multiplication(a) {
//   return function (b) {
//     return function (c, x, y) {
//       return function (d) {
//         return a * b * c * d * x * y;
//       };
//     };
//   };
// }

// console.log(multiplication(1)(2)(3, 10, 20)(4));

// const multiplicationPro = (a) => (b) => (c, x, y) => (d) =>
//   a * b * c * d * x * y;

// console.log(multiplicationPro(1)(2)(3, 10, 20)(4));

// // arrays
// const numbers = [11, 22, 33, 44, 45]; //literal syntax

// const years = new Array(2020, 2021, 2022); // array function

// console.log(numbers.length);
// console.log(years.length);

// // mutate
// numbers[2] = 66;
// numbers[3] = 80;
// console.log(numbers);

// // array methods(push, pop,  shift, unshift, indexOf, includes)
// years.push(2023);
// years.push(2024);
// years.pop();
// years.pop();
// years.unshift(2019);
// years.unshift(2018);
// years.shift();
// years.shift();
// console.log(years);

// console.log(numbers.indexOf(80));
// console.log(numbers.indexOf(88));
// console.log(numbers.includes(88));
// console.log(numbers.includes(22));

// //objects
// const restuarant = {
//   restuarantName: "Spectra Burger Zone",
//   founding: 1998,
//   founder: "Mr. X",
//   setMenu: ["Burger", "Pasta", "Fajita", "Pizza", "Nachos"],

//   // foodCount: function (foods) {
//   //   return foods.length;
//   // },

//   foodCount: function () {
//     return this.setMenu.length;
//   },
// }; //object literal syntax

// console.log(restuarant.setMenu[3]);
// console.log(restuarant["restuarant" + "Name"]);

// // console.log(restuarant.foodCount(["Burger", "Pasta", "Fajita", "Nachos"]));

// console.log(restuarant.foodCount());

// const restuarant2 = restuarant;
// restuarant2.founding = 1996;
// restuarant.founder = "vv";
// console.log(restuarant);
// console.log(restuarant2);

// //for loop
// const arr = [1, 5, 3, 6, 9, 8];
// let sum = 0;

// for (let i = arr.length - 1; i >= 0; i--) {
//   sum = sum + arr[i];
// }

// console.log(sum);

// //////////////////////////////////////////////////////
// function testfunction(param) {
//   let sum = 0;
//   for (let i = 0; i < param.length; i++) {
//     sum += param[i];
//   }
//   return sum;
// }

// function diff(arr, sum) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(sum - arr[i]);
//   }
//   return newArray;
// }

// const lambda = (a) => (b) => (c) => (d) => (e) => (f) => a + b + c + d + e + f;

// const testArray = [10, 20, 33, 54, 66, 78];
// const total = testfunction(testArray);
// const newArray = diff(testArray, total);
// console.log(total);
// console.log(newArray);
// const lambdaResult = lambda(newArray[0])(newArray[1])(newArray[2])(newArray[3])(
//   newArray[4]
// )(newArray[5]);
// console.log(lambdaResult);

// =======================================================================//

// Calculate the sum of numbers from 1 to 10//
// function numberSum(N) {
//   let sum = 0;
//   for (let i = 1; i <= N; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(numberSum(10));

// =======================================================================//

//  Create a function that will convert from Fahrenheit to Celsius//
// function temperatureConverter(celsius) {
//   fahrenheit = celsius * (9 / 5) + 32;
//   return fahrenheit;
// }
// console.log(temperatureConverter(40));

// =======================================================================//

//  Create a function that will convert from Celsius to Fahrenheit//
// function temperatureConverter(fahrenheit) {
//   celsius = ((fahrenheit - 32) * 5 / 9);
//   return celsius;
// }
// console.log(temperatureConverter(98.4));

// =======================================================================//

// Calculate the sum of numbers in an array of numbers//
// const arr = [1, 5, 3, 6, 9, 8];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// =======================================================================//

// Calculate the average of the numbers in an array of numbers//
// const arr = [3, 4, 6, 2, 9, 7, 1, 8];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i] / arr.length;
// }
// console.log(sum);

// =======================================================================//

// Create a function that receives an array of numbers and returns an array containing only the positive numbers//
// function checkNumber(arryOfNumber) {
//   let arryPositiveNumber = [];

//   for (let i = 0; i < arryOfNumber.length; i++) {
//     if (arryOfNumber[i] > 0) {
//       arryPositiveNumber.push(arryOfNumber[i]);
//     }
//   }
//   return arryPositiveNumber;
// }

// let arr = [1, 2, -2, 4, -7, -100, 30];

// let output = checkNumber(arr);
// console.log(output);

// =======================================================================//

// Find the maximum number in an array of numbers//
// let arr = [1, 0, 2, -2, 4, -7, -100, 100, 30];
// let maxNumber = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxNumber) {
//     maxNumber = arr[i];
//   }
// }
// console.log(maxNumber);

// =======================================================================//

// Create a function that will merge two arrays and return the result as a new array
// function combiningArray(arr1, arr2) {
//   let mainArray = [];

//   for (let i = 0; i < arr1.length; i++) {
//     mainArray.push(arr1[i]);
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     mainArray.push(arr2[i]);
//   }
//   return mainArray;
// }

// let arrayOne = [1, 3, 4, 5, 6, 7, 2, 4];
// let arrayTwo = [4, 5, 6, 23, 7, 1, 7];

// let outputOfArray = combiningArray(arrayOne, arrayTwo);
// console.log(outputOfArray);

// =======================================================================//

// Create a function that will return a Boolean specifying if a number is prime
// function detectPrimeNumber(number) {
//   let boolOutput = false;

//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       boolOutput = true;
//       break;
//     }
//   }

//   return boolOutput;
// }

// let mainOutput = detectPrimeNumber(8);
// console.log(mainOutput);

// =======================================================================//

// * Calculate the sum of numbers from 1 to 10
// function numberSum(N) {
//   let sum = 0;
//   for (i = 0; i <= N; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(numberSum(10));

//  Create a function that will convert from Celsius to Fahrenheit
// function tempConvertion(celsius) {
//   let fahrenhite = (celsius * 9) / 5 + 32;
//   return fahrenhite;
// }
// console.log(tempConvertion(40));

//  Create a function that will convert from Fahrenheit to Celsius
// function tempConvertion(fahrenhite) {
//   let celsius = ((fahrenhite - 32) * 5) / 9;
//   return celsius;
// }
// console.log(tempConvertion(98.4));

// Calculate the sum of numbers in an array of numbers
// const arr = [2, 4, 1, 6, 9, 5, 7];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

//  Calculate the average of the numbers in an array of numbers
// const arr = [2, 8, 5, 9, 1, 4, 7];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i] / arr.length;
// }
// console.log(sum);

//  Create a function that receives an array of numbers and returns an array containing only the positive numbers
// function arr(numbers) {
//   let positiveNumber = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//       positiveNumber.push(numbers[i]);
//     }
//   }
//   return positiveNumber;
// }
// console.log(arr([3, 2, -9, 5, -1, -3, 8]));

// Find the maximum number in an array of numbers
// const arr = [2, 5, -6, -9, 3, 9, -1];
// let maxNumber = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxNumber) {
//     maxNumber = arr[i];
//   }
// }
// console.log(maxNumber);

// Create a function that will merge two arrays and return the result as a new array
// function combinearr(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     newArr.push(arr2[i]);
//   }
//   return newArr;
// }
// console.log(combinearr([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// Create a function that will return a Boolean specifying if a number is prime
// function primeNumber(number) {
//   let bulOutput = [];
//   for (let x = 0; x < number.length; x++) {
//     for (let i = 2; i <= number[x]; i++) {
//       if (number[x] % i === 0) {
//         bulOutput.push("true");
//         break;
//       } else {
//         bulOutput.push("false");
//         break;
//       }
//     }
//   }
//   return bulOutput;
// }
// const outPut = primeNumber([2, 7, 4, 9]);

// for (let i = 0; i < outPut.length; i++) {
//   console.log(outPut[i]);
// }

// function primeNUmber(number) {
//   let bulOut = "";
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       bulOut = true;
//       break;
//     } else {
//       bulOut = false;
//     }
//   }
//   return bulOut;
// }
// console.log(primeNUmber(11));

// console.log(2)
