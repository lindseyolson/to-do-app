// requires
var express = require ('express');
var app = express();
var path = require ('path');
var bodyParser = require ('body-parser');
var pg = require ('pg');

// globals
var port = 1616;
var config = {
  database: 'omega',
  host: 'localhost',
  port: 5432,
  max: 20
};
var pool = new pg.Pool (config);

// uses
app.use (express.static('public'));
app.use (bodyParser.urlencoded({extended: true}));

// server
app.listen (port, function(){
  console.log('listening on port: ', port);
});

// base url
app.get ('/', function(req, res){
  console.log('base url running');
  res.sendFile(path.resolve('views/index.html'));
});

// get route
app.get ('/tasks', function(req, res){
  console.log('get hit to /tasks');
  // connect to db
  pool.connect(function(err, connection, done){
    if (err) {
      console.log('error');
      done();
      res.sendStatus(400);
    } // end error
    else {
      console.log('connected to db');
      
      done();
      res.sendStatus(200);
    } // end no error
  }); // end pool connect
}); // end /tasks get

// post routes
app.post ('/add', function(req, res){
  console.log('post hit to /add:', req.body);
  pool.connect(function(err, connection, done){
    if (err) {
      console.log('error');
      done();
      res.sendStatus(400);
    } // end error
    else {
      console.log('connected to db');
      done();
      res.sendStatus(200);
    } // end no error
  }); // end pool connect
}); // end /task post

app.post  ('/complete', function(req, res){

}); // end /complete post

app.post  ('/delete', function(req, res){

}); // end /delete post
