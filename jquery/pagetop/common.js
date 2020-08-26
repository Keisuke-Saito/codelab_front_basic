$(function() {
  $("#pageTop").on('click', function() {
    $("body, html").animate({scrollTop:0},"slow");
    return false;
  })

  $("#pageTop").hide();

  $(window).scroll(function() {
    const now = $(window).scrollTop();
    if(now > 150) {
      $("#pageTop").fadeIn('slow');
    } else {
      $("#pageTop").fadeOut('slow');
    }
  })
})