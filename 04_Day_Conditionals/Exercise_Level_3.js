/*
Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
Write a program which tells the number of days in a month, now consider leap year.
*/
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(month, year) {
    const monthDays = {
        'january': 31,
        'february': isLeapYear(year) ? 29 : 28,
        'march': 31,
        'april': 30,
        'may': 31,
        'june': 30,
        'july': 31,
        'august': 31,
        'september': 30,
        'october': 31,
        'november': 30,
        'december': 31
    };

    return monthDays[month.toLowerCase()];
}

// Get input from the user
const user_month = prompt("Enter a month:");
const user_year = parseInt(prompt("Enter a year:"));

const days = getDaysInMonth(user_month, user_year);

if (days) {
    console.log(`${user_month} has ${days} days.`);
} else {
    console.log("Invalid month input.");
}
