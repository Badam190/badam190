$('.reveal').click(function() {
	$('.m-obscured').removeClass('m-obscured');
	$('.a-obscured').removeClass('a-obscured');
	$('.n-obscured').removeClass('n-obscured');
	$('.mtwo-obscured').removeClass('mtwo-obscured');
	$('.atwo-obscured').removeClass('atwo-obscured');
	$('.d-obscured').removeClass('d-obscured');
	$('.e-obscured').removeClass('e-obscured');
});

// css transitions instead of animate would make it
//move and let us keep the removeClass solution

// $('.a').click(function() {
// 	$(this).css({top: '10px', left: '30px'});
// 	$(this).css({transform: 'rotate(0)'});
// });

$('.a').click(function() {
	$(this).animate({
		top: '10px',
		left: '30px', 
	}, 1000);
	$(this).css({transform: 'rotate(0deg)'})
});

// $('.a').click(function() {
// $('.a-obscured').removeClass('a-obscured');
// });

//problem here is that the letter does not rotate

$('.a').hover(function() {
	$(this).find(".a-left").css("background-color", "red");
	$(this).find(".a-left2").css("background-color", "red");
	$(this).find(".a-right").css("background-color", "red");
	$(this).find(".a-right2").css("background-color", "red");
	$(this).find(".a-midbar").css("background-color", "red");  
});

$('.a2').hover(function() {
	$(this).find(".a2-left").css("background-color", "red");
	$(this).find(".a2-left2").css("background-color", "red");
	$(this).find(".a2-right").css("background-color", "red");
	$(this).find(".a2-right2").css("background-color", "red");
	$(this).find(".midbar2").css("background-color", "red"); 
	}, function() {
});
