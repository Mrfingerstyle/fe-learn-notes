class Snake {
  // 蛇的头部元素
  head: HTMLElement;
  // 蛇的身体
  bodySnake: HTMLCollection;
  // 获取蛇的容器
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector(
      "#snake > div:first-child"
    )! as HTMLElement;
    this.bodySnake = this.element.getElementsByTagName("div");
  }
  // 获取蛇头坐标
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }

  // 设置蛇头坐标
  set X(value: number) {
    // 如果新值和旧值相同 直接返回不修改
    if (this.X === value) {
      return;
    }
    // X合法范围0 - 290之间
    if (value < 0 || value > 290) {
      //进入判断 说明撞墙了
      throw new Error("蛇撞墙了");
    }

    // 蛇在左右移动时 向左走时 不能同时向右走 反之亦然
    // 判断蛇头和第二节的X坐标是否一致
    // 首先判断是否有第二节身体
    // 解决 掉头问题
    // 1 直接游戏结束
    // 2 蛇像反方向继续移动

    if (
      this.bodySnake[1] &&
      (this.bodySnake[1] as HTMLElement).offsetLeft === value
    ) {
      // console.log("水平方向发生掉头");
      if (value > this.X) {
        // 新值value 大于 旧值X 说明蛇在向右走应该继续向左走
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }
    // 移动身体
    this.moveBody();

    this.head.style.left = value + "px";
    this.checkHeadBodyCrash();
  }

  set Y(value: number) {
    if (this.Y === value) {
      return;
    }
    // X合法范围0 - 290之间
    if (value < 0 || value > 290) {
      //进入判断 说明撞墙了 抛出异常
      throw new Error("蛇撞墙了");
    }

    // 修改垂直坐标
    if (
      this.bodySnake[1] &&
      (this.bodySnake[1] as HTMLElement).offsetTop === value
    ) {
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }

    // 移动身体
    this.moveBody();

    this.head.style.top = value + "px";

    this.checkHeadBodyCrash();
  }
  // 蛇增加身体长度方法
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

  // 蛇身体移动
  moveBody() {
    // 将后面的身体位置设置为前面身体位置
    // 第4节 等于 第3节 位置
    // 第3节 等于 第2节 位置
    // 第2节 等于 第1节 即 蛇头 位置
    // 遍历获取所有的身体
    console.log(this.bodySnake);

    for (let i = this.bodySnake.length - 1; i > 0; i--) {
      // 获取前面身体的位置
      let X = (this.bodySnake[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodySnake[i - 1] as HTMLElement).offsetTop;

      // 将这个值设置到当前的身体
      (this.bodySnake[i] as HTMLElement).style.left = X + "px";
      (this.bodySnake[i] as HTMLElement).style.top = Y + "px";
    }
  }

  // 解决蛇掉头问题 会穿过身体
  // 解决蛇有没有撞到自己的身体
  // 检查蛇头的坐标和身体的每一部分发生重复 证明撞到了自己
  // 修改完蛇头之后才能检查
  checkHeadBodyCrash() {
    // 获取所有的身体
    for (let i = 1; i < this.bodySnake.length; i++) {
      if (
        this.X === (this.bodySnake[i] as HTMLElement).offsetLeft &&
        this.Y === (this.bodySnake[i] as HTMLElement).offsetTop
      ) {
        // 进入判断 说明蛇头进入了身体
        throw new Error("蛇撞到了自己");
      }
    }
  }
}
export default Snake;
