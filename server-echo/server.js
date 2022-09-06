const WebSocket = require('ws');// подключение библиотеки

const PORT = 5000; //задаем порт

const wsServer = new WebSocket.Server({
    port: PORT
}); // создание объекта и предача порта виде параметра

wsServer.on('connection', function (socket) { // прослушивание на подключение клиентов
    console.log("A client just connected");

    socket.on('message', function (msg){    //получение сообщения от клиента 
        console.log("Received message from client: " + msg);
        //socket.send("Server " + msg); //ответ сервера

        wsServer.clients.forEach(function (client){  //перебор массива клиента и отправка сообщиния всем клиентам
            client.send("Someone said: " + msg);
        });
    });
   
});
 
//sconsole.log( (new Date()) + "Server is listening on port" + PORT);
