var objects = ['assets/img/balloon.jpg',
			   'assets/img/cells.jpg',
			   'assets/img/rose.jpg',
			   'assets/img/velvet.jpg',
			   'red meat', 'red star', 'red tea', 'red cow', 'red sun', 'red moon'  
			   ];

var colors = ['red1', 'red2', 'red3', 'red4', 'red5', 'red6'];

$('.button').click(function() {
	var random_object_number = Math.floor(Math.random() * objects.length),
		random_color_number  = Math.floor(Math.random() * colors.length),
		object_to_use        = objects[random_object_number],
		color_to_use		 = colors[random_color_number];
		result				 = '';

		if (random_object_number > 3) {
			result = '<span class="object ' + color_to_use + '">' + object_to_use + '</span>';
		} else {
			result = '<img class="object ' + color_to_use + '" src="' + object_to_use + '" />';
		}


	
	

	$('.content').prepend(result);
	// $('.color').css('color': 'red')
	
});