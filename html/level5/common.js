$(function() {

  // カルーセル
  $('.choose_slide').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

  // アニメーション実行タイミング

  // アニメーション１（タイトル）
  $("h1").css({opacity:'1'});
  $("h1").addClass('active1');

  // アニメーション１（下線）
  setTimeout(function() {
    $(".title .line").css({opacity:'1'}).addClass('active2')
  },300);

  // アニメーション１（文章）
  setTimeout(function() {
    $(".title p").css({opacity:'1'}).addClass('active2')
  },400);

  // アニメーション２（タイトル）
  $(window).scroll(function() {
    $(".contents1 h2").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).css({opacity:'1'}).addClass('active3');
      }
    });
  });

  // アニメーション２（下線）
  $(window).scroll(function() {
    $(".contents1 .line").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        setTimeout(function() {
        $(".contents1 .line").css({opacity:'1'}).addClass('active4');
        },100)
      }
    });
  });

  // アニメーション２（文章）
  $(window).scroll(function() {
    $(".contents1 .regular_text").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        setTimeout(function() {
          $(".contents1 .regular_text").css({opacity:'1'}).addClass('active3');
        },200)
      }
    });
  });

  // アニメーション３、４、８
  $(window).scroll(function() {
    $(".link_box1").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).css({opacity:'1'}).addClass('active5');
      }
    });
  });

  // アニメーション５（タイトル）
  $(window).scroll(function() {
    $(".contents5 h2").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).css({opacity:'1'}).addClass('active3');
      }
    });
  });

  // アニメーション５（ロゴ）
  $(window).scroll(function() {
    $(".clients_photo img:first-child").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        setTimeout(function() {
        $(".clients_photo img:first-child").css({opacity:'1'}).addClass('active6');
        },200)
      }
    });
  });

  $(window).scroll(function() {
    $(".clients_photo img:nth-child(2)").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        setTimeout(function() {
        $(".clients_photo img:nth-child(2)").css({opacity:'1'}).addClass('active6');
        },300)
      }
    });
  });

  $(window).scroll(function() {
    $(".clients_photo img:nth-child(3)").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        setTimeout(function() {
        $(".clients_photo img:nth-child(3)").css({opacity:'1'}).addClass('active6');
        },400)
      }
    });
  });

  $(window).scroll(function() {
    $(".clients_photo img:nth-child(4)").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        setTimeout(function() {
        $(".clients_photo img:nth-child(4)").css({opacity:'1'}).addClass('active6');
        },500)
      }
    });
  });

  $(window).scroll(function() {
    $(".clients_photo img:last-child").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        setTimeout(function() {
        $(".clients_photo img:last-child").css({opacity:'1'}).addClass('active6');
        },600)
      }
    });
  });

  // アニメーション６（タイトル）
  $(window).scroll(function() {
    $(".contents6 h2").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).css({opacity:'1'}).addClass('active7');
      }
    });
  });

  // アニメーション６（文章）
  $(window).scroll(function() {
    $(".contents6 .regular_text").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        setTimeout(function() {
        $(".contents6 .regular_text").css({opacity:'1'}).addClass('active7');
        },100)
      }
    });
  });

  // アニメーション７（タイトル）
  $(window).scroll(function() {
    $(".contents8 h2").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).css({opacity:'1'}).addClass('active8');
      }
    });
  });

  // アニメーション７（下線）
  $(window).scroll(function() {
    $(".contents8 .line").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        setTimeout(function() {
        $(".contents8 .line").css({opacity:'1'}).addClass('active8');
        },100)
      }
    });
  });

  // アニメーション７（文章）
  $(window).scroll(function() {
    $(".contents8 .regular_text").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        setTimeout(function() {
        $(".contents8 .regular_text").css({opacity:'1'}).addClass('active8');
        },200)
      }
    });
  });

  // アニメーション９（タイトル）
  $(window).scroll(function() {
    $(".contents10 h2").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).css({opacity:'1'}).addClass('active3');
      }
    });
  });

  // アニメーション９（下線）
  $(window).scroll(function() {
    $(".contents10 .line").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        setTimeout(function() {
        $(".contents10 .line").css({opacity:'1'}).addClass('active3');
        },100)
      }
    });
  });

  // アニメーション９（文章）
  $(window).scroll(function() {
    $(".contents10 .regular_text").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        setTimeout(function() {
        $(".contents10 .regular_text").css({opacity:'1'}).addClass('active3');
        },200)
      }
    });
  });

  // アニメーション１０（左）
  $(window).scroll(function() {
    $(".adress").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).css({opacity:'1'}).addClass('active9');
      }
    });
  });

  // アニメーション１０（右）
  $(window).scroll(function() {
    $(".form_container").each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).css({opacity:'1'}).addClass('active10');
      }
    });
  });
});