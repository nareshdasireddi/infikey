var  app = angular.module("Demo", ["ngRoute"]);

app.config(function ($routeProvider,$locationProvider) {
   
        $locationProvider.hashPrefix('');
                $routeProvider.when("/", {
                                    templateUrl: "home.html"
                                })
              	$routeProvider.when("/pvt-ltd", {
                                    templateUrl: "pvt-ltd.html"
                                })
                $routeProvider.when("/public-ltd", {
                                    templateUrl: "public-ltd.html"
                                }) 
                $routeProvider.when("/llp", {
                                    templateUrl: "llp.html"
                                })
              	$routeProvider.when("/one-person", {
                                    templateUrl: "one-person.html"
                                })
                $routeProvider.when("/goods-servicetax", {
                                    templateUrl: "goods-servicetax.html"
                                })
                $routeProvider.when("/vat-reg", {
                                    templateUrl: "vat-reg.html"
                                }) 
                $routeProvider.when("/trademark", {
                                    templateUrl: "trademark.html"
                                })
                $routeProvider.when("/copyright", {
                                    templateUrl: "copyright.html"
                                }) 
                $routeProvider.when("/patent", {
                                    templateUrl: "patent.html"
                                }) 
                $routeProvider.when("/closure-llp", {
                                    templateUrl: "closure-llp.html"
                                }) 
                $routeProvider.when("/pvt-public", {
                                    templateUrl: "pvt-public.html"
                                })
                $routeProvider.when("/compliance-pvt", {
                                    templateUrl: "compliance-pvt.html"
                                })
                $routeProvider.when("/service-tax", {
                                    templateUrl: "service-tax.html"
                                })
                $routeProvider.when("/sales-tax", {
                                    templateUrl: "sales-tax.html"
                                })
            })