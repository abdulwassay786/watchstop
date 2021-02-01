var min = 0;
var sec = 0;
var hour = 0;


var displaySec = 0;
var displayMin = 0;
var displayHour = 0;
var interval;

function stopwatch() {

    sec++;

    if (sec / 60 === 1) {
        sec = 0
        min++
    }

    if (min / 60 === 1) {
        min = 0
        hour++
    }
    if (sec < 10) {
        displaySec = "0" + sec.toString();
    } else {
         displaySec = sec }

    if (min < 10) {
        displayMin = "0" + min.toString();
    } else {
         displayMin = min }

    if (hour < 10) {
        displayHour = "0" + hour.toString();
    } else {
         displayHour = hour }

    document.getElementById("display").innerHTML = displayHour + ":" + displayMin + ":" + displaySec;

}
function start(){
    setInterval(stopwatch, 1000)
}

function pause(){
   clearInterval(interval)
}

function reset(){

    clearInterval(interval)
    sec = 0;
    min = 0;
    hour = 0;
    document.getElementById('display').innerHTML = "00:00:00"
}