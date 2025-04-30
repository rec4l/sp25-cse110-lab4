function printTime() {
    let d = new Date();
    time = d.toLocaleTimeString();
    console.log(time);
    return true;
}

setInterval(printTime, 1000);


