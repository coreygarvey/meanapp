
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , spotify = require('./routes/spotify')
  , http = require('http')
  , path = require('path');



var cookieParser = require('cookie-parser');

var favicon = require('serve-favicon');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');



var app = express();

var Mongoose = require('mongoose');
var db = Mongoose.createConnection('localhost', 'mytestapp');

var TodoSchema = require('./models/Todo.js').TodoSchema;
var Todo = db.model('todos', TodoSchema);

var UserSchema = require('./models/User.js').UserSchema;
var User = db.model('users', UserSchema);

// all environments
app.set('port', process.env.PORT || 8888);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
// app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('X-HTTP-Method-Override'));
// app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.get('/', routes.index(Todo))


app.use(express.static(__dirname + '/public'))
   .use(cookieParser());

app.get('/login', spotify.login());


app.get('/callback', spotify.callback(User));



app.get('/refresh_token', spotify.refresh_token());

// TODO APP
app.get('/users', user.list);
app.get('/todos.json', routes.get(Todo));
app.put('/todo/:id.json', routes.update(Todo));
app.post('/todo.json', routes.addTodo(Todo));




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

