
/*Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

let score = parseInt(prompt(`Enter Score`));
if(score<=100 && score>=80)
    console.log( `Grade A`);
else if(score<=89 && score>=70)
        console.log( `Grade B`);
else if(score<=69 && score>=60)
        console.log( `Grade C`);
else if(score<=59 && score>=50)
        console.log( `Grade D`);
else
    console.log(`Grade F`);

/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/

let month = prompt(`Enter month`);

if(month ==`september` || month == `October` || month == `November`)
    console.log(`Autumn Season`);

else if(month ==`December` || month == `January` || month == `February`)
    console.log(`Winter Season`);

else if(month ==`March` || month == `April` || month == `May`)
    console.log(`Spring Season`);

else
    console.log(`Summer Season`);

/*
Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
    */

    let day = prompt(`What is the day today?`);
    const weekendDays = [`saturday`,`sunday`]

    if (weekendDays.includes(day.toLowerCase())) 
    {
        console.log(`${day} is weekend`);
    }
    else
    {
        console.log(`${day} is a working day`);
    }
    

