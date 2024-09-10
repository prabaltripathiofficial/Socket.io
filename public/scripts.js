// io() connects to the socket.io server at the specified URL..fair enough, comments are pretty much helpfull...



    const socket = io("http://localhost:3000", {
        query: {
            meaning: "Lag Gaye"
        },
        auth: {
            secret: "Harry Potter was Snape's son"
        }
    });


// while connecting with the server, we can send query and auth along with this, query will be included in the URL but auth will not be, auth usually carries the crendentials , On the server side they can be accessed using the handshake property of the socket variable that is used for connection in which they both are saved...

//like on server side, on client side too since this socket is kind of like io only just an instance on the server side and due to this particular reason


// socket.on("Welcome", (data)=>{
//     console.log(data);

//     socket.emit("thankyou", [4,5,6]);
// })

socket.on('messageFromServerToAllClients',newMessage=>{
    document.getElementById('messages').innerHTML += `<li>${newMessage}</li>`
})

document.getElementById('messages-form').addEventListener('submit',e=>{
    e.preventDefault()
    const newMessage = document.getElementById('user-message').value
    document.getElementById('user-message').value = ""
    // this socket is sending an event to the server...
    socket.emit('messageFromClientToServer',newMessage)
})