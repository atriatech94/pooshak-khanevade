angular.module('pooshak')
    .config(function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: '/pages/home/index.html',
            controller: 'IndexController',
        })
        .when('/product/:id', {
            templateUrl: 'pages/product/index.html',
            controller: 'ProductController',
        })
        .when('/cart', {
            templateUrl: 'pages/cart/index.html',
            controller: 'CartIndexController',         
        })
		 .when('/wishlist', {
            templateUrl: 'pages/wishlist/index.html',
            controller: 'WishlistIndexController',         
        })
        .when('/myprofile', {
            templateUrl: 'pages/myprofile/index.html',
            controller: 'MyprofileController',
        })
		.when('/support', {
            templateUrl: 'pages/support/index.html',
            controller: 'SupportController',
        })
		.when('/', {
            templateUrl: 'pages/home/index.html',
            controller: 'IndexController',
		})
		.otherwise({ redirectTo: '/' });
});