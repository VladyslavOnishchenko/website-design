// function names(name) {
//     if (name === "Egor") {
//         return console.log(`By ${name}`)
//     } else {
//         return console.log(`hello ${name}`);
//     }
// }
// names('john');



// function numbers(a,b){
//     if (a < b){
//         return console.log(b);
//     }else if(a > b){
//         return console.log(a);
//     }
// }
// numbers(5, 5);




// function numbers (a,b,c){
//     return (a + b) > c ? console.log("done") : console.log("bad");
// }
// numbers(3,5,45);



// function stringRevers(text) {
//     return  console.log(text.split('').reverse().join(''));
// }
// stringRevers('hello')





//№1
function subtract(a, b) {
    return console.log(a - b);
}
subtract(1, 5);


//№2
function divide(a, b){
    if(b === 0){
        return console.log("You can't divide by zero(");
    }
    return console.log(a / b)
}
divide(2, 0);


//№3
function square(number){
    return console.log(number ** 2);
}
square(8);


//№4
function isOdd(number){
    if(number % 2 === 0){
        return console.log(false);
    } else {
        return console.log(true);
    }
}
isOdd(4);


//№5
function min(a, b){
    return a < b ? console.log(a) : console.log(b);
}
min(11,2);


//№6
function isPositive(number){
    if(number > 0){
        return console.log(true);
    } else {
        return console.log("Your number is negative.");
    }
}
isPositive(-3);


//№7
function isNegative(number){
    if (number < 0){
        return console.log(true)
    }else {
        return console.log("Your number is positive.")
    }
}
isNegative(5);


//№8
function isZero(number){
    return number === 0 ? console.log(true) : console.log("Your number is not zero");
}
isZero(-32)


//№9
function absolute(number){
    if(number >= 0){
        return console.log(number);
    } else{
        return console.log(number * -1);
    }
}
absolute(-8);


//№10
function getGrade(score){
    if( score >= 90){
        return console.log("Отлично");
    } else if(score >= 70){
        return console.log("Хорошо")
    } else if(score >= 50){
        return console.log("Удовлетворительно")
    } else if(score < 50){
        return console.log("Не сдано")
    }
}
getGrade(49);
