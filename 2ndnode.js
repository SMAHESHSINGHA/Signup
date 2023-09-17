var express = require('express');
var fs = require('fs');
var app = express();

app.get('/Login.html',
app.get('/pg', function (req, res){
    response1 = {
        
        user_name:req.query.user_name,
        password:req.query.password
    };
    console.log(response1);
    res.end(JSON.stringify(response1));
}))
app.get('/index.html',
app.get('/pg', function (req, res)

{
    
    const first_name = req.query['first_name'];
    const last_name = req.query['last_name'];
    const user_name = req.query['user_name'];
    const password = req.query['password'];
    
    
    
    const htmlContent = `<p>first_name: ${first_name}</p><p>last_name: ${last_name}</p><p>user_name: ${user_name}</p><p>password: ${password}</p>`;
    fs.writeFile('file.html', htmlContent, function (err) 
    {
        if (err) {
            console.error('Error writing file:', err);
            res.status(500).send('Error writing file');
        } else {
            console.log('File created and content written successfully');
            res.send(htmlContent);
    }
    });
    })
);
var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
