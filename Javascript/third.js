// 関数を定義する
// 最後の;忘れない
const greet = function(){
  console.log("どうも");
  console.log("勉強がんばろう！");
};
// 呼び出しは定数名();で呼び出す
greet();

// アロー関数（上記のfunction(){}と同じ意味）
const arrow = () => {
  console.log("アロー関数です");
};
// 呼び出し方も変わらない
arrow();

// 引数
// 呼び出す値が(name)に代入される
const g = (name) => {
  console.log(`こんにちは、${name}さん`);
};
g("Ryo");

// 第１引数、第２引数
// ,で区切る
const add = (num1, num2) => {
  console.log(num1 * num2);
};

add(3, 5);

// 戻り値として返すreturn
const check = (number) => {
  // 4で割り切れる
  return number % 4 === 0;
};
// returnを条件式として使える
if(check(400)) {
  console.log("4の倍数です");
} else {
  console.log("4の倍数ではないです");
}

// 分に変換
const minutes = (h, m) => {
  return h*60 + m;
};
// resultに計算結果を返す
const result = minutes(5, 38);
// resultを表示
console.log(`${result}分`);