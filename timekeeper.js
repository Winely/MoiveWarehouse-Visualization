/**
 * Created by ZHY on 2016/12/28.
 */

var starttime;
var endtime;
function start_timekeeper() {
    starttime = new Date().getTime();
    setTimeout("$('#time-MySQL').text(0)", 0);
}

function end_timekeeper() {
    endtime = new Date().getTime();
    setTimeout("console.log(endtime-starttime)", 0);
    setTimeout("$('#time-MySQL').text(endtime-starttime)", 0);
}
