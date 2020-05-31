var socket = io();

function hack(request) {
	socket.emit('hack',request)
}

socket.on('crack', function(data) {
	if (data == '[Circular]') {
		console.log("Object contains circular references; "+
			"it has been printed to the server console.")
	} else {
		console.log(JSON.parse(data));
	}
});