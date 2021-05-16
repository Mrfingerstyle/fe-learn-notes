class ScorePanel {
  // 记录分数与等级
  score: number = 0;
  level: number = 1;
  //   记录分数等级元素
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  // 最高级别
  // 多少分升级一次
  maxLevel: number;
  upPerScore: number;

  constructor(maxLevel: number = 10, upPerScore = 2) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upPerScore = upPerScore;
  }
  addScore() {
    this.scoreEle.innerHTML = ++this.score + "";
    // 判断分数多少
    if (this.score % this.upPerScore === 0) {
      this.levelUp();
    }
  }
  levelUp() {
    // 控制级别
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + "";
    }
  }
}

export default ScorePanel;
