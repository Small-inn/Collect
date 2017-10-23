// 1.0 作用域
function f() {
    var a = 1;
        a = 2;
    var b = g();
        a = 3;
        return b;
        function g(){
            return a;
        }
}
f();
// 2.0 let & const 用法与var对比

// es6 与 typesript 详解

