var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var flash = require('connect-flash');
app.use(helmet()); //보안
app.use(express.static('public')); //정적파일 제공(jpg 등,,,)
app.use(bodyParser.urlencoded({ extended: false })); //post body파서
app.use(compression()) //파일 압축
app.use(session({
  secret: 'afesljaisejfse',
  resave: false,
  saveUninitialized: true,
  // store: new FileStore()
}));

app.use(flash());

//passport, flash는 반드시 session 바로 다음 와야함
var passport = require('./lib/passport')(app)
//file저장이기 때문에 session 저장 다 되면 redirect 해줘야함

  // app.post('/auth/login_process',
  // passport.authenticate('local', { 
  //   successRedirect: '/',
  //   failureRedirect: '/auth/login' }));

app.get('*', function (request, response, next) {
  fs.readdir('./data', function (error, filelist) {
    request.list = filelist;
    next();
  });
}); //get방식일때만 파일리스트 받아오기(Data)

var topicRouter = require('./routes/topic');
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth')(passport);

app.use('/', indexRouter);
app.use('/topic', topicRouter);
app.use('/auth', authRouter);
//route
//app.get('/',(req,res)=> res.send('Hello World!')) --> 최신코드

//오류 처리
app.use(function (request, response, next) {
  response.status(404).send('Sorry cant find that!');
});
app.use(function (err, req, res, next) {
  res.status(500).send('Something broke!')
});
//app.listen(3000,()=> console.log('Example app listening on port 3000!'))
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
