var express = require('express');
var test = require('tape')

var path = require('path');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
 res.redirect('/weather') // what is this doing?
})

app.get('/weather', function (req, res) {
	console.log('this i the paramas: ', req.query)
	res.render('index')
	// res.send("Hello this is working :)")
});

// app.post('/weather', function (req, res) {
// 	console.log('the request: ', req)
// 	console.log('the response: ', res)

// });

app.listen(3000, function () {
  console.log('Server is up nd running on localhost:3000!');
});