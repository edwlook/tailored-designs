$(document).ready(function() {
	function animateWeCreate(duration) {
		$('#welcome h1:nth-of-type(4)').animate({
			opacity: 1
		}, duration);
	}
	function animateTailored(duration, delay) {
		$('#welcome h1:nth-of-type(5)').delay(delay).animate({
			opacity: 1
		}, duration);
	}	
	function animateApps(duration, delay) {
		$('#welcome h1:nth-of-type(1)').delay(delay).animate({
			left: '35%',
			opacity: 1
		}, duration);
	}	
	function animateWebsites(duration, delay) {
		$('#welcome h1:nth-of-type(2)').delay(delay).animate({
			left: '28%',
			opacity: 1
		}, duration);
	}
	function animateDesigns(duration, delay) {
		$('#welcome h1:nth-of-type(3)').delay(delay).animate({
			bottom: '30%',
			opacity: 1
		}, duration);
	}
	function animateSlide(nextElement, duration, delay) {
    	var destination = $(nextElement).offset().top;
    	$("html:not(:animated),body:not(:animated)").delay(delay).animate({scrollTop: destination}, duration);
	}

	if (window.location.hash === '' || window.location.hash === '#welcome') {
		
		animateWeCreate(1000);
		animateTailored(1000, 1000);
		animateApps(1000, 2000);
		animateWebsites(1000, 3000);
		animateDesigns(1000, 4000);
		animateSlide('#services', 1500, 6000);
		
		/*
		animateWeCreate(1);
		animateTailored(1, 1);
		animateApps(1, 1);
		animateWebsites(1, 1);
		animateDesigns(1, 1);
		*/
	} else {
		animateWeCreate(1);
		animateTailored(1, 1);
		animateApps(1, 1);
		animateWebsites(1, 1);
		animateDesigns(1, 1);
	}
	




	/* Hover state change + Hash url change */
	$('.content').bind('inview', function (event, visible) {
        var id = $(this).attr('id'),
        	link = $('#nav a[href="#'+ id +'"]');
        if (visible == true) {
			$(link).parent().addClass('active');
			var yScroll = document.body.scrollTop || document.documentElement.scrollTop;
			window.location.hash = id;
			document.documentElement.scrollTop = yScroll;
			document.body.scrollTop = yScroll;
        } else {
            $(link).parent().removeClass('active');
        }
	});


	/* Scroll animation */
	$('#sidebar a').click(function() {
	    var elementClicked = $(this).attr("href");
	    animateSlide(elementClicked, 500)
	    return false;
	});

	/* FitText */
	function resizeText(el, compressor) {
		$(el).fitText(compressor);
	}
	resizeText('#sidebar h2', 0.8);
	resizeText('#nav ul li', 0.7);
	resizeText('#social-icons', 2.2)
	resizeText('#welcome', 10);


}); 