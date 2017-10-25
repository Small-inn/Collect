// 接口定义：
// TS的核心原则之一是对值所具有的结构进行类型检查。称作：“鸭式辨型法”或者“结构性子类型化”
// 在TS中接口的作用就是为了这些类型命名和为你的代码或者第三方代码契约。
// 1.0 接口初探
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
// 类型检查器printLabel的调用。printLabel有一个参数，
//并要求这个对象参数有一个名为label类型为string的属性。
// 使用ts重写以上例子，使用接口来描述：必须包含一个label属性且类型为string
interface labelledValue {
    label: string;
}

function printLabelOne(labeledObj: labelledValue) {
    console.log(labeledObj.label);
}
let myObjone = { size: 10, label: 'Size 10 Object' }
printLabel(myObjone);
// LabelledValue接口就好比一个名字，用描述上面的例子的要求，代表了一个label属性且类型为string的对象

//2.0 可选属性 （option bags）
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: 'black' });
// 3.0 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5;//error
// 4.0 函数类型
interface SearchFun {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFun;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
// 5.0 可索引的类型
interface stringArray {
    [index: number]: string;
}
let myArray: stringArray;
myArray = ['Bob', 'Fred'];
let myStr: string = myArray[0];
//  支持两种索引名：字符串和数字。
// 6.0 类类型
//  实现接口 TS可以用接口明确的强制一个类去符合某种契约。
interface ClockInterface {
    currentTime: Date;
}
class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {

    }
}
// 6.1 静态部分与实例部分
interface ClockConstructor {
    new { hour: number, minute: number }:ClockInterface;
}
interface ClockInterface {
    tick();
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, mintue;)
}
class DigitalClock implements ClockINterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("ha ha");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log('he he');
    }
}
// 7.0 继承接口
interface Shape {
    color: string;
}
interface Square extends Shape {
    sideLenth: number;
}
let square = <Square>{};
square.color = 'blue';
square.sideLenth = 10;
//  一个接口可以继承多个接口，创建多个接口的合成接口
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLenth: number;
}
let squareone = <Square>{};
squareone.color = 'blue';
squareone.sideLenth = 10;
squareone.penWidth = 5.0;
// 8.0 混合类型
interface Counter {
    (start:number):string;
    interval:number;
    reset():void;
}
function getCounter():Counter{
    let counter = <Counter>function(start:number){};
    counter.interval = 123;
    counter.reset = function(){};
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
// 9.0 接口继承类
class Control {
    private state:any;
}
interface SelectableControl extends Control {
    select():void;
}
class Button extends Control implements SelectableControl {
    select(){}
}
class TextBox extends Control {

} 
//error "Image类型缺少"state"属性".
class Image implements SelectableControl{
    select() {}
}
