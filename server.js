var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


/*
var io = require('socket.io').listen(80);

io.sockets.on('connection', function(socket){
    console.log("server running at 80 port");
    socket.emit('news', {hello: 'world'});

    socket.on('my other event', function(data){
        console.log(data);
    });
});
*/
/*
var net = require('net');

// 소켓 서버 생성
var server = net.createServer(function (socket) {
    // 연결된 클라이언트 정보 확인
    socket.name = socket.remoteAddress + ":" + socket.remotePort;
    console.log('클라이언트 연결됨 -> ' + socket.name); 

    // 클라이언트로부터 메시지를 받았을 때 발생하는 이벤트
    socket.on('data', function (data) {
        console.log('클라이언트로부터 받은 데이터 : ' + data);
        console.log('시간 : ' + new Date().getTime());
        
        // 받은 메시지를 돌려줌
        socket.write(data + ' from server.');
    });
      
    // 클라이언트 연결이 끊어진 경우
    socket.on('end', function() {
        console.log('클라이언트로부터 연결 끊어짐 -> ' + socket.name);
        console.log('시간 : ' + new Date().getTime());
    });
             
});

// 소켓 서버 실행
var port = 3000;
server.listen(port);
console.log('소켓 서버 실행됨 : ' + port);
*/

