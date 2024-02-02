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

// オブジェクトを要素に持つ配列
const charas = [
  {name: "Jun", age: 20},
  {name: "Gon", age: 15},
  {name: "Ken"}
  ];
// 要素ごとに呼び出し可能、.でプロパティ指定可能
console.log(charas[0]);
console.log(charas[1].name);

// 繰り返し処理でプロパティごとに呼び出し
// 上記の定数charasを使用
// letを忘れずに！　要素数は０から始まる、　i++に空白入らない
for (let i = 0; i < charas.length; i++){
  console.log("-----");
  // 複数回呼び出すためにRubyのeachのように定数を代入するようにする
  const chara = charas[i];
  console.log(`${chara.name}です`);
  // プロパティが未定義の場合は条件分岐で対応
  if (chara.age == undefined){
    console.log("年齢不詳");
  } else {
  console.log(`${chara.age}歳です`);
  }
}
