// 限制值为10
// let a: 10;
// a = 10;

// let b: string | boolean;
// b = "str";
// b = true;

// any 任意类型
// 设置之后 相当于关闭了类型限制
// 不建议使用
{
  let c: any;
  // c = 1;
  // c = "s";
  // c = true;
  // c = {};
  // 声明变量不指定类型 则解析器判断变量为any类型 隐式any 避免
  {
    // 未知类型
    let d: unknown;
    d = 1;
    d = "s";
    // d = true;

    let s: string;
    // any类型可以赋值给任意类型
    // s = c
    // 但是unknown不可以
    // s = d

    // unknown实际上是类型安全的any
    // unknown 类型不能赋值给其他变量

    if (typeof d === "string") {
      s = d;
    }

    // 类型断言
    // 高速编译器的变量的实际类型
    s = d as string;
    // 或者
    s = <string>d;

    console.log(s);

    // void 表示空 或 undefined
    // 不写 默认是void
    // function fn() {}
    function fn(): void {}

    // never 永远不会返回结果
    function fn_2(): never {
      throw new Error("error");
    }
  }
}
