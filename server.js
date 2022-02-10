const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const serverless = require("serverless-http");
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();
const router= express.router();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 3471

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

app.use('/.netlify/functions/server', router);

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/router'))
app.use('*',(req,res)=>{res.render('invalid')})

// app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});

module.exports = app;
module.exports.handler = serverless(app);