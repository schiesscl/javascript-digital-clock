const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}

const timeFormat = (time) => {
    if(time < 10){
        return '0' + time;
    }else{
        return time;
    }
}

const showClock = () => {
    let date = new Date();
    let hr = timeFormat(date.getHours());
    let min = timeFormat(date.getMinutes());
    let sec = timeFormat(date.getSeconds());
    document.getElementById('time').innerHTML = `${hr}:${min}:${sec}`;

    let month = months[date.getMonth()];
    let dayIndex = date.getDay(); // Índice del día (0-6)
    let dayName = days[dayIndex]; // Nombre del día según el índice
    let dayNum = date.getDate();
    let suffix = getDaySuffix(dayNum);

    document.getElementById('date').innerHTML = `${dayName}, ${month} ${dayNum}${suffix} ${date.getFullYear()}`;
}

showClock();
setInterval(showClock, 1000);

