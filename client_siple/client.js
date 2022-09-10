const WebSocket = require('ws');

const serverAddress = "wss:nonstop-glen-veil.glitch.me";
//const serverAddress = "ws://127.0.0.1:5000";


const ws = new WebSocket(serverAddress, {
    headers:{
        "user-agent": "Mozilla"
    }
}); //создание объета и передча адреса
//простой клиент для подключения, до 6 строчки

ws.on('open', function (){
    ws.send("Hello Server");
});// прослушивание на открытие сервера

ws.on('message', function (msg){
    console.log("Received message from server: " + msg);
});