/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/



/* Tests for equality and inequality with strings
let myName: string = `FARIHA`;
console.log(myName == `FARIHA`); // true
console.log(myName !== `FARIHA`); // false 

let lang: string =`ENGLISH`;
console.log(lang ==`ENGLISH`);
console.log(lang !== `ENGLISH`);


Tests using the lower case function
let car: string =  `toyota`;
console.log(car == `toyota`); // true
console.log(car !== `toyota`) // false

let vehicle: string =  `train`;
console.log(vehicle == `train`);
console.log(vehicle !== `train`);


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num: number = 50;
console.log(num == 50);
console.log(num !== 50);

let num1: number = 1000;
console.log(num1 == 1000);
 console.log(num1 !== 1000);

let num2: number = 100;
console.log(num2 > 50) //true
console.log(num2 > 200)// false
console.log(num2 < 200)// true
console.log(num2 < 99)// false
console.log(num2 >= 100)//true
console.log(num2 >= 500)// false
console.log(num2 <= 100)//true
console.log(num2 <= 50)//false */


//Tests using "and" and "or" operators
//             &&         ||

//let numb: number = 10;
//let numb1: number = 5;
//console.log(numb >9 && numb1 < 4)
//            true      false



/*let numb2: number = 10;
let numb3: number = 5;
console.log(numb2 >9 || numb3 < 4)
//            true      false*/

//Test whether an item is in a array

let array: number[] = [2,3,4];
console.log(array.includes(3));

//Test whether an item is not in a array
let strArray: string[] = [`fari`,`farsia`,`ali`];
console.log(strArray.includes("naheed"));