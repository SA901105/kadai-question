  /* 1. メインビジュアルをカルーセルにする */
  $(function (){
  // slickを利用してカルーセルを実装する
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1500,
    fade: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  });
});

/* 3. スクロールしたときにTOPに戻るボタンを表示させる */
$(function () {
  const topBtn = $('#back-btn');
  topBtn.hide();

    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
      if($(this).scrollTop() > 100) {
        // ボタンの非表示
        topBtn.fadeIn();
      } else {
        //  ボタンの非表示方法
        topBtn.fadeOut();
      }
      });
      // スクロールしてトップに戻る
      topBtn.click(function () {
        $('body, html').animate ({
          scrollTop: 0
        }, 500);
        return false;
      });
    });


/* 2. リンクのホバー時に不透明度をアニメーションで変更する */
$(function () {
  $('.hover').hover (function () {
    // 透明度を0.5にする
    $(this).fadeTo ('opacity', 0.5);
  }, function(){
    // ポインターが外れたら、透明度を元（１．０）に戻す
    $(this).fadeTo ('opacity',1.0);
  });
});

/* 4.ページ内リンクのスクロールをなめらかにする */
$(function (){
  $('a[href^="#"]').click (function () {
    // スクロールする速さを0.5秒に指定  
    const speed = 500;

    // リンクをクリックした時のジャンプ先を取得する
    const href = $(this).attr('href');

    // 空白or#のみだったらリンク先を「html」に設定
    const target = $(href == "#" || href == "" ? 'html' : href);

    // リンク先の座標を取得する
    const position = target.offset().top;

    $('html, body').animate ({scrollTop: position}, speed, "swing");
  });
});

/* 6. Worksの画像をクリックしたときにモーダルで拡大表示する */
$(function(){
  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.works img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false
  });

  // 閉じるボタンをクリックしたときにモーダルを閉じる
  $('.close-btn').click(function () {
    $('.modal').fadeOut();
    return false
  });
});

