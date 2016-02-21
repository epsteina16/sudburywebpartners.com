var main = function() {
  /* Push the body and the nav over by 285px over */
  var screenwidth = $(window).width();
  var calcmove = (screenwidth - 285);
  var wmpx = calcmove + "px"
  $('#open').click(function() {
    $('.menu').animate({
      left: wmpx
    }, 200);

    $('body').animate({
      left: "-285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "100%"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};


$(document).ready(main);
$(window).resize(main);
