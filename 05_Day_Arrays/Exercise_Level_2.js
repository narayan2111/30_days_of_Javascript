// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// const countries = require(`./countries`);
// const web_techs = require(`./web_techs`);
// console.log(`Countries:`,countries);
// console.log(`Web Techs:`,web_techs);

// First remove all the punctuations and change the string to array and count the number of words in the array

// let text = `I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.`;
// const cleanText = text.replace(/[.,]/g, '');
// let words = cleanText.split(' ');
// console.log(words);
// console.log(words.length);

//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
if(!shoppingCart.includes(`Meat`))
    shoppingCart.unshift(`Meat`);
//console.log(shoppingCart);
// add Sugar at the end of you shopping cart if it has not been already added
if(!shoppingCart.includes(`Sugar`))
    shoppingCart.push(`Sugar`);
//console.log(shoppingCart);
// remove 'Honey' if you are allergic to honey
const allergictoHoney = true;
if(allergictoHoney)
{
    const indexofHoney = shoppingCart.indexOf(`Honey`);
    if(indexofHoney!==-1)
        shoppingCart.splice(indexofHoney,1);
}
const indexofTea = shoppingCart.indexOf(`Tea`);
if(indexofTea!==-1)
    shoppingCart[indexofTea] = `Green Tea`;


// modify Tea to 'Green Tea'
//console.log(shoppingCart);


//The following is an array of 10 students ages:
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Step 1: Sort the array
const sortedAges = ages.slice().sort((a, b) => a - b);

// Step 2: Find min and max age
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

// Step 3: Find median age
const middleIndex = Math.floor(sortedAges.length / 2);
const medianAge =
  sortedAges.length % 2 === 0
    ? (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2
    : sortedAges[middleIndex];

// Step 4: Find average age
const sumAges = sortedAges.reduce((sum, age) => sum + age, 0);
const averageAge = sumAges / sortedAges.length;

// Step 5: Find range of ages
const rangeOfAges = maxAge - minAge;

// Step 6: Compare min-average and max-average values
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

console.log("Sorted Ages:", sortedAges);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Range of Ages:", rangeOfAges);
console.log("Comparison Result:", diffMinAverage, diffMaxAverage);

