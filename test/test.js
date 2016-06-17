var test = require('tape')
var getWeather = require('../lib/getWeather.js')
var path = __dirname + "/../data/test-data-base.json"

var expected = require('./../data/test-data-base.json')

test("test database is read and returned", function(t){
  getWeather(path, function  (err, database) {
  	console.log(database)
    if(err) {
      console.log(err)
    } else {
      t.deepEqual(database, expected, "Database is returned")
    }
  })
  t.end()




})