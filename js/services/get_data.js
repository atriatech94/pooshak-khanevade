angular.module('pooshak')
.factory('Product', function($http){
return {
        all : function(){
            return $http.get("http://www.pooshakkhanevade.com/app-script.php")
			
        }
        
    }   
});
