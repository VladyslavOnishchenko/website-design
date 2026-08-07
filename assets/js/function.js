// // // function names(name) {
// // //     if (name === "Egor") {
// // //         return console.log(`By ${name}`)
// // //     } else {
// // //         return console.log(`hello ${name}`);
// // //     }
// // // }
// // // names('john');
// //
// //
// //
// // // function numbers(a,b){
// // //     if (a < b){
// // //         return console.log(b);
// // //     }else if(a > b){
// // //         return console.log(a);
// // //     }
// // // }
// // // numbers(5, 5);
// //
// //
// //
// //
// // // function numbers (a,b,c){
// // //     return (a + b) > c ? console.log("done") : console.log("bad");
// // // }
// // // numbers(3,5,45);
// //
// //
// //
// // // function stringRevers(text) {
// // //     return  console.log(text.split('').reverse().join(''));
// // // }
// // // stringRevers('hello')
// //
// //
// //
// //
// //
// // //№1 --- гуд
// // function subtract(a, b) {
// //     // return console.log(a - b);
// //     return a - b;
// // }
// // console.log(subtract(1, 55));
// //
// //
// // //№2 --- норм
// // function divide(a, b){
// //     //хм,а если -1 , -2 , -342 вставлю сюда?) Проверять нужно if b >= 0 что значит, если б большое или равно нулю
// //     if(b === 0){
// //         return console.log("You can't divide by zero(");
// //     }
// //     return console.log(a / b)
// // }
// // divide(2, -23);
// //
// //
// // //№3 --- гуд
// // function square(number){
// //     return console.log(number ** 2);
// // }
// // square(8);
// //
// //
// // //№4 --- остаток от числа  при делении  гуд
// // function isOdd(number){
// //     if(number % 2 === 0){
// //         return console.log(false);
// //     } else {
// //         return console.log(true);
// //     }
// // }
// // isOdd(4);
// //
// //
// // //№5 за тернарник - лайк
// // function min(a, b){
// //     return a < b ? console.log(a) : console.log(b);
// // }
// // min(11,2);
// //
// //
// // //№6 --- норм
// // function isPositive(number){
// //     if(number > 0){
// //         return console.log(true);
// //     } else {
// //         return console.log("Your number is negative.");
// //     }
// // }
// // isPositive(-3);
// //
// //
// // //№7 --- норм
// //
// // function isNegative(number){
// //     if (number < 0){
// //         return console.log(true)
// //     }else {
// //         return console.log("Your number is positive.")
// //     }
// // }
// // isNegative(5);
// //
// //
// // //№81 --- тут гуд, за тернарник - лайк
// // function isZero(number){
// //     return number === 0 ? console.log(true) : console.log("Your number is not zero");
// // }
// // isZero(-32)
// //
// //
// // //№9 --- гуд
// // function absolute(number){
// //     // а тут правильно сделал кста)
// //     if(number >= 0){
// //         return console.log(number);
// //     } else{
// //         return console.log(number * -1);
// //     }
// // }
// // absolute(-8);
// //
// //
// // //№10 тут норм, но рассмотрим констукцию swich case что бы не городить иф елсе --- ниже
// // function getGrade(score){
// //     if( score >= 90){
// //         return console.log("Отлично");
// //     } else if(score >= 70){
// //         return console.log("Хорошо")
// //     } else if(score >= 50){
// //         return console.log("Удовлетворительно")
// //     } else if(score < 50){
// //         return console.log("Не сдано")
// //     }
// // }
// // getGrade(49);
// //
// // // function getGrade(score) {
// // //     switch (true) {
// // //         case score >= 90:
// // //             console.log("Отлично");
// // //             break;
// // //
// // //         case score >= 70:
// // //             console.log("Хорошо");
// // //             break;
// // //
// // //         case score >= 50:
// // //             console.log("Удовлетворительно");
// // //             break;
// // //
// // //         default:
// // //             console.log("Не сдано");
// // //     }
// // // }
// // //
// // // getGrade(49);
// //
// //
// // //№11
// // function getGradeSwitch(score){
// //     switch (true){
// //         case score >= 90:
// //         console.log("Отлично");
// //             break;
// //
// //         case score >= 70:
// //             console.log("Хорошо");
// //             break;
// //
// //         case score >= 50:
// //             console.log("Удовлетворительно");
// //             break;
// //
// //         default:
// //             console.log("Не сдано");
// //
// //     }
// // }
// // getGradeSwitch(70);
// //
// //
// //
// //===========================================================================================
//
//
// //
// //
// // nums.forEach(function(num) {
// //     if(num > 2){
// //         console.log(num);
// //     }
// // })
//
// //
// //
// //
// //
// // let nums = [1,2,31,400,5,-6,47];
// // let lines = ["Bob","Charlotte", "John", "Sophia", "Jordan", "Piter", "William"];
// // let users = [
// //     {id: 1, name: "John", age: 9},
// //     {id: 2, name: "Sophia", age: 23},
// //     {id: 3, name: "Jordan", age: 52},
// //     {id: 4, name: "Piter", age: 94},
// //     {id: 5, name: "Max", age: 12},
// //     {id: 6, name: "John", age: 14},
// // ];
// //
// //
// // //№1
// // let plusOne = nums.map(function(num) {
// //     return num + 1;
// // })
// // console.log(plusOne);
// //
// //
// // //№2
// // let multiplyByTwo = nums.map(function(num){
// //     return num * 2;
// // })
// // console.log(multiplyByTwo);
// //
// //
// // //№3
// // let convertToString = nums.map(function(num){
// //     return num.toString();
// // })
// // console.log(convertToString);
// //
// //
// // //№4
// // let lineLength = lines.map(function(line){
// //     return line.length;
// // })
// // console.log(lineLength);
// //
// //
// // //№5
// // let evenNumbers = nums.filter(function(num){
// //    return num % 2 === 0 ? num : false;
// // })
// // console.log(evenNumbers);
// //
// //
// // //№6
// // let moreThanTen = nums.filter(function(num){
// //     return num > 10 ? num : false;
// // })
// // console.log(moreThanTen);
// //
// //
// // //№7
// // let lineLongerThanFive = lines.filter(function(line){
// //     return line.length > 5 ? line : false;
// // })
// // console.log(lineLongerThanFive);
// //
// //
// // //№8
// // let firstEvenNumber = nums.find(function(num){
// //     return num % 2 === 0 ? num : false;
// // })
// // console.log(firstEvenNumber);
// //
// //
// // //№9
// // let whereUserId = users.find(function(user){
// //     return user.id === 3;
// // })
// // console.log(whereUserId);
// //
// //
// // //№10
// // let whereUserName = users.find(function(user){
// //     return user.name === "John";
// // })
// // console.log(whereUserName);
// //
// //
// // //№11
// // let isThereNumber = nums.includes(1)
// // console.log(isThereNumber);
// //
// //
// // //№12
// // let  leastOneNegative = nums.some(function(num){
// //     return num < 0 ? num : false;
// // })
// // console.log(leastOneNegative);
// //
// //
// // //№13
// // let allPositive = nums.every(function(num){
// //     return num > 0 ? num : false;
// // })
// // console.log(allPositive);
// //
// //
// // //№14
// // nums.forEach(function(num){
// //     console.log(num)
// // })
// //
// //
// // //№15
// // let sumOfAll = nums.reduce(function(sum, num){
// //     return sum + num;
// // }, 0)
// // console.log(sumOfAll);
// //
// //
// // //№16
// // let maxNumber = nums.reduce(function(accumulator,num){
// //     return Math.max(accumulator, num);
// // }, -Infinity);
// // console.log(maxNumber)
// //
// //
// // //№17
// // let setOfWords = lines.join(", ");
// // console.log(setOfWords);
// //
// //
// // //№18
// // let ascendingOrder = nums.sort((a, b) => a - b);
// // console.log(ascendingOrder);
// //
// //
// // //№19
// // let alphabeticalOrder = lines.sort();
// // console.log(alphabeticalOrder);
// //
// //
// // //№20
// // let usersInOrder = users.sort((a, b) => a.age - b.age);
// // console.log(usersInOrder);
//
//
// //=============================================================================================
//
// //№1
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
//
// //№2
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
//
// //№3
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
//
// //№4
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }
//
// //№5
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
// }
// console.log(sum);
//
// //№6
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
//
// //№7
// let e = 10;
// while (e >= 1) {
//     console.log(e);
//     e--;
// }
//
// //№8
// let k = 1;
// while (k <= 30) {
//     if (k % 3 === 0) {
//         console.log(k);
//     }
//     k++;
// }
//
// //№9
// let g = 1;
// let gSum = 0;
// while (g <= 100) {
//     g++;
//     gSum = gSum + g;
// }
// console.log(gSum);
//
// //№10
// let h = 1;
// while (h <= 50) {
//     if (h % 5 === 0) {
//         console.log(h);
//     }
//     h++;
// }
//
// //№11
// for (let i = 1; i <= 10; i++) {
//     square = i ** 2;
//     console.log(square);
// }
//
// //№12
// for (let i = 1; i <= 10; i++) {
//     cube = i ** 3;
//     console.log(cube);
// }
//
// //№13
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         mbe = j * 8;
//
//     }
//     console.log(`8 * ${i} = ${mbe}`);
// }
//
// //№14
// let m = 1;
// let mSum = 0;
// while (m <= 20) {
//     if (m % 2 === 0) {
//         mSum = mSum + m;
//     }
//     m++;
// }
// console.log(mSum);
//
// //№15
// for (let i = 1; i <= 30; i++) {
//     console.log(i % 3 === 0 ? 'Fizz' : i);
// }

























