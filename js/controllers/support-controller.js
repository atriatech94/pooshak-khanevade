angular.module('pooshak')
.controller('SupportController', function($scope,$rootScope,$filter,Peigiri) {
	
	if(localStorage.getItem('orders'))
   {
	   Peigiri.all().success(function(data2){
				$scope.req = data2;
				
          });
	    var orders = JSON.parse(localStorage.getItem('orders'));
              var order =[];
			  var req =[];
			  for(i=0;i<orders.length;i++)
			  {
				var element = new Object();
				element.id = orders[i].id ;
				element.price = orders[i].price ;
				element.date = orders[i].date ;
				var detail = [];
				for(j=0;j<orders[i].card.length;j++)
				{
				   detail[j] = $filter('filter')($rootScope.product,{ID:orders[i].card[j].id})[0];
				   detail[j].attributes = orders[i].card[j].atributes;
				}
				element.card = detail;
				order[i] = element;
				req[i] = element.id;
			 	ids = JSON.stringify(req);
			  }
		 $scope.orders = order;
		
				
   }
       
})
.directive('supportJq', function (){
		return {
			link: function($scope) {
                $(document).ready(function () {
					is_detail_open= 0 ;
             /*===============================================================================*/   
               
                   $('.content').delegate('.product_lists_s',"click",function(){
                    
                    if(is_detail_open != $(this).attr('index') )
                    {
                       is_detail_open = $(this).attr('index');
                       $('*#product_lists_detail').removeClass('show_det').slideUp(100,"linear");
                       $('*.product_lists_s').removeClass('active');
                       $(this).addClass('active');
                       $(this).next('.product_lists_detail').addClass('show_det').slideDown(100,"linear"); 
                        
                    }else{
                        
                         is_detail_open = 0;
                         $('*#product_lists_detail').removeClass('show_det').slideUp(100,"linear");
                         $('*.product_lists_s').removeClass('active');
                    }
                       
                   });
             /*===============================================================================*/          
             /*===============================================================================*/          
             /*===============================================================================*/          

                });	
            }
}})
