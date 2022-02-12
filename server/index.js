const { Server } = require("socket.io");

const io = new Server(8080);

io.on("connection", (socket) => {
        io.emit('new_user',{
            id:socket.id,
            message:'the new user has joined'
        });
        socket.on("message",(data)=>{
            console.log(data);
            io.emit('user_message',{
                ...data,
            });
        })
});

