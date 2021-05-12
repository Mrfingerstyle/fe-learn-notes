{
  // object
  let a: object;
  a = {};
  a = function () {};

  // let b = 10;
  // console.log(typeof b);

  // 指定对象可以包含的属性 必须一致
  // age?: number 表示属性是可选的
  let b: { name: string; age?: number };
  b = { name: "ls" };

  // 设置包含任意属性 name属性必须包含
  let c: { name: string; [propName: string]: any };

  // 设置函数解构类型声明
  let d: (a: number, b: number) => number;

  d = function (a: number, b: number): number {
    return a + b;
  };

  // array
  // 两种方式
  // e: string[];
  // g: Array<number>

  let e: string[];
  e = ["a", "b", "c"];

  let f: number[];
  let g: Array<number>;

  // tuple 元组 固定长度 数组
  let h: [string, string];
  h = ["1", "2"];

  // enum 枚举
  // 多个值选择的时候
  enum Gender {
    man = 1,
    female = 0,
  }

  let i: { name: string; gender: Gender };
  i = { name: "ll", gender: Gender.man };
  console.log(i.gender === Gender.man);

  let j: { name: string } & { age: number };
  j = { name: "ll", age: 10 };

  // 类型别名
  type myType = string;
  type myType_num = 1 | 2 | 3 | 4;
  let k: myType_num;
  let l: myType;
  k = 2;

  //
}
