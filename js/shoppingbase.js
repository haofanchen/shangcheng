$(function(){
	for(var i=0;i<$('.add').length;i++){
		fn(i)
	}

	
	function fn(x){
	var n=Number($('.add').eq(x).next('.num').html());
	var n1=parseInt($('.rate').eq(x).html());
	

	$('.add').eq(x).on('mousedown',function(){
			n++;
			$(this).next('.num').html(n);
			$('.rate').eq(x).html(n*n1+'￥')
			var m=0;
			for(var i=0;i<$('.add').length;i++){m+=parseInt($('.rate').eq(i).html())}
			$('.sum').html(m+'￥');
			
	})	
	
	
	$('.sub').eq(x).click(function(){
		if(n>1){
		n--;
		};
		$(this).prev('.num').html(n);
		$('.rate').eq(x).html(n*n1+'￥')	
		var m=0;
		for(var i=0;i<$('.add').length;i++){m+=parseInt($('.rate').eq(i).html())}
		$('.sum').html(m+'￥');
	})	
	
	

	}
})
