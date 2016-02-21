$(window).load(function(){
    var imgh = $('#goodnow').height();
    var half = (imgh / 2);
    var tw = $('#headerh1').width();
    var sw = $(window).width();
    tw = (sw - tw);
    tw = (tw / 2);
    $('#headerh1').css({
        'left': tw + 'px'
    });
    var menuheight = $('.cl-effect-13').height();
    if (sw < 650){
        $('#goodnow').css({
            'top': menuheight + 'px'
        });
        var p = menuheight + half;
        var quep = menuheight + imgh;
        $('#headerh1').css({
            'top': p + 'px'
        });
        $('.faqtextholder').css({
            'top': quep + 'px'
        });
    }
    else {
        $('#goodnow').css({
            'top': 0
        });
        $('#headerh1').css({
            'top': half + 'px'
        });
        $('.faqtextholder').css({
            'top': imgh + 'px'
        });
    }
});
$(window).resize(function(){
    var imgh = $('#goodnow').height();
    var half = (imgh / 2);
    var tw = $('#headerh1').width();
    var sw = $(window).width();
    tw = (sw - tw);
    tw = (tw / 2);
    $('#headerh1').css({
        'left': tw + 'px'
    });
    var menuheight = $('.cl-effect-13').height();
    if (sw < 650){
        $('#goodnow').css({
            'top': menuheight + 'px'
        });
        var p = menuheight + half;
        var quep = menuheight + imgh;
        $('#headerh1').css({
            'top': p + 'px'
        });
        $('.faqtextholder').css({
            'top': quep + 'px'
        });
    }
    else {
        $('#goodnow').css({
            'top': 0
        });
        $('#headerh1').css({
            'top': half + 'px'
        });
        $('.faqtextholder').css({
            'top': imgh + 'px'
        });
    }
});