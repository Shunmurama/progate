// プロパティと関数を用意できる
const boy = {
  name: "Bob",
  age: 18,
  greet: function(){
    console.log("どうも");
  }
};
// 関数の呼び出し方
boy.greet();
// プロパティの呼び出し方
console.log(boy.name);

// クラスの作り方
// クラス名は大文字
class User{
  constructor(name, age){
    // 下記記述にすることで値を変数にできる
    // thisはこのメソッドであることを意味している
    this.name = name;
    this.age = age;
  }
  // メソッドの追加
  greet(){
    console.log("こんにちは");
  }
  // 他のメソッドをメソッドで呼び出すこともできる
  info(){
    this.greet();
    console.log(`${this.name}くんは${this.age}歳です`);
    console.log(`${this.name}君は${this.hand}利きです`);
  }
}
// 引数を設定
const user = new User("Gon", 21);
console.log(user.name);
// infoメソッドを呼び出す
user.info();

// 継承
class Student extends User{
  // プロパティを追加するときはsuperを使用する
  constructor(name, age, hand){
    super(name, age);
    this.hand = hand;
  }
}
const student = new Student("Jhon", 19, "左");
// 継承しているため、Userのメソッドを使える
student.info();