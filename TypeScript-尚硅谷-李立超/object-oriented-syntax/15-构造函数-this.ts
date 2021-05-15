class Dog {
  name: string;
  age: number;

  // 构造函数
  // this表示当前创建的实例
  constructor(name: string, age: number) {
    console.log("构造函数执行");
    this.name = name;
    this.age = age;
    console.log("构造函数结束");
  }

  say() {
    console.log("hello " + this.name);
  }
}

const d = new Dog("kk", 2);
console.log(d);
