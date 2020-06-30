'use strict';
window.onload = function() {
  // 仕様
  // ショッピングカートに入った商品の合計を求めます。
  // 商品はタブレット(10,000円)とパソコン(50,000円)の2つです。
  // 計算ボタンをクリックした時に小計、税額、合計を求めてください。
  // 求めるものは以下の3つです。
  // 小計･･･商品の価格と数量の合計
  // 税額･･小計の金額に対して発生する消費税
  // 合計･･･小計と消費税を足した値

  //ヒント
  // HTMLから取得した値は常に文字列になります。JSで計算するには文字列→数値に変換する必要があります。

  // 使いそうな変数を宣言。必要に応じて後から追加する
  var pc = document.getElementById('pc');
  var tablet = document.getElementById('tablet');
  var btn = document.getElementById('btn');
  var subtotal = document.getElementById('subtotal');
  var tax = document.getElementById('tax');
  var total = document.getElementById('total');
  // 定数は全て大文字で書くことが多い
  var TAXRATE = 10;
  var tabletPrice = document.getElementById('tabletPrice');
  var pcPrice = document.getElementById('pcPrice');

  btn.addEventListener('click' , function() {
    // パソコンの数量
    var pcNum = pc.selectedIndex;
    var pcSelect = pc[pcNum].value;

    //タブレットの数量
    var tabletNum = tablet.selectedIndex;
    var tabletSelect = tablet[tabletNum].value;

    //タブレットの金額　
    var tabletTotal = Number(tabletPrice.innerText) * Number(tabletSelect);

    //パソコンの金額
    var pcTotal = Number(pcPrice.innerText) * Number(pcSelect);

    //小計
    subtotal.textContent = tabletTotal + pcTotal;

    //税額
    tax.textContent = Number(subtotal.innerText) * (TAXRATE / 100);

    //合計
    total.textContent = Number(subtotal.innerText) + Number(tax.innerText);
  });
};

