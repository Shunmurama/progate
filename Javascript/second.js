// 繰り返し処理
let number = 1;
// while（条件式）trueの間、実行し続ける
// ※気をつける※
// 変数を変更する記述を忘れたら無限ループになる
while(number <= 10){
  console.log(number);
  number += 1;
}

// for(変数定義; 条件式; 変更内容){}
// 一つの式で表現
for (let num = 11; num <= 110; num += 10){
  console.log(num);
}

// for if の組み合わせ
for (let n = 1; n <=10; n ++){
  if(n % 3 == 0){
    console.log("3の倍位数です");
  } else {
    console.log(n);
  }
}

// 配列の作り方
const fruits = ["apple", "orange"];
console.log(fruits);
// index番号でも出力可能
console.log(fruits[1]);

// 定数の配列でも要素の中身を再代入することが可能
// ただし、配列そのものを再定義することはできない
fruits[1] = "melon";
console.log(fruits);

// 配列の繰り返し処理
// iを要素番号に見立てて記述できる
for (let i = 0; i < 2; i ++){
  console.log(fruits[i]);
}

// .lengthを配列に繋げると要素の数を取得できる
// 条件式に.lengthを使用することもできる
console.log(fruits.length);
for (let i = 0; i < fruits.length; i ++){
  console.log(fruits[i]);
}

// オブジェクト
// プロパティを作ることができる
const item = {name: "note", price: 100};
console.log(item);
// .nameでプロパティごとに出力できる
console.log(item.name);
// 値の際代入もできる
item.name = "pen";
console.log(item);
