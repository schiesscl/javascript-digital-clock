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
}

showClock();
setInterval(showClock, 1000);