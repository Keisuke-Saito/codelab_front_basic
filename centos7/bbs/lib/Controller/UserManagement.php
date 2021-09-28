<?php
namespace Bbs\Controller;
class UserManagement extends \Bbs\Controller {
  public function run() {
    $this->userList();
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      $this->managementUser();
    }
  }

  protected function userList() {
    $userAll = new \Bbs\Model\User();
    $users = $userAll->getUsersAll();
    // var_dump($users);
    // exit();
    foreach($users as $key => $value):
      $this->setValues('id', $key->value);
      $this->setValues('username', $key->value);
      $this->setValues('email', $key->value);
      $this->setValues('image', $key->value);
      $this->setValues('authority', $key->value);
      $this->setValues('delflag', $key->value);
    endforeach;
  }

  protected function managementUser() {
    try {
      $this->validate();
    } catch (\Bbs\Exception\InvalidName $e) {
      $this->setErrors('username', $e->getMessage());
    } catch (\Bbs\Exception\InvalidEmail $e) {
      $this->setErrors('email', $e->getMessage());
    } catch (\Bbs\Exception\InvalidNumber $e) {
      $this->setErrors('authority', $e->getMessage());
    } catch (\Bbs\Exception\InvalidNumber $e) {
      $this->setErrors('delflag', $e->getMessage());
    }
    $this->setValues('username', $_POST['username']);
    $this->setValues('email', $_POST['email']);
    $this->setValues('authority', $_POST['authority']);
    $this->setValues('delflag', $_POST['delflag']);
    if ($this->hasError()) {
      return;
    } else {
      try {
        $userData = new \Bbs\Model\User();
        $userData->userUpdate([
          'username' => $_POST['username'],
          'email' => $_POST['email'],
          'image' => $_POST['image'],
          'authority' => $_POST['authority'],
          'delflag' => $_POST['delflag']
        ]);
      } catch (\Bbs\Exception\DuplicateEmail $e) {
        $this->setErrors('email', $e->getMessage());
        return;
      }
    }
  }
  // $_SESSION['me']->username = $_POST['username'];
  // header('Location: '.SITE_URL . '/admin-users.php');
  // exit();

  private function validate() {
    if (!isset($_POST['token']) || $_POST['token'] !== $_SESSION['token']) {
      echo "不正なトークンです!";
      exit();
    }
    if (!filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {
      throw new \Bbs\Exception\InvalidEmail("メールアドレスが不正です!");
    }
    if ($_POST['username'] === '') {
      throw new \Bbs\Exception\InvalidName("ユーザー名が入力されていません!");
    }
    if ($_POST['authority'] !== 1 || 99) {
      throw new \Bbs\Exception\InvalidNumber("正しい値を入力してください!");
    }
    if ($_POST['delflag'] !== 0 || 1) {
      throw new \Bbs\Exception\InvalidNumber("正しい値を入力してください!");
    }
  }
}