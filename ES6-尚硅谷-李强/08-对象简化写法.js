// ES6 允许在打括号里面 直接写入变量和函数
// 作为对象的属性和方法

let a = 'll'
let b = function() {
    console.log('b');
}

let obj = {
    a,
    b,
    // 函数简写
    fn() {
        console.log('fn');
    }
    
}

obj.b()
obj.fn()

