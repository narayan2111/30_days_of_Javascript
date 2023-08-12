// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
// Count the number of word love in this sentence.

let string = `Love is the best thing in this world. Some found their love and some are still looking for their love.`;
const word = `love`;
//const regex = new RegExp(word,`gi`);
//const matches = string.match(regex);
//const count = matches?matches.length:0;
//console.log(count);

//2. Use match() to count the number of all because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'

// let sentence = `You cannot end a sentence with because because because is a conjunction`;
// let target = `because`;
// const regex = new RegExp(target,`gi`);
// const matches  = sentence.match(regex);
// const count = matches?matches.length:0;
// console.log(count);

//3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//     const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Remove non-alphanumeric characters and convert to lowercase
const cleanedText = sentence.replace(/[^\w\s]/g, '').toLowerCase();

// Split cleaned text into an array of words
const words = cleanedText.split(/\s+/);

// Create an object to count word frequency
const wordFrequency = {};

// Count the frequency of each word
for (const word of words) {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
}

// Find the most frequent word
let mostFrequentWord = '';
let maxFrequency = 0;

for (const word in wordFrequency) {
    if (wordFrequency[word] > maxFrequency) {
        mostFrequentWord = word;
        maxFrequency = wordFrequency[word];
    }
}

console.log(`The most frequent word is "${mostFrequentWord}" with a frequency of ${maxFrequency}.`);

// Calculate the total annual income of the person by extracting the numbers from the following text. 
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Match all numbers using regex
const numbers = text.match(/\d+/g);

// Calculate total annual income
let totalIncome = 0;

if (numbers) {
    for (const number of numbers) {
        totalIncome += parseFloat(number.replace(',', ''));
    }
}

// Print the total annual income
console.log(`The total annual income is ${totalIncome} euro.`);
