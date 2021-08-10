'use strict';

var path = require('path');
var http = require('http');

var oas3Tools = require('oas3-tools');
var port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

// Initialize the Swagger middleware
http.createServer(app).listen(port, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', port, port);
    console.log('Swagger-ui is available on http://localhost:%d/docs', port);
});

