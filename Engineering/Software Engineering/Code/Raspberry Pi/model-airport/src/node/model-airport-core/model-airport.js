console.log("Loading files...");
const proxySocket = require("ws");
let {PythonShell} = require('python-shell');



let options = {
	pythonOptions: ['-u'],
	mode : 'text'
};
let pyshell = new PythonShell('../../python/QuickConnect.py', options);
const ws = new proxySocket("wss://model-airport.herokuapp.com");



ws.on('open', function open(){
	console.log("Connected to proxy server...");
	ws.send("Model Airport: RPiMAez");
});

ws.on('message', function incoming(msg){
	console.log(msg);
	if(msg.includes("Viewer Disconnected")){
		console.log("Restarting...");
		process.exit(1);
	}
	else{
		pyshell.send(msg);
	}
});

ws.on('close', function close(){
		console.log("Server disconnected...");
		process.exit(1);
});

pyshell.on('message', function(message){
	console.log(message);
	if(message.includes("[QuickConnect]")){
		if(message.includes("Ready?")){
			ws.send("Ready?");
		}
	}
	else{
		ws.send(message);
	}
});

pyshell.on('error', function error(err){
	console.log(err);
	process.exit(1);
});
