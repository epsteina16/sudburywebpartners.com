$(window).load(function(){
	$('.active').show();
	var el = document.getElementById('cs');
	var rect = el.getBoundingClientRect();
	var recty = rect.top;
	var heightslide = $('#cs').height();
	var halfhs = (heightslide/2);
	var arrowpos = (halfhs + recty);
	$('#rightarrow').css({
		'top': arrowpos + 'px'
	});
	$('#leftarrow').css({
		'top': arrowpos + 'px'
	});
	$('#rightarrow').click(function(){
		var activeslide = $('.active')
		var nextslide = activeslide.next();
		if(nextslide.length === 0){
			nextslide = $('.content-slide').first();
		}
		activeslide.fadeOut(600).removeClass('active');
    	nextslide.fadeIn(600).addClass('active');
    	$('.active').show();
	});
	$('#leftarrow').click(function(){
		var activeslide = $('.active')
		var prevslide = activeslide.prev();
		if(prevslide.length === 0){
			prevslide = $('.content-slide').last();
		}
		activeslide.fadeOut(600).removeClass('active');
		prevslide.fadeIn(600).addClass('active');
		$('.active').show();
	});

})