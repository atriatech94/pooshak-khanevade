is_open = 0 ;
var getdata = 0;
angular.module('pooshak')
.controller('IndexController', function($scope,$rootScope,Product,Category) {
		
     document.getElementById("loading").style.display="block";
    
    if(localStorage.getItem('card') != null)
    {
        $scope.card_count = JSON.parse(localStorage.getItem('card')).length;
    }
    else
    {
        $scope.card_count = 0;
    }
    if(getdata == 1)
    {
        document.getElementById("loading").style.display="none";
    }
    var online = check_net();
    if(getdata==0 && online==1)
    {
        $rootScope.product =  get_data_product(Product,$rootScope);
        getdata ++;
        
    }else if(getdata==0 && online==0){
        
        $rootScope.product =  get_data_product(Product,$rootScope);
        getdata ++;
    }
	
	  
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
					
					$('nav').delegate(".item","click",function(){
                      $('nav').children('ul').children('li').removeClass('active');
					  $(this).addClass('active');
					
                    });
					$('nav').delegate("nw-category-item","click",function(){
						
						 $('nav').children('ul').children('li').removeClass('active');
						 
						});
             /*===============================================================================*/       
                    $('body').delegate('input[type="text"] ,input[type="number"] ,input[type="password"] ,input[type="email"], textarea',"focus",function(){
                       // $('.content').scrollTop($(this).offset().top);
                    });
             /*===============================================================================*/    
                   $('body').delegate('.product_one','click', function(){
                     
                        window.location.hash = $(this).attr('href');
                        
                    });
             /*===============================================================================*/  
                    $('body').delegate('nav ul li','click',function(){
                        swiper2.slidePrev();
                    });
           
            /*====================== click interneti link ===================================*/
            /*======================end  click interneti link ===================================*/
                $('body').delegate(".refresh","click",function(){
                   online =  check_net();
                        
                    if(online == 1)
                    {   $.fancybox.close();
                        location.reload();
                    }else{
                       $('.refresh').fadeOut(100,function(){ $('.refresh').fadeIn(100)});
                    }
                    
                });
               /*======================chech dobare net===================================*/
                

                });	
            }
}});

/*
 Product.all().success(function(data){
            $rootScope.product = data;
            document.getElementById("loading").style.display="none";
            console.log(data);
        });
        getdata ++;

*/
function get_data_product(Product,$rootScope){
   Product.all()
   .success(function(data){
       $rootScope.product = data;
	   console.log($rootScope.product);
	  document.getElementById("loading").style.display="none";
       return $rootScope.Product;
   })
   .error(function(){
      $rootScope.Product = "none";
	   document.getElementById("loading").style.display="none";
	   $.fancybox.open("<p>برای مشاهده این قسمت اینترنت گوشی خود را فعال کنید </p><button class='refresh'>تلاش مجدد</button>");
       return $rootScope.Product;
   });    
}

function check_net(){
    var online = 0;
    if (navigator.onLine){
        online = 1;
    }else{ 
        online = 0; 
    }
    return online;
}

