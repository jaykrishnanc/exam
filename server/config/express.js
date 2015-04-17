var express = require('express'),

    passport = require('passport'),
    //logger = require('morgan'),
    cookieParser=require('cookie-parser'),
    bodyParser=require('body-parser'),
    session = require('express-session');

module.exports = function(app, config) {



        //app.use(logger);
        app.use(cookieParser);
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(session({secret: 'mysecret',
                         saveUninitialized: true,
                         resave: true}));
        app.use(passport.initialize());
        app.use(passport.session());

        app.use(express.static(config.rootPath + '/public'));

}