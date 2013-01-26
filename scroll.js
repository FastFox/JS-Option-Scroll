 $(document).ready(function() {
	$('select').bind('mousewheel', function(event, delta, deltaX, deltaY) {
		if(deltaY < 0 ) {
			if($(this).prop('selectedIndex') < $('option', this).length - 1) {
				$(this).prop('selectedIndex', $(this).prop('selectedIndex') + 1);
			}
		} else { 
			if($(this).prop('selectedIndex') != 0) {
				$(this).prop('selectedIndex', $(this).prop('selectedIndex') - 1);
			}
		}
	});
});
