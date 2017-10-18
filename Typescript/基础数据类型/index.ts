//1.0 布尔值
let isDone: boolean = false;
//2.0 数字
let num: number = 123;
// 3.0 字符串
let str: string = 'lx';
// 4.0 数组 
//4.1
let list: number[] = [1, 2, 3];
//4.2
let list1: Array < number > = [1, 2, 3];
//5.0 元组 Tuple 元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let x: [string, number];
x = ['hello', 10];
console.log(x[0].substr(1));
//6.0 枚举
// 枚举 enum类型是对JavaScript标准数据类型的一个补充。
enum Color {Red,Green,Blue}
let c: Color = Color.Green;
console.log(c);

enum Color1 {Red = 1,Green, Blue}
let colorName: string = Color1[2];
console.log(colorName);