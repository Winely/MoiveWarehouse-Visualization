/**
 * Created by ZHY on 2016/12/28.
 */

var starttime;
var endtime;
var time1;
var time2;
var stop1 = 0;
var stop2 = 0;

function start_timekeeper() {
    stop1 = 0;
    stop2 = 0;
    starttime = new Date().getTime();
    setTimeout("$('#time-MySQL').text(0)", 0);
    setTimeout("$('#time-HDFS').text(0)", 0);
    timedCount1();
    timedCount2();
}
function timedCount1() {
    time1 = new Date().getTime();
    if (stop1 == 0) {
        $('#time-MySQL').text(time1 - starttime);
        setTimeout("timedCount1()", 1);
    }
}
function timedCount2() {
    time2 = new Date().getTime();
    if (stop2 == 0) {
        $('#time-HDFS').text(time2 - starttime);
        setTimeout("timedCount2()", 1);
    }
}

function end_timekeeper1() {
    stop1 = 1;
    endtime = new Date().getTime();
    setTimeout("console.log(endtime-starttime)", 0);
    setTimeout("$('#time-MySQL').text(endtime-starttime)", 0);
}
function end_timekeeper2() {
    stop2 = 1;
    endtime = new Date().getTime();
    setTimeout("console.log(endtime-starttime)", 0);
    setTimeout("$('#time-HDFS').text(endtime-starttime)", 0);
}
