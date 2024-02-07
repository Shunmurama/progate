const numbers = [1,2,3,4];
console.log(numbers);
// 配列に要素を追加できる
numbers.push(5);
console.log(numbers);

// メソッド名.forEach 一つずつ取り出して処理　.eachと似ている
numbers.forEach((number) => {
  console.log(number);
});

// findメソッド
// ３より大きい数字に当てはまる最初の要素１つだけ取り出す
const foundNumber = numbers.find((number) => {
  return number > 3;
});

console.log("foundNumberを出力");
console.log(foundNumber);

// プロパティを指定して引き出すことも可能
const chars = [
  {id: 1, name: "Gon"},
  {id: 2, name: "Jhon"},
  {id: 3, name: "Bob"}
];

const foundChar = chars.find((char) => {
  return char.id == 2;
});

console.log(foundChar.name);

// .filterで全ての要素を引き出すことも可能
const filterChars = chars.filter((char) => {
  return char.id > 1;
});
console.log(filterChars);

// .mapで新たな配列を作る
const mapChars = chars.map((char) => {
  return char.id + ":" + char.name;
});

console.log(mapChars);