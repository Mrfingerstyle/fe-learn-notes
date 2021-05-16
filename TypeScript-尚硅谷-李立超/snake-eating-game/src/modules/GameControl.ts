// 游戏控制器
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  //  存储移动方向
  direction: string = "";
  // 记录蛇是否还活着 即 游戏是否结束 开关作用
  isLive = true;
  //   isLive = false;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }
  //   游戏初始化方法
  //   调用后游戏开始
  init() {
    {
      // 绑定案件按下的事件
      // ArrowUp
      // ArrowLeft
      // ArrowRight
      // ArrowDown
      // IE
      // Up
      // Down
      // Right
      // Left
    }
    document.addEventListener("keydown", this.keyDownHandler.bind(this));
    this.run();
  }
  //创建键盘按下的响应函数
  keyDownHandler(event: KeyboardEvent) {
    // 赋值之前 检测event.key的值是否合法
    // 用户是否按了正确的按键
    this.direction = event.key;
    // this.run();
  }
  // 控制蛇移动
  run() {
    // 根据方向 direction 蛇的位置改变
    // Up top减小
    // Down top增加
    // Right left增加
    // Left left减小

    // ArrowUp
    // ArrowLeft
    // ArrowRight
    // ArrowDown
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 根据方向修改 X Y 值
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        //   向上移动
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        //   向下移动
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

    // 检查是否吃到了食物
    this.checkEat(X, Y);

    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      //   进入 说明出现一场
      alert(e.message + " Game Over");
      this.isLive = false;
      //   location.reload();
    }

    this.isLive &&
      setTimeout(this.run.bind(this), 200 - (this.scorePanel.level - 1) * 30);
  }

  // 检查蛇是否吃到了食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 吃到食物之后 食物位置应该重置
      this.food.change();
      //   分数增加
      this.scorePanel.addScore();
      // 蛇增加一段
      this.snake.addBody();
    }
  }
}
export default GameControl;
