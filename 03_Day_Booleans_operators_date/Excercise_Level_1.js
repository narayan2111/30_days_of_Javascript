
// const now = new Date();
// const date = now.getDate();
// const month  = now.getMonth();
// const year = now.getFullYear();
// const hours = now.getHours();
// const minutes = now.getMinutes();
// console.log(`Date : ${date}/${month+1}/${year}\nTime : ${hours}:${minutes}`);

/*
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
2. Check if type of '10' is equal to 10
3. Check if parseInt('9.8') is equal to 10
4. Boolean value is either true or false.
5. Write three JavaScript statement which provide truthy value.
6. Write three JavaScript statement which provide falsy value.


let firstName = `Narayan`;
let lastName = `Dwivedi`;
let country = `India`;
let city = 'Prayagraj';
let age  = 23;
let isMarried = false;
let now = new Date();
let year = now.getFullYear();

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));


console.log(10=='10')

console.log(parseInt(9.8)==10)

console.log(2<3);
console.log(2<3 && 4>3);
console.log(2<3||3<2);

console.log(3<2);
console.log(3<2 && 4>3);
console.log(2>3||3<2);




//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3);
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
*/
//Find the length of python and jargon and make a falsy comparison statement.

// let python = `python`;
// let jargon = `jargon`;
// console.log(python.length!=jargon.length);

// Find out the numbers of seconds elapsed from January 1, 1970 to now.

// const secondsSinceEpoch = Math.floor(new Date().getTime() / 1000);
// console.log(secondsSinceEpoch);

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// const base = parseInt(prompt(`Enter base :`))
// const height = parseInt(prompt(`Enter Height:`));
// const area = 0.5*base*height;
// console.log(prompt(`The Area of triangle is ${area}`));

const a = parseInt(prompt(`Enter a`));
const b = parseInt(prompt(`Enter b`));
const c = parseInt(prompt(`Enter c`));
const area = a+b+c;
console.log(`The Perimeter of triangle is ${area}`);