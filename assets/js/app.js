/* Submit the form on the same page */

$(document).ready(function(){
	$('.csubmit').on('click', function(){
		var items = $('.edititem').val();
		var prices = $('.editprice').val();
		var quantities = $('.editquantity').val();
		var total =$('<li><div class="action-image"><a href="#" class="delete"><img src="assets/img/delete.png" /></a><a href="#" class="check"><img src="assets/img/check.png" /></a></div> <div class="item-data"><span class="a-item-description">' + items + '</span></div><div class="price-data"><span class="a-price"> $' + prices + '</span></div><div class="quantity-data"><span class="a-quantity">' + quantities + '</span></div></li>');
		$('#list').prepend(total);
		total.hide().slideDown(600);
	});

	$('.check').on('click', function(){
		event.preventDefault();
		$(this).closest('li').css("background-color", "red");
	});

	$('.delete').on('click', function(event){
		event.preventDefault();
		$(this).closest('li').remove();
	});
});