// Exercise 1

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

  // 1. Iterate 0 to 10 using for loop, do the same using while and do while loop


// for(let i = 0; i <countries.length;i++)
// {
//     console.log(countries[i])
// }
// console.log("\n\n");
// let temp = 0;
// while(temp<countries.length)
// {
//     console.log(countries[temp]);
//     temp++;
// }

// let temp = 0;
// do
// {
//     console.log(countries[temp]);
//     temp++;
// }while(temp<countries.length);

// for (let i = 1; i <= 7; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "#";
//   }
//   console.log(line);
// }

//Using loop print the following pattern
/*
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 */

//  console.log("i\ti^2\ti^3");

//  for(let i = 1; i<=10; i++)
//  {
//   console.log(`${i}\t${i*i}\t${i*i*i}`);
//  }

 //Use for loop to iterate from 0 to 100 and print only even numbers

//  let i = 0;
//  while(i<=100)
//  {
//   if(i%2==0)
//   {
//     console.log(`${i}`);
//   }
//   i++;
//  }

 //Use for loop to iterate from 0 to 100 and print only odd numbers

//  let i = 1;
//  while(i<=100)
//  {
//   if(i%2!=0)
//   {
//     console.log(`${i}`);
//   }
//   i++;
//  }

// Use for loop to iterate from 0 to 100 and print only prime numbers

// function isPrime(num) {
//   if (num <= 1) return false; // 0 and 1 are not prime numbers
//   if (num <= 3) return true;  // 2 and 3 are prime numbers

//   if (num % 2 === 0 || num % 3 === 0) return false;

//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) return false;
//   }

//   return true;
// }

// for (let i = 0; i <= 100; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// let sum = 0;
// for(let i  = 0; i<=100; i++)
// {
//   sum += i;
// }
// //console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

// //Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let evenSum = 0;
// let oddSum = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     evenSum += i;
//   } else {
//     oddSum += i;
//   }
// }

// let sumsArray = [evenSum, oddSum];
// console.log(sumsArray);

//console.log(`The sum of all evens from 0 to 100 is ${EvenSum}. And the sum of all odds from 0 to 100 is ${OddSum}.`)

//Develop a small script which generate array of 5 random numbers
// function generateRandomArray(length) {
//   let randomArray = [];
//   for (let i = 0; i < length; i++) {
//     randomArray.push(Math.random());
//   }
//   return randomArray;
// }

// // Generate an array of 5 random numbers
// const randomNumbers = generateRandomArray(5);

// console.log(randomNumbers);

//

// function generateUniqueRandomArray(length, min, max) {
//   if (length > (max - min + 1)) {
//     throw new Error("Cannot generate unique numbers with given range and length.");
//   }

//   const uniqueArray = [];

//   while (uniqueArray.length < length) {
//     const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     if (!uniqueArray.includes(randomNum)) {
//       uniqueArray.push(randomNum);
//     }
//   }

//   return uniqueArray;
// }

// // Generate an array of 5 unique random numbers between 1 and 100
// const randomNumbers = generateUniqueRandomArray(5, 1, 100);

// console.log(randomNumbers);

//

function generateRandomId(length) {
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomId += charset[randomIndex];
  }

  return randomId;
}

// Generate a six-character random ID
const randomId = generateRandomId(6);

console.log(randomId);
