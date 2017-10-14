
function expandCard(){

	$('.p1').hide();
	$('#problem').animate({height:'500px'}, 500);
	setTimeout(function(){$('.p2').show()}, 300);
}