//Part 1
//A number divisible by 3 is Fizz  
    // for( let i = 1; i <= 100; i++) {
        // console.log(i);
        // if(i % 3 === 0) {
            // console.log("Fizz");
        // }
    // }
    // console.log('----------')

// A number divisible by 5 is Buzz
// for( let i = 1; i <= 100; i++) {
    // console.log(i);
    // if(i % 5 ===0) {
        // console.log("Buzz");
    // }
// }  
// console.log('----------')

//Number divisible by 3 and 5 is Fizz Buzz
// for( let i = 1; i <= 100; i++) { 
    // console.log(i);
    // if(i % 3 === 0 && i % 5 === 0) {
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
// let n = 51;
// function to see if it's a prime number
// function isPrime(num) {
    // for(let i = 2; i < num; i++) {
        // if(num % i ===0) {
            // return false;
        // }
    // }
    // return num > 1;
// }

//i didn't get any return with 10, so it's not a prime number
//next prime number
// while( true) {
    // if(isPrime(n)){
        // console.log("Next prime number:", n);
        // break
    // }
    // n++
// }
//11 is the next prime number
//going to make n = 12, next prime is 13
//with n = 51, 53 is the next number of 
//seems to be only odd numbers

//Part 3
//Loopy CVS data
// const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

//split the string into rows
// const rows = csvString.split("\n");

//to make sure each row is seperated
// rows.forEach(row => {
    //splitting the rows into columns
    // const columns = row.split(",");
    //run console to log each row of data
    // console.log(columns);
    //seeing if this way also runs correctly
    // console.log(cell1, cell2, cell3, cell4);
    //it doesn't
// })

//trying this now that the one above worked
// const csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
// const rows = csvString.split("\n");
// rows.forEach(row => {
    // const columns = row.split(",");
    // console.log(columns);
// })