// Function to complete.
function CountDownTimer(dateTime, divId) {
    var end     = new Date(dateTime);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour   = _minute * 60;
    var _day    = _hour * 24;
    var timer;

    function showRemaining() {
        var rightNow = new Date();
        // milliseconds difference between dates
        var difference = end - rightNow;
        // round down all division for whole ints
        var days = Math.floor(difference/_day);
        var hours = Math.floor((difference%_day)/_hour);
        var minutes = Math.floor((difference%_hour)/_minute);
        var seconds = Math.floor((difference%_minute)/_second);
       document.getElementById(divId).innerHTML = days + ' days ' + hours + ' hrs ' + minutes + ' mins ' + seconds + ' secs'; 
    }

    timer = setInterval(showRemaining(), 1000);
}

// Enter the date and time as a string in the following format.  Second parameter is the HTML id of element where you want
//    the countdown to appear.
CountDownTimer('02/02/2015 12:00 AM', 'countDown');
