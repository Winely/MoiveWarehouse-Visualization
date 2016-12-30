# 数据仓库可视化

## 前端提交的数据
点击“submit”按钮后会分别给MYSQL和HDFS发Post,需要后端提供两个url  
发送的数据举例：

``` json
    {
        "category1": "B",                   //一级目录
        "category2": "B_a",                 //二级目录
        "category3": "B_a_3",               //三级目录
        "date": "",                         //日  
        "day": "",                          //星期  
        "director": "abc",                  //导演  
        "hero": "hhh",                      //主演  
        "month": "2",                       //月
        "movie": "xyzzzz",                  //电影名称 
        "quarter": "1",                     //季度
        "supporting_role": "",              //参演  
        "year": "1906"                      //年  
    }
```
    
## 提交后后端需要返回的数据格式

MYSQL返回：

``` json
    {
        "total": 14145,                     //符合条件的电影总数
        "result": [
                {"ID": "0767815335", "name": "asdasd"},
                {"ID": "0767815336", "name": "aaaaa"},
                {"ID": "0767815337", "name": "bbbbb"}
            ]
    }
```
HDFS返回：
 
``` json
    {
        "total": 14145,                     //符合条件的电影总数
        "result": [
                {"ID": "0767815335", "name": "asdasd"},
                {"ID": "0767815336", "name": "aaaaa"},
                {"ID": "0767815337", "name": "bbbbb"}
            ]
    }
```
