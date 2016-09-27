// Requerimos el modulo http
var http = require("http");

// Creamos una instancia de un servidor con el metodo createServer, y le pasamos un callback que tienes los objetos req
var server = http.createServer(function(req, res) {

  // Aca ponemos unos headers diciendo que la respuesta al request va con el codigo 200, y que es de tipo HTML
  res.writeHead(200, {"Content-Type": "text/html"});

  // Aca falta que efectivamente devuelvas ese HTML con el h1


});

// Aca le decimos a nuestro servidor que escuche a todos los request que llegen al puerto 3000 de nuestro computador
server.listen(3000);

// Esto es solo para saber que el servidor ya esta prendido
console.log("Server listening on port 3000");
