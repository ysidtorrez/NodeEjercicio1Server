var express=require('express');
var app = express();
var path= require('path');
app.use(express.static(__dirname+'/public'));

app.get('/',function(request,response){
response.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/pagina1',function(request,response){
 response.sendFile(path.join(__dirname+'/Contactos.html'))
})

app.get('/user',function(require,response){
 response.send({username:'joselo',password:'joselo1234'});
})

app.get('/pagina2',function(require,response){
response.sendFile(path.join(__dirname+'/Productos.html'))
})
app.listen(3000,function(){
console.log('servidor corriendo 3000');
})