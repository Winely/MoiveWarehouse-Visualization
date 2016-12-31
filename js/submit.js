/**
 * Created by ZHY on 2016/12/28.
 */
$(function () {
    $("#submit").click(function () {
        $("#table-MYSQL").empty();
        $("#table-HDFS").empty();
        $("#result-MYSQL").html("");
        $("#result-HDFS").html("");
        var param = {};
        param['year'] = $('#year option:selected').val();
        param['month'] = $('#month option:selected').val();
        param['date'] = $('#date option:selected').val();
        param['quarter'] = $('#quarter option:selected').val();
        param['day'] = $('#day option:selected').val();
        param['category1'] = $('#category1 option:selected').val();
        param['category2'] = $('#category2 option:selected').val();
        param['category3'] = $('#category3 option:selected').val();

        param['director'] = $('#director').val();
        param['movie'] = $('#movie').val();
        param['hero'] = $('#hero').val();
        param['supporting_role'] = $('#supporting_role').val();

        // console.log(param);
        // var t =     {
        //     "total": 14145,                     //符合条件的电影总数
        //     "result": [
        //         {"ID": "0767815335", "name": "asdasd"},
        //         {"ID": "0767815336", "name": "aaaaa"},
        //         {"ID": "0767815337", "name": "bbbbb"}
        //     ]
        // };
        // var obj = eval(t);
        // $("#result-MySQL").html(obj.total);
        // $("#result-HDFS").html(obj.total);
        // for (var i = 0; i < obj.result.length; i++) {
        //     $("#table-HDFS").append(
        //         '<tr onclick="clickMovie(' +
        //         '\'' + obj.result[i].ID + '\'' +
        //         ')">' +
        //         '<td>' + obj.result[i].ID + '</td>' +
        //         '<td>' + obj.result[i].name + '</td>' +
        //         '</tr>'
        //     );
        // }

        var settings1 = {
            "url": "",
            "method": "POST",
            "data": param
        }

        var settings2 = {
            "url": "",
            "method": "POST",
            "data": param
        }

        //MYSQL
        $.ajax(settings1).done(function (response) {
            end_timekeeper1();//停止计时
            //解析数据放入表格
            var obj = eval(response);
            $("#result-MySQL").html(obj.total);
            for (var i = 0; i < obj.result.length && i < 100; i++) {
                $("#table-MYSQL").append(
                    '<tr onclick="clickMovie(' +
                    '"' + obj.result[i].ID + '"' +
                    ')">' +
                    '<td>' + obj.result[i].ID + '</td>' +
                    '<td>' + obj.result[i].name + '</td>' +
                    '</tr>'
                );
            }
        });

        //HDFS
        $.ajax(settings2).done(function (response) {
            end_timekeeper2();//停止计时
            //解析数据放入表格
            var obj = eval(response);
            $("#result-HDFS").html(obj.total);
            for (var i = 0; i < obj.result.length && i < 100; i++) {
                $("#table-HDFS").append(
                    '<tr onclick="clickMovie(' +
                    '"' + obj.result[i].ID + '"' +
                    ')">' +
                    '<td>' + obj.result[i].ID + '</td>' +
                    '<td>' + obj.result[i].name + '</td>' +
                    '</tr>'
            );
            }
        });

    });
});