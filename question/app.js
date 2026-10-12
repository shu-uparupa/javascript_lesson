  

//Q1 変数
let nickname = '永野';
let age = 27;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

//Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python','Go',];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

//Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4 配列×オブジェクト

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5 四則演算
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

//Q6 関数
//6-1
function sayHello(){
  console.log('Hello');
}
sayHello();

//6-2
const sayWorld = function(){
  console.log('World');
};
sayWorld();
//Q7 メソッド
/*Q3のuser変数
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};*/
//7-1
user.birthday = '2000-09-27';

//7-2
user.sayHello = function(){
  console.log('Hello！');
};

user.sayHello();

//Q8 引数
let calc = {};
//2 つの引数 x, y の和をコンソールに出力する add メソッドを定義し、7 になるように実行して下さい。
calc.add = function (x, y){
  console.log(x + y);
};
calc.add(3, 4);

//2 つの引数 x, y の差をコンソールに出力する subtract メソッドを定義し、10 になるように実行して下さい。
calc.subtract = function (x, y){
  console.log(x - y);
};
calc.subtract(11, 1);

//2 つの引数 x, y の積をコンソールに出力する multiply メソッドを定義し、49 になるように実行して下さい。
calc.multiply = function (x, y){
  console.log(x * y);
};
calc.multiply(7, 7);

//2 つの引数 x, y の商をコンソールに出力する divide メソッドを定義し、5 になるように実行して下さい。
calc.divide = function (x, y){
  console.log(x / y);
};
calc.divide(10, 2);

//Q9 返り値
function remainder(x, y){
  return x % y;
};
let result = remainder(5, 3);
console.log("5 を 3 で割った余りは " + result + " です。");

//Q10 スコープ
//変数xは関数fooの中でのみ定義されたローカル変数であり、スコープは関数内に限られる。
//そのため、関数外にあるconsole.log(x)からxを参照することができず、エラーが発生する。
function foo() {
  let x = 1;
}
console.log(x);

