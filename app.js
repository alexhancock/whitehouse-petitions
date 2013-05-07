var wh = require('whitehouse');
var whApi = wh.createWhiteHouse();
var express = require('express');
var app = express();

app.configure(function(){
    app.set("view options", { layout: false });
    app.set('view engine', 'hbs');
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
    res.render('index');
});

app.get('/petitions', function(req, res){
    whApi.getPetitions(function(output) {
        var obj = JSON.parse(output);
        res.send(obj.results);
    });
});

app.listen(3000);
