document.querySelector('.dark-mode-switch').onclick = () => {
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('body').classList.toggle('light');
    console.log('hi')
}

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0 ) || (year % 100 === 0 && year % 400 === 0)
}