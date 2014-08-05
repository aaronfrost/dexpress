var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));



app.get('/search/:term', function(req, res){

//  var term = req.query.term || "";
  var term = req.params.term || "";
  console.log("TERM", term);

  var matchingItems = items.filter(function(item){
    return item.name.toLowerCase().indexOf(term.toLowerCase()) >= 0;
  });

  res.send(matchingItems);

});

app.get('/search/', function(req, res){
  res.send(items);
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