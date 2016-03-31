$(window).keypress(function(event)) {
	console.log(event.which);
		if (event.which == 97 || event.which == 65) {
			var newLetter = $(".alphabet /letter-a /letter").clone();
			$("body").append(newLetter);

}

});