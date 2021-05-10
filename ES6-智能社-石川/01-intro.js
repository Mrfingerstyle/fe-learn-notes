// ES6
// 为什么使用ES6

// 变量

// let const
// 防止重复定义
// let a = 1
// console.log(a);

// 控制修改  
// const b = 12

// 块级作用域
// {
    // var a = 1
    // let a = 1
// }
// console.log(a);

// var 重复声明 不能限制修改 函数级
// let 不能重复声明 变量 块级
// const 不能重复声明 常量 块级

// 解构赋值
// const obj = {
//     a: 1,
//     b: 2
// }

// let {a, b} = obj
// console.log(a, b);
// let {code, data} = $.ajax('xxx')
// 注意
// 两边结构一样
// 右边需要是数组或对象
// 结构和赋值同时完成
// let {a, b} = [1, 2]
// console.log(a, b);
// undefined undefined
