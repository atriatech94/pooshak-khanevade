angular.module('pooshak')
.controller('ProductController', function($scope,$rootScope,$routeParams,$filter,$sce) {
  $scope.card_count = JSON.parse(localStorage.getItem('card')).length;
  $scope.detail = $filter('filter')($rootScope.product, {ID:$routeParams.id});

})
.directive('addButton', function ($rootScope){
		return {
			link: function($rootScope) {
				$(document).ready(function () {
					
				
					
						$('.add_to_cart_botten').click(function(){
							
						var card = JSON.parse(localStorage.getItem('card'));
					    var wish_list = JSON.parse(localStorage.getItem('wish_list'));
						var card_id = $('.add_to_cart_botten').attr('p_id');
						if(card != null)
						{
						   for(i=0;i<card.length;i++)
						    {
							  if(card[i] == card_id)
							  {
								  alert('you add this product to your card');
								  return false;
								  
							  }
						    }
							
						   card.push(card_id);
						   localStorage.setItem("card", JSON.stringify(card));
						}
						else
						{
							var card = [card_id];
							localStorage.setItem("card", JSON.stringify(card));
						}
						if(wish_list != null)
						{
						for(j=0;j<wish_list.length;j++)
						    {
								  if(wish_list[j] == card_id)
								  {
									  wish_list.splice(j, 1);
									  localStorage.setItem("wish_list", JSON.stringify(wish_list));
									  break;
									  
								  }
								}
						}
						$('#card_count').text(String(parseInt($('#card_count').text())+1));
						alert('added to cart');
						
					   
					});
					
					$('.add_to_whishlist_botten').click(function(){
						
						var card = JSON.parse(localStorage.getItem('card'));
					    var wish_list = JSON.parse(localStorage.getItem('wish_list'));
						var wish_id = $('.add_to_whishlist_botten').attr('p_id');
						
						if(card != null)
							{
									for(i=0;i<card.length;i++)
									{
									  if(card[i] == wish_id)
									  {
										  alert('dar cart mojood no wish');
										  return false;
										  
									  }
									}
							}
						if(wish_list != null)
						{
							
						   for(i=0;i<wish_list.length;i++)
						    {
							  if(wish_list[i] == wish_id)
							  {
								  alert('you add this product to your wish_list');
								  return false;
								  
							  }
						    }
						   wish_list.push(wish_id);
						   localStorage.setItem("wish_list", JSON.stringify(wish_list));
						}
						else
						{
							var wish_list = [wish_id];
							localStorage.setItem("wish_list", JSON.stringify(wish_list));
						}
						alert('added to wish');
						
					   //localStorage.clear();
						
					   
					});
					
				});
					
            }
}})
.directive('productDetail', function (){
		return {
			link: function($scope) {
                $(document).ready(function () {
               
             /*===============================================================================*/   
                    var swiper = new Swiper('.product_slider', {
                        pagination: '.swiper-pagination',
                        paginationClickable: true,
                        spaceBetween: 30,
                    });
                  
             /*===============================================================================*/          
             /*===============================================================================*/          
             /*===============================================================================*/          

                });	
            }
}});
