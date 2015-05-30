angular.module('pooshak')
.controller('CartIndexController', function($scope,$rootScope,$filter) {

   if(localStorage.getItem('card'))
   {
	   var card = JSON.parse(localStorage.getItem('card'));
			  var detail = [];
			  var cost = 0;
			  for(i=0;i<card.length;i++)
			  {
				detail[i] = $filter('filter')($rootScope.product, {ID:card[i]})[0];
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
	   $scope.cost = cost;
   
   }
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
						   o_price = $('#price').text();
						   $(this).parent('div').fadeOut();
						   c_price = String((parseInt(o_price.replace(/,/g, '')) - price)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
						  $('#price').text(c_price);   
						   for(j=0;j<card.length;j++)
						    {
								  if(card[j] == id)
								  {
									  card.splice(j, 1);
									  localStorage.setItem("card", JSON.stringify(card));
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
