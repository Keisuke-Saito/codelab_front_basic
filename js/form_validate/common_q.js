'use strict';
var form = document.getElementById('form');
var errName = document.getElementById('err-name');
var errKana = document.getElementById('err-kana');
var errTel = document.getElementById('err-tel');
var errMail = document.getElementById('err-mail')


form.addEventListener('submit' , function(e) {
  if (form.name.value === '') {
    errName.innerHTML = '名前が未入力です。';
    errName.classList.add('red');
    e.preventDefault();
  }
  else {
    errName.innerHTML = '';
  }
  if (form.kana.value.match(/^[ァ-ン]+$/) == null) {
    errKana.innerHTML = '全角カナで入力してください。';
    errKana.classList.add('red');
    e.preventDefault();
  }
  else {
    errKana.innerHTML = '';
  }
  if (form.tel.value.match(/^\d{7,13}$/) == null) {
    errTel.innerHTML = '電話番号をハイフンなしで入力してください。';
    errTel.classList.add('red');
    e.preventDefault();
  }
  else {
    errTel.innerHTML = '';
  }
  if (form.mail.value.match(/^\w{1}[\w_.-]*@{1}[\w_.-]{1,}\.\w{1,}$/) == null) {
    errMail.innerHTML = 'メールアドレスの形式ではありません。';
    errMail.classList.add('red');
  e.preventDefault();
  }
  else {
    errMail.innerHTML = '';
  }
})