// const arr = Array();
// console.log(arr);
// const arr1 = [];
// console.log(arr1);

// const arr = [1,2,3,4,5,6];
// console.log(`Array:`,arr);

// console.log(`Array Size :`,arr.length);
// let startIndex = 0;
// console.log(`Array first Element:`,arr[0]);

// var lastIndex = arr.length-1;
// var mid = parseInt((lastIndex+startIndex)/2);
// console.log(`Array middle element:`, arr[mid]);
// console.log(`Array last element:`,arr[lastIndex]);

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

// const arr = [{Name:'Narayan'},{course:`MCA`},{Age:23},{Session:`2023-24`},{City:`Greater Noida`},{College_Name:`GCET, Greater Noida`}];
// console.log(arr.length);
// console.log(arr);
// console.log(arr[0]);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const Companies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`];

// Print the array using console.log()

//console.log(Companies);

// Print the number of companies in the array
let len = Companies.length;
// console.log(len);
//Print the first company, middle and last company
let startIndex = 0;
let lastIndex = len-1;
let mid = parseInt((lastIndex-startIndex)/2);
// console.log(Companies[startIndex]);
// console.log(Companies[mid]);
// console.log(Companies[lastIndex]);
// //Print out each company
// console.log("\n\n");
// Companies.forEach(element => {
//     console.log(element);
// });

//Change each company name to uppercase one by one and print them out

// Companies.forEach(element => {
//    console.log(element.toUpperCase()) ;
// });

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// const sentence = Companies.slice(0, -1).join(', ') + ' and ' + Companies[Companies.length - 1] + ' are big IT companies.';
// console.log(sentence);
//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// let companytoFind = `IBM`;
// let found  = false;
// for (const company of Companies) {
//     if(company === companytoFind)
//     {
//         found  = true;
//         break;
//     }
// }if(found)
// {
//     console.log(`${companytoFind} is found in the list of companies`)
// }
// else{
//     console.log(`${companytoFind} is not found in the list of companies`);
// }


// //Filter out companies which have more than one 'o' without the filter method

// let result = [];
// for (const company of Companies) {
//     let count = 0;
//     for (const char of company) {
//         if(char === 'o')
//         {
//             count++;
//             if(count>1)
//             {
//                 result.push(company);
//                 break;
//             }
//         }

//     }
    
// }
// console.log(result);

//Sort the array using sort() method

// Companies.sort();
// // console.log(Companies);
// Companies.forEach(element => {
//     console.log(element);
// });

// //Reverse the array using reverse() method
// Companies.reverse();
// console.log(Companies);

// //Slice out the first 3 companies from the array
// console.log(Companies.slice(0,3));


//Slice out the last 3 companies from the array
// console.log(Companies.slice(4,len));

// //Slice out the middle IT company or companies from the array
// console.log(Companies.slice(mid));
// //Remove the first IT company from the array
//Companies.splice(0,1);
//console.log(Companies);

//Remove the middle IT company or companies from the array
// Companies.splice(3,1)

// //Remove the last IT company from the array
// Companies.pop();
// console.log(Companies);
//Remove all IT companies
Companies.splice(0);
console.log(Companies);
