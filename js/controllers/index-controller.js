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
		   
		   Category.all().success(function(data1){
           $rootScope.category = data1;
           console.log(data1);
          });


})
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
}})
