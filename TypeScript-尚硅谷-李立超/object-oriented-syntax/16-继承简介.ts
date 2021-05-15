(function () {
  class Animal {
    name: string;
    age: number;
    voice: string;
    constructor(name: string, age: number, voice: string) {
      this.name = name;
      this.age = age;
      this.voice = voice;
    }
    sayHello() {
      console.log(this.voice);
    }
    showThis() {
      console.log(this);
    }
  }

  class Dog extends Animal {
    gender: string;
    constructor(name: string, age: number, voice: string, gender: string) {
      super(name, age, voice);
      this.gender = gender;
    }
    showGender() {
      console.log(this.gender);
    }
    // 在子类中添加新功能
    run() {
      console.log(`${this.name} is running.`);
    }
    // 覆盖父类的方法 方法重写
    sayHello() {
      console.log(this.name + " " + this.voice);
    }
  }
  class Cat extends Animal {}

  const d = new Dog("ll", 12, "wo", "man");
  d.showThis();
  d.showGender();
  d.run();
  d.sayHello();
})();
