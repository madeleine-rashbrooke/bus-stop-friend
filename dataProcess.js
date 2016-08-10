//this function is going to handle splitting up the route data
// and feeding it into a sqlite database
var fs = require('fs')

var rawTextString = 'foobar'

fs.readFile('./google-transit/routes.txt', 'utf8', function (err, data) {
    if (err) { return console.log(err) }
    rawTextString = data
    splitLines(rawTextString)
})

splitLines = function ()

//step two split into lines
//use some kind of string.split using \n as the dividing character?
//stores the results as an array of strings

//for each string (representing a route, and being line of the text file)
//use some kind of .next() method to


// route_id,
// agency_id,
// route_short_name,
// route_long_name,
// route_desc,
// route_type,
// route_url,
// route_color,
// route_text_color
//
// 9,
// GOW,
// "9",
// "Aro Street - Wellington",
// "Wellington - Aro Street",
// 3,
// ,
// 00364a,
// ffffff
