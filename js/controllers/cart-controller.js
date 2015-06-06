angular.module('pooshak')
.controller('CartIndexController', function($scope,$rootScope,$filter) {

 var cost = 0;
   if(localStorage.getItem('card'))
   {
	   var card = JSON.parse(localStorage.getItem('card'));
			  var detail = [];
			  for(i=0;i<card.length;i++)
			  {
				detail[i] = $filter('filter')($rootScope.product,{ID:card[i].id})[0];
				detail[i].attributes = card[i].atributes;
				if(detail[i].sale_price == "")
				{
				   cost = cost + parseInt(detail[i].regular_price);
				}
				else
				{
					cost = cost + parseInt(detail[i].sale_price);
				}
			  }
	   $scope.card = detail;
	 
   
   }
  $scope.cost = cost;
})
.directive('cartDetail', function (){
		return {
			link: function($scope) {
                $(document).ready(function () {
                    $('body').delegate('#payment_method',"click",function(){
                        $('*#payment_method').removeClass('payment_method_chech');
                        $(this).addClass('payment_method_chech');
                        $(this).children('label').children('input').prop( "checked", true );
                        // $(this).addClass('payment_method_chech');
                   
                    });
					
					
					
					 $('.content').delegate('.close_btn',"click",function(){
						 
                           var card = JSON.parse(localStorage.getItem('card'));
					       id = $(this).attr('p_id');
						   price = parseInt($(this).attr('price'));
						   if(price != 0){
						   o_price = $('#price').text();
						   $(this).parent('div').fadeOut();
						   c_price = String((parseInt(o_price.replace(/,/g, '')) - price)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
						  $('#price').text(c_price);   
						   for(j=0;j<card.length;j++)
						    {
								  if(card[j].id == id)
								  {
									  card.splice(j, 1);
									  localStorage.setItem("card", JSON.stringify(card));
									  break;
									  
								  }
							}
						   }
						
						
                    });
					
					
                    $('#buy').click(function(){
						
						if(localStorage.getItem('card'))
						{
							if(JSON.parse(localStorage.getItem('card')).length != 0)
							{
								if(!localStorage.getItem('user'))
								{
									 window.location.hash = "#/myprofile";
									 setTimeout(function(){
										text =  "لطفا ابتدا اطلاعات خود را وارد نمایید سپس به سبد خرید رقته و فرایند خرید را ادامه دهید" ;
                                        $.fancybox.open( '<p class="alert">'+text+'</p>',{});
									},55);
								}
								else
								{
									var method = $('input[name=payment]:checked').val();
									var order_id = $.now();
									if(method == '0')
									{
									
										var card = JSON.parse(localStorage.getItem('card'));
										var user = JSON.parse(localStorage.getItem('user'));
										var parchase = JSON.stringify([{order_id:order_id},card,user]);
										var ref = window.open('http://pooshakkhanevade.com/shop.php?pay=1&par='+parchase, '_blank', 'location=yes');
										ref.addEventListener('exit', function() { 
											   $.ajax({
												  method: "POST",
												  url: "http://pooshakkhanevade.com/order-check.php",
												  cache: false, 
												  data: { order_id : order_id }
												})
												  .done(function( msg ) {
													 if(msg == 'yes')
													 {
														
														if(localStorage.getItem('orders'))
															{	
															   var orders = JSON.parse(localStorage.getItem('orders'));
															}
															else
															{
																var orders = null;
															}
															if(orders != null)
						                                    {
																orders.push(order_id);
																localStorage.setItem("orders", JSON.stringify(orders));
															}
															else
															{
																orders = [order_id];
																localStorage.setItem("orders", JSON.stringify(orders));
															}
															alert('order complete');
													        localStorage.removeItem('card');
													       $('.shopping_cart').hide();
													 }
													 
													 
												  });
										});
									}
									else
									{
										alert('posti');
									}
									
							
								
								}
								 
								 
								 
							}
							else
							{
								text =  "سبد خرید شما خالی است" ;
                                $.fancybox.open( '<p class="alert">'+text+'</p>',{});
							}
						}
						else
						{
							text =  "سبد خرید شما خالی است" ;
                            $.fancybox.open( '<p class="alert">'+text+'</p>',{});
						}
						
						});        
             /*===============================================================================*/   
                  
             /*===============================================================================*/          
             /*===============================================================================*/          
             /*===============================================================================*/          

                });	
            }
}})
