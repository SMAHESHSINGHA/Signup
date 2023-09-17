var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/index.html', function (req, res){
    res.sendFile(__dirname + "/" + "exp3.html" );
})

app.get('/pg', function (req, res){
    response1 = {
        first_name:req.query.first_name,
        last_name:req.query.last_name,
        user_name:req.query.user_name,
        password:req.query.password
    };
    console.log(response1);
    res.end(JSON.stringify(response1));
})

var server = app.listen(8000, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app.listening at http://%s:%s",host,port)
})

