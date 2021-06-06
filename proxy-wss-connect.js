var protocols = [
    "jwt.token." + secret
];
var url = 'wss://api.example.com/ws-stream';

var client = new W3CWebSocket(url, protocols);

client.onerror = function (err) {
    console.error('Websocket Connection Error', JSON.stringify(err));
    throw err;
};

client.onopen = function () {
    console.info('WebSocket Client Connected');
    client.send("command to update subscribtion settings");
};

client.onclose = function () {
    console.info('echo-protocol Client Closed');
};

client.onmessage = function (e) {
    if (typeof e.data === 'string') {
        console.debug("Received: " + e.data + "");
    }
};
