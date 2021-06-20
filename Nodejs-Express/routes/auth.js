var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizedHtml = require('sanitize-html');
var template = require('../lib/template.js');
var session = require('express-session');

module.exports = function(passport){
  router.get('/login', function (request, response) {
    var fmsg = request.flash();
    var feedback = '';
    if (fmsg.error){
      feedback = fmsg.error[0];
    }
    var title = 'WEB-login';
    var list = template.list(request.list);
    var html = template.html(title, list,
      ` <div style="color:red;">${feedback}</div>
        <form action="/auth/login_process" method="post">
          <p><input type="text" name="email" placeholder = "email"></p>
          <p><input type="password" name="pwd" placeholder = "password"></p>
          <p><input type="submit" value="login"></p>
        </form>`, ' ');
    response.send(html);
  });
  
  router.post('/login_process',
    passport.authenticate('local', {
      failureRedirect: '/auth/login',
      failureFlash: true,
      successFlash: true
    }), function (req, res) {
      req.session.save(function () {
        res.redirect('/');
      })
    });
  /*router.post('/login_process', function(request,response){
    var post = request.body;
    var email = post.email;
    var password = post.pwd;
    if(email === authData.email && password === authData.password){
      request.session.is_logined = true;
      request.session.nickname = authData.nickname;
      request.session.save(function(){
        response.redirect('/');
      });
    }
    else{
      response.send('who?');
    }
  });
  */
  router.get('/logout', function(request,response){
    request.logOut();
    // request.session.destroy(function(err){
    //   response.redirect("/");
    // })
    request.session.save(function(){
      response.redirect("/");
    })
   
  });
  return router;
}