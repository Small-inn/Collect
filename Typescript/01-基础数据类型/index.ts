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
// 7.0 Any 不确定的类型变量
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
// 在对现有代码进行改写的时候，any类型是十分有用的，他允许你在编译时可选择地包含或者移除类型检查。
// 但是Object类型的变量只是允许你给它赋任何值，却不能够在它上面调用任意的方法，即使真的有。
let notSure1: any = 4;
notSure1.ifItExists();
notSure1.toFixed();

let prettySure: Object = 4;
prettySure.toFixed();//error
// 8.0 void 与any相反，它表示没有任何类型，当一个函数没有返回值时，通常见到的值类型就是void
function warnUser(): void{
    console.log('warn message');
}
// 9.0 Never 表示的是那些永不存在的类型
// never类型是那些总是会抛出异常或者根本就是不有返回值的函数表达式或箭头函数表达式的返回值类型；
// 变量也可能是never类型，当他们被永不为真的类型保护所约束时。
// never类型是任何类型的子类型，也可以赋值给任何类型，然而没有类型湿never的子类型或可以赋值给never类型（包括any）
// 举例never类型函数
// 返回never的函数必须存在无法达到的终点
function error(message:string): never{
    throw new Error(message);
}