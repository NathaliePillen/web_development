const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
    res.send("Hello World")
});

app.get('/contact', function(req, res){
    res.send("You can contact me at pillennathalie@SpeechGrammarList.com")
});

app.get('/hobbies', function(req, res){
    res.send("<ul><li>reading</li><li>sailing</li><li>meeting friends</li><li>dancing</li></ul>")
});

app.listen(port, function() {
    console.log(`Example app listening at http://localhost:${port}`)
});