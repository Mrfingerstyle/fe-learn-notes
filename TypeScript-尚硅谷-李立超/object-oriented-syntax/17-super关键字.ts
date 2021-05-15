(function () {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello() {
      console.log(this.name + " say hello fn");
    }
  }

  class Dog extends Animal {
    age: number;
    constructor(name: string, age: number) {
      // 子类的构造函数中 写了构造函数 需要调用父类的构造函数
      // 要把使用的参数补全
      super(name);
      this.age = age;
    }

    sayHello() {
      //   super.sayHello();
      console.log("wowowo");
    }

    showInfo() {
      console.log(this.name, this.age);
    }
  }

  const dog = new Dog("ll", 3);
  dog.sayHello();
  dog.showInfo();
})();
