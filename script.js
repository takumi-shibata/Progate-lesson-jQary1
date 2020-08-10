// 以下ES5の場合のコード、ES6の場合はfunction()の部分をアロー関数、変数をletに変えれば大丈夫
$(function() {
  // $('セレクタ').メソッド(引数);
  // hideメソッド：要素を隠す
  $('h1').hide();

  // fadeOutメソッド: 徐々に消えていくアニメーション
  // 引数に速度を指定する事も可能
  $('img').fadeOut(3000);
  

  // slideUpメソッド: 下から上へスライドするアニメーション
  // 引数に速度を指定する事も可能
  $('p').slideUp(3000);


  // idのセレクタにはシャープ(#)を用いる ※CSSも同様
  $('#title').slideUp();

  // classのセレクタにはドット(.)を用いる
  $('.lesson-item').fadeOut();


  // showメソッド: CSSのdisplay: none;などで隠れた要素を表示する事ができる
  $('#sub-title').show();
  
  // fadeInメソッド: fadeOutメソッドの反対。徐々に表示させていくアニメーション
  // CSSのdisplay: none;などで隠れた要素をアニメーション付きで表示させる事もできる
  // 引数に速度'slow'「ゆっくり」に指定することができる
  $('#image').fadeIn('slow'); 

  // slideDownメソッド: slideUpメソッドの反対。上から下へスライドするアニメーション
  // CSSのdisplay: none;などで隠れた要素をアニメーション付きで表示する事ができる
  // 引数に速度'slow'「ゆっくり」に指定することができる
  // $('セレクタ').slideDown();
});