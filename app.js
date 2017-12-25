let express = require('express');
let app = express();
let path = require('path');


app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/vector', express.static(path.join(__dirname, 'vector')))
app.use('/node_modules', express.static(path.join(__dirname, 'angular')))


app.get('/', function (req, res) {
    // res.send('index.html');
    // app.use('/', express.static(path.join(__dirname, 'css')));
    //app.use('/', express.static(path.join(__dirname, 'js')));


    res.sendFile(path.join(__dirname + '/index.html'));




});


app.listen(4200, function () {
    console.log('Funcionando tudinho amore');
});
