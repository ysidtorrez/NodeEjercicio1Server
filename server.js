var server= require('http');

function arrancaServidor(request,response){
  response.writeHead(200,{'Content-type':'text/html'});
  response.write('<h1>HOLA MUNDO DESDE NODEJS</h1>');
  response.end();
}

server.createServer(arrancaServidor).listen(9090);

console.log('el servidor se inicio correctamente');