//Socket.IO is NOT a WebSocket implementation

// the code that you have written of having a particular socket object and dealing with it on server side cannot make a websocket instance .... you in future and cover the implementation part of websocket through socket.io but but but you cannot create a websocket...

// If you are looking for a plain WebSocket server, please take a look at ws or µWebSockets.js which socket.io actually uses under the hood.


//The Socket.IO codebase is split into two distinct layers:

// the low-level plumbing: what we call Engine.IO, the engine inside Socket.IO
// the high-level API: Socket.IO itself


// So basically socket.io majorly constitute of engine.io and high level api of socket.io itself, as chat developers , we will be using just the high level api, the engine io though is meant for quite core things like transport using long polling and websockets, out of which we will be majorly using web socket and the other it's responsible for is upgrade mechanism that uses the long polling mechanism out of the box and due to this

//While WebSocket is clearly the best way to establish a bidirectional communication, experience has shown that it is not always possible to establish a WebSocket connection, due to corporate proxies, personal firewall, antivirus software...

// From the user perspective, an unsuccessful WebSocket connection can translate in up to 10 seconds of waiting for the realtime application to begin exchanging data. This perceptively hurts user experience.

// To summarize, Engine.IO focuses on reliability and user experience first, marginal potential UX improvements and increased server performance second.

// and engine.io is also responsible for disconnect detection and which means those heartbeat methods are the one which are managed by engine.io....



