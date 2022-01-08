const express = require('express')
const expressLayouts =  require('express-ejs-layouts')
const fileUpload = require('express-fileupload')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')


const app = express()
const port = 3000

require('dotenv').config()

app.use(express.urlencoded( {extended:true} ))
app.use(express.static('public'))
app.use(expressLayouts)
app.use('/favicon.ico', express.static('/public/img/favicon.ico'));
// 
app.use(cookieParser('MojaKuhinjaSecure'))
app.use(session({
    secret: 'MojaKuhinjaKljuc',
    saveUninitialized:true,
    resave:true
}))

app.use(flash())
app.use(fileUpload())
// 
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

const routes = require('./server/routes/mkRoutes.js')
app.use('/', routes)
// 

// 404 - 
app.use(function(req,res){
    res.status(404).render('404', {title:'Greska - 404'})
})

app.listen(port, ()=>{
    console.log(`listen on port ${port}`);
})