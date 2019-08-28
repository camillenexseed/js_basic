
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


console.log('----------------条件分岐----------------');
// if (条件式) {
//     処理;
// }
console.log('if文----------------');
let int = 3;

//比較演算子
// <, <=, >, >=, ==,===, !=, !==

// 値と型
// 文字列
// 整数
// 小数点
// true or false
if (int !== '3') {
  console.log(`${int}は3より大きいです。`);
}

//論理演算子
// && ||

console.log('else if----------------');

int = 5;
if (int >= 10) {
  console.log(int + 'は10以上です')
} else if (int > 3) {
  console.log(`${int}は3より大きいです。`);
} else {
  console.log(`${int}は3以下です。`);
}

console.log('switch----------------');
let signal = 'green';
switch (signal) {
  case 'red':
    console.log('止まれ');
    break;
  case 'green':
    console.log('すすめ');
    break;
  default:
    console.log('そのほか');
    break;
}

// 1. 変数を準備
// 2. if分で分岐
// 3. 3で割り切れる数の時はBuzzを出力してそれ以外は変数をそのままconsole.log出力します。

let number = 8;
if (number % 5 === 0) {
  console.log('Buzz');
} else {
  console.log(number);
}

console.log('----------------繰り返し処理----------------');
console.log('for----------------');
// for( 変数の定義, 条件式, 変数の更新)
// i
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log('while----------------');
let j = 11;
while (j <= 20) {
  console.log(j);
  j += 2;
}

console.log('----------------アラート----------------');
// alert('こんにちは世界');
// const answer = confirm('削除しますか?');
// console.log(answer);

// const value = prompt('あなたの年齢は幾つですか？', '不明');
// console.log(`${value}です`);


// for文

// 1. 100 ~ 1 までconsole.logで出力
// 2. 3の倍数でBuzzと出力。それ以外は数字を出力
// 3. if else を使って5の倍数で Fizzを出力する条件を足してください。
// 4. 5 と 3の倍数の時に Fizz Buzz と出力する.

// for (let i = 100; i > 0; i--) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log('Fizz Buzz');
//   } else if (i % 3 == 0) {
//     console.log('Buzz');
//   } else if (i % 5 == 0) {
//     console.log('Fizz');
//   } else {
//     console.log(i);
//   }
// }

console.log('----------------関数----------------');

/*
    自作関数
    複数の処理を1つにまとめたもの
    function 関数名() {
        処理
    }
    組込関数
    alert()
*/
// function greeting() {
//   console.log('おはよう');
// }

// greeting();

console.log('引数----------------');

// // 関数の中で使える変数を引数と呼びます
// function greeting(greeting) {
//   console.log(greeting);
// }

// greeting('こんにちは')
// greeting('こんばんは')

console.log('ローカル変数----------------');
// function greeting(name) {
//   let morning = 'おはよう' + name;
//   // 値を取り出すために必要
//   // console.log()
//   // 値を取り出すための処理が走っているからreturn;
//   return morning;
// }

// let hoge = greeting('ヒロ');
// console.log(hoge)

console.log('関数を変数に代入----------------');
// let greeting = function (name) {
//   let greeting = 'おはよう' + name;
//   return greeting;
// }

// let hoge = greeting('seedKun');
// console.log(hoge);

// function addtax(product, num, taxrate) {
//   return product * num * taxrate;
// }
// // 醜くなるコードを整理するために使うことあります
// let result = addtax(500, 10, 1.1);
// console.log(result);

// // 勝った数 / 全試合数 * 100
// function winrate(teamname, win, all) {
//   return teamname + 'の勝率は' + win / all * 100 + '%です。'
// }

// // 福岡ソフトバンク 120 61
// let result = winrate('カープ', 61, 120);
// console.log(result);

// 一日何時間したら 何日呉に2000時間に到達できるか
function days(time) {
  let result = 2000 / time
  return result;
}
let result = days(3);
console.log(result);

console.log('----------------タイマー処理----------------');
/*
    タイマー処理
    setInterval ->前の処理が終わったことを確認しない
    setTimeout ->前の処理が終わったか確認
*/

console.log('setInterval----------------');
// let i = 100;

// function countDown() {
//   if (i >= 95) {
//     console.log(i--);
//   }
// }

// setInterval(function () {
//   countDown();
// }, 1000);

console.log('setTimeout----------------');
// let j2 = 100;
// function countDown() {
//   console.log(j2--);
// }

// setTimeout(function () {
//   countDown();
// }, 1000);

console.log('setTimeOutで繰り返し + timerをとめる----------------');
// let k = 100;
// function countDown() {
//   console.log(k--);
//   let timer = setTimeout(function () {
//     countDown();
//   }, 1000);

//   if (k < 95) {
//     clearTimeout(timer)
//   }
// }
// countDown();

console.log('----------------配列----------------');
// 配列 = グループ化されたデータ
// [値1, 値2]
let student_list = ['Yamada', 'Sato', 'Suzuki'];
console.log(student_list);
console.log(student_list[2]);
console.log(student_list[2] = 'KOBAYASI');
console.log(student_list);
// チェーンメソッド
student_list.push('Takahashi');
console.log(student_list);
student_list.pop();
console.log(student_list);
student_list.shift();
console.log(student_list);

// 関数化
// ネットフィリックスとアマゾンプライムの合計
