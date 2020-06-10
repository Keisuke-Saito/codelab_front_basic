// 'use strict';
// 例題 コンソールに数値「1」を出力してください。
console.log(1);


// 配列問題
// 変数programを宣言し、配列の要素として「HTML」「CSS」「JavaScript」「PHP」を代入してください.
// 変数programをコンソールに表示してください。
var program = ["HTML", "CSS", "Java Script", "PHP"];
console.log(program);


// 配列問題(インデックス)
// 変数programの要素のうち、CSSのみコンソールに表示してください。
console.log(program[1]);


// 配列問題(入れ子)
// 以下の変数carsの要素アクアのみコンソールに表示してください。
var cars = ['トヨタ',['プリウス', 'クラウン','アクア'],'ニッサン','ホンダ'];
console.log(cars[1][2]);


// 配列問題(要素の個数)
// 変数carsの要素の個数を取得し、コンソールに表示してください。
console.log(cars[0].length + cars[1].length);


// 配列問題(for文との組み合わせ)
// 変数carsの要素をfor文を使い全て表示してください。
cars.forEach(function(cars) {
  console.log(cars);
})


// 配列問題(要素の追加)
// 変数carsの配列末尾に文字列「スバル」を追加してください。
// 追加後、for文を使い、結果をコンソールに表示してください。
cars.push("スバル");
cars.forEach(function(cars) {
  console.log(cars);
})


// 配列問題(要素の更新)
// 変数carsの要素「クラウン」の値を「セルシオ」に更新してください。
// 更新後、for文を使い、結果をコンソールに表示してください。
cars[1].splice(1, 1, 'セルシオ');
cars.forEach(function(cars) {
  console.log(cars);
})


// 配列問題(要素の削除)
// 変数carsの配列末尾の要素(スバル)を削除してください。
// 削除後、for文を使い、結果をコンソールに表示してください。
cars.pop();
cars.forEach(function(cars) {
  console.log(cars);
})


// 配列問題(indexof)
// indexOfメソッドを使い、変数carsに「ダイハツ」という要素が存在する場合は「ダイハツはあります。」、存在しない場合は「ダイハツはありません。」というメッセージをコンールに表示してください。
if (cars.indexOf("ダイハツ") !== -1) {
  console.log("ダイハツはあります。");
} else {
  console.log("ダイハツはありません。")
}


// オブジェクト問題
// 変数dogを宣言し、オブジェクトを作成しましょう。以下の名前と値を代入してください。
// 名前:type 値:Bulldog
// 名前:length 値:80
var dog = {};
dog.type = "Bulldog";
dog.length = 80;


// オブジェクト問題
// 変数dogの名前「type」の値をコンソールに表示してください。
console.log(dog.type);


// オブジェクト問題(値の更新)
// 変数dogのlengthの値を90に更新してください。
// 更新後、結果をコンソールに表示してください。
dog.length = 90;
console.log(dog.length);


// オブジェクト問題(プロパティの追加)
// 変数dogにプロパティ(名前:bark、値：Bow!!)を追加してください。
// 追加後、結果をコンソールに表示してください。
dog.bark = "Bow!!";
console.log(dog.bark);


// オブジェクト問題(for..in文)
// 変数dogをfor..in文を使い、下の結果と同じなるように名前と値をコンソールに全て表示してください。
// ↓表示される結果
// type:Bulldog
// length:90
// bark:Bow!!
for(var item in dog) {
  console.log(item + ":" + dog[item]);
}


// オブジェクト問題(プロパティの削除)
// 変数dogのtypeプロパティを削除しましょう。
// 結果をfor..in文を使いコンソールに表示し、プロパティが削除されたことを確認してください。
delete dog.type;
for(var item in dog) {
  console.log(item + ":" + dog[item]);
}


// 関数問題
// 関数messageを定義し、関数内にコンソールを表示する処理を記載してください。その後、関数messageを実行してください。
function message() {
  console.log();
}
message();


// 関数問題(引数)
// 関数plusCalcを定義し、足し算の結果をコンソールに表示してください。また引数は2つ取り、返り値は使わないものとする。その後、関数pulsCalcを実行してください。
function plusCalc(num1, num2) {
  var plusCalc = num1 + num2;
  console.log(plusCalc);
}
plusCalc(10, 20);


// 関数問題(返り値)
// 関数multipliedCalcを定義し、掛け算の結果を返り値とする関数を作成してください。引数は2つ取るものとする。
function multipliedCalc(num3, num4) {
  var multipliedCalc = num3 * num4;
  return num3 * num4;
}

console.log(multipliedCalc(30, 40));


// 関数問題(オブジェクト)
// 以下の変数humanにメッセージを表示するmesメソッドを追加し、メソッドを実行してください。
// コンソールに表示する結果は以下となること。
// 私の名前はJimです
var human = {
  name: 'Jim',
  weight: 180,
  mes: function() {
    console.log("私の名前は"+ human.name + "です")
  }
};

human.mes();


// 関数問題(ローカル変数、グローバル変数)
// 以下の変数fruitの出力結果が異なる理由を記載してください。
// 理由：「りんご」は関数の外で定義された変数で、「バナナ」は関数内で定義された変数だから。

var fruit = 'りんご';

function getFruitName() {
  var fruit = 'バナナ';
  return fruit;
}

console.log(getFruitName()); // バナナ
console.log(fruit); // りんご


// 関数問題(ローカル変数、グローバル変数)
// 以下の変数countryの出力結果が同じとなる理由を記載してください。
// 理由：　「日本」が変数として定義されていないから。

country = '日本';

function getCountryName() {
  country = 'アメリカ';
  return country;
}

console.log(getCountryName()); // アメリカ
console.log(country); // アメリカ


// 関数問題(即時関数)
// 以下の記述を即時関数で囲んでください。またES2015以前の環境では即時関数を使ったほうが良い理由を記載してください。
// 理由 関数が短く書けるから。

var shop = (function() {
  return 'コンビニ'
}());
console.log(shop);


// 関数問題(無名関数)
// 以下の関数を無名関数に書き換えて実行してください。
var greet = function(name) {
  return name;
}

console.log(greet('Jim'));