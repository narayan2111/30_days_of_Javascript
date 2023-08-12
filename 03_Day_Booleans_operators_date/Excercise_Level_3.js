// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let now = new Date();
let date = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();
let hour = now.getHours();
let minutes = now.getMinutes();
if (hour<10)
{  
    if(minutes<10)
    {
        console.log(`${year}-${month+1}-${date} 0${hour}:0${minutes}`)
    }
    else
    {
        console.log(`${year}-${month+1}-${date} 0${hour}:${minutes}`)
    }
}
else
{
    console.log(`${year}-${month+1}-${date} ${hour}:${minutes}`)
}
