var express = require('express')
var path = require('path')
var engines = require('consolidate') // Helps us set the templating engine 'nunjucks'

var app = express()
app.engine('html', engines.nunjucks)
app.set('view engine', 'html') // Only use nunjucks on file ending with html
app.set('views', __dirname + '/views') // Where to find the view files
app.use(express.static(path.join(__dirname, 'public')))


var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port
   console.log('Express server listening on port %s.', port);
})

app.get('/', function(req, res){
  res.render('index')
})

app.post('/color', function(req, res){
  var color = '#'+Math.floor(Math.random()*16777215).toString(16)
  res.send({color: color})
})

