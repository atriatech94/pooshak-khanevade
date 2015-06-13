angular.module('pooshak')
.factory('Product', function($http){
return {
        all : function(){
            return $http.get("http://www.pooshakkhanevade.com/app-script.php")
			
        }
        
    }   
})
.factory('Peigiri', function($http){
return {
        all : function(){
			if(localStorage.getItem('orders'))
            {
			  var orders = JSON.parse(localStorage.getItem('orders'));
			  var req =[];
			  for(i=0;i<orders.length;i++)
			  {
				req[i] = orders[i].id ;
			 	ids = JSON.stringify(req);
			  }
              return $http.get("http://pooshakkhanevade.com/check-order.php?ids="+ids)
			}
		 }
        
    }   
})
.factory('Category', function($http){
return {
        all : function(){
            return $http.get("http://www.pooshakkhanevade.com/category.php")
		 }
        
    }   
});
