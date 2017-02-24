const express = require('express');
const app = express();
const bodyParser = require('body-parser');


var router=express.Router();
var appRoutes=require('./app/routes/api')(router);


app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use('/api',appRoutes);







app.get('*', (req, res) => {
	res.send('Please use /api/books or /api/genres');
});



app.listen(3000);
console.log('Running on port 3000...');
