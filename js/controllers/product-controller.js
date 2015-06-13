angular.module('pooshak')
.controller('ProductController', function($scope,$rootScope,$routeParams,$filter,$sce) {
	if(localStorage.getItem('card'))
	{
       $scope.card_count = JSON.parse(localStorage.getItem('card')).length;
	}
	else
	{
		$scope.card_count=0;
	}
  $scope.detail = $filter('filter')($rootScope.product, {ID:$routeParams.id});
  console.log($scope.detail);
  

})
.directive('addButton', function ($rootScope){
		return {
			link: function($rootScope) {
				$(document).ready(function () {
					
				
					
						$('.add_to_cart_botten').click(function(){
						
						if(localStorage.getItem('card'))
                        {	
						   var card = JSON.parse(localStorage.getItem('card'));
					    }
						else
						{
							var card = null;
						}
						if(localStorage.getItem('wish_list'))
                        {
					        var wish_list = JSON.parse(localStorage.getItem('wish_list'));
						}
						else
						{
							var wish_list = null;
						}
						var card_id = $('.add_to_cart_botten').attr('p_id');
						if(card != null)
						{
						   for(i=0;i<card.length;i++)
						    {
							  if(card[i].id == card_id)
							  {
								   text =  "در سبد خرید موجود است" ;
                                   $.fancybox.open( '<p class="alert">'+text+'</p>',{});
								  return false;
								  
							  }
						    }
							var atribute = new Array();
							$('select').each(
								function(){  
									var input = $(this);
									atribute.push({name:input.attr('name'),value:input.val()});
								});
						     card.push({id:card_id,atributes:atribute});
						     localStorage.setItem("card", JSON.stringify(card));
							 
							 
						}
						else
						{
							var atribute = new Array();
							$('select').each(
								function(){  
									var input = $(this);
									atribute.push({name:input.attr('name'),value:input.val()});
								});
						     card = [{id:card_id,atributes:atribute}];
							localStorage.setItem("card", JSON.stringify(card));
						}
						if(wish_list != null)
						{
						for(j=0;j<wish_list.length;j++)
						    {
								  if(wish_list[j].id == card_id)
								  {
									  wish_list.splice(j, 1);
									  localStorage.setItem("wish_list", JSON.stringify(wish_list));
									  break;
									  
								  }
								}
						}
						$('#card_count').text(String(parseInt($('#card_count').text())+1));
						 text =  "به سبد خرید اضافه شد" ;
                         $.fancybox.open( '<p class="alert">'+text+'</p>',{});
	 
					});
					
					$('.add_to_whishlist_botten').click(function(){
						
						if(localStorage.getItem('card'))
                        {	
						   var card = JSON.parse(localStorage.getItem('card'));
					    }
						else
						{
							var card = null;
						}
						if(localStorage.getItem('wish_list'))
                        {
					        var wish_list = JSON.parse(localStorage.getItem('wish_list'));
						}
						else
						{
							var wish_list = null;
						}
						var wish_id = $('.add_to_whishlist_botten').attr('p_id');
						
						if(card != null)
							{
									for(i=0;i<card.length;i++)
									{
									  if(card[i].id == wish_id)
									  {
										  text =  "کالا در سبد خرید موجود است" ;
                                          $.fancybox.open( '<p class="alert">'+text+'</p>',{});
										  return false;
										  
									  }
									}
							}
						if(wish_list != null)
						{
							
						   for(i=0;i<wish_list.length;i++)
						    {
							  if(wish_list[i].id == wish_id)
							  {
								  text =  "کالا در لیست علاقه مندی ها موجود است" ;
                                 $.fancybox.open( '<p class="alert">'+text+'</p>',{});
								  return false;
								  
							  }
						    }
						    var atribute = new Array();
							$('select').each(
								function(){  
									var input = $(this);
									atribute.push({name:input.attr('name'),value:input.val()});
								});
						     wish_list.push({id:wish_id,atributes:atribute});
						     localStorage.setItem("wish_list", JSON.stringify(wish_list));
							 console.log(wish_list);
						}
						else
						{
							var atribute = new Array();
							$('select').each(
								function(){  
									var input = $(this);
									atribute.push({name:input.attr('name'),value:input.val()});
								});
						    wish_list = [{id:wish_id,atributes:atribute}];
							localStorage.setItem("wish_list", JSON.stringify(wish_list));
				
						}
						text =  "به لیست علاقه مندی ها اضافه شد" ;
                        $.fancybox.open( '<p class="alert">'+text+'</p>',{});
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
                     
					
					$('.add').click(function(){
						
					   if(localStorage.getItem('card'))
                        {	
						   var card = JSON.parse(localStorage.getItem('card'));
					    }
						else
						{
							var card = null;
						}
						if(localStorage.getItem('wish_list'))
                        {
					        var wish_list = JSON.parse(localStorage.getItem('wish_list'));
						}
						else
						{
							var wish_list = null;
						}
						var card_id = $('.add_to_cart_botten').attr('p_id');
						if(card != null)
						{
						   for(i=0;i<card.length;i++)
						    {
							  if(card[i].id == card_id)
							  {
								  text =  "در سبد خرید موجود است" ;
                                   $.fancybox.open( '<p class="alert">'+text+'</p>',{});
								  return false;
								  
							  }
						    }
							var atribute = new Array();
							$('select').each(
								function(){  
									var input = $(this);
									atribute.push({name:input.attr('name'),value:input.val()});
								});
						     card.push({id:card_id,atributes:atribute});
						     localStorage.setItem("card", JSON.stringify(card));
							 
							 
						}
						else
						{
							var atribute = new Array();
							$('select').each(
								function(){  
									var input = $(this);
									atribute.push({name:input.attr('name'),value:input.val()});
								});
						     card = [{id:card_id,atributes:atribute}];
							localStorage.setItem("card", JSON.stringify(card));
						}
						if(wish_list != null)
						{
						for(j=0;j<wish_list.length;j++)
						    {
								  if(wish_list[j].id == card_id)
								  {
									  wish_list.splice(j, 1);
									  localStorage.setItem("wish_list", JSON.stringify(wish_list));
									  break;
									  
								  }
								}
						}
						$('#card_count').text(String(parseInt($('#card_count').text())+1));
						text =  "به سبد خرید اضافه شد" ;
                        $.fancybox.open( '<p class="alert">'+text+'</p>',{});
						
						
					   
					});
                  
             /*===============================================================================*/          
             /*===============================================================================*/          
             /*===============================================================================*/          

                });	
            }
}})
.directive('productSw', function (){
		return {
			link: function($scope) {
                $(document).ready(function () {
                   
                   setTimeout(function(){
                       new Swiper( '.product_slider' , { pagination: '.swiper-pagination', paginationClickable: true, spaceBetween: 30} );
                       
                   },1000);
                    
                });
            }
        }});

