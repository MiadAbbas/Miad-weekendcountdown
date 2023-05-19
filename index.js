const htmlStyle =document.querySelector('body');
htmlStyle.style.backgroundRepeat = 'no-repeat';
htmlStyle.style.backgroundSize = '100% 100%';

const headerStyle = document.querySelector('h1');
headerStyle.style.paddingTop = '60px'
headerStyle.style.fontSize = '3rem'

const bodyStyle = document.querySelector ('.container');
bodyStyle.style.padding = '70px 70px 400px';
// bodyStyle.style.textAlign = 'center';
bodyStyle.style.boxShadow = ' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset';



const form = document.getElementById('unserFormular');
form.onsubmit = (event) => {
    event.preventDefault();
}
const formInput = document.querySelector('#hiddenMessage');
const hiddenMessage = document.querySelector('#formularInputFeld');


hiddenMessage.onchange = (event) => {

if (day === 'Friday' )
{
    formInput.innerText = `Hallo ${event.target.value} 😍️. Today is ${day} . only ${daysToWeekend} day left until Weekend !` ;  
}

else if (day === 'Saturday'  || day === "Sunday")
{
    formInput.innerText = `Hallo ${event.target.value} 😍️. Today is ${day} . enjoy your free time! 💃️🎉️`   
}

else
{
    formInput.innerText = `Hallo ${event.target.value} 😍️. Today is ${day} . only ${daysToWeekend} days left until Weekend !` ;
}
}

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];


const currentDayOfWeek = d.getDay();
const daysUntilFriday = 6 - currentDayOfWeek;

const daysUntilSunday = 7 - currentDayOfWeek;


const daysToWeekend = Math.min(daysUntilFriday, daysUntilSunday);

