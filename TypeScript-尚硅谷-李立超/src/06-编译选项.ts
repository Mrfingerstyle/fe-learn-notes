// 编译选项

{
  let a = 10;
  console.log(a);

  // 文件更新自动编译
  // tsc xxx.ts -w
  // 缺点 一个文件需要一个终端

  console.log("hello TS");

  // 对多个文件设置自动编译
  // tsc
  // 前提是 项目下有配置文件

  // tsc -w 监视所有文件
}
