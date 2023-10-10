const express= require("express");
const app = express();
const mongoose= require("mongoose");
var MongoClient = require('mongodb').MongoClient;
const User = require("./models/userschema")

// server ROUTING
app.use(express.static(__dirname));

app.get('/', (req,res)=>{
    res.sendFile(__dirname+ "/index.html");
});
// app.get('/#about',middleware, (req,res)=>{
//     res.send("Hello this is about page");
// });
// app.get('/contact', (req,res)=>{
//     res.send("Hello this is contact page");
// });




app.listen(3000,()=>{
    console.log("server started");
});



// database
// cluster->databases->collections->documents
const db= "mongodb+srv://tsking:tsking@cluster0.wpsc13m.mongodb.net/mern?retryWrites=true&w=majority";
mongoose.connect(db).then(()=>{
    console.log("connection sucesfully");
  
}).catch((err)=>{
    console.log(err);
})

app.post("/", async function(req, res){
    console.log(req.body);
   
   
});