//
//
//
// const arr = [ false, 2 , 3.14, null, undefined ];
// const newArray = [];
//
// for(let i = 0; i < arr.length; i++){
//
//     arr[i] ? newArray.push(arr[i]) : null;
// }
// console.log(newArray);
//

//======================================================================================================


//№1
const arr = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);

// arr.forEach((item) =>{
//     sum += item;
// })


//№2
const numbers = [4, 8, 1, 10, 3];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    numbers[i] > max ? max = numbers[i] : max ;
}
console.log(max);


//№3
const num = [4, 8, 1, 10];
let min = num[0];

let i = 0;
while (i < num.length) {
    num[i] < min ? min = num[i] : min;
    i++;
}
console.log(min);


//№4
const array = [1, 2, 4, 5, 8];
let evenNumbers = 0;
//
// for (let i = 0; i < array.length; i++) {
//     array[i] % 2 === 0 ? evenNumbers++ : evenNumbers;
// }
// console.log(evenNumbers);

array.forEach((num) => {
    if (num % 2 === 0) {
        evenNumbers += 1;
    }
})
console.log(evenNumbers);


//№5
const n = [1,2,3];
let reversN = [];

for (let i = n.length; i >= 0; i--) {
    reversN.push(n[i]);
}
console.log(reversN);




