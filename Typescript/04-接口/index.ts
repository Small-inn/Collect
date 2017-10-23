function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}
let myObj = {size:10,label:'Size 10 Object'};
printLabel(myObj);
// 类型检查器printLabel的调用。printLabel有一个参数，
//并要求这个对象参数有一个名为label类型为string的属性。
// 使用ts重写以上例子，使用接口来描述：必须包含一个label属性且类型为string
interface labelledValue{
    label:string;
}

function printLabel1(labeledObj:labelledValue){
    console.log(labeledObj.label);
}
let myObj1 = { size:10  }