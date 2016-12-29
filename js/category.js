/**
 * Created by ZHY on 2016/12/29.
 */

var category = {

    "一级目录A": {

        "二级目录A_a": ["三级目录A_a_1", "三级目录A_a_2", "三级目录A_a_3"],

        "二级目录A_b": ["三级目录A_b_1", "三级目录A_b_2"],

        "二级目录A_c": ["三级目录A_c_1", "三级目录A_c_2", "三级目录A_c_3", "三级目录A_c_4", "三级目录A_c_5", "三级目录A_c_6"],

        "二级目录A_d": ["三级目录A_d_1", "三级目录A_d_2"]

    },

    "一级目录B": {

        "二级目录B_a": ["三级目录B_a_1", "三级目录B_a_2", "三级目录B_a_3"],

        "二级目录B_b": ["三级目录B_b_1", "三级目录B_b_2", "三级目录B_b_3"],

        "二级目录B_c": ["三级目录B_c_1"]

    }
}

var category1 = document.getElementById("category1");
var category2 = document.getElementById("category2");
var category3 = document.getElementById("category3");

var category1Name = null;

for (var ele in category) {
    // text:字符串，指定option对象的text属性(即<option></option>之间的文字)
    // value:字符串，指定option对象的value属性
    // defaultSelected:布尔值，指定option对象的defaultSelected属性
    // selected:布尔值，指定option对象的selected属性
    var op = new Option(ele, ele, false, false);
    category1.options[category1.length] = op;

}

var change1 = function (src) {
    category2.innerHTML = "";
    category3.innerHTML = "";
    category2.options[0]=new Option("","",true,true);
    category3.options[0]=new Option("","",true,true);
    for (index in category[src]) {
        var op = new Option(index, index, false, false);
        category2.options[category2.length] = op;
    }

    //记住你选的省份的值是什么
    category1Name = src;

}

var change2 = function (src2) {
    category3.innerHTML = "";
    category3.options[0]=new Option("","",true,true);

    for (index in category[category1Name][src2]) {
        var op = new Option(category[category1Name][src2][index], category[category1Name][src2][index], false, false);
        category3.options[category3.length] = op;
    }

}