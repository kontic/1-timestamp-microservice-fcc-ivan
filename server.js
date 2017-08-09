var express = require('express');

const do_date_response = require('./modules/do_date_response');

var app = express();

//app.use(express.static('public'));
app.use('/public', express.static(process.cwd() + '/public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/*", function (request, response) {
  var testStr = decodeURIComponent(request.url.substr(1));
  var json = do_date_response(testStr);
  response.setHeader( 'Content-Type', 'application/json' );
  response.status(200);
  response.send(json);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
