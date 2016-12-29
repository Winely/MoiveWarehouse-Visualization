# 数据仓库可视化

## 需要后端提供的死数据
**三级目录的json**  
举例：  
A,B,C...表示一级目录；A_a,B_c...表示二级目录；A_c_1...表示三级目录


    {
    
        "A": {
    
            "A_a": ["A_a_1", "A_a_2", "A_a_3"],
    
            "A_b": ["A_b_1", "A_b_2"],
    
            "A_c": ["A_c_1", "A_c_2", "A_c_3", "A_c_4", "A_c_5", "A_c_6"],
    
            "A_d": ["A_d_1", "A_d_2"]
    
        },
    
        "B": {
    
            "B_a": ["B_a_1", "B_a_2", "B_a_3"],
    
            "B_b": ["B_b_1", "B_b_2", "B_b_3"],
    
            "B_c": ["B_c_1"]
    
        }
    }

## 前端提交的数据
点击“submit”按钮后会分别给MYSQL和HDFS发Post,需要后端提供两个url  
发送的数据举例：

    {
        "category1":"B",                   //一级目录
        "category2":"B_a",                 //二级目录
        "category3":"B_a_3",               //三级目录
        "date":"",                         //日  
        "day":"",                          //星期  
        "director":"abc",                  //导演  
        "hero":"hhh",                      //主演  
        "month":"2",                       //月
        "movie":"xyzzzz",                  //电影名称 
        "quarter":"1",                     //季度
        "supporting_role":"",              //参演  
        "year":"1906"                      //年  
    }
    
    
## 提交后后端需要返回的数据格式

MYSQL返回：

    {
        "total":14145,          //符合条件的电影总数
        "result":[
            {"ID": "0767815335", "name": "asdasd"},
            {"ID": "0767815336", "name": "aaaaa"},
            {"ID": "0767815337", "name": "bbbbb"}
        ]
    }
     
HDFS返回：
 
    {
        "total":14145,          //符合条件的电影总数
        "result":[
            {"ID": "0767815335", "name": "asdasd"},
            {"ID": "0767815336", "name": "aaaaa"},
            {"ID": "0767815337", "name": "bbbbb"}
        ]
    }
