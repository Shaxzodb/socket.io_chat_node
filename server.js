var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
   res.sendFile(__dirname+'/index.html');});

io.on('connection', function(socket){

   socket.on('msg', function(data){
      //Send message to everyone
       
      io.emit('new_msg', data);

   })
});
http.listen(3000, function(){
   console.log('listening on localhost:3000');
});