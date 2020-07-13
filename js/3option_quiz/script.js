var mask = document.getElementById('mask');
var answer = document.getElementById('answer');
var modal = document.getElementById('modal');
var result = document.getElementById('result');
var close = document.getElementById('close');

answer.addEventListener('click', function() {
  var correct = 0;　 // 正解数を加算していく。

  // 問題1
  var question1 = document.getElementsByName('question1');
  var answer1
  for (var i = 0; i < question1.length; i++) {
    if (question1[i].checked) {
      answer1 = question1[i].value;
      break;
    }
  }
  if (answer1 == 2) {
    correct++;
  }

  // 問題2
  var question2 = document.getElementsByName('question2');
  var answer2
  for (var i = 0; i < question2.length; i++) {
    if (question2[i].checked) {
      answer2 = question2[i].value;
      break;
    }
  }
  if (answer2 == 3) {
    correct++;
  }

  // 問題3
  var question3 = document.getElementsByName('question3');
  var answer3
  for (var i = 0; i < question3.length; i++) {
    if (question3[i].checked) {
      answer3 = question3[i].value;
      break;
    }
  }
  if (answer3 == 2) {
    correct++;
  }

  // 最終的な正解数「correct」から正答率を求める。
  var correctRate = Math.floor(parseInt(correct) / 3 * 100);

  // 正答率を表示
  result.innerHTML = '正答率は' + correctRate + '%でした。';

  // 半透明の背景を出現させる。
  mask.style.display = 'block';

  // モーダルを出現させる。
  modal.style.display = 'block';
  modal.classList.add('show');
})


// 「閉じる」ボタンでモーダルウィンドウを非表示にする。
close.addEventListener('click', function() {
  mask.style.display = 'none';
  modal.style.display = 'none';
})

// モーダルウィンドウ中の背景をクリックでモーダルウィンドウを非表示にする。
window.addEventListener('click', function(e) {
  if (e.target == mask) {
    mask.style.display = 'none';
    modal.style.display = 'none';
  }
})