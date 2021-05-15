// 定义 函数 类 如果返回类型不确定的时候
// 可以使用泛型

(function () {
  //   function fn(a: any): any {
  //     return a;
  //   }

  // 此处的T表示T类型
  // fn后面表示定义的T
  function fn<T>(a: T): T {
    return a;
  }
  //   可以直接调用具有泛型的函数
  //   不指定泛型TS自动进行类型推断
  console.log(fn(10));
  console.log(fn<string>("hello"));

  function fn_2<K, T>(a: K, b: T) {
    console.log(b);
    return a;
  }

  let res = fn_2<string, number>("ll", 11);
  console.log(res);

  interface Inter {
    length: number;
  }
  //   泛型T必须是Inter的实现类(子类)
  function fn_3<T extends Inter>(a: T): number {
    return a.length;
  }

  console.log(fn_3("123"));
  console.log(fn_3({ length: 10 }));

  //泛型可以同时指定多个

  class MyClass<T> {
    name: T;
    constructor(name: T) {
      this.name = name;
    }
  }
  const mc = new MyClass("ll");
  console.log(mc);

  //  重点是学会使用TS
  //   引入项目中
})();
