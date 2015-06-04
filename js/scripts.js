$(document).ready(function(){

	$('#b1').click(function() {
		$('#hrwkd1').show();
		$('#tmtkn1').show();
		$('#cldby1').show();
		$('#hrwkd2').hide();
		$('#tmtkn2').hide();
		$('#cldby2').hide();
		$('#hrwkd3').hide();
		$('#tmtkn3').hide();
		$('#cldby3').hide();
		$('#hrwkd4').hide();
		$('#tmtkn4').hide();
		$('#cldby4').hide();
		$('#hrwkd5').hide();
		$('#tmtkn5').hide();
		$('#cldby5').hide();
	});

	$('#b2').click(function() {
		$('#hrwkd1').hide();
		$('#tmtkn1').hide();
		$('#cldby1').hide();
		$('#hrwkd2').show();
		$('#tmtkn2').show();
		$('#cldby2').show();
		$('#hrwkd3').hide();
		$('#tmtkn3').hide();
		$('#cldby3').hide();
		$('#hrwkd4').hide();
		$('#tmtkn4').hide();
		$('#cldby4').hide();
		$('#hrwkd5').hide();
		$('#tmtkn5').hide();
		$('#cldby5').hide();
	});

	$('#b3').click(function() {
		$('#hrwkd1').hide();
		$('#tmtkn1').hide();
		$('#cldby1').hide();
		$('#hrwkd2').hide();
		$('#tmtkn2').hide();
		$('#cldby2').hide();
		$('#hrwkd3').show();
		$('#tmtkn3').show();
		$('#cldby3').show();
		$('#hrwkd4').hide();
		$('#tmtkn4').hide();
		$('#cldby4').hide();
		$('#hrwkd5').hide();
		$('#tmtkn5').hide();
		$('#cldby5').hide();
	});

	$('#b4').click(function() {
		$('#hrwkd1').hide();
		$('#tmtkn1').hide();
		$('#cldby1').hide();
		$('#hrwkd2').hide();
		$('#tmtkn2').hide();
		$('#cldby2').hide();
		$('#hrwkd3').hide();
		$('#tmtkn3').hide();
		$('#cldby3').hide();
		$('#hrwkd4').show();
		$('#tmtkn4').show();
		$('#cldby4').show();
		$('#hrwkd5').hide();
		$('#tmtkn5').hide();
		$('#cldby5').hide();
	});

	$('#b5').click(function() {
		$('#hrwkd1').hide();
		$('#tmtkn1').hide();
		$('#cldby1').hide();
		$('#hrwkd2').hide();
		$('#tmtkn2').hide();
		$('#cldby2').hide();
		$('#hrwkd3').hide();
		$('#tmtkn3').hide();
		$('#cldby3').hide();
		$('#hrwkd4').hide();
		$('#tmtkn4').hide();
		$('#cldby4').hide();
		$('#hrwkd5').show();
		$('#tmtkn5').show();
		$('#cldby5').show();
	});

});

// By Chris Coyier & tweaked by Mathias Bynens

$(function() {

	// Find all YouTube videos
	var $allVideos = $("iframe[src^='http://www.youtube.com']"),

	    // The element that is fluid width
	    $fluidEl = $(".vidz");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

		$(this)
			.data('aspectRatio', this.height / this.width)
			
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');

	});

	// When the window is resized
	// (You'll probably want to debounce this)
	$(window).resize(function() {

		var newWidth = $fluidEl.width();
		
		// Resize all videos according to their own aspect ratio
		$allVideos.each(function() {

			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.data('aspectRatio'));

		});

	// Kick off one resize to fix all videos on page load
	}).resize();

});