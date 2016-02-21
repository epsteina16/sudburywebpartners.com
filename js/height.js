$(window).load(function(){
	var h = window.innerHeight;
	var w = $(window).width();
	var calcH = (h * 0.2);
	if (w > 650) {
		$('.cl-effect-13').css({
		'height': calcH + 'px'
		});
	}
	else{
		$('.cl-effect-13').css({
		'height': '250px'
		});
	}

});
$(window).resize(function(){
	var h = window.innerHeight;
	var w = $(window).width();
	var calcH = (h * 0.2);
	if (w > 650) {
		$('.cl-effect-13').css({
		'height': calcH + 'px'
		});
	}
	else{
		$('.cl-effect-13').css({
		'height': '250px'
		});
	}
});