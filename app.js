//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items =[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
  var today = new Date();
  var day = "";
  var new_today = "";
  var options = {
    weekday:"long",
    day:"numeric",
    month:"long"
  };
 var day = today.toLocaleString("hi-IN", options);
/*  switch (today.getDay()) {
    case 0:
           day = "Sunday";
           break;
    case 1:
           day = "Monday";
           break;
    case 2:
           day = "Tuesday";
           break;
    case 3:
           day = "Wednesday";
           break;
    case 4:
          day = "Thursday";
          break;
    case 5:
          day = "Friday";
          break;
    case 6:
          day = "Saturday";
                 break;
  }*/
  res.render('list', {kindofDay: day, newListItems: items});
    });

  app.post("/", function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
    });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
