// localstrorage数据的存储格式： {     'shopcar':[         {goodsid:88,count:1},
// {goodsid:89,count::2}     ] } 操作localstorage 定义一个常量
const key = 'shopcar';

function getJsonToObj() {
    var lsString = localStorage.getItem(key);
    var list = [];
    if (lsString) {
        list = JSON.parse(lsString);
    }
    return list;
}

function setItem(obj) {
    var list = getJsonToObj();
    list.push(obj);
    localStorage.setItem(key,JSON.stringify(list));
}