// Animalをインポートする
import Animal from "./animal";

// chalkパッケージをインポート
import chalk from "chalk";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info(){
    const humanAge = this.getHumanAge();

    this.greet();

    console.log(chalk.red(`名前は${this.name}です`));
    console.log(chalk.bgYellow(`${this.age}歳です`));
    console.log(chalk.cyan(`犬種は${this.breed}です`));
    console.log(`人の年齢で言うと${humanAge}です`);
  }

  getHumanAge(){
    return this.age * 7;
  }
}

export default Dog;