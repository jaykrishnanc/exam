/**
 * Created by JAYA on 16-04-2015.
 */
var path = require('path');
var rootPath = path.normalize(__dirname+'/../../');

module.exports ={
    development:{
        db:'mongodb://dbadmin:dbpass@ds061681.mongolab.com:61681/questiondb',
        rootPath:rootPath,
        port: process.env.PORT || 3003
    },
    production:{
        db:'mongodb://dbadmin:dbpass@ds061681.mongolab.com:61681/questiondb',
        rootPath:rootPath,
        port: process.env.PORT || 80
    }
}
