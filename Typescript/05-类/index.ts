// 类
// 定义：面向对象的编程思想
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter('world');
// 继承
class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}
class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log('Slithering....');
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}

let sam = new Snake('Sammy the Python');
sam.move();
let tom: Animal = new Horse('Tommy the Palomino');
tom.move(34);
// 公共、私有与保护的修饰符   默认为public
// 在C# 要求必须明确地使用public指定成员可见的，在ts里成员默认为public
class Animal1 {
    public name: string;
    public constructor(theName:string){
        this.name = theName;
    }
    public move(distanceInMeters:number){
        console.log(`${this.name} moved ${distanceInMeters}.`);
    }
}
class Animal2 {
    private name:string;
    constructor(theName:string){
        this.name = theName;
    }
}
new Animal2('Cat').name;//error 'name' is private;
// ts使用的是结构性类型系统。如果所有成员你的类型的兼容的，我们就认为他们的类型是兼容的。
// 当比较带有private或protected成员的时候，情况有所不同。
// 其中一个类型里包含一个private成员，那么只有当另一个类型中也存在这样一个private成员，
// 并且它们来自同一声明时。才认为这两个类型是兼容的。
class Animal3{
    private name:string;
    constructor(theName:string){
        this.name = theName;
    }
}
class Dog extends Animal3 {
    constructor(){
        super('Dog');
    }
}
class Employee {
    private name:string;
    constructor(theName:string){
        this.name = theName;
    }
}
let animal = new Animal3('Goat');
let god = new Dog();
let employee = new Employee('Bob');

animal = dog;
animal = employee;//error
// 理解protected
class Person {
    protected name: string;
    constructor(name:string){this.name = name;}
}
class Lx extends Person {
    private department:string;
    constructor(name:string,department:string){
        super(name)
        this.department = department;
    }
    public getElevatorPitch(){
        return `Hello my name is ${this.name} and I work in ${this.department}.`
    }
}
let howard = new Lx('Xie','Cxfz');
console.log(howard.getElevatorPitch());
console.log(howard.name);//error
// readonly修饰符
class Octopus {
    readonly name:string;
    readonly numberOfLegs:number = 8;
    constructor(theName:string){
        this.name = theName;
    }
}
let dad = new Octopus('Man with the 8 strong legs');
dad.name = 'Man with the 3-piece suit';//error name is readonly

//存取器
class Employee1 {
    fullName:string;
}
let james = new Employee1();
james.fullName = 'Bob Smith';
if(james.fullName){
    console.log(james.fullName);
}
let passcode = '123456';
class employee2 {
    private _fullName: string;

    get fullName():string{
        return this._fullName;
    }

    set fullName(newNaem:string){
        if(passcode && passcode == '123456'){
            this._fullName = newName;
        }else {
            console.log('error');
        }
    }
}
