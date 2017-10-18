//1.0 布尔值
var isDone = false;
//2.0 数字
var num = 123;
// 3.0 字符串
var str = 'lx';
// 4.0 数组 
//4.1
var list = [1, 2, 3];
//4.2
var list1 = [1, 2, 3];
//5.0 元组 Tuple 元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
var x;
x = ['hello', 10];
console.log(x[0].substr(1));
//6.0 枚举
// 枚举 enum类型是对JavaScript标准数据类型的一个补充。
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var colorName = Color1[2];
console.log(colorName);
