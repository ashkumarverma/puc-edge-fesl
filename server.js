// var express = require('express'),
//     app = express(),
//     port = process.env.PORT || 3000,
//     mongoose = require('mongoose'),
//     Offers = require('./api/models/offersModel'), //created model loading here
//     bodyParser = require('body-parser');

// // mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/loginapp');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var routes = require('./api/routes/offersRoutes'); //importing route
// routes(app); //register the route

// app.listen(port);

// app.use(function (req, res) {
//     res.status(404).send({ url: req.originalUrl + ' not found' })
// });


// console.log('todo list RESTful API server started on: ' + port);


var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/loginapp');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

console.log('todo list RESTful API server started on: ' + port);
