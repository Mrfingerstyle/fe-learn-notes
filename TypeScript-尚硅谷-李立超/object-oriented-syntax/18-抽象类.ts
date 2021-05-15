(function () {
  // 抽象类
  // 和其他类区别 不能用来创建对象
  // 抽象类是专门用来被继承的类
  // 抽象类中可以添加抽象方法
  abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    // 定义一个抽象方法
    // 抽象方法没有方法体
    // 抽象方法只能定义在抽象类中子类必须对抽象类进行重写
    abstract sayHello(): void;
  }

  class Dog extends Animal {
    sayHello() {
      console.log(this.name + " wo wo wo");
    }
  }

  const dog = new Dog("ll");
  dog.sayHello();
})();
