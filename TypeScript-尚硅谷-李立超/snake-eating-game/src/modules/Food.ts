// 定义类
class Food {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("food")!;
  }
  //   获取食物X轴
  get X() {
    return this.element.offsetLeft;
  }

  //   获取食物Y轴
  get Y() {
    return this.element.offsetTop;
  }
  //   修改食物位置的方法
  change() {
    // 随机数 0 - 290之间 食物的坐标一定要被10整除
    // 蛇一次移动就是一格 10px
    // 所以要求食物的坐标必须是10
    // [0, 29] * 10;
    let left = Math.round(Math.random() * 29) * 10;
    let top = Math.round(Math.random() * 29) * 10;
    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}

export default Food;
