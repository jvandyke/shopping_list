/* Submit the form on the same page */

$(document).ready(function(){
	$('.action').on('submit', '.csubmit', function(){
		var items = $('edititem').val();
		$('a-item-description').text(items);
	});
});