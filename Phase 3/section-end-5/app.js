  let express = require('express');
  let bodyParser = require('body-parser');
  let mongoose = require('mongoose');
  let cors = require('cors');
  let routerCourse = require("./router/course.router");

  let app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api/course", routerCourse);

  let url = "mongodb://localhost:27017/tcsmean";

  mongoose.connect(url).then(res => console.log("Connected...")).catch(error => console.log(error));

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "\\index.html");
  })

  app.use(express.static('html'));


  app.listen(9090, () => console.log("listening on port 9090..."));