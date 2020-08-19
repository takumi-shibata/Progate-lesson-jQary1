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


  // イベント: $('セレクタ').イベント名(function(){ $('セレクタ').メソッド();});
  // clickイベント：セレクタがクリックされた時に処理を行うイベント
  $('#hide-text').click(function() {
    $('#h4-text').slideUp();
  });


  // CSSメソッド: CSSを変更・追加できるメソッド
  // $('セレクタ').css('CSSのプロパティ名','値');
  $('#change-css').click(function() {
    $('#h5-text').css('color','red');
    $('#h5-text').css('font-size','50px');
  });


  // textメソッド: 文字列を変更することが出来る
  // $('セレクタ').text('書き換える文字列');
  $('#change-text').click(function() {
    $('#h6-text').text('ようこそ、Progateへ');
  });

  // htmlメソッド: 文字列の変更とhtmlを追加できるメソッド
  // $('セレクタ').html('<追加するHTML>書き換える文字列</>'');
  $('#change-html').click(function() {
    $('#h6-text').html('<a href="https://prog-8.com/">ようこそ、Progateへ</a>');
  });


  // this: 複数の要素にイベントが設定されていた場合、クリックした対象のモノにだけイベントの処理を行う
  // $(this).イベント名 ※thisは「''」で囲まない！
  $('.list-item').click(function() {
    $(this).css('color','red');
  });


  // 変数の使用: 同じセレクタを複数回使用する時は変数を使用する
  // var $変数名 = $('変数名に代入するidやclass、セレクタ');
  // メソッドチェーン: 1つのオブジェクトに連続してメソッドが利用できる構文 $('セレクタ').メソッド().メソッド()...
  $('.h7-btn').click(function() {
    // $('#h7-title')こんにちは、にんじゃわんこさんを変数名$titleに代入
    var $title = $('#h7-title');
        
    // メソッドチェーン
    $title.css('color','red').text('こんばんは').fadeOut(1000);
  });
});