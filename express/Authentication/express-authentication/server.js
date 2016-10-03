var express = require('express')
var bodyParser = require('body-parser')
var mongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID
var engine = require('express-handlebars')
var bcrypt = require('bcrypt');
var session = require('express-session')

var app = express()

/// Configuracion
app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))


mongoClient.connect('mongodb://localhost:27017/auth', function(err, db) {

  //Pon tu  Middleware aca



  /// Pon tus rutas aca


})

app.listen(3000, function(){
  console.log('Server listening on port 3000')
})
