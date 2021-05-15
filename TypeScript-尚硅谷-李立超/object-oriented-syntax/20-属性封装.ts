(function () {
  class Person {
    //添加属性修饰符
    //public 可以在任意位置访问修改 默认值
    //包括在子类中

    //private 私有属性 只能在类内部修改
    //关闭了属性的访问方式
    //在类中添加方法 简介访问和设施数据

    //protected受保护的属性
    //只能子当前类和当前类的子类中使用
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }

    // getName() {
    //   return this._name;
    // }
    // setName(value: string) {
    //   this._name = value;
    // }

    // getAge() {
    //   return this._age;
    // }

    // setAge(value: number) {
    //   // 控制数据的格式 合法性
    //   if (value >= 0) this._age = value;
    // }

    // TS设置get方法
    get name() {
      console.log("get name fn");
      return this._name;
    }
    set name(name: string) {
      this._name = name;
    }
    get age() {
      return this._age;
    }

    set age(age: number) {
      if (age >= 0) this._age = age;
    }
  }
  const p = new Person("ll", 10);
  //现在可以对属性任意修改
  //又安全隐患 比图有人把age设置为负数
  //数据不安全
  //p.name = "ly";
  //p.age = 18;
  console.log(p);
  //   p.setName("lll");
  //   p.setAge(-22);
  //   console.log(p.getName(), p.getAge());

  p.name = "lll";
  p.age = 20;
  console.log(p.name, p.age);

  // protected
  class A {
    protected name: string;
    // private name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  class B extends A {
    test() {
      console.log(this.name);
    }
  }

  const b = new B("b");
  b.test();

  //   省略写法
  //   与常规写法等价
  class C {
    constructor(public name: string, public age: number) {}
  }

  const c = new C("xxx", 1);
  console.log(c);
})();
