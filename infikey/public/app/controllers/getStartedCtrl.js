var myApp = angular.module('myApp');

/*var nodemailer = require('nodemailer'); // Import Nodemailer Package
var sgTransport = require('nodemailer-sendgrid-transport'); // Import Nodemailer Sengrid Transport Package
*/
myApp.controller('getStartedCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('getStartedCtrl loaded...');
	
/*
 var options = {
         auth: {
            api_user: 'nareshdasireddi', // Sendgrid username
            api_key: 'Naresh@321' // Sendgrid password
       }
     };

    // Nodemailer options (use with g-mail or SMTP)
    var client = nodemailer.createTransport({
        service: 'Zoho',
        auth: {
            user: 'naresh.d@mtwlabs.com', // Your email address
            pass: 'Naresh@321#1' // Your password
        }
    });
*/


	$scope.myData = function(){
		console.log('from pages get my');
		console.log('email',$scope.data.email);
		console.log('mobile',$scope.data.mobile);
		console.log('city',$scope.data.city);
		console.log($scope.data);
		
$http.post('/api/formData/', $scope.data);

window.location.href='#/sucess';


/*
          var email = {
                        from: 'InfiKey Form, naresh.d@mtwlabs.com',
                        to: 'dasireddinaresh@gmail.com',
                        subject: 'InfiKey Form',
                        text: 'Contact email: ' + $scope.data.email + 'Contact Mobile:'+$scope.data.mobile+'City:'+$scope.data.city
                           };
                    // Function to send e-mail to the user
                    client.sendMail(email, function(err, info) {
                        if (err) {
                            console.log(err); // If error with sending e-mail, log to console/terminal
                        } else {
                            console.log(info); // Log success message to console if sent
                            
                        }
                    });

*/



	}
	
	
	
}]);



