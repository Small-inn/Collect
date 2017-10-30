var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类
// 定义：面向对象的编程思想
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
// 继承
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters);
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('Slithering....');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log('Galloping...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake('Sammy the Python');
sam.move();
var tom = new Horse('Tommy the Palomino');
tom.move(34);
// 公共、私有与保护的修饰符   默认为public
// 在C# 要求必须明确地使用public指定成员可见的，在ts里成员默认为public
var Animal1 = /** @class */ (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    Animal1.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + ".");
    };
    return Animal1;
}());
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    return Animal2;
}());
new Animal2('Cat').name; //error 'name' is private;
// ts使用的是结构性类型系统。如果所有成员你的类型的兼容的，我们就认为他们的类型是兼容的。
// 当比较带有private或protected成员的时候，情况有所不同。
// 其中一个类型里包含一个private成员，那么只有当另一个类型中也存在这样一个private成员，
// 并且它们来自同一声明时。才认为这两个类型是兼容的。
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    return Animal3;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, 'Dog') || this;
    }
    return Dog;
}(Animal3));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal3('Goat');
var god = new Dog();
var employee = new Employee('Bob');
animal = dog;
animal = employee; //error
// 理解protected
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Lx = /** @class */ (function (_super) {
    __extends(Lx, _super);
    function Lx(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Lx.prototype.getElevatorPitch = function () {
        return "Hello my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Lx;
}(Person));
var howard = new Lx('Xie', 'Cxfz');
console.log(howard.getElevatorPitch());
console.log(howard.name);
