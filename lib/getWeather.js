var fs = require('fs')

module.exports = function(path, doThisWithDatabase){
  fs.readFile(path, "UTF-8", function doThisAfter (err, database) {

  if(err) {
    doThisWithDatabase(err)
  } else {
    doThisWithDatabase(err, JSON.parse(database))
  }


  })
}