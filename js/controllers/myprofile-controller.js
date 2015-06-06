angular.module('pooshak')
.controller('MyprofileController', function() {
   
})

.directive('userInfo', function (){
		return {
			link: function($scope) {
                $(document).ready(function () {
					
					if(localStorage.getItem('user'))
					{
						var info = JSON.parse(localStorage.getItem('user'));
						$('input[name=fullname]').val(info.name);
						$('input[name=state]').val(info.state);
						$('input[name=city]').val(info.city);
						$('textarea[name=address]').val(info.address);
						$('input[name=zipcode]').val(info.zipcode);
						$('input[name=phone]').val(info.phone);
						$('input[name=email]').val(info.email);
						
					
						
					}
					
					 $('#reset').click(function(){
						 
						$('input[name=fullname]').val('');
						$('input[name=state]').val('');
						$('input[name=city]').val('');
						$('textarea[name=address]').val('');
						$('input[name=zipcode]').val('');
						$('input[name=phone]').val('');
						$('input[name=email]').val('');
						localStorage.removeItem("user");
						
						 
						 
					 });
                  
				   $('#save').click(function(){
					   
					  var user = new Object(); 
					  user.name = $('input[name=fullname]').val(); 
					  user.state = $('input[name=state]').val(); 
					  user.city = $('input[name=city]').val(); 
					  user.address = $('textarea[name=address]').val(); 
					  user.zipcode = $('input[name=zipcode]').val(); 
					  user.phone = $('input[name=phone]').val(); 
					  user.email = $('input[name=email]').val();
					  if(user.name == "" || user.state == "" || user.city == "" || user.address == "" || 
					  user.zipcode == "" ||  user.phone == "" ||  user.email == ""  )
					  {
						  text =  "همه فیلدها اجباری هستند" ;
                          $.fancybox.open( '<p class="alert">'+text+'</p>',{});
						 return false;
					  }
					  
					  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					  if( !emailReg.test(user.email ) )
					   {
						  text =  "ایمیل نا معتبر است" ;
                          $.fancybox.open( '<p class="alert">'+text+'</p>',{});
						  return false;
					   }
					  
					  localStorage.setItem("user", JSON.stringify(user));
					  text =  "اطلاعات با موفقیت ذخیره شد" ;
                      $.fancybox.open( '<p class="alert">'+text+'</p>',{});
					  //localStorage.clear();
					  return false;
					   
					   });

                });	
            }
}});
