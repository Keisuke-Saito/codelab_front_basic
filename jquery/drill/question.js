$(function() {
  // 例題：h3タグを選択し、文字の色を赤色に変えてください。
  $("h3").css("color", "red");

  // 問題1:タイプセレクター
  // h4タグを選択し、文字の色を赤色に変えてください。
  $("h4").css("color", "red");

  // 問題2:IDセレクター
  // id属性「q2」を選択し、文字の色を赤色に変えてください。
  $("#q2").css("color", "red");

  // 問題3:クラスセレクター
  // クラス属性「q3」を選択し、文字の色を赤色に変えてください。
  $(".q3").css("color", "red");

  // 問題4:子孫セレクター
  // 子孫セレクターを使い、spanタグ内の文字の色を赤色に変えてください。
  $(".col-sm-8 .q4 span").css("color", "red");

  // 問題5:グループセレクター
  // グループセレクターを使い、id属性「q50」「q51」「q52」のspanタグ内の文字の色を赤色に変えてください。
  $("#q50, #q51, #q52").css("color", "red");

  // 問題6:子セレクター
  // 子セレクターを使い、spanタグ内の文字の色を赤色に変えてください。
  $(".q6 > span").css("color", "red");

  // 問題7:隣接セレクター
  // 隣接セレクターを使い、クラス属性item2の文字の色を赤色に変えてください。
  $(".q7 + li").css("color", "red");


  // 問題8:first-child疑似クラス
  // 疑似クラスを使い、クラス属性「q8」の最初の要素の文字の色を赤色に変えてください。
  $(".q8 li:first-child").css("color", "red");

  // 問題9:間接セレクター
  // 間接セレクターを使い、クラス属性「q9」より後にあるp要素の文字の色を赤色に変えてください。
  $(".q9 ~ p").css("color", "red");

  // 問題10:否定疑似クラス
  // クラス属性「q10」のli要素において、最初以外の要素の文字の色を赤色に変えてください。
  $(".q10 li:not(:first-child)").css("color", "red");

  // 問題11:疑似クラス empty
  // 疑似クラスemptyを使い、li要素が空の時、リストの中点の色を赤色に変えてください。
  $(".q11 li:empty").css("list-style", "disc");
  $(".q11 li:empty").css("color", "red");

  // 問題12:疑似クラス nth-child
  // 疑似クラスnth-childを使い、li要素の2番目の、リストの文字の色を赤色に変えてください。
  $(".q12 li:nth-child(2)").css("color", "red");

  // 問題13:疑似クラス last-child
  // 疑似クラスlast-childを使い、li要素の最後のみ、リストの文字の色を赤色に変えてください。
  $(".q13 li:last-child").css("color", "red");

  // 問題14:疑似クラス only-child
  // 疑似クラスonly-childを使い、span要素のみ、リストの文字の色を赤色に変えてください。
  $(".q14 li span:only-child").css("color", "red");

  // 問題15:疑似クラス nth-last-child
  // 疑似クラスnth-last-childを使い、後ろから数えて2番目の、リストの文字の色を赤色に変えてください。
  $(".q15 li:nth-last-child(2)").css("color", "red");

  // 問題16:疑似クラス nth-of-type
  // 疑似クラスnth-of-typeを使い、前から数えて2番目の、dd要素の文字の色を赤色に変えてください。
  $(".q16 dd:nth-of-type(2)").css("color", "red");

  // 問題17:疑似クラス nth-last-of-type
  // 疑似クラスnth-last-of-typeを使い、後ろから数えて2番目の、dd要素の文字の色を赤色に変えてください。
  $(".q17 dd:nth-last-of-type(2)").css("color", "red");

  // 問題18:疑似クラス first-of-type
  // 疑似クラスfirst-of-typeを使い、最初のdd要素のみ文字の色を赤色に変えてください。
  $(".q18 dd:first-of-type").css("color", "red");

  // 問題19:疑似クラス last-of-type
  // 疑似クラスlast-of-typeを使い、最後のdd要素のみ文字の色を赤色に変えてください。
  $(".q19 dd:last-of-type").css("color", "red");

  // 問題20:疑似クラス　only-of-type
  // 疑似クラスonly-of-typeを使い、dt要素のみ文字の色を赤色に変えてください。
  $(".q20 dt:only-of-type").css("color", "red");

  // 問題21:特定の属性
  // id属性を持つ要素の位、文字の色を赤色に変えてください。
  $(".q21 li[id]").css("color", "red");

  // 問題22:特定の属性値
  // クラス属性値が「q22item」を持つ要素の文字の色を赤色に変えてください。
  $(".q22 li[class = 'q22item']").css("color", "red");

  // 問題23:特定の属性値を持たない
  // クラス属性値が「q23item」を持たない要素の文字の色を赤色に変えてください。
  $(".q23 li[class != 'q23item']").css("color", "red");

  // 問題24:特定の属性値で始まっている
  // クラス属性値が「t」で始まっている要素の文字の色を赤色に変えてください。
  $(".q24 li[class ^= 't']").css("color", "red");

  // 問題25:特定の属性値で終わっている
  // クラス属性値が「e」で終わっている要素の文字の色を赤色に変えてください。
  $(".q25 li[class $= 'e']").css("color", "red");

  // 問題26:特定の属性値を含んでいる
  // クラス属性値が「o」を含んでいる要素の文字の色を赤色に変えてください。
  $(".q26 li[class *= 'o']").css("color", "red");

  // 問題27:複数の属性セレクターに該当する
  // クラス属性値が「o」「t」両方を含んでいる要素の文字の色を赤色に変えてください。
  $(".q27 li[class *= 'o'][class *= 't']").css("color", "red");

  // 問題28:firstセレクター
  // firstセレクターを使い、一番最初のli要素の文字の色を赤色に変えてください。
  // 補足：first-childだと2つ変更されてしまいます。
  $(".q28 > li:first").css("color", "red");

  // 問題29:lastセレクター
  // lastセレクターを使い、一番最後のli要素の文字の色を赤色に変えてください。
  // 補足：last-childだと2つ変更されてしまいます。
  $(".q29 > li:last").css("color", "red");

  // 問題30:evenセレクター
  // evenセレクターを使い、偶数番目のli要素の文字の色を赤色に変えてください。
  $(".q30 li:nth-child(even)").css("color", "red");

  // 問題31:oddセレクター
  // oddセレクターを使い、奇数番目のli要素の文字の色を赤色に変えてください。
  $(".q31 li:nth-child(odd)").css("color", "red");

  // 問題32:eqセレクター
  // eqセレクターを使い、3番目のli要素の文字の色を赤色に変えてください。
  $(".q32 li:eq(2)").css("color", "red");

  // 問題33:ltセレクター
  // ltセレクターを使い、li要素の1番目と2番目の文字の色を赤色に変えてください。
  $(".q33 li:lt(2)").css("color", "red");

  // 問題34:gtセレクター
  // gtセレクターを使い、最後のli要素の文字の色を赤色に変えてください。
  $(".q34 li:gt(2)").css("color", "red");

  // 問題35:headerセレクター
  // headerセレクターを使い、heading要素をまとめて選択変えてください。
  $(".q35 :header").css("color", "red");

  // 問題36:containsセレクター
  // containsセレクターを使い、テキストに「jQuery」が含まれるli要素の文字の色を赤色に変えてください。
  $(".q36 li:contains(jQuery)").css("color", "red");

  // 問題37:hasセレクター
  // hasセレクターを使い、span要素を持つli要素の文字の色を赤色に変えてください。
  $(".q37 li:has(span)").css("color", "red");

  // 問題38:parentセレクター
  // parentセレクターを使い、何らかの子要素が含まれるli要素の文字の色を赤色に変えてください。
  $(".q38 li:parent").css("color", "red");

  // 問題39:childrenメソッド
  // childrenメソッドを使い、クラスq39の直下のa要素のみ文字の色を赤色に変えてください。
  $(".q39 p").children('a').css("color", "red");

  // 問題40:findメソッド
  // findメソッドを使い、クラスq40より下にあるa要素の文字の色を赤色に変えてください。2箇所色が変われば正解。
  $(".q40").find('a').css("color", "red");

  // 補足：childrenメソッドは直下の子要素を取得する。findメソッドは子孫要素を取得する

  // 問題41:prevメソッド
  // prevメソッドを使い、クラスpre-itemの前のli要素の文字の色を赤色に変えてください。
  $(".q41 .pre-item").prev().css("color", "red");

  // 問題42:parentsメソッド
  // parentsメソッドを使い、クラスq42itemの親要素クラスq42を取得し、背景色を赤色に変えてください。
  $(".q42item").parent().css("background", "red");

  // 問題43:nextメソッド
  // nextメソッドを使い、クラスq43の兄弟要素の次の要素の文字の色を赤色に変えてください。
  $(".q43").next().css("color", "red");

  // 問題44:siblingsメソッド
  // siblingsメソッドを使い、クラスsecound以外の要素の文字の色を赤色に変えてください。
  $(".q44 .secound").siblings().css("color", "red");

  // 問題45:attrメソッド
  // attrメソッドを使い、a要素のhref属性を、https://codelabo.net/training/に書き換えてください。
  $(".q45 a").attr('href','https://codelabo.net/training/');

  // 問題46:dataメソッド、textメソッド
  // dataメソッドを使い、クラスq46のカスタム属性numの値を取得し、変数に代入してください。
  // またtextメソッドを使い、変数をクラスq46内のテキストに表示してください。
  const num = $(".q46").data('num');
  $(".q46").text(num);

  // 問題47:prependメソッド
  // prependメソッドを使い、<p>追加テキストテキスト</p> をクラスq47内の最初に表示してください。
  $(".q47").prepend('<p>追加テキストテキスト</p>');

  // 問題48:要素を最後に挿入 appendメソッド
  // appendメソッドを使い、<p>追加テキストテキスト</p> をクラスq48内の最後に表示してください。
  $(".q48").append('<p>追加テキストテキスト</p>');

  // 問題49：要素の置き換え replaceWithメソッド
  // replaceWithメソッドを使い、クラスq49のp要素を　<h2>置き換え後</h2>に書き換えてください。
  $(".q49 p").replaceWith('<h2>置き換え後</h2>');

  // 問題50：要素の削除 removeメソッド
  // removeメソッドを使い、クラスq50のp要素を削除してください。
  $(".q50 p").remove();

  // 問題51：クラス属性の追加 addClassメソッド
  // addClassメソッドを使い、クラスq51のp要素にクラスredを追加してください。
  $(".q51 p").addClass('red');

  // 問題52：クラス属性の削除 removelassメソッド
  // removeClassメソッドを使い、クラスq52のp要素のクラスredを削除してください。
  $(".q52 p").removeClass('red');

  // 問題53：メソッドチェーン
  // 以下の2行のコードをメソッドチェーンを使い、1行にまとめてください。
  // $(".q53 p").addClass("red");
  // $(".q53 p").append("<span>追加テキスト</span>");
  $(".q53").addClass('red').append("<span>追加テキスト</span>");

  // 問題54：イベント click
  // ボタンをクリックしたとき、クラスq54内の最後に<p>追加テキストテキスト</p>を追加してください。
  $(".q54 button").on('click',function(){
    $(".q54").append('<p>追加テキストテキスト</p>');
  })

  // onメソッドについては以下を参照
  // https://qiita.com/shizuma/items/d561f37f864c3ebb5096

});