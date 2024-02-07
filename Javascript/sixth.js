const numbers = [1,2,3,4];
console.log(numbers);
// 配列に要素を追加できる
numbers.push(5);
console.log(numbers);

// メソッド名.forEach 一つずつ取り出して処理　.eachと似ている
numbers.forEach((number) => {
  console.log(number);
});