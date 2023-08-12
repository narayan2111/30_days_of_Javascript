/*/ Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
// Concatenating using addition operator
let fullName = firstName + space + lastName // concatenation, merging two string together.
console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
console.log(personInfoOne)
// Concatenation: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

let a =5
let b = 6
console.log(`Sum of ${a} and ${b} is ${a+b}`)
console.log(`${a} is greater than ${b}: ${a>b}`)
let js = `javascript is a object oriented programming language`
console.log(js.length)
console.log(js[9])
console.log(js.toUpperCase())
let LOWERCASE = `HELLO WORLD`
console.log(LOWERCASE.toLowerCase())
console.log(js.substr(3,6))
console.log(js.substring(3,6))
let string = `   Welcome guys  `
console.log(string)
console.log(string.length)
console.log(string.trim())
console.log(string.includes('Guys'))
console.log(string.replace(`Welcome`,`Hii`))
let NewString = `Lakshmi Narayan Dwivedi`
let tempString = /Narayan/
console.log(NewString.match(tempString))
console.log(string.repeat(4))
*/

let number = '10'
let num = parseFloat(number)
console.log(num)