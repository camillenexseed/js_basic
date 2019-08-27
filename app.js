
console.log('----------------console.log----------------');

console.log('hoge');

console.log('----------------四則演算子----------------');
// 足し算
console.log(1 + 7 + 5);
// 引き算
console.log(1 - 7 - 5);
// 掛け算
console.log(1 * 3);
// 割り算
console.log(1 / 3);
// 余算
console.log(5 % 3);

console.log('5 - 2');
//シングルクォーテーション、ダブルクォーテーションをつけると文字列になる

console.log('----------------文字列連結----------------');
// 文字は+で連結していく
console.log('水島' + 'ヒロ');

console.log('----------------変数----------------');
// 変数とはデータを入れる箱
// 箱の名前が変数名
// 変数を使用する理由
// 1. 変更に対応しやすい
// 2. 同じ値を繰り返し使える
// 3. 値の意味がわかりやすい
// 命名規則
// ケバブケース
// color-light-blue
// スネークケース
//  color_light-blue
// キャメルケース
// colorLightBlue

// letは宣言使う前にこの変数使いますよーって言っておく
// 一度宣言したら宣言し直せないので注意

let name = '水嶋ヒロ';
console.log(name);
name = '山田孝之';
console.log(name);

let num = 2;
console.log(num);

num = num + 2;
console.log(num);

num += 2;
console.log(num);

// 定数
// 一度宣言したら二度と代入できない
// 本来積極的に使ってください
const age = 20;
// age = 30;
console.log(age);

//テンプレートリテラル
const schoolName = 'NexSeed';
console.log(`私の所属先は、${schoolName}です`);

// 1.100円のリンゴ3つを税込で計算する計算式を作る
// 2.計算結果を変数に代入
// ３.console.logで出力
let amount = 10000 * 1;
let amount2 = 10000 * 1.1;
console.log((amount2 - amount) * 12);
