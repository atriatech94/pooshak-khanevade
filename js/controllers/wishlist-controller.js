angular.module('pooshak')
.controller('WishlistIndexController', function($scope,$rootScope,$filter) {

   var wishlist = JSON.parse(localStorage.getItem('wish_list'));
          var detail = [];
	      for(i=0;i<wishlist.length;i++)
		  {
		    detail[i] = $filter('filter')($rootScope.product, {ID:wishlist[i]})[0];
		  }
   $scope.card = detail;
   

})
.directive('wishDetail', function (){
		return {
			link: function($scope) {
                $(document).ready(function () {
					
					 $('.content').delegate('.close_btn',"click",function(){
						 
                           var wishlist = JSON.parse(localStorage.getItem('wish_list'));
					       id = $(this).attr('p_id');
						   $(this).parent('div').fadeOut();
						   
						   for(j=0;j<wishlist.length;j++)
						    {
								  if(wishlist[j] == id)
								  {
									  wishlist.splice(j, 1);
									  localStorage.setItem("wish_list", JSON.stringify(wishlist));
									  break;
									  
								  }
							}
					
						
                    });
					
					 $('.content').delegate('#to_card',"click",function(){
						 
                           var wishlist = JSON.parse(localStorage.getItem('wish_list'));
						   var card = JSON.parse(localStorage.getItem('card'));
					       id = $(this).attr('p_id');
						   $(this).parent('div').parent('div').fadeOut();
						   for(j=0;j<wishlist.length;j++)
						    {
								  if(wishlist[j] == id)
								  {
									  wishlist.splice(j, 1);
									  localStorage.setItem("wish_list", JSON.stringify(wishlist));
									  break;
									  
								  }
							}
						   card.push(id);
						   localStorage.setItem("card", JSON.stringify(card));
						 
					
						
                    });
                            
             /*===============================================================================*/   
                   
                  
             /*===============================================================================*/          
             /*===============================================================================*/          
             /*===============================================================================*/          

                });	
            }
}})
