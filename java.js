var hora = document.getElementById('hora');
var min = document.getElementById('min');
var mdia = document.getElementById('mdia');
var sdia = document.getElementById('sdia');

function updateClock() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let day = dateToday.getDay();
    let date = dateToday.getDate();
    let month = dateToday.getMonth();

    // Update the 'hora' element with the current hour
    hora.textContent = hr;

    // Update the 'min' element with the current minutes
    min.textContent = minutes;

    // Update the 'sdia' element with the current day of the week in Portuguese
    sdia.textContent = getDayOfWeek(day);

    // Update the 'mdia' element with the current day of the month
    mdia.textContent = date + " " + getMonthName(month);
}

function getDayOfWeek(day) {
    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return daysOfWeek[day];
}

function getMonthName(month) {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return monthNames[month];
}

// Call the updateClock function initially to set the time
updateClock();

// Set an interval to update the clock every 1 second
var relogio = setInterval(updateClock, 1000);
