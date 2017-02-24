
var nodemailer = require('nodemailer'); // Import Nodemailer Package
var sgTransport = require('nodemailer-sendgrid-transport'); // Import Nodemailer Sengrid Transport Package

module.exports = function(router) {

    // Start Sendgrid Configuration Settings (Use only if using sendgrid)
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
    // var client = nodemailer.createTransport(sgTransport(options)); // Use if using sendgrid configuration
    // End Sendgrid Configuration Settings  


    // Route to check if username chosen on registration page is taken


router.post('/formData', (req, res) => {
    var data = req.body;
 var email = {
                        from: 'naresh.d@mtwlabs.com',
                        to: 'dasireddinaresh@gmail.com',
                        subject: 'InfiKey Form',
                        text: 'This mail from InfiKey Website',
                        html: '<table><th>InfiKey Startup Form</th><tr><td>Email</td><td> ' + data.email + '</td><tr><td>Mobile</td><td>'+data.mobile+'</td><tr><td>City</td><td>'+data.city+'</td></tr></table>'
                 
                           };
                    // Function to send e-mail to the user
                    client.sendMail(email, function(err, info) {
                        if (err) {
                            console.log(err); // If error with sending e-mail, log to console/terminal
                        } else {
                            console.log(info); // Log success message to console if sent
                            
                        }
                    });
    console.log(data);
     res.json(data);
});

   
    

    return router; // Return the router object to server
};
