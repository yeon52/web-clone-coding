var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizedHtml = require('sanitize-html');
var template = require('../lib/template.js');
var auth = require('../lib/auth.js');

router.get('/create', function (request, response) {
    if(!auth.IsOwner(request,response)){
      response.redirect('/');
      return false;
    }
    var title = 'WEB-create';
    var list = template.list(request.list);
    var html = template.html(title, list,
      `<form action="/topic/create_process" method="post">
          <p><input type="text" name="title" placeholder = "title"></p>
          <p>
            <textarea name="description" placeholder = "description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>`, ' ', auth.StatusUI(request,response));
    response.send(html);
  });
  
  router.post('/create_process', function (request, response) {
    if(!auth.IsOwner(request,response)){
      response.redirect('/');
      return false;
    }
    var post = request.body;
    var title = post.title;
    var description = post.description;
    fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
      response.redirect(`/topic/${title}`); //응답코드
    });
  });
  
  router.get('/update/:pageId', function (request, response, next) {
    if(!auth.IsOwner(request,response)){
      response.redirect('/');
      return false;
    }
    var filteredid = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredid}`, 'utf-8', function (err, description) {
      if (err) {
        next(err);
      } else {
        var title = request.params.pageId;
        var sanitizedTitle = sanitizedHtml(title);
        var sanitizedDescription = sanitizedHtml(description);
        var list = template.list(request.list);
        var html = template.html(title, list,
          `<form action="/topic/update_process" method="post">
            <input type="hidden" name = "id" value="${sanitizedTitle}">
            <p><input type="text" name="title" placeholder = "title" value="${sanitizedTitle}"></p>
            <p>
              <textarea name="description" placeholder = "description">${sanitizedDescription}</textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
            `,
          `<a href="/topic/create">create</a>
             <a href="/topic/update/${sanitizedTitle}">update</a>
             <form action="/topic/delete_process" method="post">
              <input type="hidden" name ="id" value="${sanitizedTitle}">
              <input type="submit" value="delete">
             </form>`, auth.StatusUI(request,response));
        response.send(html);
      }
    });
  });
  
  router.post('/update_process', function (request, response) {
    if(!auth.IsOwner(request,response)){
      response.redirect('/');
      return false;
    }
    var post = request.body;
    var id = post.id;
    var title = post.title;
    var description = post.description;
    fs.rename(`data/${id}`, `data/${title}`, function (error) {
      fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
        response.redirect(`/topic/${title}`)
      });
    });
  });
  
  router.post('/delete_process', function (request, response) {
    
    var post = request.body;
    var id = post.id;
    var filteredid = path.parse(id).base;
    fs.unlink(`data/${filteredid}`, function (error) {
      response.redirect('/');
    });
  });

  router.get('/:pageId', function (request, response, next) {
    var filteredid = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredid}`, 'utf-8', function (err, description) {
      if (err) {
        next(err);
      } else {
        var title = request.params.pageId;
        var sanitizedTitle = sanitizedHtml(title);
        var sanitizedDescription = sanitizedHtml(description);
        var list = template.list(request.list);
        var html = template.html(title, list,
          `<h2>${sanitizedTitle}</h2><p>${sanitizedDescription}</p>`,
          `<a href="/topic/create">create</a>
          <a href="/topic/update/${sanitizedTitle}">update</a>
          <form action="/topic/delete_process" method="post">
          <input type="hidden" name ="id" value="${sanitizedTitle}">
          <input type="submit" value="delete">
         </form>`, auth.StatusUI(request,response));
        response.send(html);
      }
    });
  });
  module.exports = router;