// 声明

function fn_normal(){
    console.log('fn_normal');
    console.log(this.name);
}

const fn = () => {
    console.log('fn');
    console.log(this.name);
}

fn()
// this是静态的 this 始终指向函数声明时所在的环境
const A = {
    name: 'll'
}

fn.call(A)
fn_normal.call(A)

// 不能作为构造实例化对象
// let Person = (name, age) => {
//     this.name = name
//     this.age = age
// }
// let p = new Person('ll', 11)
// console.log(p);

//  不能使用arguments
// let d = (a, b) => {
//     console.log(arguments);
// }

// d(1, 2)

// 箭头函数的简写
let e = val => val + 1
console.log(e(1));

