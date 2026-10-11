console.log('Hello World!','こんにちは');
//何個でも渡せるよ、consoleに渡しているだけだから出力場所に気を付けて

let text = 'JavaScriptの練習';
console.log(text);
//let 変数名 = 値;を入力することで変数定義

text = 'JavaScriptをマスターした！'
console.log(text);
//後から変更が可能、再代入の際はletは不要！


let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

//変数を一個にまとめることが可能！また変数に名前を付けられるのでわかりやすい！
//【Tips】文末のセミコロンはふよう！ただしバグの温床になるので注意

let testText;
console.log(testText);

let again = '定義しました';
console.log(again);
again = '再代入はできます';
console.log(again);
// let again = '再定義します';
/*定義した変数は中の値を変更することは可能ですが、
 再度同じ変数名を定義しようとするとエラーになるので注意*/

//let以外の変数宣言！
const constant = 'これは定数です';
console.log(constant);
// constant = '再代入できません。';
//constで定義するものは定数になるので、再代入はできない！
//他に'ver'があるが自由度が高く最近ではあんまり使われない

//データ型は基本的に同じ！
// 【文字列型】
let single = '文字列型です';
console.log(single);

let double = "英語だとstringといいます。";
console.log(double);
console.log('elephant'); //elephant が出力される => 文字列扱い
//console.log(elephant); エラーになる => 変数扱い

let name = 'ジョニー';
let greet = '私は' + name + '！';
console.log(greet);
//文字列結合　+をつかう。また、変数の中に変数も入れられる！

let template = 'テンプレートリテラル'; // ※ これは文字列
let templateText = `これが${template}です。
${template}は改行もできます。`; // これはテンプレートリテラル
console.log(templateText);
//文章の中に ${変数名} を書くことで、その位置で変数の中身を展開することができる!

//【数値型】
let num = 10;
console.log(num);
//クォートで囲まないように注意
let number = 5;
number += 3; // number = number + 3と同じ
console.log(number);
// 以下を追記
number -= 1; // number = number - 1と同じ
console.log(number);
number *= 5; // number = number * 5と同じ
console.log(number);
number /= 7; // number = number / 7と同じ
console.log(number);
//インクリメント
let increment = 0;
console.log(increment);
increment++; // increment += 1と同じ
console.log(increment);
//デクリメント
let decrement = 10;
console.log(decrement);
decrement--; // decrement -= 1と同じ
console.log(decrement);
//余剰
// let bigNum = 25;
// let smallNum = 2;

// console.log(bigNum % smallNum);
//累乗
let bigNum = 25;
let smallNum = 2;

// 以下を変更
console.log(bigNum ** smallNum);

//【配列型】
let names = ['John', 'Bob', 'Michael', 'Emma'];
console.log(names);
console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

//【オブジェクト】
let John = {
  name: 'John', // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(John.bloodType);
//呼び出しの際は(変数名.キー)の順番で呼び出す

let Andy = {};

Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';
//後から追加もできるよ
//配列とオブジェクトの使い分けについてはジャンルでくくるか、属性でくくるかで判断しよう

function getArea() {
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea();
//関数の呼び出しはPHPといっしょかもー


