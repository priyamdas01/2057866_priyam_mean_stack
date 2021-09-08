let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let mongoose = require('mongoose');
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(bodyParser.json());

let url = "mongodb://localhost:27017/tcsmean";
mongoose.connect(url).then(res => console.log("connected...")).catch(error => console.log(error));

const messageModel = require("./model/message.schema");
app.get("/", (req, res) => {
    res.sendFile(__dirname + "\\index.html");
})

let arr = [];
let mid = 0;

io.on("connection", (socket) => {
    console.log("client has connected");

    socket.on("name", (name) => {
        arr[0] = name;
    })
    socket.on("message", (message) => {
        arr[1] = message;
    })

    socket.on("time", (timestamp) => {
        arr[2] = timestamp;
        console.log("Time: " + timestamp);
        mid++;
        let message = new messageModel({
            _id: mid,
            name: arr[0],
            message: arr[1],
            time: arr[2]
        });

        messageModel.insertMany(message, (err, result) => {
            if (!err) {
                console.log("message stored");
            } else {
                console.log(err);
            }
        });;
    })

    socket.on("disconnect", () => {
        console.log("client has disconnected...")
    })


});

http.listen(9090, () => console.log("listening on port 9090..."));