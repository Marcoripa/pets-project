const express = require("express");
const app = express();
const { testConnection, syncronizeDb } = require("./models/index");
testConnection();

//Import the Router
const tasks = require("./routes/Tasks");

//Routes
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/tasks", tasks);

//Syncronize Database 
// syncronizeDb()


const port = 4000;
app.listen(port, console.log(`Listening on port: ${port}`));
