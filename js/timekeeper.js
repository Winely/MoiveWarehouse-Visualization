/**
 * Created by ZHY on 2016/12/28.
 */

var starttime;
var endtime;
var time;
var stop=0;
function start_timekeeper() {
    stop=0;
    starttime = new Date().getTime();
    setTimeout("$('#time-MySQL').text(0)", 0);
    timedCount();
}
function timedCount() {
    time = new Date().getTime();
    if (stop==0){
        $('#time-MySQL').text(time-starttime);
        setTimeout("timedCount()",1);
    }
}

function end_timekeeper() {
    stop=1;
    endtime = new Date().getTime();
    setTimeout("console.log(endtime-starttime)", 0);
    setTimeout("$('#time-MySQL').text(endtime-starttime)", 0);
}
