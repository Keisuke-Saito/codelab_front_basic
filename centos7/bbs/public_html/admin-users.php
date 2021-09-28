<?php
require_once(__DIR__ .'/header.php');
$app = new Bbs\Controller\UserManagement();
$app->run();
var_dump($app);
exit();
?>
<h1 class="page__ttl">ユーザーテーブル管理画面</h1>
<form action="signup-users.php" class="form-group">
  <div class="form-group">
    <input type="submit" value="新規登録画面へ" class="btn btn-primary">
  </div>
</form>
<p>更新または削除を行うユーザーを選択してください。</p>
  <form action="" method="post" id="useredit" class="form-group">
    <table class="table" border = "1">
      <tr>
        <td></td>
        <td>id</td>
        <td>ユーザー名</td>
        <td>メールアドレス</td>
        <td>ユーザー画像</td>
        <td>権限</td>
        <td>削除フラグ</td>
      </tr>
      <?php foreach($app as $value): ?>
        <tr>
          <td><input type="radio">
            <td><?= h($value->id); ?></td>
            <td>
              <input type="text" name="username" value="<?= isset($value->getValues->username) ? h($value->getValues->username): ''; ?>">
            </td>
            <td>
              <input type="text" name="email" value="<?= isset($user->getValues->email) ? h($user->getValues->email): ''; ?>">
            </td>
            <td>
              <input type="text" name="image" value="<?= isset($user->getValues->image) ? h($user->getValues->image): ''; ?>">
            </td>
            <td>
              <input type="text" name="authority" value="<?= isset($user->getValues->authority) ? h($user->authority): ''; ?>">
            </td>
            <td>
              <input type="text" name="delflag" value="<?= isset($user->getValues->delflag) ? h($user->getValues->delflag): ''; ?>">
            </td>
          </td>
        </tr>
      <?php endforeach; ?>
    </table>
    <div class="form-group">
      <button class="btn btn-primary" onclick="document.getElementById('useredit').submit();">更新</button>
      <input type="hidden" name="token" value="<?= h($_SESSION['token']); ?>">
    </div>
  </form>
</div>
<?php
require_once(__DIR__ . '/footer.php');
?>
