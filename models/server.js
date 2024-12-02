var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

class Server {

    constructor() {
        this.path = {
            index:'/'
        }

        this.app = express();
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'ejs');
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, 'public')));
    }

    routes(){
        this.app.use(this.path.index, require('../routes/index'));
    }

    listen(){
        this.app.listen(process.env.port, ()=>{
            console.log('servidor funcionando');
        })
    }
}

module.exports = Server;