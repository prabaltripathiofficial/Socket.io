import express from 'express';
import {Server} from 'socket.io';
import {createServer} from 'node:http';

import dotenv from 'dotenv';

dotenv.config();  // Load .env file


const app = express();// invoking express and basically creating an express app or instance whatever you call it...
app.use(express.static('public'));// this means that basically the static file are lying in the public folder...

// Server creation of http
const server = createServer(app);// creating a http server and that of this express app by using the http module of node
const io = new Server(server,{
     
});
// here through socket.io's Server Class' constructor, I am trying to connect the socket.io's server to my http server

// on is a regular js/node event listener , here it is saying that basically on connection, it will get the socket of the client and will display a message in the console window...



//VERY IMPORTANT

//io represents the Socket.IO server instance, which is responsible for managing all WebSocket connections.
//When you create the Socket.IO server using new Server(server) and assign it to io, it handles the global
//WebSocket connection functionality. It can emit messages to all connected clients, listen for connections, and manage broadcasting.


//socket refers to a specific client connection. Every time a new client connects, a unique socket object is created for that connection.
// Inside the io.on("connection", (socket) => {}) callback, the socket represents that individual client connection. This allows you to handle communication with this specific client, such as emitting and receiving events directly from that client.

const PORT = process.env.PORT || 3000;

io.on("connection", (socket)=>{
    console.log(socket.id, "has joined our server");

    // console.log("Query parameters:", socket.handshake.query);
    // console.log("Auth parameters:", socket.handshake.auth);

    // and after on, emit is the next big event, why so??, The reason is on listens to it , i.e , its an event listener and emit actually sends something to the other side, and it can be used on both client's machine and server's machine but never mind we will be implementing P2P achitecture so, everyone is a client there...

// one thing more to add to it is that emit as an event occurs or if said is written under the callback of io event
//listener 

    //1st argument of emit is the event name...
    // socket.emit("Welcome", [1,2,3]);

    // socket.on("thankyou", (data)=>{
    //     console.log(data);
    // })

    socket.on('messageFromClientToServer',newMessage=>{
        // pass through the message to everyone connected
        io.emit('messageFromServerToAllClients',newMessage)
    })
});


server.listen(PORT);





