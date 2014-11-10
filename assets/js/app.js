/* Submit the form on the same page */

$(document).ready(function(){
	$('.item').on('submit', '.edititem', function(){
		var item = $(this).val();
		$('a-item-description').text(item);
	});
});