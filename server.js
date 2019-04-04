const express  = require('express')
const bodyParser = require('body-parser')
const socket = require('socket.io')
const cors = require('cors')

const app = new express()

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('*', (req, res) => {
    res.redirect("/");
});

const port = process.env.PORT || 4000;

app.listen(port,()=>{
  console.log("Howdy, I am running at PORT " + port)
})

// // Setting up Socket.io

// let io =  socket(server);

// io.on("connection", function(socket){
//   console.log("Socket Connection Established with ID :"+ socket.id)
//   socket.on("chat", async function(chat){
//     chat.created = new Date()
//     let response = await new message(chat).save()
//     socket.emit("chat",chat)
//   })
// })


// app.get('/chat', async (req,res) => {
//   let result = await message.find()
//   res.send(result);
// })