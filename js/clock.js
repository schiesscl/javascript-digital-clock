// Arrays mapping JS Date indices to standard English names
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Applies Bootstrap utility classes to build structure without inline HTML clutter
const applyStyles = () => {
    // Body: Center everything precisely within full viewport height
    document.body.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'min-vh-100', 'm-0');

    // Bezel: Required for absolute positioning of its pseudo-element side buttons
    const bezel = document.getElementById('bezel');
    bezel.classList.add('position-relative');

    // Clock wrapper
    const clock = document.getElementById('clock');
    clock.classList.add('position-relative');

    // Container: Strip inherited padding to let the custom LCD dictates sizing
    const container = document.getElementById('container');
    container.classList.add('p-0');

    // Screen: Constrain inner scanline overlay and enable inner z-indexing
    const screen = document.getElementById('screen');
    screen.classList.add('position-relative', 'overflow-hidden');

    // Unlit UI (Ghost layer): Sub-layered to mimic inactive LCD segments
    const timeGhost = document.getElementById('time-ghost');
    timeGhost.classList.add('text-center', 'mb-0', 'position-relative', 'z-1', 'user-select-none');

    // Lit UI (Active layer): Rendered above ghost layer, representing lit segments
    const time = document.getElementById('time');
    time.classList.add('text-center', 'position-relative', 'z-2');

    // Date panel: Bottom aligned with custom inset spacing
    const date = document.getElementById('date');
    date.classList.add('text-center', 'text-uppercase', 'mt-2', 'pt-2', 'position-relative', 'z-2');
}

// Appends correct English ordinal indicator (st, nd, rd, th) for a given date number
const getDaySuffix = (day) => {
    // 11-13 uniquely end in 'th', bypassing the 1/2/3 edge cases
    if (day > 3 && day < 21) return 'th';
    
    // Evaluate only the final digit for others
    switch (day % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}

// Prefixes numbers <10 with '0' to maintain fixed-width 2-digit intervals
const timeFormat = (time) => {
    if(time < 10){
        return '0' + time;
    }else{
        return time;
    }
}

// Main evaluation loop determining and rendering current datetime
const showClock = () => {
    let date = new Date();
    
    // Extract formatted hours, mins, secs
    let hr = timeFormat(date.getHours());
    let min = timeFormat(date.getMinutes());
    let sec = timeFormat(date.getSeconds());
    
    // Inject active time
    document.getElementById('time').innerHTML = `${hr}:${min}:${sec}`;

    // Extract textual month and zero-indexed day (0 = Sunday... 6 = Saturday)
    let month = months[date.getMonth()];
    let dayIndex = date.getDay();
    let dayName = days[dayIndex];
    let dayNum = date.getDate();
    let suffix = getDaySuffix(dayNum);

    // Inject active contextual date string
    document.getElementById('date').innerHTML = `${dayName}, ${month} ${dayNum}${suffix} ${date.getFullYear()}`;
}

// Trigger initial bootstrapping and evaluation before async cycle starts
applyStyles();
showClock();

// Enqueue tick evaluation into the event loop every 1,000ms (1 sec)
setInterval(showClock, 1000);

