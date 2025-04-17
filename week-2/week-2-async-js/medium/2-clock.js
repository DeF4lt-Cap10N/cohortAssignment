
let hour = 11;
let minute = 59;
let second = 50;



function time() {
    second++;
    if (second > 59) {
        second = 0;
        minute++;
    }
    if (minute > 59) {
        minute = 0;
        hour++;
    }

    if (hour > 23) {
        hour = 0;
    }

    let ampm = "AM";

    if (hour >= 12) {
        ampm = "PM";
    }
    else ampm = "AM";

    console.log(hour + "::" + minute + "::" + second + "::" + ampm);





}

setInterval(time, 1000);

