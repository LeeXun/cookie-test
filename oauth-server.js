var express = require('express')
var cookieParser = require('cookie-parser')
var path = require('path')
var cors = require('cors')
var app = express()

app.use(cookieParser());
app.use(cors())

app.get('/api/login', function (req, res) {
    console.log(req.get('host'))
    console.log('login')
    res.cookie('http_only_cookie','123123123', { maxAge: 900000, httpOnly: true, domain: 'test1.asd.com' })
    res.cookie('not_http_only_cookie','123123123', { maxAge: 900000, httpOnly: false, domain: 'test1.asd.com' })
    res.send('hello world')
})
app.get('/api/tokens', function(req, res) {
    console.log(req.get('host'))
    console.log(req.cookies)
    res.send(req.cookies)
})
app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(3000)
console.log('server start')