class Person {
  // 属性
  // 方法

  // 实例属性
  //   只读属性 无法修改
  //   readonly name: string;
  name: string;
  age: number;

  // 类属性 or 静态属性
  static gender: string = "man";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //   实例方法
  // 类方法
  //   sayHello() {
  //     console.log("hello " + this.name);
  //   }
  static sayHello() {
    console.log("hello " + this.name);
  }
}

const p = new Person("ll", 10);
console.log(p);

Person.sayHello();
// p.name = "ss";

console.log(Person.gender);
