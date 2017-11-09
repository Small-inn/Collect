// 需求：页面中有10个div，要统一对这10个div进行操作。
// 1.0 一般的处理方法
// 1.0.1 获取div标签
var divs = document.getElementsByTagName('div');
// 1.0.2 遍历获取到的标签
for (var i = 0; i < divs.length; i++) {
    divs[i].style.border = '1px solid #ccc';
}
// 2.0 使用函数进行封装
function tag(tagname) {
    return document.getElementsByTagName(tagname);
}

function setStyle(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.border = '1px solid #ccc'
    }
}
var divs = tag('div');
setStyle(divs);
// 3.0 使用面向对象的思想
var change = {
    getEle: {
        tag: function (tagName) {
            return document.getElementsByTagName(tagName)
        }
    },
    setEle: {
        setStyle: function (arr) {
            for (var i = 0; i < arr.length; i++) {
                arr[i].style.border = '1px solid #ccc';
            }
        }
    }
}

function sayHello() {
    console.log('你好：' + this.name);
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function(){
    console.log('你好:' + this.name);
}
var p1 = new Person('张三', 18);
p1.sayHi();