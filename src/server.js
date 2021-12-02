/** @format */
const express = require('express');
const cors = require('cors');

const SimpleServerModule = class SimpleServer {
  constructor() {}

  start(config) {
    const app = express();
    //servedfsd

    app.use(express.static(config.folder)); //what folder is served
    
    app.use(cors())

    app.get('/',function(req,res,next){
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    //http server
    app.listen(config.port, function (err) {
      if (err) console.log('Error in server setup');
      console.log(
        'Server listening on Port',
        config.port,
        ' folder ' + config.folder
      );
    });
  }
};

module.exports = SimpleServerModule;
