var myApp = angular.module('myApp',['ngRoute']);


myApp.config(function ($routeProvider,$locationProvider) {
   $locationProvider.hashPrefix('');
       
                $routeProvider.when("/", {
                                    templateUrl: "app/views/home.html"
                                })
              	$routeProvider.when("/pvt-ltd", {
                                    templateUrl: "app/views/pvt-ltd.html"
                                })
                $routeProvider.when("/public-ltd", {
                                    templateUrl: "app/views/public-ltd.html"
                                }) 
                $routeProvider.when("/llp", {
                                    templateUrl: "app/views/llp.html"
                                })
              	$routeProvider.when("/one-person", {
                                    templateUrl: "app/views/one-person.html"
                                })
                $routeProvider.when("/goods-servicetax", {
                                    templateUrl: "app/views/goods-servicetax.html"
                                })
                $routeProvider.when("/vat-reg", {
                                    templateUrl: "app/views/vat-reg.html"
                                }) 
                $routeProvider.when("/trademark", {
                                    templateUrl: "app/views/trademark.html"
                                })
                $routeProvider.when("/copyright", {
                                    templateUrl: "app/views/copyright.html"
                                }) 
                $routeProvider.when("/patent", {
                                    templateUrl: "app/views/patent.html"
                                }) 
                $routeProvider.when("/closure-llp", {
                                    templateUrl: "app/views/closure-llp.html"
                                }) 
                $routeProvider.when("/pvt-public", {
                                    templateUrl: "app/views/pvt-public.html"
                                })
                $routeProvider.when("/compliance-pvt", {
                                    templateUrl: "app/views/compliance-pvt.html"
                                })
                $routeProvider.when("/service-tax", {
                                    templateUrl: "app/views/service-tax.html"
                                })
                $routeProvider.when("/sales-tax", {
                                    templateUrl: "app/views/sales-tax.html"
                                })
         
                $routeProvider.when("/sucess", {
                                    templateUrl: "app/views/redirecting.html"
                                })
         
				.otherwise({
						redirectTo: '/'
					});
});