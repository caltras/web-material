var express  = require('express');
var app      = express();

app.configure(function() {

    // set up our express application
    app.use(express.logger('dev')); // log every request to the console
    app.use(express.cookieParser()); // read cookies (needed for auth)

    app.use(express.urlencoded());
    app.use(express.json())
    
    app.set('views', __dirname + '/');
    app.engine('html', require('ejs').renderFile);
    
    app.use(express.static(__dirname+'/'));
});

app.get("/",function(req,res){
    res.render("index.html");
});
app.listen(8080);