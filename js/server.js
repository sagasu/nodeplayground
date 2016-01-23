var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')

//node ./js/server.js


var app = express()

app.use(bodyParser.json())
app.post('/api/posts', function (req, res, next) {
   var post = new Post({ username: req.body.username, body: req.body.body })

   post.save( function (err, post) {
      if (err) { return next( err) }
       res.json( 201, post)
   })
})

app.get('/api/posts', function (req, res) {
   res.json([ { username: 'foo', body: 'bar' } ])
 })

app.listen( 3000, function () {
    console.log(' Server listening on', 3000)
})
