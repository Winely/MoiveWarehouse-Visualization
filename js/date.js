/**
 * Created by ZHY on 2016/12/28.
 */
function YYYYMMDDstart() {
    MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //先给年下拉框赋内容
    var y = new Date().getFullYear();
    for (var i = 1900; i < 2017; i++) {
        document.reg_testdate.YYYY.options.add(new Option(" " + i + " ", i));
    }

    //赋月份的下拉框
    for (var i = 1; i < 13; i++) {
        document.reg_testdate.MM.options.add(new Option(" " + i + " ", i));
    }

    // document.reg_testdate.YEAR.value = y;
    // document.reg_testdate.YEAR.value = "";
    // document.reg_testdate.MONTH.value = new Date().getMonth() + 1;
    // document.reg_testdate.MONTH.value = "";
    var n = MonHead[new Date().getMonth()];
    if (new Date().getMonth() == 1 && IsPinYear(YEARvalue)) {
        n++;
    }
    writeDay(n); //赋日期下拉框
    // document.reg_testdate.DATE.value = new Date().getDate();
    // document.reg_testdate.DATE.value = "";
}
if (document.attachEvent)
    window.attachEvent("onload", YYYYMMDDstart);
else
    window.addEventListener('load', YYYYMMDDstart, false);
function YYYYDD(str) //年发生变化时日期发生变化(主要是判断闰平年)
{
    var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;
    if (MMvalue == "") {
        var e = document.reg_testdate.DD;
        optionsClear(e);
        return;
    }
    var n = MonHead[MMvalue - 1];
    if (MMvalue == 2 && IsPinYear(str)) n++;
    writeDay(n)
}
function MMDD(str)   //月发生变化时日期联动
{
    var YYYYvalue = document.reg_testdate.YYYY.options[document.reg_testdate.YYYY.selectedIndex].value;
    if (YYYYvalue == "") {
        var e = document.reg_testdate.DD;
        optionsClear(e);
        return;
    }
    var n = MonHead[str - 1];
    if (str == 2 && IsPinYear(YYYYvalue)) n++;
    writeDay(n)
}
function writeDay(n)   //据条件写日期的下拉框
{
    var e = document.reg_testdate.DD;
    optionsClear(e);
    for (var i = 1; i < (n + 1); i++)
        e.options.add(new Option(" " + i + " ", i));
}

function IsPinYear(year)//判断是否闰平年
{
    return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
}

function optionsClear(e) {
    e.options.length = 1;
}