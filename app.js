var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'password'
});
connection.connect();


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.get('/search/:term', function(req, res){

  var term = req.params.term || "";
  console.log("TERM", term);

  //Filter the items for the search term
  var matchingItems = items.filter(function(item){
    return item.name.toLowerCase().indexOf(term.toLowerCase()) >= 0;
  });

  res.send(matchingItems);


});


app.get('/search/', function(req, res){
  res.send(items);
});


app.post('/user', function(req, res){
  var username = req.body.username;
  var email = req.body.email;
  console.log(username, email);
  connection.query('INSERT INTO `test`.`users` (username, email) VALUES (\''+username+'\',\''+email+'\')', function(err, rows, fields) {
    if (err) throw err;
    console.log('user added: ', username, email);
  });

});

app.get('/users', function(req, res){
  connection.query('SELECT id, username, email from test.users;', function(err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });
});



app.post('/message', function(req, res){
  console.log(req.body);
  console.log('\n\n\n\n\n', req.params);
  var message = req.body.message;
  var userId = req.body.userId;
  console.log(message, userId);
  connection.query('INSERT INTO `test`.`messages` (user_id, message, created) VALUES ('+userId+',\''+message+'\', now())', function(err, rows, fields) {
    if (err) throw err;
    console.log('message added: ', userId, message);
    res.send(rows);
  });

});

app.get('/messages', function(req, res){
  connection.query( 'Select messages.message, messages.created, users.username, users.id '+
                    'FROM test.messages, test.users '+
                    'WHERE messages.user_id = users.id',
  function(err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });
});





app.listen(3000, function(){
  console.log("THIS SERVER IS RUNNING");
});


var items = [
  {name: "Book"}
  ,{name: "Apple"}
  ,{name: "Door"}
  ,{name: "Bike"}
  ,{name: "Macbook Pro"}
  ,{name: "Nexus 7"}
  ,{name: "Ice Cream"}
  ,{name: "iPad"}
];