
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
    (source:string,subString:string):boolean;
}
let mySearch:SearchFun;
mySearch = function(source:string,subString:string){
    let result = source.search(subString);
    return result > -1;
}
// 5.0 可索引的类型
interface stringArray {
    [index:number]:string;
}
let myArray: stringArray;
myArray = ['Bob','Fred'];
let myStr:string = myArray[0];

