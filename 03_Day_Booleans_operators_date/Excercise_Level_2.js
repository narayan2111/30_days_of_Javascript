//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// const base = parseInt(prompt(`Enter base :`))
// const height = parseInt(prompt(`Enter Height:`));
// const area = 0.5*base*height;
// console.log(prompt(`The Area of triangle is ${area}`));

// const a = parseInt(prompt(`Enter a`));
// const b = parseInt(prompt(`Enter b`));
// const c = parseInt(prompt(`Enter c`));
// const area = a+b+c;
// console.log(`The Perimeter of triangle is ${area}`);

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
//const length = parseFloat(prompt(`Enter length`));
// const width = parseFloat(prompt(`Enter width`));
// var areaofRect = length*width;
// var perimeterofRect = 2*(length+width);
// console.log(`Area of Rectangle is ${areaofRect} and Perimeter of Rectangle is ${perimeterofRect}`);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// const pi = 3.14;
// let radius = parseFloat(prompt(`Enter radius`));
// let area = pi*radius*radius;
// let circumference = 2*pi*radius;
// console.log(`Area of circle is ${area} and Circuemference of circle is ${circumference}`);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

//let x = parseInt(prompt(`Enter value of x`));
// const slope1 = 2*x-2;
// console.log(`Slope, x-intercept and y intercept of y = ${slope1}`);

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)


// let x1 = parseFloat(prompt(`Enter x1`));
// let x2 = parseFloat(prompt(`Enter x2`));
// let y1 = parseFloat(prompt(`Enter y1`));
// let y2 = parseFloat(prompt(`Enter y2`));

// let m = (y2-y1)/(x2-x1);
// console.log(`Slope is ${m}`);

// //Compare the slope of above two questions.

// console.log(slope1==m)

// //Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// let x = parseFloat(prompt(`Enter x`));
// let y = (x*x) + (6*x) + 9;
// console.log(`Value of y for ${x} is ${y}`);

// //Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// //Enter hours: 40
// //Enter rate per hour: 28
// //Your weekly earning is 1120

// let hours = parseFloat(prompt(`Enter hours:`));
// let rph = parseFloat(prompt(`Enter rate per hour:`));
// const pay = hours*rph;
// console.log(`Your weekly earning is ${pay}`);

//If the length of your name is greater than 7 say, your name is long else say your name is short.


// let name = prompt(`Enter Name`);
// let lengthofName = name.length>7 ? `long` : `short`;
// console.log(`Your name length is ${lengthofName}`);

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// let year = parseInt(prompt(`Enter number of years you live:`));
// let calculateSeconds = year*(365*24*60*60);

// console.log(`You lived ${calculateSeconds} seconds`);

//Create a human readable time format using the Date time object

//1. YYYY-MM-DD HH:mm
//2. DD-MM-YYYY HH:mm
//3. DD/MM/YYYY HH:mm

let  now = new Date();
let year = now.getFullYear();
let date = now.getDate();
let month = now.getMonth();
let hour = now.getHours();
let minutes = now.getMinutes();

console.log(`${year}-${month+1}-${date} ${hour}:${minutes}`);
console.log(`${date}-${month+1}-${year} ${hour}:${minutes}`);
console.log(`${date}/${month+1}/${year} ${hour}:${minutes}`);


