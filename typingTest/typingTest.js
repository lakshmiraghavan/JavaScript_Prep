
var div = document.getElementById('answer'), div2  = document.getElementById('question');
function timer(){
    var start = new Date();
    start.mins = start.getMinutes();
    start.seconds = start.getSeconds();
    var timeObj = {mins : start.mins, secs : start.seconds };
    return timeObj;
}

var startTime = timer();
div.addEventListener('keydown', function(e){

    var current = timer();
    var timeCheckMins = (current.mins - startTime.mins);
    var timeCheckSecs =  (current.secs -startTime.secs);
    var timeCheck = timeCheckMins + ":" + timeCheckSecs;
    document.getElementById("time").innerHTML = timeCheck;
    var completed = this.value.length;
    document.getElementById("completed").innerHTML = completed;
    var remaining = div2.value.length - this.value.length;
    document.getElementById("remaining").innerHTML = remaining;
    var error = uncorrectedErrors()
    document.getElementById("errors").innerHTML = error;
    if(remaining <= 0){
        e.preventDefault();
    }

});
    div.addEventListener("keyup", function () {
        var curr = timer();
        var totalTime = (curr.mins + ((curr.secs) / 60));
        var typed = this.value.length;
        var sp = typed / totalTime;
        var speed = sp.toFixed(3);
        document.getElementById('speed').innerHTML = speed;
        var x = uncorrectedErrors();
        if(div2.value.length == this.value.length) {
            var grossWPM = (typed/5)/totalTime;
            var netWPM = (grossWPM - (x/totalTime)).toFixed(3);
            alert("Your test is done.\n Your have made " + x + " errors. \n Your speed is " + netWPM + "per minute")
        }
    })

function uncorrectedErrors() {
    var a = div.value.split('');
    var q = div2.value.split('');
    var counter  = 0;
    for (var i = 0; i <= div.value.length; i++){
        if (q[i] != a[i]){
            counter ++;
        }
    }
    return counter;
}

/**
 * Created by lakshmi on 5/1/15.
 */
