class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(){
    console.log("こんにちは");
  }

  info(){
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

// 他のファイルにエクスポートする
export default Animal;