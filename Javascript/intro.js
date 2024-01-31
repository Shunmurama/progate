// Ruby同様'',""で表示する内容を囲み、文字列として出力する
// ;を最後につける　（なくても動作はするが一般的ではない）
console.log("Javascript");

// 数字も出力可能
console.log(5 + 3);
// 文字列の連結もRuby同様
console.log("pro" + "gate");
console.log("19" + "99" + "年");

// 変数定義
// 末尾の;忘れずに
let name = "田中";
console.log(name);
// letで定義した変数を変更するとき
// letはいらない
name = "鈴木";
console.log(name);

// 定数定義
const country = "日本";
console.log(country);
// 定数なので後から変更はできない
// 文字列通しは+で連結可能
console.log(country + "出身です");

// 展開
// ``バッククォーテーションで囲む　Rubyとは違うため注意
const number = 23;
console.log("展開はRubyとは違う``を使う");
console.log(`好きな数字は${number}です`);

// if文
const level = 13;
// {}の後のセミコロンは必要ない
if (level > 10){
  console.log("10より大きい");
}

// 真偽値と比較演算子
const password = 123;
// Rubyでは文字列と数値でtrueとfalseが区別されているが、
// Javascriptでは文字列でもtrueになる
console.log(password == "123" );
console.log(password == 123 );
// ===で厳密に比較することができる
// その場合文字列と数値で区別される
console.log(password === "123" );
console.log(password === 123 );