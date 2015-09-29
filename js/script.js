$(document).ready(function(){
	
	// Calling our splashScreen plugin and
	// passing an array with images to be shown
	
	$('#promoIMG').splashScreen({
		textLayers : [
			'img/available_now.png',
			'img/more_elegant.png',
			'img/dreams.png'
		]
	});
	
	
	window.setTimeout(function () {
        location.href = "http://dronesanddreams.com/store/";
    }, 4500);
	
});
