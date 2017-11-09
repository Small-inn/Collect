# Number类型
* 内置函数parseInt()可以将字符串转化成整型，如果给定的字符串不存在数值形式，返回NaN
* 内置函数isNaN()可以用来判断一个变量是不是NaN
* 在JavaScript中还有两中数据类型正无穷和负无穷，内置函数isFinite()方法判断一个变量是不是一个有穷数
## number对象属性
* MAX_VALUE 表示最大的数
* MIN_VALUE 表示最小的数
* NAN 非负数字
* NEGATIVE_INFINITY 负无穷大
* POSITION_INFINITY 正无穷大
## number对象的方法
* toString() 把数字转为字符串，使用指定的基数
* toFixed() 把数字转为字符串，结果的小数点后有指定的数字
* toExponential() 把数字的值转化为指数计数法
* toPrecision() 把数字格式化为指定的长度
* valueOf() 返回亿number对象的基本数字值