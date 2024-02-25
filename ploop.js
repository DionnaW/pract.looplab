//Part 1
//A number divisible by 3 is Fizz  
    // for( let i = 1; i <= 100; i++) {
        // if(i % 3 ===0) {
            // console.log("Fizz");
        // }
    // }
    // console.log('----------')

//A number divisible by 5 is Buzz
// for( let i = 1; i <= 100; i++) {
    // if(i % 5 ===0) {
        // console.log("Buzz");
    // }
// }  
// console.log('----------')

//Number divisible by 3 and 5 is Fizz Buzz
// function fizzBuzz(number) {
    // if(number % 3 === 0 && number % 5 === 0) {
        // console.log("Fizz Buzz")
    // }
// }
// console.log('----------')

//Number not divisible by 3 or 5; log the number
// function checkDivisibility(number) {
    // if(number % 3 !== 0 && number % 5 !== 0) {
        // console.log(number)
    // }
// }
// 
//Part 2
//find a number; using number 10
let n = 51;
//function to see if it's a prime number
function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i ===0) {
            return false;
        }
    }
    return num > 1;
}

//i didn't get any return with 10, so it's not a prime number
//next prime number
while( true) {
    if(isPrime(n)){
        console.log("Next prime number:", n);
        break
    }
    n++
}
//11 is the next prime number
//going to make n = 12, next prime is 13
//with n = 51, 53 is the next number of 
//seems to be only odd numbers

//Part 3
//Loopy CVS data
ID,Name,Occupation,Age42,Bruce,Knight,4157,Bob,Fry Cook,1963,Blaine,Quiz Master,5898,Bill,Doctor’s Assistant,26