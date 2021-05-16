// 类型声明
// 声明a 类型number
{
  let a: number;
  a = 10;

  // 报错
  // a = 'hello'

  let b: string;
  b = "str";

  // 如果声明和赋值同时进行 TS可以自动对变量进行类型检测
  // let c: boolean = true;
  let c = true;

  // JS函数不考虑 参数类型和个数
  // TS
  function sum(c: number, d: number): number {
    return c + d;
  }
  console.log(sum(1, 2));
}
