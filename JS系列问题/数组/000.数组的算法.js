// 1.0 数组的深浅复制
//  1.1 浅复制
var nums = [1,2,3,4];
for (var i = 0; i < nums.length; i++) {
    nums[i] = i + 1;
}
var samenums = nums;
nums[0] = 400;
samenums[0] // ?
// 1.2 深复制
function copy(oldarr,newarr) {
    for (var i = 0; i < oldarr.length; i++) {
        newarr[i] = oldarr[i];
    }
}
var oldarr = [1,2,3,4];
var newarr = [];
copy(oldarr,newarr);
oldarr[0] = 400;
newarr[0] //?
//2.0 将数组转化成字符串的方式有两种
//2.1 arr.toString()
//2.2 arr.join()

//3.0 使用原生JS实现push方法
var arr = [1,2,3,4];
arr.push(5);
//等价于
var arr1 = [1,2,3,4];
arr[arr1.length] = 5;
//4.0 使用原生方法实现UNshift方法
var arr2 = [2,3,4,5];
var arr3 = 1;
var N = arr2.length;
for (var i = N; i >= 0; i--) {
    arr2[i] = arr2[i-1]
}
arr2[0] = arr3;

//5.0 数组的splice()方法
// 参数三个（startIndex,length,replaceNums） return new arr;

//6.0 arr.sort()方法是按照字典顺序对元素进行排序的。
// 如果是数字  arr.sort(function(a,b){return a - b})