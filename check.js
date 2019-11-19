var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();
	client.connect('ws://localhost:8080/', 'echo-protocal');
	client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});
client.on('connect', function (connection, error) {
	if(error) {
		console.log('asasa')
	}
	connection.on('message', function(message) {
		console.log("LLLLLLLLL", message)
});
	console.log('WebSocket Client Connected---<<<<<<<<');
	function sendNumber() {
		if (connection.connected) {
			//var number = Math.round(Math.random() * 0xFFFFFF);
			connection.send("super");
			//setTimeout(sendNumber, 1000);
		}
	}
	sendNumber();
});