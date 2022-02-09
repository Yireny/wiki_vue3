require('./utils/connectDB')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//导入接口
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var roleRouter = require('./routes/roles');
var enemyRouter = require('./routes/enemys');
var materialsRouter = require('./routes/materials');
var fashionRouter = require('./routes/fashions');
var stageRouter = require('./routes/stages');
var postRouter = require('./routes/posts')
var replyRouter = require('./routes/reply')
var infoRouter = require('./routes/info')
var avatarRouter = require('./routes/avatars')
var strRouter = require('./routes/strategys')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//使用接口
app.use('/', indexRouter);
app.use('/', userRouter);
app.use('/', roleRouter)
app.use('/', enemyRouter)
app.use('/', materialsRouter)
app.use('/', fashionRouter)
app.use('/', stageRouter)
app.use('/',postRouter)
app.use('/',replyRouter)
app.use('/',infoRouter)
app.use('/',avatarRouter)
app.use('/',strRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000,()=>{
  console.log('服务器启动成功')
})

module.exports = app;
