//A number divisible by 3 is Fizz  
    for( let i = 1; i <= 100; i++) {
        if(i % 3 ===0) {
            console.log("Fizz");
        }
    }
    console.log('----------')

//A number divisible by 5 is Buzz
for( let i = 1; i <= 100; i++) {
    if(i % 5 ===0) {
        console.log("Buzz");
    }
}  
console.log('----------')

//Number divisible by 3 and 5 is Fizz Buzz
function fizzBuzz(number) {
    if(number % 3 === 0 && number % 5 === 0) {
        console.log("Fizz Buzz")
    }
}
console.log('----------')

//Number not divisible by 3 or 5; log the number
function checkDivisibility(number) {
    if(number % 3 !== 0 && number % 5 !== 0) {
        console.log(number)
    }
}