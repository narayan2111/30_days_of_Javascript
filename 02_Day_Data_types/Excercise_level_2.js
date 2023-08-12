/*// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

let string = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
console.log(string)

let anotherString = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
console.log(anotherString)

/*
3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
5. Check if 'on' is found in both python and jargon
6. I hope this course is not full of jargon. Check if jargon is in the sentence.
7. Generate a random number between 0 and 100 inclusively.
8. Generate a random number between 50 and 100 inclusively.
9. Generate a random number between 0 and 255 inclusively.
10. Access the 'JavaScript' string characters using a random number.


let num = 10;
console.log(typeof(num),num)
let float = 9.8
console.log(parseFloat(float)==10)
console.log(Math.round(float))
let str1 = `python`
let str2 = 'jargon'
let str3 = `on`
console.log(str1.match(str3),str2.match(str3))
let str4  = `I hope this course is not full of jargon`
console.log(str4.search(`jargon`))

let randomnumber = Math.random()
let number1 = randomnumber
console.log(Math.floor(number1*(100-50 + 1))+50)

const str = `Javascript`
const randomindex = Math.floor(Math.random()*str.length)
const readcharacter = str[randomindex]
console.log(readcharacter)

/*
11. Use console.log() and escape characters to print the following pattern.
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125


let i = 1;
console.log(`${i} `+Math.pow(i,0)+' '+Math.pow(i,1)+' '+Math.pow(i,2)+' '+Math.pow(i,3));
i =2;
console.log(`${i} `+Math.pow(i,0)+' '+Math.pow(i,1)+' '+Math.pow(i,2)+' '+Math.pow(i,3));
i=3;
console.log(`${i} `+Math.pow(i,0)+' '+Math.pow(i,1)+' '+Math.pow(i,2)+' '+Math.pow(i,3));
i=4;
console.log(`${i} `+Math.pow(i,0)+' '+Math.pow(i,1)+' '+Math.pow(i,2)+' '+Math.pow(i,3));
i=5;
console.log(`${i} `+Math.pow(i,0)+' '+Math.pow(i,1)+' '+Math.pow(i,2)+' '+Math.pow(i,3));
*/
//Use substr to slice out the phrase because because because from the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
let String = `You cannot end a sentence with because because because is a conjunction`;
let newStr = /because/gi
console.log(String.match(newStr));

const sentence = 'You cannot end a sentence with because because because is a conjunction';
const targetPhrase = 'because because because';

const startIndex = sentence.indexOf(targetPhrase);
const endIndex = startIndex + targetPhrase.length;

const extractedPhrase = sentence.substr(startIndex, endIndex - startIndex);

console.log(extractedPhrase);

