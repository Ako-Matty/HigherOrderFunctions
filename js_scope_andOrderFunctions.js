// let codenation = (`Hello Codenation`)


// console.log (codenation)






// function greeting() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i)
//     }
// }















// const logMsg = () => {
//     console.log ("Hello codenation")

// }



// const runMultipleTimes = (funcToRun) => {

//     for(let i = 0; i < 5; i++){
//         funcToRun()
//     }
// }

// runMultipleTimes(logMsg)



// logMsg();








// Activity 2


// let numbers = [2, 6, 8, 13, 26];

// let newNumbers = numbers.map( (num) => {
//     console.log(num)
//     return num * 3;
// } )

// console.log(newNumbers)





// Activity3



const add = (a, b) => {
    return a + b;
    };
    const subtract = (a, b) => {
    return a - b;
    };
    const multiply = (a, b) => {
    return a * b;
    };
    const divide = (a, b) => {
    return a / b;
    };
    
    const doMaths = (num1) => {
    return (num2, fn) => {
    return fn(num1, num2);
    };
};

console.log (doMaths (2) (5, add) )
