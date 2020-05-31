// Require the export of `server.js`
var server = require('./server')

// This is used for inspecting objects
var util = require('util')

// Extract variables that will actually be needed
var io = server.io
var socket = server.socket

// Run this code for each new socket connection
io.on('connection', function(socket) {

	// When `hack` message recieved:
	socket.on('hack', function(data) {
		console.log(socket.id+":",data);
		result = eval(data);
		console.log(result);
		socket.emit('crack',util.format('%j',result));
	});

});