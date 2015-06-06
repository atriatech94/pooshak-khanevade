is_open = 0 ;
angular.module('pooshak')
    .controller('IndexController', function($scope,$rootScope,Product,Category) {
		
        if(localStorage.getItem('card') != null)
        {
            $scope.card_count = JSON.parse(localStorage.getItem('card')).length;
        }
		else
		{
			  $scope.card_count = 0;
		}
    
	       Product.all().success(function(data){
           $rootScope.product = data;
           console.log(data);
		   });

})
.directive('nwCategorySelect', function (Category){
		return {
			replace:true,
			restrict: "E",
			templateUrl: "pages/home/nw-category-select.html",
			scope:{
				 activeCategory: "="
			 },
			link: function(scope,element,attrs){
				
		         Category.all().success(function(data1){
                 scope.categories = data1;
				
          });
				
			},
			controller: function($scope){
				$scope.activeCategory = "همه";
				this.getActiveCategory = function(){
					return $scope.activeCategory;
				}
				
				this.setActiveCategory = function(category){
					$scope.activeCategory = category.cat_name;
				}
				
			}
			
}})
.directive('nwCategoryItem', function (){
		return {
			
			 restrict: "E",
			 templateUrl: "pages/home/nw-category-item.html",
			 scope:{
				 category: "="
			 },
			 require: "^nwCategorySelect",
			 link: function(scope,element,attrs,nwCategorySelectCtrl){
				 scope.makeActive = function(){
					 var loc = window.location.hash;
					 if(loc != "#/")
					 {
					    window.location.hash = "#/";
					 }
					 nwCategorySelectCtrl.setActiveCategory(scope.category);
					 
				  }
				    scope.categoryActive = function(){
				    return nwCategorySelectCtrl.getActiveCategory() === scope.category.cat_name;
				  }
			   }
			
}})

.directive('swSwipe', function (){
		return {
			link: function($scope) {
                $(document).ready(function () {
                     
                        var swiper2 = new Swiper( '.swiper1' , { slidesPerView: 'auto',  followFinger : false } );
                        swiper2.on('onTransitionStart', function () {
                            if(is_open==0){
                                $('.swipe_color').fadeIn(300);
                                is_open= 1;
                            }else{
                                $('.swipe_color').fadeOut(300);
                                is_open=0;
                            }
                            //console.log(is_open);
                        });
                    
                    
                    
                   
                    $('body').delegate(".menu ","click",function(){
                        if(is_open==0){swiper2.slideNext();is_open=1;}else{swiper2.slidePrev();is_open=0;}
                    });
             /*===============================================================================*/   
                    $('#product').click(function(){
                        
                        if($(this).is('.active')){
                            $(this).removeClass('active');
                        }
                        else{
                             $(this).addClass('active');
                        }
                    });
             /*===============================================================================*/       
                    var $container = $('#content');
                    setTimeout(function(){
                        //$container.packery({ itemSelector: '.one'});
                    },2000);
             /*===============================================================================*/          

                });	
            }
}});
