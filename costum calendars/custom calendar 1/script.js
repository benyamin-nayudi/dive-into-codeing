document.querySelector('.dark-mode-switch').onclick = () => {
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('body').classList.toggle('light');
    console.log('hi')
}

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0 ) || (year % 100 === 0 && year % 400 === 0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
}

let calendar = document.querySelector('.calendar');


const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let monthPicker = document.querySelector('#month-picker');

monthPicker.onclick = () => {
    monthList.classList.add('show')
}

generateCalendar = (month , year) =>{
    let calendarDays = document.querySelector('.calendar-days');
    calendarDays.innerHTML = '';

    let calendarHeaderYear = document.querySelector('#year');

    let daysOfMonth = [31 , getFebDays(year) , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31];

    let currentDate = new Date();

    monthPicker.innerHTML = monthNames[month];
    calendarHeaderYear.innerHTML = year;

    let firstDay = new Date(year, month, 1)

    for (let i = 0 ; i <= daysOfMonth[month] + firstDay.getDay() -1 ; i++){
        let day = document.createElement('div');
        if(i >= firstDay.getDay()){
            day.classList.add('calendar-day-hover');
            day.innerHTML = i - firstDay.getDay() + 1;
            day.innerHTML += `<span></span>
                              <span></span>
                              <span></span>
                              <span></span>`

            if(i - firstDay.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()){
                day.classList.add('curr-date');
            }
    }

    calendarDays.appendChild(day);
}
}


let monthList = calendar.querySelectorAll('.month-list');

monthNames.forEach((e,index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div>${e}</div>`;
    monthList.appendChild(month);
})


let currDate = new Date();
let currMonth = {value: currDate.getMonth()};
let currYear = {value: currDate.getFullYear()};

generateCalendar(currMonth.value, currYear.value);