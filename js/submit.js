/**
 * Created by ZHY on 2016/12/28.
 */
$(function () {
    // $("#not_logged_in").submit(function () {
    //     return false;
    // }); // 禁用 form 提交，页面不会跳转
    $("#submit").click(function () {
        var param = {}; // 组装发送参数，下面只是举个例，请按需要修改
        param['year'] = $('#year option:selected').val();
        param['password'] = $('#not_logged_in input[name=password]').val();

        var settings = {
            "url": "",
            "method": "POST",
            "data": param
        }

        $.ajax(settings).done(function (response) {
            //解析数据放入表格
        });

    });
});