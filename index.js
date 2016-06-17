var express = require('express');
var dotenv = require('dotenv');
var path = require('path');
var request = require('superagent')

var app = express();

dotenv.load()

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
	var weatherObj = {}
	if (req.query.name === undefined) {
	res.render('index')
	} else {
		var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + req.query.name + '&units=metric&appid=' + process.env.WEATHER_API_KEY
		console.log(apiUrl)

		request 
			.get(apiUrl)
			.end(function (err, response) {
				if (!err) {
					console.log('Rendering...')
					weatherObj = response.text
					console.log(weatherObj)
				} else {
					console.log('You have an error: ', err)
				}
			})
		res.render('index', weatherObj)
	}
	// res.send("Hello this is working :)")
});

app.get('/weather', function (req, res) {

});

// app.post('/weather', function (req, res) {
// 	console.log('the request: ', req)
// 	console.log('the response: ', res)

// });

app.listen(3000, function () {
  console.log('Server is up nd running on localhost:3000!');
});