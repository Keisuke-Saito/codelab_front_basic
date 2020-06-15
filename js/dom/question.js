'use strict';
// 例題 コンソールに数値「1」を出力してください。
// console.log(1);

// 問題1：要素の取得
// id属性txt1の要素を取得し、変数txt1に代入してください。
// 代入後、変数txt1をコンソールに表示してださい。
var txt1 = document.getElementById('txt1');
console.log(txt1);


// 問題2：テキストの取得
// id属性txt2の要素を取得し、変数txt2に代入してください。
// txt2要素配下のテキストを取得し、コンソールに表示してください。
// ただしHTMLタグを含むもの、含まないもの両方の方法で表示すること。
var txt2 = document.getElementById('txt2');
console.log(txt2.textContent);
console.log(txt2);


// 問題3：テキストの書き換え
// id属性txt2配下のテキストを「書き換えました」という文字列に書き換えてください。
txt2.innerHTML = '書き換えました';


// 問題4：イベント(クリック)
// 取得ボタンをクリックしたとき、id属性txt3のテキストを取得し、id属性txt4に表示してください。
document.getElementById('btn1').onclick = function() {
  var txt3 = document.getElementById('txt3');
  document.getElementById('txt4').innerHTML = txt3.textContent;
}


// 問題5：イベント(サブミット) / フォーム部品の取得(テキスト)
// 送信ボタンをクリックしたとき、フォーム部品(id属性input1のvalue)の値を取得し、id属性txt5に出力してください。
document.forms['form1'].elements[1].onclick = function() {
  document.getElementById('txt5').innerHTML = document.forms['form1'].elements['input1'].value;
}


// 問題6：フォーム部品の取得(セレクトボックス)
// 送信ボタンをクリックしたとき、セレクトボックス(name属性item1のvalue)の選択中の値を取得し、id属性result1に出力してください。
document.forms['form2'].elements[1].onclick = function() {
  document.getElementById('result1').innerHTML = document.forms['form2'].elements['item1'].value;
}

// 問題7：フォーム部品の取得(チェックボックス)
// 送信ボタンをクリックしたとき、チェックボックス(name属性item1のvalue)の選択中の値を取得し、id属性result2に出力してください。
document.forms['form3'].elements[3].onclick = function() {
  var checkbox = document.getElementsByName('check');
  for (var i=0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      document.getElementById('result2').innerHTML = checkbox[i].value;
    }
  }
}


// 問題8：フォーム部品の取得(ラジオ)
// 送信ボタンをクリックしたとき、ラジオボタン(name属性item1のvalue)の選択中の値を取得し、id属性result3に出力してください。
document.forms['form4'].elements[3].onclick = function() {
  var radio = document.getElementsByName('radio');
  for (var i=0; i < radio.length; i++) {
    if (radio[i].checked) {
      document.getElementById('result3').innerHTML = radio[i].value;
    }
  }
}


// 問題9：バリデーションチェック
// 会社名が未入力のまま送信ボタンをクリックしたとき、「会社名が未入力です。」というアラートを表示してください。また未入力の場合は、処理を中断してください。
document.forms['form5'].elements[1].onclick = function() {
  var comp = document.forms['form5'].elements['company'].value;
  if(comp == '') {
    alert('会社名が未入力です。');
  }
}


// 問題10：CSSの操作
// id属性txt6のCSSプロパティを以下に変更してください。
// また変更するタイミングは画面表示時とする。
// 文字色→赤色、フォントサイズ→32px
var txt6 = document.getElementById('txt6');
txt6.style.color = 'red';
txt6.style.fontSize = '32px';


// 問題11：ノード追加
// 追加ボタンをクリックしたとき、id属性parentの子要素にpタグを追加し、pタグに「ノード追加テキスト」というテキストを追加してください。
var btn2 = document.getElementById('btn2');
btn2.onclick = function() {
  var parent = document.getElementById('parent');
  var p = document.createElement('p');
  p.appendChild(document.createTextNode('ノード追加テキスト'));
  parent.appendChild(p);
}


// 問題12：ノード削除
// 削除ボタンをクリックしたとき、id属性parentの子要素を削除してください。
var btn3 = document.getElementById('btn3');
btn3.onclick = function() {
  var parent = document.getElementById('parent');
  parent.removeChild(parent.firstChild);
}


// 問題13：属性取得・変更
// 変更ボタンをクリックしたとき、id属性link1のhref属性を取得し、コンソールに表示してください。またhref属性を「https://www.yahoo.co.jp」に書き換えてください。
var btn4 = document.getElementById('btn4');
btn4.onclick = function() {
  var link1 = document.getElementById('link1');
  console.log(link1.getAttribute('href'));
  link1.href = 'https://www.yahoo.co.jp';
}


// 問題14：クエリーセレクター / カスタム属性 / this
// querySelectorAllを使い、id属性list1の子要素のliを全て取得してください。
// liをクリックしたとき、カスタム属性numの値を取得し、コンソールに表示してください。
// その場合、クリックした要素のカスタム属性のみ取得すること。
// 例 list２のliをクリックしたときはコンソールに「2」を表示する
var query = document.querySelectorAll('#list1 li');
console.log(query);


for(var i =0; i < query.length; i++) {
  query[i].addEventListener('click', function() {
    console.log(this.dataset.num);
  },false);
}


// 問題15-1：クラスの操作(追加)
// 追加ボタンをクリックしたとき、id属性txt7にクラスredを追加してください。
var btn5 = document.getElementById('btn5');
var txt7 = document.getElementById('txt7');
btn5.addEventListener('click', function() {
  txt7.classList.add('red');
},false);


// 問題15-2：クラスの操作(削除)
// 削除ボタンをクリックしたとき、id属性txt7にクラスredを削除してください。
var btn6 = document.getElementById('btn6');
btn6.addEventListener('click', function() {
  txt7.classList.remove('red');
},false);


// 問題15-3：クラスの操作(切り替え)
// 切り替えボタンをクリックしたとき、id属性txt7にクラスredがあれば削除し、なければ追加してください。
var btn7 = document.getElementById('btn7');
btn7.addEventListener('click', function() {
  txt7.classList.toggle('red');
},false);