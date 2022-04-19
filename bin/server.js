const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync(path.resolve(__dirname + '/../sslcert/key.pem'), 'utf8');
var certificate = fs.readFileSync(path.resolve(__dirname + '/../sslcert/certificate.pem'), 'utf8');
var credentials = {key: privateKey, cert: certificate};

let buddyPondPath = path.resolve(__dirname + "/../buddypond")
let appStorePath = path.resolve(__dirname + "/../buddypond-appstore");

const util = require('util');

(async function(){

  const downloader = require('../lib/downloader');
  downloader.clone(function(){
    app.use(cors({
      origin: true
    }));

    // body parser
    app.use(express.json({
      limit: '12mb'
    }));
    app.use(bodyParser.json({
      limit: '12mb'
    }));

    console.log('Mounting appStorePath HTTP path', appStorePath);
    app.use('/desktop/apps', express.static(appStorePath));
    console.log('Mounting static HTTP path', buddyPondPath);
    app.use(express.static(buddyPondPath, {
      extensions: ['html', 'htm']
    }));
  
    app.use(function(req, res){
      // 404 handler
      res.end('My Buddy could not find the Buddy Pond source code! There should be a folder named `buddypond` in the same place you started My Buddy from.');
    })

    var httpServer = http.createServer(app);
    var httpsServer = https.createServer(credentials, app);

    httpServer.listen(80, () => console.log(`Buddy Pond HTTP Server listening on port 80`));  
    httpsServer.listen(443, () => console.log(`Buddy Pond HTTPS Server listening on port 443`));  
  });

})();