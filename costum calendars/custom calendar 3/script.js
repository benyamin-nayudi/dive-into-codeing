const date = new Date();

const renderCalendar = ()=>{

    const monthDays = document.querySelector('.days');

// date.getMonth() +1 gives us the current month and the 0 after it gives us the last day
    const lastDay = new Date(date.getFullYear() , date.getMonth() +1, 0).getDate();
    console.log('lastDay' , lastDay);


    const prevLastDay = new Date(date.getFullYear() , date.getMonth(), 0).getDate();
    console.log('prevLastDay' ,prevLastDay);

    //this gives us the week day number (zero base numbering)
    const lastDayIndex = new Date(date.getFullYear() , date.getMonth() +1, 0).getDay();
    console.log(lastDayIndex)
    const nextDays = 7 - lastDayIndex -1;



    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    document.querySelector('.month-name').innerHTML = months[date.getMonth()]
    document.querySelector('.time .year').innerHTML = date.getFullYear()



    let daysTd = [];
    let daysTr = [];

    for(let x = date.getDay() +5 ; x > 0 ; x-- ){

        // console.log('prevLastDay - x + 1' , prevLastDay - x + 1)
        // console.log('date.getDay() +5' , date.getDay() +5)


        daysTd.push(`<td class="prev-date">${prevLastDay - x + 1}</td>`)
    }
    console.log( daysTd)


    for( let i = 1 ; i <= lastDay ; i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            daysTd.push(`<td class="today">${i}</td>`);
        }else{
            daysTd.push(`<td>${i}</td>`);
        }     
    }


    for(let j = 1 ; j <= nextDays ; j++){
        daysTd.push(`<td class="next-date">${j}</td>`)
    }

    for(let k = 0 ; k < daysTd.length ; k++){
        console.log(k)
    }

}

renderCalendar();
document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
})

document.querySelector('.next').addEventListener('click', () => { 
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
})

