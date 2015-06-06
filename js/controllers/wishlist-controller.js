angular.module('pooshak')
.controller('WishlistIndexController', function($scope,$rootScope,$filter) {
        if(localStorage.getItem('wish_list'))
        {
            var wishlist = JSON.parse(localStorage.getItem('wish_list'));
          var detail = [];
	      for(i=0;i<wishlist.length;i++)
		  {
		    detail[i] = $filter('filter')($rootScope.product, {ID:wishlist[i].id})[0];
			detail[i].attributes = wishlist[i].atributes;
			
		  }
			   $scope.card = detail;
			   console.log($scope.card);
		}
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
								  if(wishlist[j].id == id)
								  {
									  wishlist.splice(j, 1);
									  localStorage.setItem("wish_list", JSON.stringify(wishlist));
									  break;
									  
								  }
							}
					
						
                    });
					
					 $('.content').delegate('#to_card',"click",function(){
						 
                           var wishlist = JSON.parse(localStorage.getItem('wish_list'));
						   if(localStorage.getItem('card'))
						   {
							   var card = JSON.parse(localStorage.getItem('card'));
						   }
						   else
						   {
							   var card = null;
						   }
						   
					       id = $(this).attr('p_id');
						   $(this).parent('div').parent('div').fadeOut();
						   for(j=0;j<wishlist.length;j++)
						    {
								  if(wishlist[j].id == id)
								  {
									  card.push(wishlist[j]);
						              localStorage.setItem("card", JSON.stringify(card));
									  wishlist.splice(j, 1);
									  localStorage.setItem("wish_list", JSON.stringify(wishlist));
									  break;
									  
								  }
							}
						   
						 
					
						
                    });
                            
             /*===============================================================================*/   
                   
                  
             /*===============================================================================*/          
             /*===============================================================================*/          
             /*===============================================================================*/          

                });	
            }
}})
