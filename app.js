
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

console.log('----------------連想配列----------------');

let user = {
  food: 'ラーメン',
  age: 38,
  from: '沖縄'
};
console.log(user);
console.log(user['food']);

let user2 = {
  food: 'UFO',
  age: 20,
  from: '沖縄'
}

console.log('----------------2次元配列----------------');

let users = [user, user2];
console.log(users);
console.log(users[1]['age']);
console.log(users[1].from);

let player = { 1: '内川' }
let player2 = { 1: '鈴木' }

let players = { softbank: player, carp: player2 };
// console.log(players.carp[1]);

// チーム名と背番号から選手名を出力する関数を作りましょう

function show_player(team, number) {
  let player = players[team][number];
  return player;
}

console.log(show_player('carp', 1));

console.log('----------------メソッド----------------');
let user3 = {
  food: 'sushi',
  age: 27,
  from: '広島',
  greet: function (name) {//メソッド
    console.log("Hello I'm, " + name + " from " + this.from);
  }
}
user3.greet('Camille');

console.log('----------------組み込みオブジェクト----------------');
console.log('文字列----------------');
let str = "Camille";
console.log(str.length);
console.log(str.substr(1, 1));

console.log('配列----------------');
let arr = [1, 2, 3, 7, 8];
console.log(arr.length);
arr.push(4);
console.log(arr);
arr.splice(1, 0, 1.5);
console.log(arr);
// 4番目から1つ置き換える
// 3.9
arr.splice(3, 1, 3.9);
console.log(arr);

console.log('数値----------------');
// Math関数
// 繰り上げ
console.log(Math.ceil(3.3));
// 切り捨て
console.log(Math.floor(3.3));
// 四捨五入
console.log(Math.round(3.4));

console.log(Math.random());
// 0 ~ 9 までの乱数を発生することができます
console.log(Math.floor(Math.random() * 10));
// 0 ~ 5 まで
// console.log(Math.floor(Math.random() * 5));

// 配列
omikuji = ['大吉', '中吉', '吉', '小吉', '凶'];
// 乱数の結果を変数に入れる
// おみくじの結果を表示
let random_num = Math.random() * 5;
let omikuji_num = Math.floor(random_num);
console.log(omikuji[omikuji_num]);

console.log('日付----------------');
// let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Stu'];
// let date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(day[date.getDay()]);

// 「今日は　年　月　日　曜日です」と出力する
// 各値をyeaar,month,date,dayに一旦格納する

let Days = ['日', '月', '火', '水', '木', '金', '土'];

let today = new Date();
// 西暦
let year = today.getFullYear();
// 月
let month = today.getMonth() + 1;
// 日にち
let date = today.getDate();
let day = Days[today.getDay()];

console.log('今日は' + year + '年' + month + '月' + date + '日' + day + '曜日です。');
