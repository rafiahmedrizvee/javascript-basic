/* let price =45;
price =50;
console.log(price);
 */
/* 
const myName = 'Rafi ahmed rizvee'
myName = 'Rizvee'

let inches = 100;
let feet =inches/12;
console.log(feet);
 */

/* 
function getFeet(inches) {
    const feet = inches / 12;
    return feet
}
var feet = getFeet(1000)
console.log(parseInt(feet));
 */

/* 
function getFeet(inches) {
    const feet = inches / 12;
    return feet
}
var feet = parseInt(getFeet(1000)) 
console.log(feet);

 */ // inches converted to feet

/* 

function  milesToKilomitters(miles) {
    var kilomitters = miles * 1.60934;
    return kilomitters

}
console.log(milesToKilomitters(108));

 */ //Miles to Kilomitters

/* 
 5 % 2 == 0
 4 % 2
 // 222 % 2 == 0 => true // boolean
 //225 % 2 == 0 => false
 const number = 1247;
 console.log(number % 2 == 0);


  */
 
/* 
function isEven(number) {
    if (number % 2 == 0) {
        return 'your input is even number'
        
    }
    return 'your input is odd number'
}

const result = isEven(54231)
console.log(result);
 */ 
// Using if statement to find odd or even number

/* 
function isOdd(number) {
    if (number % 2 == 1) {
        return "Odd number"
   
    }
    return "even number"
    
}
var output = isOdd(9);
console.log(output);

 */
// even or odd using function

/* 
let factorial =1;
for (let i = 1; i<=7; i++){

    factorial = factorial * i
 
}
console.log(factorial); */ //factorial in function



function factorial(number) {
    let fact = 1;
    for (let i = 1; i <=number; i++){
        fact = fact * i     
    }
    return fact
}

const value = factorial(20)
console.log(value);
