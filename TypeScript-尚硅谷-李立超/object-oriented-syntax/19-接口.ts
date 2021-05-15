(function () {
  // 描述一个对象类型
  //   type myObj = { name: string; age: number };
  //   const obj: myObj = {
  //     name: "ll",
  //     age: 10,
  //   };

  // 接口用来定义一个类的解构
  // 用来定义一个类中应该包含哪些属性和方法
  // 接口也可以当作类型声明使用
  //   接口在定义类的时候可以限制类的结构
  interface myInterface {
    name: string;
    age: number;
  }

  interface myInterface {
    gender: string;
  }

  //   const obj: myInterface = {
  //     name: "ll",
  //     age: 10,
  //     gender: "man",
  //   };

  interface myInter {
    //   接口中所有属性都不能有实际的值
    // 接口只定义对象的结构 不考虑值
    // 接口中所有方法都是抽象方法
    name: string;
    sayHello(): void;
  }

  //   定义类时可以使类实现一个接口
  //实现接口就是使类满足接口要求

  class MyClass implements myInter {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello() {
      console.log("hello");
    }
  }

  // 接口与抽象类 类似
  // 不同点
  //抽象类 可以有抽象方法和平台方法 接口中 全部是抽象方法
  // 抽象类 使用 extends  接口 implements
})();
