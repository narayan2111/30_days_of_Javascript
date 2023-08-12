// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
//2. Print the string on the browser console using console.log()
//3. Print the length of the string on the browser console using console.log()
//4. Change all the string characters to capital letters using toUpperCase() method
//5. Change all the string characters to lowercase letters using toLowerCase() method
//6. Cut (slice) out the first word of the string using substr() or substring() method
//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
//8. Check if the string contains a word Script using includes() method
   let challenge = `30 days Of Javascript`
    console.log(challenge)
    console.log(challenge.length)
    console.log(challenge.toUpperCase());
    console.log(challenge.toLowerCase())
    console.log(challenge.substr(0,1))
    console.log(challenge.substring(0,1))
    console.log(challenge.substring(3,7))
    console.log(challenge.includes(`script`))

/*9. Split the string into an array using split() method
10. Split the string 30 Days Of JavaScript at the space using split() method
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
23. Use match() method to find all the a’s in 30 Days Of JavaScript
24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
25. Use repeat() method to print 30 Days Of JavaScript 2 times

*/


let string = `Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon`
console.log(string.split(','))

let string1 = `30 days of Javascript`
console.log(string1.replace(`Javascript`, `Python`))

console.log(string1.charAt(15))
console.log(string1.charCodeAt(`J`))
console.log(string1.indexOf(`a`))
console.log(string1.lastIndexOf('a'))
let NewString = 'You cannot end a sentence with because because because is a conjunction'
console.log(NewString.indexOf(`because`))
console.log(NewString.lastIndexOf('because'))
console.log(NewString.search(`because`))
console.log(string1.trim(` `))
console.log(string1.startsWith(`30`))
console.log(string1.endsWith('Javascript'))
console.log(string1.match('a'))
let str1 = `30 days of`
let str2 = ` Javascript`
console.log(str1.concat(str2))
console.log(string1.repeat(2))









